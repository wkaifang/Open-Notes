# Try Git

## 初始化一个Git仓库

```
git init
```

## 看看项目的当前状态

```
git status
```

## 添加文件到暂存区

```
git add .
git add filename
```

## 提交更改

```
git commit -m "update"
```

## 查看git日志

```
git log
```

## 关联远程仓库

```
git remote add origin https://github.com/Domy/Front-end.git
```

## 推送到远程仓库

```
git push -u origin master // 首次推送使用“-u”参数
git push origin master
git push
```

## 拉取远程仓库的变更

```
git pull origin master
```

## 查看差异

```
git diff HEAD
```

```
git diff --staged
```

## 把某个文件从暂存区撤销

```
git reset filename
```

## 撤销对文件的更改

```
git checkout -- filename
```

## 创建新分支

```
git branch branchname
```

## 切换分支

```
git checkout branchname
```

## 删除文件

```
git rm filename
```

## 切换回主分支

```
git checkout master
```

## 合并某个分支到当前分支

```
git merge branchname
```

## 删除某个分支

```
git branch -d branchname
```

## 切换回主分支

```
git checkout master
```

> [Try Git](https://try.github.io)