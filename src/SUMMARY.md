# SUMMARY

- [前言](./README.md)

# CS基础

- [前端](./01-csbase/frontend.md)
- [数据结构与算法](./01-csbase/dsa.md)
- [计算机网络](./01-csbase/network/README.md)
  - [HTTP](./01-csbase/network/01-http.md)
  - [TCP](./01-csbase/network/02-tcp.md)
  - [网络层](./01-csbase/network/03-networklayer.md)
  - [网络接口层](./01-csbase/network/04-networkinterface.md)
  - [附录一](./01-csbase/network/99-Appendix01.md)
  - [附录二](./01-csbase/network/99-Appendix02.md)
- [设计模式](./01-csbase/designPattern/README.md)
  - [单例模式](./01-csbase/designPattern/ch01-singleton.md)
  - [建造模式](./01-csbase/designPattern/ch02-build.md)
  - [模板方法模式](./01-csbase/designPattern/ch03-template-method.md)
  - [策略模式](./01-csbase/designPattern/ch04-strategy.md)
  - [责任链模式](./01-csbase/designPattern/ch05-responsibility-chain.md)

# Java

- [Java基础](./02-java/javacore/README.md)
  - [基础](./02-java/javacore/ch01-basic.md)
  - [集合](./02-java/javacore/ch02-collection.md)
  - [注解](./02-java/javacore/ch03-annotation.md)
  - [泛型](./02-java/javacore/ch04-type.md)
  - [IO](./02-java/javacore/ch05-io.md)
  - [异常](./02-java/javacore/ch06-exception.md)
- [J.U.C](./02-java/juc/README.md)
  - [背景](./02-java/juc/ch01-background.md)
  - [关键字](./02-java/juc/ch02-keyword.md)
  - [锁](./02-java/juc/ch03-lock.md)
  - [线程池](./02-java/juc/ch04-threadandthreadpool.md)
  - [Unsafe工具类](./02-java/juc/ch05-unsafe.md)
  - [LockSupport](./02-java/juc/ch06-locksupport.md)
  - [AQS](./02-java/juc/ch07-aqs.md)
- [JVM](./02-java/jvm/README.md)
  - [概览](./02-java/jvm/ch01-overview.md)
  - [编译器与字节码](./02-java/jvm/ch02-compileandbytecode.md)
  - [类加载器](./02-java/jvm/ch03-classload.md)
  - [线程模型](./02-java/jvm/ch04-threadmode.md)
  - [运行时](./02-java/jvm/ch05-runtime.md)
  - [执行引擎](./02-java/jvm/ch06-engine.md)
  - [垃圾回收](./02-java/jvm/ch07-garbagecollection.md)
  - [Hotpot垃圾回收器](./02-java/jvm/ch08-hotspot.md)
  - [工具](./02-java/jvm/ch09-tools.md)
  - [调优](./02-java/jvm/ch10-promote.md)

# 框架

- [Vagrant](./03-framework/vagrant.md)
- [Docker](./03-framework/docker.md)
- [Maven](./03-framework/maven.md)
- [Spring](./03-framework/spring.md)
- [SpringBoot](./03-framework/springboot.md)
- [SpringCloud](./03-framework/springcloud/README.md)
  - [Eureka](./03-framework/springcloud/ch01-eureka.md)
  - [Apollo](./03-framework/springcloud/ch02-apollo.md)
  - [Nacos注册中心](./03-framework/springcloud/ch03-nacos-register.md)
  - [Nacos配置中心](./03-framework/springcloud/ch04-nacos-config.md)
  - [OpenFeign](./03-framework/springcloud/ch05-openfeign.md)
  - [Gateway网关](./03-framework/springcloud/ch06-gateway.md)
  - [sentinel](./03-framework/springcloud/ch07-sentinel.md)
  - [Seata](./03-framework/springcloud/ch08-seata.md)
  - [全局异常](./03-framework/springcloud/ch99-appendix01-globalresponseandnacosexception.md)
  - [依赖管理](./03-framework/springcloud/ch99-appendix02-managedependence.md)
  - [Saas租户实战](./03-framework/springcloud/ch99-appendix03-una_saas.md)
- [软件](./03-framework/software/README.md)
  - [Windows](./03-framework/software/windows.md)
  - [Mac](./03-framework/software/mac.md)
  - [Centos](./03-framework/software/centos.md)
  - [JDK](./03-framework/software/jdk.md)
  - [Git](./03-framework/software/git.md)
  - [vscode](./03-framework/software/vscode.md)

# 中间件

- [Redis](./04-middleware/redis/README.md)
  - [Redis对象系统](./04-middleware/redis/ch01-redisobj.md)
  - [数据类型](./04-middleware/redis/ch02-datatype.md)
  - [高级特性](./04-middleware/redis/ch03-greatfeature.md)
  - [内存管理](./04-middleware/redis/ch04-memorymanage.md)
  - [持久化机制](./04-middleware/redis/ch05-durationtodisk.md)
  - [运行模式](./04-middleware/redis/ch06-running-mode.md)
  - [产品运维](./04-middleware/redis/ch07-product-devops.md)
  - [最佳实践](./04-middleware/redis/ch08-best-pratice.md)
  - [缓存实战](./04-middleware/redis/ch09-appendix01-local-distribute-cache-pratice.md)
  - [基准测试](./04-middleware/redis/ch09-appendix02-benchmark.md)
- [MySql](./04-middleware/mysql.md)
- [MQ](./04-middleware/mq.md)
- [Nginx](./04-middleware/nginx.md)
- [ES](./04-middleware/es.md)

# 分布式

- [API](./05-distribution/api.md)
- [分布式](./05-distribution/distribution/README.md)
  - [基础理论](./05-distribution/distribution/theory.md)
  - [分布式锁](./05-distribution/distribution/lock.md)
  - [分布式事务](./05-distribution/distribution/transaction.md)
  - [分布式 ID](./05-distribution/distribution/id.md)
  - [分布式缓存](./05-distribution/distribution/cache.md)
  - [分布式消息](./05-distribution/distribution/message.md)
  - [分布式存储（分库分表）](./05-distribution/distribution/duration.md)
  - [布式会话](./05-distribution/distribution/session.md)
  - [分布式 Job](./05-distribution/distribution/job.md)

# 软件质量管理



# 工程设计
