import{_ as e,W as i,X as t,Y as n,Z as s,$ as l,a0 as c,C as o}from"./framework-16b96b76.js";const d="/assets/1699933288803-bd4754e9.png",r="/assets/1699933288898-5695c060.png",p={},u=n("h1",{id:"附录-03-多租户saas实战",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#附录-03-多租户saas实战","aria-hidden":"true"},"#"),s(" 附录 03 多租户SaaS实战")],-1),v={href:"https://mp.weixin.qq.com/s/6Gihii6HtBsgcbiQ-2XvUg",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"修改 application.yml 数据库URL、账户、密码",-1),k=c(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">url</span><span class="token punctuation">:</span>  jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.100.100<span class="token punctuation">:</span>3306/test_una_saas<span class="token punctuation">?</span>useSSL=false
<span class="token key atrule">username</span><span class="token punctuation">:</span> admin
<span class="token key atrule">password</span><span class="token punctuation">:</span> admin@2020<span class="token tag">!@</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建application.yml数据库URL对应的schema，并在改数据库中创建<code>master_tenant</code>表。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>schema： test_una_saas
table： master_tenant
SQL： 
    CREATE TABLE \`master_tenant\` (
      \`ID\` varchar(255) NOT NULL,
      \`TENANT\` varchar(30) NOT NULL,
      \`URL\` varchar(255) NOT NULL,
      \`USERNAME\` varchar(30) NOT NULL,
      \`PASSWORD\` varchar(30) NOT NULL,
      \`version\` int(11) NOT NULL,
      PRIMARY KEY (\`ID\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在<code>master_tenant</code>表中插入一条数据</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>master_tenant<span class="token punctuation">\`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;tenant_1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;firstTenant&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jdbc:mysql://192.168.100.100:3306/db2020?useSSL=false&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin@2020!@#&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建schema，并创建user表</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>schema： db2020
table： user
SQL： 
    CREATE TABLE \`user\` (
      \`ID\` varchar(50) NOT NULL,
      \`USERNAME\` varchar(255) DEFAULT NULL,
      \`PASSWORD\` varchar(22) DEFAULT NULL,
      \`TENANT\` varchar(255) DEFAULT NULL,
      PRIMARY KEY (\`ID\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在db2020.user表中插入一条数据</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc123456&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;firstTenant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>使用<code>firstTenant</code>作为租户id，使用<code>test</code>作为用户名，使用<code>abc123456</code>作为登陆密码。</li></ol><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>使用另外一个链接和另外一个租户的用户再次登录，同样成功。</li></ol>',13);function b(g,_){const a=o("ExternalLinkIcon");return i(),t("div",null,[u,n("ol",null,[n("li",null,[s("说明文档可以参考《"),n("a",v,[s("Spring Boot 构建多租户 SaaS 平台核心技术指南"),l(a)]),s("》。")]),m]),k])}const h=e(p,[["render",b],["__file","ch99-appendix03-una_saas.html.vue"]]);export{h as default};
