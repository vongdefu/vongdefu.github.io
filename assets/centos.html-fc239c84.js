import{_ as o,W as c,X as r,$ as p,a2 as a,a0 as u,C as m,Y as n,Z as s}from"./framework-16b96b76.js";const d={},b=u(`<h1 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h1><h3 id="_1-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-常用命令" aria-hidden="true">#</a> 1. 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//---------- 服务管理
// 服务状态<span class="token operator">|</span>关闭服务｜启动服务｜重启服务
systemctl status<span class="token operator">|</span>stop<span class="token operator">|</span>start<span class="token operator">|</span>restart xxx 
// 重新加载服务
systemctl daemon-reload 
// 是否已经加入自启动
systemctl is-enabled xxx
// 开启自启动服务
systemctl <span class="token builtin class-name">enable</span> nacos.service


//---------- 防火墙管理
// 防火墙
firewall-cmd <span class="token parameter variable">-h</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>

// --------- 端口监听状况
<span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span>
<span class="token function">netstat</span> <span class="token parameter variable">-nultp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">8080</span>

// --------- 磁盘管理
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
lsblk 
// 查看系统磁盘空间 
<span class="token function">df</span> <span class="token parameter variable">-h</span>

// 查看某一个文件夹下面所有文件的大小
<span class="token function">du</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-h</span> /mydata/nexus/data/log/


// --------- 复制到远程服务器
<span class="token function">scp</span> <span class="token parameter variable">-r</span> jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 
// 下载
<span class="token function">scp</span> <span class="token parameter variable">-r</span> username@ip:remote_folder local_folder    //-r表示递归
// 复制文件夹到服务器上
<span class="token function">scp</span> <span class="token parameter variable">-r</span> local_folder remote_username@remote_ip:remote_folder
// 上传和下载，可以使用 filezilla 客户端

上传
<span class="token function">scp</span> <span class="token parameter variable">-r</span> local_folder username@ip:remote_folder
//或者
<span class="token function">scp</span> <span class="token parameter variable">-r</span> local_folder remote_ip:remote_folder


// 启动server

//示例
<span class="token function">scp</span> <span class="token parameter variable">-r</span> root@ip:/apps/local/nginx-1.8.0.tar.gz /Users/gary/Documents/

// --------- <span class="token function">docker</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--tail</span> <span class="token number">100</span>   529a4d9afd8e



// 删除当前目录及子文件夹下面所有的target文件夹
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token parameter variable">-type</span> d <span class="token string">&quot;target&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&#39;{}&#39;</span> +

// 删除当前目录及子文件夹内所有的以.iml结尾的文件
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&#39;*.iml&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&#39;{}&#39;</span> +


// 查看linux系统的最大的线程数
$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> user

// 查看Java进程的线程数
$ <span class="token function">ps</span> <span class="token parameter variable">-eLf</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

// 查看 test.log 中的kafka消息
$ <span class="token function">grep</span> <span class="token string">&quot;kafka&quot;</span> test.log <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> // 最近1条数据
$ <span class="token function">grep</span> <span class="token string">&quot;kafka&quot;</span> test.log <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span> // 最后1条数据

// 统计kafka消息
$ <span class="token function">cat</span> adx-feed.log <span class="token operator">|</span> <span class="token function">grep</span> kafka <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token function">grep</span> <span class="token string">&quot;关键词&quot;</span> adx-log.log <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

// 统计每个小时的kafka消息
$ <span class="token function">cat</span> adx-baiduUtils.log <span class="token operator">|</span> <span class="token function">grep</span> kafka <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot; &quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> 

// 统计15点的视频素材数
$ <span class="token function">cat</span> adx-baiduUtils.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;2022-07-27 15:&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> kafka <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;videoList&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;,&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> 

// 统计某一整点的每分钟的请求异常个数
$  <span class="token function">cat</span> adx-feedJob.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;2022-07-28 15:&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;errorMsg&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;2022-07-28 15:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

// 统计kafka消息中视频素材数量
$ <span class="token function">cat</span> adx-baiduUtils.log  <span class="token operator">|</span> <span class="token function">grep</span> kafka  <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;videoList&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;,&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">less</span>  <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k1</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

// 统计一个文档中出现过kafka的消息
$ <span class="token function">cat</span> xxx.log <span class="token operator">|</span> <span class="token function">grep</span> kafka <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-100</span>
$ <span class="token function">cat</span> xxx.log <span class="token operator">|</span> <span class="token function">grep</span> kafka <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-100</span>


// 截断
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;字符串&quot;</span> <span class="token string">&#39;{print $N}&#39;</span> // <span class="token variable">$N</span> 表示把日志文件截成多个小段后，获取的第n个字段（从1开始数）

// 去重
<span class="token function">uniq</span> <span class="token parameter variable">-c</span>

// 排序，按照大小，从大到小输出
<span class="token function">sort</span> <span class="token parameter variable">-rn</span>

// 
<span class="token function">grep</span> kafka adx-dYFeedsJobByUseIDFAZHJob.log-2022-08-10 <span class="token punctuation">\\</span>
adx-dYFeedsJobByUseIDFAGoodJob.log-2022-08-10 <span class="token punctuation">\\</span>
adx-dYFeedsJobByUseIDFAQueueJob.log-2022-08-10 <span class="token punctuation">\\</span>
<span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;productName&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;,&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-20</span>



// 如果一不小心在一个master分支上写了代码，也执行到了commit上，但是并没有提交到远程分支上；此时可以执行 cherry-pick 操作，在idea中执行

// 以兆为单位查看文件大小
ll <span class="token parameter variable">-lh</span> log.log


<span class="token punctuation">[</span>root@home ~<span class="token punctuation">]</span><span class="token comment"># uname -a</span>
Linux home.centos <span class="token number">3.10</span>.0-1160.76.1.el7.x86_64 <span class="token comment">#1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">查询日志的做法</p><ol><li>在业务系统中复现问题，浏览器f12打开控制台，然后找到对应的接口</li><li>拿着接口url去找对应的日志文件，然后vi打开日志文件</li><li>shift+g 直接到文档最后，在vi的命令模式下输入“/{要查找的url}”进行查询</li><li>找到对应的线程名称，再次在vi的“命令模式”下输入“/{线程名称}”，然后使用shift+n向下查找，即可找到堆栈信息</li></ol></div><h3 id="_2-常用软件的安装" tabindex="-1"><a class="header-anchor" href="#_2-常用软件的安装" aria-hidden="true">#</a> 2. 常用软件的安装</h3>`,5),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`// 把下载好的jdk安装包上传至 centos 
➜  Downloads `),n("span",{class:"token function"},"scp"),s(),n("span",{class:"token parameter variable"},"-r"),s(` jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// 解压到安装路径下
`),n("span",{class:"token punctuation"},"["),s("root@home jdk1.8.0_144"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# tar zxvf /mnt/doc/package/jdk-8u144-linux-x64.tar.gz -C /usr/setup/"),s(`

// 修改环境变量
`),n("span",{class:"token punctuation"},"["),s("root@home jdk1.8.0_144"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# vi /etc/profile"),s(`

// 最后一行添加
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s(`/usr/setup/jdk1.8.0_144
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"JRE_HOME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$JAVA_HOME"),s(`/jre
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"CLASSPATH"),n("span",{class:"token operator"},"="),s("./:"),n("span",{class:"token variable"},"$JAVA_HOME"),s("/lib:"),n("span",{class:"token variable"},"$JAVA_HOME"),s(`/jre/lib
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"PATH")]),n("span",{class:"token operator"},"="),n("span",{class:"token environment constant"},"$PATH"),n("span",{class:"token builtin class-name"},":"),n("span",{class:"token variable"},"$JAVA_HOME"),s(`/bin

// 使环境变量生效
`),n("span",{class:"token punctuation"},"["),s("root@home jdk1.8.0_144"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# source /etc/profile"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`// nacos运行环境依赖于jdk环境，因此需要先安装jdk。
// 在mac上把从GitHub上下载下来的安装包上传至centos
➜  Downloads `),n("span",{class:"token function"},"scp"),s(),n("span",{class:"token parameter variable"},"-r"),s(` nacos-server-2.2.3.tar.gz root@192.168.1.150:/mnt/doc/package 
nacos-server-2.2.3.tar.gz          

// 解压到安装目录下
`),n("span",{class:"token punctuation"},"["),s("root@home package"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# tar zxvf nacos-server-2.2.3.tar.gz -C /usr/setup/"),s(`

// 修改start.sh启动脚本，添加jdk的环境变量
`),n("span",{class:"token punctuation"},"["),s("root@home bin"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# vi /usr/setup/nacos/bin/startup.sh "),s(`
`),n("span",{class:"token punctuation"},".."),s(`.
`),n("span",{class:"token comment"},"# limitations under the License."),s(`

`),n("span",{class:"token assign-left variable"},"cygwin"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token assign-left variable"},"darwin"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token assign-left variable"},"os400"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"uname"),n("span",{class:"token variable"},"`")]),s('"')]),s(),n("span",{class:"token keyword"},"in"),s(`
CYGWIN*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"cygwin"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
Darwin*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"darwin"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
OS400*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"os400"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"esac"),s(`
`),n("span",{class:"token function-name function"},"error_exit"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"ERROR: '),n("span",{class:"token variable"},"$1"),s(' !!"')]),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s("/usr/setup/jdk1.8.0_144 "),n("span",{class:"token comment"},"## 添加这一行"),s(`
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),n("span",{class:"token environment constant"},"$HOME"),s(`/jdk/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s(`/usr/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s(`/opt/taobao/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"unset"),s(` JAVA_HOME
`),n("span",{class:"token punctuation"},".."),s(`.

// 开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容
`),n("span",{class:"token punctuation"},"["),s("root@home bin"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# vi /usr/lib/systemd/system/nacos.service"),s(`

`),n("span",{class:"token punctuation"},"["),s("Unit"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"Description"),n("span",{class:"token operator"},"="),s(`nacos
`),n("span",{class:"token assign-left variable"},"After"),n("span",{class:"token operator"},"="),s(`network.target

`),n("span",{class:"token punctuation"},"["),s("Service"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"Type"),n("span",{class:"token operator"},"="),s(`forking
`),n("span",{class:"token assign-left variable"},"ExecStart"),n("span",{class:"token operator"},"="),s("/usr/setup/nacos/bin/startup.sh "),n("span",{class:"token parameter variable"},"-m"),s(` standalone
`),n("span",{class:"token assign-left variable"},"ExecReload"),n("span",{class:"token operator"},"="),s(`/usr/setup/nacos/bin/shutdown.sh
`),n("span",{class:"token assign-left variable"},"ExecStop"),n("span",{class:"token operator"},"="),s(`/usr/setup/nacos/bin/shutdown.sh
`),n("span",{class:"token assign-left variable"},"PrivateTmp"),n("span",{class:"token operator"},"="),s(`true

`),n("span",{class:"token punctuation"},"["),s("Install"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"WantedBy"),n("span",{class:"token operator"},"="),s(`multi-user.target

// 开启自启动服务
systemctl `),n("span",{class:"token builtin class-name"},"enable"),s(` nacos.service

// 重新加载自启动服务
systemctl daemon-reload

// 查看是否假如自启动服务
systemctl is-enabled nacos.service

// 开放端口
firewall-cmd `),n("span",{class:"token parameter variable"},"--zone"),n("span",{class:"token operator"},"="),s("public --add-port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"8848"),s("/tcp "),n("span",{class:"token parameter variable"},"--permanent"),s(`
firewall-cmd `),n("span",{class:"token parameter variable"},"--reload"),s(`

// 访问地址： ip:8848/nacos

// 用户名密码： nacos / nacos

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`
// 下载
`),n("span",{class:"token comment"},"# wget https://github.com/alibaba/nacos/releases/download/1.2.1/nacos-server-1.2.1.tar.gz"),s(`

// 解压到安装目录
`),n("span",{class:"token comment"},"# tar zxvf nacos-server-1.2.1.tar.gz -C /usr/setup/"),s(`
// 进入bin目录，启动
`),n("span",{class:"token comment"},"# ./startup.sh -m standalone"),s(`

// 开放端口
`),n("span",{class:"token comment"},"# firewall-cmd --zone=public --add-port=8848/tcp --permanent"),s(`
`),n("span",{class:"token comment"},"# firewall-cmd --reload"),s(`


// `),n("span",{class:"token operator"},"<"),s(`---- start 配置开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容

`),n("span",{class:"token punctuation"},"["),s("Unit"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"Description"),n("span",{class:"token operator"},"="),s(`nacos
`),n("span",{class:"token assign-left variable"},"After"),n("span",{class:"token operator"},"="),s(`network.target

`),n("span",{class:"token punctuation"},"["),s("Service"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"Type"),n("span",{class:"token operator"},"="),s(`forking
`),n("span",{class:"token assign-left variable"},"ExecStart"),n("span",{class:"token operator"},"="),s("/usr/setup/nacos/bin/startup.sh "),n("span",{class:"token parameter variable"},"-m"),s(` standalone
`),n("span",{class:"token assign-left variable"},"ExecReload"),n("span",{class:"token operator"},"="),s(`/usr/setup/nacos/bin/shutdown.sh
`),n("span",{class:"token assign-left variable"},"ExecStop"),n("span",{class:"token operator"},"="),s(`/usr/setup/nacos/bin/shutdown.sh
`),n("span",{class:"token assign-left variable"},"PrivateTmp"),n("span",{class:"token operator"},"="),s(`true

`),n("span",{class:"token punctuation"},"["),s("Install"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token assign-left variable"},"WantedBy"),n("span",{class:"token operator"},"="),s(`multi-user.target

// 开启自启动服务
`),n("span",{class:"token comment"},"# systemctl enable nacos.service"),s(`

// 重新加载自启动服务
`),n("span",{class:"token comment"},"# systemctl daemon-reload"),s(`
// 配置开机自启动 end ----`),n("span",{class:"token operator"},">"),s(`

// 修改启动文件中jdk的目录
`),n("span",{class:"token function"},"vi"),s(` /usr/setup/nacos/bin/startup.sh 

`),n("span",{class:"token comment"},"# limitations under the License."),s(`

`),n("span",{class:"token assign-left variable"},"cygwin"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token assign-left variable"},"darwin"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token assign-left variable"},"os400"),n("span",{class:"token operator"},"="),s(`false
`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"uname"),n("span",{class:"token variable"},"`")]),s('"')]),s(),n("span",{class:"token keyword"},"in"),s(`
CYGWIN*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"cygwin"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
Darwin*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"darwin"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
OS400*`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token assign-left variable"},"os400"),n("span",{class:"token operator"},"="),s("true"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"esac"),s(`
`),n("span",{class:"token function-name function"},"error_exit"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"ERROR: '),n("span",{class:"token variable"},"$1"),s(' !!"')]),s(`
    `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s("/usr/setup/jdk1.8.0_144 "),n("span",{class:"token comment"},"## 添加这一行"),s(`
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),n("span",{class:"token environment constant"},"$HOME"),s(`/jdk/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s(`/usr/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token assign-left variable"},"JAVA_HOME"),n("span",{class:"token operator"},"="),s(`/opt/taobao/java
`),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-e"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$JAVA_HOME"),s('/bin/java"')]),s(),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"unset"),s(` JAVA_HOME

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`// 安装yum源的工具包
yum `),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(` yum-utils

// 配置docker的安装源
yum-config-manager `),n("span",{class:"token punctuation"},"\\"),s(`
--add-repo `),n("span",{class:"token punctuation"},"\\"),s(`
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum `),n("span",{class:"token function"},"install"),s(" docker-ce docker-ce-cli containerd.io docker-compose-plugin "),n("span",{class:"token parameter variable"},"-y"),s(`

// 设置开机自启
systemctl `),n("span",{class:"token builtin class-name"},"enable"),s(),n("span",{class:"token function"},"docker"),s(`


// 配置阿里云的镜像源，帮助文档： https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` /etc/docker
`),n("span",{class:"token function"},"tee"),s(" /etc/docker/daemon.json "),n("span",{class:"token operator"},"<<-"),n("span",{class:"token string"},`'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF`),s(`
systemctl daemon-reload
systemctl restart `),n("span",{class:"token function"},"docker"),s(`

// 查看安装之后的docker信息，最后可以看到配置的阿里云的镜像源
`),n("span",{class:"token punctuation"},"["),s("root@home ～"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker info"),s(`
Client: Docker Engine - Community
 Version:    `),n("span",{class:"token number"},"24.0"),s(`.6
 Context:    default
 Debug Mode: `),n("span",{class:"token boolean"},"false"),s(`
 Plugins:
  buildx: Docker Buildx `),n("span",{class:"token punctuation"},"("),s("Docker Inc."),n("span",{class:"token punctuation"},")"),s(`
    Version:  v0.11.2
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose `),n("span",{class:"token punctuation"},"("),s("Docker Inc."),n("span",{class:"token punctuation"},")"),s(`
    Version:  v2.21.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: `),n("span",{class:"token number"},"0"),s(`
  Running: `),n("span",{class:"token number"},"0"),s(`
  Paused: `),n("span",{class:"token number"},"0"),s(`
  Stopped: `),n("span",{class:"token number"},"0"),s(`
 Images: `),n("span",{class:"token number"},"0"),s(`
 Server Version: `),n("span",{class:"token number"},"24.0"),s(`.6
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: `),n("span",{class:"token boolean"},"true"),s(`
  Using metacopy: `),n("span",{class:"token boolean"},"false"),s(`
  Native Overlay Diff: `),n("span",{class:"token boolean"},"true"),s(`
  userxattr: `),n("span",{class:"token boolean"},"false"),s(`
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: `),n("span",{class:"token number"},"1"),s(`
 Plugins:
  Volume: `),n("span",{class:"token builtin class-name"},"local"),s(`
  Network: bridge `),n("span",{class:"token function"},"host"),s(` ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file `),n("span",{class:"token builtin class-name"},"local"),s(` logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc version: v1.1.9-0-gccaecfc
 init version: de40ad0
 Security Options:
  seccomp
   Profile: `),n("span",{class:"token builtin class-name"},"builtin"),s(`
 Kernel Version: `),n("span",{class:"token number"},"3.10"),s(`.0-1160.71.1.el7.x86_64
 Operating System: CentOS Linux `),n("span",{class:"token number"},"7"),s(),n("span",{class:"token punctuation"},"("),s("Core"),n("span",{class:"token punctuation"},")"),s(`
 OSType: linux
 Architecture: x86_64
 CPUs: `),n("span",{class:"token number"},"8"),s(`
 Total Memory: `),n("span",{class:"token number"},"23"),s(`.26GiB
 Name: home.centos
 ID: bf0036ec-e56a-4c78-ae07-d8e224f11480
 Docker Root Dir: /var/lib/docker
 Debug Mode: `),n("span",{class:"token boolean"},"false"),s(`
 Experimental: `),n("span",{class:"token boolean"},"false"),s(`
 Insecure Registries:
  `),n("span",{class:"token number"},"127.0"),s(`.0.0/8
 Registry Mirrors:
  https://hpifphoh.mirror.aliyuncs.com/
 Live Restore Enabled: `),n("span",{class:"token boolean"},"false"),s(`

// 查看docker的版本信息
`),n("span",{class:"token punctuation"},"["),s("root@home ~"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# docker version"),s(`
Client: Docker Engine - Community
 Version:           `),n("span",{class:"token number"},"24.0"),s(`.6
 API version:       `),n("span",{class:"token number"},"1.43"),s(`
 Go version:        go1.20.7
 Git commit:        ed223bc
 Built:             Mon Sep  `),n("span",{class:"token number"},"4"),s(),n("span",{class:"token number"},"12"),s(":35:25 "),n("span",{class:"token number"},"2023"),s(`
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          `),n("span",{class:"token number"},"24.0"),s(`.6
  API version:      `),n("span",{class:"token number"},"1.43"),s(),n("span",{class:"token punctuation"},"("),s("minimum version "),n("span",{class:"token number"},"1.12"),n("span",{class:"token punctuation"},")"),s(`
  Go version:       go1.20.7
  Git commit:       1a79695
  Built:            Mon Sep  `),n("span",{class:"token number"},"4"),s(),n("span",{class:"token number"},"12"),s(":34:28 "),n("span",{class:"token number"},"2023"),s(`
  OS/Arch:          linux/amd64
  Experimental:     `),n("span",{class:"token boolean"},"false"),s(`
 containerd:
  Version:          `),n("span",{class:"token number"},"1.6"),s(`.24
  GitCommit:        61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc:
  Version:          `),n("span",{class:"token number"},"1.1"),s(`.9
  GitCommit:        v1.1.9-0-gccaecfc
 docker-init:
  Version:          `),n("span",{class:"token number"},"0.19"),s(`.0
  GitCommit:        de40ad0

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`# 下载docker compose
curl -SL https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
# 添加可执行权限
chmod +x /usr/local/bin/docker-compose
# 将文件copy到 /usr/bin/目录下
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# 查看版本
docker-compose --version

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`
`),n("span",{class:"token function"},"wget"),s(` http://www.ffmpeg.org/releases/ffmpeg-4.3.2.tar.gz
`),n("span",{class:"token function"},"tar"),s(),n("span",{class:"token parameter variable"},"-zxvf"),s(` ffmpeg-4.3.2.tar.gz

// 安装 yasm 汇编编译器
yum `),n("span",{class:"token function"},"install"),s(" yasm "),n("span",{class:"token parameter variable"},"-y"),s(`

// 重新安装 ffmpeg
`),n("span",{class:"token builtin class-name"},"cd"),s(` ffmpeg-4.3.2
./configure `),n("span",{class:"token parameter variable"},"--prefix"),n("span",{class:"token operator"},"="),s(`/usr/local/ffmpeg
`),n("span",{class:"token function"},"make"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"make"),s(),n("span",{class:"token function"},"install"),s(`

`),n("span",{class:"token function"},"vi"),s(` /etc/ld.so.conf 文件后面添加： /usr/local/ffmpeg/lib

执行 ldconfig

`),n("span",{class:"token function"},"vi"),s(` /etc/profile

`),n("span",{class:"token comment"},"#set ffmpeg environment"),s(`
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"PATH")]),n("span",{class:"token operator"},"="),n("span",{class:"token environment constant"},"$PATH"),s(`:/usr/local/ffmpeg/bin


`),n("span",{class:"token builtin class-name"},"source"),s(` /etc/profile 


ffmpeg `),n("span",{class:"token parameter variable"},"-version"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("root@localhost redis5.0.7"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# cd /home/redis-5.0.7/utils/"),s(`
`),n("span",{class:"token punctuation"},"["),s("root@localhost utils"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# ll"),s(`
total `),n("span",{class:"token number"},"52"),s(`
-rw-rw-r--. `),n("span",{class:"token number"},"1"),s(" root root  "),n("span",{class:"token number"},"593"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` build-static-symbols.tcl
-rw-rw-r--. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1303"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` cluster_fail_time.tcl
-rw-rw-r--. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1098"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` corrupt_rdb.c
drwxrwxr-x. `),n("span",{class:"token number"},"2"),s(" root root   "),n("span",{class:"token number"},"60"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` create-cluster
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"2149"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` generate-command-help.rb
drwxrwxr-x. `),n("span",{class:"token number"},"3"),s(" root root   "),n("span",{class:"token number"},"31"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` graphs
drwxrwxr-x. `),n("span",{class:"token number"},"2"),s(" root root   "),n("span",{class:"token number"},"39"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` hashtable
drwxrwxr-x. `),n("span",{class:"token number"},"2"),s(" root root   "),n("span",{class:"token number"},"70"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` hyperloglog
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"9567"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` install_server.sh
drwxrwxr-x. `),n("span",{class:"token number"},"2"),s(" root root   "),n("span",{class:"token number"},"63"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` lru
-rw-rw-r--. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1277"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` redis-copy.rb
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1352"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` redis_init_script
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1047"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` redis_init_script.tpl
-rw-rw-r--. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"1762"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` redis-sha1.rb
drwxrwxr-x. `),n("span",{class:"token number"},"2"),s(" root root  "),n("span",{class:"token number"},"135"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` releasetools
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root "),n("span",{class:"token number"},"3787"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` speed-regression.tcl
-rwxrwxr-x. `),n("span",{class:"token number"},"1"),s(" root root  "),n("span",{class:"token number"},"693"),s(" Nov "),n("span",{class:"token number"},"20"),s("  "),n("span",{class:"token number"},"2019"),s(` whatisdoing.sh
`),n("span",{class:"token punctuation"},"["),s("root@localhost utils"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# ./install_server.sh"),s(`
Welcome to the redis `),n("span",{class:"token function"},"service"),s(` installer
This script will `),n("span",{class:"token builtin class-name"},"help"),s(" you easily "),n("span",{class:"token builtin class-name"},"set"),s(` up a running redis server

Please `),n("span",{class:"token keyword"},"select"),s(" the redis port "),n("span",{class:"token keyword"},"for"),s(" this instance: "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"6379"),n("span",{class:"token punctuation"},"]"),s(`
Selecting default: `),n("span",{class:"token number"},"6379"),s(`
Please `),n("span",{class:"token keyword"},"select"),s(" the redis config "),n("span",{class:"token function"},"file"),s(" name "),n("span",{class:"token punctuation"},"["),s("/etc/redis/6379.conf"),n("span",{class:"token punctuation"},"]"),s(` /usr/setup/redis5.0.7/redis.conf
Please `),n("span",{class:"token keyword"},"select"),s(" the redis log "),n("span",{class:"token function"},"file"),s(" name "),n("span",{class:"token punctuation"},"["),s("/var/log/redis_6379.log"),n("span",{class:"token punctuation"},"]"),s(` /usr/setup/redis5.0.7/log/6379.log
Please `),n("span",{class:"token keyword"},"select"),s(" the data directory "),n("span",{class:"token keyword"},"for"),s(" this instance "),n("span",{class:"token punctuation"},"["),s("/var/lib/redis/6379"),n("span",{class:"token punctuation"},"]"),s(` /usr/setup/redis5.0.7/data
Please `),n("span",{class:"token keyword"},"select"),s(" the redis executable path "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(` /usr/setup/redis5.0.7/bin/redis-server
Selected config:
Port           `),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"6379"),s(`
Config `),n("span",{class:"token function"},"file"),s("    "),n("span",{class:"token builtin class-name"},":"),s(` /usr/setup/redis5.0.7/redis.conf
Log `),n("span",{class:"token function"},"file"),s("       "),n("span",{class:"token builtin class-name"},":"),s(` /usr/setup/redis5.0.7/log/6379.log
Data `),n("span",{class:"token function"},"dir"),s("       "),n("span",{class:"token builtin class-name"},":"),s(` /usr/setup/redis5.0.7/data
Executable     `),n("span",{class:"token builtin class-name"},":"),s(` /usr/setup/redis5.0.7/bin/redis-server
Cli Executable `),n("span",{class:"token builtin class-name"},":"),s(` /usr/setup/redis5.0.7/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf `),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(` /etc/init.d/redis_6379
Installing service`),n("span",{class:"token punctuation"},".."),s(`.
Successfully added to chkconfig`),n("span",{class:"token operator"},"!"),s(`
Successfully added to runlevels `),n("span",{class:"token number"},"345"),n("span",{class:"token operator"},"!"),s(`
Starting Redis server`),n("span",{class:"token punctuation"},".."),s(`.
Installation successful`),n("span",{class:"token operator"},"!"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(y,A){const t=m("Tabs");return c(),r("div",null,[b,p(t,{id:"34",data:[{title:"JDK"},{title:"Nacos"},{title:"Docker"},{title:"FFMpeg"},{title:"redis5"}]},{tab0:a(({title:e,value:l,isActive:i})=>[v]),tab1:a(({title:e,value:l,isActive:i})=>[k,f]),tab2:a(({title:e,value:l,isActive:i})=>[g,h]),tab3:a(({title:e,value:l,isActive:i})=>[x]),tab4:a(({title:e,value:l,isActive:i})=>[w]),_:1})])}const $=o(d,[["render",_],["__file","centos.html.vue"]]);export{$ as default};
