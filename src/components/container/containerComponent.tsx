import {ContainerComponentBase} from "../base/containerComponentBase";
import {ContainerBase} from "meta-framework/dist/app/models/components/base/container";
import React from "react";

export class ContainerComponent<T extends ContainerBase> extends ContainerComponentBase<T> {
    render() {
        let isSection = this.props.elementRef()._parent?._meta.renderer === 'section';

        return (
            <div>
                {isSection || <h5>{this.props.meta.ui?.label}</h5>}
                <div className={isSection ? "" : "container border mb-2 pb-2"}>
                    { super.render() }
                </div>
            </div>
        );
    }
}
