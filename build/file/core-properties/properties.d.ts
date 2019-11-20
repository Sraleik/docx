import { XmlComponent } from "../../file/xml-components";
import { INumberingOptions } from "../numbering";
import { IStylesOptions } from "../styles";
export interface IPropertiesOptions {
    readonly title?: string;
    readonly subject?: string;
    readonly creator?: string;
    readonly keywords?: string;
    readonly description?: string;
    readonly lastModifiedBy?: string;
    readonly revision?: string;
    readonly externalStyles?: string;
    readonly styles?: IStylesOptions;
    readonly numbering?: INumberingOptions;
}
export declare class CoreProperties extends XmlComponent {
    constructor(options: IPropertiesOptions);
}
