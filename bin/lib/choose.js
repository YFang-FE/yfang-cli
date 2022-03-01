"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 问题交互
var inquirer = require('inquirer');
var chooseType = function () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'projectType',
            message: '请选择创建项目类型',
            choices: ['Vue', 'React', 'Library-ts']
        },
        {
            type: 'list',
            name: 'VueVersion',
            message: '请选择 Vue 版本',
            when: function (answer) { return answer.projectType === 'Vue'; },
            choices: [
                {
                    name: 'Vue2',
                    value: 'Vue2',
                },
                {
                    name: 'Vue3 + TypeScript',
                    value: 'Vue3TS',
                },
            ]
        },
        {
            name: 'description',
            message: '请输入项目描述'
        },
        {
            name: 'author',
            message: '请输入项目作者'
        }
    ]);
};
exports.default = chooseType;
