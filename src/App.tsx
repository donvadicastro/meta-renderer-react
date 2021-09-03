import React from 'react';

import logo from './logo.svg';
import './App.css';
import {FormComponentWrapper} from "./components/formComponentWrapper";
import {MetaComponentType} from "meta-framework/dist/app/enums/metaComponentType";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <FormComponentWrapper meta={{
                name: 'testContainerComponent',
                ui: {label: 'General purpose form'},
                items: [
                    { name: 'primitives', renderer: 'container', ui: {'label': 'Primitive elements and behaviors'}, items: [
                            { name: 'primitives1', binding: 'b1', renderer: 'textbox', ui: {label: 'String field (enter here and see result in label3 and wise verse)'} },
                            { name: 'primitives2', binding: 'b2', renderer: 'textbox', ui: {label: 'Number field'}, type: MetaComponentType.Number },
                            { name: 'primitives3', binding: 'b2', renderer: 'textbox', ui: {label: 'Boolean field'}, type: MetaComponentType.Bool },
                            { name: 'primitives4', binding: 'b1', ui: {label: 'String readonly field (label3 bound to label1)'}}
                        ]},
                    { name: 'dropdowns', renderer: 'container', ui: {'label': 'Primitive elements and behaviors'}, items: [
                            { name: 'dropdowns1', binding: 'b1', dictionary: 'static', renderer: 'dropdown', ui: {label: 'Dictionary with static content'}},
                            { name: 'dropdowns2', binding: 'b1.key', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
                            { name: 'dropdowns3', binding: 'b1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}}
                        ]}
                ], dictionaries: {
                    static: [
                        {key: 1, name: 'first'},
                        {key: 2, name: 'second'},
                        {key: 3, name: 'third'}
                    ]
                }}} />
        </div>
    );
}

export default App;
