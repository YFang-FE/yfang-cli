"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoAddressMap = void 0;
// 问题交互
var inquirer = require('inquirer');
var RepoKey;
(function (RepoKey) {
    RepoKey["LibraryTS"] = "LibraryTS";
    RepoKey["LibraryJS"] = "LibraryJS";
    RepoKey["Vue2"] = "Vue2";
    RepoKey["Vue3TS"] = "Vue3TS";
    RepoKey["React"] = "React";
    RepoKey["ReactTS"] = "ReactTS";
    RepoKey["Vue2Admin"] = "Vue2Admin";
})(RepoKey || (RepoKey = {}));
exports.RepoAddressMap = (_a = {},
    _a[RepoKey.Vue2] = "YFang-FE/yfang-cli-template#vue2",
    _a[RepoKey.LibraryTS] = "YFang-FE/yfang-cli-template#library-ts",
    _a[RepoKey.LibraryJS] = "YFang-FE/yfang-cli-template#library-js",
    _a[RepoKey.Vue3TS] = "YFang-FE/yfang-cli-template#vue3-ts",
    _a[RepoKey.React] = "YFang-FE/yfang-cli-template#react",
    _a[RepoKey.Vue2Admin] = "YFang-FE/yfang-cli-template#vue2-admin",
    _a[RepoKey.ReactTS] = "YFang-FE/yfang-cli-template#react-ts",
    _a);
var chooseType = function () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'projectType',
            message: '请选择创建项目类型',
            choices: ['Vue', RepoKey.React, 'Library']
        },
        {
            type: 'list',
            name: 'VueVersion',
            message: '请选择 Vue 版本',
            when: function (answer) { return answer.projectType === 'Vue'; },
            choices: [
                {
                    name: 'Vue2',
                    value: RepoKey.Vue2,
                },
                {
                    name: 'Vue2 for admin',
                    value: RepoKey.Vue2Admin,
                },
                {
                    name: 'Vue3 + TypeScript',
                    value: RepoKey.Vue3TS,
                },
            ]
        },
        {
            type: 'list',
            name: 'LibraryType',
            message: '请选择 Library 类型',
            when: function (answer) { return answer.projectType === 'Library'; },
            choices: [
                {
                    name: 'Library + JavaScript',
                    value: RepoKey.LibraryJS,
                },
                {
                    name: 'Library + TypeScript',
                    value: RepoKey.LibraryTS,
                },
            ]
        }
    ]);
};
exports.default = chooseType;
