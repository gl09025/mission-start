
## 题目1： 如何全局安装一个 node 应用?

`npm install jquery --global`

## 题目2： package.json 有什么作用？

定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

一个package.json的例子

```json
{
	"name": "Hello World",
	"version": "0.0.1",
	"author": "张三",
	"description": "第一个node.js程序",
	"keywords":["node.js","javascript"],
	"repository": {
		"type": "git",
		"url": "https://path/to/url"
	},
	"license":"MIT",
	"engines": {"node": "0.10.x"},
	"bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
	"contributors":[{"name":"李四","email":"lisi@example.com"}],
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"express": "latest",
		"mongoose": "~3.8.3",
		"handlebars-runtime": "~1.0.12",
		"express3-handlebars": "~0.5.0",
		"MD5": "~1.2.0"
	},
	"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
	}
}
```

### script 字段

scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令。

### dependencies字段，devDependencies字段

dependencies字段指定了项目运行所依赖的模块，devDependencies指定项目开发所需要的模块。

它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

### bin字段

bin项用来指定各个内部命令对应的可执行文件的位置


## 题目3： npm install --save app 与 npm install --save-dev app有什么区别?

`npm install --save` 将包名和版本保存在 dependencies字段中，主要是项目的依赖模块。

`npm install --save-dev` 将包名和版本保存在 devDependencies字段中,供开发者使用。

## 题目4： node_modules的查找路径是怎样的?

如果不是自带的模块，而且没有带路径（./ 或 ../）
先从当前目录下的node_modules下查找，如果找不到，就一层一层的往上找。一直找到根目录，找不到则报错。

## 题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做题目)

npm2在安装包的时候，会将依赖一层一层的往下放，导致目录很深。
npm3是扁平化的安装，安装的模块都在同级目录下。

npm有个缺点就是，npm必须首先遍历所有的项目依赖关系，然后再决定如何生成扁平的node_modules目录结构。npm必须为所有使用到的模块构建一个完整的依赖关系树，这是一个耗时的操作，是npm安装速度慢的一个很重要的原因。
对于yarn，每个yarn安装都会生成一个类似于npm-shrinkwrap.json的yarn.lock文件，而且它是默认创建的。除了常规信息之外，yarn.lock文件还包含要安装的内容的校验和，以确保使用的库的版本相同。

## 题目6： webpack是什么？和其他同类型工具比有什么优势？

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

- webpack 是以 commonJS 的形式来书写脚本，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
- webpack可以将代码拆分成多个区块，每个区块包含一个或多个模块，它们可以按需异步加载，极大地减少了页面初次加载时间。
- webpack 本身只能处理原生的 JS 模块，但是 loader 转换器可以将各种类型的资源转换成 JS 模块。这样，任何资源都可以成为 webpack 可以处理的模块。
- webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。
- webpack 还有一个功能丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 webpack 插件，来满足各式各样的需求。
- webpack使用异步 I/O 和多级缓存提高运行效率，使得它能够快速增量编译。


## 题目7：npm script是什么？如何使用？

scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令。

下面的设置指定了`npm run preinstall`、`npm run postinstall`、`npm run start`、`npm run test`时，所要执行的命令。

```json
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

## 题目8： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

[仓库地址](https://github.com/gl09025/mission-start/tree/master/expert-5_npm%20node/webpack-demo)

主要代码

webpack的打包配置文件,入口为src/script/main.js

```javascript
const path = require('path');

module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'myLibrary',
        filename: '_index.js'
    },
    module: {
        rules: [
            {
                test: '/.js[x]?$/',
                exclude: [
                    'node_modules'
                ],
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}
```

main.js。使用commonJS的语法来加载需要的模块。在相应的模块中需要使用module.exports 语法来将函数暴露出来。

```javascript
var $ = require('./jquery.min');
var Swiper = require('../app/carousal'),
    Waterfall = require('../app/waterfull'),
    Gotop = require('../app/gotop');
    new Swiper({
        parentNode: '#header',
        auto: true,
        imageData: [{
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=6&s=0',
          },
          {
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=2&s=0',
          },
          {
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=3&s=0',
          },
        ],
        height: '840'
      },
    )
    //加载瀑布流组件
    Waterfall($('#pic-ct'));
    //加载回到顶部组件
    new Gotop;
```


## 题目9：gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

Gulp是一个自动化构建工具。

- 易于使用。通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。
- 构建快速。利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。
- 插件高质。Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。
- 易于学习。通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

[仓库地址](https://github.com/gl09025/mission-start/blob/master/expert-5_npm%20node/gulp-demo/gulpfile.js)

```javascript
var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');



//图片压缩
gulp.task('img', function (argument) {
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/imgs'));
});

gulp.task('html', ['clear'], function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify())) //压缩js
        .pipe(gulpif('*.css', minifyCss())) //压缩css
        .pipe(gulp.dest('build'));
});


gulp.task('clear', function () {
    gulp.src('dist/*', { read: false })
        .pipe(clean());
});

gulp.task('default', ['html', 'img']);
```

## 题目10： 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。可以通过如下方式安装使用(可使用api.jirengu.com里提供的查询天气接口) (选做题目)

npm install hunger-weather -g
weather

[仓库地址](https://github.com/gl09025/mission-start/tree/master/expert-5_npm%20node/nodeWeather)
