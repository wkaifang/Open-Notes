# Linux服务器配置

## 登录系统

```
$ ssh root@47.94.15.6
```

## 更新系统软件

```
$ yum update
```

## 设置主机名称

```
$ hostnamectl set-hostname <NAME>
```

## 设置时区

```
$ timedatectl set-timezone Asia/Shanghai
```

## 检查时间

```
$ date
```

## 安装 git

```
$ yum install git
```

## 安装 zsh

```
$ yum install zsh
$ chsh -s /bin/zsh
```

## oh-my-zsh

```
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 修改 Hosts

```
$ vim /etc/hosts
```

## 修改 DNS

```
$ vim /etc/resolv.conf
```

## SSH Key

```
$ ssh-keygen -t rsa -b 4096 -C "wkaifang@gmail.com"（客户端）
$ scp ~/.ssh/id_rsa.pub root@45.33.48.68:（客户端）
$ mkdir .ssh
$ mv id_rsa.pub .ssh/authorized_keys
$ chown -R root:root .ssh
$ chmod 700 .ssh
$ chmod 600 .ssh/authorized_keys
```

## 禁止密码登录

```
$ sudo vim /etc/ssh/sshd_config
PasswordAuthentication no
$ sudo systemctl restart sshd
```

## shadowsocks

```
$ yum install python-setuptools && easy_install pip
$ pip install shadowsocks

https://github.com/shadowsocks/shadowsocks/wiki/Configuration-via-Config-File
https://shadowsocks.org/en/index.html
```



