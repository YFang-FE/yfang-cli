"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./lib/create");
var requiredVersion = require('../package.json').engines.node;
var semver = require('semver');
var chalk = require('chalk');
// const minimist = require('minimist'); // 参数解析
/**
 * 检查node版本
 * @param {*} wanted 期待范围
 * @param {*} id 项目id
 */
function checkNodeVersion(wanted, id) {
    // 判断版本是否在某个范围
    if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
        console.log(chalk.red('当前你的 Node 版本为：' +
            process.version +
            ', ' +
            id +
            ' 需要 Node 版本为：' +
            wanted +
            '.\n请升级你的 node 版本.'));
        process.exit(1);
    }
}
checkNodeVersion(requiredVersion, 'yfang-cli');
var program = require('commander').program;
program
    .version("".concat(require('../package').name, " ").concat(require('../package').version), '-v, --vers')
    .command('create <name> [options...]')
    .description("\u4F7F\u7528 ".concat(require('../package').name, " \u521B\u5EFA\u9879\u76EE"))
    .option('-m --merge', '合并文件夹')
    .action(function (name, startOptions, cmd) {
    if (!name) {
        console.log(chalk.red("\u8BF7\u8F93\u5165\u521B\u5EFA\u9879\u76EE\u540D\u79F0"));
    }
    else {
        (0, create_1.default)(name, cmd);
    }
});
program.parse(process.argv);
