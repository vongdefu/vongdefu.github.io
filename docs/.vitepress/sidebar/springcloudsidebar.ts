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
      { text: "Seata分布式事务", link: "/Seata分布式事务" },
      {
        text: "统一响应体+Nacos可配置全局异常",
        link: "/统一响应体+Nacos可配置全局异常",
      },
      { text: "依赖管理", link: "/依赖管理" },
      { text: "SAAS多租户", link: "/SAAS多租户" },
      { text: "Logback日志", link: "/Logback日志" },
      { text: "RabbitMQ基础", link: "/RabbitMQ基础" },
      { text: "RabbitMQ高级", link: "/RabbitMQ高级" },
    ],
  },
]
