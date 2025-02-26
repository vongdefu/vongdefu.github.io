# Git及Github

```bash

# 生成key，在命令行里面填写文件名，多个key使用用户名进行区分， 如： id_rsa_vongdefu
ssh-keygen -t ed25519 -C "your.email@example.com"


# 为每一个仓库设置用户名和邮箱
#   只需要在仓库目录下执行即可
git config user.name "Your Name"
git config user.email "your.email@example.com"
#   之后在 .git/config 可以看到设置后的用户名和邮箱

# 全局配置，最好不要进行这个操作
git config --global user.name zeanzai
git config --global user.email "zeanzai.me@gmail.com"
git config --global http.proxy 127.0.0.1:7890

# 注意：如果是需要身份验证的，就用这种格式：
git config --global http.proxy 用户名:密码@IP:端口
# 如果需要设置https，那么就需要把 http.proxy 改成 https.proxy
git config --global https.proxy 127.0.0.1:7890

# 查看一下配置
git config --global --list


# 测试
ssh -T git@github.com
ssh -T git@gitee.com

# 使用git克隆私有仓库
git clone --branch master https://x-access-token:${{ secrets.PAT_TOKEN }}@github.com/vongdefu/vongdefu-dochub.git vongdefu-dochub

# ssh
ssh-copy-id -i ./id_ed25519.pub root@192.168.1.150

# 空仓库
mkdir test
cd test
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/zeanzai/test.git
git push -u origin "master"

# 已有仓库
cd existing_git_repo
git remote add origin https://gitee.com/zeanzai/test.git
git push -u origin "master"

# 分支管理
## 创建并切换到新分支
git checkout -b ${{branch_name}} 

## 删除分支

```

## 克隆GitHub私有仓库

1. 需要在**用户的配置页面**中配置一个PAT（personal access token）；
2. 在 仓库的url中配置上这个PAT ： 见上面
3. 如果私有仓库需要使用GitHubActions，则还需要
   1. 根据 peaceiris/actions-gh-pages@v3 的[要求](https://github.com/peaceiris/actions-gh-pages)，在**仓库的setting中**设置 action 的权限，设置为可读写
   2. 在**仓库的setting中**配置上面这个生成的 PAT ；


## 合并提交记录

```
# 1. 拉取最新代码
git checkout master
git pull origin master

# 2. 启动交互式 rebase（假设要合并全部提交）
git rebase -i --root

# 3. 在打开的编辑器中：
# 将第一个提交前的 "pick" 保留
# 其他所有提交前的 "pick" 改为 "squash" 或简写 "s"
# 保存退出编辑器

# 4. 处理合并提交信息（会打开新编辑器）
# 删除所有旧提交信息，写入新提交信息
# 保存退出

# 5. 强制推送更新（⚠️ 重要警告：这会重写历史）
git push origin master --force
```