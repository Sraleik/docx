import { IXmlableObject, XmlComponent } from "../../../file/xml-components";
import { TableOfContents } from "../..";
import { SectionPropertiesOptions } from "./section-properties/section-properties";
export declare class Body extends XmlComponent {
    private readonly sections;
    constructor();
    addSection(options: SectionPropertiesOptions): void;
    prepForXml(): IXmlableObject | undefined;
    push(component: XmlComponent): void;
    getTablesOfContents(): TableOfContents[];
    private createSectionParagraph;
}
