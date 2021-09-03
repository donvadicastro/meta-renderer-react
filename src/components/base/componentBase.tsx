import {Component} from "react";
import {ElementBase} from "meta-framework/dist/app/models/components/base/base/element";

export interface ComponentPropsBase<T> {
    meta: any;
    elementRef: () => T;
}

export class ComponentBase<T extends ElementBase> extends Component<ComponentPropsBase<T>, {'ui.label': string, 'ui.hidden': boolean, 'ui.disabled': boolean}> {
    constructor(props: ComponentPropsBase<T>) {
        super(props);

        this.state = {
            'ui.label': this.props.elementRef().getPropertyValue('ui.label'),
            'ui.hidden': this.props.elementRef().getPropertyValue('ui.hidden'),
            'ui.disabled': this.props.elementRef().getPropertyValue('ui.disabled'),
        };

        this.props.elementRef().bindDynamicChange(this.onDynamicChange.bind(this));
    }

    onDynamicChange(prop: 'ui.label') {
        this.setState({[prop]: this.props.elementRef().getPropertyValue(prop)});
    }
}
