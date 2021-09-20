import {FormComponent} from "../../components/container/formComponent";
import {Meta, Story} from "@storybook/react";
import React from "react";
import {StoryBuilder} from "../storyBuilder";
import {ComponentPropsBase} from "../../components/base/componentBase";
import {Form} from "meta-framework/dist/app/models/components/form";

export default {
    title: 'Example/Form tables',
    component: FormComponent,
} as Meta;

const template: Story<ComponentPropsBase<Form>> = (args) => <FormComponent {...args} />;

export const dataBinding = StoryBuilder.build(template, 'Form collection', {name: 'testContainerComponent',
    items: [
        {name: 'testCollectionComponent', renderer: 'table', binding: 'binding', valueSource: 'https://restcountries.eu/rest/v2/all',
            ui: {label: 'Simple table', hidden: true}, items: [
                {name: 'name', binding: 'name'},
                {name: 'region', binding: 'region'},
                {name: 'numericCode', binding: 'numericCode'},
                {name: 'langDe', binding: 'translations.de'},
        ]}
    ]});
