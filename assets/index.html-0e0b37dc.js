import{_ as d,W as o,X as b,Y as s,Z as i,$ as l,a2 as a,a0 as n,C as t}from"./framework-16b96b76.js";const r="/assets/1677230194766-3bd436b2.png",m="/assets/1726199438377-b5e5eed0.png",u="/assets/1700721226640-e9452259.png",p="/assets/1700834420359-bdd94326.png",v={},k=n('<table><thead><tr><th><strong>日期</strong></th><th><strong>迭代内容</strong></th></tr></thead><tbody><tr><td>23-11-24</td><td>1. 导学指引。确定一种学习和记忆 JVM 相关知识点的逻辑树。</td></tr><tr><td>23-11-26</td><td>1. 调整整个文档结构，并加以完善。</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">导学指引</p><p>人们想<strong>要实现一种跨平台的编程语言</strong>，于是人们开始设计：</p><ol><li>常见语言的运行方式主要有解释运行、编译运行两种方式，但是不管如何都要经过高级语言到低级语言的转变过程（如机器语言）。那如何解决跨平台的问题？ <ol><li>高级语言不直接转化为机器语言，高级语言转化成一种中间的语言，即字节码文件；</li><li>加一台虚拟机，区别于物理机。虚拟机运行在物理机之上，不同的物理机设计实现不同的虚拟机程序；</li><li>这样以来，完美解决跨平台的问题。Java 语言编写 Java 源代码，然后通过编译器生成字节码，字节码再在虚拟机上运行。不同的虚拟机解析字节码文件时，会根据自身实现以及操作系统指令集把同一条命令解析成不同的实现。完美解决跨平台问题。</li></ol></li><li>好吧，愿景已经有了，下面就是实现。 <ol><li>高级语言得有一种格式吧，得规定 Java 源代码的规范吧，于是有了**《Java 语言规范》**。</li><li>虚拟机反正是运行字节码，那可不可以解耦？啥意思呢？就是我一定使用 Java 语言生成字节码嘛？有没有一种可能，我使用另外一种高级语言也生成同样的字节码文件？于是有了**《Java 虚拟机规范》**。</li></ol></li><li>于是，我们的学习内容有了——Java 虚拟机规范。下面我们开始学习： <ol><li>如何学呢？按照一个顺序，那就是高级语言的执行过程。这个执行过程一定是先要把高级语言转化成低级语言，然后低级语言通过调用底层的操作系统指令集，完成对计算机硬件的调用，最终完成程序的执行。那我们就按照这个过程来学习。</li><li>由于第二点说了，不一定是 Java 语言，只要能生成被虚拟机识别的字节码文件就行，因此要先学习<strong>字节码的相关内容</strong>。</li><li>好了字节码文件有了，下一步就应该是把字节码文件加载到内存中运行吧。 <ol><li>怎么加载呢，<strong>类加载子系统</strong>。</li><li>运行呢？运行过程要解决这么几个问题： <ol><li>怎么运行呢？总要有一个载体吧，这个载体就是** Java 的线程模型**。</li><li>运行时总要用到数据的计算吧，那数据怎么分配呢？这个分配过程有个逻辑模型，这个模型就是<strong>运行期内存结构</strong>。</li><li>载体和数据都分配完了，那该指令了吧，指令是怎么执行的呢？这就是<strong>执行引擎</strong>。</li></ol></li></ol></li><li>好了，能够完成基本运行功能的虚拟机已经实现了。但是还有一个重要的问题没有解决，内存的回收怎么处理呢？于是，<strong>垃圾回收理论</strong>登场。到此为止，基本的 Java 虚拟机算是学完了。</li></ol></li><li>上面我们大概了解了《Java 虚拟机规范》，那该找一个具体的虚拟机练练手吧，找哪一个呢？找市场上最流行的。——<strong>HotSpot</strong> 荣耀登场。 <ol><li>HotSpot 的<strong>内存模型</strong>；</li><li>HotSpot 的<strong>垃圾回收器</strong>；</li><li>HotSpot 有哪些<strong>配置参数</strong>呢？</li><li>HotSpot 提供了哪些<strong>工具包</strong>？有哪些好用的第三方的工具包呢？</li></ol></li><li>好了，理论部分我们已经学完了，并且我们还找了一个最常用的虚拟机实现进行学习。下个阶段就应该是压榨服务器运算能力了。这个过程我们称为<strong>调优</strong>。 <ol><li>要想压榨运算能力，首先得<strong>保证不能出错</strong>吧。于是，你得知道如何虚拟机会出现哪些错误信息，你还要知道怎么解决这些错误信息吧。</li><li>其次才是压榨运算能力，要想压榨，就得保证可用。什么意思呢？如果虚拟机一天总有 30s 的停顿时间，那放到一年中，那得有多少不可用的时间呐，那两年三年呢？于是确定我们压榨的目标——<strong>减少停顿</strong>。</li><li>目标有了——减少停顿，这个动作代表一个过程，多少算减少？所以要知道正常的停顿应该是怎样的，也就是说要知道正常指标是怎样的。最后才是在此基础上进行调优。</li></ol></li></ol></div><p>下面的知识体系也是按照上面的导学指引完成的。</p>',3),h={id:"_1-概述",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#_1-概述","aria-hidden":"true"},"#",-1),_=s("blockquote",null,[s("ol",null,[s("li",null,"Java 语言规范与 JVM 规范的区别"),s("li",null,"Java 语言的跨平台性"),s("li",null,"JDK、JRE、JVM 关系"),s("li",null,"发展历程简述")])],-1),f={id:"_2-前端编译阶段及字节码文件",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#_2-前端编译阶段及字节码文件","aria-hidden":"true"},"#",-1),y=s("blockquote",null,[s("ol",null,[s("li",null,"前端编译介绍"),s("li",null,"字节码文件解析"),s("li",null,"相关命令"),s("li",null,"特殊应用【如字节码增强技术、热部署等】")])],-1),J={id:"_3-类加载",tabindex:"-1"},M=s("a",{class:"header-anchor",href:"#_3-类加载","aria-hidden":"true"},"#",-1),j=s("blockquote",null,[s("ol",null,[s("li",null,"类加载子系统"),s("li",null,"类加载过程"),s("li",null,"类加载器分类及各自作用"),s("li",null,"类加载原则")])],-1),V={id:"_4-线程模型",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#_4-线程模型","aria-hidden":"true"},"#",-1),S=s("blockquote",null,[s("ol",null,[s("li",null,"线程模型的发展历程"),s("li",null,"Java 中的线程模型")])],-1),O={id:"_5-运行时内存结构",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#_5-运行时内存结构","aria-hidden":"true"},"#",-1),G=s("blockquote",null,[s("ol",null,[s("li",null,"运行期内存结构"),s("li",null,"对象探秘")])],-1),X={id:"_6-执行引擎",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#_6-执行引擎","aria-hidden":"true"},"#",-1),D=s("blockquote",null,[s("ol",null,[s("li",null,"执行方式"),s("li",null,"方法的执行过程")])],-1),B={id:"_7-垃圾回收理论",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#_7-垃圾回收理论","aria-hidden":"true"},"#",-1),z=s("blockquote",null,[s("p",null,"垃圾对象的特点、收集的区域 垃圾对象的判断标准 垃圾对象的定位 垃圾对象的收集算法以及衍生问题")],-1),E={id:"_8-hotspot-虚拟机-配置-hotspot",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#_8-hotspot-虚拟机-配置-hotspot","aria-hidden":"true"},"#",-1),F=s("blockquote",null,[s("p",null,"【还是理论部分】 经典垃圾回收器 针对不同垃圾回收器实现的实际的内存划分； 查看有哪些配置参数 各种配置参数讲解 配置参数表现行为等：如配置 printGCDetails，就会打印日志，打印日志是怎样的，如何理解这些日志等")],-1),K={id:"_9-工具包",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#_9-工具包","aria-hidden":"true"},"#",-1),R=s("blockquote",null,[s("p",null,"Hotspot 工具包 第三方工具包 使用案例")],-1),I={id:"_10-调优",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#_10-调优","aria-hidden":"true"},"#",-1),U=n(`<blockquote><p>方法论</p></blockquote><h2 id="_11-出错" tabindex="-1"><a class="header-anchor" href="#_11-出错" aria-hidden="true">#</a> 11. 出错</h2><blockquote><p>出错类型 排查过程 最佳实践经验 案例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- OOM
  - OOM类型
    - 服务器异常
      - Swap分区
        - 异常类型
          - Out of swap space
        - 本质原因
          - Linux系统会把不常用的内存里面的数据放到一个swap分区中，这样再次使用这些数据时，就直接从swap分区中读到内存中就行，即交换分区。虚拟内存（Virtual Memory）由物理内存（Physical Memory）和交换空间（Swap Space）两部分组成，遇到这个异常，表示虚拟内存耗尽。
        - 常见具体原因
          - 地址空间不足
          - 物理内存耗尽
          - 应用程序的本地内存泄露（native leak），例如不断申请内存空间，却不释放
        - 优化手段
          - 执行 jmap -histo:live &lt;pid&gt; 命令，强制执行FullGC，如果几次执行后内存明显下降，则基本可以确认为 Direct buffer 问题
          - 升级地址空间为64bit
          - 升级服务器配置规格或进行资源隔离
      - 线程资源
        - 异常类型
          - Unable to create new native thread
        - 本质原因
          - JVM创建的用户线程都是由底层操作系统来完成的，而操作系统创建线程需要分配空间，当JVM创建系统线程，而操作系统又没有足够资源分配时，就会抛出异常信息。
        - 常见的具体原因
          - JVM创建的线程数超过了操作系统的ulimit限制
          - 线程数超过了kernel.pid_max
          - 本地线程内存空间不足
        - 优化手段
          - 调整ulimit限制，ulimit -u xxx
          - 减小JVM其他资源使用，腾出更多空间给线程使用
            - 限制线程栈大小，即调小-Xss大小
            - 减小堆空间大小
            - 限制线程池大小
          - 修复其他应用程序内存泄露问题
      - OOM Killer机制
        - 异常类型
          - Kill process or sacrifice child
        - 本质原因
          - 默认情况下，Linux允许用户进程申请大于系统可用内存的空间，这样可以『错峰复用』，有利于提高资源利用率。但这也导致了『超卖』问题，因此当线程申请不到资源时，系统会自动激活OOM Killer机制，寻找评分较低的进程来释放资源。在监控工具上的表现是：空闲的内存空间突然大幅度上升
        - 常见的具体原因
          - 这个异常类型是由操作系统层面出发的，也就是操作系统自动触发的OOM Killer机制导致的异常
        - 优化手段
          - 可以采用资源隔离或对系统OOM Killer机制进行调优
    - Java堆
      - 内存泄露或内存溢出
        - 异常类型
          - Java heap space
        - 本质原因
          - 堆空间没有足够的空间存放新创建的对象时，就会抛出异常信息
        - 常见的具体原因
          - 请求创建一个大对象，通常是一个大数组
          - 业务流量激增，这种情况需要配合监控工具中的尖峰值时期与OOM时期来判断是否是因为业务流量激增导致的
          - 过度使用终结器（Finalizer），该对象没有立即被 GC
          - 内存泄漏（Memory Leak），大量对象引用没有释放，JVM 无法对其自动回收，常见于使用了 File 等资源没有回收
        - 优化手段
          - 通常是调高JVM堆内存空间即可，还是不行就采用下面的手段
          - 超大对象，就要检查业务代码，判断其合理性
          - 如果是业务峰值，就扩大资源，或做限流熔断等
          - 如果是内存泄露，需要找到持有的对象，修改代码设计，比如关闭没有释放的资源等
      - 多次GC仍无法满足分配资源所需要的空间
        - 异常类型
          - GC overhead limit exceeded
        - 本质原因
          - JVM花费了98%的GC时间回收不到2%的内存空间，换句话来说应用程序已经耗尽了所有可用内存，连GC也不会回收
        - 优化手段
          - 同 Java heap space
      - 数组越界
        - 异常类型
          - Requested array size exceed VM limit
        - 本质原因
          - 程序请求创建的数组超过最大长度限制抛出异常
        - 优化手段
          - 检查代码，判断合理性，或改为分批次执行等
      - 发生的时机不同，GC overhead limit exceeded 发生时，可能并没有申请内存空间使用，只是多次GC后回收的内存空间过小；而 Java heap space 发生时，一定会有JVM为完成对象的创建而申请内存空间分配
    - 方法区
      - 方法区已满
      - 本质原因
        - 方法区已满，通常是加载的class数目太多或体积太大
      - 异常类型
        - 永久代/老年代
          - 永久代空间已满
            - Permgen space
        - 元空间
          - 元空间已满
            - Metaspace
      - 优化手段
        - 根据出现的时机采用不同的办法
          - 程序启动时，调整 -XX:MaxPermSize 或 -XX:MaxMetaspaceSize 启动参数，调大方法区的大小
          - 应用重新部署时，应用没有重新启动，导致加载了多份class信息，再次重启即可
          - 运行时报错，可能是应用程序动态创建了大量的class，而这些class生命周期却很短暂，但是jvm并没有卸载class，可以配置 -XX:+CMSClassUnloadingEnabled 和 -XX:+UseConcMarkSweepGC 两个参数，允许JVM卸载class
          - 如果上面还不能解决，就是用 jmap -dump:format=b,file=dump.hprof &lt;process-id&gt; 命令dump内存对象，然后通过MAT工具分析开销最大的classloader及重复的class
    - 直接内存
      - JVM允许应用程序通过 Direct byte buffer 直接访问堆外内存，一些应用程序通过 Direct byte buffer 结合内存映射文件（memory mapped file）实现高速IO。Direct byte buffer 默认的大小是64MB，一旦超出这个限制，就会抛出异常。通常情况下，涉及到Nio操作时才会抛错。
      - 异常类型
        - Direct buffer memory
      - 本质原因
        - 应用程序使用Direct byte buffer时，超出了限制
      - 优化手段
        - 通过 -XX:MaxDirectMemorySize 启动参数，调整直接内存的大小
        - 检查堆外内存使用代码，确认是否存在内存泄露；或通过反射调用sun.misc.Cleaner的clean()方法，主动释放被 Direct ByteBuffer 持有的内存空间
        - Java只能通过ByteBuffer.allocateDirect来操作Direct ByteBuffer，因此可以通过Arthas拦截改方法进行排查
        - 检查一下 -XX:+DisableExplicitGC 参数是否启动，如果有就去掉，因为这个参数会让 System.gc() 失效
- StackOverFlow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-停顿" tabindex="-1"><a class="header-anchor" href="#_12-停顿" aria-hidden="true">#</a> 12. 停顿</h2><blockquote><p>正常指标： 获取正常指标的过程、正常指标有哪些？ 异常指标：如何监控异常指标？ 最佳实践经验 案例</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 本质： FullGC频繁
  - 表现
    - 机器 cpu 负载过高
    - 频繁 full gc 告警
    - 系统无法请求处理或者过慢， 接口无关的、全面性的无法响应请求或响应过慢
  - 原因
    - 解决思路： full gc 触发条件是 老年代空间不足， 所以追因的方向就是导致 老年代空间不足的原因：大量对象频繁进入老年代 + 老年代空间释放不掉
    - 系统并发高、执行耗时过长，或者数据量过大，导致 young gc频繁，且gc后存活对象太多，但是survivor 区存放不下（太小 或 动态年龄判断） 导致对象快速进入老年代 老年代迅速堆满
    - 发程序一次性加载过多对象到内存 （大对象），导致频繁有大对象进入老年代 造成full gc
    - 存在内存溢出的情况，老年代驻留了大量释放不掉的对象， 只要有一点点对象进入老年代 就达到 full gc的水位了
    - 元数据区加载了太多类 ，满了 也会发生 full gc
    - 堆外内存 direct buffer memory 使用不当导致
    - 也许， 你看到老年代内存不高 重启也没用 还在频繁发生full gc， 那么可能有人作妖，在代码里搞执行了 System.gc();
- 解决思路
  - 如果有监控，那么通过图形能比较直观、快速的了解gc情况；
  - 如果没有监控，那么只能看gc日志或jstat来分析 这是基本技能 一定要熟练
    - 观察年轻代 gc的情况，多久执行一次、每次gc后存活对象有多少 survivor区多大
      - 存活对象比较多 超过survivor区大小或触发动态年龄判断 =&gt; 调整内存分配比例
    - 观察老年代的内存情况 水位情况，多久执行一次、执行耗时多少、回收掉多少内存
      - 如果在持续的上涨，而且full gc后回收效果不好，那么很有可能是内存溢出了 =&gt; dump 排查具体是什么玩意
    - 如果年轻代和老年代的内存都比较低，而且频率低 那么又可能是元数据区加载太多东西了
      - 排查系统是否加载了无用的lib包，对系统所依赖的类库进行精简
    - 其实如果是自己负责的系统，可能要看是不是发版改了什么配置、代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code><span class="token operator">-</span> 运行期内存结构
  <span class="token number">1</span><span class="token punctuation">.</span> 线程私有
     <span class="token number">1</span><span class="token punctuation">.</span> 虚拟机栈： 存放内容、常见配置参数、异常；
     <span class="token number">2</span><span class="token punctuation">.</span> 本地方法栈： 存放内容、常见配置参数、异常；
     <span class="token number">3</span><span class="token punctuation">.</span> 程序计数器： 存放内容、常见配置参数、异常；
     <span class="token number">4</span><span class="token punctuation">.</span> 直接内存
  <span class="token number">2</span><span class="token punctuation">.</span> 线程共享
     <span class="token number">1</span><span class="token punctuation">.</span> Java堆： 存放内容、常见配置参数、异常；
     <span class="token number">2</span><span class="token punctuation">.</span> 方法区： 存放内容、常见配置参数、异常；
<span class="token number">1</span><span class="token punctuation">.</span> GC内存模型
  <span class="token number">1</span><span class="token punctuation">.</span> eden<span class="token operator">+</span>s0<span class="token operator">+</span>s1<span class="token operator">+</span>old<span class="token operator">+</span>永久代<span class="token operator">/</span>元空间
  <span class="token number">2</span><span class="token punctuation">.</span> minorgc、majorgc、FullGC
<span class="token number">2</span><span class="token punctuation">.</span> 垃圾回收
  <span class="token number">1</span><span class="token punctuation">.</span> 存活对象判断标准
     <span class="token number">1</span><span class="token punctuation">.</span> 可作为GCRoot的对象
     <span class="token number">2</span><span class="token punctuation">.</span> 引用类型
  <span class="token number">2</span><span class="token punctuation">.</span> 垃圾回收算法
  <span class="token number">3</span><span class="token punctuation">.</span> 垃圾回收器
     <span class="token number">1</span><span class="token punctuation">.</span> 配置参数
     <span class="token number">2</span><span class="token punctuation">.</span> 回收过程
     <span class="token number">3</span><span class="token punctuation">.</span> 优缺点分析
<span class="token number">3</span><span class="token punctuation">.</span> 对象探秘
  <span class="token number">1</span><span class="token punctuation">.</span> 对象的内存分布
     <span class="token number">1</span><span class="token punctuation">.</span> 对象头（哈希值、分代次数、持有的锁、偏向线程id、偏向时间戳）
     <span class="token number">2</span><span class="token punctuation">.</span> 实例数据（自身的字段数据和从父类继承过来的字段数据）
     <span class="token number">3</span><span class="token punctuation">.</span> 对齐填充
  <span class="token number">2</span><span class="token punctuation">.</span> 对象创建过程
     <span class="token number">1</span><span class="token punctuation">.</span> 逃逸分析（栈上分配、锁消除、标量替换等）；
     <span class="token number">2</span><span class="token punctuation">.</span> 方法区常量池能否定位类型数据；
     <span class="token number">3</span><span class="token punctuation">.</span> 分配内存；
     <span class="token number">4</span><span class="token punctuation">.</span> 处理同步问题；
     <span class="token number">5</span><span class="token punctuation">.</span> 初始化；
     <span class="token number">6</span><span class="token punctuation">.</span> 执行init，完成其他信息的构造；
  <span class="token number">3</span><span class="token punctuation">.</span> 对象内存分配过程及访问定位、对象年龄晋升过程；
<span class="token number">4</span><span class="token punctuation">.</span> 类的加载
  <span class="token number">1</span><span class="token punctuation">.</span> 双亲委派模型
  <span class="token number">2</span><span class="token punctuation">.</span> 类加载器
  <span class="token number">3</span><span class="token punctuation">.</span> 类加载过程
<span class="token number">5</span><span class="token punctuation">.</span> 实操
  <span class="token number">1</span><span class="token punctuation">.</span> 性能指标
  <span class="token number">2</span><span class="token punctuation">.</span> 工具（自带的和第三方提供的）
  <span class="token number">3</span><span class="token punctuation">.</span> 两大类问题
     <span class="token number">1</span><span class="token punctuation">.</span> 异常信息
     <span class="token number">2</span><span class="token punctuation">.</span> 优化JVM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-参考" tabindex="-1"><a class="header-anchor" href="#_13-参考" aria-hidden="true">#</a> 13. 参考</h2>`,9),A={href:"https://docs.oracle.com/javase/specs/jvms/se8/html/index.html",target:"_blank",rel:"noopener noreferrer"},T=n('<h3 id="_13-1-概览" tabindex="-1"><a class="header-anchor" href="#_13-1-概览" aria-hidden="true">#</a> 13.1. 概览</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 概览及总述：</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 类加载子系统，JVM是如何把Java语言加载到JVM中的？</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 运行期内存结构，加载到JVM中的源代码是如何使用内存的？</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 执行引擎，</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 本地方法接口及本地方法库</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 理论层次</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> JVM中的后台进程</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 字节码文件</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 类加载子系统</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 【where】类来源途径（本地文件、网络、压缩包、数据库、动态编译生成等）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 【who】类加载器（分类、作用、加载内容）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 【how】双亲委派（原理、好处）、破坏双亲委派模型的样例</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 运行期内存结构</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 线程私有区域</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 程序计数器 （存放内容、异常信息、存在的原因）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> 虚拟机栈（存放内容（局部变量表、操作数栈、动态链接、方法出口及一些附加信息）、异常信息、配置参数）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> 本地方法栈  （存放内容、异常信息）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> 线程共享区域</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> Java堆（存放内容（Java对象及数组）、配置参数、异常类型及解决方案）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> 方法区（存放内容（Java对象及数组）、配置参数、异常类型及解决方案）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> 执行引擎</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> Java中的运行方式（解释运行、编译运行），HotSpot的运行方式</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> 解释运行与编译运行的区别</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> 编译器分类（前端编译器、后端编译器、静态提前编译器，各自区别）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" disabled="disabled"><label class="task-list-item-label" for="task-item-24"> 本地方法接口与本地库</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-25"> 对象探秘</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" disabled="disabled"><label class="task-list-item-label" for="task-item-26"> 对象实例化方式</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-27" disabled="disabled"><label class="task-list-item-label" for="task-item-27"> 对象内存结构</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-28" disabled="disabled"><label class="task-list-item-label" for="task-item-28"> JVM为对象分配内存的过程【即在分代回收模型中的内存分配过程】</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-29" disabled="disabled"><label class="task-list-item-label" for="task-item-29"> 对象的创建过程（空间分配担保+对象年龄晋升确定所在区域、逃逸分析确定代码优化结果）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-30" disabled="disabled"><label class="task-list-item-label" for="task-item-30"> 对象的访问定位；</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-31" disabled="disabled"><label class="task-list-item-label" for="task-item-31"> 内存结构、内存分配过程、访问定位、升代策略</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-32" disabled="disabled"><label class="task-list-item-label" for="task-item-32"> 垃圾回收理论</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-33" disabled="disabled"><label class="task-list-item-label" for="task-item-33"> 虚拟机中的高效并发</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-34" disabled="disabled"><label class="task-list-item-label" for="task-item-34"> 具体实现层面</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-35" disabled="disabled"><label class="task-list-item-label" for="task-item-35"> 不同回收方式具有不同的运行期内存结构</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-36" disabled="disabled"><label class="task-list-item-label" for="task-item-36"> 经典垃圾回收器（各自垃圾回收过程、所采用的算法、适用场景、配置参数）</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-37" disabled="disabled"><label class="task-list-item-label" for="task-item-37"> 组合使用</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-38" disabled="disabled"><label class="task-list-item-label" for="task-item-38"> JVM调优</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-39" disabled="disabled"><label class="task-list-item-label" for="task-item-39"> 方法论</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-40" disabled="disabled"><label class="task-list-item-label" for="task-item-40"> 调优和异常</label></li></ul><h3 id="_13-2-架构图" tabindex="-1"><a class="header-anchor" href="#_13-2-架构图" aria-hidden="true">#</a> 13.2. 架构图</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="1726199438377" tabindex="0" loading="lazy"><figcaption>1726199438377</figcaption></figure><figure><img src="'+u+'" alt="周志明第三版" tabindex="0" loading="lazy"><figcaption>周志明第三版</figcaption></figure><figure><img src="'+p+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_13-3-研究方法" tabindex="-1"><a class="header-anchor" href="#_13-3-研究方法" aria-hidden="true">#</a> 13.3. 研究方法</h3><ol><li>分别了解上图中的每一部分中涉及到的理论知识；</li><li>了解Hotspot的具体实现细节</li><li>针对JVM进行基准测试，了解其基本指标数据；</li><li>之后进行调优和问题解决；</li></ol>',9);function W(Y,Z){const e=t("RouterLink"),c=t("ExternalLinkIcon");return o(),b("div",null,[k,s("h2",h,[x,i(),l(e,{to:"/02-java/jvm/ch01-overview.html"},{default:a(()=>[i("1. 概述")]),_:1})]),_,s("h2",f,[g,i(),l(e,{to:"/02-java/jvm/ch02-compileandbytecode.html"},{default:a(()=>[i("2. 前端编译阶段及字节码文件")]),_:1})]),y,s("h2",J,[M,i(),l(e,{to:"/02-java/jvm/ch03-classload.html"},{default:a(()=>[i("3. 类加载")]),_:1})]),j,s("h2",V,[C,i(),l(e,{to:"/02-java/jvm/ch04-threadmode.html"},{default:a(()=>[i("4. 线程模型")]),_:1})]),S,s("h2",O,[q,i(),l(e,{to:"/02-java/jvm/ch05-runtime.html"},{default:a(()=>[i("5. 运行时内存结构")]),_:1})]),G,s("h2",X,[w,i(),l(e,{to:"/02-java/jvm/ch06-engine.html"},{default:a(()=>[i("6. 执行引擎")]),_:1})]),D,s("h2",B,[H,i(),l(e,{to:"/02-java/jvm/ch07-garbagecollection.html"},{default:a(()=>[i("7. 垃圾回收理论")]),_:1})]),z,s("h2",E,[L,i(),l(e,{to:"/02-java/jvm/ch08-hotspot.html"},{default:a(()=>[i("8. Hotspot 虚拟机 & 配置 Hotspot")]),_:1})]),F,s("h2",K,[N,i(),l(e,{to:"/02-java/jvm/ch09-tools.html"},{default:a(()=>[i("9. 工具包")]),_:1})]),R,s("h2",I,[P,i(),l(e,{to:"/02-java/jvm/ch10-promote.html"},{default:a(()=>[i("10. 调优")]),_:1})]),U,s("p",null,[s("a",A,[i("Java SE 8 Edition"),l(c)])]),T])}const Q=d(v,[["render",W],["__file","index.html.vue"]]);export{Q as default};
