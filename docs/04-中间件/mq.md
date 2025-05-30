# 消息队列知识点汇总

- [详细讲解！RabbitMQ 防止数据丢失](https://mp.weixin.qq.com/s/KGCER3TWLT6Yk_UwsYJZyA)
- [超详细的 RabbitMQ 入门](https://mp.weixin.qq.com/s/RhXe3cF_B3p78I2mEXY9EQ)

## Centos 安装 RabbitMQ

下载地址：

1. erlang： http://www.erlang.org/downloads
2. rabbitmq： http://www.rabbitmq.com/install-rpm.html#downloads

安装步骤分为两步，第一步是安装 erlang 环境，第二步是安装 rabbitmq-server。erlang 的安装方式有很多种：

1. 使用源码方式安装，这种方式需要安装 gcc 的等编译软件；
2. 直接使用安装包方式进行安装（采用此方式安装）；
3. 使用 yum 源方式安装；

### 方式一

#### 安装 erlang

**比较熟悉 erlang 的可以采用此方式进行安装，对于不熟悉 erlang 的，推荐使用第二种方式。**

- 安装依赖

```
$ yum install -y gcc glibc-devel make ncurses-devel openssl-devel xmlto
```

- 解压

```
$ tar zxf /opt/package/otp_src_21.2.tar.gz -C /opt/unziped/
```

- 创建文件夹

```
$ mkdir /usr/setup/otp_src_21.2
```

- 进入解压后的文件夹并 config

```
$ cd /opt/unziped/otp_src_21.2/
$ ./configure --prefix=/usr/setup/otp_src_21.2
```

- 编译并安装

```
$ make && make install
```

- 配置环境变量，并使之生效

```
$ vi /etc/profile
export ERL_HOME=/usr/setup/otp_src_21.2
PATH=$ERL_HOME/bin:$PATH
```

- 测试

```
$ erl
```

#### 安装并配置 rabbitmq

- 直接安装

```
$ rpm -ivh --nodeps rabbitmq-server-3.7.9-1.el7.noarch.rpm
```

- 开放端口

```
$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload
```

- 启动管理客户端功能

```
$ rabbitmq-plugins enable rabbitmq_management
```

- 后台启动

```
$ rabbitmq-server -detached
```

- 创建用户，并赋予权限（此操作要放到启动之后）

```
$ rabbitmqctl add_user root root1003
$ rabbitmqctl set_user_tags root administrator
$ rabbitmqctl set_permissions -p / root '.*' '.*' '.*'
```

### 方式二（推荐）

- 安装依赖

```
$ yum install -y socat
```

- 安装 erlang

```
$ rpm -ivh erlang-21.0.9-1.el7.centos.x86_64.rpm
```

- 安装 rabbitmq

```
$ rpm -ivh rabbitmq-server-3.7.9-1.el7.noarch.rpm
```

- 开放端口

```
$ firewall-cmd --zone=public --permanent --add-port=15672/tcp
$ firewall-cmd --zone=public --permanent --add-port=5672/tcp
$ firewall-cmd --reload
```

- 后台启动

```
$ rabbitmq-server -detached
```

- 启动管理客户端功能

```
$ rabbitmq-plugins enable rabbitmq_management
```

- 创建用户，并赋予权限

```
$ rabbitmqctl add_user northmeter admin123456 // 密码不能太复杂
$ rabbitmqctl set_user_tags northmeter administrator
$ rabbitmqctl set_permissions -p / northmeter '.*' '.*' '.*'
```

- 开机自启动

```
$ chkconfig rabbitmq-server on
```

### 问题解决

特别强调：rabbitmq 的安装特别依赖 erlang 的版本，具体依赖哪一个版本请参考[此处](http://www.rabbitmq.com/which-erlang.html)。
