const chalk = require('chalk')

/**
 * 错误日志
 * @param message 
 */
export const error = (message: string) => {
  console.error(chalk.bgRed(' ERROR '), chalk.red(message))
}