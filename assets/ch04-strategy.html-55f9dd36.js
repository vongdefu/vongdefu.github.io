import{_ as n,W as s,X as a,a0 as e}from"./framework-16b96b76.js";const t={},p=e(`<h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><h2 id="_1-业务场景" tabindex="-1"><a class="header-anchor" href="#_1-业务场景" aria-hidden="true">#</a> 1. 业务场景</h2><p>假设有一个业务场景是，根据不同的文件类型进行不同的解析，则伪代码就会像这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>type<span class="token operator">==</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">//按照A格式解析</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type<span class="token operator">==</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">//按B格式解析</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
 <span class="token comment">//按照默认格式解析</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样实现的缺点：</p><ol><li>不符合开闭原则（多扩展开放，对修改关闭）。因为修改或增加一个文件类型的解析，都需要修改原来的代码；</li><li>不符合单一职责原则。</li></ol><p>理想的效果是『给程序传入策略的名称以及所需要的参数，让程序自动找到对应的策略类，并自动执行具体策略』。</p><h2 id="_2-策略模式的实现" tabindex="-1"><a class="header-anchor" href="#_2-策略模式的实现" aria-hidden="true">#</a> 2. 策略模式的实现</h2><ol><li><p>定义策略接口，接口中只定义两个方法，一个是获得具体的策略实现类，一个是公共的业务逻辑方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFileStrategy</span> <span class="token punctuation">{</span>

    <span class="token comment">//属于哪种文件解析类型</span>
    <span class="token class-name">FileTypeResolveEnum</span> <span class="token function">gainFileType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//封装的公用算法（具体的解析方法）</span>
    <span class="token keyword">void</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token class-name">Object</span> objectparam<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>具体策略实现策略接口，并分别实现接口中的两个方法</p><p>针对 A 类型文件的处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AFileResolve</span> <span class="token keyword">implements</span> <span class="token class-name">IFileStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileTypeResolveEnum</span> <span class="token function">gainFileType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileTypeResolveEnum<span class="token punctuation">.</span>File_A_RESOLVE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token class-name">Object</span> objectparam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;A 类型解析文件，参数：{}&quot;</span><span class="token punctuation">,</span>objectparam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//A类型解析具体逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对 B 类型文件的处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BFileResolve</span> <span class="token keyword">implements</span> <span class="token class-name">IFileStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileTypeResolveEnum</span> <span class="token function">gainFileType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileTypeResolveEnum<span class="token punctuation">.</span>File_B_RESOLVE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token class-name">Object</span> objectparam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;B 类型解析文件，参数：{}&quot;</span><span class="token punctuation">,</span>objectparam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//B类型解析具体逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认文件类型的处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultFileResolve</span> <span class="token keyword">implements</span> <span class="token class-name">IFileStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileTypeResolveEnum</span> <span class="token function">gainFileType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileTypeResolveEnum<span class="token punctuation">.</span>File_DEFAULT_RESOLVE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token class-name">Object</span> objectparam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;默认类型解析文件，参数：{}&quot;</span><span class="token punctuation">,</span>objectparam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//默认类型解析具体逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>借助 Spring 容器，把具体的策略实现类和策略名称放到 Map 中，并对外提供一个方法：根据传入的策略名称自动执行具体策略</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrategyUseService</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span><span class="token punctuation">{</span>


    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileTypeResolveEnum</span><span class="token punctuation">,</span> <span class="token class-name">IFileStrategy</span><span class="token punctuation">&gt;</span></span> iFileStrategyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//把不同策略放到map</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">IFileStrategy</span><span class="token punctuation">&gt;</span></span> tmepMap <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">IFileStrategy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tmepMap<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>strategyService <span class="token operator">-&gt;</span> iFileStrategyMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>strategyService<span class="token punctuation">.</span><span class="token function">gainFileType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strategyService<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 对外提供方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resolveFile</span><span class="token punctuation">(</span><span class="token class-name">FileTypeResolveEnum</span> fileTypeResolveEnum<span class="token punctuation">,</span> <span class="token class-name">Object</span> objectParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">IFileStrategy</span> iFileStrategy <span class="token operator">=</span> iFileStrategyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>fileTypeResolveEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>iFileStrategy <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            iFileStrategy<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>objectParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用" aria-hidden="true">#</a> 3. 使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StrategyUseService</span> strategyUseService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/resolveFile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resolveFile</span><span class="token punctuation">(</span><span class="token class-name">FileTypeResolveEnum</span> fileTypeResolveEnum<span class="token punctuation">,</span> <span class="token class-name">Object</span> objectParam<span class="token punctuation">)</span><span class="token punctuation">{</span>
        strategyUseService<span class="token punctuation">.</span><span class="token function">resolveFile</span><span class="token punctuation">(</span>fileTypeResolveEnum<span class="token punctuation">,</span> objectParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-其他" tabindex="-1"><a class="header-anchor" href="#_4-其他" aria-hidden="true">#</a> 4. 其他</h2><ol><li>如果需要修改类型为 A 的解析逻辑，只需要修改 AFileResolve ，并不需要修改调用过程；</li><li>如果要增加一个类型为 C 的解析逻辑，只需要添加一个类来实现 IFileStrategy ，也不需要修改调用过程；</li></ol>`,13),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","ch04-strategy.html.vue"]]);export{d as default};
