# 分布式锁

### 1. 背景

由于分布式系统中，服务往往是部署到多台服务器上的，这就有可能会产生多台服务器上的服务同时处理一段代码的并发场景；

此外，在一些特殊的业务场景，如秒杀商品、抢票等高并发业务场景下，同一台服务器上的单个服务实例也有可能要在同一时刻处理多个请求，这也可能会造成同一段代码的并发执行；

即：

- `服务多实例并发执行同一段代码；`
- `单实例上并发执行同一段代码；`

总之，分布式锁产生的背景就是`分布式系统中同一段代码被并发执行时会发生不一致性的问题`，正是由于要解决这个问题，才出现了分布式锁的解决方案。


### 2. 分布式锁具有的特点

- `高性能`： 要满足高并发的处理场景，不能加了分布式锁之后让系统的并发执行能力下降了；
- `互斥性`： 高并发执行时，同一时刻只能由一个线程来执行加锁的代码，这是最基本的要求；
- `可重入`： 即当一个线程获得分布式锁之后，想要再次获得锁的时候，要还能够再次获得；【只有特殊应用场景中才会遇到】
- `自动超时释放`： 这是为了防止有些线程获得锁之后发生故障没有释放锁，导致其他线程一直拿不到锁，导致死锁的情况；
- `支持阻塞场景和非阻塞场景`： 优秀的分布式锁是支持选择阻塞场景和非阻塞场景的；也就是说，如果选择阻塞场景时，没有获得锁的线程会进行阻塞等待锁的释放；如果选择非阻塞场景，那么没有获得锁的线程会执行其他任务，直到锁释放后以某种机制通知到没有获得锁的线程（zookeeper可以通知没有获得锁的线程来争锁）；


### 3. 实现方案


#### 3.1. 关系型数据库实现方案

- 基本原理： **利用数据库的唯一性进行资源锁定**，例如：主键天然具有唯一性，再比如在某一字段上添加索引，并添加unique约束；
- 实现：【以唯一索引为例】 
      1. 创建一个具有 id 、资源名称或方法名称、 失效时间等字段的数据库表；
      2. 加锁时，就往这张表中添加一条数据，如果添加成功表示加锁成功，否则加锁不成功；
      3. 释放锁时，直接删除这条数据即可
- 过程分析 
   - 当然如果有可重入场景，那就在数据库的表中多加一个计数字段，用来标识锁被加了几次；这又会导致两次加锁的代码不一样（第一次是insert，后面的都是update计数器）
   - 如果服务宕机没有释放，可以再额外添加定时器定时删除锁；如果定时器服务发生异常，照样会出现死锁的问题；
- 优缺点 
   - 很难支持高性能（数据库本身吞吐量小、连接池资源也有限）
   - 需要额外的定时器代码，给系统增加了复杂度；如果定时器服务发生异常，照样会出现死锁的问题；
   - 需要较为复杂的代码来控制可重入性，即便是添加一个计数器字段，但是加锁代码就不一样了；
- 总结 
   - `生产环境下不会使用这种方式`


#### 3.2. redis实现方案

- 演进过程 
   - setnx 
      - 原理： 早期版本，只有setnx可以使用，利用set如果存在就set不成功的原理，加锁时，setnx一个key，释放锁时，把key删除即可；
      - 问题： 没有加过期时间，如果某一个获得锁的线程执行任务过程中突然宕机，那这个key可能就永远不能被删除了，也就是分布式锁无法被释放；
   - setnx key value px X nx 
      - 原理： 利用setnx的原子性，加锁时同时给key设置一个过期时间，这样可以解决分布式锁无法被释放的问题了；
      - 问题： 
         - 释放锁时使用del命令删除，但是无法确定删除的锁是否是自己上的锁；
   - 释放锁时比对key-value是否是自己设置的 
      - 原理： 比对key和value是否是自己设置的，如果是就进行删除，否则不能删除；
      - 问题： 获取key的过程、比对key和删除key的过程不具有原子性，可能导致误删
   - Lua脚本比对+删除 
      - 原理： 利用lua脚本把多个命令合并执行的原理；
      - 问题： 过期时间设置可能不够合理，假如一个线程执行任务时间超过设置的过期时间，就会产生任务还没有执行完，锁就被释放的问题；
- 总结 
   - `在早期分布式锁的版本中会使用这种方案`


#### 3.3. redlock实现

- 环境： **多台独立部署的redis**（如果使用集群方式，整个redis就相当于一个redis实例，因为其数据是均匀分布的；如果采用哨兵模式，这种方式只是为了提高系统的可用性）
- 原理 
   - 当且仅当半数以上节点加锁成功 && 每一个节点加锁使用的时间都小于锁失效的时间 ： 加锁成功
   - 否则： 依次删除所有节点上的锁
   - 放锁： 依次删除所有节点上的锁
- 缺点 
   - 理论性的内容，没有具体实现的框架，
   - 手动实现时，需要有独立部署的redis集群，部署环境要求过高；
   - 网络延迟对锁的超时释放时间影响过大；
   - 实现起来有点复杂；
   - `不能解决可重入性问题；`
- 总结 
   - `生产环境下也不会使用这种方式`

伪代码实现


```
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


#### 3.4. zk实现方案

- 基本原理 
   - 利用 ZooKeeper 支持临时顺序节点的特性
   - 利用 watch 事件监听变更消息，可以实现非阻塞式分布式锁
- 实现过程
   - 客户端连接 ZooKeeper，并在 /lock 下创建临时有序子节点，第一个客户端对应的子节点为 /lock/lock01/00000001，第二个为 /lock/lock01/00000002；
   - 其他客户端获取 /lock01 下的子节点列表，判断自己创建的子节点是否为当前列表中序号最小的子节点；
   - 如果是则认为获得锁，执行业务代码，否则通过 watch 事件监听 /lock01 的子节点变更消息，获得变更通知后重复此步骤直至获得锁；
   - 完成业务流程后，删除对应的子节点，释放分布式锁。


首先添加Maven依赖：

```
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-framework</artifactId>
    <version>4.3.0</version>
</dependency>
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-recipes</artifactId>
    <version>4.3.0</version>
</dependency>

```
还是一样在需要加锁的地方进行加锁：

```
@PostMapping("/purchase")
    public boolean purchaseCommodityInfo(@RequestParam(name = "commodityId") String commodityId,
                                         @RequestParam(name = "number") Integer number) throws Exception {
        boolean bool = false;
        //设置重试策略
        RetryPolicy retryPolicy = new ExponentialBackoffRetry(1000, 3);
        CuratorFramework client = CuratorFrameworkFactory.newClient("127.0.0.1:2181", retryPolicy);
        // 启动客户端
        client.start();
        InterProcessMutex mutex = new InterProcessMutex(client, "/locks");
        try {
            //加锁
            if (mutex.acquire(3, TimeUnit.SECONDS)) {
                //调用抢购秒杀service方法
                bool = commodityInfoService.purchaseCommodityInfo(commodityId, number);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //解锁
            mutex.release();
            client.close();
        }
        return bool;
    }

```


// todo需要完善


#### 3.5. memercached实现方案

// todo


#### 3.6. 生产环境实现方案（小公司）

小公司由于资金问题，不能像财大气粗的大公司一样部署redis的物理集群，有时候可能就只是一台简单的redis实例，那么这时我们应该怎么使用redis完成分布式锁呢？

这种方案默认redis不会出现问题。

解决方案： redis单机+jedis

- 加锁时： 使用setnx命令，要同时满足以下几点： 
   - 一个业务场景使用一个key，换句话来说就是不同的应用场景要用不同的key，这样是为了避免在并发时，不同业务场景的锁误删；
   - value最好是唯一的随机数，这样在删除锁的时候可以进行比对，防止误删；
   - 还要设置过期时间，过期时间要设置的比业务执行时间要稍长，这样防止业务还没有执行完就释放锁的情况发生；
   - 业务执行时还需要对异常情况进行处理，即便是发生异常，也要对锁进行释放；
- 释放锁时： 
   - 释放锁时要使用lua脚本进行释放，在lua脚本中要对key和value进行比对，比对成功才能删除，lua脚本是为了保证比对操作和删除操作是原子性；

那这种情况有没有问题呢？当然是有问题的。因为redis是单机的，所以当redis发生故障无法对外提供服务时，在系统中所有用到分布式锁的场景就都失效了。


#### 3.7. 生产环境实现方案（大公司）

- 基本思路： redisson+集群部署方式（最经济实惠，3主3从，满足高可用、高性能）
- redisson的加锁方式（2种） 
   - 阻塞式分布式锁： 
      - 使用方式： lock()，失效时间为30s；
      - 加锁原理 
         - 首次加锁过程（lua加锁+watchdog机制），并在加锁成功之后，开启一个定时任务，这个定时任务默认每隔10s去刷新锁的过期时间，这样防止业务时间执行过长而释放锁的情况，这个定时任务就是watchdog机制
         - 其他线程加锁（循环等待）
         - 加过锁的再次加锁（加锁次数加1）【可重入原理】
      - 释放锁原理 
         - 正常情况下：加锁次数减1，直到为0时删除改key
         - 客户端宕机时： watchdog与客户端绑定的，客户端宕机，watchdog也会停止给key自动续期，key就会到时间自动失效；
      - 使用的redis的哪个对象？ 
         - hash
   - 非阻塞式分布锁锁： 
      - 使用方式： tryLock()
      - 加锁原理 
         - lua加锁 +
      - 释放锁原理 
         - 超时自动释放
- redisson的其他内容 
   - 读写锁
   - 原子长整型
   - 信号量和可过期性信号量
   - 闭锁
   - 联锁
   - 红锁
   - 公平锁


### 4. 总结（面试题）

- 分布式锁产生的原因或背景
- 分布式锁有哪些实现方案
- redis实现分布式锁的演进过程
- redis使用setnx实现分布式锁时，如果出现锁的假死状况应该如何处理？ 
   - 所谓假死状态是指业务处理时出现中断，导致获得锁的线程没有自动释放锁，而是因为锁过期自动失效了；
   - 这种情况本质上还是由于没有估算好业务处理时间与锁失效时间的大小关系 
      - 可以让锁失效时间稍微长一些；
      - 其实，不做任何操作也可以，因为业务执行完成之后反正是要释放锁的
      - 如果业务处理完成之后还需要获取锁，也是没有关系的，再次申请一下锁即可
- redlock算法
- redisson分布式锁的基本原理
- redisson的其他应用场景
- 什么时候可以选择zk作为分布式锁？
- 【开放题】你们项目中分布式锁的技术选型是怎样的？ 
   - 整个问题可以从几种分布式实现方式的区别、各自的特殊应用场景、团队的学习成本、项目的经济成本与运维成本、社区活跃度等角度回答；


```
Martin 表示，一个分布式系统，更像一个复杂的「野兽」，存在着你想不到的各种异常情况。

这些异常场景主要包括三大块，这也是分布式系统会遇到的三座大山：NPC。

N：Network Delay，网络延迟
P：Process Pause，进程暂停（GC）
C：Clock Drift，时钟漂移

```


### 5. 参考

- ![](https://gw.alipayobjects.com/os/lib/twemoji/11.2.0/2/svg/2b50.svg#height=18&id=qXb33&originHeight=150&originWidth=150&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=18)
- [Spring Boot中使用Redis实现分布式锁 ](https://blog.51cto.com/u_15949251/6215363)
- [11 分布式锁有哪些应用场景和实现？](http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E6%88%9845%E8%AE%B2-%E5%AE%8C/11%20%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E5%92%8C%E5%AE%9E%E7%8E%B0%EF%BC%9F.md)
- [12 如何使用 Redis 快速实现分布式锁？](http://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E6%88%9845%E8%AE%B2-%E5%AE%8C/12%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20Redis%20%E5%BF%AB%E9%80%9F%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%EF%BC%9F.md)
- [Redis 分布式锁｜从青铜到钻石的五种演进方案](https://my.oschina.net/u/4499317/blog/5039486)
- [分布式锁中的王者方案-Redisson](https://www.cnblogs.com/jackson0714/p/redisson.html)
- ![](https://gw.alipayobjects.com/os/lib/twemoji/11.2.0/2/svg/2b50.svg#height=18&id=Mjb6V&originHeight=150&originWidth=150&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=18)
- [Redis分布式锁到底安全吗？](https://blog.51cto.com/u_15949251/6215363) 注意里面关于分布式锁可能失效的场景。


单机锁：
分布式锁：
分布式锁核心： 借助一个外部系统，让所有线程都去这个外部系统中获取锁。

