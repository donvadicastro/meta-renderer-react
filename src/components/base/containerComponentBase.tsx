import React from "react";
import factoryResolver from "../factories/componentFactory";
import {ContainerBase} from "meta-framework/dist/app/models/components/base/container";
import {ComponentBase} from "./componentBase";

export class ContainerComponentBase<T extends ContainerBase> extends ComponentBase<T> {
    render() {
        return (
            <div>
                {this.props.elementRef().items
                    .filter(x => x._meta.renderer)
                    .map(x => React.createElement(factoryResolver(x._meta.renderer), {
                        meta: x._meta, elementRef: () => x
                }))}
            </div>
        );
    }
}
