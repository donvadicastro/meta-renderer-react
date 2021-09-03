import {Form} from "meta-framework/dist/app/models/components/form";
import {ContainerComponentBase} from "./base/containerComponentBase";
import React from "react";

export class FormComponent extends ContainerComponentBase<Form> {
    render() {
        return (
            <form name={this.props.meta.name}>
                <h2>{this.props.meta.ui?.label}</h2>
                {super.render()}
            </form>
        );
    }
}
