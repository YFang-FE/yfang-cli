"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var chalk = require('chalk');
/**
 * 错误日志
 * @param message
 */
var error = function (message) {
    console.error(chalk.bgRed(' ERROR '), chalk.red(message));
};
exports.error = error;
