import React from 'react';
import {Meta, Story} from '@storybook/react';
import {FormComponent} from "../../components/container/formComponent";
import {StoryBuilder} from "../storyBuilder";
import {ComponentPropsBase} from "../../components/base/componentBase";
import {Form} from "meta-framework/dist/app/models/components/form";

export default {
    title: 'Example/Form value sources',
    component: FormComponent,
} as Meta;

const template: Story<ComponentPropsBase<Form>> = (args) => <FormComponent {...args} />;

export const valueSource = StoryBuilder.build(template, 'Value source', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', valueSource: 'https://jsonplaceholder.typicode.com/todos/1'},
        { name: 'child1-label', binding: 'b1.userId', renderer: 'label', ui: {label: 'String readonly field (bound to valueSource response)'}},
        { name: 'child1-value', binding: 'b1.title', renderer: 'label', ui: {label: 'String readonly field (bound to valueSource response)'}}
    ]});
