const chalk = require('chalk')

/**
 * 错误日志
 * @param message 
 */
export const error = (message: string) => {
  console.error(chalk.bgRed(' ERROR '), chalk.red(message))
}

export const success = (message: string) => {
  console.error(chalk.bgGreen(' SUCCESS '), chalk.green(message))
}
