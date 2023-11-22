## 开始之前
一、本项目是next.js、typeORM、postgres。这个由于配置起来比较麻烦，所以自己配了个方便以后的初始化工作
二、要修改数据库ip、用户名、密码等信息去./src/data-source.ts里改
三、这个项目存留一些之前使用的页面文件以及api文件等等，需要自行删除

## npm run命令详解
一.转换orm初始化的ts文件

```
"typeorm:build": "npx babel ./src --out-dir dist --extensions \".ts,.tsx\"",
```
解释：typeorm:build，用于将orm文件用babel转换成JS，从./src目录转换到./dist目录里。


二.创建migration文件

```
"migra:create":"typeorm migration:create",
```

解释：用与创建migration文件。
      使用方法 npm run migra:create -n <文件路径>
      例子：npm run migra:create ./src/migration/create_posts



三.运行所有migration文件的UP方法

```
"migra:run": "typeorm migration:run -d ./dist/data-source.js",
```
解释：运行后会执行所有migration文件的UP方法。如果要改运行文件目录去data-source.js里改



四.运行所有migration文件的down方法

```
"migra:revert": "typeorm migration:revert -d ./dist/data-source.js",
```

解释：运行后会执行所有migration文件的down方法。如果要改运行文件目录去data-source.js里改


五.创建entity实体类文件

```
"entity:create":"typeorm entity:create"
```

解释：用于创建实体类文件
      使用方式：npm run entity:create -n <文件路径>
      例子：npm run entity:create -n ./src/entity/Posts


别问readme格式写的这么丑，我不知道
