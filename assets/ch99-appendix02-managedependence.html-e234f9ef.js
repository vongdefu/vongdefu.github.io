import{_ as i,W as e,X as n,a0 as a}from"./framework-16b96b76.js";const l="/assets/1699933261729-bc9e26f3.png",t="/assets/1699933261847-7d00c672.png",s="/assets/1699933261935-b7a4e24a.png",d="/assets/1699933262024-38cf939e.png",r="/assets/1699933262109-42309356.png",c="/assets/1699933262188-5cf42830.png",u="/assets/1699933262292-cd7c5af7.png",o="/assets/1699933262418-9eb7a114.png",v="/assets/1699933262506-4c887d7b.png",g={},m=a(`<h1 id="附录-02-统一管理依赖" tabindex="-1"><a class="header-anchor" href="#附录-02-统一管理依赖" aria-hidden="true">#</a> 附录 02 统一管理依赖</h1><p>为了更好的各个版本的依赖，我们搭建一个nexus私服，然后创建一个项目，配置好所有的依赖版本后，上传私服，然后让所有的模块都以这个模块父模块进行依赖，这样就达到所有的依赖的版本管理的目的。这也是spring官方starter的制作过程。</p><p>实际的本地开发过程中，可以不用搭建nexus私服。不过本篇文章可以带你体验一下官方Spring的Starter的制作过程。</p><h3 id="_1-安装并配置-nexus3" tabindex="-1"><a class="header-anchor" href="#_1-安装并配置-nexus3" aria-hidden="true">#</a> 1. 安装并配置 nexus3</h3><h4 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装" aria-hidden="true">#</a> 1.1. 安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data
chmod 777 -R /mydata/nexus

docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

docker logs -f nexus

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-配置" tabindex="-1"><a class="header-anchor" href="#_1-2-配置" aria-hidden="true">#</a> 1.2. 配置</h4><p>安装完成之后，需要对 nexus 进行一些初始化配置。</p><h5 id="_1-2-1-修改-admin-的密码" tabindex="-1"><a class="header-anchor" href="#_1-2-1-修改-admin-的密码" aria-hidden="true">#</a> 1.2.1. 修改 admin 的密码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /mydata/nexus/data/admin.password

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>登录页面后修改密码： root1003</p><h5 id="_1-2-2-web页面上配置用于上传自定义包的用户" tabindex="-1"><a class="header-anchor" href="#_1-2-2-web页面上配置用于上传自定义包的用户" aria-hidden="true">#</a> 1.2.2. web页面上配置用于上传自定义包的用户</h5><ul><li>创建角色</li></ul><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>创建用户</li></ul><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-配置maven的config" tabindex="-1"><a class="header-anchor" href="#_2-配置maven的config" aria-hidden="true">#</a> 2. 配置maven的config</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;server&gt;
    &lt;id&gt;maven-public&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;
&lt;server&gt;
    &lt;id&gt;maven-releases&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;
&lt;server&gt;
    &lt;id&gt;maven-snapshots&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;

    &lt;mirror&gt;
    &lt;id&gt;maven-public&lt;/id&gt;
    &lt;name&gt;maven-public&lt;/name&gt;
    &lt;url&gt;http://192.168.1.150:8081/repository/maven-public/&lt;/url&gt;
    &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
&lt;/mirror&gt;

&lt;profile&gt; 
    &lt;id&gt;jdk-1.8&lt;/id&gt; 
    &lt;activation&gt; 
    &lt;activeByDefault&gt;true&lt;/activeByDefault&gt; 
    &lt;jdk&gt;1.8&lt;/jdk&gt; 
    &lt;/activation&gt; 
    &lt;properties&gt; 
    &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; 
    &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; 
    &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt; 
    &lt;/properties&gt; 
&lt;/profile&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-项目pom文件中的配置" tabindex="-1"><a class="header-anchor" href="#_3-项目pom文件中的配置" aria-hidden="true">#</a> 3. 项目pom文件中的配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;distributionManagement&gt;
    &lt;repository&gt;
        &lt;id&gt;maven-releases&lt;/id&gt;
        &lt;url&gt;http://192.168.1.150:8081/repository/maven-releases/&lt;/url&gt;
    &lt;/repository&gt;
    &lt;snapshotRepository&gt;
        &lt;id&gt;maven-snapshots&lt;/id&gt;
        &lt;url&gt;http://192.168.1.150:8081/repository/maven-snapshots/&lt;/url&gt;
    &lt;/snapshotRepository&gt;
&lt;/distributionManagement&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意此处的id要与maven中的server中的id保持一致。</p><h3 id="_4-deploy——部署到私服" tabindex="-1"><a class="header-anchor" href="#_4-deploy——部署到私服" aria-hidden="true">#</a> 4. deploy——部署到私服</h3><ul><li>在maven的窗口中，找到“create..”：</li></ul><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>在打开的窗口中输入 <code>clean deploy -DskipTests</code> ：</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>运行命令，发布到nexus私服上：</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>运行结果：</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-其他模块中的引用" tabindex="-1"><a class="header-anchor" href="#_5-其他模块中的引用" aria-hidden="true">#</a> 5. 其他模块中的引用</h3><p>在其他模块中统一引用我们自定义的starter依赖，这样就能进行统一的依赖的版本管理了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;parent&gt;
    &lt;groupId&gt;com.tianqingxiaozhu&lt;/groupId&gt;
    &lt;artifactId&gt;tianqingxiaozhu-starter&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
&lt;/parent&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-特别说明" tabindex="-1"><a class="header-anchor" href="#_6-特别说明" aria-hidden="true">#</a> 6. 特别说明</h3><p>在团队中一般是团队中的重要成员才有推送到私服的权限，因此在实际的开发过程中普通程序员是不需要创建私服的。各位读者在实践过程中，也可以直接创建一个模块，然后把这个模块安装到本地仓库后，在其他模块中引入对应坐标即可。</p><h3 id="_7-springcloud的版本" tabindex="-1"><a class="header-anchor" href="#_7-springcloud的版本" aria-hidden="true">#</a> 7. SpringCloud的版本</h3><p>分为很多个组件，每一个组件都有自己的版本坐标，这个也很好理解，SpringCloud是一个大型的工程，在这个工程里面有很多组件，每一个组件都是由一个小团队负责交付，由于负责不同的组件的团队不同，所以组件的交付时间节点肯定不一样，所以SpringCloud有一个自己的版本，这个版本中每一个组件的版本是不同的。</p><h4 id="_7-1-springcloud-alibaba的版本" tabindex="-1"><a class="header-anchor" href="#_7-1-springcloud-alibaba的版本" aria-hidden="true">#</a> 7.1. SpringCloud-Alibaba的版本</h4><p>SpringCloud-Alibaba是基于SpringBoot开发的，也是有不同的组件组成的。</p><p>因此二者有一个对应关系。</p><h4 id="_7-2-对应关系" tabindex="-1"><a class="header-anchor" href="#_7-2-对应关系" aria-hidden="true">#</a> 7.2. 对应关系</h4><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们选取的版本如下：</p><ul><li>JDK1.8</li><li>CentOS7.9</li><li>SpringBoot-2.2.5.RELEASE</li><li>SpringCloud-Hoxton.SR3</li><li>SpringCloudAlibaba-2.2.1.RELEASE</li><li>Nacos1.2.1</li><li>Seata1.3.0</li><li>Sentinel1.7.1</li><li>...</li></ul><h4 id="_7-3-创建服务模块的方法" tabindex="-1"><a class="header-anchor" href="#_7-3-创建服务模块的方法" aria-hidden="true">#</a> 7.3. 创建服务模块的方法</h4><p>项目使用idea中的 Spring Initializer 进行生成。这样做的好处是<code>当团队规模较大，并且每一个团队都负责一个模块时，可以让不同的团队只需要下载自己负责的模块代码即可，便于代码权限的管理</code>。</p>',48),p=[m];function b(h,f){return e(),n("div",null,p)}const _=i(g,[["render",b],["__file","ch99-appendix02-managedependence.html.vue"]]);export{_ as default};
