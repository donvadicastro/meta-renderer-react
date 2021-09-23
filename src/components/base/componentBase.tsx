import {Component} from "react";
import {ElementBase} from "meta-framework/dist/app/models/components/base/base/element";

export interface ComponentPropsBase<T> {
    key?: number;
    meta: any;
    elementRef: () => T;
}

type StateProperties = { 'ui.label': string, 'ui.hidden': boolean, 'ui.disabled': boolean };

export class ComponentBase<T extends ElementBase> extends Component<ComponentPropsBase<T>, StateProperties> {
    constructor(props: ComponentPropsBase<T>) {
        super(props);

        this.state = {
            'ui.label': this.props.elementRef().getPropertyValue('ui.label'),
            'ui.hidden': this.props.elementRef().getPropertyValue('ui.hidden'),
            'ui.disabled': this.props.elementRef().getPropertyValue('ui.disabled'),
        };

        this.props.elementRef().bindDynamicChange(this.onDynamicChange.bind(this));
        console.log('constructor');
    }

    onDynamicChange(prop: 'ui.label') {
        this.setState({[prop]: this.props.elementRef().getPropertyValue(prop)});
    }
}
