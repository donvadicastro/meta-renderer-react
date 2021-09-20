import React from 'react';
import {DataComponentBase} from "../base/dataComponentBase";
import {MetaComponentType} from "meta-framework/dist/app/enums/metaComponentType";
import {DataBase} from "meta-framework/dist/app/models/components/base/data";

/**
 * Primary UI component for user interaction
 */
export class LabelComponent extends DataComponentBase<DataBase> {
    resolveType(type: MetaComponentType) {
        switch (type) {
            case 'bool': return 'checkbox';
            case 'number': return 'number';
            default: return 'string';
        }
    }

    render() {
        return (
            <div hidden={this.state['ui.hidden']}>
                <label>{this.state['ui.label']}</label>
                <label className="form-control">{ this.state.value }</label>
            </div>
        );
    }
}
