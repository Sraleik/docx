import { XmlComponent } from "../../file/xml-components";
import { AlignmentType } from "./formatting/alignment";
import { IBorderOptions } from "./formatting/border";
import { IIndentAttributesProperties } from "./formatting/indent";
import { PageBreak } from "./formatting/page-break";
import { ISpacingProperties } from "./formatting/spacing";
import { HeadingLevel } from "./formatting/style";
import { LeaderType, TabStopPosition, TabStopType } from "./formatting/tab-stop";
import { Bookmark, Hyperlink } from "./links";
import { PictureRun, Run, SequentialIdentifier, SymbolRun, TextRun } from "./run";
export interface IParagraphOptions {
    readonly text?: string;
    readonly border?: IBorderOptions;
    readonly spacing?: ISpacingProperties;
    readonly outlineLevel?: number;
    readonly alignment?: AlignmentType;
    readonly heading?: HeadingLevel;
    readonly bidirectional?: boolean;
    readonly thematicBreak?: boolean;
    readonly pageBreakBefore?: boolean;
    readonly contextualSpacing?: boolean;
    readonly indent?: IIndentAttributesProperties;
    readonly keepLines?: boolean;
    readonly keepNext?: boolean;
    readonly tabStops?: Array<{
        readonly position: number | TabStopPosition;
        readonly type: TabStopType;
        readonly leader?: LeaderType;
    }>;
    readonly style?: string;
    readonly bullet?: {
        readonly level: number;
    };
    readonly numbering?: {
        readonly reference: string;
        readonly level: number;
        readonly custom?: boolean;
    };
    readonly children?: Array<TextRun | PictureRun | Hyperlink | SymbolRun | Bookmark | PageBreak | SequentialIdentifier>;
}
export declare class Paragraph extends XmlComponent {
    private readonly properties;
    constructor(options: string | PictureRun | IParagraphOptions);
    referenceFootnote(id: number): Paragraph;
    addRunToFront(run: Run): Paragraph;
}
