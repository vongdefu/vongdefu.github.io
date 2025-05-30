# jdk

1. 依次安装 jdk1.8、jdk17、jdk21、jdk22，安装目录为： C:\Softwares\Java ， 如下图

   ![1722468477861](./jdk/image/1722468477861.png)

2. 修改配置环境变量。

   ![1722468538813](./jdk/image/1722468538813.png)

   ![1722468740848](./jdk/image/1722468740848.png)

3. 切换版本只需要修改 JAVA_HOME 的值即可

   ![1722468825833](./jdk/image/1722468825833.png)

## centos 上安装 jdk

- 服务器在安装时，如果没有选中最小化安装，有可能会自带了 openjdk，再安装前，需要把 openjdk 卸载。

- 注意要先卸载原来的 OpenJDK， https://www.cnblogs.com/yyjf/p/10287301.html

```shell
// 查看Java
[root@localhost local]# java -version
openjdk version "1.8.0_101"
OpenJDK Runtime Environment (build 1.8.0_101-b13)
OpenJDK 64-Bit Server VM (build 25.101-b13, mixed mode)

// 查看有哪些安装包
[root@localhost northmeter]#  rpm -qa | grep java
javapackages-tools-3.4.1-11.el7.noarch
java-1.8.0-openjdk-1.8.0.101-3.b13.el7_2.x86_64
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2016f-1.el7.noarch
java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.2.el7_2.x86_64
java-1.8.0-openjdk-headless-1.8.0.101-3.b13.el7_2.x86_64
java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64

// 卸载
[root@localhost northmeter]# rpm -e --nodeps java-1.8.0-openjdk-1.8.0.101-3.b13.el7_2.x86_64
[root@localhost northmeter]# rpm -e --nodeps java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.2.el7_2.x86_64
警告：/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/local_policy.jar 已另存为 /usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/local_policy.jar.rpmsave
警告：/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/US_export_policy.jar 已另存为 /usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/US_export_policy.jar.rpmsave
[root@localhost northmeter]# rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.101-3.b13.el7_2.x86_64
[root@localhost northmeter]# rpm -e --nodeps java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64

// 删除完毕，测试
[root@localhost northmeter]#  rpm -qa | grep java
javapackages-tools-3.4.1-11.el7.noarch
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2016f-1.el7.noarch
[root@localhost northmeter]# java -version
-bash: /usr/bin/java: 没有那个文件或目录
[root@localhost northmeter]# java
-bash: /usr/bin/java: 没有那个文件或目录
[root@localhost northmeter]# javac
bash: javac: 未找到命令...
[root@localhost northmeter]#
```

```sh
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
