"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//fs-extra是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
var Creator_1 = require("./Creator");
var log_1 = require("./utils/log");
var spinner_1 = require("./spinner");
var fs = require('fs-extra');
var path = require('path');
var inquirer = require('inquirer');
var chalk = require('chalk');
function create(projectName, options) {
    return __awaiter(this, void 0, void 0, function () {
        var cwd, inCurrent, name, targetDir, ok, action, creator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cwd = options.cwd || process.cwd();
                    inCurrent = projectName === '.';
                    name = inCurrent ? path.relative('../', cwd) : projectName;
                    targetDir = path.resolve(cwd, projectName || '.');
                    if (!(fs.existsSync(targetDir) && !options.merge)) return [3 /*break*/, 8];
                    if (!options.force) return [3 /*break*/, 2];
                    return [4 /*yield*/, fs.remove(targetDir)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 2:
                    if (!inCurrent) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                name: 'ok',
                                type: 'confirm',
                                message: "\u786E\u5B9A\u5728\u5F53\u524D\u6587\u4EF6\u5939\u751F\u6210\u9879\u76EE?"
                            }
                        ])];
                case 3:
                    ok = (_a.sent()).ok;
                    if (!ok) {
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 8];
                case 4: return [4 /*yield*/, inquirer.prompt([
                        {
                            name: 'action',
                            type: 'list',
                            message: "\u6587\u4EF6\u5939 ".concat(chalk.cyan(targetDir), " \u5DF2\u7ECF\u5B58\u5728. \u8BF7\u9009\u62E9:"),
                            choices: [
                                { name: '覆盖', value: 'overwrite' },
                                { name: '合并', value: 'merge' },
                                { name: '取消', value: false }
                            ]
                        }
                    ])];
                case 5:
                    action = (_a.sent()).action;
                    if (!!action) return [3 /*break*/, 6];
                    return [2 /*return*/];
                case 6:
                    if (!(action === 'overwrite')) return [3 /*break*/, 8];
                    console.log("\n\u6B63\u5728\u5220\u9664\u6587\u4EF6\u5939 ".concat(chalk.cyan(targetDir), "..."));
                    return [4 /*yield*/, fs.remove(targetDir)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    creator = new Creator_1.default(name, targetDir);
                    return [4 /*yield*/, creator.create(options)];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // @ts-ignore
    return create.apply(void 0, args).catch(function (err) {
        (0, spinner_1.stopSpinner)(false); // do not persist
        (0, log_1.error)(err);
        if (!process.env.VUE_CLI_TEST) {
            process.exit(1);
        }
    });
});
