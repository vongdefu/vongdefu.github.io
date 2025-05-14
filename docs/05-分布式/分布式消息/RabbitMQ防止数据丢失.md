# 详细讲解！RabbitMQ 防止数据丢失

原创 牛九木 java 技术爱好者

_2020 年 08 月 03 日 11:30_

## 思维导图

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640.webp)

## 一、分析数据丢失的原因

分析 RabbitMQ 消息丢失的情况，不妨先看看一条消息从生产者发送到消费者消费的过程：

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B1%5D.webp)

可以看出，一条消息整个过程要经历两次的网络传输：**从生产者发送到 RabbitMQ 服务器，从 RabbitMQ 服务器发送到消费者**。

**在消费者未消费前存储在队列(Queue)中**。

所以可以知道，有三个场景下是会发生消息丢失的：

- 存储在队列中，如果队列没有对消息持久化，RabbitMQ 服务器宕机重启会丢失数据。
- 生产者发送消息到 RabbitMQ 服务器过程中，RabbitMQ 服务器如果宕机停止服务，消息会丢失。
- 消费者从 RabbitMQ 服务器获取队列中存储的数据消费，但是消费者程序出错或者宕机而没有正确消费，导致数据丢失。

针对以上三种场景，RabbitMQ 提供了三种解决的方式，分别是消息持久化，confirm 机制，ACK 事务机制。

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B2%5D.webp)

## 二、消息持久化

RabbitMQ 是支持消息持久化的，消息持久化需要设置：Exchange 为持久化和 Queue 持久化，这样当消息发送到 RabbitMQ 服务器时，消息就会持久化。

首先看 Exchange 交换机的类图：

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B3%5D.webp)

看这个类图其实是要说明上一篇文章介绍的四种交换机都是 AbstractExchange 抽象类的子类，所以根据 java 的特性，**创建子类的实例会先调用父类的构造器**，父类也就是 AbstractExchange 的构造器是怎么样的呢？

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B4%5D.webp)

从上面的注释可以看到**durable 参数表示是否持久化。默认是持久化(true)**。创建持久化的 Exchange 可以这样写：

```java
  @Bean
    public DirectExchange rabbitmqDemoDirectExchange()  {
        //Direct交换机
        return new DirectExchange(RabbitMQConfig.RABBITMQ_DEMO_DIRECT_EXCHANGE, true, false);
    }
```

接着是 Queue 队列，我们先看看 Queue 的构造器是怎么样的：

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B5%5D.webp)

也是通过 durable 参数设置是否持久化，默认是 true。所以创建时可以不指定：

```java
  @Bean
    public Queue fanoutExchangeQueueA()  {
     //只需要指定名称，默认是持久化的
        return new Queue(RabbitMQConfig.FANOUT_EXCHANGE_QUEUE_TOPIC_A);
    }
```

这就完成了消息持久化的设置，接下来启动项目，发送几条消息，我们可以看到：

![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B6%5D.webp)怎么证明是已经持久化了呢，实际上可以找到对应的文件：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B7%5D.webp)找到对应磁盘中的目录：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B8%5D.webp)**消息持久化可以防止消息在 RabbitMQ Server 中不会因为宕机重启而丢失**。

## 三、消息确认机制

### 3.1 confirm 机制

**在生产者发送到 RabbitMQ Server 时有可能因为网络问题导致投递失败，从而丢失数据**。我们可以使用 confirm 模式防止数据丢失。工作流程是怎么样的呢，看以下图解：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B9%5D.webp)从上图中可以看到是通过两个回调函数\*\*confirm()、returnedMessage()\*\*进行通知。

一条消息从生产者发送到 RabbitMQ，首先会发送到 Exchange，对应回调函数**confirm()**。第二步从 Exchange 路由分配到 Queue 中，对应回调函数则是**returnedMessage()**。

代码怎么实现呢，请看演示：

首先在 **[application.yml](http://application.yml)** 配置文件中加上如下配置：

```xml
spring:
    rabbitmq:
        publisher-confirms: true
#    publisher-returns: true
        template:
            mandatory: true
# publisher-confirms：设置为true时。当消息投递到Exchange后，会回调confirm()方法进行通知生产者
# publisher-returns：设置为true时。当消息匹配到Queue并且失败时，会通过回调returnedMessage()方法返回消息
# [spring.rabbitmq.template.mandatory:](http://spring.rabbitmq.template.mandatory:)
           设置为true时。指定消息在没有被队列接收时会通过回调returnedMessage()方法退回。
```

有个小细节，**publisher-returns 和 mandatory 如果都设置的话，优先级是以 mandatory 优先**。可以看源码：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B10%5D.webp)接着我们需要定义回调方法：

```java
@Component
public class RabbitmqConfirmCallback implements RabbitTemplate.ConfirmCallback, RabbitTemplate.ReturnCallback  {
    private Logger logger = LoggerFactory.getLogger(RabbitmqConfirmCallback.class);

    /**
     * 监听消息是否到达Exchange
     *
     * @param correlationData 包含消息的唯一标识的对象
     * @param ack             true 标识 ack，false 标识 nack
     * @param cause           nack 投递失败的原因
     */
    @Override
    public void confirm(CorrelationData correlationData, boolean ack, String cause)  {
        if (ack) {
            logger.info("消息投递成功~消息Id：{}", correlationData.getId());
        } else {
            logger.error("消息投递失败，Id：{}，错误提示：{}", correlationData.getId(), cause);
        }
    }

    @Override
    public void returnedMessage(Message message, int replyCode, String replyText, String exchange, String routingKey)  {
        logger.info("消息没有路由到队列，获得返回的消息");
        Map map = byteToObject(message.getBody(), Map.class);
        logger.info("message body: {}", map == null ? "" : map.toString());
        logger.info("replyCode: {}", replyCode);
        logger.info("replyText: {}", replyText);
        logger.info("exchange: {}", exchange);
        logger.info("routingKey: {}", exchange);
        logger.info("------------> end <------------");
    }

    @SuppressWarnings("unchecked")
    private <T> T byteToObject(byte[] bytes, Class<T> clazz)  {
        T t;
        try (ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
             ObjectInputStream ois = new ObjectInputStream(bis)) {
            t = (T) ois.readObject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return t;
    }
}
```

我这里就简单地打印回调方法返回的消息，在实际项目中，可以把返回的消息存储到日志表中，使用定时任务进行进一步的处理。

我这里是使用**RabbitTemplate**进行发送，所以在 Service 层的 RabbitTemplate 需要设置一下：

```java
@Service
public class RabbitMQServiceImpl implements RabbitMQService  {
 @Resource
    private RabbitmqConfirmCallback rabbitmqConfirmCallback;

    @Resource
    private RabbitTemplate rabbitTemplate;

    @PostConstruct
    public void init()  {
        //指定 ConfirmCallback
        rabbitTemplate.setConfirmCallback(rabbitmqConfirmCallback);
        //指定 ReturnCallback
        rabbitTemplate.setReturnCallback(rabbitmqConfirmCallback);
    }
    
    @Override
    public String sendMsg(String msg) throws Exception  {
        Map<String, Object> message = getMessage(msg);
        try {
            CorrelationData correlationData = (CorrelationData) message.remove("correlationData");
            rabbitTemplate.convertAndSend(RabbitMQConfig.RABBITMQ_DEMO_DIRECT_EXCHANGE, RabbitMQConfig.RABBITMQ_DEMO_DIRECT_ROUTING, message, correlationData);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
    
 private Map<String, Object> getMessage(String msg)  {
        String msgId = UUID.randomUUID().toString().replace("-", "").substring(0, 32);
        CorrelationData correlationData = new CorrelationData(msgId);
        String sendTime = sdf.format(new Date());
        Map<String, Object> map = new HashMap<>();
        map.put("msgId", msgId);
        map.put("sendTime", sendTime);
        map.put("msg", msg);
        map.put("correlationData", correlationData);
        return map;
    }
}
```

大功告成！接下来我们进行测试，发送一条消息，我们可以控制台：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B11%5D.webp)假设发送一条信息没有路由匹配到队列，可以看到如下信息：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B12%5D.webp)这就是 confirm 模式。它的作用是**为了保障生产者投递消息到 RabbitMQ 不会出现消息丢失**。

### 3.2 事务机制(ACK)

最开始的那张图已经讲过，**消费者从队列中获取到消息后，会直接确认签收，假设消费者宕机或者程序出现异常，数据没有正常消费，这种情况就会出现数据丢失**。

所以关键在于把自动签收改成手动签收，正常消费则返回确认签收，如果出现异常，则返回拒绝签收重回队列。![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B13%5D.webp)代码怎么实现呢，请看演示：

首先在消费者的 **[application.yml](http://application.yml)** 文件中设置事务提交为**manual**手动模式：

```xml
spring:
    rabbitmq:
        listener:
            simple:
  acknowledge-mode: manual # 手动ack模式
                concurrency: 1 # 最少消费者数量
                max-concurrency: 10 # 最大消费者数量
```

然后编写消费者的监听器：

```java
@Component
public class RabbitDemoConsumer  {

    enum Action {
        //处理成功
        SUCCESS,
        //可以重试的错误，消息重回队列
        RETRY,
        //无需重试的错误，拒绝消息，并从队列中删除
        REJECT
    }

    @RabbitHandler
    @RabbitListener(queuesToDeclare = @Queue(RabbitMQConfig.RABBITMQ_DEMO_TOPIC))
    public void process(String msg, Message message, Channel channel)  {
        long tag = message.getMessageProperties().getDeliveryTag();
        Action action = Action.SUCCESS;
        try {
            System.out.println("消费者RabbitDemoConsumer从RabbitMQ服务端消费消息：" + msg);
            if ("bad".equals(msg)) {
                throw new IllegalArgumentException("测试：抛出可重回队列的异常");
            }
            if ("error".equals(msg)) {
                throw new Exception("测试：抛出无需重回队列的异常");
            }
        } catch (IllegalArgumentException e1) {
            e1.printStackTrace();
            //根据异常的类型判断，设置action是可重试的，还是无需重试的
            action = Action.RETRY;
        } catch (Exception e2) {
            //打印异常
            e2.printStackTrace();
            //根据异常的类型判断，设置action是可重试的，还是无需重试的
            action = Action.REJECT;
        } finally {
            try {
                if (action == Action.SUCCESS) {
                    //multiple 表示是否批量处理。true表示批量ack处理小于tag的所有消息。false则处理当前消息
                    channel.basicAck(tag, false);
                } else if (action == Action.RETRY) {
                    //Nack，拒绝策略，消息重回队列
                    channel.basicNack(tag, false, true);
                } else {
                    //Nack，拒绝策略，并且从队列中删除
                    channel.basicNack(tag, false, false);
                }
                channel.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

解释一下上面的代码，如果没有异常，则手动确认回复 RabbitMQ 服务端 basicAck(消费成功)。

如果抛出某些可以重回队列的异常，我们就回复 basicNack 并且设置重回队列。

如果是抛出不可重回队列的异常，就回复 basicNack 并且设置从 RabbitMQ 的队列中删除。

接下来进行测试，发送一条普通的消息"hello"：![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B14%5D.webp)解释一下 ack 返回的三个方法的意思。

① 成功确认

```java
void basicAck(long deliveryTag, boolean multiple) throws IOException;
```

消费者成功处理后调用此方法对消息进行确认。

- deliveryTag：该消息的 index
- multiple：是否批量.。true：将一次性 ack 所有小于 deliveryTag 的消息。

② 失败确认

```java
void basicNack(long deliveryTag, boolean multiple, boolean requeue) throws IOException;
```

- deliveryTag：该消息的 index。
- multiple：是否批量。true：将一次性拒绝所有小于 deliveryTag 的消息。
- requeue：被拒绝的是否重新入队列。

③ 失败确认

```java
void basicReject(long deliveryTag, boolean requeue) throws IOException;
```

- deliveryTag:该消息的 index。
- requeue：被拒绝的是否重新入队列。

basicNack()和 basicReject()的区别在于：**basicNack()可以批量拒绝，basicReject()一次只能拒接一条消息**。

## 四、遇到的坑

### 4.1 启用 nack 机制后，导致的死循环

上面的代码我故意写了一个 bug。测试发送一条"bad"，然后会抛出重回队列的异常。这就有个问题：重回队列后消费者又消费，消费抛出异常又重回队列，就造成了死循环。![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B15%5D.webp)那怎么避免这种情况呢？

既然 nack 会造成死循环的话，我提供的一个思路是**不使用 basicNack()，把抛出异常的消息落库到一张表中，记录抛出的异常，消息体，消息 Id。通过定时任务去处理**。

如果你有什么好的解决方案，也可以留言讨论~

### 4.2 double ack

有的时候比较粗心，不小心开启了自动 Ack 模式，又手动回复了 Ack。那就会报这个错误：

```txt
消费者RabbitDemoConsumer从RabbitMQ服务端消费消息：java技术爱好者
2020-08-02 22:52:42.148 ERROR 4880 --- [ 127.0.0.1:5672] o.s.a.r.c.CachingConnectionFactory       : Channel shutdown: channel error; protocol method: #method<channel.close>(reply-code=406, reply-text=PRECONDITION_FAILED - unknown delivery tag 1, class-id=60, method-id=80)
2020-08-02 22:52:43.102  INFO 4880 --- [cTaskExecutor-1] o.s.a.r.l.SimpleMessageListenerContainer : Restarting Consumer@f4a3a8d: tags=[{amq.ctag-8MJeQ7el_PNbVJxGOOw7Rw=rabbitmq.demo.topic}], channel=Cached Rabbit Channel: AMQChannel(amqp://guest@127.0.0.1:5672/,5), conn: Proxy@782a1679 Shared Rabbit Connection: SimpleConnection@67c5b175 [delegate=amqp://guest@127.0.0.1:5672/, localPort= 56938], acknowledgeMode=AUTO local queue size=0
```

出现这个错误，可以检查一下 yml 文件是否添加了以下配置：

```xml
spring:
    rabbitmq:
        listener:
            simple:
                acknowledge-mode: manual
                concurrency: 1
                max-concurrency: 10
```

如果上面这个配置已经添加了，还是报错，**有可能你使用@Configuration 配置了 SimpleRabbitListenerContainerFactory，根据 SpringBoot 的特性，代码优于配置，代码的配置覆盖了 yml 的配置，并且忘记设置手动 manual 模式**：

```java
@Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(ConnectionFactory connectionFactory)  {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        //设置手动ack模式
        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);
        return factory;
    }
```

如果你还是有报错，那可能是写错地方了，写在生产者的项目了。以上的配置应该配置在消费者的项目。因为 ack 模式是针对消费者而言的。我就是写错了，写在生产者，折腾了几个小时，泪目~

### 4.3 性能问题

其实手动 ACK 相对于自动 ACK 肯定是会慢很多，我在网上查了一些资料，性能相差大概有 10 倍。所以一般在实际应用中不太建议开手动 ACK 模式。不过也不是绝对不可以开，具体情况具体分析，看并发量，还有数据的重要性等等。

所以**在实际项目中还需要权衡一下并发量和数据的重要性，再决定具体的方案**。

### 4.4 启用手动 ack 模式，如果没有及时回复，会造成队列异常

如果开启了手动 ACK 模式，但是由于代码有 bug 的原因，没有回复 RabbitMQ 服务端，那么这条消息就会放到 Unacked 状态的消息堆里，只有等到消费者的连接断开才会转到 Ready 消息。如果消费者一直没有断开连接，那 Unacked 的消息就会越来越多，占用内存就越来越大，最后就会出现异常。

这个问题，我没法用我的电脑演示，我的电脑太卡了。

## 五、总结

通过上面的学习后，RabbitMQ 防止数据丢失有三种方式：

- 消息持久化
- 生产者消息确认机制(confirm 模式)
- 消费者消息确认模式(ack 模式)

上面所有例子的代码都上传 github 了：

> https://github.com/yehongzhi/mall

**如果你觉得这篇文章对你有用，点个赞吧**~

**你的点赞是我创作的最大动力**~

想第一时间看到我更新的文章，可以微信搜索公众号「`java技术爱好者`」，**拒绝做一条咸鱼，我是一个努力让大家记住的程序员。我们下期再见！！！**![图片](RabbitMQ%E9%98%B2%E6%AD%A2%E6%95%B0%E6%8D%AE%E4%B8%A2%E5%A4%B1/image/640%5B16%5D.webp)

> 能力有限，如果有什么错误或者不当之处，请大家批评指正，一起学习交流！
> 来自: [详细讲解！RabbitMQ 防止数据丢失](https://mp.weixin.qq.com/s/KGCER3TWLT6Yk_UwsYJZyA)
