
### curl简介

我们知道HTTP协议属于应用层协议，所以要想查看报文格式，就需要借助应用层的软件，Windows平台上常见的能够发送http协议的应用层软件有两类：

- 可视化操作软件，如浏览器；
- 命令行操作软件，如curl、Telnet；

我们这里使用curl来查看一下http报文的相关内容，之所以不用chrome等浏览器，是因为这些浏览器做了一些技术手段的优化，不利于查看报文。

Windows10平台上自带了curl工具包，我们打开cmd输入 curl -V 可以查看curl的版本：

```
C:\Users\zeanzai>curl -V
curl 7.55.1 (Windows) libcurl/7.55.1 WinSSL
Release-Date: 2017-11-14, security patched: 2019-11-05
Protocols: dict file ftp ftps http https imap imaps pop3 pop3s smtp smtps telnet tftp
Features: AsynchDNS IPv6 Largefile SSPI Kerberos SPNEGO NTLM SSL
```

Windows10上安装了git，所以我们在git-bash里面输入 curl -V 可以查看git中自带的curl的版本：

```
zeanzai@DESKTOP-BTBMQTM MINGW64 /d/00.zeanzai/Downloads
$ curl -V
curl 8.4.0 (x86_64-w64-mingw32) libcurl/8.4.0 Schannel zlib/1.3 brotli/1.1.0 zstd/1.5.5 libidn2/2.3.4 libpsl/0.21.2 (+libidn2/2.3.3) libssh2/1.11.0
Release-Date: 2023-10-11
Protocols: dict file ftp ftps gopher gophers http https imap imaps ldap ldaps mqtt pop3 pop3s rtsp scp sftp smb smbs smtp smtps telnet tftp
Features: alt-svc AsynchDNS brotli HSTS HTTPS-proxy IDN IPv6 Kerberos Largefile libz NTLM PSL SPNEGO SSL SSPI threadsafe UnixSockets zstd
```

我们在这里【[curl tutorial](https://curl.se/docs/tutorial.html)】找到curl的一些命令能帮我们查看HTTP的报文，也可以在命令行中输入 `curl --help` 查看命令提示。

这里，我们使用git自带的curl进行实验。

### 实验 

::: tabs

@tab 实验一

```
zeanzai@DESKTOP-BTBMQTM MINGW64 /d/00.zeanzai/Downloads
$ curl -v www.baidu.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 198.18.0.48:80...
* Connected to www.baidu.com (198.18.0.48) port 80
> GET / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/8.4.0
> Accept: */*
>
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
< Connection: keep-alive
< Content-Length: 2381
< Content-Type: text/html
< Date: Wed, 10 Jul 2024 17:11:19 GMT
< Etag: "588604dc-94d"
< Last-Modified: Mon, 23 Jan 2017 13:27:56 GMT
< Pragma: no-cache
< Server: bfe/1.0.8.18
< Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/
<
{ [1040 bytes data]
100  2381  100  2381    0     0  91626      0 --:--:-- --:--:-- --:--:-- 95240<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>©2017 Baidu <a href=http://www.baidu.com/duty/>使用百度前必读</a>  <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a> 京ICP证030173号  <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>

* Connection #0 to host www.baidu.com left intact

```

1. -v, --verbose              Make the operation more talkative（ /ˈtɑː.kə.t̬ɪv/ ，爱说话的，健谈的;多嘴的，详细的）
2. 输出结果

![1720632185149](./experiment.snippet/image/1720632185149.png)

@tab 实验二

实验一报文格式并不明显，请看实验二。

我们输入 `curl --trace-ascii trace1.txt www.baidu.com` ：

```
zeanzai@DESKTOP-BTBMQTM MINGW64 /d/00.zeanzai/Downloads
$ curl --trace-ascii trace1.txt www.baidu.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2381  100  2381    0     0  91937      0 --:--:-- --:--:-- --:--:-- 99208<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>©2017 Baidu <a href=http://www.baidu.com/duty/>使用百度前必读</a>  <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a> 京ICP证030173号  <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>

```

控制台输出响应时间信息和响应结果外，还在 /d/00.zeanzai/Downloads 下生成一个文件 trace1.txt ，我们打开这个文件：

::: details trace1.txt
@[code](./network/include/trace1.txt)
:::

在 trace1.txt 中我们可以清楚的看到请求和响应的报文：

![1720632771541](./experiment.snippet/image/1720632771541.png)

@tab 实验三

我们输入 `curl --trace-ascii trace2.txt -X POST https://reqbin.com/echo/post/form -d "username=exampleuser" -d "password=examplepass"` ，同样会生成一个 trace2.txt 文件，

::: details trace2.txt
@[code](./network/include/trace2.txt)
:::

同样的，我们也可以看到 请求报文 和 响应报文：

![1720638581146](./experiment.snippet/image/1720638581146.png)

@tab 实验四

我们输入 `curl --trace-ascii trace3.txt -X POST https://postman-echo.com/post -d "name=JohnDoe" -d "email=johndoe@example.com" -i` ，同样会生成一个 trace3.txt 文件，

::: details trace3.txt
@[code](./network/include/trace3.txt)
:::

同样的，我们也可以看到 请求报文 和 响应报文：

![1720638581146](./experiment.snippet/image/1720638581146.png)


:::


### 参考连接

- [curl网站开发指南](https://www.ruanyifeng.com/blog/2011/09/curl.html)
- [curl tutorial](https://curl.se/docs/tutorial.html)
- [everything curl](https://everything.curl.dev/)
