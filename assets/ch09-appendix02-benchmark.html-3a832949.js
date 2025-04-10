import{_ as s,W as n,X as a,a0 as e}from"./framework-16b96b76.js";const l={},p=e(`<h1 id="附录-02-基准测试示例" tabindex="-1"><a class="header-anchor" href="#附录-02-基准测试示例" aria-hidden="true">#</a> 附录 02 基准测试示例</h1><p>好的，这里是一个简单的 Redis 基准测试案例，可以帮助你评估 Redis 在你的环境中的性能。我们将使用 Redis 自带的 <code>redis-benchmark</code> 工具。假设你已经安装并运行了 Redis 服务器，以下是基准测试的步骤：</p><ol><li><strong>启动 Redis 服务器</strong>：</li></ol><p>确保 Redis 服务器已经在运行，默认情况下，它运行在端口 6379 上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>运行基准测试</strong>：</li></ol><p>使用 <code>redis-benchmark</code> 工具进行基准测试。以下命令将测试 Redis 的性能，执行 100000 个请求，使用 50 个并发连接。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-benchmark <span class="token parameter variable">-n</span> <span class="token number">100000</span> <span class="token parameter variable">-c</span> <span class="token number">50</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你会看到类似以下的输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> PING_INLINE <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
  <span class="token number">100000</span> requests completed <span class="token keyword">in</span> <span class="token number">1.32</span> seconds
  <span class="token number">50</span> parallel clients
  <span class="token number">3</span> bytes payload
  keep alive: <span class="token number">1</span>

<span class="token number">99.94</span>% <span class="token operator">&lt;=</span> <span class="token number">1</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">2</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">3</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">4</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">5</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> PING_BULK <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
  <span class="token number">100000</span> requests completed <span class="token keyword">in</span> <span class="token number">1.32</span> seconds
  <span class="token number">50</span> parallel clients
  <span class="token number">3</span> bytes payload
  keep alive: <span class="token number">1</span>

<span class="token number">99.96</span>% <span class="token operator">&lt;=</span> <span class="token number">1</span> milliseconds
<span class="token number">99.97</span>% <span class="token operator">&lt;=</span> <span class="token number">2</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">3</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">4</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">5</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> SET <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
  <span class="token number">100000</span> requests completed <span class="token keyword">in</span> <span class="token number">1.34</span> seconds
  <span class="token number">50</span> parallel clients
  <span class="token number">3</span> bytes payload
  keep alive: <span class="token number">1</span>

<span class="token number">99.94</span>% <span class="token operator">&lt;=</span> <span class="token number">1</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">2</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">3</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">4</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">5</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> GET <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
  <span class="token number">100000</span> requests completed <span class="token keyword">in</span> <span class="token number">1.35</span> seconds
  <span class="token number">50</span> parallel clients
  <span class="token number">3</span> bytes payload
  keep alive: <span class="token number">1</span>

<span class="token number">99.93</span>% <span class="token operator">&lt;=</span> <span class="token number">1</span> milliseconds
<span class="token number">99.98</span>% <span class="token operator">&lt;=</span> <span class="token number">2</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">3</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">4</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">5</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds
<span class="token number">100.00</span>% <span class="token operator">&lt;=</span> <span class="token number">6</span> milliseconds

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>解释结果</strong>：以上输出结果表示不同命令的性能统计，例如 PING_INLINE、PING_BULK、SET、GET 等。每个部分显示了执行这些命令所花的时间和各百分位的响应时间。</li><li><strong>更多选项</strong>：你可以通过 <code>redis-benchmark --help</code> 查看更多选项和参数。例如，你可以指定不同的数据大小、命令类型和测试的键数等。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-benchmark <span class="token parameter variable">--help</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上步骤，你可以基本了解 Redis 在你的环境中的性能表现。根据你的需求和测试结果，进一步优化 Redis 配置或硬件环境。</p>`,13),o=[p];function r(i,c){return n(),a("div",null,o)}const d=s(l,[["render",r],["__file","ch09-appendix02-benchmark.html.vue"]]);export{d as default};
