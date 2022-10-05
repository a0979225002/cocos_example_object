# **lcc-framework框架工程模板文档**

QQ交流群：861746804

## **什么是lcc-framework框架？**

**lcc-framework**是专门为游戏开发引擎cocos creator设计的游戏开发框架，旨在帮助开发者更方便，更快速，模块化的开发单机或者网络游戏。该框架完整包含三个部分：
1. ### 客户端框架及配套cocos creator插件。
    **客户端框架**是基于多分包的模块化游戏内容组织框架，并且提供UI、场景、多语言、配置、数据表、网络等系列便利功能。**配套cocos creator插件**主要为客户端框架服务，提供分包代码声明文件生成、游戏发布时框架裁剪等功能。框架代码提供了非常细致的裁剪功能，可以自定义框架保留的模块，并且对于小型项目也提供自动裁剪功能，即使是小游戏也可以使用该框架。
2. ### 服务器框架及配套服务器发布与控制脚本。
    **服务器框架**是基于**客户端框架**开发的与之配套的框架，主要提供配置、数据库、日志、网络、数据表、工作者管理 等系列便利功能。服务器框架API和客户端框架API大部分一致，并且功能通用，比如网络模块是互通的，学习难度不会太高。**配套服务器发布与控制脚本**提供游戏服务器的发布与控制功能。当前游戏服务器使用typescript开发，在运行前是需要编译为javascript的，发布操作就是编译程序代码并且提取资源文件到发布目录。控制脚本可以控制多个服务器的启动和停止。
3. ### 原始资源配置与构建工具。
    **原始资源配置**用于在外部配置游戏数据，主要提供数据表Excel表、多语言Excel表、通信协议配置等系列功能。该功能主要提供给策划使用Excel表格配置游戏常量数据，提供给开发者配置客户端和服务器之间通信协议(服务器与服务器之间也可以使用这些通信协议)。**资源构建工具**主要编译**原始资源配置**为客户端和服务器需要的解析格式。

该框架的三部分也可以单独或者部分使用。比如`客户端框架及配套cocos creator插件` + `原始资源配置与资源构建工具`适用于纯单机游戏，`服务器框架及配套服务器发布与控制脚本` + `原始资源配置与资源构建工具`适用于独立服务器，完整三个部分一起适用于网络游戏。
<br/>

## **lcc-framework框架文档引用**

* [客户端框架插件文档](https://gitee.com/nomat/lcc-framework-client/blob/2.4.x/README.md)
* [客户端框架文档](https://gitee.com/nomat/lcc-framework-client/blob/2.4.x/framework/docs/1.%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A1%86%E6%9E%B6%E6%96%87%E6%A1%A3.md)
* [服务器框架文档](https://gitee.com/nomat/lcc-framework-server/blob/master/docs/1.%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%A1%86%E6%9E%B6%E6%96%87%E6%A1%A3.md)
* [资源构建脚本文档](https://gitee.com/nomat/lcc-framework-scripts/blob/master/README.md)

## **使用软件安装说明**

* [cocos creator 2.4.x](https://www.cocos.com/creator) 用于客户端。

* [Python3.x](https://www.python.org/) 用于构建脚本工具。并且安装依赖：<br/>
    * `pip install fonttools` 用于字体裁剪。
    * `pip install ply` 用于协议文件解析。
    * `pip install xlrd==1.2.0` 用于配置表格读取。

* [Nodejs](http://nodejs.cn/) 用于服务器，安装时最好查以下安装方法。并且安装依赖：<br/>
    * `npm i typescript -g` 用于使用Typescript进行开发。
    * `npm i gulp -g` 用于使用构建操作。

## **工程模板目录文件结构说明**
```
    .
    ├── client (cocos creator 客户端工程目录，目前是测试用例工程)
    │   ├── @types (声明文件目录)
    │   ├── assets
    │   │   ├── lcc-framework (lcc-framework客户端框架)
    │   │   └── resources (resources分包目录)
    │   │       └── lcc-assets (构建的资源生成目录)
    │   ├── settings
    │   └── packages
    │       └── lcc-framework-client (lcc-framework客户端框架插件)
    ├── origins (资源配置根目录)
    │   └── resources (resource分包配置目录)
    │       └── assets (resource分包文字资源目录)
    ├── lcc-framework-scripts (资源构建脚本工具)
    └── server (服务器根目录)
        ├── assets (服务器资源目录)
        │   └── lcc-assets (构建的资源生成目录)
        ├── config (服务器配置文件目录)
        │   └── servers.json (服务器实例配置文件)
        └── node (Node服务器目录)
            ├── lcc-framework-server (lcc-framework服务器框架)
            ├── test (框架代码自动测试工程)
            ├── scripts (服务器发布于控制脚本工具)
            └── servers (业务服务器目录)
                ├── _test (测试用例服务器)
                └── _template (服务器模板)
```
上面只列出了比较重要的目录文件。并且在使用过程中如果不需要，可以选择移除`client`客户端目录或者`server`服务器目录。

## **工程模板初始化**

1. ### 安装工程模板子模块。
    当前工程模板依赖三个子模块：`lcc-framework-client`、`lcc-framework-server`和`lcc-framework-scripts`。<br/>
    如果你是使用的Git拉取的本工程模板，可以直接在根目录执行Git的命令`git submodule update --init --recursive`，以更新子模块，注意`client/packages/lcc-framework-client`需要切换到分支`2.4.x`。(如果是Git可视化工具请自行百度用法)<br/>
    如果你是复制的工程模板，那么就需要进行以下操作：<br/>
    * 下载Git源码`https://gitee.com/nomat/lcc-framework-client`分支`2.4.x`，解压放入`client/packages`目录。
    * 下载Git工程`https://gitee.com/nomat/lcc-framework-server`，解压放入`server/node`目录。
    * 下载Git工程`https://gitee.com/nomat/lcc-framework-scripts`，解压放入根目录。
    
2. ### 初始化服务器
    在`server`目录内执行`init`，等待执行结束。

## **服务器发布与控制脚本说明**

1. ### 创建业务服务器
    在 `server/node/servers` 目录内存放游戏服务器，可以直接复制服务器模板`_template`直接修改。然后在`server/config/servers.json`文件中配置服务器。在服务器目录内，以 `_` 开始的服务器目录只做本地调试使用，发布时会忽略这个服务器。<br/>
    例如，创建名为`test`服务器，直接复制一份`_template`，修改为`test`。然后配置`server/config/servers.json`文件如下:<br/>
    ```
        {
            // GID 整个工程ID，如果一台物理机上运行多个当前工程，那么这个值要不相同。
            "GID":"Game",   

            // 服务器列表
            "servers":[
                {
                    // 服务器ID，只要在这个工程中唯一就行
                    "PID" : "test",

                    // 启用这个配置
                    "enable" : true,

                    // 服务器为 test，  server/node/servers/test目录中服务器。
                    "server" : "test",

                    // 服务器配置文件
                    "config" : "${localpath}/server-test.json"
                }
            ]
        }
    ```
    `config`服务器配置文件路径，会在服务器创建的时候通过`process.argv[2]`传入。可以在服务器代码里面获取。<br/>
    `注意`：服务器启动的时候是执行服务器目录下的`bin/main.js`文件。如果不是使用的服务器模板，则要自己创建。

2. ### 服务器工程的发布与控制。
    在`server`目录内执行`publishNode`，则会在`server/publish`目录下生成以日期时间命名的发布工程目录。<br/>
    进入发布工程目录内，执行`install`以安装依赖。<br/>
    最后，使用`gamectl start`启动所有服务器；`gamectl stop`停止所有服务器；`gamectl restart`重启所有服务器。

3. ### 启动测试用例服务器。
    在测试模板客户端用例的时候，需要首先启动测试服务器。<br/>
    进入`server/node/servers/_test`目录，使用`vscode`打开工作区，使用`ctrl` + `shift` + `B`打开任务列表，选择`build`回车执行，最后使用`F5`调试。如果`vscode`报错请自行百度原因。
