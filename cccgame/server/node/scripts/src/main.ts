#!/usr/bin/env node

require('./config');
const { program } = require('commander');
import { publish } from './commands/publish';
import { start } from './commands/start';
import { stop } from './commands/stop';
import { restart } from './commands/restart';

const TAG = "[main]";

program
	.command('publish')
    .description('发布服务端')
    .option('--no-build', '不重新构建工程')
    .option('--no-assets', '不拷贝资源')
	.action((options:any) => {
        lcc.logMgr.info(TAG, `publish ${JSON.stringify(options)}`);
		publish(options);
	});

program
	.command('start')
	.description('启动服务器')
    .option('-s, --servers <pids...>', '指定启动的服务器（默认为全部），参数为PID')
	.action((options:any) => {
        lcc.logMgr.info(TAG, `start ${JSON.stringify(options)}`);
		start(options);
	});

program
	.command('stop')
    .description('停止服务器')
    .option('-s, --servers <pids...>', '指定停止的服务器（默认为全部），参数为PID')
	.action((options:any) => {
		lcc.logMgr.info(TAG, `stop ${JSON.stringify(options)}`);
		stop(options);
	});

program
	.command('restart')
	.description('重启服务器')
    .option('-s, --servers <pids...>', '指定重启的服务器（默认为全部），参数为PID')
	.action((options:any) => {
		lcc.logMgr.info(TAG, `restart ${JSON.stringify(options)}`);
		restart(options);
	});

program
	.version('1.0.0')
	.name('node main.js')
	.parse(process.argv);
