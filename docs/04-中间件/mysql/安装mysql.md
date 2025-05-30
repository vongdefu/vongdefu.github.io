## 安装 MySQL8.4.5

- 下载地址： https://dev.mysql.com/downloads/mysql/
- 参考文档： https://dev.mysql.com/doc/refman/8.4/en/linux-installation-rpm.html

### 安装过程

> 根据参考文档安装即可。

```sh
# 卸载原来的 mariadb
rpm -qa|grep mariadb
mariadb-libs-5.5.56-2.el7.x86_64
rpm -e mariadb-libs-* --nodeps
rpm -qa|grep mariadb

# 上传 安装包
cd /opt
mkdir mysql-8.4.5
tar xvf mysql-8.4.5-1.el7.x86_64.rpm-bundle.tar -C mysql-8.4.5/
rpm -ivh mysql-community-common-8.4.5-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-plugins-8.4.5-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.4.5-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.4.5-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-compat-8.4.5-1.el7.x86_64.rpm
rpm -ivh mysql-community-icu-data-files-8.4.5-1.el7.x86_64.rpm
yum install -y net-tools perl libtirpc libaio
rpm -ivh mysql-community-server-8.4.5-1.el7.x86_64.rpm
mysqld --initialize --user=mysql
cat /var/log/mysqld.log // 记住初始化的密码
systemctl status mysqld
systemctl start mysqld
systemctl status mysqld
mysql -uroot -p
// 修改root密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'root1003';
mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'root1003';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;

mysql>  select host,user from user;
+-----------+------------------+
+-----------+------------------+
| host      | user             |
+-----------+------------------+
| %         | root             |
| localhost | mysql.infoschema |
| localhost | mysql.session    |
| localhost | mysql.sys        |
| localhost | root             |
+-----------+------------------+
5 rows in set (0.01 sec)

```

## 前言

centos7 是最小化安装。安装在 vm 虚拟机上面。

## 信息统计

- 下载地址：https://dev.mysql.com/downloads/mysql/5.7.html#downloads
- 软件版本：mysql-5.7.24
- 安装地址：默认地址，即分散安装到很多目录
- 配置文件地址：/etc/my.cnf
- 日志文档地址：见配置文件
- 占用端口：3306

## 安装

- 下载文件

```
wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.34-1.el7.x86_64.rpm-bundle.tar
```

- 检查安装环境

```shell
[root@home ~]# rpm -qa|grep mariadb
mariadb-libs-5.5.56-2.el7.x86_64
[root@home ~]# rpm -e mariadb-libs-* --nodeps
[root@home ~]# rpm -qa|grep mariadb
```

- 将下载好的 mysql 安装包上传到/opt/packages/目录下

- 解压

```shell
[root@home ~]# cd /opt/packages/
[root@home packages]# mkdir mysql5.7.24
[root@home packages]# tar xvf mysql-5.7.24-1.el7.x86_64.rpm-bundle.tar -C mysql5.7.24/
mysql-community-common-5.7.24-1.el7.x86_64.rpm
mysql-community-minimal-debuginfo-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-compat-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-devel-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-5.7.24-1.el7.x86_64.rpm
mysql-community-libs-5.7.24-1.el7.x86_64.rpm
mysql-community-devel-5.7.24-1.el7.x86_64.rpm
mysql-community-server-5.7.24-1.el7.x86_64.rpm
mysql-community-libs-compat-5.7.24-1.el7.x86_64.rpm
mysql-community-client-5.7.24-1.el7.x86_64.rpm
mysql-community-server-minimal-5.7.24-1.el7.x86_64.rpm
mysql-community-test-5.7.24-1.el7.x86_64.rpm
[root@home packages]# ll mysql5.7.24/
总用量 585024
-rw-r--r--. 1 7155 31415  25398288 10月  5 2018 mysql-community-client-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415    280896 10月  5 2018 mysql-community-common-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415   3840412 10月  5 2018 mysql-community-devel-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415  46773880 10月  5 2018 mysql-community-embedded-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415  24078240 10月  5 2018 mysql-community-embedded-compat-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415 130082964 10月  5 2018 mysql-community-embedded-devel-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415   2272368 10月  5 2018 mysql-community-libs-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415   2116016 10月  5 2018 mysql-community-libs-compat-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415  56029544 10月  5 2018 mysql-community-minimal-debuginfo-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415 173096508 10月  5 2018 mysql-community-server-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415  15167212 10月  5 2018 mysql-community-server-minimal-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. 1 7155 31415 119909528 10月  5 2018 mysql-community-test-5.7.24-1.el7.x86_64.rpm
```

- 安装

```shell
[root@home packages]# cd mysql5.7.24/
[root@home mysql5.7.24]# rpm -ivh mysql-community-common-5.7.24-1.el7.x86_64.rpm
[root@home mysql5.7.24]# rpm -ivh mysql-community-libs-5.7.24-1.el7.x86_64.rpm
[root@home mysql5.7.24]# rpm -ivh mysql-community-client-5.7.24-1.el7.x86_64.rpm
[root@home mysql5.7.24]# yum install -y net-tools perl
[root@home mysql5.7.24]# rpm -ivh mysql-community-server-5.7.24-1.el7.x86_64.rpm


rpm -ivh mysql-community-common-*.rpm
rpm -ivh mysql-community-client-plugins-*.rpm
rpm -ivh mysql-community-libs-*.rpm
rpm -ivh mysql-community-client-8*.rpm
rpm -ivh mysql-community-libs-compat-*.rpm
rpm -ivh mysql-community-icu-data-files-*.rpm
yum install -y net-tools perl libtirpc libaio
rpm -ivh mysql-community-server-*.rpm

[root@10 mysql-8.4.5]# rpm -qa | grep mysql
mysql-community-common-8.4.5-1.el7.x86_64
mysql-community-libs-8.4.5-1.el7.x86_64
mysql-community-icu-data-files-8.4.5-1.el7.x86_64
mysql-community-client-8.4.5-1.el7.x86_64
mysql-community-server-debug-8.4.5-1.el7.x86_64
mysql-community-client-plugins-8.4.5-1.el7.x86_64
mysql-community-libs-compat-8.4.5-1.el7.x86_64
mysql-community-server-8.4.5-1.el7.x86_64
```

- 初始化

```shell
[root@home mysql5.7.24]# mysqld --initialize --user=mysql
[root@home mysql5.7.24]# cat /var/log/mysqld.log
[root@home mysql5.7.24]# systemctl status mysqld
[root@home mysql5.7.24]# systemctl start mysqld
[root@home mysql5.7.24]# systemctl status mysqld
```

- 分配权限
  - 为 root 用户设置新密码：`root@2019&*(`
  - 创建只具有增删改查的远程登录用户 test：`test!@#`
  - 创建具有全部权限的 admin 用户：`admin@2019!@#`
  - 【optional】为 root 用户设置远程登录权限

```shell
// 使用root登录
[root@home mysql5.7.24]# mysql -uroot -p
// 修改root密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'root@2019&*(';
// 创建只具有增删改查的远程登录用户test
mysql> create user 'test'@'%' identified by 'test!@#';
mysql> grant select, insert, update, delete on *.* to 'test'@'%';
mysql> flush privileges;
// 创建具有全部权限的admin用户
mysql> create user 'admin'@'%' identified by 'admin@2019!@#';
mysql> grant all on *.* to 'admin'@'%' identified by 'admin@2019!@#';
mysql> flush privileges;
// 设置root远程登录权限【未执行】
mysql> grant all on *.* to 'root'@'%' identified by 'root@2019&*(';
mysql> flush privileges;

```

- 关闭服务

```shell
[root@home mysql5.7.24]# systemctl status mysqld
[root@home mysql5.7.24]# systemctl stop mysqld
```

- 修改配置文件

具体可以查看[mysql5.7 配置文件详解](../software/mysql5.7-config-file.md)。

```shell
[root@dev ~]# cat /etc/my.cnf
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html
[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
# 设置表名不区分大小写
lower_case_table_names=1
# 修改默认值，以达到5.6与5.7兼容的目的
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
# 数据库默认字符集,主流字符集支持一些特殊表情符号（特殊表情符占用4个字节）
character-set-server=utf8mb4
# 数据库字符集对应一些排序等规则，注意要和character-set-server对应
collation-server=utf8mb4_general_ci
# 设置默认存储引擎
default-storage-engine=INNODB
# 设置最大连接数
max_connections=1000
# 设置client连接mysql时的字符集,防止乱码
init_connect='SET NAMES utf8mb4'
#TIMESTAMP如果没有显示声明NOT NULL，允许NULL值
explicit_defaults_for_timestamp = true




# 200 服务器配置
[client]
default-character-set=utf8

[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
lower_case_table_names=1
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci
max_connections=1000

[mysql]
no-auto-rehash
default-character-set=utf8
```

- 启动服务

```shell
[root@home mysql5.7.24]# systemctl start mysqld
```

- 开放端口

```shell
[root@home mysql5.7.24]# firewall-cmd --zone=public --add-port=3306/tcp --permanent
success
[root@home mysql5.7.24]# firewall-cmd --reload
success
```

- 删除安装包

```shell
[root@home mysql5.7.24]# cd ..
[root@home packages]# rm -rf ./*
```

- 测试

略。

> 注意事项：
>
> 1. mysqld 是 mysql5.7 的服务器进程，在初始化之前是不能启动的。
> 2. 进行配置文件中的设置时，可以根据公司各自需求进行自定义设置。
> 3. 安装完成之后要删除安装包。
> 4. utf8mb4 字符集
>    > 1. MySQL 中的 utf-8 并不是真正意义上的 utf-8,它只能存储 1~3 个字节长度的 utf-8 编码，而存储 4 个字节的必须用 utf8mb4(mysql>=5.5.3 支持)，否则会出现乱码。例如在微信管理系统中，消息文本使用了 emoji 表情:符号，必须使用 utf8mb4 进行储存。
>
> > 2.注意最大字符长度：以 INNODB 为基础，utf8 最长 VARCHAR(255)，utf8mb4 最长为 VARCHAR(191)。 3. 要求在的 mysql>=5.5.3 版本，表、字段必须使用 utf8mb4 字符集和 utf8mb4 整理。

---

```
# 拉取镜像
docker pull mysql:5.7

# 把镜像中的配置文件拷贝到本地
docker cp mysql:/etc/mysql/my.cnf /mydata/mysql/conf/my.cnf

# 启动
docker run -p 3306:3306 --name mysql \
--restart always \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf/my.cnf:/etc/mysql/my.cnf \
-v /etc/localtime:/etc/localtime \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7


// 拉取镜像
[root@home docker]# docker pull mysql:5.7

5.7: Pulling from library/mysql
72a69066d2fe: Pull complete
93619dbc5b36: Pull complete
99da31dd6142: Pull complete
626033c43d70: Pull complete
37d5d7efb64e: Pull complete
ac563158d721: Pull complete
d2ba16033dad: Pull complete
0ceb82207cd7: Pull complete
37f2405cae96: Pull complete
e2482e017e53: Pull complete
70deed891d42: Pull complete
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7

// 安装
[root@home docker]# docker run -p 3306:3306 --name mysql \
> -v /mnt/doc/docker/mysql/log:/var/log/mysql \
> -v /mnt/doc/docker/mysql/data:/var/lib/mysql \
> -v /mnt/doc/docker/mysql/conf:/etc/mysql \
> -e MYSQL_ROOT_PASSWORD=root \
> -d mysql:5.7
0a4457b1eac5dbfdba0f483db94aeb4fd42652d9f893094cf34daa0f4877116d
[root@home docker]# docker ps -a
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql
[root@home docker]# cd /mnt/doc/docker/
[root@home mysql]# cd conf/
[root@home conf]# ll
总用量 0

// 创建配置文件
[root@home conf]# vi my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
init_connect='SET collation_connection = utf8mb4_unicode_ci'
init_connect='SET NAMES utf8mb4'
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

// 重启mysql
[root@home conf]# docker restart mysql
mysql
[root@home conf]# docker ps
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS          PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   "docker-entrypoint.s…"   6 minutes ago   Up 10 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql

// 设置开机自启
[root@home conf]# docker update mysql --restart=always
mysql

// 解决时间问题
[root@home conf]# docker exec -it mysql bash
root@0a4457b1eac5:/# date
Sat Oct  7 12:58:45 UTC 2023
root@0a4457b1eac5:/# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
root@0a4457b1eac5:/# date
Sat Oct  7 20:58:57 CST 2023
root@0a4457b1eac5:/# exit
exit

// 最后重启
[root@home conf]# docker restart mysql
mysql

```

解决时间差 8 小时的问题

1. 在客户端输入 select now(); 发现查了 8 小时
2. 进入 mysql 服务端： docker exec -it mysql bash
3. 查看 mysql 服务端当前时间： date ，发现差了 8 小时
4. 直接修改时区为上海： ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime ，再次输入 date，发现时间已经正常
5. 重启 mysql 服务端

#### 5.2.2. 主从分离

> 说明：
> 由于实验过程要求创建千万级别的数据，为了避免在主从同步的过程中出现问题。我们采用现在单例数据库上面上创建一个千万级数据，之后备份下来。再搭建三个数据库实例，之后把数据依次恢复到三个实例上，然后再建立主从关系，最后开启主从复制的过程。
> **当然如果不需要关注千万级数据，那么我们只需要依次创建三个实例，之后建立主从关系，最后开启主从复制过程即可。也就是只需要执行「执行创建过程」、「开启主从复制过程」两个步骤即可。**

##### 5.2.2.1. 生成千万级数据的备份 SQL

```bash
// 把之前的单例mysql中已经生成的千万级数据备份成sql语句
docker exec mysql sh -c 'exec mysqldump --databases monomer_order -uroot -proot' > /mydata/backupsqls/mysql/monomer_order.sql

```

##### 5.2.2.2. 三个单例 mysql 的搭建过程

###### 5.2.2.2.1. master 搭建过程

> 让主机的 3307 端口映射出去。注意： binlog_format 推荐使用 row，具体参考【[这里](https://help.aliyun.com/document_detail/67809.html)】。

```bash
// 创建容器
docker run -p 3307:3306 --name mysql-master \
-v /mydata/mysql-master/log:/var/log/mysql \
-v /mydata/mysql-master/data:/var/lib/mysql \
-v /mydata/mysql-master/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7

// 创建配置文件
vi /mydata/mysql-master/conf/my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
character-set-server=utf8mb4
default-time_zone='+8:00'
server_id=100
log_bin=master-bin
binlog_format=ROW
slow-query-log-file=/var/log/mysql/slow-query.log
long_query_time=1

// 设置开机自启动，并重启
docker update mysql-master --restart=always
docker restart mysql-master

// 创建主从复制的用户信息
docker exec -it mysql-master /bin/bash
mysql -uroot -proot
CREATE USER 'slave'@'%' IDENTIFIED BY '123456';

GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'slave'@'%';

flush privileges;


```

###### 5.2.2.2.2. slave01 搭建过程

> 让主机的 3308 端口映射出去。

```bash
// 创建容器
docker run -p 3308:3306 --name mysql-slave01 \
-v /mydata/mysql-slave01/log:/var/log/mysql \
-v /mydata/mysql-slave01/data:/var/lib/mysql \
-v /mydata/mysql-slave01/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7

// 创建配置文件
vi /mydata/mysql-slave01/conf/my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
character-set-server=utf8mb4
default-time_zone='+8:00'
server_id=101
log_bin=slave01-bin
relay_log=mysql-relay-bin

// 设置开机自启动，并重启
docker update mysql-slave01 --restart=always
docker restart mysql-slave01

```

###### 5.2.2.2.3. slave02 搭建过程

> 让主机的 3309 端口映射出去。

```bash
// 创建容器
docker run -p 3309:3306 --name mysql-slave02 \
-v /mydata/mysql-slave02/log:/var/log/mysql \
-v /mydata/mysql-slave02/data:/var/lib/mysql \
-v /mydata/mysql-slave02/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7

// 创建配置文件
vi /mydata/mysql-slave02/conf/my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
character-set-server=utf8mb4
default-time_zone='+8:00'
server_id=102
log_bin=slave01-bin
relay_log=mysql-relay-bin

// 设置开机自启动，并重启
docker update mysql-slave02 --restart=always
docker restart mysql-slave02

```

##### 5.2.2.3. 恢复数据到三个实例中

> 由于数据量很大，我们采用先恢复数据到库里面的方式，让三个数据库实例的数据保持一致，之后再进行主从复制。

```bash
docker exec -i mysql-master sh -c 'exec mysql -uroot -proot' < /mydata/backupsqls/mysql/monomer_order.sql
docker exec -i mysql-slave01 sh -c 'exec mysql -uroot -proot' < /mydata/backupsqls/mysql/monomer_order.sql
docker exec -i mysql-slave02 sh -c 'exec mysql -uroot -proot' < /mydata/backupsqls/mysql/monomer_order.sql

```

##### 5.2.2.4. 开启从数据库实例的主从复制过程

> 主要分两个步骤：
>
> 1. 记录主库的位置信息；
> 2. 设置从库与主库的通信的相关信息，并在主库中开启主从复制过程；

```bash

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 1. 获取master的数据位置
////////////////////////////////////////////////////////////////////////////////////////////////////
docker exec -it mysql-master /bin/bash
mysql -uroot -proot
show master status;


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 2. 配置slave01
////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. 进入slave01内部命令行
docker exec -it mysql-slave01 /bin/bash
mysql -uroot -proot

// 2. 设置主从复制的起始位置
CHANGE MASTER TO MASTER_HOST='192.168.1.150',MASTER_USER='slave',MASTER_PASSWORD='123456', \
MASTER_PORT=3307,MASTER_LOG_FILE='master-bin.000005',MASTER_LOG_POS=145291152;

// 3. 开始主从复制，并查看主从复制的状态
start slave;
show slave status\G

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 3. 配置slave02
////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. 进入slave02内部命令行
docker exec -it mysql-slave02 /bin/bash
mysql -uroot -proot


// 2. 设置主从复制的起始位置
CHANGE MASTER TO MASTER_HOST='192.168.1.150',MASTER_USER='slave',MASTER_PASSWORD='123456', \
MASTER_PORT=3307,MASTER_LOG_FILE='master-bin.000005',MASTER_LOG_POS=145291152;

// 3. 开始主从复制，并查看主从复制的状态
start slave;
show slave status\G

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// 4. 测试并验证
////////////////////////////////////////////////////////////////////////////////////////////////////
// 成功！！！done！！！

```

---

## 1. 主从配置

### 1.1. 规划

- MySQL 版本：5.7.24
- master 主机 IP：192.168.100.220
- slave01 主机 IP：192.168.100.221

### 1.2. 安装

#### 1.2.1. 安装虚拟机

分别在不同的虚拟机上安装 centos7.5。安装之后的信息如下：

```
mysql.master：
  网络信息：192.168.100.220
  用户名/密码：root root1003

mysql.slave01:
  网络信息：192.168.100.221
  用户名/密码：root root1003
```

#### 1.2.2. 安装 mysql

在三台虚拟机上面各自安装好 mysql，并完成初始化。

- 为 root 用户设置新密码：`root@2019&*(`
- 创建只具有增删改查的远程登录用户 test：`test!@#`
- 创建具有全部权限的 admin 用户：`admin@2019!@#`
- 【optional】为 root 用户设置远程登录权限

### 1.3. 测试连通性

在 master 上面 ping 两台 slave01 的 ip，保证能够 ping 通；分别在 slave 上 ping master 的 ip，保证也能 ping 通。

## 2. 主从复制配置

### 2.1. 主机配置

1. 查看是否开启 bin 日志

```
[root@mysql ~]# ll /var/lib/mysql

// 未发现bin文件，表明未开启
```

2. 修改配置文件

```
vi /etc/my.cnf

#######################主从复制####################
server-id=1
log_bin=/var/lib/mysql/mysql-bin
```

3. 创建用户并授权

```
create user 'repl' identified by 'repl';
grant replication slave on *.* to 'repl'@'192.168.100.%' identified by 'repl';
flush privileges;
```

4. 重启服务

```
systemctl restart mysqld
```

5. 查看 bin 日志文件

```
[root@mysql ~]# ll /var/lib/mysql

// 发现存在bin文件，说明开启成功
```

### 2.2. 从机配置

1. 修改配置文件

```
vi /etc/my.cnf

#######################主从复制####################
server-id=2
relay-log-index=slave-relay-bin.index
relay-log=slave-relay-bin

```

2. 重启服务

```
systemctl restart mysqld
```

### 2.3. 建立主从关系

1. 主库登录 mysql 查看状态

```
mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |      154 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```

2. 打开从库登录 mysql，查看状态，进行如下配置

```
mysql> show slave status\G
Empty set (0.00 sec)

mysql> change master to master_host='192.168.100.220';
Query OK, 0 rows affected (0.01 sec)


mysql> change master to master_port=3306;
Query OK, 0 rows affected (0.01 sec)

mysql> change master to master_user='repl';
Query OK, 0 rows affected, 2 warnings (0.01 sec)

mysql> change master to master_password='repl';
Query OK, 0 rows affected, 2 warnings (0.01 sec)

mysql> change master to master_log_file='mysql-bin.000001';
Query OK, 0 rows affected, 1 warning (0.00 sec)

mysql> change master to master_log_pos=154;
Query OK, 0 rows affected (0.01 sec)

mysql> show slave status\G
*************************** 1. row ***************************
               Slave_IO_State:
                  Master_Host: 192.168.100.220
                  Master_User: repl
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 154
               Relay_Log_File: slave-relay-bin.000001
                Relay_Log_Pos: 4
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running: No
            Slave_SQL_Running: No
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: 0
                   Last_Error:
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 154
              Relay_Log_Space: 154
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: NULL
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error:
               Last_SQL_Errno: 0
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: 0
                  Master_UUID:
             Master_Info_File: /var/lib/mysql/master.info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State:
           Master_Retry_Count: 86400
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: 0
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
1 row in set (0.00 sec)

mysql> start slave;
Query OK, 0 rows affected (0.01 sec)

mysql> show slave status\G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 192.168.100.220
                  Master_User: repl
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 154
               Relay_Log_File: slave-relay-bin.000002
                Relay_Log_Pos: 320
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: 0
                   Last_Error:
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 154
              Relay_Log_Space: 527
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error:
               Last_SQL_Errno: 0
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: 1
                  Master_UUID: d0a811e6-e804-11e9-99fe-000c29e1ed82
             Master_Info_File: /var/lib/mysql/master.info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Slave has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: 0
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
1 row in set (0.00 sec)

```

> 注意：
> Slave_IO_Running: Yes
> Slave_SQL_Running: Yes
> 这两个参数要同时处于 yes 状态才行。

## 3. 测试

1. 在主库上创建测试数据库，创建一张表，并插入一条测试数据

```
create database testrepl;

use testrepl;

create table staffs (
  id int primary key auto_increment,
  name varchar(24) not null default '' comment '姓名',
  age int not null default 0 comment '年龄',
  pos varchar(20) not null default '' comment '职位'
);

insert into staffs(name, age, pos) values('z3', 22, 'manager');

```

2. 在从库上查看是否有该数据库

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| testrepl           |
+--------------------+
5 rows in set (0.00 sec)

mysql> use testrepl
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+--------------------+
| Tables_in_testrepl |
+--------------------+
| staffs             |
+--------------------+
1 row in set (0.00 sec)

mysql> select * from staffs;
+----+------+-----+---------+
| id | name | age | pos     |
+----+------+-----+---------+
|  1 | z3   |  22 | manager |
+----+------+-----+---------+
1 row in set (0.00 sec)

mysql>
```

## 问题解决

### 发现添加列时每一列的编码都是拉丁编码

```
[root@dev ~]# vi /etc/my.cnf

[client]
default-character-set=utf8

[mysqld]
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci

[mysql]
no-auto-rehash
default-character-set=utf8


[root@dev ~]# systemctl restart mysqld
[root@dev ~]# systemctl status mysqld

```

如果在添加一列时，发现还是不行，可以先进行创建表的操作，然后再在创建的表格上面添加列。

```
CREATE DATABASE ${tablename} DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
```

### 连接数量太多

```sh
show variables like '%max_connections%'
发现连接数为：151

// 在配置文件中设置默认字符集
$ vi /etc/my.cnf

// 在[mysqld]下添加下面一行
max_connections=1000

// 重启
$ systemctl restart mysqld


show variables like '%max_connections%'
发现连接数为：1000

```
