# 附录 03 多租户 SaaS 实战

1. 说明文档可以参考《[Spring Boot 构建多租户 SaaS 平台核心技术指南](https://mp.weixin.qq.com/s/6Gihii6HtBsgcbiQ-2XvUg)》。
2. 修改 application.yml 数据库 URL、账户、密码

```yaml
url: jdbc:mysql://192.168.100.100:3306/test_una_saas?useSSL=false
username: admin
password: admin@2020!@#
```

3. 创建 application.yml 数据库 URL 对应的 schema，并在改数据库中创建`master_tenant`表。

```
schema： test_una_saas
table： master_tenant
SQL：
    CREATE TABLE `master_tenant` (
      `ID` varchar(255) NOT NULL,
      `TENANT` varchar(30) NOT NULL,
      `URL` varchar(255) NOT NULL,
      `USERNAME` varchar(30) NOT NULL,
      `PASSWORD` varchar(30) NOT NULL,
      `version` int(11) NOT NULL,
      PRIMARY KEY (`ID`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```

4. 在`master_tenant`表中插入一条数据

```sql
INSERT INTO `master_tenant` VALUES ('tenant_1', 'firstTenant', 'jdbc:mysql://192.168.100.100:3306/db2020?useSSL=false', 'admin', 'admin@2020!@#', '0');

```

5. 创建 schema，并创建 user 表

```
schema： db2020
table： user
SQL：
    CREATE TABLE `user` (
      `ID` varchar(50) NOT NULL,
      `USERNAME` varchar(255) DEFAULT NULL,
      `PASSWORD` varchar(22) DEFAULT NULL,
      `TENANT` varchar(255) DEFAULT NULL,
      PRIMARY KEY (`ID`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```

6. 在 db2020.user 表中插入一条数据

```sql
INSERT INTO `user` VALUES ('1', 'test', 'abc123456', 'firstTenant');

```

7. 使用`firstTenant`作为租户 id，使用`test`作为用户名，使用`abc123456`作为登陆密码。

![](assets/1699933288803.png)

![](assets/1699933288898.png)

8. 使用另外一个链接和另外一个租户的用户再次登录，同样成功。
