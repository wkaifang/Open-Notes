# 新手指南


## 启动、停止和重新加载配置

nginx -s 命令

```
$ nginx -s stop — 快速关闭
$ nginx -s quit — 正常关闭
$ nginx -s reload — 重装配置文件
$ nginx -s reopen — 重启日志文件
```

获取所有运行nginx进程的列表，可以使用ps工具，例如：

```
$ ps -ax | grep nginx
$ kill -s QUIT 1628
```

## 配置文件的结构

安装 Nginx：

```
$ brew install nginx
```

配置 Nginx：

```
/usr/local/etc/nginx/nginx.conf
```

运行 Nginx：

```
$ sudo nginx
```

通过浏览器访问：

```
http://localhost:8080
```

> 参考：[https://coderwall.com/p/dgwwuq/installing-nginx-in-mac-os-x-maverick-with-homebrew](https://coderwall.com/p/dgwwuq/installing-nginx-in-mac-os-x-maverick-with-homebrew)