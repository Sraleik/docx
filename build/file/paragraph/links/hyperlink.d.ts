import { XmlComponent } from "../../../file/xml-components";
import { TextRun } from "../run";
export declare class Hyperlink extends XmlComponent {
    readonly linkId: string;
    private readonly textRun;
    constructor(text: string, relationshipId: string, anchor?: string);
    readonly TextRun: TextRun;
}
