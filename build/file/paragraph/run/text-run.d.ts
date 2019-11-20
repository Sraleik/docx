import { IRunOptions, Run } from "./run";
export interface ITextRunOptions extends IRunOptions {
    readonly text: string;
}
export declare class TextRun extends Run {
    constructor(options: ITextRunOptions | string);
    referenceFootnote(id: number): TextRun;
}
