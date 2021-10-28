import {Component} from "react";
import {Form} from "meta-framework/dist/app/models/components/form";
import {FormComponent} from "./formComponent";

const YAML = require('yamljs');

type FormWrapperParams = { json?: any, yaml?: string };

export class FormComponentWrapper extends Component<FormWrapperParams> {
    element: Form;

    constructor(props: FormWrapperParams) {
        super(props);

        this.element = new Form(FormComponentWrapper.getMeta(props));
        this.element.initialize();
    }

    shouldComponentUpdate(nextProps: Readonly<FormWrapperParams>, nextState: any) {
        return JSON.stringify(nextProps.json) !== JSON.stringify(this.props.json) ||
            nextProps.yaml !== this.props.yaml;
    }

    componentWillReceiveProps(nextProps: Readonly<FormWrapperParams>, nextContext:any) {
        this.element.destroy();
        this.element = new Form(FormComponentWrapper.getMeta(nextProps));
        this.element.initialize();
    }

    componentWillUnmount() {
        this.element.destroy();
    }

    render() {
        return <FormComponent
            key={new Date().getDate()}
            meta={FormComponentWrapper.getMeta(this.props)}
            elementRef={() => this.element} />
    }

    private static getMeta(props: FormWrapperParams): any {
        return props.yaml ? YAML.parse(props.yaml) : props.json;
    }
}
