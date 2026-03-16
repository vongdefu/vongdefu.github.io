import { DefaultTheme } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/面渣/": generateSidebar({
    documentRootPath: "docs",
    scanStartPath: "/面渣",
    collapsed: true,
    sortMenusByName: true,
  }),
  "/SpringCloud实战/": generateSidebar({
    documentRootPath: "docs",
    scanStartPath: "/SpringCloud实战",
    collapsed: true,
    sortMenusByName: true,
  }),
  "/DevOps/": generateSidebar({
    documentRootPath: "docs",
    scanStartPath: "/DevOps",
    collapsed: true,
    sortMenusByName: true,
  }),
  "/网站维护/": generateSidebar({
    documentRootPath: "docs",
    scanStartPath: "/网站维护",
    collapsed: true,
    sortMenusByName: true,
  }),
}
