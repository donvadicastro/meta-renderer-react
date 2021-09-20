import {FormComponent} from "../../components/container/formComponent";
import {Meta, Story} from "@storybook/react";
import React from "react";
import {StoryBuilder} from "../storyBuilder";
import {ComponentPropsBase} from "../../components/base/componentBase";
import {ActionFactory} from "meta-framework/dist/app/actions/factory";
import {Form} from "meta-framework/dist/app/models/components/form";

export default {
    title: 'Example/Form actions',
    component: FormComponent,
} as Meta;

const template: Story<ComponentPropsBase<Form>> = (args) => <FormComponent {...args} />;

ActionFactory.put('submit', () => { window.alert('hello'); return Promise.resolve(true); });

export const action = StoryBuilder.build(template, 'Action', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', renderer: 'textbox', ui: {label: 'enter "text-to-visible" to make button3 visible or "text-to-unlock" to enable button2'} },
        { name: 'action1', renderer: 'button', ui: {label: 'Submit'}, action: { name: 'submit', confirmation: 'yes?' }},
        { name: 'action2', renderer: 'button', ui: {label: 'Submit disabled', disabled: true}, action: { name: 'submit' },
            dynamic: {prop: 'ui.disabled', val: false, when: [{ binding: 'b1', fn: 'eq', val: 'text-to-unlock' }]}},
        { name: 'action3', renderer: 'button', ui: {label: 'Submit hidden', hidden: true}, action: { name: 'submit' },
            dynamic: {prop: 'ui.hidden', val: false, when: [{ binding: 'b1', fn: 'eq', val: 'text-to-visible' }]}},
    ]});
