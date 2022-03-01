// 转圈加载
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora()
let lastMsg: any = null
let isPaused = false

export const logWithSpinner = (symbol?: string, msg?: string) => {
  if (!msg) {
    msg = symbol
    symbol = chalk.green('✔')
  }
  if (lastMsg) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    })
  }
  spinner.text = ' ' + msg
  lastMsg = {
    symbol: symbol + ' ',
    text: msg
  }
  spinner.start()
}

export const stopSpinner = (persist: boolean) => {
  if (!spinner.isSpinning) {
    return
  }

  if (lastMsg && persist !== false) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    })
  } else {
    spinner.stop()
  }
  lastMsg = null
}

export const pauseSpinner = () => {
  if (spinner.isSpinning) {
    spinner.stop()
    isPaused = true
  }
}

export const resumeSpinner = () => {
  if (isPaused) {
    spinner.start()
    isPaused = false
  }
}

export const failSpinner = (text: string) => {
  spinner.fail(text)
}