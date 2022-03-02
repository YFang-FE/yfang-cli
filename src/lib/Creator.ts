import chooseType, { RepoAddressMap } from './choose'
import { logWithSpinner, failSpinner, stopSpinner } from './spinner'
import { CreateOptions } from './create'
import {error, success} from './utils/log'
const chalk = require('chalk')
const download = require('download-git-repo')

export default class Creator {
  name: string
  context: string
  constructor(name: string, context: string) {
    this.name = name
    this.context = process.env.YFANG_CLI_CONTEXT = context
  }
  async create(options: CreateOptions) {
    const answer = await chooseType()
    let gitAddress = ''
    if (answer.projectType === 'Vue') {
      if (answer.VueVersion && answer.VueVersion in RepoAddressMap) {
        gitAddress =
          RepoAddressMap[answer.VueVersion as keyof typeof RepoAddressMap]
      }
    } else if (answer.projectType === 'Library') {
      if (answer.LibraryType) {
        gitAddress =
          RepoAddressMap[answer.LibraryType as keyof typeof RepoAddressMap]
      }
    }
    if (gitAddress) {
      logWithSpinner('开始下载')
      download(gitAddress, this.name, (err: any) => {
        
        if (err) {
          failSpinner(err)
          error(err)
        } else {
          stopSpinner(false)
          success('模板下载成功，请自行安装依赖')
        }
      })
    } else {
      error('无法找到相应的模板')
      process.exit(1)
    }
  }
}
