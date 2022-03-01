"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromptModules = void 0;
var getPromptModules = function () {
    return [
    // 'vueVersion',
    // 'babel',
    // 'typescript',
    // 'pwa',
    // 'router',
    // 'vuex',
    // 'cssPreprocessors',
    // 'linter',
    // 'unit',
    // 'e2e'
    ].map(function (file) { return require("../promptModules/".concat(file)); });
};
exports.getPromptModules = getPromptModules;
