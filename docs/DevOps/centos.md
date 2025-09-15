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

## yum 源管理

### centos7 yum 源失效

停止维护之后，自带的 yum 源就失效了。解决过程：

1. 备份：
   1. mkdir -p /etc/yum.repos.d/bak
   2. mv /etc/yum.repos.d/\*.repo /etc/yum.repos.d/bak/
2. 修改：

参考[这里](https://www.cnblogs.com/lvzhenjiang/articles/18350828)。

## 服务管理

```bash

# 创建自启service文件
vi /usr/lib/systemd/system/nginx.service

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

# 设置开机自启
systemctl enable nginx.service

# 其它命令
systemctl [start | enable | disable | status | restart | stop] nginx.service
```

## centos7.5 的防火墙

- 样例

```bash
添加
firewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）

重新载入
firewall-cmd --reload

查看
firewall-cmd --zone=public --list-ports

删除
firewall-cmd --zone= public --remove-port=80/tcp --permanent
```

- firewalld 的基本使用

```bash
启动：  systemctl start firewalld
查状态：systemctl status firewalld
停止：  systemctl disable firewalld
禁用：  systemctl stop firewalld
在开机时启用一个服务：systemctl enable firewalld.service
在开机时禁用一个服务：systemctl disable firewalld.service
查看服务是否开机启动：systemctl is-enabled firewalld.service
查看已启动的服务列表：systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed
```

- 配置 firewalld-cmd

```bash
查看版本： firewall-cmd --version
查看帮助： firewall-cmd --help
显示状态： firewall-cmd --state
查看所有打开的端口： firewall-cmd --zone=public --list-ports
更新防火墙规则： firewall-cmd --reload
查看区域信息:  firewall-cmd --get-active-zones
查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0
拒绝所有包：firewall-cmd --panic-on
取消拒绝状态： firewall-cmd --panic-off
查看是否拒绝： firewall-cmd --query-panic
```

- 那怎么开启一个端口呢

```bash
添加
firewall-cmd --zone=public(作用域) --add-port=80/tcp(端口和访问类型) --permanent(永久生效)
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --reload    ## 重新载入，更新防火墙规则
firewall-cmd --zone= public --query-port=80/tcp  ##查看
firewall-cmd --zone= public --remove-port=80/tcp --permanent  ## 删除

firewall-cmd --list-services
firewall-cmd --get-services
firewall-cmd --add-service=<service>
firewall-cmd --delete-service=<service>
在每次修改端口和服务后/etc/firewalld/zones/public.xml文件就会被修改,所以也可以在文件中之间修改,然后重新加载
使用命令实际也是在修改文件，需要重新加载才能生效。

firewall-cmd --zone=public --query-port=80/tcp
firewall-cmd --zone=public --query-port=8080/tcp
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --query-port=8080/tcp
firewall-cmd --reload  ## 重新加载后才能生效
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --query-port=8080/tcp
```

- 参数解释

```bash
–add-service ##添加的服务
–zone ##作用域
–add-port=80/tcp ##添加端口，格式为：端口/通讯协议
–permanent ##永久生效，没有此参数重启后失效
```

- 详细使用

```bash
firewall-cmd --permanent --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.0.4/24" service name="http" accept'    //设置某个ip访问某个服务
firewall-cmd --permanent --zone=public --remove-rich-rule='rule family="ipv4" source address="192.168.0.4/24" service name="http" accept' //删除配置
firewall-cmd --permanent --add-rich-rule 'rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept'     //设置某个ip访问某个端口
firewall-cmd --permanent --remove-rich-rule 'rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept'     //删除配置

firewall-cmd --query-masquerade  ## 检查是否允许伪装IP
firewall-cmd --add-masquerade    ## 允许防火墙伪装IP
firewall-cmd --remove-masquerade ## 禁止防火墙伪装IP

firewall-cmd --add-forward-port=port=80:proto=tcp:toport=8080   ## 将80端口的流量转发至8080
firewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.1.0.1 ## 将80端口的流量转发至192.168.0.1
firewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.0.1:toport=8080 ## 将80端口的流量转发至192.168.0.1的8080端口
```

## selinux

- 查看

```bash
getenforce 或 /usr/sbin/sestatus -v
```

- 临时关闭

```bash
setenforce 0
```

- 永久关闭

```bash
vi /etc/selinux/config
SELINUX=disabled
```

- 查看 Linux 状态

```bash
sestatus
```

- selinux 的知识点

```bash
https://blog.csdn.net/yanjun821126/article/details/80828908
```

## 创建用户并赋权

### 创建新用户

```shell
[root@VM_0_6_centos ~]# adduser northmeter
[root@VM_0_6_centos ~]# passwd northmeter
Changing password for user northmeter.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.

# 授权

[root@VM_0_6_centos ~]# ls -l /etc/sudoers
-r--r-----. 1 root root 3938 Jun  7  2017 /etc/sudoers
[root@VM_0_6_centos ~]# chmod -v u+w /etc/sudoers
mode of ‘/etc/sudoers’ changed from 0440 (r--r-----) to 0640 (rw-r-----)
[root@VM_0_6_centos ~]# vi /etc/sudoers
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
northmeter      ALL=(ALL)       ALL

[root@VM_0_6_centos ~]# chmod -v u-w /etc/sudoers
mode of ‘/etc/sudoers’ changed from 0640 (rw-r-----) to 0440 (r--r-----)
```

### 登录

```shell
[root@200 ~]# ssh northmeter@193.112.249.36
northmeter@193.112.249.36's password:
Last login: Tue Jun  5 12:37:45 2018 from 218.17.157.121
```

### 测试

```shell
[root@VM_0_6_centos ~]# su northmeter
[northmeter@VM_0_6_centos root]$ sudo cat /etc/passwd

We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.

[sudo] password for northmeter:
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:99:99:Nobody:/:/sbin/nologin
systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
polkitd:x:999:997:User for polkitd:/:/sbin/nologin
libstoragemgmt:x:998:996:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
abrt:x:173:173::/etc/abrt:/sbin/nologin
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
ntp:x:38:38::/etc/ntp:/sbin/nologin
postfix:x:89:89::/var/spool/postfix:/sbin/nologin
chrony:x:997:995::/var/lib/chrony:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
syslog:x:996:994::/home/syslog:/bin/false
centos:x:1000:1000:Cloud User:/home/centos:/bin/bash
northmeter:x:1001:1001::/home/northmeter:/bin/bash
```

---

# 定时任务

## 查看服务相关信息

```shell
$ systemctl status crond		// crond状态
$ systemctl is-enabled crond	// 是否开机自启
```

#### 表达式概述

```
.---------------- minute (0 - 59)：代表分钟，取值范围00-59
|  .------------- hour (0 - 23)：代表小时，取值范围00-23
|  |  .---------- day of month (1 - 31)：代表月份中的日期，取值范围01-31
|  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...：代表月份，取值范围01-12
|  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
|  |  |  |  |
*  *  *  *  * user-name  command to be executed
```

#### 特殊符号含义

| 特殊符号 | 含义                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*       | 表示任意时间都，也是”每”的意思，举例：如 00 23 \* \* \*cmd 表示每月每周每日的 23:00 都执行 cmd 任务                                                                                                     |
| -        | 表示分隔符，表示一个时间段范围段，如 17-19 点，每小时的 00 分执行任务，00 17-19 \* \* \* cmd 。就是 17,18,19 点整点分别执行的意思                                                                       |
| ,        | 表示分隔时段的意思，30 17,18,19 \* \* _ /bin.sh /scripts/dingjian.sh 表示每天 17,18 和 19 点的半点时刻执行/scripts/dingjian.sh 脚本。也可以和”-”结合使用，如：30 3-5,17-19 _ \* \* /scripts/dingjian.sh |
| /n       | 即”每隔 n 单位时间”，如：每 10 分钟执行一次任务可以写成 _/10 _ \* \* _ cmd,其中“_/10”的范围是 0-59，因此也可以写成 0-59/10                                                                              |

### 命令概述

#### 指定语法

```shell
crontab [-u user] file
        crontab -u user
                (default operation is replace, per 1003.2)
        -e      (edit user's crontab)      编辑用户命令
        -l      (list user's crontab)       列表
        -r      (delete user's crontab)    删除用户任务
        -i      (prompt before deleting user's crontab)     在删除前确认
        -s      (selinux context)
```

| 参数 | 含义                                             | 示例              |
| ---- | ------------------------------------------------ | ----------------- |
| -l   | 查看 crontab 文件内容，提示:l 为 list 的缩写     | crontab -l        |
| -e   | 编辑 crontab 文件内容，提示：e 可为 edit  的缩写 | crontab -e        |
| -i   | 删除 crontab 文件内容，删除前会提示确认，用得少  | crontab -ri       |
| -r   | 删除 crontab 文件内容，用得很少                  | crontab -r        |
| -u   | 指定使用的用户执行任务                           | crontab -u boy -l |

-I –r 参数在生产中很少用，没什么需求必须要用-e 进去编辑即可

补充: crontab {-l|-e} 实际上就是在操作/var/spool/cron/当前用户这样的文件

### 相关文件

| 文件             |                                                                     |
| ---------------- | ------------------------------------------------------------------- |
| /etc/cron.deny   | 该文件中所列用户不允许使用 crontab 命令                             |
| /etc/cron.allow  | 该文件中所列用户允许使用 crontab 命令，优先于/etc/cron.deny         |
| /var/spool/cron/ | 所有用户 crontab 配置文件默认都存放在此目录，**文件名以用户名命名** |
| /var/log/cron    | 定时任务的执行日志                                                  |

## 示例

```shell
// 1. 查看当前用户的定时任务
$ crontab -l

// 2. 为当前用户编辑一个定时任务
$ crontab -e

// 3. 清空当前用户的定时任务
$ crontab -r

// 4. 每分钟打印一次自己的英文名字到 /home/test/name.txt 的文件中
方式一：
    $ mkdir /home/test // 创建文件目录
    $ crontab -e // 输入以下内容

    # print my name
    * * * * * echo "zeanzai"  >> /home/test/name.txt

    $ cat /home/test/name.txt // 查看输出
    zeanzai

方式二：
    $ mkdir /home/test // 创建文件目录
    $ vi /var/spool/cron/root // 编辑定时任务配置文件，输入以下内容
    # print my name
    * * * * * echo "zeanzai"  >> /home/test/name.txt

// 5. 查看定时任务执行的日志
	$ tail -f /var/log/cron

// 6. 查看定时任务的配置文件
方式一：
    $ ll /var/spool/cron/
    $ cat root

方式二：
    $ crontab -l

// 7. 删除定时任务
    $ crontab -ir
    yes


// 8. 每天00:01打包昨天的日志文件到tar文件，并删除昨天的日志文件
$ mkdir /home/logs/school-hydroelectricity/tar
$ vi /etc/scripts/tar.sh
cd /home/logs/school-hydroelectricity
tar zcf ./tar/$(date +'%Y-%m-%d' -d '-1 days').tar.gz ./$(date +'%Y-%m-%d' -d '-1 days')
rm -rf ./$(date +'%Y-%m-%d' -d '-1 days')

$ ./etc/scripts/tar.sh
$ crontab -e
# 每天00:01打包昨天的日志文件到tar目录中，并删除昨天的日志文件，要求打包文件以日期命名
* * * * * /bin/sh /etc/scripts/tar.sh
```

## 生产问题案例及解决过程

面试题：维护的时候，创建文件提示”No space left on device”,请问你这是什么故障：

解答：磁盘空间 block 满了或者 inode 被占满了

### 故障描述及说明

某年某月甘日某时，某人在工作中设置 crontab 定时任务规则保存时，提示” No space left on device”，此时用 df -h 检查磁盘，发现还有剩余空间，用 df -I  检查则显示/var 目录己占用 100%的 inode 数量，看来是 inode 数量耗尽，导致系统无法在/var 目录下创建文件，因为定时任务的配置在/var/spool/cron 下，ext3 文件系统中，每个文件需要占一个 inode。

### 故障原因分析

当系统中 crond 定时任务执行程序有输出内容时，输出内容会以邮件形式发给 crond 的用户（默认是 root），而 sendmail 等 mail 服务没有启动时，这些输出内容以为支在邮件队列临时目录，产生这些碎文件，导致消耗 inode 数量，一旦 inode 数量耗尽，就会导致系统无法写入文件，而报上述错误：No space left on device.

### 亡羊补牢解决方法

1. 尽量将 crontab 里面的命令或脚本中的命令结尾加上>/dev/null 2>&1，或在做定时执行脚本时，把屏幕输出定向到指定文件里

2. 当然也可以开启邮件服务，不过最好不做，因为邮件服务会带来安全问题

3. 优化系统，加定时清理任务，如 find /var/spool/clientmqueue/ -type f -mtime +30|xargs rm -f

## 调试 crontab 定时任务

1. **增加执行频率调试任务**
2. **调整系统时间调试任务**
3. **通过日志输出调试定时任务**
4. **通过定时任务日志调试定时任务**

## 参考

1. http://blog.51cto.com/mrxiong2017/2084803
2. https://blog.csdn.net/andrewgb/article/details/47374963
3. https://www.cnblogs.com/javahr/p/8318728.html

---

## 挂载 NTFS 硬盘

由于家里的电脑原来装的是 windows 系统，并且我自己扩展了两块硬盘，原来 Windows 系统时，两块硬盘可以正常读写，但是在物理机上面安装上 centos7.5 以后，由于只是格式化 c 盘，把 centos7.5 系统安装到了 c 盘，所以之前自己扩展的两块硬盘就无法正常读写了，此时，需要在 centos 系统上读写两块硬盘内容，需要怎么处理呢？下面给出解决方案。

### 安装依赖包

```bash
yum install -y fuse ntfs-3g
```

### 挂载硬盘

```bash
[root@home data]# mkdir -p /mnt/data/d /mnt/data/e

[root@home data]# lsblk -f
NAME                 FSTYPE      LABEL    UUID                                   MOUNTPOINT
sda
├─sda1               vfat                 B476-53D1                              /boot/efi
├─sda2               xfs                  cd9c42b2-dafc-40dc-a780-28e8b5ed453a   /boot
└─sda3               LVM2_member          pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296
  ├─centos_home-root xfs                  a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86   /
  ├─centos_home-swap swap                 4ff247c5-07b8-4143-93bc-1496ac3a7162   [SWAP]
  └─centos_home-home xfs                  2d5c8133-4174-4689-906a-62c316aa6839   /home
sdb
└─sdb1               ntfs        Software 90769AF9769ADEF2
sdc
├─sdc1
└─sdc2               ntfs        Zeanzai  D4947D40947D25E0

[root@home data]# mount /dev/sdb1 /mnt/data/d
[root@home data]# mount /dev/sdc2 /mnt/data/e

```

### 自动挂载

如果需要永久挂载，先查到该盘的 type 值：

```bash

[root@home ~]# blkid
/dev/mapper/centos_home-root: UUID="a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86" TYPE="xfs"
/dev/sda3: UUID="pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296" TYPE="LVM2_member" PARTUUID="3f965157-bb9c-49b5-9aeb-20726f024e6f"
/dev/sdb1: LABEL="Software" UUID="90769AF9769ADEF2" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="8ba8c6a7-4a88-47d2-b94e-97d2d97a144e"
/dev/sdc1: PARTLABEL="Microsoft reserved partition" PARTUUID="6207f65b-8b11-46bd-bd4a-d14f2d5a0c6e"
/dev/sdc2: LABEL="Zeanzai" UUID="D4947D40947D25E0" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="3220d24a-a508-4dfb-af5e-ae2a749c9d9f"
/dev/sda1: SEC_TYPE="msdos" UUID="B476-53D1" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="82eac0f4-625e-4b70-80c7-221bee59c290"
/dev/sda2: UUID="cd9c42b2-dafc-40dc-a780-28e8b5ed453a" TYPE="xfs" PARTUUID="1075528c-e57e-4734-a6c9-74a798184fcb"
/dev/mapper/centos_home-swap: UUID="4ff247c5-07b8-4143-93bc-1496ac3a7162" TYPE="swap"
/dev/mapper/centos_home-home: UUID="2d5c8133-4174-4689-906a-62c316aa6839" TYPE="xfs"
```

在最下面添加两行

```bash

#
# /etc/fstab
# Created by anaconda on Sun Jun 27 13:23:19 2021
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/centos_home-root /                       xfs     defaults        0 0
UUID=cd9c42b2-dafc-40dc-a780-28e8b5ed453a /boot                   xfs     defaults        0 0
UUID=B476-53D1          /boot/efi               vfat    umask=0077,shortname=winnt 0 0
/dev/mapper/centos_home-home /home                   xfs     defaults        0 0
/dev/mapper/centos_home-swap swap                    swap    defaults        0 0

/dev/sdb1 /mnt/data/d           ntfs defaults 0 0
/dev/sdc2 /mnt/data/e           ntfs defaults 0 0
```

注意是 ntfs，不是其他。

如果遇到无法正常启动时，可以参考 https://blog.csdn.net/weixin_34401479/article/details/94316392

### 其它命令

```bash
# 查看所有磁盘的分区情况
fdisk -l

# 卸载
umount /dev/sdd1

# 查看已挂载磁盘使用情况
df -h
```

### 挂载 exFat 磁盘驱动器

```bash
yum install epel-release
rpm -v --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm
yum install exfat-utils fuse-exfat


[root@home data]# mount -t exfat /dev/sdd1 /mnt/data/f
```

---

# 磁盘扩展

## 场景描述

早上起来使用 jenkins 自动化部署时，发现日志中提示磁盘已满的问题，在查询解决此问题的过程中，有很多博客都建议修改构件保存天数。笔者在自动化部署的设置过程中，本身设置的保存天数就很小。然后查看一下磁盘的使用情况，发现 root 分区已使用 100%。只能使用修改分区的方式进行修改了。
在此问题出现的头一天晚上，重启了一下服务器，然后 rabbitmq 就再也启动不起来了，查看日志文件，网上也说是因为磁盘已满的问题。
早上过来发现，showdoc 也挂掉了，但是挂掉一段时间之后自动又好了。

## 解决过程

### 查看磁盘使用情况

```bash
[root@dev ~]# df -h
文件系统                     容量  已用  可用 已用% 挂载点
/dev/mapper/centos_dev-root  118G  118G   20K  100% /
devtmpfs                      32G     0   32G    0% /dev
tmpfs                         32G     0   32G    0% /dev/shm
tmpfs                         32G  9.8M   32G    1% /run
tmpfs                         32G     0   32G    0% /sys/fs/cgroup
/dev/sda1                   1014M  186M  829M   19% /boot
/dev/mapper/centos_dev-home  7.2T   26G  7.2T    1% /home
tmpfs                        6.3G     0  6.3G    0% /run/user/0
```

### 备份 home

```bash
[root@dev ~]# cp -r /home/ /dev/homebak
```

### 卸载 home

```bash
[root@dev ~]# umount /home
```

### 删除 home 所在的 lv

```bash
[root@dev ~]# lvremove -y /dev/mapper/centos_dev-home
  Logical volume "home" successfully removed
```

### 显示 lvm 卷组信息

```bash
[root@dev ~]# vgdisplay
  --- Volume group ---
  VG Name               centos_dev
  System ID
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  5
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               7.27 TiB
  PE Size               4.00 MiB
  Total PE              1907041
  Alloc PE / Size       38240 / <149.38 GiB
  Free  PE / Size       1868801 / <7.13 TiB
  VG UUID               js7DO7-igaq-Si7p-lAef-PkXA-FS3W-5hnfSu
```

### 扩展 root 所在的 lv

```bash
[root@dev ~]# lvextend -L +3T /dev/mapper/centos_dev-root
  Size of logical volume centos_dev/root changed from 118.00 GiB (30208 extents) to <3.12 TiB (816640 extents).
  Logical volume centos_dev/root successfully resized.
```

### 扩展 root 文件系统

```bash
[root@dev ~]# xfs_growfs /dev/mapper/centos_dev-root
meta-data=/dev/mapper/centos_dev-root isize=512    agcount=4, agsize=7733248 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=30932992, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=15104, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 30932992 to 836239360
```

### 重新创建 home 的 lv

```bash
[root@dev ~]# lvcreate -L 4T -n home centos_dev
  Logical volume "home" created.
```

### 创建 home 文件系统

```
[root@dev centos_dev]# mkfs.xfs /dev/centos_dev/home
meta-data=/dev/centos_dev/home   isize=512    agcount=4, agsize=268435455 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0, sparse=0
data     =                       bsize=4096   blocks=1073741820, imaxpct=5
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal log           bsize=4096   blocks=521728, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```

### 挂载 home 并恢复备份

```bash
[root@dev centos_dev]# mount /dev/centos_dev/home /home
[root@dev centos_dev]# cp -r /dev/homebak/ /home/
[root@dev ~]# df -h
文件系统                     容量  已用  可用 已用% 挂载点
/dev/mapper/centos_dev-root  3.2T  118G  3.1T    4% /
devtmpfs                      32G   26G  6.3G   81% /dev
tmpfs                         32G     0   32G    0% /dev/shm
tmpfs                         32G  9.8M   32G    1% /run
tmpfs                         32G     0   32G    0% /sys/fs/cgroup
/dev/sda1                   1014M  186M  829M   19% /boot
tmpfs                        6.3G     0  6.3G    0% /run/user/0
/dev/mapper/centos_dev-home  4.0T   29G  4.0T    1% /home
```

## 参考链接

1. https://blog.csdn.net/huqigang/article/details/79710201
