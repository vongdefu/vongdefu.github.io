import { DefaultTheme } from "vitepress"

export const springcloudsidebar: DefaultTheme.Sidebar = [
  {
    text: "SpringCloud实战",
    base: "/SpringCloud实战",
    items: [
      { text: "Eureka注册中心", link: "/Eureka注册中心" },
      { text: "Apollo配置中心", link: "/Apollo配置中心" },
      { text: "Nacos注册中心", link: "/Nacos注册中心" },
      { text: "Nacos配置中心", link: "/Nacos配置中心" },
      { text: "Openfeign客户端", link: "/Openfeign客户端" },
      { text: "Gateway网关", link: "/Gateway网关" },
      { text: "Sentinel服务限流", link: "/Sentinel服务限流" },
      {
        text: "Seata分布式事务",
        items: [
          { text: "安装Seata", link: "/Seata分布式事务-安装Seata" },
          { text: "AT模式", link: "/Seata分布式事务-AT模式" },
          { text: "TCC模式", link: "/Seata分布式事务-TCC模式" },
        ],
      },
      {
        text: "统一响应体+Nacos可配置全局异常",
        link: "/统一响应体+Nacos可配置全局异常",
      },
      { text: "依赖管理", link: "/依赖管理" },
      { text: "SAAS多租户", link: "/SAAS多租户" },
      { text: "Logback日志", link: "/Logback日志" },
      { text: "RabbitMQ消息队列", link: "/RabbitMQ消息队列" },
      { text: "ES分布式搜索引擎", link: "/ES分布式搜索引擎" },
      { text: "Oauth2实现", link: "/Oauth2实现" },
      {
        text: "gateway+swagger+knife4j实现接口文档聚合",
        link: "/gateway+swagger+knife4j实现接口文档聚合",
      },
      { text: "Redis分布式缓存", link: "/Redis分布式缓存" },
      { text: "Skywalking链路追踪", link: "/Skywalking链路追踪" },
      {
        text: "Sleuth+Zipkin链路追踪",
        link: "/Sleuth+Zipkin链路追踪",
      },
      { text: "ShardingSphere分库分表", link: "/ShardingSphere分库分表" },
    ],
  },
]
