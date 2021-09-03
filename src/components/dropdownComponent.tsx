import React from 'react';
import AsyncSelect from 'react-select/async';
import {DataComponentBase} from "./base/dataComponentBase";
import {DictionaryBase} from "meta-framework/dist/app/models/components/base/dictionary";

/**
 * Primary UI component for user interaction
 */
export class DropdownComponent extends DataComponentBase<DictionaryBase> {
    onChange(e: any) {
        this.props.elementRef().setValue(e);
    }

    render() {
        const loadOptions = (inputValue: string, callback: (data: any[]) => void) => {
            this.props.elementRef().getList().then((data: any[]) => callback(data.map(x =>
                ({...x, label: x[this.props.meta.ui.displayProperty || 'name']}))));
        };

        return (
            <div hidden={this.state['ui.hidden']}>
                <label className="form-label">{this.state['ui.label']}</label>
                <AsyncSelect
                    cacheOptions defaultOptions
                    disabled     = { this.state['ui.disabled'] }
                    onChange     = { (e: any) => this.onChange(e) }
                    loadOptions  = { loadOptions }
                    value        = { this.state.value } />
            </div>
        );
    }
}
