//fs-extra是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
import Creator from './Creator'
import { getPromptModules } from './utils/createTools'
import {error} from './utils/log'
import { stopSpinner, logWithSpinner } from './spinner'
const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')

type CreateOptions = {
  cwd?: string
  merge: boolean
  force: boolean
}

async function create(projectName: string, options: CreateOptions) {
  const cwd = options.cwd || process.cwd()
  // 是否处于当前文件夹
  const inCurrent = projectName === '.'

  const name = inCurrent ? path.relative('../', cwd) : projectName
  const targetDir = path.resolve(cwd, projectName || '.')

  if (fs.existsSync(targetDir) && !options.merge) {
    if (options.force) {
      await fs.remove(targetDir)
    } else {
      if (inCurrent) {
        const { ok } = await inquirer.prompt([
          {
            name: 'ok',
            type: 'confirm',
            message: `确定在当前文件夹生成项目?`
          }
        ])
        if (!ok) {
          return
        }
      } else {
        const { action } = await inquirer.prompt([
          {
            name: 'action',
            type: 'list',
            message: `文件夹 ${chalk.cyan(targetDir)} 已经存在. 请选择:`,
            choices: [
              { name: '覆盖', value: 'overwrite' },
              { name: '合并', value: 'merge' },
              { name: '取消', value: false }
            ]
          }
        ])
        if (!action) {
          return
        } else if (action === 'overwrite') {
          console.log(`\n正在删除文件夹 ${chalk.cyan(targetDir)}...`)
          await fs.remove(targetDir)
        }
      }
    }
  }
  console.log(name, options)
  const creator = new Creator(name, targetDir, getPromptModules())
  await creator.create(options)
}

export default (...args: any[]) => {
  // @ts-ignore
  return create(...args).catch((err) => {
    stopSpinner(false) // do not persist
    error(err)
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1)
    }
  })
}
