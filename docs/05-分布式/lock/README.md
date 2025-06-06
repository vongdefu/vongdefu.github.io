# 分布式锁

## 1. 背景

由于分布式系统中，服务往往是部署到多台服务器上的，这就有可能会产生多台服务器上的服务同时处理一段代码的并发场景；

此外，在一些特殊的业务场景，如秒杀商品、抢票等高并发业务场景下，同一台服务器上的单个服务实例也有可能要在同一时刻处理多个请求，这也可能会造成同一段代码的并发执行；

即：

- `服务多实例并发执行同一段代码；`
- `单实例上并发执行同一段代码；`

总之，分布式锁产生的背景就是`分布式系统中同一段代码被并发执行时会发生不一致性的问题`，正是由于要解决这个问题，才出现了分布式锁的解决方案。

## 2. 分布式锁具有的特点

- `高性能`： 要满足高并发的处理场景，不能加了分布式锁之后让系统的并发执行能力下降了；
- `互斥性`： 高并发执行时，同一时刻只能有一个线程能成功执行加锁的逻辑，这是最基本的要求；
- `可重入`： 即当一个线程获得分布式锁之后，想要再次获得锁的时候，要还能够再次获得；【只有特殊应用场景中才会遇到】
- `自动超时释放`： 这是为了防止有些线程获得锁之后发生故障没有释放锁，导致其他线程一直拿不到锁，导致死锁的情况；
- `支持阻塞场景和非阻塞场景`： 优秀的分布式锁是支持选择阻塞场景和非阻塞场景的；也就是说，如果选择阻塞场景时，没有获得锁的线程会进行阻塞等待锁的释放；如果选择非阻塞场景，那么没有获得锁的线程会执行其他任务，直到锁释放后以某种机制通知到没有获得锁的线程（zookeeper 可以通知没有获得锁的线程来争锁）；

## 基于 MySQL

### 基于数据库字段的唯一性

::: details

```sql
CREATE TABLE database_lock (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`resource` int NOT NULL COMMENT '锁定的资源',
	`description` varchar(1024) NOT NULL DEFAULT "" COMMENT '描述',
	PRIMARY KEY (id),
	UNIQUE KEY uiq_idx_resource (resource)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='数据库分布式锁表';

// 加锁
INSERT INTO database_lock(resource, description) VALUES (1, 'lock');

// 解锁
DELETE FROM database_lock WHERE resource=1;
```

:::

- 基本原理： **利用数据库的唯一性进行资源锁定**，注意： 这里不是 id；
- 实现：
  - 创建一个具有 id 、资源名称或方法名称、 失效时间、其它约束字段等字段的数据库表；
  - 加锁时，就往这张表中添加一条数据，由于某一字段（非主键）具有唯一性，所以当多个线程进行加锁时，只会有一个线程能够操作成功，也就是加锁成功；否则加锁不成功；
  - 释放锁时，直接删除这条数据即可；
- 过程分析
  - 此方案利用了数据库表中某一字段添加了唯一性约束后，只能有一个线程可以操作的原理；相当于给分布式锁的代码添加了唯一性；
  - 当然如果有可重入场景，那就在数据库的表中多加一个计数字段，用来标识锁被加了几次；这又会导致两次加锁的代码不一样（第一次是 insert，后面的都是 update 计数器）
  - 可能需要额外的补偿代码，比如要增加定时器任务定时删除锁；
  - 如果服务宕机没有释放，可以再额外添加定时器定时删除锁；如果定时器服务发生异常，照样会出现死锁的问题；
- 优缺点
  - 很难支持高性能（数据库本身吞吐量小、连接池资源也有限）
  - 需要额外的定时器代码，给系统增加了复杂度；如果定时器服务发生异常，照样会出现死锁的问题；
  - 需要较为复杂的代码来控制可重入性，即便是添加一个计数器字段，但是加锁代码就不一样了；

### 基于 MySQL 悲观锁

要使用悲观锁，我们必须关闭 mysql 数据库的自动提交属性，因为 MySQL 默认使用 autocommit 模式，也就是说，当你执行一个更新操作后，MySQL 会立刻将结果进行提交。set autocommit=0;

比如秒杀某个商品时，要生成一条订单记录，由于业务量很大，属于高并发场景，此时就可以这样操作：

`select … for update`是重点。它是开启排他锁的方式实现了悲观锁，t_goods 表中，id 为 1 的 那条数据就被我们锁定了，其它的事务必须等本次事务提交之后才能执行。

弊端：要注意一些锁的级别，MySQL InnoDB 默认行级锁，而行锁是基于索引的，如果 sql 中没有用到行锁，那么 MySQL 就会使用表锁，把整个表锁住，一定程度上会影响性能。

当业务量不大，但是资源有一些争抢，并且现行系统中不适合引入其它组件或中间件时，可以采用此方案。

### 基于 MySQL 乐观锁

这种方案倾向于认为不太会发生争抢，它会让先来的去执行业务逻辑，后来的去尝试更新。

这种方案大多会给表增加一列，这一列标识版本号，更新时先判断一下版本号是否跟之前获取到的一样，如果一样，就可以提交事务，表示成功加锁；否则表示加锁失败，需要回滚。

这种方案，需要配合应用层的事务管理机制，所以这种方式还要考虑应用层其它业务过程对上面这个过程中相关数据的影响。具体实践中可能使用存储过程的方式，即对外只开放基于此存储过程的数据更新途径，而不是将数据库表直接对外公开。

### 总结

1. 存在单点故障风险；
2. 超时无法自动解锁；
3. 不可重入；
4. 还需要考虑阻塞或非阻塞场景；

## 基于 redis 实现方案

- 早期的演进过程
  - setnx
    - 原理： 早期版本，只有 setnx 可以使用，利用 set 如果存在就 set 不成功的原理，加锁时，setnx 一个 key，释放锁时，把 key 删除即可；
    - 问题： 没有加过期时间，如果某一个获得锁的线程执行任务过程中突然宕机，那这个 key 可能就永远不能被删除了，也就是分布式锁无法被释放；
  - setnx key value px X nx
    - 原理： 利用 setnx 的原子性，加锁时同时给 key 设置一个过期时间，这样可以解决分布式锁无法被释放的问题了；
    - 问题： 释放锁时使用 del 命令删除，但是无法确定删除的锁是否是自己上的锁；
  - 释放锁时比对 key-value 是否是自己设置的
    - 原理： 比对 key 和 value 是否是自己设置的，如果是就进行删除，否则不能删除；
    - 问题： 获取 key 的过程、比对 key 和删除 key 的过程不具有原子性，可能导致误删；
  - Lua 脚本比对+删除
    - 原理： 利用 lua 脚本把多个命令合并执行的原理；
    - 问题： 过期时间设置可能不够合理，假如一个线程执行任务时间超过设置的过期时间，就会产生任务还没有执行完，锁就被释放的问题；

### redlock 实现

- 环境： **多台独立部署的 redis**（如果使用集群方式，整个 redis 就相当于一个 redis 实例，因为其数据是均匀分布的；如果采用哨兵模式，这种方式只是为了提高系统的可用性）
- 原理
  - 当且仅当半数以上节点加锁成功 && 每一个节点加锁使用的时间都小于锁失效的时间 ： 加锁成功
  - 否则： 依次删除所有节点上的锁
  - 放锁： 依次删除所有节点上的锁
- 缺点
  - 理论性的内容，没有具体实现的框架，
  - 手动实现时，需要有独立部署的 redis 集群，部署环境要求过高；
  - 网络延迟对锁的超时释放时间影响过大；
  - 实现起来有点复杂；
  - `不能解决可重入性问题；`
- 总结
  - `生产环境下也不会使用这种方式`

::: details 伪代码实现

```java
int count;
for(int i=0; i<nodeNum; i++){
  if(
    set(key, value, expireTime, nx, node[i]) == 1
    && expireTime > (getLockEndTime-getLockStartTime)
  ){
    count++; // 统计加锁成功的节点个数
  } else
}

if(count > 0.5*nodeNum){
  // 表明加锁成功
  // 执行业务操作

}

// 业务执行完成 或 没有加锁成功，就删除所有key
for(int i=0; i<nodeNum; i++){
  del(key, node[i]);
}

```

:::

### redisson+集群部署方式

- 基本思路： redisson+集群部署方式（最经济实惠，3 主 3 从，满足高可用、高性能）
- redisson 的加锁方式（2 种）
  - 阻塞式分布式锁：
    - 使用方式： lock()，失效时间为 30s；
    - 加锁原理
      - 首次加锁过程（lua 加锁+watchdog 机制），并在加锁成功之后，开启一个定时任务，这个定时任务默认每隔 10s 去刷新锁的过期时间，这样防止业务时间执行过长而释放锁的情况，这个定时任务就是 watchdog 机制
      - 其他线程加锁（循环等待，即阻塞住了）
      - 加过锁的再次加锁（加锁次数加 1）【可重入原理】
    - 释放锁原理
      - 正常情况下：加锁次数减 1，直到为 0 时删除此 key
      - 客户端宕机时： watchdog 与客户端绑定的，客户端宕机，watchdog 也会停止给 key 自动续期，key 就会到时间自动失效；
    - 使用的 redis 的哪个对象？
      - hash
  - 非阻塞式分布锁锁：
    - 使用方式： lock.tryLock(30, 10, TimeUnit.MILLISECONDS);
    - 加锁原理
      - lua 加锁
    - 释放锁原理
      - 超时自动释放
- redisson 的其他内容
  - 读写锁
  - 原子长整型
  - 信号量和可过期性信号量
  - 闭锁
  - 联锁
  - 红锁
  - 公平锁

面试题：

1. 客户端线程在底层是如何实现加锁的？
   （1）先定位 master 节点：
   通过 key 计算出 CRC16 值，再 CRC16 值对 16384 取模得 hash slot，通过这个 hash slot 定位
   redis-cluster 集群中的 master 节点
   （2）加锁：
   加锁逻辑底层是通过 lua 脚本来实现的，如果客户端线程第⼀次去加锁的话，会在 key 对应的
   hash 数据结构中添加线程标识 UUID:ThreadId 1，指定该线程当前对这个 key 加锁⼀次了。
2. 客户端线程是如何维持加锁的？
   当加锁成功后，此时会对加锁的结果设置⼀个监听器，如果监听到加锁成功了，也就是返回的
   结果为空，此时就会在后台通过 watchdog 看⻔狗机制、启动⼀个后台定时任务，每隔 10s 执
   ⾏⼀次，检查如果 key 当前依然存在，就重置 key 的存活时间为 30s。
   维持加锁底层就是通过后台这样的⼀个线程定时刷新存活时间维持的。
3. 相同客户端线程是如何实现可重⼊加锁的？
   第⼀次加锁时，会往 key 对应的 hash 数据结构中设置 UUID:ThreadId 1，表示当前线程对 key 加锁⼀次；
   如果相同线程来再次对这个 key 加锁，只需要将 UUID:ThreadId 持有锁的次数加 1 即可，就为： UUID:ThreadId 2 了，Redisson 底层就是通过这样的数据结构来表示重⼊加锁的语义的。
4. 其他线程加锁失败时，底层是如何实现阻塞的？
   线程加锁失败了，如果没有设置获取锁超时时间，此时就会进⼊⼀个 while 的死循环中，⼀直尝试加锁，直到加锁成功才会返回。
5. 客户端宕机了，锁是如何释放的？
   客户端宕机了，相应的 watchdog 后台定时任务当然也就没了，此时就⽆法对 key 进⾏定时续期，那么当指定存活时间过后，key 就会⾃动失效，锁当然也就⾃动释放了。
6. 客户端如何主动释放持有的锁？
   客户端主动释放锁，底层同样也是通过执⾏ lua 脚本的⽅式实现的，如果判断当前释放锁的 key 存在，并且在 key 的 hash 数据结构中、存在当前线程的加锁信息，那么此时就会扣减当前线程对这个 key 的重⼊锁次数。
   扣减线程的重⼊锁次数之后，如果当前线程在这个 key 中的重⼊锁次数为 0，此时就会直接释放锁，如果当前线程在这个 key 中的重⼊锁次数依然还⼤于 0，此时就直接重置⼀下 key 的存活时间为 30s。
7. 客户端尝试获取锁超时的机制在底层是如何实现的？
   如果在加锁时就指定了尝试获取锁超时的时间，如果获取锁失败，此时就不会⽆⽌境的在 while 死循环中⼀直获取锁，⽽是根据你指定的获取锁超时时间，在这段时间范围内，要是获取不到锁，就会标记为获取锁失败，然后直接返回 false。
8. 客户端锁超时⾃动释放机制在底层⼜是如何实现的？
   如果在加锁时，指定了锁超时时间，那么就算你获取锁成功了，也不会开启 watchdog 的定时任务了，此时直接就将当前持有这把锁的过期时间、设置为你指定的超时时间，那么当你指定的时间到了之后，key 失效被删除了，key 对应的锁相应也就⾃动释放了。

图解 Redis 分布式锁源码-可重入锁的八大机制-上.pdf
图解 Redis 分布式锁源码-可重入锁的八大机制-下.pdf

## zk 实现方案

- 基本原理
  - 利用 ZooKeeper 支持临时顺序节点的特性
  - 利用 watch 事件监听变更消息，可以实现非阻塞式分布式锁
- 实现过程
  - 客户端连接 ZooKeeper，并在 /lock 下创建临时有序子节点，第一个客户端对应的子节点为 /lock/lock01/00000001，第二个为 /lock/lock01/00000002；
  - 其他客户端获取 /lock01 下的子节点列表，判断自己创建的子节点是否为当前列表中序号最小的子节点；
  - 如果是则认为获得锁，执行业务代码，否则通过 watch 事件监听 /lock01 的子节点变更消息，获得变更通知后重复此步骤直至获得锁；
  - 完成业务流程后，删除对应的子节点，释放分布式锁。

### 生产环境实现方案（小公司）

小公司由于资金问题，不能像财大气粗的大公司一样部署 redis 的物理集群，有时候可能就只是一台简单的 redis 实例，那么这时我们应该怎么使用 redis 完成分布式锁呢？

这种方案默认 redis 不会出现问题。

解决方案： redis 单机+jedis

- 加锁时： 使用 setnx 命令，要同时满足以下几点：
  - 一个业务场景使用一个 key，换句话来说就是不同的应用场景要用不同的 key，这样是为了避免在并发时，不同业务场景的锁误删；
  - value 最好是唯一的随机数，这样在删除锁的时候可以进行比对，防止误删；
  - 还要设置过期时间，过期时间要设置的比业务执行时间要稍长，这样防止业务还没有执行完就释放锁的情况发生；
  - 业务执行时还需要对异常情况进行处理，即便是发生异常，也要对锁进行释放；
- 释放锁时：
  - 释放锁时要使用 lua 脚本进行释放，在 lua 脚本中要对 key 和 value 进行比对，比对成功才能删除，lua 脚本是为了保证比对操作和删除操作是原子性；

那这种情况有没有问题呢？当然是有问题的。因为 redis 是单机的，所以当 redis 发生故障无法对外提供服务时，在系统中所有用到分布式锁的场景就都失效了。

### 生产环境实现方案（大公司）

## 总结（面试题）

- 分布式锁产生的原因或背景
- 分布式锁有哪些实现方案
- redis 实现分布式锁的演进过程
- redis 使用 setnx 实现分布式锁时，如果出现锁的假死状况应该如何处理？
  - 所谓假死状态是指业务处理时出现中断，导致获得锁的线程没有自动释放锁，而是因为锁过期自动失效了；
  - 这种情况本质上还是由于没有估算好业务处理时间与锁失效时间的大小关系
    - 可以让锁失效时间稍微长一些；
    - 其实，不做任何操作也可以，因为业务执行完成之后反正是要释放锁的
    - 如果业务处理完成之后还需要获取锁，也是没有关系的，再次申请一下锁即可
- redlock 算法
- redisson 分布式锁的基本原理
- redisson 的其他应用场景
- 什么时候可以选择 zk 作为分布式锁？
- 【开放题】你们项目中分布式锁的技术选型是怎样的？
  - 整个问题可以从几种分布式实现方式的区别、各自的特殊应用场景、团队的学习成本、项目的经济成本与运维成本、社区活跃度等角度回答；

```
Martin 表示，一个分布式系统，更像一个复杂的「野兽」，存在着你想不到的各种异常情况。

这些异常场景主要包括三大块，这也是分布式系统会遇到的三座大山：NPC。

N：Network Delay，网络延迟
P：Process Pause，进程暂停（GC）
C：Clock Drift，时钟漂移

```

## 参考

- [Spring Boot 中使用 Redis 实现分布式锁 ](https://blog.51cto.com/u_15949251/6215363)
- [11 分布式锁有哪些应用场景和实现？](http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E6%88%9845%E8%AE%B2-%E5%AE%8C/11%20%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E5%92%8C%E5%AE%9E%E7%8E%B0%EF%BC%9F.md)
- [12 如何使用 Redis 快速实现分布式锁？](http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E6%88%9845%E8%AE%B2-%E5%AE%8C/12%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Redis%20%E5%BF%AB%E9%80%9F%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%EF%BC%9F.md)
- [Redis 分布式锁｜从青铜到钻石的五种演进方案](https://my.oschina.net/u/4499317/blog/5039486)
- [分布式锁中的王者方案-Redisson](https://www.cnblogs.com/jackson0714/p/redisson.html)
- [Redis 分布式锁到底安全吗？](https://blog.51cto.com/u_15949251/6215363) 注意里面关于分布式锁可能失效的场景。

单机锁：
分布式锁：
分布式锁核心： 借助一个外部系统，让所有线程都去这个外部系统中获取锁。
