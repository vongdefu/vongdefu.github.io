import{_ as n,W as s,X as a,a0 as e}from"./framework-16b96b76.js";const t={},l=e(`<h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1><p>针对要求软件系统中只保留某一个类的一个实例的业务场景。我们常写的普通的软件类，在高并发场景下，会创建多个实例，容易产生线程同步问题。因此需要采用特殊的设计模式完成类的设计。</p><p>如 Hibernate 中的 sessionfactory 就要求整个应用中只存在一个实例。此外还有一些应用场景，如日志、线程池、数据源、硬件设备驱动等。</p><h2 id="_1-饿汉式-静态常量方式" tabindex="-1"><a class="header-anchor" href="#_1-饿汉式-静态常量方式" aria-hidden="true">#</a> 1. 饿汉式-静态常量方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>

  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 本类内部创建实例对象</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 对外暴露使用方法</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在类加载时完成实例化，避免了线程同步的问题；</li><li>由于类加载机制中类的加载有很多中方式，因此不能确定是否有其他方式导致类加载；</li><li>如果软件过程中没有用到，可能会造成内存浪费；</li><li>可在生产环境下使用；</li></ul></li><li>使用场景 <ul><li>java.lang.Runtime 使用的就是这种单例模式的实现方式；</li></ul></li></ul><h2 id="_2-饿汉式-静态代码块方式" tabindex="-1"><a class="header-anchor" href="#_2-饿汉式-静态代码块方式" aria-hidden="true">#</a> 2. 饿汉式-静态代码块方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>

  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 声明</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

  <span class="token comment">// 3. 静态代码块中进行实例化</span>
  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 4. 对外暴露使用方法</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>与上面方式类似，只不过是把类实例化过程放到了静态代码块中；</li><li>也可以在生产环境下使用，并且优缺点与上面方式一样；</li></ul></li></ul><h2 id="_3-懒汉式-线程不安全-无同步措施方式" tabindex="-1"><a class="header-anchor" href="#_3-懒汉式-线程不安全-无同步措施方式" aria-hidden="true">#</a> 3. 懒汉式（线程不安全）-无同步措施方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 声明</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

  <span class="token comment">// 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>使用了懒加载的方式，但是只能在单线程模式下使用；</li><li>如果一个线程执行到了判断语句，而另一个线程也执行到了判断语句，这时就会产生两个实例；</li><li>不建议在生产环境下使用；</li></ul></li></ul><h2 id="_4-懒汉式-线程安全-同步方法" tabindex="-1"><a class="header-anchor" href="#_4-懒汉式-线程安全-同步方法" aria-hidden="true">#</a> 4. 懒汉式（线程安全）-同步方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 声明</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

  <span class="token comment">// 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在上一种模式的基础上，对使用方法进行优化，添加了 synchronized 关键字；</li><li><code>虽然这种方式是线程安全的，但这种方式的效率太低了</code>，每一个想要获取实例的方法都需要进行同步进行等待，并且 get 方法实际上只需要执行一次即可，后面的使用可以直接返回即可。</li><li>生产环境下不推荐使用这种方式；</li></ul></li></ul><h2 id="_5-懒汉式-线程不安全-同步代码块" tabindex="-1"><a class="header-anchor" href="#_5-懒汉式-线程不安全-同步代码块" aria-hidden="true">#</a> 5. 懒汉式（线程不安全）-同步代码块</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 声明</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

  <span class="token comment">// 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>虽然使用了同步代码块的方式，但是如果多线程执行 判断条件 时，可能会同步创建出多个实例</li><li>生产环境下依然不建议使用；</li></ul></li></ul><h2 id="_6-双重锁校验-dcl" tabindex="-1"><a class="header-anchor" href="#_6-双重锁校验-dcl" aria-hidden="true">#</a> 6. 双重锁校验（DCL）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
  <span class="token comment">// 1. 构造器私有化，防止外部new</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. 使用 volatile 关键字来声明</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

  <span class="token comment">// 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>第一次校验时，如果之前已经完成实例化，就直接返回，不用再次生成，提高效率；</li><li>如果没有第二次校验，在并发情况下，线程 a 和线程 b 同时进入同步代码块，假设线程 a 先执行同步代码块进行，完成实例化，之后线程 b 获取执行权限后会再次生成一个实例；加上第二次校验后，线程 b 获取执行权限后判断已经完成实例化，就会直接跳出判断返回实例化对象；</li><li>高并发场景下，线程 a 和线程 b 同时执行到 synchronized 处获取的 instance 实例为 null，但是线程 a 完成实例化后，等待执行权限的线程 b 能够通过 volatile 关键字立刻获取到 instance 变量的通知，随后 instance 变成非空；</li><li>延迟加载，效率较高，建议在生产环境下使用；</li></ul></li></ul><h2 id="_7-静态内部类" tabindex="-1"><a class="header-anchor" href="#_7-静态内部类" aria-hidden="true">#</a> 7. 静态内部类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token class-name">Singleton</span> oneSingleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>静态内部类 SingletonHolder 在类初始化时，并不会立即加载内部类，内部类不会加载，就不会生成 INSTANCE 实例，就不会占用内存空间；只有当 getInstance()方法第一次被调用时，才会加载内部类，完成初始化；</li><li>jvm 保证同一个加载器类型下，一个类型只会初始化一次；</li><li>由于是静态内部类方式完成的实例化，因此没有办法完成参数的传递；</li><li>这种方法不仅能够保证线程安全、也保证了单例的唯一性，同时还延迟了单例的实例化；</li><li>推荐使用</li></ul></li></ul><h2 id="_8-枚举类" tabindex="-1"><a class="header-anchor" href="#_8-枚举类" aria-hidden="true">#</a> 8. 枚举类</h2><p>略。</p><ul><li>分析 <ul><li>能避免多线程同步问题，还能避免反序列化时生成多个实例的问题；</li><li>推荐使用</li></ul></li></ul><h2 id="_9-单例模式在-jdk-中的使用" tabindex="-1"><a class="header-anchor" href="#_9-单例模式在-jdk-中的使用" aria-hidden="true">#</a> 9. 单例模式在 jdk 中的使用</h2><p>java.lang.Runtime 就是经典的饿汉式单例模式；</p>`,29),p=[l];function c(i,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","ch01-singleton.html.vue"]]);export{d as default};
