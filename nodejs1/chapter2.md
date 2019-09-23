# NPM

### 升级NPM

```
sudo npm install npm -g
```

```
npm -v
```

### 本地安装NPM包

```
npm install <package_name>
```

### 使用已安装的软件包


一旦包在node_modules目录，你可以在你的代码中使用它。例如，如果你正在创建一个Node.js的模块，你可以引用它。

例如，创建一个名为index.js文件，用下面的代码：

```javascript
// index.js 
var lodash = require('lodash');
 
var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

### 使用package.json

最好的方法是创建一个package.json文件来管理本地安装的NPM包。

#### 创建package.json

```javascript
npm init
```

也可以通过运行 npm init --yes 或 -y，创建一个默认的package.json：

```
npm init --yes
```
也可以通过下列几个命令修改配置，一些有用的：

```
npm set init.author.name "Domy"
npm set init.author.email "wkaifang@gmail.com"
npm set init.license "MIT"
```

#### 指定包

指定项目依赖的软件包，包的类型有2种：

* "dependencies"：在生产环境中使用的包
* "devDependencies"：在开发和测试时需要的包

##### --save 和 --save-dev

```
npm install <package_name> --save
```

```
npm install <package_name> --save-dev
```

### 更新本地软件包

几乎每隔一段时间，都需要更新本地的依赖包。

```
npm update
```

```
npm outdated
```

### 卸载本地软件包

删除node_modules目录的软件包：

```
npm uninstall <package_name>
```

从package.json依赖删除：

```
npm uninstall --save <package_name>
```

### 全局安装NPM包

```
sudo npm install -g <package_name>
```

### 更新全局NPM包

找出哪些软件包需要更新：

```
npm outdated -g --depth=0
```

更新全部全局的包：

```
npm update -g
```

### 卸载全局NPM包

删除node_modules目录的软件包：

```
npm uninstall -g <package_name>
```

# CLI Commands

### npm bin

显示NPM bin文件夹

```
npm bin [-g|--global]
```

### npm build

构建一个软件包

```
npm build [<package-folder>]
```

### npm cache

操作包缓存

```
npm cache ls [<path>]
npm cache clean [<path>]
```

### npm link

```
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]
```

### npm ls

列出已安装的软件包

```
npm ls [[<@scope>/]<pkg> ...]
```

```
npm ls
npm ls -g --depth 0
```

### npm outdated

检查过时的包

```
npm outdated [[<@scope>/]<pkg> ...]
```

### npm root

显示NPM根

```
npm root [-g]
```

### npm update

更新包

```
npm update [-g] [<pkg>...]
```

[查看更多](https://docs.npmjs.com/cli/update)

### NPM

安装、卸载 NPM：

```
$ sudo npm install npm -g
```

重新安装 NPM：

```
$ curl -L http://npmjs.org/install.sh | sudo sh
```

列出已过时的包

```
$ npm outdated
```

更新包

```
$ npm update [-g] [<name> [<name> ...]]
```

创建一个package.json文件

```
$ npm init [-f|--force|-y|--yes]
```

锁定依赖版本

```
npm shrinkwrap
```

列出已安装的包

```
$ npm list
$ npm ls -g --depth 0
```

列出包缓存、删除包缓存

```
$ npm cache ls [<path>]<br>
$ npm cache clean [<path>]
```

删除一个包

```
$ npm uninstall
```

安装一个包：

```
$ npm install
```