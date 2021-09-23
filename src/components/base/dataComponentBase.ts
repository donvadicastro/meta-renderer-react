import React, {Component} from "react";
import {DataBase} from "meta-framework/dist/app/models/components/base/data";
import {Form} from "../../../../meta/dist/app/models/components/form";

export interface DataComponentPropsBase<T extends DataBase> {
    meta: any;
    elementRef: () => T;
}

export class DataComponentBase<T extends DataBase> extends Component<DataComponentPropsBase<T>, {value: any, 'ui.label': string, 'ui.hidden': boolean, 'ui.disabled': boolean}> {
    constructor(props: DataComponentPropsBase<T>) {
        super(props);

        this.state = {
            value: this.props.elementRef().getValue() || '',

            'ui.label': this.props.elementRef().getPropertyValue('ui.label'),
            'ui.hidden': this.props.elementRef().getPropertyValue('ui.hidden'),
            'ui.disabled': this.props.elementRef().getPropertyValue('ui.disabled'),
        };

        this.props.elementRef().bindModelChange(this.onModelChange.bind(this));
    }

    componentWillReceiveProps(nextProps: Readonly<DataComponentPropsBase<T>>, nextContext:any) {
        this.props.elementRef().unbindModelChange(this.onModelChange.bind(this));
        nextProps.elementRef().bindModelChange(this.onModelChange.bind(this));
    }

    onModelChange(value: any) {
        console.log('model change', value);
        this.setState({value: value});
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('control change', e.currentTarget.value, this.props.elementRef());
        this.props.elementRef().setValue(e.currentTarget.value);
    }
}
