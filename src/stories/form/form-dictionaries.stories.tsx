import React from 'react';
import {Meta, Story} from '@storybook/react';
import {FormComponent} from "../../components/formComponent";
import {StoryBuilder} from "../storyBuilder";
import {Form} from "meta-framework/dist/app/models/components/form";
import {ComponentPropsBase} from "../../components/base/componentBase";

export default {
    title: 'Example/Form dictionaries',
    component: FormComponent,
} as Meta;

const template: Story<ComponentPropsBase<Form>> = (args) => <FormComponent {...args} />;

export const staticDictionary = StoryBuilder.build(template, 'Static dictionaries', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', dictionary: 'static', renderer: 'dropdown', ui: {label: 'Dictionary with static content'}},
        { name: 'child1-label', binding: 'b1.key', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
        { name: 'child1-value', binding: 'b1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}}
    ], dictionaries: {
        static: [
            {key: 1, name: 'first'},
            {key: 2, name: 'second'},
            {key: 3, name: 'third'}
        ]
    }});

export const dynamicDictionary = StoryBuilder.build(template, 'Dynamic dictionaries', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', dictionary: 'https://restcountries.eu/rest/v2/all', renderer: 'dropdown', ui: {displayProperty: 'demonym', label: 'Dictionary with static content'}},
        { name: 'child1-label', binding: 'b1.cioc', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
        { name: 'child1-value', binding: 'b1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}}
    ]});

export const dynamicStringDictionary = StoryBuilder.build(template, 'Dynamic string dictionaries', {name: 'testContainerComponent',
    items: [
        { name: 'child1', binding: 'b1', dictionary: 'http://localhost:3000/exchanges', renderer: 'dropdown', ui: {label: 'Dictionary with list of strings'}},
        { name: 'child1-label', binding: 'b1.key', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
    ]});
