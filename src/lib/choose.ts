// 问题交互
const inquirer = require('inquirer')

export type Answer = {
  projectType: string
  VueVersion?: string
  LibraryType?: string
}

enum RepoKey {
  LibraryTS = 'LibraryTS',
  LibraryJS = 'LibraryJS',
  Vue2 = 'Vue2',
  Vue3TS = 'Vue3TS',
  React = 'React',
  ReactTS = 'ReactTS',
  Vue2Admin = 'Vue2Admin'
}
type RepoKeyKey = keyof typeof RepoKey

export const RepoAddressMap : Record<RepoKeyKey, string> = {
  [RepoKey.Vue2]: "YFang-FE/yfang-cli-template#vue2",
  [RepoKey.LibraryTS]: "YFang-FE/yfang-cli-template#library-ts",
  [RepoKey.LibraryJS]: "YFang-FE/yfang-cli-template#library-js",
  [RepoKey.Vue3TS]: "YFang-FE/yfang-cli-template#vue3-ts",
  [RepoKey.React]: "YFang-FE/yfang-cli-template#react",
  [RepoKey.Vue2Admin]: "YFang-FE/yfang-cli-template#vue2-admin",
  [RepoKey.ReactTS]: "YFang-FE/yfang-cli-template#react-ts",
}

const chooseType = function (): Promise<Answer> {
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
      when: (answer: Answer) => answer.projectType === 'Vue',
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
      when: (answer: Answer) => answer.projectType === 'Library',
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
  ])
}

export default chooseType
