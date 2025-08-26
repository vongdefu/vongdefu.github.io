import { DefaultTheme } from "vitepress";

export const interviewSidebar: DefaultTheme.Sidebar = [
  {
    text: "CS 基础",
    base: "/00-面试",
    items: [
      { text: "操作系统", link: "/01.操作系统" },
      { text: "计算机网络", link: "/network" },
      { text: "Linux", link: "/linux" },
      { text: "设计模式", link: "/shejimoshi" },
    ],
  },
  {
    text: "Java",
    base: "/00-面试",
    items: [
      { text: "java 基础", link: "/01-javase" },
      { text: "java 集合", link: "/02-collection" },
      { text: "java 线程", link: "/03-javathread" },
      { text: "jvm", link: "/jvm" },
    ],
  },
  {
    text: "框架",
    base: "/00-面试",
    items: [
      { text: "微服务", link: "/weifuwu" },
      { text: "spring", link: "/spring" },
      { text: "protobuff", link: "/protobuff" },
      { text: "Netty", link: "/netty" },
    ],
  },
  {
    text: "中间件",
    base: "/00-面试",
    items: [
      { text: "MySQL", link: "/mysql" },
      { text: "Mybatis", link: "/mybatis" },
      { text: "redis", link: "/redis" },
      { text: "rocketmq", link: "/rocketmq" },
    ],
  },
  {
    text: "分布式",
    base: "/00-面试",
    items: [{ text: "分布式", link: "/fenbushi" }],
  },
  {
    text: "软件质量管理",
    base: "/00-面试",
    items: [],
  },
  {
    text: "工程设计",
    base: "/00-面试",
    items: [{ text: "nixi", link: "/nixi" }],
  },
];
