## 资源规划

- 三台虚拟主机： 192.168.0.201-203， node1-3
- 前置条件： jdk 环境， jdk1.8.0_461
- zookeeper-3.5.7
- kafka_2.12-3.0.0
- efak-web-2.0.8

## 安装过程

### 虚拟机准备

```sh
[root@home ~]# cat /mnt/userfiles/vms/kafka-vagrantfile/Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  $num_instances = 3
  (1..$num_instances).each do |i|
    config.vm.define "node-#{i}" do |node|
      node.vm.box = "centos/7"
      node.vm.hostname = "node-#{i}"
      $ip = "192.168.0.#{i+200}"
      node.vm.network "public_network", ip: $ip
      node.vm.provider "virtualbox" do |vb|
        vb.memory = "4096"
        vb.cpus = 2
        vb.name = "node-#{i}"
      end

      config.vm.provision "shell", inline: <<-SHELL
         ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
      SHELL

    end
  end
end
```

之后 vagrant up 直接启动。

### 安装 xsync 工具

由于是三台主机，因此常常会先在一台主机上面完成一些配置，之后再把这些配置，同步到剩余的主机上面，因此需要配置一个用来同步这些文件的工具。

```sh
[root@node-1 ~]# cat /usr/local/bin/xsync
#!/bin/bash

# 1. 判断参数个数
if [ $# -lt 1 ]
then
    echo "Not Enough Argument!"
    exit 1
fi

# 2. 定义主机 IP 列表
hosts=("192.168.0.201" "192.168.0.202" "192.168.0.203")

# 3. 遍历所有主机
for host in "${hosts[@]}"
do
    echo "====================  $host  ===================="
    # 4. 遍历所有参数文件
    for file in "$@"
    do
        # 5. 判断文件是否存在
        if [ -e "$file" ]
        then
            # 6. 获取父目录
            pdir=$(cd -P "$(dirname "$file")"; pwd)
            # 7. 获取文件名
            fname=$(basename "$file")
            ssh "$host" "mkdir -p $pdir"
            rsync -av "$pdir/$fname" "$host:$pdir"
        else
            echo "$file does not exist!"
        fi
    done
done


## 再添加可执行权限
chmod +x xsync

## 用法就是： xsync dir/  ，就会把dir下的所有文件及文件夹同步到其它两台主机上面。
```

### 安装 jdk

略。

### zookeeper

```sh

tar zxf apache-zookeeper-3.5.7-bin.tar.gz -C /usr/setup/
cd /usr/setup/
mv apache-zookeeper-3.5.7-bin/ zookeeper-3.5.7
cd zookeeper-3.5.7/
mkdir zkData

vi zkData/myid
1

cd conf
cp -r zoo_sample.cfg zoo.cfg
vi zoo.cfg

# 修改
dataDir=/usr/setup/zookeeper-3.5.7/zkData

# 新增
server.1=192.168.0.201:2888:3888
server.2=192.168.0.202:2888:3888
server.3=192.168.0.203:2888:3888

cd /usr/setup/
xsync zookeeper-3.5.7/

之后依次去node2和node3中，修改 myid 的值；
```

启动集群的脚本：

```sh
[root@node-1 ~]# cat /usr/setup/zk.sh
#!/bin/bash

# 主机列表
hosts=("192.168.0.201" "192.168.0.202" "192.168.0.203")

case $1 in
"start")
    for host in "${hosts[@]}"
    do
        echo "------------- zookeeper $host 启动 ------------"
        ssh $host "source /etc/profile; /usr/setup/zookeeper-3.5.7/bin/zkServer.sh start"
    done
    ;;
"stop")
    for host in "${hosts[@]}"
    do
        echo "------------- zookeeper $host 停止 ------------"
        ssh $host "source /etc/profile; /usr/setup/zookeeper-3.5.7/bin/zkServer.sh stop"
    done
    ;;
"status")
    for host in "${hosts[@]}"
    do
        echo "------------- zookeeper $host 状态 ------------"
        ssh $host "source /etc/profile; /usr/setup/zookeeper-3.5.7/bin/zkServer.sh status"
    done
    ;;
*)
    echo "用法: $0 {start|stop|status}"
    ;;
esac

chmod +x zk.sh
./zk.sh start

# 验证是否启动成功
[root@node-1 ~]# jps | grep Peer
2576 QuorumPeerMain
```

### kafka

```sh
tar zxf kafka_2.12-3.0.0.tgz -C /usr/setup/
vi /usr/setup/kafka_2.12-3.0.0/config/server.properties
# 修改
broker.id=0
listeners=PLAINTEXT://192.168.0.201:9092
advertised.listeners=PLAINTEXT://192.168.0.201:9092
log.dirs=/usr/setup/kafka_2.12-3.0.0/datas
zookeeper.connect=192.168.0.201:2181,192.168.0.202:2181,192.168.0.203:2181/kafka

cd /usr/setup/
xsync kafka_2.12-3.0.0/

之后依次登陆node2、node3，修改broker.id=1，broker.id=2；
```

设置环境变量

```sh
vi /etc/profile

export KAFKA_HOME=/usr/setup/kafka_2.12-3.0.0
export PATH=$PATH:$JAVA_HOME/bin:$KAFKA_HOME/bin

source /etc/profile

之后依次登陆node2、node3，执行同样步骤；
```

设置启停脚本

```sh
[root@node-1 ~]# cat /usr/setup/kf.sh
#!/bin/bash

hosts=("192.168.0.201" "192.168.0.202" "192.168.0.203")

case $1 in
"start")
    for host in "${hosts[@]}"
    do
        echo " --------启动 $host Kafka-------"
        ssh $host "source /etc/profile; /usr/setup/kafka_2.12-3.0.0/bin/kafka-server-start.sh -daemon /usr/setup/kafka_2.12-3.0.0/config/server.properties"
    done
    ;;
"stop")
    for host in "${hosts[@]}"
    do
        echo " --------停止 $host Kafka-------"
        ssh $host "source /etc/profile; /usr/setup/kafka_2.12-3.0.0/bin/kafka-server-stop.sh"
    done
    ;;
*)
    echo "用法: $0 {start|stop}"
    ;;
esac

chmod +x kf.sh

./kf.sh start
[root@node-1 ~]# jps | grep k
2976 Kafka
```

### efak 控制台

准备工作：

```sh
# 需要先关闭kafka集群，并修改启动脚本中的jvm参数
./kf.sh stop
vi bin/kafka-server-start.sh
# 把 export KAFKA_HEAP_OPTS="-Xmx1G -Xms1G" 注释掉，之后添加
export KAFKA_HEAP_OPTS="-server -Xms2G -Xmx2G -XX:PermSize=128m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70"
export JMX_PORT="9999"

# 即 下面的内容：
if [ "x$KAFKA_HEAP_OPTS" = "x" ]; then
    export KAFKA_HEAP_OPTS="-server -Xms2G -Xmx2G -XX:PermSize=128m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70"
    export JMX_PORT="9999"
    # export KAFKA_HEAP_OPTS="-Xmx1G -Xms1G"
fi

# 同步至其它节点
xsync kafka-server-start.sh

```

控制台只需要在集群中某一节点安装即可。开始安装：

```sh
tar zxf kafka-eagle-bin-2.0.8.tar.gz -C /usr/setup/
cd /usr/setup/kafka-eagle-bin-2.0.8
tar zxf efak-web-2.0.8-bin.tar.gz -C ../
vi /usr/setup/efak-web-2.0.8/conf/system-config.properties

efak.zk.cluster.alias=cluster1
cluster1.zk.list=192.168.0.201:2181,192.168.0.202:2181,192.168.0.203:2181/kafka
#cluster2.zk.list=xdn10:2181,xdn11:2181,xdn12:2181

efak.driver=com.mysql.cj.jdbc.Driver
efak.url=jdbc:mysql://192.168.0.150:3306/ke?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull
efak.username=root
efak.password=root1003

# 修改环境变量
vi /etc/profile
export KE_HOME=/usr/setup/efak-web-2.0.8
export PATH=$PATH:$JAVA_HOME/bin:$KAFKA_HOME/bin:$KE_HOME/bin

source /etc/profile

# 先启动kafka集群，之后再启动 efak
./kf.sh start
cd /usr/setup/efak-web-2.0.8/bin/
./ke.sh start

# 验证
浏览器输入： http://192.168.0.201:8048/   admin/123456


```
