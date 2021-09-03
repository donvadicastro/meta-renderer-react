import {ContainerComponentBase} from "./base/containerComponentBase";
import {ContainerBase} from "meta-framework/dist/app/models/components/base/container";
import React from "react";

export class ContainerComponent<T extends ContainerBase> extends ContainerComponentBase<T> {
    render() {
        return (
            <div className="container border mb-2 pb-2">
                <h5>{this.props.meta.ui?.label}</h5>
                { super.render() }
            </div>
        );
    }
}
