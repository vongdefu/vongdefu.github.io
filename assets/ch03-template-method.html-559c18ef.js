import{_ as n,W as s,X as a,a0 as e}from"./framework-16b96b76.js";const p={},t=e(`<h1 id="模板方法" tabindex="-1"><a class="header-anchor" href="#模板方法" aria-hidden="true">#</a> 模板方法</h1><h2 id="_1-业务场景" tabindex="-1"><a class="header-anchor" href="#_1-业务场景" aria-hidden="true">#</a> 1. 业务场景</h2><p>假如一个业务流程需要几个通用的步骤，只有部分细节不一样外，其他的都一样，这种场景都适合使用模板方法模式。例如，喝红茶，喝绿茶、喝白茶等喝茶过程可以分为： 准备茶杯、挑选茶叶、煮茶。</p><h2 id="_2-垃圾实现" tabindex="-1"><a class="header-anchor" href="#_2-垃圾实现" aria-hidden="true">#</a> 2. 垃圾实现</h2><p>垃圾的实现就是直接针对每一个场景都实现一套代码。</p><h2 id="_3-模板方法实现" tabindex="-1"><a class="header-anchor" href="#_3-模板方法实现" aria-hidden="true">#</a> 3. 模板方法实现</h2><p>垃圾实现中会有很多重复的代码，比如都需要准备茶杯、都需要进行煮茶。</p><ol><li><p>构造一个抽象类，抽象类中有一个通用的算法骨架，及代表算法步骤的虚方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DrinkTea</span><span class="token punctuation">{</span>

    <span class="token comment">// 喝茶</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">prepareCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">pickTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">cookTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 准备茶杯</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepareCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;准备了茶杯&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 挑选茶叶</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">pickTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 煮茶</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cookTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;煮茶&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>根据业务需求继承 DrinkTea 抽象类，并实现抽象类中的虚方法</p></li></ol><p>喝红茶：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrinkRedTea</span> <span class="token keyword">extends</span> <span class="token class-name">DrinkTea</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pickTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;挑选了红茶&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>喝绿茶：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrinkGreenTea</span> <span class="token keyword">extends</span> <span class="token class-name">DrinkTea</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pickTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;挑选了绿茶&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>喝白茶：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrinkWhiteTea</span> <span class="token keyword">extends</span> <span class="token class-name">DrinkTea</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pickTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;挑选了白茶&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// 喝红茶</span>
    <span class="token class-name">DrinkTea</span> drinkTea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrinkRedTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    drinkTea<span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 喝绿茶</span>
    <span class="token class-name">DrinkTea</span> drinkTea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrinkGreenTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    drinkTea<span class="token punctuation">.</span><span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-其他" tabindex="-1"><a class="header-anchor" href="#_5-其他" aria-hidden="true">#</a> 5. 其他</h2><ol><li>如果新增一种茶叶，那么就只需要创建一个类，然后继承 DrinkTea 类并实现 pickTea()虚方法即可；</li><li>如果修改茶叶，只需要修改对应的茶叶的挑选方法就行，其他不需要修改。</li></ol><p>Spring 中提供了一些 template 工具类，如 RestTemplate、RedisTemplate，有兴趣可以了解一下。</p><h2 id="_6-思路扩展" tabindex="-1"><a class="header-anchor" href="#_6-思路扩展" aria-hidden="true">#</a> 6. 思路扩展</h2><p>上面 DrinkTea 抽象类中：</p><ol><li>提供了一个模板方法： drink()， 这个方法中把业务步骤固定下来，方便客户端调用；</li><li>定义了一个留给子类实现的抽象方法 pickTea()， 这个方法是用来留给子类来实现的，方便扩展；</li><li>实现了 prepareCup() 、cookTea() 的默认方法，因为这些方法是扩展类都有的方法；</li></ol>`,22),i=[t];function c(l,o){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","ch03-template-method.html.vue"]]);export{d as default};
