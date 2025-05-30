## 常用命令

```bash
//---------- 服务管理
// 服务状态|关闭服务｜启动服务｜重启服务
systemctl status|stop|start|restart xxx
// 重新加载服务
systemctl daemon-reload
// 是否已经加入自启动
systemctl is-enabled xxx
// 开启自启动服务
systemctl enable nacos.service


//---------- 防火墙管理
// 防火墙
firewall-cmd -h
firewall-cmd --zone=public --list-ports
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --reload

// --------- 端口监听状况
netstat -tunlp
netstat -nultp |grep 8080
ifconfig # 所有网络接口属性
ethtool 网卡名 # 带宽
route -n # 路由表
netstat -antp # 所有已经建立的连接

// --------- 磁盘管理
fdisk -l
lsblk
// 查看系统磁盘空间
df -h

// 查看某一个文件夹下面所有文件的大小
du --max-depth=1 -h /mydata/nexus/data/log/


// --------- 复制到远程服务器
scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package
// 下载
scp -r username@ip:remote_folder local_folder    //-r表示递归
// 复制文件夹到服务器上
scp -r local_folder remote_username@remote_ip:remote_folder
// 上传和下载，可以使用 filezilla 客户端

上传
scp -r local_folder username@ip:remote_folder
//或者
scp -r local_folder remote_ip:remote_folder
// --------- 实现 ssh 免密登陆
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.150
ssh root@192.168.1.150

// 启动server

//示例
scp -r root@ip:/apps/local/nginx-1.8.0.tar.gz /Users/gary/Documents/

// --------- docker
docker logs -f -t --tail 100   529a4d9afd8e


// ---------- 文件查找
// 删除当前目录及子文件夹下面所有的target文件夹
find ./ -name -type d "target" -exec rm -rf '{}' +

// 删除当前目录及子文件夹内所有的以.iml结尾的文件
find ./ -name '*.iml' -exec rm -rf '{}' +



// 查看linux系统的最大的线程数
$ ulimit -a | grep user

// 查看Java进程的线程数
$ ps -eLf | grep java | wc -l

// 查看 test.log 中的kafka消息
$ grep "kafka" test.log | head -1 // 最近1条数据
$ grep "kafka" test.log | tail -1 // 最后1条数据

// 统计kafka消息
$ cat adx-feed.log | grep kafka | wc -l
grep "关键词" adx-log.log | wc -l

// 统计每个小时的kafka消息
$ cat adx-baiduUtils.log | grep kafka | awk -F " " '{print $2}' | awk -F ":" '{print $1}' | sort | uniq -c

// 统计15点的视频素材数
$ cat adx-baiduUtils.log | grep "2022-07-27 15:" | grep kafka | awk -F "videoList" '{print $2}' | awk -F "," '{print $1}' | sort | uniq -c | wc -l

// 统计某一整点的每分钟的请求异常个数
$  cat adx-feedJob.log | grep "2022-07-28 15:" | grep "errorMsg" | awk -F "2022-07-28 15:" '{print $2}' | awk -F ":" '{print $1}' | uniq -c

// 统计kafka消息中视频素材数量
$ cat adx-baiduUtils.log  | grep kafka  | awk -F "videoList" '{print $2}' | awk -F "," '{print $1}' | less  | sort | uniq -c | sort -k1 -nr | wc -l

// 统计一个文档中出现过kafka的消息
$ cat xxx.log | grep kafka | tail -100
$ cat xxx.log | grep kafka | head -100


// 截断
awk -F "字符串" '{print $N}' // $N 表示把日志文件截成多个小段后，获取的第n个字段（从1开始数）

// 去重
uniq -c

// 排序，按照大小，从大到小输出
sort -rn

//
grep kafka adx-dYFeedsJobByUseIDFAZHJob.log-2022-08-10 \
adx-dYFeedsJobByUseIDFAGoodJob.log-2022-08-10 \
adx-dYFeedsJobByUseIDFAQueueJob.log-2022-08-10 \
| awk -F "productName" '{print $2}' | awk -F "," '{print $1}' | sort | uniq -c | sort -rn | head -20



// 如果一不小心在一个master分支上写了代码，也执行到了commit上，但是并没有提交到远程分支上；此时可以执行 cherry-pick 操作，在idea中执行

// 以兆为单位查看文件大小
ll -lh log.log


[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.76.1.el7.x86_64 #1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux


// --------- 服务器基本信息
uname -a
hostname


总核数 = 物理CPU个数 X 每颗物理CPU的核数
总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数

# 全部信息
cat /proc/cpuinfo

# 物理CPU个数
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l

# 每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep "cpu cores"| uniq

# 逻辑CPU的个数
cat /proc/cpuinfo| grep "processor"| wc -l

getconf LONG_BIT # 计算机位数
env # 环境变量

cat /proc/meminfo # 内存
free -m # 空闲内存
1. 查看总内存情况使用命令`cat /proc/meminfo`即可。
2. 查看内存占用状态使用`free -m`(-m，单位是m，如果是-g，单位是g）。

# 定期清理日志： 1. 把命令日志备份到文件； 2. 清除 history

history > /mnt/d/centos/centos.log
history -c
```

::: tip 查询日志的做法

1. 在业务系统中复现问题，浏览器 f12 打开控制台，然后找到对应的接口
2. 拿着接口 url 去找对应的日志文件，然后 vi 打开日志文件
3. shift+g 直接到文档最后，在 vi 的命令模式下输入“/{要查找的 url}”进行查询
4. 找到对应的线程名称，再次在 vi 的“命令模式”下输入“/{线程名称}”，然后使用 shift+n 向下查找，即可找到堆栈信息

:::

## 常用软件的安装

<details class="details custom-block">

<summary>JDK</summary>

```bash
// 把下载好的jdk安装包上传至 centos
➜  Downloads scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package

// 解压到安装路径下
[root@home jdk1.8.0_144]# tar zxvf /mnt/doc/package/jdk-8u144-linux-x64.tar.gz -C /usr/setup/

// 修改环境变量
[root@home jdk1.8.0_144]# vi /etc/profile

// 最后一行添加
export JAVA_HOME=/usr/setup/jdk1.8.0_144
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=./:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$PATH:$JAVA_HOME/bin

// 使环境变量生效
[root@home jdk1.8.0_144]# source /etc/profile

```

</details>

<details class="details custom-block">

<summary>nacos-server-2.2.3</summary>

```bash
// nacos运行环境依赖于jdk环境，因此需要先安装jdk。
// 在mac上把从GitHub上下载下来的安装包上传至centos
➜  Downloads scp -r nacos-server-2.2.3.tar.gz root@192.168.1.150:/mnt/doc/package
nacos-server-2.2.3.tar.gz

// 解压到安装目录下
[root@home package]# tar zxvf nacos-server-2.2.3.tar.gz -C /usr/setup/

// 修改start.sh启动脚本，添加jdk的环境变量
[root@home bin]# vi /usr/setup/nacos/bin/startup.sh
...
# limitations under the License.

cygwin=false
darwin=false
os400=false
case "`uname`" in
CYGWIN*) cygwin=true;;
Darwin*) darwin=true;;
OS400*) os400=true;;
esac
error_exit ()
{
    echo "ERROR: $1 !!"
    exit 1
}

[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/setup/jdk1.8.0_144 ## 添加这一行
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=$HOME/jdk/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/opt/taobao/java
[ ! -e "$JAVA_HOME/bin/java" ] && unset JAVA_HOME
...

// 开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容
[root@home bin]# vi /usr/lib/systemd/system/nacos.service

[Unit]
Description=nacos
After=network.target

[Service]
Type=forking
ExecStart=/usr/setup/nacos/bin/startup.sh -m standalone
ExecReload=/usr/setup/nacos/bin/shutdown.sh
ExecStop=/usr/setup/nacos/bin/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target

// 开启自启动服务
systemctl enable nacos.service

// 重新加载自启动服务
systemctl daemon-reload

// 查看是否假如自启动服务
systemctl is-enabled nacos.service

// 开放端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload

// 访问地址： ip:8848/nacos

// 用户名密码： nacos / nacos

```

</details>

<details class="details custom-block">

<summary>nacos-server-1.2.1</summary>

```bash

// 下载
# wget https://github.com/alibaba/nacos/releases/download/1.2.1/nacos-server-1.2.1.tar.gz

// 解压到安装目录
# tar zxvf nacos-server-1.2.1.tar.gz -C /usr/setup/
// 进入bin目录，启动
# ./startup.sh -m standalone

// 开放端口
# firewall-cmd --zone=public --add-port=8848/tcp --permanent
# firewall-cmd --reload


// <---- start 配置开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容

[Unit]
Description=nacos
After=network.target

[Service]
Type=forking
ExecStart=/usr/setup/nacos/bin/startup.sh -m standalone
ExecReload=/usr/setup/nacos/bin/shutdown.sh
ExecStop=/usr/setup/nacos/bin/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target

// 开启自启动服务
# systemctl enable nacos.service

// 重新加载自启动服务
# systemctl daemon-reload
// 配置开机自启动 end ---->

// 修改启动文件中jdk的目录
vi /usr/setup/nacos/bin/startup.sh

# limitations under the License.

cygwin=false
darwin=false
os400=false
case "`uname`" in
CYGWIN*) cygwin=true;;
Darwin*) darwin=true;;
OS400*) os400=true;;
esac
error_exit ()
{
    echo "ERROR: $1 !!"
    exit 1
}

[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/setup/jdk1.8.0_144 ## 添加这一行
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=$HOME/jdk/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/opt/taobao/java
[ ! -e "$JAVA_HOME/bin/java" ] && unset JAVA_HOME

```

</details>

<details class="details custom-block">

<summary>Docker 和 Docker-compose</summary>

```bash
// 扩展阅读： yum出问题后： https://www.cnblogs.com/lxzcloud/p/18349036
// docker-registry :  https://cloud.tencent.com/developer/article/2516747

// 安装yum源的工具包
yum install -y yum-utils

// 配置docker的安装源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

// 设置开机自启
systemctl enable docker


// 配置阿里云的镜像源，帮助文档： https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker

// 查看安装之后的docker信息，最后可以看到配置的阿里云的镜像源
[root@home ～]# docker info
Client: Docker Engine - Community
 Version:    24.0.6
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.11.2
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.21.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 24.0.6
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc version: v1.1.9-0-gccaecfc
 init version: de40ad0
 Security Options:
  seccomp
   Profile: builtin
 Kernel Version: 3.10.0-1160.71.1.el7.x86_64
 Operating System: CentOS Linux 7 (Core)
 OSType: linux
 Architecture: x86_64
 CPUs: 8
 Total Memory: 23.26GiB
 Name: home.centos
 ID: bf0036ec-e56a-4c78-ae07-d8e224f11480
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Registry Mirrors:
  https://hpifphoh.mirror.aliyuncs.com/
 Live Restore Enabled: false

// 查看docker的版本信息
[root@home ~]# docker version
Client: Docker Engine - Community
 Version:           24.0.6
 API version:       1.43
 Go version:        go1.20.7
 Git commit:        ed223bc
 Built:             Mon Sep  4 12:35:25 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          24.0.6
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.7
  Git commit:       1a79695
  Built:            Mon Sep  4 12:34:28 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.24
  GitCommit:        61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc:
  Version:          1.1.9
  GitCommit:        v1.1.9-0-gccaecfc
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

```

```bash
# 下载docker compose
curl -SL https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
# 添加可执行权限
chmod +x /usr/local/bin/docker-compose
# 将文件copy到 /usr/bin/目录下
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# 查看版本
docker-compose --version

```

</details>

<details class="details custom-block">

<summary>FFMpeg</summary>

```bash

wget http://www.ffmpeg.org/releases/ffmpeg-4.3.2.tar.gz
tar -zxvf ffmpeg-4.3.2.tar.gz

// 安装 yasm 汇编编译器
yum install yasm -y

// 重新安装 ffmpeg
cd ffmpeg-4.3.2
./configure --prefix=/usr/local/ffmpeg
make && make install

vi /etc/ld.so.conf 文件后面添加： /usr/local/ffmpeg/lib

执行 ldconfig

vi /etc/profile

#set ffmpeg environment
export PATH=$PATH:/usr/local/ffmpeg/bin


source /etc/profile


ffmpeg -version
```

</details>

<details class="details custom-block">

<summary>Redis5</summary>

- 安装 gcc 编译工具包

```
$ yum update -y
$ yum install -y gcc
```

- 解压

```
$ tar zxf /opt/package/redis5.0.3.tar.gz -C /opt/unziped/
```

- 创建文件夹

```
$ mkdir /usr/setup/redis5.0.3
$ mkdir /usr/setup/redis5.0.3/log
$ mkdir /usr/setup/redis5.0.3/data
```

- 进入解压后的 redis 目录并执行 make 命令

```
$ make
```

- 执行安装命令

```
$ make install PREFIX=/usr/setup/redis5.0.3
```

- 拷贝配置文件

```
$ cp /opt/unziped/redis5.0.3/6379.conf /usr/setup/redis5.0.3
```

- 打开守护进程运行模式

```
// 修改配置文件，将daemonize的值改为yes
$ vi /usr/setup/redis5.0.3/6379.conf
port 6379
bind 191.168.1.150
daemonize yes
requirepass 123456
appendonly yes
```

- 加入开机自启

```
$ ./opt/unziped/redis5.0.3/utils/install_server.sh
Welcome to the redis service installer
This script will help you easily set up a running redis server
Please select the redis port for this instance: [6379]
Selecting default: 6379
Please select the redis config file name [/etc/redis/6379.conf] /usr/setup/redis5.0.3/6379.conf
Please select the redis log file name [/var/log/redis_6379.log] /usr/setup/redis5.0.3/log/redis.log
Please select the data directory for this instance [/var/lib/redis/6379] /usr/setup/redis5.0.3/data/6379
Please select the redis executable path [] /usr/setup/redis5.0.3/bin/redis-server
Selected config:
Port           : 6379
Config file    : /usr/setup/redis5.0.3/6379.conf
Log file       : /usr/setup/redis5.0.3/log/6379.log
Data dir       : /usr/setup/redis5.0.3/data
Executable     : /usr/setup/redis5.0.3/bin/redis-server
Cli Executable : /usr/setup/redis5.0.3/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf => /etc/init.d/redis_6379
Installing service...
Successfully added to chkconfig!
Successfully added to runlevels 345!
Starting Redis server...
Installation successful!
```

- 开启端口，并重启防火墙

```
$ firewall-cmd --zone=public --permanent --add-port=6379/tcp
$ firewall-cmd --reload
```

- 重启后测试

```
1. 本机连接测试
$ cd /usr/setup/redis5.0.3/bin/
$ ./redis-cli -h 192.168.1.150 -p 6379
127.0.0.1:6379> info

2. 开发机连接测试
cmd: redis-cli.exe -h 10.168.0.120 -p 6379
```

```bash
[root@localhost redis5.0.7]# cd /home/redis-5.0.7/utils/
[root@localhost utils]# ll
total 52
-rw-rw-r--. 1 root root  593 Nov 20  2019 build-static-symbols.tcl
-rw-rw-r--. 1 root root 1303 Nov 20  2019 cluster_fail_time.tcl
-rw-rw-r--. 1 root root 1098 Nov 20  2019 corrupt_rdb.c
drwxrwxr-x. 2 root root   60 Nov 20  2019 create-cluster
-rwxrwxr-x. 1 root root 2149 Nov 20  2019 generate-command-help.rb
drwxrwxr-x. 3 root root   31 Nov 20  2019 graphs
drwxrwxr-x. 2 root root   39 Nov 20  2019 hashtable
drwxrwxr-x. 2 root root   70 Nov 20  2019 hyperloglog
-rwxrwxr-x. 1 root root 9567 Nov 20  2019 install_server.sh
drwxrwxr-x. 2 root root   63 Nov 20  2019 lru
-rw-rw-r--. 1 root root 1277 Nov 20  2019 redis-copy.rb
-rwxrwxr-x. 1 root root 1352 Nov 20  2019 redis_init_script
-rwxrwxr-x. 1 root root 1047 Nov 20  2019 redis_init_script.tpl
-rw-rw-r--. 1 root root 1762 Nov 20  2019 redis-sha1.rb
drwxrwxr-x. 2 root root  135 Nov 20  2019 releasetools
-rwxrwxr-x. 1 root root 3787 Nov 20  2019 speed-regression.tcl
-rwxrwxr-x. 1 root root  693 Nov 20  2019 whatisdoing.sh
[root@localhost utils]# ./install_server.sh
Welcome to the redis service installer
This script will help you easily set up a running redis server

Please select the redis port for this instance: [6379]
Selecting default: 6379
Please select the redis config file name [/etc/redis/6379.conf] /usr/setup/redis5.0.7/redis.conf
Please select the redis log file name [/var/log/redis_6379.log] /usr/setup/redis5.0.7/log/6379.log
Please select the data directory for this instance [/var/lib/redis/6379] /usr/setup/redis5.0.7/data
Please select the redis executable path [] /usr/setup/redis5.0.7/bin/redis-server
Selected config:
Port           : 6379
Config file    : /usr/setup/redis5.0.7/redis.conf
Log file       : /usr/setup/redis5.0.7/log/6379.log
Data dir       : /usr/setup/redis5.0.7/data
Executable     : /usr/setup/redis5.0.7/bin/redis-server
Cli Executable : /usr/setup/redis5.0.7/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf => /etc/init.d/redis_6379
Installing service...
Successfully added to chkconfig!
Successfully added to runlevels 345!
Starting Redis server...
Installation successful!

```

</details>

<details class="details custom-block">

<summary>安装并使用 nexus2.x</summary>

### 安装

- 安装依赖

```
$ java -version
java version "1.8.0_144"
Java(TM) SE Runtime Environment (build 1.8.0_144-b01)
Java HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)
```

- 上传到`/opt/package`目录

- 解压到解压目录

```
$ tar zxf /opt/package/nexus-2.14.5-02-bundle.tar.gz -C /usr/setup/
```

- 移动

```
$ mv -f /usr/setup/sonatype-work/ /opt/
```

- 配置 nexus

```
$ vi /usr/setup/nexus-2.14.5-02/conf/nexus.properties
// 修改后：
application-host=10.168.0.120
nexus-work=/opt/sonatype-work/nexus

$ vi /usr/setup/nexus-2.14.5-02/bin/nexus
// 修改后：
NEXUS_HOME="/usr/setup/nexus-2.14.5-02"
RUN_AS_USER=root

$ vi /usr/setup/nexus-2.14.5-02/bin/jsw/conf/wrapper.conf
// 修改后：
wrapper.java.command=/usr/setup/jdk1.8.0_144/bin/java
```

- 开放端口

```
$ firewall-cmd --zone=public --permanent --add-port=8081/tcp
$ firewall-cmd --reload
```

- 设置服务

```
$ vi /etc/systemd/system/nexus.service
[Unit]
Description=nexus
After=network.target
[Service]
Type=forking
ExecStart=/usr/setup/nexus-2.14.5-02/bin/nexus start
ExecReload=/usr/setup/nexus-2.14.5-02/bin/nexus restart
ExecStop=/usr/setup/nexus-2.14.5-02/bin/nexus stop
PrivateTmp=true
[Install]
WantedBy=multi-user.target

$ systemctl enable nexus
$ systemctl start nexus
```

- 测试

```
浏览器输入：http://10.168.0.120:8081/nexus
```

### 使用 nexus2.x

#### 权限管理

1. 用户
2. 角色

#### 仓库类型

几种仓库类型的简单介绍

#### 查看日志

如何查看 nexus 的执行日志

#### 下载中央仓库索引

1. 设置仓库开关
2. 创建任务

#### 设置项目连接私服

- 单个项目连接私服

```
// 只需要在项目的pom文件中添加下面内容即可

<repositories>
    <repository>
        <id>Nexus</id>
        <name>10.168.0.120-Nexus</name>
        <url>http://10.168.0.120:8081/nexus/content/groups/public/</url>
    </repository>
</repositories>

```

- 全局连接私服

```
// 在maven的setting.xml文件中配置下面内容即可

<mirrors>
    <mirror>
        <id>devnexus</id>
        <name>devnexus</name>
        <mirrorOf>*</mirrorOf>
        <url>http://10.168.0.120:8081/nexus/content/groups/public/</url>
    </mirror>
</mirrors>
```

#### 本地开发的 jar 发布到 nexus 上面

- 第一步：配置 setting.xml 文件

```
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">


    <localRepository>D:\maven\my_local_repository</localRepository>

    <pluginGroups>
    </pluginGroups>

    <proxies>
    </proxies>


    <!--设置 Nexus 认证信息-->
    <servers>
        <server>
            <id>nexus-releases</id>
            <username>admin</username>
            <password>admin123</password>
        </server>
        <server>
            <id>nexus-snapshots</id>
            <username>admin</username>
            <password>admin123</password>
        </server>
    </servers>


    <!--设置 Nexus 镜像，后面只要本地没对应的以来，则到 Nexus 去找-->
    <mirrors>
        <mirror>
            <id>nexus-releases</id>
            <mirrorOf>*</mirrorOf>
            <url>http://10.168.0.120:8081/repository/maven-releases/</url>
        </mirror>
        <mirror>
            <id>nexus-snapshots</id>
            <mirrorOf>*</mirrorOf>
            <url>http://10.168.0.120:8081/repository/maven-snapshots/</url>
        </mirror>
        <mirror>
            <id>maven-aliyun</id>
            <name>aliyun maven</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
            <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>

    <profiles>
        <profile>
            <id>nexus</id>
            <repositories>
                <repository>
                    <id>nexus-releases</id>
                    <url>http://nexus-releases</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
                <repository>
                    <id>nexus-snapshots</id>
                    <url>http://nexus-snapshots</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>nexus-releases</id>
                    <url>http://nexus-releases</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </pluginRepository>
                <pluginRepository>
                    <id>nexus-snapshots</id>
                    <url>http://nexus-snapshots</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>nexus</activeProfile>
    </activeProfiles>

</settings>
```

- 第二步：在 pom 文件中添加：

```
<distributionManagement>
    <repository>
        <id>nexus-releases</id>
        <url>http://10.168.0.120:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>nexus-snapshots</id>
        <url>http://10.168.0.120:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

#### 附：java 项目不同模块的划分

划分的背景
划分方法
参考地址

</details>

## 服务管理

https://blog.csdn.net/Mr_Yang__/article/details/84133783

- http://blog.csdn.net/tiantang_1986/article/details/53704966
- http://blog.csdn.net/fresh123456/article/details/50925038
- http://blog.csdn.net/chenxiabinffff/article/details/51374635

## 1. Nginx 服务自启动

### 1. 编写服务文件

vi /usr/lib/systemd/system/nginx.service
注意修改安装路径

```
[Unit]
Description=nginx - high performance web server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/softwares/nginx-1.12.2/sbin/nginx -c /softwares/nginx-1.12.2/conf/nginx.conf
ExecReload=/softwares/nginx-1.12.2/sbin/nginx -s reload
ExecStop=/softwares/nginx-1.12.2/sbin/nginx -s stop

[Install]
WantedBy=multi-user.target
```

### 2. 赋予 754 权限

```shell
[root@200 system]# chmod 754 /usr/lib/systemd/system/nginx.service
```

### 3. 设置开机自启动

```shell
[root@200 system]# systemctl enable nginx.service
Created symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.
[root@200 system]# systemctl enable nginx.service
```

### 4. 其他命令

```shell
systemctl [start | enable | disable | status | restart | stop] nginx.service
```

## 2. 其他软件开机自启动

### 1. 编写服务文件

#### 1. php-fpm

vi /usr/lib/systemd/system/php-fpm.service

```shell
[Unit]
Description=php
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/usr/sbin/php-fpm

[Install]
WantedBy=multi-user.target
```

#### 2. redis

vi /usr/lib/systemd/system/redis.service

```shell
[Unit]
Description=Redis
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/softwares/redis-4.0.6/bin/redis-server /softwares/redis-4.0.6/bin/redis.conf
ExecStop=kill -INT 'cat /var/run/redis_6379.pid'
[Install]
WantedBy=multi-user.target
```

#### 3. tomcat7

##### 1. tomcat7/bin 下面新建 setenv.sh 配置

```
#add tomcat pid
CATALINA_PID="$CATALINA_BASE/tomcat.pid"
#add java opts
JAVA_OPTS="-server-XX:PermSize=256M -XX:MaxPermSize=1024m -Xms512M -Xmx1024M-XX:MaxNewSize=256m"
```

##### 2. 修改 bin/setclasspath.sh

export JAVA_HOME=/softwares/jdk1.8.0_111

export JRE_HOME=/softwares/jdk1.8.0_111/jre

##### 3. 新建 service 文件

vi /usr/lib/systemd/system/tomcat7.service

```shell
[Unit]
Description=Tomcat
After=syslog.targetnetwork.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/softwares/apache-tomcat-7.0.70/bin/tomcat.pid
ExecStart=/softwares/apache-tomcat-7.0.70/bin/startup.sh
ExecStop=kill -INT 'cat /softwares/apache-tomcat-7.0.70/bin/tomcat.pid'
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

#### 4. apollo1.8.0

```shell
[Unit]
Description=apollo1.8.0
After=syslog.targetnetwork.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/usr/setup/apollo1.8.0/start.sh
ExecStop=/usr/setup/apollo1.8.0/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

### 2. 赋予权限

### 3. 开启自动重启

systemctl enable XXX.service

### 4. 测试

测试时需要保证软件已经处于关闭状态。
