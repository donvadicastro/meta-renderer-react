import React from 'react';
import {DataComponentBase} from "./base/dataComponentBase";
import {MetaComponentType} from "meta-framework/dist/app/enums/metaComponentType";
import {DataBase} from "meta-framework/dist/app/models/components/base/data";

/**
 * Primary UI component for user interaction
 */
export class TextBoxComponent extends DataComponentBase<DataBase> {
    resolveType(type: MetaComponentType) {
        switch (type) {
            case MetaComponentType.Bool: return 'checkbox';
            case MetaComponentType.Number: return 'number';
            default: return 'string';
        }
    }

    render() {
        return this.props.elementRef().type === MetaComponentType.Bool ? (
            <div className={"form-check form-switch"} hidden={this.state['ui.hidden']}>
                <input className    = "form-check-input"
                       disabled     = { this.state['ui.disabled'] }
                       onChange     = { e => this.onChange(e) }
                       value        = { this.state.value }
                       type         = "checkbox" />
                <label className="form-check-label">{this.state['ui.label']}</label>
            </div>
        ) : (
            <div hidden={this.state['ui.hidden']}>
                <label>{this.state['ui.label']}</label>
                <input className    = "form-control"
                       disabled     = { this.state['ui.disabled'] }
                       onChange     = { e => this.onChange(e) }
                       value        = { this.state.value }
                       type         = { this.resolveType(this.props.elementRef().type) } />
            </div>
        );
    }
}
