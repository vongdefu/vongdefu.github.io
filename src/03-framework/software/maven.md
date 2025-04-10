# maven 

1. 解压安装包到指定目录
2. 修改配置文件：

    ```xml
    // 1. 修改仓库地址
    <localRepository>D:\00-home\repository</localRepository>

    // 2. 新增核心仓库地址
    <mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <!-- https://maven.aliyun.com/repository/public/ -->
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
    </mirror>

    // 3. 新增全局profile
    <!-- 全局JDK1.8配置 -->
    <profile>
        <id>jdk1.8</id>
        <activation>
            <activeByDefault>true</activeByDefault>
            <jdk>1.8</jdk>
        </activation>
        <properties>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
            <maven.compiler.source>1.8</maven.compiler.source>
            <maven.compiler.target>1.8</maven.compiler.target>
            <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
        </properties>
    </profile>

    <!-- 阿里云配置: 提高国内的jar包下载速度 -->
    <profile>
        <id>ali</id>
        <repositories>
            <repository>
                <id>alimaven</id>
                <name>aliyun maven</name>
                <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
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
            <id>alimaven</id>
            <name>aliyun maven</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
            </pluginRepository>
        </pluginRepositories>
    </profile>

    // 4. 使全局profile生效
    <activeProfiles>
    <activeProfile>jdk1.8</activeProfile>
    <activeProfile>ali</activeProfile>
    </activeProfiles>

    ```