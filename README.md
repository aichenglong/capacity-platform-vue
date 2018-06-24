# capacity-platform

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##文件夹介绍
build,config 是关于webpack的配置,里面包括一些server 和端口
node_modules 安装依赖代码库
src 源码
static 存放第三方镜头资源,static里面的.gitkeep，如果为空，也可以提交到gitHub上面，正常情况下，是不可以提交的。

.editorconfig 编辑器的配置
```
charset = utf-8  //编码
indent_style = space //缩进风格,基于空格做缩进
indent_size = 2   //缩进大小是2格
end_of_line = lf   //换行符的风格
insert_final_newline = true  //当你创建一个文件，会自动在文件末尾插入新行
trim_trailing_whitespace = true  //自动移除行尾多余空格
```
.eslintignore 忽略语法检查的目录文件  
就是忽略对build/*.js和 config/*.js  
package.json
```angular2html
{
  "name": "capacity-platform",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "ICL",
  "private": true,
  "scripts": { /*表示可以执行一些命令，例如：npm run dev会执行node build/dev-server.js，npm run build会执行node build/build.js，因此可以通过scripts配置脚本*/
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",
    "build": "node build/build.js"
  },
  "dependencies": {  /*项目的依赖*/
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
  },
  "devDependencies": {  //编译需要的依赖
    "autoprefixer": "^7.1.2",
    ............
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

```



