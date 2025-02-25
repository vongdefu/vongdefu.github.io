# vongdefu.github.io

## 说明

- master分支： 从 vongdefu-dochub@master 同步而来；
- gh-pages分支： vongdefu-dochub@master:defu/* 与 vongdefu-dochub@vdoing 合并进行构建，最后生成的静态网页文件夹；
- 由 vongdefu-dochub 的 workflow 控制本仓库的两个分支的维护，不需要本地维护此仓库；

## 文章列表


计算机基础

name: Sync Content

on:
  push:
    branches:
      - master
    # paths:
    #   - 'defu/**'

jobs:
  sync_public_master:
    name: 
    runs-on: ubuntu-latest

    steps:
      - name: 🥝 检出 master 分支，到虚拟机的 private-repo 文件夹
        uses: actions/checkout@v4
        with:
          path: private-repo

      - name: 🍌 克隆共有仓库 vongdefu.github.io 到虚拟机的 public-repo 文件夹
        run: |
          git clone https://x-access-token:${{ secrets.PAT_TOKEN }}@github.com/vongdefu/vongdefu.github.io.git public-repo

      - name: 🍒 同步 private-repo 和 public-repo ， 并推送到 vongdefu.github.io 
        run: |
          rsync -av --delete --exclude=".*" private-repo/defu/ public-repo/
          cd public-repo
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m " ${{ github.event.head_commit.message }} (Trigger: ${{ github.sha }})"
          git push origin master

      - name: 🍐 检出 vdoing 分支，到虚拟机的 vdoing-branch 文件夹
        uses: actions/checkout@v4
        with:
          repository: vongdefu/vongdefu-dochub
          ref: vdoing
          token: ${{ secrets.PAT_TOKEN }}
          path: vdoing-branch
  
      - name: 🍄 把 private-repo/defu/* 复制到 vdoing-branch 下的 docs/ 下
        run: |
          mv private-repo/defu/* vdoing-branch/docs/
          cd vdoing-branch
          ls -a vdoing-branch

      - name: 🍊 设置 nodejs 环境
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: npm

      - name: 🍇 安装依赖并进行构建
        run: |
          cd vdoing-branch
          npm ci
          npm run build

      - name: 🍓 部署到公共仓库
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PAT_TOKEN }}
          external_repository: vongdefu/vongdefu.github.io
          publish_branch: gh-pages
          publish_dir: docs/.vuepress/dist
          force_orphan: true
          allow_empty_commit: true
          full_commit_message: ${{ github.event.head_commit.message }}





