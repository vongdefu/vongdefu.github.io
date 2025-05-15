# 超详细的 RabbitMQ 入门

原创 牛九木 java 技术爱好者

_2020 年 07 月 27 日 11:30_

## 思维导图

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640.webp)

## 一、什么是消息队列

**消息**指的是两个应用间传递的数据。数据的类型有很多种形式，可能只包含文本字符串，也可能包含嵌入对象。

**“消息队列(Message Queue)”是在消息的传输过程中保存消息的容器**。在消息队列中，通常有生产者和消费者两个角色。生产者只负责发送数据到消息队列，谁从消息队列中取出数据处理，他不管。消费者只负责从消息队列中取出数据处理，他不管这是谁发送的数据。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B1%5D.webp)

## 二、为什么使用消息队列

主要有三个作用：

- **解耦**。如图所示。假设有系统 B、C、D 都需要系统 A 的数据，于是系统 A 调用三个方法发送数据到 B、C、D。这时，系统 D 不需要了，那就需要在系统 A 把相关的代码删掉。假设这时有个新的系统 E 需要数据，这时系统 A 又要增加调用系统 E 的代码。为了降低这种强耦合，就可以使用 MQ，**系统 A 只需要把数据发送到 MQ，其他系统如果需要数据，则从 MQ 中获取即可**。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B2%5D.webp)

- 异步。如图所示。一个客户端请求发送进来，系统 A 会调用系统 B、C、D 三个系统，同步请求的话，响应时间就是系统 A、B、C、D 的总和，也就是 800ms。**如果使用 MQ，系统 A 发送数据到 MQ，然后就可以返回响应给客户端，不需要再等待系统 B、C、D 的响应，可以大大地提高性能**。对于一些非必要的业务，比如发送短信，发送邮件等等，就可以采用 MQ。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B3%5D.webp)

- 削峰。如图所示。这其实是 MQ 一个很重要的应用。假设系统 A 在某一段时间请求数暴增，有 5000 个请求发送过来，系统 A 这时就会发送 5000 条 SQL 进入 MySQL 进行执行，MySQL 对于如此庞大的请求当然处理不过来，MySQL 就会崩溃，导致系统瘫痪。**如果使用 MQ，系统 A 不再是直接发送 SQL 到数据库，而是把数据发送到 MQ，MQ 短时间积压数据是可以接受的，然后由消费者每次拉取 2000 条进行处理，防止在请求峰值时期大量的请求直接发送到 MySQL 导致系统崩溃**。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B4%5D.webp)

## 三、RabbitMQ 的特点

RabbitMQ 是一款使用 Erlang 语言开发的，实现 AMQP(高级消息队列协议)的开源消息中间件。首先要知道一些 RabbitMQ 的特点，官网可查：

- 可靠性。支持持久化，传输确认，发布确认等保证了 MQ 的可靠性。
- 灵活的分发消息策略。这应该是 RabbitMQ 的一大特点。在消息进入 MQ 前由 Exchange(交换机)进行路由消息。分发消息策略有：简单模式、工作队列模式、发布订阅模式、路由模式、通配符模式。
- 支持集群。多台 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker。
- 多种协议。RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。
- 支持多种语言客户端。RabbitMQ 几乎支持所有常用编程语言，包括 Java、.NET、Ruby 等等。
- 可视化管理界面。RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker。
- 插件机制。RabbitMQ 提供了许多插件，可以通过插件进行扩展，也可以编写自己的插件。

## 四、RabbitMQ 初の体验

### 4.1 安装 RabbitMQ (Win10 系统)

由于只是学习需要，所以安装在 win10 系统，就懒得开虚拟机。如果用 Linux 系统安装的话，我建议用 Docker 拉一个 RabbitMQ 的镜像下来，这样会方便一点。

#### 4.1.1 安装 erLang 语言，配置环境变量

首先到 erlang 官网下载 win10 版安装包。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B5%5D.webp)

下载完之后，就得到这个东西：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B6%5D.webp)

接着双击安装，一直点 next(下一步)就行了，安装完之后，配置环境变量。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B7%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B8%5D.webp)

使用 cmd 命令，输入 erl -version 验证：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B9%5D.webp)

#### 4.1.2 安装 RabbitMQ 服务端

在 RabbitMQ 的 gitHub 项目中，下载 window 版本的服务端安装包。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B10%5D.webp)

下载后，就得到这个东西：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B11%5D.webp)

接着到双击安装，一直点下一步安装即可，安装完成后，找到安装目录：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B12%5D.webp)

在此目录下打开 cmd 命令，输入 rabbitmq-plugins enable rabbitmq_management 命令安装管理页面的插件：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B13%5D.webp)

然后双击 [rabbitmq-server.bat 启动脚本，然后打开服务管理可以看到 RabbitMQ 正在运行：](http://rabbitmq-server.bat启动脚本，然后打开服务管理可以看到RabbitMQ正在运行：)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B14%5D.webp)

这时，打开浏览器输入 `http://localhost:15672`，账号密码默认是：guest/guest

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B15%5D.webp)

到这一步，安装就大功告成了！

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B16%5D.webp)

### 4.2 永远的 Hello Word

服务端搭建好了之后肯定要用客户端去操作，接下来就用 Java 做一个简单的 HelloWord 演示。

因为我用的是 SpringBoot，所以在**生产者这边**加入对应的 starter 依赖即可：

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

一般需要创建一个公共项目 common，共享一些配置，比如队列主题，交换机名称，路由匹配键名称等等。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640.png)

首先在 [application.yml 文件加上 RabbitMQ 的配置信息：](http://application.yml文件加上RabbitMQ的配置信息：)

```xml
spring:
  rabbitmq:
    host: 127.0.0.1
    port: 5672
    username: guest
    password: guest
```

然后在生产者这边，加上 common 包的 maven 依赖，然后创建一个 Direct 交换机以及队列的配置类：

```java
@Configuration
public class DirectRabbitConfig  {
    @Bean
    public Queue rabbitmqDemoDirectQueue()  {
        /**
         * 1、name:    队列名称
         * 2、durable: 是否持久化
         * 3、exclusive: 是否独享、排外的。如果设置为true，定义为排他队列。则只有创建者可以使用此队列。也就是private私有的。
         * 4、autoDelete: 是否自动删除。也就是临时队列。当最后一个消费者断开连接后，会自动删除。
         * */
        return new Queue(RabbitMQConfig.RABBITMQ_DEMO_TOPIC, true, false, false);
    }
    
    @Bean
    public DirectExchange rabbitmqDemoDirectExchange()  {
        //Direct交换机
        return new DirectExchange(RabbitMQConfig.RABBITMQ_DEMO_DIRECT_EXCHANGE, true, false);
    }

    @Bean
    public Binding bindDirect()  {
        //链式写法，绑定交换机和队列，并设置匹配键
        return BindingBuilder
                //绑定队列
                .bind(rabbitmqDemoDirectQueue())
                //到交换机
                .to(rabbitmqDemoDirectExchange())
                //并设置匹配键
                .with(RabbitMQConfig.RABBITMQ_DEMO_DIRECT_ROUTING);
    }
}
```

然后再创建一个发送消息的 Service 类：

```java
@Service
public class RabbitMQServiceImpl implements RabbitMQService  {
    //日期格式化
    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Resource
    private RabbitTemplate rabbitTemplate;

    @Override
    public String sendMsg(String msg) throws Exception  {
        try {
            String msgId = UUID.randomUUID().toString().replace("-", "").substring(0, 32);
            String sendTime = sdf.format(new Date());
            Map<String, Object> map = new HashMap<>();
            map.put("msgId", msgId);
            map.put("sendTime", sendTime);
            map.put("msg", msg);
            rabbitTemplate.convertAndSend(RabbitMQConfig.RABBITMQ_DEMO_DIRECT_EXCHANGE, RabbitMQConfig.RABBITMQ_DEMO_DIRECT_ROUTING, map);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
```

然后根据业务放在需要用的地方，比如定时任务，或者接口。我这里就简单一点使用 Controller 层进行发送：

```java
@RestController
@RequestMapping("/mall/rabbitmq")
public class RabbitMQController  {
    @Resource
    private RabbitMQService rabbitMQService;
    /**
     * 发送消息
     * @author java技术爱好者
     */
    @PostMapping("/sendMsg")
    public String sendMsg(@RequestParam(name = "msg") String msg) throws Exception  {
        return rabbitMQService.sendMsg(msg);
    }
}
```

生产者写完之后，就写消费者端的代码，消费者很简单。maven 依赖，yml 文件配置和生产者一样。只需要创建一个类，@RabbitListener 注解写上监听队列的名称，如图所示：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B17%5D.webp)

**这里有个小坑**，一开始 RabbitMQ 服务器里还没有创建队列：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B18%5D.webp)

这时如果启动消费者，会报错：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B19%5D.webp)

要先启动生产者，发送一条消息：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B20%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B21%5D.webp)

最后再启动消费者，进行消费：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B22%5D.webp)

这时候就会持续监听队列的消息，只要生产者发送一条消息到 MQ，消费者就消费一条。我这里尝试发送 4 条：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B23%5D.webp)

由于队列不存在，启动消费者报错的这个问题。最好的方法是生产者和消费者都尝试创建队列，怎么写呢，有很多方式，我这里用一个相对简单一点的：

生产者的配置类加点东西：

```java
//实现BeanPostProcessor类，使用Bean的生命周期函数
@Component
public class DirectRabbitConfig implements BeanPostProcessor  {
    //这是创建交换机和队列用的rabbitAdmin对象
    @Resource
    private RabbitAdmin rabbitAdmin;
    
    //初始化rabbitAdmin对象
    @Bean
    public RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory)  {
        RabbitAdmin rabbitAdmin = new RabbitAdmin(connectionFactory);
        // 只有设置为 true，spring 才会加载 RabbitAdmin 这个类
        rabbitAdmin.setAutoStartup(true);
        return rabbitAdmin;
    }
    
    //实例化bean后，也就是Bean的后置处理器
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException  {
        //创建交换机
        rabbitAdmin.declareExchange(rabbitmqDemoDirectExchange());
        //创建队列
        rabbitAdmin.declareQueue(rabbitmqDemoDirectQueue());
        return null;
    }
}
```

这样启动生产者就会自动创建交换机和队列，不用等到发送消息才创建。

消费者需要加一点代码：

```java
@Component
//使用queuesToDeclare属性，如果不存在则会创建队列
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.RABBITMQ_DEMO_TOPIC))
public class RabbitDemoConsumer  {
    //...省略
}
```

这样，无论生产者还是消费者先启动都不会出现问题了~

> 代码地址： https://github.com/yehongzhi/mall

## 五、RabbitMQ 中的组成部分

从上面的 HelloWord 例子中，我们大概也能体验到一些，就是 RabbitMQ 的组成，它是有这几部分：

- Broker：消息队列服务进程。此进程包括两个部分：Exchange 和 Queue。
- Exchange：消息队列交换机。**按一定的规则将消息路由转发到某个队列**。
- Queue：消息队列，存储消息的队列。
- Producer：消息生产者。生产方客户端将消息同交换机路由发送到队列中。
- Consumer：消息消费者。消费队列中存储的消息。

这些组成部分是如何协同工作的呢，大概的流程如下，请看下图：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B24%5D.webp)

- 消息生产者连接到 RabbitMQ Broker，创建 connection，开启 channel。
- 生产者声明交换机类型、名称、是否持久化等。
- 生产者发送消息，并指定消息是否持久化等属性和 routing key。
- exchange 收到消息之后，**根据 routing key 路由到跟当前交换机绑定的相匹配的队列**里面。
- 消费者监听接收到消息之后开始业务处理。

## 六、Exchange 的四种类型以及用法

从上面的工作流程可以看出，实际上有个关键的组件 Exchange，因为**消息发送到 RabbitMQ 后首先要经过 Exchange 路由才能找到对应的 Queue**。

实际上 Exchange 类型有四种，根据不同的类型工作的方式也有所不同。在 HelloWord 例子中，我们就使用了比较简单的**Direct Exchange**，翻译就是直连交换机。其余三种分别是：**Fanout exchange、Topic exchange、Headers exchange**。

### 6.1 Direct Exchange

见文知意，直连交换机意思是此交换机需要绑定一个队列，要求**该消息与一个特定的路由键完全匹配**。简单点说就是一对一的，点对点的发送。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B25%5D.webp)

完整的代码就是上面的 HelloWord 的例子，不再重复代码。

### 6.2 Fanout exchange

这种类型的交换机需要将队列绑定到交换机上。**一个发送到交换机的消息都会被转发到与该交换机绑定的所有队列上**。很像子网广播，每台子网内的主机都获得了一份复制的消息。简单点说就是发布订阅。

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B26%5D.webp)

代码怎么写呢，演示一下：

首先要先配置交换机和队列的名称：

```java
public class RabbitMQConfig  {
    /**
     * RabbitMQ的FANOUT_EXCHANG交换机类型的队列 A 的名称
     */
    public static final String FANOUT_EXCHANGE_QUEUE_TOPIC_A = "
            [fanout.A"](http://fanout.A)
          ;

    /**
     * RabbitMQ的FANOUT_EXCHANG交换机类型的队列 B 的名称
     */
    public static final String FANOUT_EXCHANGE_QUEUE_TOPIC_B = "
            [fanout.B"](http://fanout.B)
          ;

    /**
     * RabbitMQ的FANOUT_EXCHANG交换机类型的名称
     */
    public static final String FANOUT_EXCHANGE_DEMO_NAME = "
            [fanout.exchange.demo.name"](http://fanout.exchange.demo.name)
          ;

}
```

再配置 FanoutExchange 类型的交换机和 A、B 两个队列，并且绑定。这种类型不需要配置 routing key：

```java
@Component
public class DirectRabbitConfig implements BeanPostProcessor  {
    @Resource
    private RabbitAdmin rabbitAdmin;
    
    @Bean
    public Queue fanoutExchangeQueueA()  {
        //队列A
        return new Queue(RabbitMQConfig.FANOUT_EXCHANGE_QUEUE_TOPIC_A, true, false, false);
    }

    @Bean
    public Queue fanoutExchangeQueueB()  {
        //队列B
        return new Queue(RabbitMQConfig.FANOUT_EXCHANGE_QUEUE_TOPIC_B, true, false, false);
    }

    @Bean
    public FanoutExchange rabbitmqDemoFanoutExchange()  {
        //创建FanoutExchange类型交换机
        return new FanoutExchange(RabbitMQConfig.FANOUT_EXCHANGE_DEMO_NAME, true, false);
    }

    @Bean
    public Binding bindFanoutA()  {
        //队列A绑定到FanoutExchange交换机
        return BindingBuilder.bind(fanoutExchangeQueueA()).to(rabbitmqDemoFanoutExchange());
    }

    @Bean
    public Binding bindFanoutB()  {
        //队列B绑定到FanoutExchange交换机
        return BindingBuilder.bind(fanoutExchangeQueueB()).to(rabbitmqDemoFanoutExchange());
    }
    
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException  {
        //启动项目即创建交换机和队列
        rabbitAdmin.declareExchange(rabbitmqDemoFanoutExchange());
        rabbitAdmin.declareQueue(fanoutExchangeQueueB());
        rabbitAdmin.declareQueue(fanoutExchangeQueueA());
        return null;
    }
}
```

创建 service 发布消息的方法：

```java
@Service
public class RabbitMQServiceImpl implements RabbitMQService  {
    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Resource
    private RabbitTemplate rabbitTemplate;
    
    //发布消息
    @Override
    public String sendMsgByFanoutExchange(String msg) throws Exception  {
        Map<String, Object> message = getMessage(msg);
        try {
            rabbitTemplate.convertAndSend(RabbitMQConfig.FANOUT_EXCHANGE_DEMO_NAME, "", message);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
    //组装消息体
    private Map<String, Object> getMessage(String msg)  {
        String msgId = UUID.randomUUID().toString().replace("-", "").substring(0, 32);
        String sendTime = sdf.format(new Date());
        Map<String, Object> map = new HashMap<>();
        map.put("msgId", msgId);
        map.put("sendTime", sendTime);
        map.put("msg", msg);
        return map;
    }
}
```

Controller 接口：

```java
@RestController
@RequestMapping("/mall/rabbitmq")
public class RabbitMQController  {
    /**
     * 发布消息
     *
     * @author java技术爱好者
     */
    @PostMapping("/publish")
    public String publish(@RequestParam(name = "msg") String msg) throws Exception  {
        return rabbitMQService.sendMsgByFanoutExchange(msg);
    }
}
```

接着在消费者项目这边，创建两个队列的监听类，监听队列进行消费：

```java
@Component
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.FANOUT_EXCHANGE_QUEUE_TOPIC_A))
public class FanoutExchangeConsumerA  {

    @RabbitHandler
    public void process(Map<String, Object> map)  {
        System.out.println("队列A收到消息：" + map.toString());
    }

}
```

```java
@Component
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.FANOUT_EXCHANGE_QUEUE_TOPIC_B))
public class FanoutExchangeConsumerB  {

    @RabbitHandler
    public void process(Map<String, Object> map)  {
        System.out.println("队列B收到消息：" + map.toString());
    }
}
```

然后启动生产者和消费者两个项目，可以看到管理界面创建了一个 FanoutExchange 交换机和两个队列，并且绑定了：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B27%5D.webp)

使用 POSTMAN 进行发送消息，测试：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B28%5D.webp)

然后可以看到控制台，两个队列同时都收到了相同的消息，形成了发布订阅的效果：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B29%5D.webp)

### 6.3 Topic Exchange

直接翻译的话叫做主题交换机，如果从用法上面翻译可能叫通配符交换机会更加贴切。这种交换机是使用通配符去匹配，路由到对应的队列。通配符有两种："\*" 、 "#"。需要注意的是通配符前面必须要加上"."符号。

`*` 符号：有且只匹配一个词。比如 `a.*`可以匹配到" [a.b"、"a.c"，但是匹配不了"a.b.c"。](http://a.b)

`#` 符号：匹配一个或多个词。比如"rabbit.#"既可以匹配到" [rabbit.a.b"、"rabbit.a"，也可以匹配到"rabbit.a.b.c"。](http://rabbit.a.b)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B30%5D.webp)

废话不多说，代码演示一下：

依然是配置 TopicExchange 名称和三个队列的名称：

```java
  /**
   * RabbitMQ的TOPIC_EXCHANGE交换机名称
   */
  public static final String TOPIC_EXCHANGE_DEMO_NAME = "
        [topic.exchange.demo.name"](http://topic.exchange.demo.name)
      ;

    /**
     * RabbitMQ的TOPIC_EXCHANGE交换机的队列A的名称
     */
    public static final String TOPIC_EXCHANGE_QUEUE_A = "
        [topic.queue.a"](http://topic.queue.a)
      ;

    /**
     * RabbitMQ的TOPIC_EXCHANGE交换机的队列B的名称
     */
    public static final String TOPIC_EXCHANGE_QUEUE_B = "
        [topic.queue.b"](http://topic.queue.b)
      ;

    /**
     * RabbitMQ的TOPIC_EXCHANGE交换机的队列C的名称
     */
    public static final String TOPIC_EXCHANGE_QUEUE_C = "
        [topic.queue.c"](http://topic.queue.c)
      ;
```

然后还是老配方，配置交换机和队列，然后绑定，创建：

```java
@Component
public class DirectRabbitConfig implements BeanPostProcessor  {
    //省略...
    
    @Bean
    public TopicExchange rabbitmqDemoTopicExchange()  {
        //配置TopicExchange交换机
        return new TopicExchange(RabbitMQConfig.TOPIC_EXCHANGE_DEMO_NAME, true, false);
    }

    @Bean
    public Queue topicExchangeQueueA()  {
        //创建队列1
        return new Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_A, true, false, false);
    }

    @Bean
    public Queue topicExchangeQueueB()  {
        //创建队列2
        return new Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_B, true, false, false);
    }

    @Bean
    public Queue topicExchangeQueueC()  {
        //创建队列3
        return new Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_C, true, false, false);
    }

    @Bean
    public Binding bindTopicA()  {
        //队列A绑定到FanoutExchange交换机
        return BindingBuilder.bind(topicExchangeQueueB())
                .to(rabbitmqDemoTopicExchange())
                .with("a.*");
    }

    @Bean
    public Binding bindTopicB()  {
        //队列A绑定到FanoutExchange交换机
        return BindingBuilder.bind(topicExchangeQueueC())
                .to(rabbitmqDemoTopicExchange())
                .with("a.*");
    }

    @Bean
    public Binding bindTopicC()  {
        //队列A绑定到FanoutExchange交换机
        return BindingBuilder.bind(topicExchangeQueueA())
                .to(rabbitmqDemoTopicExchange())
                .with("rabbit.#");
    }
    
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException  {
        rabbitAdmin.declareExchange(rabbitmqDemoTopicExchange());
        rabbitAdmin.declareQueue(topicExchangeQueueA());
        rabbitAdmin.declareQueue(topicExchangeQueueB());
        rabbitAdmin.declareQueue(topicExchangeQueueC());
        return null;
    }
}
```

然后写一个发送消息的 service 方法：

```java
@Service
public class RabbitMQServiceImpl implements RabbitMQService  {
    @Override
    public String sendMsgByTopicExchange(String msg, String routingKey) throws Exception  {
        Map<String, Object> message = getMessage(msg);
        try {
            //发送消息
            rabbitTemplate.convertAndSend(RabbitMQConfig.TOPIC_EXCHANGE_DEMO_NAME, routingKey, message);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
```

写一个 Controller 接口：

```java
@RestController
@RequestMapping("/mall/rabbitmq")
public class RabbitMQController  {
    @Resource
    private RabbitMQService rabbitMQService;
    
    /**
     * 通配符交换机发送消息
     *
     * @author java技术爱好者
     */
    @PostMapping("/topicSend")
    public String topicSend(@RequestParam(name = "msg") String msg, @RequestParam(name = "routingKey") String routingKey) throws Exception  {
        return rabbitMQService.sendMsgByTopicExchange(msg, routingKey);
    }
}
```

生产者这边写完，就写消费端，消费端比较简单，写三个监听类：

```java
@Component
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_A))
public class TopicExchangeConsumerA  {

    @RabbitHandler
    public void process(Map<String, Object> map)  {
        System.out.println("队列[" + RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_A + "]收到消息：" + map.toString());
    }
}

@Component
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_B))
public class TopicExchangeConsumerB  {

    @RabbitHandler
    public void process(Map<String, Object> map)  {
        System.out.println("队列[" + RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_B+ "]收到消息：" + map.toString());
    }
}

@Component
@RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_C))
public class TopicExchangeConsumerC  {

    @RabbitHandler
    public void process(Map<String, Object> map)  {
        System.out.println("队列[" + RabbitMQConfig.TOPIC_EXCHANGE_QUEUE_C + "]收到消息：" + map.toString());
    }
}
```

大功告成，然后启动项目开始调试。启动成功后可以看到队列和路由键绑定的关系：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B31%5D.webp)

通过 POSTMAN 进行测试，测试一下 rabbit.# 的路由键是否能够匹配成功：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B32%5D.webp)

测试成功，队列 A 消费到消息：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B33%5D.webp)

接着测试 a.\* 路由键，发送 routingKey = [a.b](http://a.b) ：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B34%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B35%5D.webp)

比较常用的就是以上三种：直连(DirectExchange)，发布订阅(FanoutExchange)，通配符(TopicExchange)。熟练运用这三种交换机类型，基本上可以解决大部分的业务场景。

实际上稍微思考一下，可以发现通配符(TopicExchange)这种模式其实是可以达到直连(DirectExchange)和发布订阅(FanoutExchange)这两种的效果的。

FanoutExchange 不需要绑定 routingKey，所以性能相对 TopicExchange 会好一点。

### 6.4 Headers Exchange

这种交换机用的相对没这么多。**它跟上面三种有点区别，它的路由不是用 routingKey 进行路由匹配，而是在匹配请求头中所带的键值进行路由**。如图所示：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B36%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B37%5D.webp)

创建队列需要设置绑定的头部信息，有两种模式：**全部匹配和部分匹配**。如上图所示，交换机会根据生产者发送过来的头部信息携带的键值去匹配队列绑定的键值，路由到对应的队列。代码怎么实现呢，往下看演示代码：

首先还是需要定义交换机名称，队列名称：

```
        /**
     * HEADERS_EXCHANGE交换机名称
     */
    public static final String HEADERS_EXCHANGE_DEMO_NAME = "
            [headers.exchange.demo.name"](http://headers.exchange.demo.name)
          ;

    /**
     * RabbitMQ的HEADERS_EXCHANGE交换机的队列A的名称
     */
    public static final String HEADERS_EXCHANGE_QUEUE_A = "
            [headers.queue.a"](http://headers.queue.a)
          ;

    /**
     * RabbitMQ的HEADERS_EXCHANGE交换机的队列B的名称
     */
    public static final String HEADERS_EXCHANGE_QUEUE_B = "
            [headers.queue.b"](http://headers.queue.b)
          ;
```

然后设置交换机，队列，进行绑定：

```
@Component
public class DirectRabbitConfig implements BeanPostProcessor  {
    @Bean
    public Queue headersQueueA()  {
        return new Queue(RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_A, true, false, false);
    }

    @Bean
    public Queue headersQueueB()  {
        return new Queue(RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_B, true, false, false);
    }

    @Bean
    public HeadersExchange rabbitmqDemoHeadersExchange()  {
        return new HeadersExchange(RabbitMQConfig.HEADERS_EXCHANGE_DEMO_NAME, true, false);
    }

    @Bean
    public Binding bindHeadersA()  {
        Map<String, Object> map = new HashMap<>();
        map.put("key_one", "java");
        map.put("key_two", "rabbit");
        //全匹配
        return BindingBuilder.bind(headersQueueA())
                .to(rabbitmqDemoHeadersExchange())
                .whereAll(map).match();
    }

    @Bean
    public Binding bindHeadersB()  {
        Map<String, Object> map = new HashMap<>();
        map.put("headers_A", "coke");
        map.put("headers_B", "sky");
        //部分匹配
        return BindingBuilder.bind(headersQueueB())
                .to(rabbitmqDemoHeadersExchange())
                .whereAny(map).match();
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException  {
        rabbitAdmin.declareExchange(rabbitmqDemoHeadersExchange());
        rabbitAdmin.declareQueue(headersQueueA());
        rabbitAdmin.declareQueue(headersQueueB());
        return null;
    }
}
```

再写一个 Service 方法发送消息:

```
@Service
public class RabbitMQServiceImpl implements RabbitMQService  {
    @Resource
    private RabbitTemplate rabbitTemplate;
    
    @Override
    public String sendMsgByHeadersExchange(String msg, Map<String, Object> map) throws Exception  {
        try {
            MessageProperties messageProperties = new MessageProperties();
            //消息持久化
            messageProperties.setDeliveryMode(MessageDeliveryMode.PERSISTENT);
            messageProperties.setContentType("UTF-8");
            //添加消息
            messageProperties.getHeaders().putAll(map);
            Message message = new Message(msg.getBytes(), messageProperties);
            rabbitTemplate.convertAndSend(RabbitMQConfig.HEADERS_EXCHANGE_DEMO_NAME, null, message);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
```

再写一个 Controller 接口：

```
@RestController
@RequestMapping("/mall/rabbitmq")
public class RabbitMQController  {
    @Resource
    private RabbitMQService rabbitMQService;
    
    @PostMapping("/headersSend")
    @SuppressWarnings("unchecked")
    public String headersSend(@RequestParam(name = "msg") String msg,
                              @RequestParam(name = "json") String json) throws Exception  {
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> map = mapper.readValue(json, Map.class);
        return rabbitMQService.sendMsgByHeadersExchange(msg, map);
    }
}
```

生产者这边写完了，再写两个队列的监听类进行消费：

```
@Component
public class HeadersExchangeConsumerA  {
    @RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_A))
    public void process(Message message) throws Exception  {
        MessageProperties messageProperties = message.getMessageProperties();
        String contentType = messageProperties.getContentType();
        System.out.println("队列[" + RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_A + "]收到消息：" + new String(message.getBody(), contentType));
    }
}

@Component
public class HeadersExchangeConsumerB  {
    @RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_B))
    public void process(Message message) throws Exception  {
        MessageProperties messageProperties = message.getMessageProperties();
        String contentType = messageProperties.getContentType();
        System.out.println("队列[" + RabbitMQConfig.HEADERS_EXCHANGE_QUEUE_B + "]收到消息：" + new String(message.getBody(), contentType));
    }
}
```

大功告成~启动项目，打开管理界面，我们可以看到交换机绑定队列的信息：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B38%5D.webp)

跟上面示意图一样~证明没有问题，一切尽在掌握之中。使用 POSTMAN 发送，测试全匹配的队列 A：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B39%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B40%5D.webp)

再测试部分匹配的队列 B：

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B41%5D.webp)

![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B42%5D.webp)

## 总结

这篇文章就先写到这里了。回顾一下学了哪些：

- 什么是消息队列？为什么使用消息队列？
- RabbitMQ 的特点、组成部分、工作流程
- 安装 RabbitMQ，以及完成一个 HelloWord 小案例
- RabbitMQ 交换机的四种类型的特点，以及使用方法

实际上 RabbitMQ 还有事务机制和负载均衡这些还没讲，因为篇幅实在有点长了，差不多 5 千字了。所以放在下期讲吧，尽请期待一下。

上面所有例子的代码都上传 github 了：

> https://github.com/yehongzhi/mall

**如果你觉得这篇文章对你有用，点个赞吧**~

**你的点赞是我创作的最大动力**~

想第一时间看到我更新的文章，可以微信搜索公众号「`java技术爱好者`」，**拒绝做一条咸鱼，我是一个努力让大家记住的程序员。我们下期再见！！！**![图片](%E8%B6%85%E8%AF%A6%E7%BB%86RabbitMQ%E5%85%A5%E9%97%A8/image/640%5B43%5D.webp)

> 能力有限，如果有什么错误或者不当之处，请大家批评指正，一起学习交流！
> 来自: [超详细的 RabbitMQ 入门](https://mp.weixin.qq.com/s/RhXe3cF_B3p78I2mEXY9EQ)
