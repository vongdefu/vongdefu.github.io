import{_ as d,W as r,X as s,Y as e,Z as i,$ as l,a0 as n,C as t}from"./framework-16b96b76.js";const o={},c=n(`<h1 id="_2-使用apollo作为配置中心" tabindex="-1"><a class="header-anchor" href="#_2-使用apollo作为配置中心" aria-hidden="true">#</a> 2. 使用Apollo作为配置中心</h1><h3 id="_1-apollo部署及使用过程" tabindex="-1"><a class="header-anchor" href="#_1-apollo部署及使用过程" aria-hidden="true">#</a> 1. apollo部署及使用过程</h3><h4 id="_1-1-部署过程" tabindex="-1"><a class="header-anchor" href="#_1-1-部署过程" aria-hidden="true">#</a> 1.1. 部署过程</h4><ol><li>下载三个zip包，并解压</li><li>导入数据库</li><li><s>创建eureka服务</s></li><li><s>修改数据库中apolloconfigdb.serverconfig表中 eureka.service.url 的值为eureka的地址</s></li><li>依次启动 config 、 admin、 portal 服务</li><li>检查8080端口占用情况，如果被占用启动时会报错，8080是config所在服务的端口</li></ol><h4 id="_1-2-使用" tabindex="-1"><a class="header-anchor" href="#_1-2-使用" aria-hidden="true">#</a> 1.2. 使用</h4><h5 id="_1-2-1-配置apollo" tabindex="-1"><a class="header-anchor" href="#_1-2-1-配置apollo" aria-hidden="true">#</a> 1.2.1. 配置Apollo</h5><p>管理台地址的端口为： 8070</p><p>初始化用户名密码为： apollo / admin</p><ol><li>创建项目</li><li>创建配置项</li><li>发布</li></ol><h5 id="_1-2-2-在项目中使用" tabindex="-1"><a class="header-anchor" href="#_1-2-2-在项目中使用" aria-hidden="true">#</a> 1.2.2. 在项目中使用</h5><ol><li>在项目的pom中引入Apollo的客户端</li><li>在项目的application.yml文件中添加：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apollo:
  bootstrap:
    enabled: true
    namespaces: application
  meta: http://192.168.1.150:8080 # 此地址为config服务所在的地址

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加app.properties文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.id=XXXX

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建配置文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
@EnableApolloConfig(value = &quot;application&quot;, order = 10)
public class AppConfig {
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建配置项并使用</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RestController
@RequestMapping(&quot;configConsumer&quot;)
@RefreshScope
public class ConfigClientController {

    @Value(&quot;\${config_info}&quot;)
    private String config;

    @RequestMapping(&quot;/getConfigInfo&quot;)
    public String getConfigInfo(){
        return config;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-3-注意事项" aria-hidden="true">#</a> 1.3. 注意事项</h4><ol><li>在部署后，在web控制台进行配置时，创建了一个项目，如果遇到报错信息： 请联系管理员 等信息，可以去找对应服务的启动文件，启动文件中有日志所在的地址，查看日志即可得知哪里出了问题；如果是端口占用，可以使用 netstat -nultp 命令查看端口占用情况。</li><li>项目启动后，发现一直报错，应先考虑配置文件是否有误。注意： apollo.meta 地址是config服务所在的地址，不要写错。</li><li>configuration 项目和 administer 项目依赖eureka，端口是8080，要看看此端口是否已经被占用。</li></ol><h4 id="_1-4-参考" tabindex="-1"><a class="header-anchor" href="#_1-4-参考" aria-hidden="true">#</a> 1.4. 参考</h4>`,21),u={href:"https://blog.csdn.net/SIMBA1949/article/details/107561778",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.apolloconfig.com/#/zh/README",target:"_blank",rel:"noopener noreferrer"},h=n(`<hr><h3 id="_2-把application-yml文件整体放入apollo" tabindex="-1"><a class="header-anchor" href="#_2-把application-yml文件整体放入apollo" aria-hidden="true">#</a> 2. 把application.yml文件整体放入apollo</h3><h4 id="_2-1-项目背景" tabindex="-1"><a class="header-anchor" href="#_2-1-项目背景" aria-hidden="true">#</a> 2.1. 项目背景</h4><p>把springboot项目中的application.yml文件，整个都放入Apollo中，启动时项目先从Apollo中获取配置文件，然后根据拉取的配置文件进行启动。这样可以达到配置文件保密的效果。</p><h4 id="_2-2-添加依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-添加依赖" aria-hidden="true">#</a> 2.2. 添加依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
	&lt;groupId&gt;com.ctrip.framework.apollo&lt;/groupId&gt;
	&lt;artifactId&gt;apollo-client&lt;/artifactId&gt;
	&lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-添加注解" tabindex="-1"><a class="header-anchor" href="#_2-3-添加注解" aria-hidden="true">#</a> 2.3. 添加注解</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@EnableApolloConfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-发布配置文件内容" tabindex="-1"><a class="header-anchor" href="#_2-4-发布配置文件内容" aria-hidden="true">#</a> 2.4. 发布配置文件内容</h4><p>使用 <a href="">http://www.toyaml.com/index.html</a> 把yml格式转成properties格式。然后复制出所有的配置项，复制到Apollo管理页面上进行发布。</p><h4 id="_2-5-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-5-修改配置文件" aria-hidden="true">#</a> 2.5. 修改配置文件</h4><p>注释掉之前所有的配置项，只添加下面内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app:
  id: 103929
apollo:
  bootstrap:
    enabled: true
    namespaces: application

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-创建本地缓存目录" tabindex="-1"><a class="header-anchor" href="#_2-6-创建本地缓存目录" aria-hidden="true">#</a> 2.6. 创建本地缓存目录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
sudo mkdir /opt/data
sudo chmod -R 777 data
sudo mkdir /opt/settings
cd settings
sudo touch server.properties
sudo vi server.properties

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 server.properties 文件中添加:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>env=DEV
apollo.meta=http://192.168.1.150:8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-启动后进行验证" tabindex="-1"><a class="header-anchor" href="#_2-7-启动后进行验证" aria-hidden="true">#</a> 2.7. 启动后进行验证</h4><p>成功</p><h4 id="_2-8-注意事项" tabindex="-1"><a class="header-anchor" href="#_2-8-注意事项" aria-hidden="true">#</a> 2.8. 注意事项</h4><ol><li>创建本地目录是重要的步骤，不能省略，否则项目启动时会自己初始化，不会拉取Apollo的配置，创建完目录后还需要保证目录的读取权限。</li><li>创建完本地目录后还需要创建 server.properties 文件，用来指定运行的环境。</li><li></li></ol><h4 id="_2-9-参考地址" tabindex="-1"><a class="header-anchor" href="#_2-9-参考地址" aria-hidden="true">#</a> 2.9. 参考地址</h4>`,22),p={href:"https://blog.csdn.net/qq_20042935/article/details/104262790",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bookstack.cn/read/ctripcorp-apollo/spilt.2.5e3f6033aee666be.md#1.5%20%E5%BA%94%E7%94%A8%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),g=e("h3",{id:"_3-修改本地缓存的配置文件的目录地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-修改本地缓存的配置文件的目录地址","aria-hidden":"true"},"#"),i(" 3. 修改本地缓存的配置文件的目录地址")],-1),_=e("p",null,"大多数公司里面的开发机都是经过部署过的，很多目录并没有读写权限，并且很多大厂内的电脑多是需要自己的账号登陆的，因此，可以把Apollo的本地缓存地址放置到用户自己的Home目录下。此外，由于配置中心的私密性，并且都是内网环境，因此还把Apollo的配置配置地址隐藏掉。这样只需要在家目录下放置 .settings.xml 文件，里面只需要指定环境即可。",-1);function x(f,A){const a=t("ExternalLinkIcon");return r(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[i("Apollo下载与安装"),l(a)])]),e("li",null,[e("a",v,[i("Apollo官方文档"),l(a)])])]),h,e("ol",null,[e("li",null,[e("a",p,[i("淘东电商项目（10） -Apollo分布式配置中心管理application.yml"),l(a)])]),e("li",null,[e("a",m,[i("携程 Apollo v1.4 开发指南"),l(a)])])]),b,g,_])}const E=d(o,[["render",x],["__file","ch02-apollo.html.vue"]]);export{E as default};
