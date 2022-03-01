import chooseType from "./choose"
export default class Creator {
  name: string
  context: string
  constructor(name: string, context: string, promptModules: any) {
    this.name = name
    this.context = process.env.YFANG_CLI_CONTEXT = context

  }
  async create(options: any) {
    const answer = await chooseType()
    console.log(answer)
  }
}