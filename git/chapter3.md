#### 安装 Git：

[Git](http://git-scm.com/)

```
$ brew install git --with-gettext
```

查看 Git 版本号：

```
$ git --version
```

查看 Git 安装路径：

```
$ which git
```

配置 Git：

```
$ git config --global user.name "Domy"
$ git config --global user.email "wkaifang@gmail.com"
$ git config --global branch.autosetuprebase always
```

查看 Git 配置：

```
$ git config --list
```

在本地初始化一个Git仓库

```
git init
```

从远程克隆一个Git仓库

```
git clone
```

```
git stash
git stash pop
```


```
$ git remote show origin 查看origin的详细信息
$ git remote prune origin 修建origin
```

添加文件到Git仓库，分两步：

第一步，使用命令git add <file>，注意，可反复多次使用，添加多个文件，实际就是把文件修改添加到暂存区（stage）；
第二步，使用命令git commit，把暂存区的所有文件提交到当前分支，完成。

要随时掌握工作区的状态

git status
如果git status告诉你有文件被修改过，用git diff可以查看修改内容。

合并某个分支的更新到当前分支

git rebase 分支名

HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。

用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区

命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次git commit或git add时的状态。
git checkout -- file命令中的--很重要，没有--，就变成了“创建一个新分支”的命令。

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。

要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

关联后，使用命令git push -u origin master第一次推送master分支的所有内容；此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

查看分支：git branch

查看远程分支：git branch -r

创建分支：git branch <name>

删除分支：git branch -d <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除远程分支：git branch -r -d <name>
                         git push origin :branch-name

create a new repository on the command line

echo "# AwesomeProject" >> README.md

- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin git@github.com:Domy/AwesomeProject.git
- git push -u origin master

…or push an existing repository from the command line

- git remote add origin git@github.com:Domy/AwesomeProject.git
- git push -u origin master

git checkout --track
概念：
文件流转的三个状态：
工作区（ working directory）
暂存区（stage）
本地仓库（ repository）

对于任何一个文件，在 Git 内都只有三种状态：

已修改（modified）已修改表示修改了某个文件，但还没有提交保存
已暂存（staged）已暂存表示把已修改的文件放在下次提交时要保存的清单中
已提交（committed）已提交表示该文件已经被安全地保存在本地数据库中了

untracked 未跟踪状态
unstage

基本的 Git 工作流程如下：

- 在工作目录中修改某些文件
- 对修改后的文件进行快照，然后保存到暂存区域
- 提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中。

配置信息

- $ git config --global user.name “Domy"
- $ git config --global user.email waking@gmail.com

如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。

要检查已有的配置信息，可以使用 git config --list 命令
系统中对所有用户都普遍适用的配置，使用 git config 时用 --system
用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global

要对现有的某个项目开始用 Git 管理，只需到此项目所在的目录，执行：

$ git init

初始化后，在当前目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。不过目前，仅仅是按照既有的结构框架初始化好了里边所有的文件和目录，但我们还没有开始跟踪管理项目中的任何一个文件。如果当前目录下有几个文件想要纳入版本控制，需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交：

$ git add *.c
    $ git add README
    $ git commit -m 'initial project version'

克隆仓库的命令格式为 git clone [url]。比如，要克隆 Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：

$ git clone git://github.com/schacon/grit.git

如果希望在克隆的时候，自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：

$ git clone git://github.com/schacon/grit.git mygrit

现在新建的目录成了 mygrit，其他的都和上边的一样。

工作目录下面的所有文件都不外乎这两种状态：已跟踪或未跟踪。

已跟踪的文件是指本来就被纳入版本控制管理的文件，在上次快照中有它们的记录，工作一段时间后，它们的状态可能是未更新，已修改或者已放入暂存区。

而所有其他文件都属于未跟踪文件。它们既没有上次更新时的快照，也不在当前的暂存区域。

初次克隆某个仓库时，工作目录中的所有文件都属于已跟踪文件，且状态为未修改。

在编辑过某些文件之后，Git 将这些文件标为已修改。我们逐步把这些修改过的文件放到暂存区域，直到最后一次性提交所有这些暂存起来的文件，如此重复。

要确定哪些文件当前处于什么状态，可以用 git status 命令
Untracked files 未跟踪的文件

使用命令 git add 开始跟踪一个新文件。所以，要跟踪 README 文件，运行：

$ git add README

此时再运行 git status 命令，会看到 README 文件已被跟踪，并处于暂存状态：

$ git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # new file: README
    #

只要在 “Changes to be committed” 这行下面的，就说明是已暂存状态。如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。你可能会想起之前我们使用 git init 后就运行了 git add 命令，开始跟踪当前目录下的文件。在 git add 后面可以指明要跟踪的文件或目录路径。如果是目录的话，就说明要递归跟踪该目录下的所有文件。（译注：其实 git add 的潜台词就是把目标文件快照放入暂存区域，也就是 add file into staged area，同时未曾跟踪过的文件标记为需要跟踪。这样就好理解后续 add 操作的实际意义了。）

暂存已修改文件

现在我们修改下之前已跟踪过的文件 benchmarks.rb，然后再次运行 status 命令，会看到这样的状态报告：

$ git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # new file: README
    #
    # Changes not staged for commit:
    # (use "git add <file>..." to update what will be committed)
    #
    # modified: benchmarks.rb
    #

文件 benchmarks.rb 出现在 “Changes not staged for commit” 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。要暂存这次更新，需要运行 git add 命令（这是个多功能命令，根据目标文件的状态不同，此命令的效果也不同：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等）。现在让我们运行 git add 将 benchmarks.rb 放到暂存区，然后再看看git status 的输出：

$ git add benchmarks.rb
    $ git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # new file: README
    # modified: benchmarks.rb
    #

现在两个文件都已暂存，下次提交时就会一并记录到仓库。假设此时，你想要在 benchmarks.rb 里再加条注释，重新编辑存盘后，准备好提交。不过且慢，再运行 git status 看看：

$ vim benchmarks.rb
    $ git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # new file: README
    # modified: benchmarks.rb
    #
    # Changes not staged for commit:
    # (use "git add <file>..." to update what will be committed)
    #
    # modified: benchmarks.rb
    #

怎么回事？ benchmarks.rb 文件出现了两次！一次算未暂存，一次算已暂存，这怎么可能呢？好吧，实际上 Git 只不过暂存了你运行 git add命令时的版本，如果现在提交，那么提交的是添加注释前的版本，而非当前工作目录中的版本。所以，运行了 git add 之后又作了修订的文件，需要重新运行 git add 把最新版本重新暂存起来：

$ git add benchmarks.rb
    $ git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # new file: README
    # modified: benchmarks.rb
    #

查看已暂存和未暂存的更新

实际上 git status 的显示比较简单，仅仅是列出了修改过的文件，如果要查看具体修改了什么地方，可以用 git diff 命令。稍后我们会详细介绍 git diff，不过现在，它已经能回答我们的两个问题了：当前做的哪些更新还没有暂存？有哪些更新已经暂存起来准备好了下次提交？git diff 会使用文件补丁的格式显示具体添加和删除的行。

假如再次修改 README 文件后暂存，然后编辑 benchmarks.rb 文件后先别暂存，运行 status 命令将会看到：

要查看尚未暂存的文件更新了哪些部分，不加参数直接输入 git diff：

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异，也就是修改之后还没有暂存起来的变化内容。


现在运行 git diff 看暂存前后的变化：

$ git diff

然后用 git diff --staged 查看已经暂存起来的变化：

$ git diff --staged

1. git add -p
以前我git add的时候，经常会把一些本地的用于调试的代码add进去（比如console.log之类的），git add -p可以一段一段地add，每一段都会问你要不要添加（y/n?）。

2. git rebase -i
有的时候出现临时需求，需要切换分支。本地完成一半的工作会commit成一个temp save。
git rebase -i 可以修改、增加、删除、合并任意的commit。

3. git diff master...
注意，是3个点，不是2个点。
新开发一个功能，会创建一个新的branch。在开发新的branch的期间，master也会增加很多代码。如果用2个点进行diff，会把master的新增代码显示出来。用3个点进行diff，只会显示当前分支与master的最近公共祖先与当前分支的差异。

4. git push -u
如果当前分支没有设置过track，这个命令会在push的同时，设置track。
有了track，有3个好处。

- git status的时候可以显示领先/落后的多少个commit。
- git push的时候可以省略后两个参数。
- git pull的时候可以省略后两个参数。


$ git rebase -i Ai_4.1.0_fe
$ git checkout Ai_4.1.0_fe
$ git pull --rebase
$ git merge improve/AI-723_wangkaifang


