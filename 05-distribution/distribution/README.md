---
order: 1
dir: 
  link: true
---

# 分布式系统

1. 分布式系统的迭代过程（单体应用-分布式应用）
2. 分布式系统的特点： 分布性、对等性、自治性、并发性；
3. 分布式系统的挑战： **由于已经有非常成熟的解决方案，这些成熟的方案已经帮我们屏蔽掉底层所遇到的核心问题，因此我们只需要解决应用层面上的问题即可。事实上，我们只需要解决我们自己项目应用层面的问题和使用这些已有成熟方案的使用上的问题即可。**
   1. 两个讨论的方向： 
      1. 一个是应用层面考虑（功能适用性和经济适用性）
         1. 功能适用性： 回答能不能满足需求的问题。
            1. 性能需求： 三高（高可用、高性能、高并发）、可扩展、易维护；相关衡量指标：QPS、TPS、SLA、资源使用情况（IO、CPU、内存、磁盘）、可监控、可观测、可追踪；
            2. 功能需求：缓存、事务、ID、锁……
         2. 经济适用性： 回答花多少钱的问题；人力成本（人+时间）、资源成本；
      2. 一个是底层核心层面（NPC）；
      3. 本质上讲是 NPC，具体表现（网络延迟、消息丢失与无序、三态、）；实际上由于我们多是应用层，所以我们要考虑的是 1. 解决应用层所遇到的问题（网络三态、延迟、消息丢失与无序、脑裂问题）；2. 了解中间件系统的解决方案；
   2. 本质上讲是 NPC，具体表现（网络延迟、消息丢失与无序、三态、）；实际上由于我们多是应用层，所以我们要考虑的是应用层所遇到的问题（网络三态、延迟、消息丢失与无序、）
4. 分布式系统基本性能需求和相关指标
   1. 性能需求： 三高（高可用、高性能、高并发）、可扩展、易维护；
   2. 相关指标：QPS、TPS、SLA、资源使用情况（IO、CPU、内存、磁盘）、可扩展性、可维护性；
5. 分布式系统基础理论：
   1. CAP
      1. 三特性的解决方案
         1. 一致性：XA方案、Paxos算法、ZAB算法、Raft算法、一致性 Hash 算法
         2. 可用性：评判标准、心跳检测、异地多活和同城双活、gossip、隔离、限流、负载均衡
         3. 分区容错：日志复制、主备、互备、集群
   2. BASE
6. 分布式系统应解决的问题：
   1. 应用层面（锁、缓存、事务、 消息、 ID、Job、会话）
   2. 治理层面（负载均衡、限流、注册与发现、RPC、监控和报警、链路追踪）


- `分布式` 
   - `ZK相关内容`，数据存储、应用场景、与kafka的关系、相关面试题
   - 分布式系统的问题
   - 基本理论（CAP、Base）
   - 一致性C，XA方案、Paxos算法、ZAB算法、Raft算法、一致性 Hash 算法
   - 可用性A，评判标准、心跳检测、异地多活和同城双活、gossip、隔离、限流、负载均衡
   - 容错性P，日志复制、主备、互备、集群
   - CP与AP权衡问题，WARO 机制、Quorum 机制
   - 分布式缓存
   - 分布式事务（背景、实现方式、优缺点分析、具体实现【seata原理】）
   - 分布式锁（产生背景、实现方式、优缺点分析）
   - 分布式ID
   - 分布式消息
   - 分布式调度
   - 分布式服务
   - 分布式搜索
   - 分布式会话： 发展历程、各自过程中遇到的问题及解决方案、分布式会话实现方案
   - 高可用的理解
   - 高并发的理解
   - 分库分表
   - 集群： 
      - 负载均衡
      - 一致性Hash等

两大块：

1. 我们自己写的代码，应该怎么实现我们的需求：应用层面（锁、缓存、事务、 消息、 ID、Job、会话）
2. 我们用的中间件是怎么实现我们的需求的：治理层面（负载均衡、限流与熔断、注册与发现、RPC、监控和报警、链路追踪）


- [基础理论](./theory.md)
- [分布式锁](./lock.md)
- [分布式事务](./transaction.md)
- [分布式 ID](./id.md)
- [分布式缓存](./cache.md)
- [分布式消息](./message.md)
- [分布式存储（分库分表）](./duration.md)
- [布式会话](./session.md)
- [分布式 Job](./job.md)



## 10. 参考

1. [24.分布式系统的困境与NPC性别研究](https://zhuanlan.zhihu.com/p/365986593)
2. [《数据密集型应用系统设计》第八章《分布式系统的挑战》笔记 - codedump的网络日志](https://www.codedump.info/post/20190405-ddia-chapter08-the-trouble-with-distributed-system/)
3. [分布式系统的4种典型问题](https://www.jianshu.com/p/e17c3738cca5)
4. [分布式系统的5大特征](https://www.jianshu.com/p/f1daddc6bb13)
5. [分布式系统遇到的十个问题-分布式系统的定义](https://www.51cto.com/article/716232.html)
6. [24.分布式系统的困境与NPC性别研究](https://zhuanlan.zhihu.com/p/365986593)
7. 



