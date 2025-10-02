## 分库分表迭代过程

1. sql 优化；
2. 加本地缓存-ehcache；
3. 加分布式缓存-redis；
4. 加读写分离
5. 加多数据源
6. 加分库分表

- gen-data : 主要用来生成大量数据。
- sharding-datasource
  - TODO： 主要实验读写分离；没有完成主从复制的数据库实例的搭建。
- sharding-redis
  - 主要用来验证使用 redis 缓存提高接口响应时间；
  - TODO： 需要完善 redis 的配置，主要是序列化的问题，如存到 redis 中的 k-v 出现乱码；
- sharding-sphere-ds
  - 主要完成多库多表的生成过程。使用的是单元测试。
- una-saas : 应该迁移到此项目中。

### 构造百万数据

1. 几种不同的插入方式： https://mp.weixin.qq.com/s/Gqb7OXHsLqwSjfNfJiCesw?scene=1&click_id=6
   1. 存储过程
   2. 原生的 preparestatement
   3. batchinstert

### sql 优化

1. 观察下列三种情况下的查询时间以及执行计划的区别
   1. 不创建索引
   2. 创建索引
   3. 创建索引之后，但索引失效

### ehcache 本地缓存优化

1. 配置过程
2. 相关注解
3. 原理

### redis 分布式缓存优化

1. 如何选 key？过期时间？如何保证一致性问题？
2. redis 的使用
   1. 配置 key 和 value 的序列化
   2. 配置连接池

### 多数据源

```sql
create table if not exists order_info
(
    id                     bigint auto_increment,
    order_no               varchar(32)                             not null comment '订单号',
    order_amount           decimal(8, 2)                           not null comment '订单金额',
    merchant_id            bigint                                  not null comment '商户ID',
    user_id                bigint                                  not null comment '用户ID',
    order_freight          decimal(8, 2) default 0.00              not null comment '运费',
    order_status           tinyint       default 0                 not null comment '订单状态,10待付款，20待接单，30已接单，40配送中，50已完成，55部分退款，60全部退款，70取消订单',
    trans_time             timestamp     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '交易时间',
    pay_status             tinyint       default 2                 not null comment '支付状态,1待支付,2支付成功,3支付失败',
    recharge_time          timestamp     default CURRENT_TIMESTAMP not null comment '支付完成时间',
    pay_amount             decimal(8, 2) default 0.00              not null comment '实际支付金额',
    pay_discount_amount    decimal(8, 2) default 0.00              not null comment '支付优惠金额',
    address_id             bigint                                  not null comment '收货地址ID',
    delivery_type          tinyint       default 2                 not null comment '配送方式，1自提。2配送',
    delivery_status        tinyint       default 0                 null comment '配送状态，0 配送中，2已送达，3待收货，4已送达',
    delivery_expect_time   timestamp                               null comment '配送预计送达时间',
    delivery_complete_time timestamp                               null comment '配送送达时间',
    delivery_amount        decimal(8, 2) default 0.00              not null comment '配送运费',
    coupon_id              bigint                                  null comment '优惠券id',
    cancel_time            timestamp                               null comment '订单取消时间',
    confirm_time           timestamp                               null comment '订单确认时间',
    remark                 varchar(512)                            null comment '订单备注留言',
    create_user            bigint                                  null comment '创建用户',
    update_user            bigint                                  null comment '更新用户',
    create_time            timestamp     default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time            timestamp                               null on update CURRENT_TIMESTAMP comment '更新时间',
    delete_flag            tinyint       default 0                 not null comment '逻辑删除标记',
    primary key (id, order_no),
    constraint uinx_order_no
        unique (order_no)
)
    comment '订单表' charset = utf8mb4
                     row_format = DYNAMIC;

create table if not exists order_item_detail
(
    id                  bigint auto_increment
        primary key,
    order_no            varchar(32)                             not null comment '订单号',
    product_id          bigint                                  not null comment '商品ID',
    category_id         bigint                                  not null comment '商品分类ID',
    goods_num           int           default 1                 not null comment '商品购买数量',
    goods_price         decimal(8, 2) default 0.00              not null comment '商品单价',
    goods_amount        decimal(8, 2) default 0.00              not null comment '商品总价',
    product_name        varchar(64)                             null comment '商品名',
    discount_amount     decimal(8, 2) default 0.00              not null comment '商品优惠金额',
    discount_id         bigint                                  null comment '参与活动ID',
    product_picture_url varchar(128)                            null comment '商品图片',
    create_user         bigint                                  null comment '创建用户',
    update_user         bigint                                  null comment '更新用户',
    create_time         timestamp     default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time         timestamp     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    delete_flag         tinyint       default 0                 not null comment '逻辑删除标记'
)
    comment '订单明细表' charset = utf8mb4
                         row_format = DYNAMIC;

create index idx_order_no
    on order_item_detail (order_no);


```

sharding-multi-ds

思路： 就是把订单信息按照用户 id，分散到不同的数据源中，比如把 userid%datasourcesize=0 的订单数据放到 datasource01 中；把=1 的放到 datasource02 中。。。

整体原理：

1. 构造一个 线程本地内存 来保存配置文件中的三个数据源；
2. 在业务方法中添加根据 userId 来确定具体某一个数据源的方法；
3. 重写 org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource#determineCurrentLookupKey 方法，改为从 第一步 构造的 线程本地内存 中获取；

> AbstractRoutingDataSource 使用的是 模版方法 的设计模式。预留几个可以用来扩展的方法，框架操作时，可以直接操作 org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource#getConnection() ；

业务改造：修改： me.zeanzai.shardingmultids.repository.OrderInfoRepository

1. 不要添加事务注解，添加事务注解之后，需要重新修改 me.zeanzai.shardingmultids.context.config.DataSourceRouter 类；添加事务注解的话，涉及到的改造数据源获取的过程就不一样了；
2. 添加 DataSourceContextHolder.setDataSourceType(orderInfo.getUserId()); 来设置具体的数据源；

测试： http://127.0.0.1:8083/user/order/generateOrder

```json
{
  "orderInfo": {
    "id": 2,
    "createTime": "",
    "createUser": 2,
    "updateTime": "",
    "updateUser": 0,
    "deleteFlag": 0,
    "orderNo": "",
    "orderAmount": 23.0,
    "orderFreight": 2.0,
    "orderStatus": 2,
    "transTime": "",
    "payStatus": 2,
    "merchantId": 22222,
    "userId": 3789696,
    "rechargeTime": "",
    "payAmount": 0.0,
    "payDiscountAmount": 0.0,
    "addressId": 232,
    "remark": "ttttt",
    "deliveryType": 0,
    "deliveryStatus": 0,
    "deliveryExpectTime": "",
    "deliveryCompleteTime": "",
    "deliveryAmount": 0.0,
    "buyerStatus": 0,
    "couponId": 0
  },
  "orderItemDetailList": [
    {
      "createTime": "",
      "createUser": 456,
      "updateTime": "",
      "updateUser": 0,
      "deleteFlag": 0,
      "orderNo": "",
      "productId": 465,
      "categoryId": 444,
      "goodsNum": 2.0,
      "goodsPrice": 2.0,
      "goodsAmount": 2.0,
      "discountAmount": 2.0,
      "discountId": 2
    },
    {
      "createTime": "",
      "createUser": 456,
      "updateTime": "",
      "updateUser": 0,
      "deleteFlag": 0,
      "orderNo": "",
      "productId": 465,
      "categoryId": 444,
      "goodsNum": 2.0,
      "goodsPrice": 2.0,
      "goodsAmount": 2.0,
      "discountAmount": 2.0,
      "discountId": 2
    },
    {
      "createTime": "",
      "createUser": 456,
      "updateTime": "",
      "updateUser": 0,
      "deleteFlag": 0,
      "orderNo": "",
      "productId": 465,
      "categoryId": 444,
      "goodsNum": 2.0,
      "goodsPrice": 2.0,
      "goodsAmount": 2.0,
      "discountAmount": 2.0,
      "discountId": 2
    },
    {
      "createTime": "",
      "createUser": 456,
      "updateTime": "",
      "updateUser": 0,
      "deleteFlag": 0,
      "orderNo": "",
      "productId": 465,
      "categoryId": 444,
      "goodsNum": 2.0,
      "goodsPrice": 2.0,
      "goodsAmount": 2.0,
      "discountAmount": 2.0,
      "discountId": 2
    }
  ]
}
```

修改上面 json 中的 userid，然后运行，会发现不同的 userid 会选择不同的 datasource，查看数据库，订单信息及明细信息正常。

本方案出现的问题：

1. 涉及到框架中数据源的改造；并且如果涉及到事务，还需要改造框架中的事务处理的过程；并且，如果订单信息和订单明细信息不在同一个数据源里面，可能还涉及到分布式事务，框架改造的工作量更大；

### 多租户

模块名称：una-saas

### 读写分离

### 分库分表

```

```
