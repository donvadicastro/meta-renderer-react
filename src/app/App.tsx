import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import {FormComponentWrapper} from "../components";
import 'bootstrap/dist/css/bootstrap.css';
import { Sidebar } from 'primereact/sidebar';
import {Button} from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';

function App() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(JSON.stringify({
        name: 'generalPurposeForm',
        ui: {label: 'General purpose form'},
        items: [
            { name: 'container', renderer: 'container', ui: {'label': 'Primitive elements and behaviors in container'}, items: [
                    { name: 'container-primitives1', binding: 'c1', renderer: 'textbox', ui: {label: 'String field (enter here and see result in label3 as both bound to same data path)'} },
                    { name: 'container-primitives2', binding: 'c2', renderer: 'textbox', ui: {label: 'Number field'}, type: 'number' },
                    { name: 'container-primitives3', binding: 'c3', renderer: 'textbox', ui: {label: 'Boolean field'}, type: 'bool' },
                    { name: 'container-primitives4', binding: 'c1', renderer: 'label', ui: {label: 'String readonly field (bound to first string field)'}}
                ]},
            { name: 'section', renderer: 'section', ui: {'label': 'Primitive elements and behaviors in section'}, items: [
                    { name: 'primitives', renderer: 'container', ui: {'label': 'Primitive elements and behaviors'}, items: [
                            { name: 'primitives1', binding: 'b1', renderer: 'textbox', ui: {label: 'String field (enter here and see result in label3 as both bound to same data path)'} },
                            { name: 'primitives2', binding: 'b2', renderer: 'textbox', ui: {label: 'Number field'}, type: 'number' },
                            { name: 'primitives3', binding: 'b3', renderer: 'textbox', ui: {label: 'Boolean field'}, type: 'bool' },
                            { name: 'primitives4', binding: 'b1', renderer: 'label', ui: {label: 'String readonly field (bound to first string field)'}}
                        ]},

                    { name: 'static-dropdowns', renderer: 'container', ui: {'label': 'Static dictionary form'},
                        items: [
                            { name: 'static-dropdowns-1', binding: 'static1', dictionary: 'static', renderer: 'dropdown', ui: {label: 'Dictionary with static content'}},
                            { name: 'static-dropdowns-2', binding: 'static1.key', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
                            { name: 'static-dropdowns-3', binding: 'static1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}}
                        ]},

                    {name: 'dynamic-dropdowns', renderer: 'container', ui: {'label': 'Dynamic dictionary form'},
                        items: [
                            { name: 'dynamic-dropdowns-1', binding: 'dynamic1', dictionary: 'https://restcountries.eu/rest/v2/all', renderer: 'dropdown', ui: {displayProperty: 'demonym', label: 'Dictionary with static content'}},
                            { name: 'dynamic-dropdowns-2', binding: 'dynamic1.cioc', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected key field)'}},
                            { name: 'dynamic-dropdowns-3', binding: 'dynamic1.name', renderer: 'label', ui: {label: 'String readonly field (bound to dropdown selected value field)'}}
                        ]}
                ]}
        ],
        dictionaries: {
            static: [
                {key: 1, name: 'first'},
                {key: 2, name: 'second'},
                {key: 3, name: 'third'}
            ]
        }}, null, 2));

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Form definition</h5>
                    <InputTextarea rows={30} defaultValue={value} className="form-control"
                                   onBlur={(e) => setValue(e.target.value)} />
                </div>
                <div className="col-sm-8">
                    <FormComponentWrapper meta={JSON.parse(value)} />
                </div>
            </div>
        </div>
    );
}

export default App;
