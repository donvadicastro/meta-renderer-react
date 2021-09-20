import {ContainerBase} from "meta-framework/dist/app/models/components/base/container";
import {ComponentBase} from "../base/componentBase";
import React from "react";
import {TabPanel, TabView} from 'primereact/tabview';
import factoryResolver from "../factories/componentFactory";

export class SectionComponent<T extends ContainerBase> extends ComponentBase<T> {
    render() {
        return (
            <div>
                <h5>{this.props.meta.ui?.label}</h5>
                <TabView activeIndex={0}>
                    {this.props.elementRef().items
                        .filter(x => x._meta.renderer === 'container')
                        .map(x => <TabPanel header={x.getPropertyValue('ui.label')}>
                            {React.createElement(factoryResolver(x._meta.renderer), {
                                meta: x._meta, elementRef: () => x
                            })}
                        </TabPanel>
                    )}
                </TabView>
            </div>
        );
    }
}
