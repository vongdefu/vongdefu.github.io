import{_ as n,W as s,X as a,a0 as e}from"./framework-16b96b76.js";const t={},p=e(`<h1 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h1><h2 id="_1-业务场景" tabindex="-1"><a class="header-anchor" href="#_1-业务场景" aria-hidden="true">#</a> 1. 业务场景</h2><p>实际业务开发过程中，我们往往需要对请求进行各种校验，如黑白名单校验、参数校验、功能权限校验、数据权限校验等。并且这些校验往往是一个链，如先校验黑名单，如果通过就校验参数，再通过就校验功能权限......也就是校验成功一个就接着校验下一个，其中只要有一个没有通过，下面的也就不需要校验了。</p><p>还记得上学时，每次发试卷的时候，老师都会把试卷递给第一排的同学，然后第一排同学拿一张后把剩下的传递给座位后面的同学，责任链就类似于这种场景。</p><h2 id="_2-垃圾实现" tabindex="-1"><a class="header-anchor" href="#_2-垃圾实现" aria-hidden="true">#</a> 2. 垃圾实现</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>黑白名单校验<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>参数校验<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>功能权限校验<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>数据权限校验<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 业务逻辑</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-责任链模式" tabindex="-1"><a class="header-anchor" href="#_3-责任链模式" aria-hidden="true">#</a> 3. 责任链模式</h2><ol><li><p>提供一个抽象类，抽象类中完成对责任链的组装，并提供一个抽象方法让子类自己去实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>

    <span class="token comment">//责任链中的下一个对象</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractHandler</span> nextHandler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNextHandler</span><span class="token punctuation">(</span><span class="token class-name">AbstractHandler</span> nextHandler<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> nextHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractHandler</span> <span class="token function">getNextHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nextHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 需要子类实现的虚方法</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> filterRequest<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
    * 先执行自身的业务逻辑，之后执行下一个对象的业务逻辑...
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getNextHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">getNextHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>责任链中的节点继承上一步的抽象类，并实现各自的业务逻辑</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* 参数校验对象
**/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//顺序排第1，最先校验</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckParamFilterObject</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;非空参数检查&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
*  安全校验对象
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//校验顺序排第2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckSecurityFilterObject</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//invoke Security check</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;安全调用校验&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
*  黑名单校验对象
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//校验顺序排第3</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckBlackFilterObject</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//invoke black list check</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;校验黑名单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
*  规则拦截对象
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//校验顺序排第4</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckRuleFilterObject</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//check rule</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;check rule&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提供一个工具类，把责任链节点对象串起来，并提供调用入口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;ChainPatternDemo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChainPatternDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">AbstractHandler</span> abstractHandler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractHandler</span> <span class="token function">getAbstractHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> abstractHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAbstractHandler</span><span class="token punctuation">(</span><span class="token class-name">AbstractHandler</span> abstractHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>abstractHandler <span class="token operator">=</span> abstractHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 自动注入各个责任链的对象</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AbstractHandler</span><span class="token punctuation">&gt;</span></span> abstractHandleList<span class="token punctuation">;</span>

    <span class="token comment">//spring注入后自动执行，责任链的对象连接起来</span>
    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initializeChainFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>abstractHandleList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                abstractHandler <span class="token operator">=</span> abstractHandleList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token class-name">AbstractHandler</span> currentHander <span class="token operator">=</span> abstractHandleList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">AbstractHandler</span> nextHander <span class="token operator">=</span> abstractHandleList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                currentHander<span class="token punctuation">.</span><span class="token function">setNextHandler</span><span class="token punctuation">(</span>nextHander<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 直接调用这个方法使用</span>
    <span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Response</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        abstractHandler<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h2><ol><li>直接在业务代码中调用 ChainPatternDemo 中的 exec()方法。</li><li>如果需要修改某个责任节点，只需要修改这个责任节点的 doFilter()方法；</li><li>如果需要新增一个责任节点，只需要新建一个类继承 AbstractHandler 类，并实现虚方法 doFilter()；</li></ol>`,10),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","ch05-responsibility-chain.html.vue"]]);export{d as default};
