# Spring


| **日期** | **迭代内容** |
| --- | --- |
| 23-11-24 | 1. 导学指引。确定一种学习和记忆 Spring 相关知识点的逻辑树。 |


> 导学指引
> 
> Java 作为一个编程语言，随着 JVM 功能的完善，Java 逐渐应用于工程领域（相对于科学计算领域）。但是在工程领域，人们实现的 Java 框架很庞大和臃肿，并不利于程序员的理解和应用，于是人们想要把程序员从繁重复杂的传统框架中解放出来。那怎么解决呢？
> 
> 1. 人们发现，把现实世界中的一些实际的例子抽象出来，搞出一些设计规则，更便于人们理解和实现程序，于是**设计模式**出现了。
> 2. 之后人们又发现，前人归纳总结的设计模式并不适合“使用 Java 搞工程设计”这一特殊的领域。原因是面向对象编程过程中`对象的构造权`和`对象的依赖关系`的管理`还是很复杂`。于是人们就想，能不能开发一种“工具”——甭管叫什么吧，这种工具能够帮我们管理对象的构造权和对象的依赖关系，这样一来，程序员就可以只用去关注业务就行了。于是 **Spring** 登场。
> 3. 既然要管理对象的构造权和对象的依赖关系，那就得知道什么是“使用 Java 搞工程设计”这一特殊的领域中的对象和对象的依赖关系是个啥吧？于是 **JavaBean 的概念**登场。
> 4. 对象和对象的依赖关系的概念了解之后，就是要设计这个工具了吧。于是**容器**登场。要想完成容器的实现要解决以下几个问题：
>    1. 假设容器这个工具已经有了，那如何把对象和对象的依赖关系与容器联系起来呢？或者说怎么把对象和对象的依赖关系配置给容器呢？于是不同的**配置方式**登场。
>    2. 配置信息给到容器后，容器要把配置信息中的 JavaBean 解析出来吧，那怎么解析呢？解析完了得保存着吧，于是**解析过程**（ BeanDefinite、BeanDefiniteReader……） 登场。
>    3. 对象和对象的依赖关系给到容器后，下面就是业务代码用的时候，容器怎么反向查找业务代码所用到的 JavaBean，并构造出对应的对象和依赖关系，并给到业务代码呢？于是**装配**登场。至此，一个丐版的 容器 就算完成了。
>    4. 丐版的容器完成后要看看 Spring 到底是怎么实现的吧，于是 **BeanFactory 和 ApplicationContext** 登场。
>    5. 人们在实践演绎过程中又发现——Spring 实际上管理的是整个**JavaBean 的生命周期**呀。于是 JavaBean 生命周期登场。
>    6. JavaBean 生命周期有了之后，人们发现在 JavaBean 的生命周期中有很多个阶段，每个阶段完成后都可以看作是这个事件完成了，于是人们就想，能不能基于这些事件做一些事情，这样一来不但能实现对生命周期更细粒度的控制，还能使 Spring 适用更丰富的业务场景。但是如何实现这种期望呢，幸好有字节码增强技术。于是**事件机制**和**面向切面编程**登场。
>    7. 人们又深入了解，发现容器事实上也可以看作是一个 JavaBean 呀，只不过这个 JavaBean 比较特殊而已，这样的话，容器也应该有生命周期的概念，容器的生命周期就是应用上下文。好吧，**应用上下文**登场了。
> 5. 至此，**一个支持更加丰富特性的“豪华版”Spring 登场了**，也似乎把程序员从复杂繁重的编码工作中解放出来了，但是这就够了嘛？答案是：还是不够。因为程序员还要应付更多复杂的业务场景，如通用的远程调用、国际化的支持、Web、测试等。于是 Spring 的**高级特性**登场。
> 6. 这样就够了嘛？还是不够！那就接着演绎，于是“铂金版”的 Spring 登场——**SpringBoot**。
> 7. 这样还不够？那就接着演绎，给你来个全家桶总可以了吧？于是 **SpringCloud** 登场。
> 
> 上面导学指引指出了一种学习和理解 Spring 相关知识点的逻辑树，但为了便于归纳和总结，下面的文档并不完全按照上面👆的逻辑顺序。特此说明。
> 
> 此外，由于 Spring 是由 Java 实现的，在面试时很多情况下会问到源码的部分。因此，在下面的文档里面，涉及到的源码部分就分散到各个文档中，不会再单独开篇解读。
> 

## 1. 背景

> EJB 开发模式【POJO、JavaBean、对象的状态、RMI 和 RPC、多个 Bean】
> EJB 的困境
> 两个示例证明“没有 Spring 的困境”
> DIP
> 设计模式原则之 DI 与 IoC 的区别、依赖注入和依赖查找、IoC 和 Spring
> Spring 的特点、相关组件、版本更新、SpringBoot 和 SpringCloud 等；

<!-- @include: ./spring/snippet/background.snippet.md -->

## 2. Bean

> 思路：容器中保存的内容就是Bean -> 那何为bean -> 如何描述Bean -> Bean注册到容器的方式 -> 在Bean中使用另一个Bean -> Bean的装配【何为装配、装配的分类】 -> Bean的生命周期 -> 针对生命周期的扩展使用 -> 实际的业务场景作为佐例
> 常用 Bean


## 3. 容器

> 使用工厂模式实现自定义的容器
> 高层视图
> BeanFactory
> Application
> FactoryBean
> BeanDefinition
> BeanDefinitionReader
> 常见容器、父子容器

<!-- @include: ./spring/snippet/container.snippet.md -->

## 4. AOP

> 1. 实际业务开发过程中遇到的一些问题，引出代理模式
> 2. 代理模式的基本概念、分类、实现原理
> 3. 基于代理模式发展出面向切面编程（AOP）的相关概念
> 4. Spring技术栈中的面向切面编程示例
> 5. AOP的常见应用场景【统计方法执行耗时等】

<!-- @include: ./spring/snippet/aop.snippet.md -->


## 5. Web

> MVC
> 实现原理
> 扩展应用： 内容协商、过滤器、shiro、跨域等
> WebFlux

<!-- @include: ./spring/snippet/web.snippet.md -->


## 6. 事务

> 事务特性
> Spring 实现事务的两种编程模型
> Spring 中事务的相关属性【传播机制、隔离级别、超时控制、回滚策略】
> 事务失效原因
> 长事务概念、最佳实践
> **事务的原理**

<!-- @include: ./spring/snippet/transaction.snippet.md -->


## 7. 事件机制

> 观察者模式
> 基于 JDK 实现观察者模式
> 基于 Guaua 实现观察者模式
> 基于 Spring 实现观察者模式
> Spring 中的内建事件类型
> 基于 SpringBoot 使用事件的示例【数据预热】

<!-- @include: ./spring/snippet/event.snippet.md -->

## 8. 应用上下文


## 9. 资源操作

## 10. 高级特性

> 基于 Spring 核心框架，Spring 开发团队实现的扩展性应用，类似于三方包的组件，以便实现开箱即用的效果。

## 11. 数据校验

> 使用过程

## 12. 国际化

> 使用过程

## 13. 远程方法调用

> RestTemplate

[Spring RMI](https://doocs.github.io/source-code-hunter/#/docs/Spring/RMI/Spring-RMI?id=spring-rmi)

## 14. 缓存操作

> 缓存操作

## 15. 测试

> junit 的使用
> 版本迭代

## 16. AOT

> 过程


## 17. 参考资料

[https://github.com/wuyouzhuguli/SpringAll](https://github.com/wuyouzhuguli/SpringAll) 中关于Spring原理部分
[https://doocs.github.io/source-code-hunter/#/](https://doocs.github.io/source-code-hunter/#/) 中关于Spring原理部分

- 理论
  - 《字节大佬总结的面试题库.pdf》
  - [Spring官方文档](https://docs.spring.io/spring-framework/docs/)
  - [Spring-Github-Wiki](https://github.com/spring-projects/spring-framework/wiki)
  - [面试小抄- Spring](https://www.javalearn.cn/#/doc/Spring/%E9%9D%A2%E8%AF%95%E9%A2%98)
  - [面渣逆袭：Spring三十五问，四万字+五十图详解](https://www.cnblogs.com/three-fighter/p/16166891.html)
  - [小马哥讲Spring核心编程思想-笔记](https://www.cnblogs.com/huangwenjie/p/13945988.html#autoid-h2-0-0-0)
  - [SPRING TUTORIAL](https://dunwu.github.io/spring-tutorial/pages/53aedb/#aop-%E6%A6%82%E5%BF%B5)
  - [Java全栈知识体系](https://pdai.tech/)
  - [玩转Spring全家桶](https://github.com/geektime-geekbang/geektime-spring-family/tree/master)
- 实战
  - [Spring6(尚硅谷2023)](https://www.yuque.com/yguangbxiu/note/cfw98m0tg3k6a38d#QCP35)
  - [Java-充电社-Spring教程](http://www.itsoku.com/course/5)
  - [动力节点2022-Spring6](https://www.yuque.com/dujubin/ltckqu/kipzgd) 密码：mg9b
  - [Spring 实战(第 5 版)](https://potoyang.gitbook.io/spring-in-action-v5/)
- 散碎知识点
  - [控制反转](https://zh.wikipedia.org/zh-hans/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC)
  - [Programming.log - a place to keep my thoughts on programming](https://www.cnblogs.com/weidagang2046/archive/2009/12/10/1620587.html) : 有助于理解依赖注入中的“依赖”与 UML 类图中的“依赖”之间的关系。
- 【[EJB究竟是什么，真的那么神奇吗？？](https://cloud.tencent.com/developer/article/2048526)】
- 【[EJB到底是什么，真的那么神秘吗？](https://blog.51cto.com/u_3664660/3214556)】
- [https://www.zhihu.com/question/19773379](https://www.zhihu.com/question/19773379)
- [https://blog.csdn.net/chenchunlin526/article/details/69939337](https://blog.csdn.net/chenchunlin526/article/details/69939337)

[对比平台--EJB VS Spring之间的区别](https://www.1024sky.cn/blog/article/3622)
[EJB究竟是什么，真的那么神奇吗？？](https://cloud.tencent.com/developer/article/2048526)

1. [面渣逆袭：Spring三十五问，四万字+五十图详解](https://www.cnblogs.com/three-fighter/p/16166891.html)
2. [Spring系列课程（1）— 工厂](https://www.yuque.com/yguangbxiu/note/zxgf4q#rDMTv)

## Web应用常见的业务场景

权限框架
统一响应消息体
全局统一异常
日志接入的配置方案

