import {TextBoxComponent} from "../textBoxComponent";
import {FormComponent} from "../formComponent";
import {ClassType} from "react";
import {MetaComponentRenderer} from "meta-framework/dist/app/enums/metaComponentRenderer";
import {LabelComponent} from "../labelComponent";
import {DropdownComponent} from "../dropdownComponent";
import {ButtonComponent} from "../buttonComponent";
import {TableComponent} from "../tableComponent";

export default function factoryResolver (type: MetaComponentRenderer): ClassType<any, any, any> {
    switch (type) {
        case MetaComponentRenderer.Button:          return ButtonComponent;
        case MetaComponentRenderer.TextBox:         return TextBoxComponent;
        case MetaComponentRenderer.Dropdown:        return DropdownComponent;
        case MetaComponentRenderer.Form:            return FormComponent;
        case MetaComponentRenderer.Table:           return TableComponent;

        default:                                    return LabelComponent;
    }
};
