import {Form} from "meta-framework/dist/app/models/components/form";
import React from "react";
import {ContainerComponent} from "./containerComponent";

export class FormComponent extends ContainerComponent<Form> {
    render() {
        console.log('rendering form', this.props.meta);
        return <form key={this.props.key} name={this.props.meta.name}>{super.render()}</form>;
    }
}
