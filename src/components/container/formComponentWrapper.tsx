import {Component} from "react";
import {Form} from "meta-framework/dist/app/models/components/form";
import {FormComponent} from "./formComponent";

type FormWrapperParams = { meta: any };

export class FormComponentWrapper extends Component<FormWrapperParams> {
    element: Form;

    constructor(props: FormWrapperParams) {
        super(props);

        this.element = new Form(props.meta);
        this.element.initialize();
    }

    shouldComponentUpdate(nextProps: Readonly<FormWrapperParams>, nextState: any) {
        return JSON.stringify(nextProps.meta) !== JSON.stringify(this.props.meta);
    }

    componentWillReceiveProps(nextProps: Readonly<FormWrapperParams>, nextContext:any) {
        this.element.destroy();
        this.element = new Form(nextProps.meta);
        this.element.initialize();
        console.log('new props', nextProps.meta)
    }

    componentWillUnmount() {
        console.log('unmount');
        this.element.destroy();
    }

    render() {
        console.log('rendering', this.props.meta);
        return <FormComponent key={new Date().getDate()} meta={this.props.meta} elementRef={() => this.element}/>
    }
}
