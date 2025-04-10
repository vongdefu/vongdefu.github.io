import{_ as i,W as l,X as t,Y as n,Z as a,$ as e,a0 as c,C as o}from"./framework-16b96b76.js";const d="/assets/1699933284574-31aee14d.png",p="/assets/1699933284668-16dd1828.png",u="/assets/1699933284751-826aa480.png",r="/assets/1699933284829-e2fd1942.png",v="/assets/1699933284968-c31aba61.png",m="/assets/1699933285089-69c0ce02.png",b="/assets/1699933285186-c76086bb.png",g="/assets/1699933285280-ffddb9b2.png",k="/assets/1699933285373-50f23a6d.png",x="/assets/1699933285482-cb4607a9.png",f="/assets/1699933285602-d3d8c42a.png",h="/assets/1699933285711-a6d28d94.png",E={},S=c(`<h1 id="附录-01-统一响应体-nacos可配置全局异常" tabindex="-1"><a class="header-anchor" href="#附录-01-统一响应体-nacos可配置全局异常" aria-hidden="true">#</a> 附录 01 统一响应体+Nacos可配置全局异常</h1><h3 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h3><p>我们知道接口的返回，一般情况下就只有三种状态，成功、失败和超时响应，而接口的方法调用结果可能会出现很多异常信息。在实际的业务开发过程中，我们要求接口的异常信息是一定要处理掉的，不能直接把一个堆栈信息返回给前端用户的。这样要求的原因是：</p><ol><li>一大堆的异常信息会影响用户体验。用户是不懂技术的，接口返回一大堆异常信息，用户本能的就认为系统出了问题，这影响用户体验；但是返回能够被用户所理解的信息，则是可以接受的。</li><li>暴露异常信息影响系统可用性评价。接口返回一大堆异常信息，除了用户本能的认为系统出了问题，业务部门也会觉得系统此时不可用。</li><li>异常信息千奇百怪，不利于前端处理。</li></ol><p>事实上，一个架构优良的系统，是需要前端开发和后端开发相互配合的。前端和后端开发约定好接口的响应格式，然后再根据这个格式完成前后端的公共模块的开发。这个过程中后端对应的业务功能就是<code>全局统一响应</code>。</p><h3 id="_2-全局统一响应" tabindex="-1"><a class="header-anchor" href="#_2-全局统一响应" aria-hidden="true">#</a> 2. 全局统一响应</h3><p>实际上，我们可以把异常也归类为一种特殊的返回结果。全局统一响应有什么业务要求或业务特点呢？</p><p>对异常的要求：</p><ol><li>支持代码中抛出异常信息，并且抛出的异常信息的格式要求统一；</li><li>异常信息的格式应与接口正常响应或失败响应的消息体格式保持一致；</li><li>异常信息要支持国际化；</li><li>异常信息编码要具有业务含义；</li></ol><p>对响应的要求：</p><ol><li>支持默认的响应成功或响应失败的结果；</li><li>响应信息支持国际化；</li><li>与异常信息的格式保持一致；</li></ol><p>除了这些以外，还会有其他细化的需求。以下是几个常用的场景：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 遇到业务出现异常时，直接抛出异常信息

// 有些前端传过来的请求参数需要做校验，遇到校验不通过的直接抛出异常信息

// 接口正常响应时，返回正常响应消息体

// 接口响应失败时，返回默认的响应失败消息体

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的业务特点，我们明确实现目标：</p><ol><li>Nacos作为配置中心，但是需要我们自行编写工具类，最终达到的目的是，同一个异常编码对应多国语言的异常信息，并且能够自动刷新（即修改Nacos立即生效）；</li><li>配合Validation使用时，对业务主流程侵入性达到最小，最好是零侵入；</li><li>统一响应体消息格式，并且可以直接使用success和error方法；</li><li>业务代码中抛出异常的方式与jdk抛出异常方式在使用方式上一致，但是业务中抛出的异常信息的响应结果与自定义的响应消息体格式保持一致；</li></ol><h3 id="_3-实战过程" tabindex="-1"><a class="header-anchor" href="#_3-实战过程" aria-hidden="true">#</a> 3. 实战过程</h3><p>主要包括三个方面：</p><ol><li>重写语言解析器。这个步骤是可选的，主要目的是改变请求头里面语言的属性名。</li><li>构建配置信息。这个步骤是把国际化的配置信息配置到配置中心，然后监听数据变更，并构建一个工具类让统一响应功能和统一异常处理功能使用。</li><li>构建统一响应消息体。这个步骤是格式化接口的响应信息，需要利用到上一步编写的工具类。</li><li>构建统一异常处理。这个步骤是格式化异常信息的响应信息，需要利用到第二步编写的工具类。</li></ol><h4 id="_3-1-重写语言解析器" tabindex="-1"><a class="header-anchor" href="#_3-1-重写语言解析器" aria-hidden="true">#</a> 3.1. 重写语言解析器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LanguageResolver implements LocaleResolver {
    /**
     * 请求header字段
     */
    private static final String LANG = &quot;lang&quot;;

    /**
     * session
     */
    private static final String LANG_SESSION = &quot;lang_session&quot;;
    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        String lang = request.getHeader(LANG);
        Locale locale = Locale.getDefault();
        if (StringUtils.isNotBlank(lang)){
            String[] language = lang.split(&quot;_&quot;);
            locale = new Locale(language[0], language[1]);

            HttpSession session = request.getSession();
            session.setAttribute(LANG_SESSION, locale);
        }else{
            HttpSession session = request.getSession();
            Locale localeInSession = (Locale) session.getAttribute(LANG_SESSION);
            if (localeInSession != null){
                locale = localeInSession;
            }
        }
        return locale;
    }

    @Override
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MessageConfig {

    @Bean
    public LocaleResolver localeResolver(){
        return new LanguageResolver();
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-构建配置信息" tabindex="-1"><a class="header-anchor" href="#_3-2-构建配置信息" aria-hidden="true">#</a> 3.2. 构建配置信息</h4><p>这里我们选用Alibaba-Nacos组件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-config&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 10300
spring:
  application:
    name: global-exception
  cloud:
    nacos:
      config:
        # nacos的服务端地址
        server-addr: 192.168.1.150:8848
        # 应用接入的命名空间的id
        namespace: 8d269024-f215-4195-be82-f6343cafde9c
        # 命名分组
        group: DEV

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置一个枚举类，枚举出所有的国际化的异常码表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public enum NacosJson2ObjEnum {

    MESSAGE_ZH_CN(&quot;message_zh_cn&quot;, &quot;业务异常码表（简中）&quot;, Map.class),
    MESSAGE_EN_US(&quot;message_en_us&quot;, &quot;业务异常码表（英文）&quot;, Map.class)
    ;

    private String dataId;
    private String desc;
    private Class clz;

    NacosJson2ObjEnum(String dataId, String desc, Class clz) {
        this.dataId = dataId;
        this.desc=desc;
        this.clz =clz;
    }

    public String getDataId(){
        return dataId;
    }

    public String getDesc(){
        return desc;
    }

    public Class getClz(){
        return clz;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用Spring初始化Bean机制，把国际化异常码表信息加载本地内存中，并设置监听器监听Nacos上面的配置变化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Slf4j
@Component
public class NacosConfig implements InitializingBean {
    @Autowired
    private NacosConfigProperties nacosConfigProperties;

    @Value(&quot;\${spring.cloud.nacos.config.group}&quot;)
    private String group;

    private ConfigService configService;
    private Map&lt;String, Object&gt; localCatchMap = new HashMap&lt;&gt;();

    private static ThreadPoolExecutor executor =
            new ThreadPoolExecutor(
                    2,
                    4,
                    1,
                    TimeUnit.SECONDS,
                    new LinkedBlockingDeque&lt;&gt;(100),
                    new ThreadPoolExecutor.CallerRunsPolicy()
            );

    @Override
    public void afterPropertiesSet() throws Exception {
        // 获取 Nacos 服务端 具体配置
        String serverAddr = nacosConfigProperties.getServerAddr();
        String namespace = nacosConfigProperties.getNamespace();

        // 封装 Nacos server 配置参数
        Properties properties = new Properties();
        properties.put(PropertyKeyConst.SERVER_ADDR, serverAddr);
        properties.put(PropertyKeyConst.NAMESPACE, namespace);
        if (configService == null) {
            configService = NacosFactory.createConfigService(properties);
        }

        NacosJson2ObjEnum[] nacosJson2ObjEnums = NacosJson2ObjEnum.values();
        for (NacosJson2ObjEnum nacosJson2ObjEnum : nacosJson2ObjEnums) {
            String dataId = nacosJson2ObjEnum.getDataId();
            String config = configService.getConfig(dataId, group, 1000);

            // 把获取到的配置信息放到本地map中
            jsonToObject(config, nacosJson2ObjEnum);

            // 设置监听器，监听配置变化
            configService.addListener(
                    nacosJson2ObjEnum.getDataId(),
                    group,
                    new NacosJsonConfigDataListener(nacosJson2ObjEnum)
            );
        }

    }

    public void jsonToObject(String json, NacosJson2ObjEnum eNacosJsonDefinition) {
        Object data = JSON.parseObject(json, eNacosJsonDefinition.getClz());
        log.info(&quot;Get Nacos Config Data, dataId = {} --- data = {}&quot;,
                eNacosJsonDefinition.getDataId(), data);
        localCatchMap.put(eNacosJsonDefinition.getDataId(), data);
    }

    public class NacosJsonConfigDataListener implements Listener {
        private NacosJson2ObjEnum nacosJson2ObjEnum;

        private NacosJsonConfigDataListener(NacosJson2ObjEnum nacosJson2ObjEnum) {
            this.nacosJson2ObjEnum = nacosJson2ObjEnum;
        }

        @Override
        public Executor getExecutor() {
            return executor;
        }

        @Override
        public void receiveConfigInfo(String configInfo) {
            jsonToObject(configInfo, nacosJson2ObjEnum);
        }
    }

    public &lt;T&gt; T getNacosJson2Object(NacosJson2ObjEnum nacosJson2ObjEnum, Class&lt;? extends T&gt; clz) {
        Object data = localCatchMap.get(nacosJson2ObjEnum.getDataId());
        if (clz.isInstance(data)) {
            return (T)data;
        }
        throw new IllegalArgumentException(&quot;转换类型失败&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对外提供一个工具类，获取国际化的异常信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class MessageNacosUtil {

    @Autowired
    private static NacosConfig nacosConfig;

    @Autowired
    public void setNacosConfig(NacosConfig nacosConfig) {
        MessageNacosUtil.nacosConfig = nacosConfig;
    }

    public static String getExcptMsg(String excptCode) {
        return StrFormatter.format(getMessageMap().get(excptCode), null);
    }

    public static String getExcptMsg(String excptCode, String... args) {
        return StrFormatter.format(getMessageMap().get(excptCode), args);
    }

    public static Map&lt;String, String&gt; getMessageMap(){
        Map&lt;String, String&gt; messageMap = null;
        String language = LocaleContextHolder.getLocale().getLanguage();
        if (&quot;&quot;.equals(language) || &quot;zh&quot;.equals(language)) {
            messageMap = nacosConfig.getNacosJson2Object(NacosJson2ObjEnum.MESSAGE_ZH_CN, Map.class);
        } else {
            messageMap = nacosConfig.getNacosJson2Object(NacosJson2ObjEnum.MESSAGE_EN_US, Map.class);
        }
        return messageMap;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-构建统一响应消息体" tabindex="-1"><a class="header-anchor" href="#_3-3-构建统一响应消息体" aria-hidden="true">#</a> 3.3. 构建统一响应消息体</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 如果响应结果中只给了code，那么msg就去nacos中查询
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">DataResponse</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DataResponse</span> dataResponse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageNacosUtil</span><span class="token punctuation">.</span><span class="token function">getExcptMsg</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dataResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">DataResponse</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DataResponse</span> dataResponse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataResponse<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dataResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 响应成功的消息进行固定并统一
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">DataResponse</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">ResponseStatusCode</span><span class="token punctuation">.</span><span class="token constant">OK</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 响应失败支持自定义code和msg
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DataResponse</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 默认的响应失败结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DataResponse</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">ResponseStatusCode</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-构建统一异常处理" tabindex="-1"><a class="header-anchor" href="#_3-4-构建统一异常处理" aria-hidden="true">#</a> 3.4. 构建统一异常处理</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BizException</span> <span class="token keyword">extends</span> <span class="token class-name">BaseException</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BaseResponse</span> baseResponse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">BaseResponse</span> baseResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>baseResponse<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;, &quot;</span><span class="token operator">+</span> baseResponse<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse <span class="token operator">=</span> baseResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">BaseResponse</span> baseResponse<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>baseResponse<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> baseResponse<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse <span class="token operator">=</span> baseResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 抛出异常支持多个msg进行组合拼装
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>code<span class="token operator">+</span> <span class="token string">&quot;, &quot;</span><span class="token operator">+</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> excptMsg <span class="token operator">=</span> <span class="token class-name">MessageNacosUtil</span><span class="token punctuation">.</span><span class="token function">getExcptMsg</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span>excptMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>code<span class="token operator">+</span> <span class="token string">&quot;, &quot;</span><span class="token operator">+</span>msg<span class="token punctuation">,</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>baseResponse<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键一步，重写自定义的异常信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = BizException.class)   // 项目中遇到 BizException 时的处理逻辑
    public ResponseEntity bizExceptionHandler(BizException bizException) {
        BaseResponse baseResponse = bizException.getBaseResponse();
        return new ResponseEntity(baseResponse, HttpStatus.OK);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h3><p>开发过程中还涉及到请求参数的校验过程，这里我们选用Validation的工具类。下面是集成过程。</p><h4 id="_4-1-集成validation" tabindex="-1"><a class="header-anchor" href="#_4-1-集成validation" aria-hidden="true">#</a> 4.1. 集成Validation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = BizException.class)
    public ResponseEntity bizExceptionHandler(BizException bizException) {
        BaseResponse baseResponse = bizException.getBaseResponse();
        return new ResponseEntity(baseResponse, HttpStatus.OK);
    }

    // 遇到 参数校验时的异常处理
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException methodArgumentNotValidException) {
        BindingResult bindingResult = methodArgumentNotValidException.getBindingResult();
        if (bindingResult.getFieldErrors() != null) {
            // 如果校验结果中有多个异常，就只返回第一个异常信息
            String excptCode = bindingResult.getFieldErrors().get(0).getDefaultMessage();
            String excptMsg = MessageNacosUtil.getExcptMsg(excptCode);
            BizException bizException = new BizException(excptCode, excptMsg);
            return new ResponseEntity(bizException.getBaseResponse(), HttpStatus.OK);
        }
        return new ResponseEntity(null, HttpStatus.OK);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-测试" tabindex="-1"><a class="header-anchor" href="#_4-2-测试" aria-hidden="true">#</a> 4.2. 测试</h4><p>我们在nacos上添加配置文件，并填充内容。</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们编写一个controller进行测试：</p><ol><li>直接抛出业务异常</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@GetMapping(&quot;/throw2_01&quot;)
public OperationResponse test02_01() {

    if (&quot;0&quot;.equals(&quot;0&quot;)) {
        throw new BizException(ResponseStatusCode.EE1001);
    }
    return OperationResponse.success(MessageNacosUtil.getExcptMsg(ResponseStatusCode.OK));
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>抛出校验异常</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
@Data
public class UserDTO {

    // 校验注解的message直接为一个常量字符串
    @NotEmpty(message = ResponseStatusCode.EE2001)
    private String name;

    @NotBlank(message = ResponseStatusCode.EE2002)
    private String address;


    private String sex;
    private Integer age;
    private Long phonenum;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@PostMapping(&quot;/throw2_02&quot;)
public DataResponse&lt;UserDTO&gt; test02_02(
        @RequestBody @Validated UserDTO userDTO
) {
    return DataResponse.success(userDTO);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>原理解读： <a href="/NotBlank">@NotBlank </a> 和 <a href="/NotEmpty">@NotEmpty </a> 注解校验不通过时，会抛出 MethodArgumentNotValidException 异常信息，而我们在 GlobalExceptionHandler 中捕获这个异常信息之后做了自定义处理逻辑，大概逻辑就是先获取到抛出异常信息的message信息，拿到异常码，之后利用工具类和语言信息从Nacos中获取异常码的描述信息。</p><p>注意： 上面的捕获MethodArgumentNotValidException后的处理逻辑中只处理了所抛出的第一个异常信息，自测多次同一个请求类，由于是多个字段校验，可能会抛出不同的异常信息，这里需要做自定义实现。</p><ol start="3"><li>抛出组合后的异常信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@PostMapping(&quot;/throw2_03&quot;)
public DataResponse&lt;UserDTO&gt; test02_03(
        @RequestBody @Validated UserDTO userDTO
) {
    if (&quot;female&quot;.equals(userDTO.getSex())) {
        throw new BizException(ResponseStatusCode.EE3001, userDTO.getName());
    }
    return DataResponse.success(userDTO);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>抛出多个参数组成的异常信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@PostMapping(&quot;/throw2_04&quot;)
public DataResponse&lt;UserDTO&gt; test02_04(
        @RequestBody @Validated UserDTO userDTO
) {
    if (&quot;female&quot;.equals(userDTO.getSex()) &amp;&amp; userDTO.getPhonenum()&lt;138000) {
        throw new BizException(ResponseStatusCode.EE3002, userDTO.getName(), String.valueOf(userDTO.getPhonenum()));
    }
    return DataResponse.success(userDTO);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>返回默认的响应失败消息体</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@PostMapping(&quot;/throw2_05&quot;)
public DataResponse&lt;UserDTO&gt; test02_05(
        @RequestBody @Validated UserDTO userDTO
) {
    return DataResponse.error();

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-参考" tabindex="-1"><a class="header-anchor" href="#_5-参考" aria-hidden="true">#</a> 5. 参考</h3>',73),R={href:"https://blog.csdn.net/qq_15898739/article/details/104680114",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mp.weixin.qq.com/s/XE4R2wOj08qNivo8Ms5ZRQ",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.aliyun.com/article/1180037",target:"_blank",rel:"noopener noreferrer"};function y(N,O){const s=o("ExternalLinkIcon");return l(),t("div",null,[S,n("ul",null,[n("li",null,[n("a",R,[a("Nacos实现SpringBoot国际化的增强"),e(s)])]),n("li",null,[n("a",w,[a("Java统一异常处理(配置文件集中化定义)"),e(s)])]),n("li",null,[n("a",_,[a("三种手段：通过Apollo和nacos的能力进行国际化动态配置实现热更新"),e(s)])])])])}const C=i(E,[["render",y],["__file","ch99-appendix01-globalresponseandnacosexception.html.vue"]]);export{C as default};
