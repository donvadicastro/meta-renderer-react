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
                ui: {label: 'Main form'},
                items: [
                    { name: 'child1', binding: 'b1', dictionary: 'static', renderer: 'dropdown', ui: {label: 'Dictionary with static content'}},
                    { name: 'child1-label', binding: 'b1.key', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
                    { name: 'child1-value', binding: 'b1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}},
                    { name: 'child2', binding: 'b1', renderer: 'textbox', ui: {label: 'String field (enter here and see result in label3 and wise verse)'} },
                    { name: 'child3', binding: 'b2', renderer: 'textbox', ui: {label: 'Number field'}, type: MetaComponentType.Number },
                    { name: 'child4', binding: 'b2', renderer: 'textbox', ui: {label: 'Boolean field'}, type: MetaComponentType.Bool },
                    { name: 'child5', binding: 'b1', ui: {label: 'String readonly field (label3 bound to label1)'}}
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
