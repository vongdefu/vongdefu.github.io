import{_ as l,W as r,X as d,Y as n,Z as e,$ as a,a0 as i,C as t}from"./framework-16b96b76.js";const c="/assets/docker-on-linux-2fec43bd.png",o="/assets/1725685088427-3c0b0954.png",v="/assets/1725685135928-3164df25.png",m="/assets/1725685186337-d60ff51a.png",u="/assets/1726243665825-6e521cb9.png",p="/assets/1726243717228-38c8dc78.png",b={},k=i('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><ol><li>虚拟化技术的发展；</li><li>基于虚拟化技术的扩展性应用；</li></ol><h2 id="_2-架构" tabindex="-1"><a class="header-anchor" href="#_2-架构" aria-hidden="true">#</a> 2. 架构</h2><figure><img src="'+c+'" alt="dockeronlinux" tabindex="0" loading="lazy"><figcaption>dockeronlinux</figcaption></figure><figure><img src="'+o+'" alt="1725685088427" tabindex="0" loading="lazy"><figcaption>1725685088427</figcaption></figure>',6),h=n("strong",null,"Docker",-1),g={href:"https://golang.google.cn/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/Cgroups",target:"_blank",rel:"noopener noreferrer"},_={href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.docker.com/storage/storagedriver/overlayfs-driver/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"},x={href:"https://en.wikipedia.org/wiki/Operating-system-level_virtualization",target:"_blank",rel:"noopener noreferrer"},S={href:"https://linuxcontainers.org/lxc/introduction/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/docker/libcontainer",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/opencontainers/runtime-spec",target:"_blank",rel:"noopener noreferrer"},O=i('<p><strong>Docker</strong> 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。</p><figure><img src="'+v+'" alt="1725685135928" tabindex="0" loading="lazy"><figcaption>1725685135928</figcaption></figure><h3 id="_2-1-docker-daemon" tabindex="-1"><a class="header-anchor" href="#_2-1-docker-daemon" aria-hidden="true">#</a> 2.1. Docker Daemon</h3><h3 id="_2-2-docker-client" tabindex="-1"><a class="header-anchor" href="#_2-2-docker-client" aria-hidden="true">#</a> 2.2. Docker Client</h3><h3 id="_2-3-todo" tabindex="-1"><a class="header-anchor" href="#_2-3-todo" aria-hidden="true">#</a> 2.3. todo</h3><h2 id="_3-概念" tabindex="-1"><a class="header-anchor" href="#_3-概念" aria-hidden="true">#</a> 3. 概念</h2><h3 id="_3-1-镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-镜像" aria-hidden="true">#</a> 3.1. 镜像</h3><p><strong>Docker 镜像</strong> 是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像 <strong>不包含</strong> 任何动态数据，其内容在构建之后也不会被改变。</p>',8),w={href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"},D=i('<p>镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，<strong>在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉</strong>。</p><p>分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。</p><blockquote><p><strong>Docker 镜像本质上是一组文件系统</strong>，除了包含容器运行时所需要的程序、库、资源、配置等文件，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。 为了更好的复用、定制和扩展，镜像技术使用了分层存储技术，它的主要原理是：每一层构建完成后就不会发生改变，新的一层的构建内容只发生在当前层，后一层的构建可以依赖前一层，也就是说可以在前一层的基础上进行再构建。因此，构建镜像的最佳实践就是尽可能保证不添加任何不需要的内容。由此，也产生了 compose 技术。</p></blockquote><figure><img src="'+m+'" alt="1725685186337" tabindex="0" loading="lazy"><figcaption>1725685186337</figcaption></figure><h3 id="_3-2-容器" tabindex="-1"><a class="header-anchor" href="#_3-2-容器" aria-hidden="true">#</a> 3.2. 容器</h3><p>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</p>',6),P={href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"},C=i('<p>前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为 <strong>容器存储层</strong>。</p><p>容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。</p><p>按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 <a href="/docker_practice/data_management/volume">数据卷（Volume）</a>、或者 <a href="/docker_practice/data_management/bind-mounts">绑定宿主目录</a>，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。 数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此，使用数据卷后，容器删除或者重新运行之后，数据却不会丢失。</p><blockquote><p>Docker 容器的本质是进程，这个进程拥有自己的 root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。并且，多个容器运行时，能够相互隔离。 Docker 容器在运行时，实际上是以镜像为基础层，然后在它上面创建一个存储层，但这个存储层是无状态的，也就是说用户对容器的任何操作都不会被保留，可以理解为这个存储层只是一个媒介，用户对容器的读写都是通过这个媒介来完成的，并且用户产生的数据也是通过这个媒介<strong>直接操作数据卷或是绑定的宿主目录</strong>的。 思考：容器在运行时，为什么不采用在原有基础上再次添加一个存储分层？</p><ol><li>如果采用再添加一个存储分层的方式，那么就会导致每次操作容器都会产生一个新的存储层，这就会使得单个容器占用的存储空间越来越大；</li><li>采用直接读写在数据卷或绑定的宿主目录的方式，也是遵循了“职责分离”的原则，此时就可以把容器看作是生产产品的工厂，而用户的数据就是这个工厂的产品，把工厂和产品分隔开，也有利于工厂的复用。</li></ol></blockquote><h3 id="_3-3-仓库" tabindex="-1"><a class="header-anchor" href="#_3-3-仓库" aria-hidden="true">#</a> 3.3. 仓库</h3><p>镜像构建完成后，可以很容易的在当前宿主机上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，<a href="/docker_practice/repository/registry">Docker Registry</a> 就是这样的服务。</p><p>一个 <strong>Docker Registry</strong> 中可以包含多个 <strong>仓库</strong>（Repository）；每个仓库可以包含多个 <strong>标签</strong>（Tag）；每个标签对应一个镜像。</p><p>通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 &lt;仓库名&gt;:&lt;标签&gt; 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 latest 作为默认标签。</p><p>我们可以使用公开服务，也可以使用私有服务。</p><p>由于某些原因，在国内访问这些服务可能会比较慢。</p><p>国内的一些云服务商提供了针对 Docker Hub 的镜像服务（Registry Mirror），这些镜像服务被称为 <strong>加速器</strong>。</p>',11),M={href:"https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"},L=i(`<h3 id="_3-4-卷" tabindex="-1"><a class="header-anchor" href="#_3-4-卷" aria-hidden="true">#</a> 3.4. 卷</h3><h3 id="_3-5-网络" tabindex="-1"><a class="header-anchor" href="#_3-5-网络" aria-hidden="true">#</a> 3.5. 网络</h3><h3 id="_3-6-容器编排" tabindex="-1"><a class="header-anchor" href="#_3-6-容器编排" aria-hidden="true">#</a> 3.6. 容器编排</h3><h2 id="_4-实践" tabindex="-1"><a class="header-anchor" href="#_4-实践" aria-hidden="true">#</a> 4. 实践</h2><ul><li>centos 平台上的安装过程</li></ul><h2 id="_5-常用软件的安装" tabindex="-1"><a class="header-anchor" href="#_5-常用软件的安装" aria-hidden="true">#</a> 5. 常用软件的安装</h2><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
docker pull redis


docker run -p 6379:6379 --name redis \\
-v /mydata/redis/data:/data \\
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \\
-d redis redis-server /etc/redis/redis.conf

docker update redis --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-mysql" tabindex="-1"><a class="header-anchor" href="#_5-2-mysql" aria-hidden="true">#</a> 5.2. mysql</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拉取镜像
docker pull mysql:5.7

# 把镜像中的配置文件拷贝到本地
docker cp mysql:/etc/mysql/my.cnf /mydata/mysql/conf/my.cnf

# 启动
docker run -p 3306:3306 --name mysql \\
--restart always \\
-v /mydata/mysql/log:/var/log/mysql \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf/my.cnf:/etc/mysql/my.cnf \\
-v /etc/localtime:/etc/localtime \\
-e MYSQL_ROOT_PASSWORD=root \\
-d mysql:5.7


// 拉取镜像
[root@home docker]# docker pull mysql:5.7

5.7: Pulling from library/mysql
72a69066d2fe: Pull complete 
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7

// 安装 
[root@home docker]# docker run -p 3306:3306 --name mysql \\
&gt; -v /mnt/doc/docker/mysql/log:/var/log/mysql \\
&gt; -v /mnt/doc/docker/mysql/data:/var/lib/mysql \\
&gt; -v /mnt/doc/docker/mysql/conf:/etc/mysql \\
&gt; -e MYSQL_ROOT_PASSWORD=root \\
&gt; -d mysql:5.7
0a4457b1eac5dbfdba0f483db94aeb4fd42652d9f893094cf34daa0f4877116d
[root@home docker]# docker ps -a
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   &quot;docker-entrypoint.s…&quot;   6 seconds ago   Up 5 seconds   0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql
[root@home docker]# cd /mnt/doc/docker/
[root@home mysql]# cd conf/
[root@home conf]# ll
总用量 0

// 创建配置文件
[root@home conf]# vi my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
init_connect=&#39;SET collation_connection = utf8mb4_unicode_ci&#39;
init_connect=&#39;SET NAMES utf8mb4&#39;
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

// 重启mysql
[root@home conf]# docker restart mysql
mysql
[root@home conf]# docker ps
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS          PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   &quot;docker-entrypoint.s…&quot;   6 minutes ago   Up 10 seconds   0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql

// 设置开机自启
[root@home conf]# docker update mysql --restart=always
mysql

// 解决时间问题
[root@home conf]# docker exec -it mysql bash
root@0a4457b1eac5:/# date
Sat Oct  7 12:58:45 UTC 2023
root@0a4457b1eac5:/# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
root@0a4457b1eac5:/# date
Sat Oct  7 20:58:57 CST 2023
root@0a4457b1eac5:/# exit
exit

// 最后重启
[root@home conf]# docker restart mysql
mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-1-解决时间差8小时的问题" tabindex="-1"><a class="header-anchor" href="#_5-2-1-解决时间差8小时的问题" aria-hidden="true">#</a> 5.2.1. 解决时间差8小时的问题</h4><ol><li>在客户端输入 select now(); 发现查了8小时</li><li>进入 mysql 服务端： docker exec -it mysql bash</li><li>查看mysql服务端当前时间： date ，发现差了8小时</li><li>直接修改时区为上海： ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime ，再次输入 date，发现时间已经正常</li><li>重启mysql服务端</li></ol><h4 id="_5-2-2-主从分离" tabindex="-1"><a class="header-anchor" href="#_5-2-2-主从分离" aria-hidden="true">#</a> 5.2.2. 主从分离</h4><blockquote><p>说明： 由于实验过程要求创建千万级别的数据，为了避免在主从同步的过程中出现问题。我们采用现在单例数据库上面上创建一个千万级数据，之后备份下来。再搭建三个数据库实例，之后把数据依次恢复到三个实例上，然后再建立主从关系，最后开启主从复制的过程。 <strong>当然如果不需要关注千万级数据，那么我们只需要依次创建三个实例，之后建立主从关系，最后开启主从复制过程即可。也就是只需要执行「执行创建过程」、「开启主从复制过程」两个步骤即可。</strong></p></blockquote><h5 id="_5-2-2-1-生成千万级数据的备份sql" tabindex="-1"><a class="header-anchor" href="#_5-2-2-1-生成千万级数据的备份sql" aria-hidden="true">#</a> 5.2.2.1. 生成千万级数据的备份SQL</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 把之前的单例mysql中已经生成的千万级数据备份成sql语句
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> mysql <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysqldump --databases monomer_order -uroot -proot&#39;</span> <span class="token operator">&gt;</span> /mydata/backupsqls/mysql/monomer_order.sql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-2-2-三个单例mysql的搭建过程" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-三个单例mysql的搭建过程" aria-hidden="true">#</a> 5.2.2.2. 三个单例mysql的搭建过程</h5><h6 id="_5-2-2-2-1-master搭建过程" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-1-master搭建过程" aria-hidden="true">#</a> 5.2.2.2.1. master搭建过程</h6>`,18),N={href:"https://help.aliyun.com/document_detail/67809.html",target:"_blank",rel:"noopener noreferrer"},U=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 创建容器
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token parameter variable">--name</span> mysql-master <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

// 创建配置文件
<span class="token function">vi</span> /mydata/mysql-master/conf/my.cnf

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8mb4
default-time_zone<span class="token operator">=</span><span class="token string">&#39;+8:00&#39;</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">log_bin</span><span class="token operator">=</span>master-bin
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>ROW
slow-query-log-file<span class="token operator">=</span>/var/log/mysql/slow-query.log
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">1</span>

// 设置开机自启动，并重启
<span class="token function">docker</span> update mysql-master <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
<span class="token function">docker</span> restart mysql-master

// 创建主从复制的用户信息
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>

GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

flush privileges<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-2-2-2-2-slave01搭建过程" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-2-slave01搭建过程" aria-hidden="true">#</a> 5.2.2.2.2. slave01搭建过程</h6><blockquote><p>让主机的3308端口映射出去。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 创建容器
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3308</span>:3306 <span class="token parameter variable">--name</span> mysql-slave01 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave01/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave01/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave01/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

// 创建配置文件
<span class="token function">vi</span> /mydata/mysql-slave01/conf/my.cnf

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8mb4
default-time_zone<span class="token operator">=</span><span class="token string">&#39;+8:00&#39;</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">101</span>
<span class="token assign-left variable">log_bin</span><span class="token operator">=</span>slave01-bin
<span class="token assign-left variable">relay_log</span><span class="token operator">=</span>mysql-relay-bin

// 设置开机自启动，并重启
<span class="token function">docker</span> update mysql-slave01 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
<span class="token function">docker</span> restart mysql-slave01

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-2-2-2-3-slave02搭建过程" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-3-slave02搭建过程" aria-hidden="true">#</a> 5.2.2.2.3. slave02搭建过程</h6><blockquote><p>让主机的3309端口映射出去。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 创建容器
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3309</span>:3306 <span class="token parameter variable">--name</span> mysql-slave02 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave02/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave02/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave02/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

// 创建配置文件
<span class="token function">vi</span> /mydata/mysql-slave02/conf/my.cnf

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8mb4
default-time_zone<span class="token operator">=</span><span class="token string">&#39;+8:00&#39;</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">102</span>
<span class="token assign-left variable">log_bin</span><span class="token operator">=</span>slave01-bin
<span class="token assign-left variable">relay_log</span><span class="token operator">=</span>mysql-relay-bin

// 设置开机自启动，并重启
<span class="token function">docker</span> update mysql-slave02 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
<span class="token function">docker</span> restart mysql-slave02

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-2-3-恢复数据到三个实例中" tabindex="-1"><a class="header-anchor" href="#_5-2-2-3-恢复数据到三个实例中" aria-hidden="true">#</a> 5.2.2.3. 恢复数据到三个实例中</h5><blockquote><p>由于数据量很大，我们采用先恢复数据到库里面的方式，让三个数据库实例的数据保持一致，之后再进行主从复制。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> mysql-master <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysql -uroot -proot&#39;</span> <span class="token operator">&lt;</span> /mydata/backupsqls/mysql/monomer_order.sql
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> mysql-slave01 <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysql -uroot -proot&#39;</span> <span class="token operator">&lt;</span> /mydata/backupsqls/mysql/monomer_order.sql
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> mysql-slave02 <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysql -uroot -proot&#39;</span> <span class="token operator">&lt;</span> /mydata/backupsqls/mysql/monomer_order.sql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-2-4-开启从数据库实例的主从复制过程" tabindex="-1"><a class="header-anchor" href="#_5-2-2-4-开启从数据库实例的主从复制过程" aria-hidden="true">#</a> 5.2.2.4. 开启从数据库实例的主从复制过程</h5><blockquote><p>主要分两个步骤：</p><ol><li>记录主库的位置信息；</li><li>设置从库与主库的通信的相关信息，并在主库中开启主从复制过程；</li></ol></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// <span class="token number">1</span>. 获取master的数据位置
////////////////////////////////////////////////////////////////////////////////////////////////////
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
show master status<span class="token punctuation">;</span>


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// <span class="token number">2</span>. 配置slave01
////////////////////////////////////////////////////////////////////////////////////////////////////
// <span class="token number">1</span>. 进入slave01内部命令行
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-slave01 /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>

// <span class="token number">2</span>. 设置主从复制的起始位置
CHANGE MASTER TO <span class="token assign-left variable">MASTER_HOST</span><span class="token operator">=</span><span class="token string">&#39;192.168.1.150&#39;</span>,MASTER_USER<span class="token operator">=</span><span class="token string">&#39;slave&#39;</span>,MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>, <span class="token punctuation">\\</span>
<span class="token assign-left variable">MASTER_PORT</span><span class="token operator">=</span><span class="token number">3307</span>,MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;master-bin.000005&#39;</span>,MASTER_LOG_POS<span class="token operator">=</span><span class="token number">145291152</span><span class="token punctuation">;</span>

// <span class="token number">3</span>. 开始主从复制，并查看主从复制的状态
start slave<span class="token punctuation">;</span>
show slave status<span class="token punctuation">\\</span>G

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// <span class="token number">3</span>. 配置slave02
////////////////////////////////////////////////////////////////////////////////////////////////////
// <span class="token number">1</span>. 进入slave02内部命令行
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-slave02 /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>


// <span class="token number">2</span>. 设置主从复制的起始位置
CHANGE MASTER TO <span class="token assign-left variable">MASTER_HOST</span><span class="token operator">=</span><span class="token string">&#39;192.168.1.150&#39;</span>,MASTER_USER<span class="token operator">=</span><span class="token string">&#39;slave&#39;</span>,MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>, <span class="token punctuation">\\</span>
<span class="token assign-left variable">MASTER_PORT</span><span class="token operator">=</span><span class="token number">3307</span>,MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;master-bin.000005&#39;</span>,MASTER_LOG_POS<span class="token operator">=</span><span class="token number">145291152</span><span class="token punctuation">;</span>

// <span class="token number">3</span>. 开始主从复制，并查看主从复制的状态
start slave<span class="token punctuation">;</span>
show slave status<span class="token punctuation">\\</span>G

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// <span class="token number">4</span>. 测试并验证
////////////////////////////////////////////////////////////////////////////////////////////////////
// 成功！！！done！！！



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-nexus" tabindex="-1"><a class="header-anchor" href="#_5-3-nexus" aria-hidden="true">#</a> 5.3. nexus</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data
chmod 777 -R /mydata/nexus

docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

# 查看日志，看是否启动完成
docker logs -f nexus

# 启动后，查看自动生成的admin的密码
cat /mydata/nexus/data/admin.password

# 浏览器访问，然后登陆，用户名admin
修改密码： root1003 
设置为可以匿名访问

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-rocketmq" tabindex="-1"><a class="header-anchor" href="#_5-4-rocketmq" aria-hidden="true">#</a> 5.4. rocketmq</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://blog.csdn.net/qq_28410283/article/details/115855940
https://juejin.cn/post/7045944869642043422

# 使用docker安装
https://github.com/apache/rocketmq-docker


## 在mac上下载
git clone https://github.com/apache/rocketmq-docker.git

## 上传到服务器上
scp -r rocketmq-docker root@192.168.1.150:/home/resource


## 在服务器上打开，并执行
cd image-build
sh build-image.sh 4.5.0 centos
sh build-image-dashboard.sh 1.0.0 centos


## 创建docker挂载的卷
mkdir -p /mydata/rocketmq/data/namesrv/logs \\
/mydata/rocketmq/data/namesrv/store \\
/mydata/rocketmq/data/broker/logs \\
/mydata/rocketmq/data/broker/store \\
/mydata/rocketmq/etc/broker

## 创建配置文件
vi /mydata/rocketmq/etc/broker/broker.conf

brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH
# Docker环境需要设置成宿主机IP
#brokerIP1 = {docker宿主机IP}
brokerIP1 = 192.168.56.10

## 创建compose构建文件的目录
mkdir /mydata/rocketmq/docker-compose

## 创建compose文件，【注意】，创建之前需要先查看一下上面操作步骤构建的镜像及其版本，不同时期的版本不一样，需要保持compose文件中的镜像版本与自己构建的版本的一致性；
vi docker-compose.yml

version: &#39;3&#39;
services:
  #Service for nameserver
  namesrv:
    image: apache/rocketmq:4.5.0
    container_name: rmqnamesrv
    restart: always
    ports:
      - 9876:9876
    volumes:
      - /mydata/rocketmq/data/namesrv/logs:/root/logs
    command: sh mqnamesrv

  #Service for broker
  broker:
    image: apache/rocketmq:4.5.0
    container_name: rmqbroker
    restart: always
    links:
      - namesrv
    depends_on:
      - namesrv
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    volumes:
      - /mydata/rocketmq/data/broker/logs:/home/rocketmq/logs
      - /mydata/rocketmq/data/broker/store:/home/rocketmq/store
      - /mydata/rocketmq/etc/broker/broker.conf:/home/rocketmq/conf/broker.conf
    command: sh mqbroker -c /home/rocketmq/conf/broker.conf

  #Service for rocketmq-dashboard
  dashboard:
    image: apache/rocketmq-dashboard:1.0.0-centos
    container_name: rmqdashboard
    restart: always
    ports:
      - 8080:8080
    links:
      - namesrv
    depends_on:
      - namesrv
    environment:
      - NAMESRV_ADDR=namesrv:9876

## 启动
cd /mydata/rocketmq/docker-compose
docker-compose up -d

## 验证

http://192.168.1.150:8080/#/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_5-5-rabbitmq" aria-hidden="true">#</a> 5.5. rabbitmq</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
docker search rabbitmq

docker pull rabbitmq

mkdir -p /mydata/rabbimq/

docker run -p 5672:5672 -p 15672:15672 --name rabbitmq \\
-v /mydata/rabbitmq:/var/lib/rabbitmq \\
-v /mydata/rabbitmq/logs:/var/log/rabbitmq \\
-e RABBITMQ_DEFAULT_USER=admin \\
-e RABBITMQ_DEFAULT_PASS=admin \\
-e RABBITMQ_LOG_BASE=/var/log/rabbitmq \\
-d rabbitmq

docker exec -it rabbitmq /bin/bash

rabbitmq-plugins enable rabbitmq_management

## 开机自启动
docker update rabbitmq --restart=always


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_5-6-sentinel" tabindex="-1"><a class="header-anchor" href="#_5-6-sentinel" aria-hidden="true">#</a> 5.6. sentinel</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
docker pull bladex/sentinel-dashboard:1.7.1

docker run --name sentinel -p 8858:8858 -d bladex/sentinel-dashboard:1.7.1

docker update sentinel --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-nginx" tabindex="-1"><a class="header-anchor" href="#_5-7-nginx" aria-hidden="true">#</a> 5.7. nginx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
docker run -p 80:80 -p 443:443 --name nginx \\
-v /mnt/e/backup/html:/usr/share/nginx/html \\
-v /mydata/nginx/logs:/var/log/nginx \\
-v /mydata/nginx/conf:/etc/nginx \\
-d nginx


docker update nginx --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="安装nginx" tabindex="0" loading="lazy"><figcaption>安装nginx</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
需求： 下载了极客时间的课程，每一套课程里面的每一课都有mp3、pdf、html三种文件，复制到服务器上的挂载的ntfs硬盘上了，
现在想要在mac电脑上访问这些html，最好是能够显示目录。

实现思路：使用ng作为文件服务器；

实现过程：
docker pull nginx
docker run -p 80:80 --name nginx -d nginx
docker container cp nginx:/etc/nginx /mydata/nginx/conf
mv /mydata/nginx/conf/nginx/* /mydata/nginx/conf
rm -rf /mydata/nginx/conf/nginx

docker stop nginx
docker rm nginx


下面一步很重要，把/mnt/e/backup/html映射出去
docker run -p 80:80 -p 443:443 --name nginx \\
-v /mnt:/usr/share/nginx/html \\
-v /mydata/nginx/logs:/var/log/nginx \\
-v /mydata/nginx/conf:/etc/nginx \\
-d nginx

docker update nginx --restart=always


再简单配置一下/mydata/nginx/conf/conf.d/default.conf

location / {
    root   /usr/share/nginx/html;
    autoindex on;  # 开启目录文件列表
}

测试，done！


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull fraoustin/fancyindex

docker run -p 80:80 --name fancyindex \\
-v /mnt:/share \\
-d fraoustin/fancyindex 

docker update fancyindex --restart=always

docker run -d -e &quot;CONTAINER_TIMEZONE=Europe/Paris&quot; \\
-e WEBUSER=myuser&quot; -e &quot;WEBPASSWORD=mypassword&quot; \\
-v /mnt:/share --name fancyindex -p 8080:80 fraoustin/fancyindex 

-e WEBUSER=root -e WEBPASSWORD=root \\
-e COLOR=blue \\

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_5-8-elasticsearch" aria-hidden="true">#</a> 5.8. elasticsearch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /mydata/elasticsearch/config
mkdir -p /mydata/elasticsearch/data
echo &quot;http.host: 0.0.0.0&quot; &gt;&gt; /mydata/elasticsearch/config/elasticsearch.yml

chmod -R 777 /mydata/elasticsearch/

docker pull elasticsearch:7.4.2

docker run --name elasticsearch -p 9200:9200 -p 9300:9300 \\
-e &quot;discovery.type=single-node&quot; \\
-e ES_JAVA_OPTS=&quot;-Xms1024m -Xmx2048m&quot; \\
-v /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \\
-v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \\
-d elasticsearch:7.4.2

docker update elasticsearch --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-kinaba" tabindex="-1"><a class="header-anchor" href="#_5-9-kinaba" aria-hidden="true">#</a> 5.9. kinaba</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull kibana:7.4.2
docker run --name kibana -e ELASTICSEARCH_HOSTS=http://192.168.1.150:9200 -p 5601:5601 \\
-d kibana:7.4.2

docker update kibana --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),W={href:"https://blog.csdn.net/smily77369/article/details/114926723",target:"_blank",rel:"noopener noreferrer"},B={href:"https://blog.csdn.net/fengguang54/article/details/118725400",target:"_blank",rel:"noopener noreferrer"},z=n("hr",null,null,-1),G=n("strong",null,"上面的方式在实践过程中会发现缺少部分编解码器，是不够完全的。",-1),F={href:"https://github.com/a-schild",target:"_blank",rel:"noopener noreferrer"},Q=n("strong",null,"a-schild",-1),Y={href:"https://github.com/a-schild/jave2",target:"_blank",rel:"noopener noreferrer"},H=n("strong",null,"jave2",-1),V=n("strong",null,"的思路，直接下载这个包下面的运行文件即可。",-1),j=n("p",null,[n("strong",null,"如，mac上直接下载"),n("strong",null,"jave-nativebin-osxm1/src/main/resources/ws/schild/jave/nativebin/ffmpeg-aarch64-osx ，"),n("strong",null,"下载到本地之后，然后配置一下环境变量即可。")],-1),X=n("h2",{id:"_6-参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-参考","aria-hidden":"true"},"#"),e(" 6. 参考")],-1),Z={href:"https://docs.docker.com/get-started/overview/#running-more-workloads-on-the-same-hardware",target:"_blank",rel:"noopener noreferrer"},J={href:"https://yeasy.gitbook.io/docker_practice/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.quanxiaoha.com/docker/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://pdai.tech/md/devops/docker/docker-00-overview.html",target:"_blank",rel:"noopener noreferrer"},nn=n("li",null,null,-1);function en(sn,an){const s=t("ExternalLinkIcon");return r(),d("div",null,[k,n("p",null,[h,e(" 使用 Google 公司推出的 "),n("a",g,[e("Go 语言"),a(s)]),e(" 进行开发实现，基于 Linux 内核的 "),n("a",f,[e("cgroup"),a(s)]),e("，"),n("a",_,[e("namespace"),a(s)]),e("，以及 "),n("a",y,[e("OverlayFS"),a(s)]),e(" 类的 "),n("a",q,[e("Union FS"),a(s)]),e(" 等技术，对进程进行封装隔离，属于 "),n("a",x,[e("操作系统层面的虚拟化技术"),a(s)]),e("。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 "),n("a",S,[e("LXC"),a(s)]),e("，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 "),n("a",E,[e("libcontainer"),a(s)]),e("，从 1.11 版本开始，则进一步演进为使用 "),n("a",R,[e("runC"),a(s)]),e(" 和 "),n("a",A,[e("containerd"),a(s)]),e("。")]),n("blockquote",null,[n("p",null,[e("runc 是一个 Linux 命令行工具，用于根据 "),n("a",T,[e("OCI容器运行时规范"),a(s)]),e(" 创建和运行容器。 containerd 是一个守护程序，它管理容器生命周期，提供了在一个节点上执行容器和管理镜像的最小功能集。")])]),O,n("p",null,[e("因为镜像包含操作系统完整的 root 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 "),n("a",w,[e("Union FS"),a(s)]),e(" 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 ISO 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。")]),D,n("p",null,[e("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 "),n("a",P,[e("命名空间"),a(s)]),e("。因此容器可以拥有自己的 root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。")]),C,n("p",null,[e("常见的有 "),n("a",M,[e("阿里云加速器"),a(s)]),e("、"),n("a",I,[e("DaoCloud 加速器"),a(s)]),e(" 等")]),L,n("blockquote",null,[n("p",null,[e("让主机的3307端口映射出去。注意： binlog_format 推荐使用row，具体参考【"),n("a",N,[e("这里"),a(s)]),e("】。")])]),U,n("p",null,[n("a",W,[e("Centos7 下安装最新 ffmpeg"),a(s)]),n("a",B,[e("CentOS7安装ffmpeg"),a(s)])]),z,n("p",null,[G,n("strong",null,[e("根据 "),n("strong",null,[n("a",F,[Q,a(s)])]),e("/")]),n("a",Y,[H,a(s)]),V]),j,X,n("ul",null,[n("li",null,[n("a",Z,[e("Docker overview"),a(s)]),e(" - 官网")]),n("li",null,[n("a",J,[e("Docker-从入门到实践"),a(s)])]),n("li",null,[n("a",$,[e("Docker 教程（图文讲解）"),a(s)])]),n("li",null,[n("a",K,[e("pdaiTeck-Docker"),a(s)])]),nn])])}const rn=l(b,[["render",en],["__file","docker.html.vue"]]);export{rn as default};
