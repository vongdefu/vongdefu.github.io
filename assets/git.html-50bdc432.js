import{_ as i,W as t,X as l,Y as n,Z as s,$ as c,a0 as a,C as o}from"./framework-16b96b76.js";const r={},d=a(`<h1 id="git及github" tabindex="-1"><a class="header-anchor" href="#git及github" aria-hidden="true">#</a> Git及Github</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 生成key，在命令行里面填写文件名，多个key使用用户名进行区分， 如： id_rsa_vongdefu</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;your.email@example.com&quot;</span>


<span class="token comment"># 为每一个仓库设置用户名和邮箱</span>
<span class="token comment">#   只需要在仓库目录下执行即可</span>
<span class="token function">git</span> config user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config user.email <span class="token string">&quot;your.email@example.com&quot;</span>
<span class="token comment">#   之后在 .git/config 可以看到设置后的用户名和邮箱</span>

<span class="token comment"># 全局配置，最好不要进行这个操作</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name zeanzai
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;zeanzai.me@gmail.com&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token number">127.0</span>.0.1:7890

<span class="token comment"># 注意：如果是需要身份验证的，就用这种格式：</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy 用户名:密码@IP:端口
<span class="token comment"># 如果需要设置https，那么就需要把 http.proxy 改成 https.proxy</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token number">127.0</span>.0.1:7890

<span class="token comment"># 查看一下配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>


<span class="token comment"># 测试</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com

<span class="token comment"># 使用git克隆私有仓库</span>
<span class="token function">git</span> clone <span class="token parameter variable">--branch</span> master https://x-access-token:<span class="token variable">\${{ secrets.PAT_TOKEN }</span><span class="token punctuation">}</span>@github.com/vongdefu/vongdefu-dochub.git vongdefu-dochub

<span class="token comment"># ssh</span>
ssh-copy-id <span class="token parameter variable">-i</span> ./id_ed25519.pub root@192.168.1.150

<span class="token comment"># 空仓库</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> init 
<span class="token function">touch</span> README.md
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/zeanzai/test.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token string">&quot;master&quot;</span>

<span class="token comment"># 已有仓库</span>
<span class="token builtin class-name">cd</span> existing_git_repo
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/zeanzai/test.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token string">&quot;master&quot;</span>

<span class="token comment"># 分支管理</span>
<span class="token comment">## 创建并切换到新分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token variable">\${{branch_name}</span><span class="token punctuation">}</span> 

<span class="token comment">## 删除分支</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="克隆github私有仓库" tabindex="-1"><a class="header-anchor" href="#克隆github私有仓库" aria-hidden="true">#</a> 克隆GitHub私有仓库</h2>`,3),p=n("li",null,[s("需要在"),n("strong",null,"用户的配置页面"),s("中配置一个PAT（personal access token）；")],-1),u=n("li",null,"在 仓库的url中配置上这个PAT ： 见上面",-1),v={href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"仓库的setting中",-1),b=n("li",null,[s("在"),n("strong",null,"仓库的setting中"),s("配置上面这个生成的 PAT ；")],-1),g=a(`<h2 id="合并提交记录" tabindex="-1"><a class="header-anchor" href="#合并提交记录" aria-hidden="true">#</a> 合并提交记录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1. 拉取最新代码
git checkout master
git pull origin master

# 2. 启动交互式 rebase（假设要合并全部提交）
git rebase -i --root

# 3. 在打开的编辑器中：
# 将第一个提交前的 &quot;pick&quot; 保留
# 其他所有提交前的 &quot;pick&quot; 改为 &quot;squash&quot; 或简写 &quot;s&quot;
# 保存退出编辑器

# 4. 处理合并提交信息（会打开新编辑器）
# 删除所有旧提交信息，写入新提交信息
# 保存退出

# 5. 强制推送更新（⚠️ 重要警告：这会重写历史）
git push origin master --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(h,f){const e=o("ExternalLinkIcon");return t(),l("div",null,[d,n("ol",null,[p,u,n("li",null,[s("如果私有仓库需要使用GitHubActions，则还需要 "),n("ol",null,[n("li",null,[s("根据 peaceiris/actions-gh-pages@v3 的"),n("a",v,[s("要求"),c(e)]),s("，在"),m,s("设置 action 的权限，设置为可读写")]),b])])]),g])}const q=i(r,[["render",k],["__file","git.html.vue"]]);export{q as default};
