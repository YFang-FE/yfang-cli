
import create from './lib/create'
const requiredVersion = require('../package.json').engines.node
const semver = require('semver')
const chalk = require('chalk')
// const minimist = require('minimist'); // 参数解析

/**
 * 检查node版本
 * @param {*} wanted 期待范围
 * @param {*} id 项目id
 */
function checkNodeVersion(wanted: string, id: string) {
  // 判断版本是否在某个范围
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    console.log(
      chalk.red(
        '当前你的 Node 版本为：' +
          process.version +
          ', ' +
          id +
          ' 需要 Node 版本为：' +
          wanted +
          '.\n请升级你的 node 版本.'
      )
    )
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'yfang-cli')

const { program } = require('commander')

program
  .version(
    `${require('../package').name} ${require('../package').version}`,
    '-v, --vers'
  )
  .command('create <name> [options...]')
  .description(`使用 ${require('../package').name} 创建项目`)
  .option('-m --merge', '合并文件夹')
  .option('-f --force', '强制删除同名文件夹')
  .action((name: string, startOptions: string[], cmd: any) => {
    if (!name) {
      console.log(chalk.red(`请输入创建项目名称`))
    } else {
      create(name, cmd)
    }
  })

program.parse(process.argv)
