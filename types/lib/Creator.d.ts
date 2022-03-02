import { CreateOptions } from './create';
export default class Creator {
    name: string;
    context: string;
    constructor(name: string, context: string);
    create(options: CreateOptions): Promise<void>;
}
