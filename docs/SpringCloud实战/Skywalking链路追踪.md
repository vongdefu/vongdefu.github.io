## TODO

自启动

## skywalking

skywalking 是一个优秀的国产开源框架，2015 年由个人吴晟（华为开发者）开源 ， 2017 年加入 Apache 孵化器。短短两年就被 Apache 收入麾下，实力可见一斑。

skywalking 支持 dubbo，SpringCloud，SpringBoot 集成，代码无侵入，通信方式采用 GRPC，性能较好，实现方式是 java 探针，支持告警，支持 JVM 监控，支持全局调用统计等等，功能较完善

与 zipkin 对比：

skywalking 采用字节码增强的技术实现代码无侵入，zipKin 代码侵入性比较高
skywalking 功能比较丰富，报表统计，UI 界面更加人性化

> 如果是新的架构，建议优先选择 skywalking。

下载地址： https://archive.apache.org/dist/skywalking/8.7.0/
参考： https://juejin.cn/post/7049920780569673736

在启动参数指定即可，命令如下：

-javaagent:/Applications/devtools/apache-skywalking-apm-bin/agent/skywalking-agent.jar
-Dskywalking.agent.service_name=skywalking-gateway
-Dskywalking.collector.backend_service=192.168.0.150:11800

-javaagent:/Applications/devtools/apache-skywalking-apm-bin/agent/skywalking-agent.jar
-Dskywalking.agent.service_name=skywalking-order
-Dskywalking.collector.backend_service=192.168.0.150:11800

-javaagent:/Applications/devtools/apache-skywalking-apm-bin/agent/skywalking-agent.jar
-Dskywalking.agent.service_name=skywalking-product
-Dskywalking.collector.backend_service=192.168.0.150:11800

## 报警信息

250901
未完成实验
