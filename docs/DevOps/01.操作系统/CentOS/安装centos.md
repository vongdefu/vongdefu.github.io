# 安装centos

## 使用 U 盘安装 centos7

参考：

1. [https://www.cnblogs.com/w1sh/p/18286154](https://www.cnblogs.com/w1sh/p/18286154)
2. 制作启动盘时，要注意几点内容：
   1. 管理员启动；
   2. 格式化时，使用 u 盘的默认方式即可： kingsoft u 盘的格式为 fat32；
3. 重启系统后按 f12 进入引导页面，选择 uefi 的方式启动；
4. 进入启动页面后，选择 install 进行安装
5. 遇到 timeout 问题，输入： bldik 找到 u 盘的盘符，然后重启，再在启动页面按 e 进入编辑模式，修改后按 ctrl+x 进行启动；

## 安装 virtualbox 和 vagrant 用来安装虚拟机

### 安装 virtualbox

1. 注意： virtualbox 对 centos7.9 的支持已经很弱了。
2. 打开官网： https://www.virtualbox.org 选择系统版本： linux distributions；然后拉到最下面，找到 oracle linux/RHEL 对应的连接；
3. 点击并下载到 /etc/yum.repos.d 文件夹内；然后修改： repo_gpgcheck=0；
4. yum update
5. yum install -y VirtualBox-7.0.x86_64
6. 安装完成之后使用 systemctl status vboxdrv 查看是否能够运行

#### 问题及处理

1. 安装过程中可能会出现 yum update 失败的情况，这个时候需要对下载下来的 virtualbox.repo 文件进行修改，原因是： repo_gpgcheck=1 可能导致元数据签名校验失败。将其设为 0，只保留 gpgcheck=1。
2. virtalbox 的服务名称为： vboxdrv ；
3. 安装后可能启动不起来，查看启动过程日志发现： kernel 出现问题；解决过程：
   1. 查看 headers 版本 ： rpm -qa kernel-headers ，如果发现没有安装，使用 yum install -y kernel-headers 进行安装；
   2. 查看 devel 版本： rpm -qa kernel-devel ， 没有安装就使用 yum install -y kernel-devel 进行安装；
   3. 安装之后，可能需要重启；
   4. 之后再次 systemctl restart vboxdrv 重启，done！
4. 由于是在 centos 上安装的，因此没有操作界面，但是有些时候需要修改一些配置，此时只能使用命令：
   1. 修改 vm 文件存放位置： VBoxManage setproperty machinefolder /mnt/userfiles/vms/

## vagrant

1. 官网 https://developer.hashicorp.com/vagrant/install 给的安装方式已经不支持 centos7.9 了，因此需要下载 vagrant 的安装包；
2. 安装包地址： https://releases.hashicorp.com/vagrant/2.4.1/ ，之后直接安装： yum install ./vagrant_2.4.1_x86_64.rpm

### 简单实用

1. vagrant box add centos/7 ： 添加镜像；
2. vagrant init centos/7 ： 直接创建虚拟机；
3. 其它参考： vagrant 文档；
4. 桥接的设置方式可以直接设置： config.vm.network "public_network", ip: "192.168.0.160"

### 参考

1. https://blog.csdn.net/mr__bai/article/details/129690250
2. https://blog.csdn.net/mr__bai/article/details/129702217
