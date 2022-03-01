export default class Creator {
    name: string;
    context: string;
    constructor(name: string, context: string, promptModules: any);
    create(options: any): Promise<void>;
}
