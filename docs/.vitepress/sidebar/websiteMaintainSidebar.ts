import { DefaultTheme } from "vitepress";

export const websiteMaintainSidebar: DefaultTheme.Sidebar = [
  {
    text: "网站维护",
    base: "/网站维护",
    items: [
      { text: "使用ci集成", link: "/ci的使用" },
      { text: "修改布局", link: "/修改布局" },
    ],
  },
];
