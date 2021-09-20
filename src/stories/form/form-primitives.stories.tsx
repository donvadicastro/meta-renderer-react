import React from 'react';
import {Meta, Story} from '@storybook/react';
import {FormComponent} from "../../components/container/formComponent";
import {StoryBuilder} from "../storyBuilder";
import {ComponentPropsBase} from "../../components/base/componentBase";
import {Form} from "meta-framework/dist/app/models/components/form";

export default {
    title: 'Example/Form primitives',
    component: FormComponent,
} as Meta;

const template: Story<ComponentPropsBase<Form>> = (args) => <FormComponent {...args} />;

export const dataBinding = StoryBuilder.build(template, 'Data binding', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', renderer: 'textbox', ui: {label: 'String field (enter here and see result in label3 and wise verse)'} },
        { name: 'child2', binding: 'b2', renderer: 'textbox', ui: {label: 'Number field'}, type: 'number' },
        { name: 'child2', binding: 'b2', renderer: 'textbox', ui: {label: 'Boolean field'}, type: 'bool' },
        { name: 'child3', binding: 'b1', ui: {label: 'String readonly field (label3 bound to label1)'}}
    ]});

export const dynamicLabel = StoryBuilder.build(template, 'Dynamic label', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', renderer: 'textbox', ui: {label: 'label1 (enter "text-to-fire" to change label)'} },
        { name: 'child2', binding: 'b2', renderer: 'textbox', ui: {label: 'label2'}, dynamic: {
            prop: 'ui.label', val: 'new label',
            when: [{ binding: 'b1', fn: 'eq', val: 'text-to-fire' }]
        } }
    ]});

export const dynamicHidden = StoryBuilder.build(template, 'Dynamic hidden', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', renderer: 'textbox', ui: {label: 'label1 (enter "text-to-hide" to hide second control)'} },
        { name: 'child2', binding: 'b2', renderer: 'textbox', ui: {label: 'label2'}, dynamic: {
            prop: 'ui.hidden', val: true,
            when: [{ binding: 'b1', fn: 'eq', val: 'text-to-hide' }]
        } }
    ]});

export const dynamicDisable = StoryBuilder.build(template, 'Dynamic disable', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', renderer: 'textbox', ui: {label: 'label1 (enter "text-to-disable" to lock second control)'} },
        { name: 'child2', binding: 'b2', renderer: 'textbox', ui: {label: 'label2'}, dynamic: {
                prop: 'ui.disabled', val: true,
                when: [{ binding: 'b1', fn: 'eq', val: 'text-to-disable' }]
            } }
    ]});
