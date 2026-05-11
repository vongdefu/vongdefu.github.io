## 3.9.13

- [RabbitMQ3.9.13](https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.9.13)
- [Erlang23.3.4.11](https://github.com/rabbitmq/erlang-rpm/releases/tag/v23.3.4.11)
- [参考这里](https://www.cnblogs.com/antLaddie/p/15958830.html#_label7_3)

```bash
# 安装 erlang 环境
rpm -ivh erlang-23.3.4.11-1.el7.x86_64.rpm
# 安装 socat 环境
yum -y install socat
# 安装 RabbitMQ 服务
rpm -ivh rabbitmq-server-3.9.13-1.el7.noarch.rpm
# 检查是否安装
yum list | grep rabbitmq
yum list | grep erlang

rabbitmqctl add_user admin root1003
rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
rabbitmqctl set_user_tags admin administrator
```

## 3.7.9

下载地址：

1. erlang： [http://www.erlang.org/downloads](http://www.erlang.org/downloads)
2. rabbitmq： [http://www.rabbitmq.com/install-rpm.html#downloads](http://www.rabbitmq.com/install-rpm.html#downloads)

安装步骤分为两步，第一步是安装 erlang 环境，第二步是安装 rabbitmq-server。erlang 的安装方式有很多种：

1. 使用源码方式安装，这种方式需要安装 gcc 的等编译软件；
2. 直接使用安装包方式进行安装（采用此方式安装）；
3. 使用 yum 源方式安装；

> 特别强调：rabbitmq 的安装特别依赖 erlang 的版本，具体依赖哪一个版本请参考[此处](http://www.rabbitmq.com/which-erlang.html)。

### 方式一

1. 安装 erlang

**比较熟悉 erlang 的可以采用此方式进行安装，对于不熟悉 erlang 的，推荐使用第二种方式。**

```bash
// 安装依赖
$ yum install -y gcc glibc-devel make ncurses-devel openssl-devel xmlto

// 解压
$ tar zxf /opt/package/otp_src_21.2.tar.gz -C /opt/unziped/

// 创建文件夹
$ mkdir /usr/setup/otp_src_21.2

// 进入解压后的文件夹并 config
$ cd /opt/unziped/otp_src_21.2/
$ ./configure --prefix=/usr/setup/otp_src_21.2

// 编译并安装
$ make && make install

// 配置环境变量，并使之生效
$ vi /etc/profile
export ERL_HOME=/usr/setup/otp_src_21.2
PATH=$ERL_HOME/bin:$PATH

// 验证
$ erl
```

2. 安装并配置 rabbitmq

```bash
// 直接安装
$ rpm -ivh --nodeps rabbitmq-server-3.7.9-1.el7.noarch.rpm

// 开放端口
$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload

// 启动管理客户端功能
$ rabbitmq-plugins enable rabbitmq_management

// 后台启动
$ rabbitmq-server -detached

// 创建用户，并赋予权限（此操作要放到启动之后）
$ rabbitmqctl add_user root root1003
$ rabbitmqctl set_user_tags root administrator
$ rabbitmqctl set_permissions -p / root '.*' '.*' '.*'
```

### 「推荐」 方式二

```bash
// 安装依赖
$ yum install -y socat

// 安装 erlang
$ rpm -ivh erlang-21.0.9-1.el7.centos.x86_64.rpm

// 安装 rabbitmq
$ rpm -ivh rabbitmq-server-3.7.9-1.el7.noarch.rpm

// 开放端口
$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload

// 后台启动
$ rabbitmq-server -detached


// 启动管理客户端功能
$ rabbitmq-plugins enable rabbitmq_management

// 创建用户，并赋予权限
$ rabbitmqctl add_user northmeter admin123456 // 密码不能太复杂
$ rabbitmqctl set_user_tags northmeter administrator
$ rabbitmqctl set_permissions -p / northmeter '.*' '.*' '.*'

// 开机自启动
$ chkconfig rabbitmq-server on

```

## docker 上安装 rabbitmq

```bash

docker search rabbitmq

docker pull rabbitmq

mkdir -p /mydata/rabbimq/

docker run -p 5672:5672 -p 15672:15672 --name rabbitmq \
-v /mydata/rabbitmq:/var/lib/rabbitmq \
-v /mydata/rabbitmq/logs:/var/log/rabbitmq \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
-e RABBITMQ_LOG_BASE=/var/log/rabbitmq \
-d rabbitmq

docker exec -it rabbitmq /bin/bash

rabbitmq-plugins enable rabbitmq_management

## 开机自启动
docker update rabbitmq --restart=always


```

```bash
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management

docker run -d --name rabbitmq --restart=always -p 5672:5672 -p 15672:15672 rabbitmq:4-management

docker run：启动一个新的容器。
-it：以交互模式运行容器，并分配一个伪终端（通常用于需要进入容器操作时）。
-d：后台运行。
--rm：容器停止后自动删除容器。
--name rabbitmq：为容器指定名称为 rabbitmq。
-restart=always：自动重启。
-p 5672:5672：将主机的 5672 端口映射到容器的 5672 端口（RabbitMQ 的 AMQP 服务端口）。
-p 15672:15672：将主机的 15672 端口映射到容器的 15672 端口（RabbitMQ 的管理界面端口）。
rabbitmq:4-management：使用带有管理插件的 RabbitMQ 4.x 镜像。


```
