"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.error = void 0;
var chalk = require('chalk');
/**
 * 错误日志
 * @param message
 */
var error = function (message) {
    console.error(chalk.bgRed(' ERROR '), chalk.red(message));
};
exports.error = error;
var success = function (message) {
    console.error(chalk.bgGreen(' SUCCESS '), chalk.green(message));
};
exports.success = success;
