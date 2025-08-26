## ci 的使用

fasdfads

## 对接其他项目

### 背景

可能会有其他的项目，其他项目也可能会有一些文档，这个时候想要把这些项目中的文档，也集成到个人网站中。

### 操作过程

主要思路是，在本网站中添加导航栏和侧边栏的配置，然后由其他项目中自行设置导航栏和侧边栏的具体细节内容。步骤如下：

1. 修改 vongdefu.github.io 仓库中的 nav.ts 和 sidebar.ts ；
2. 给 vongdefu-sourcecode-hub 仓库添加对应的 navbar 和 sidebar 配置；
3. 配置 vongdefu-sourcecode-hub 仓库的 ci ，只要完成 docs 目录同步到 vongdefu.github.io 仓库的功能即可；
