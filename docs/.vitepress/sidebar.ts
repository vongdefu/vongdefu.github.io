import { withSidebar } from "vitepress-sidebar"

/**
 * 多侧边栏配置（使用 withSidebar 官方推荐方式）
 *
 * 每个分区必须同时配置：
 *   - basePath:    侧边栏条目链接的前缀（生成正确的 href）
 *   - resolvePath: 当前 URL 匹配规则（决定哪个侧边栏被激活）
 * 两者通常设置为相同的值。
 */
const sidebarConfigs: Parameters<typeof withSidebar>[1] = [
  {
    documentRootPath: "docs",
    scanStartPath: "面渣",
    basePath: "/面渣/",
    resolvePath: "/面渣/",
    removePrefixAfterOrdering: true,
    prefixSeparator: "-",
    sortMenusByName: true,
    sortMenusOrderNumericallyFromTitle: true,
    collapsed: false,
    useFolderLinkFromSameNameSubFile: true,
    sortFolderTo: "top",
  },
  {
    documentRootPath: "docs",
    scanStartPath: "SpringCloud实战",
    basePath: "/SpringCloud实战/",
    resolvePath: "/SpringCloud实战/",
    removePrefixAfterOrdering: true,
    prefixSeparator: "-",
    sortMenusByName: true,
    sortMenusOrderNumericallyFromTitle: true,
    collapsed: false,
    useFolderLinkFromSameNameSubFile: true,
    sortFolderTo: "top",
  },
  {
    documentRootPath: "docs",
    scanStartPath: "DevOps",
    basePath: "/DevOps/",
    resolvePath: "/DevOps/",
    removePrefixAfterOrdering: true,
    prefixSeparator: "-",
    sortMenusByName: true,
    sortMenusOrderNumericallyFromTitle: true,
    collapsed: false,
    useFolderLinkFromSameNameSubFile: true,
    sortFolderTo: "top",
  },
  {
    documentRootPath: "docs",
    scanStartPath: "网站维护",
    basePath: "/网站维护/",
    resolvePath: "/网站维护/",
    removePrefixAfterOrdering: true,
    prefixSeparator: "-",
    sortMenusByName: true,
    sortMenusOrderNumericallyFromTitle: true,
    collapsed: false,
    useFolderLinkFromSameNameSubFile: true,
    sortFolderTo: "top",
  },
]

export { sidebarConfigs }
