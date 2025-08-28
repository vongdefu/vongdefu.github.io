import { DefaultTheme } from 'vitepress';
import fs from 'fs';
import path from 'path';

// 读取 sidebar 文件夹下所有 .ts 文件
const sidebarDir = path.resolve(__dirname, 'sidebar');
const sidebarFiles = fs
  .readdirSync(sidebarDir)
  .filter((file) => file.endsWith('ts'));

// 动态导入所有 sidebar 文件
const sidebarConfig: DefaultTheme.Config['sidebar'] = {};

for (const file of sidebarFiles) {
  // 例如：mianzhasidebar.ts 导出 default
  const sidebarModule = require(path.join(sidebarDir, file));
  // 约定每个 sidebar 文件都导出 default 和 path 属性
  if (sidebarModule.default && sidebarModule.path) {
    sidebarConfig[sidebarModule.path] = sidebarModule.default;
  }
}

// 导出合并后的 sidebar
export const sidebar: DefaultTheme.Config['sidebar'] = sidebarConfig;
