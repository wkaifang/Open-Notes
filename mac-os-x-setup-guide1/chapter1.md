## Zsh

```
$ cat /etc/shells
$ chsh -s /bin/zsh
```

[http://ohmyz.sh/](http://ohmyz.sh/)

## SSH keys

```
$ ssh-keygen -t rsa -b 4096 -C "wkaifang@gmail.com"
$ cat ~/.ssh/id_rsa.pub
$ pbcopy < ~/.ssh/id_rsa.pub
```

[https://brew.sh/](https://brew.sh/)

## Brew

```
$ brew install autojump wget openssl tree readline xz
$ brew install git --with-gettext
$ brew install git-flow pkg-config
$ brew install maven tomcat
$ brew install redis mongodb sqlite
$ brew install node yarn phantomjs nginx
$ brew install ruby python python3
$ brew install vim macvim
```

## Git

```
$ git config --global user.email "wkaifang@gmail.com"
$ git config --global user.name "Domy"
$ git config --global branch.autosetuprebase always
```

## NPM

```
$ npm install -g async colors commander debug request glob
$ npm install -g create-react-app vue-cli
$ npm install -g express eslint cordova
$ npm install -g webpack webpack-dev-server
$ npm install -g yo generator-node generator-webapp
$ npm install -g pm2 nodemonnode-gyp node-sass
```

## Nginx

```
# HTTP server
#
server {
listen       88;
server_name  localhost;

location / {
root   /Users/Domy/GitHub/Front-end;
autoindex on;
autoindex_exact_size off;
autoindex_localtime on;
index  index.html;
}
}
```

## Atom

```
$ apm install activate-power-mode
$ apm install atom-beautify
$ apm install atom-handlebars
$ apm install atom-material-ui
$ apm install atom-ternjs
$ apm install autoclose-html
$ apm install autocomplete-modules
$ apm install autoprefixer
$ apm install color-picker
$ apm install editorconfig
$ apm install emmet
$ apm install file-icons
$ apm install highlight-selected
$ apm install javascript-snippets
$ apm install jquery-snippets
$ apm install jsformat
$ apm install language-babel
$ apm install language-nginx
$ apm install language-vue
$ apm install linter-csslint
$ apm install linter-eslint
$ apm install linter-htmlhint
$ apm install merge-conflicts
$ apm install minimap
$ apm install monokai
$ apm install pigments
$ apm install project-manager
$ apm install script
$ apm install vim-mode
```

```
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

[https://www.sublimetext.com/docs/3/osx\_command\_line.html](https://www.sublimetext.com/docs/3/osx_command_line.html)

