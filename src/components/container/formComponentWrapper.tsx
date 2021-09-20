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

    render() {
        return <FormComponent meta={this.props.meta} elementRef={() => this.element}/>
    }
}
