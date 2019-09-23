# Mac OS X Setup Guide

### Homebrew

```
$ brew doctor
```

查看你的包是否需要更新：

```
$ brew outdated
```

更新包：

```
$ brew update && brew upgrade
```

清理旧版本的包缓存时，可以运行：

```
$ brew cleanup [-n]
```

查看安装过的包列表（包括版本号）：

```
$ brew list --versions
```

查看包的安装目录：

```
$ brew --cache
```

```
brew linkapps macvim
```



