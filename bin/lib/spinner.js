"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSpinner = exports.resumeSpinner = exports.pauseSpinner = exports.stopSpinner = exports.logWithSpinner = void 0;
// 转圈加载
var ora = require('ora');
var chalk = require('chalk');
var spinner = ora();
var lastMsg = null;
var isPaused = false;
var logWithSpinner = function (symbol, msg) {
    if (!msg) {
        msg = symbol;
        symbol = chalk.green('✔');
    }
    if (lastMsg) {
        spinner.stopAndPersist({
            symbol: lastMsg.symbol,
            text: lastMsg.text
        });
    }
    spinner.text = ' ' + msg;
    lastMsg = {
        symbol: symbol + ' ',
        text: msg
    };
    spinner.start();
};
exports.logWithSpinner = logWithSpinner;
var stopSpinner = function (persist) {
    if (!spinner.isSpinning) {
        return;
    }
    if (lastMsg && persist !== false) {
        spinner.stopAndPersist({
            symbol: lastMsg.symbol,
            text: lastMsg.text
        });
    }
    else {
        spinner.stop();
    }
    lastMsg = null;
};
exports.stopSpinner = stopSpinner;
var pauseSpinner = function () {
    if (spinner.isSpinning) {
        spinner.stop();
        isPaused = true;
    }
};
exports.pauseSpinner = pauseSpinner;
var resumeSpinner = function () {
    if (isPaused) {
        spinner.start();
        isPaused = false;
    }
};
exports.resumeSpinner = resumeSpinner;
var failSpinner = function (text) {
    spinner.fail(text);
};
exports.failSpinner = failSpinner;
