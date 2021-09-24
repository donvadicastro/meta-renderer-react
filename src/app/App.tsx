import React, {useState} from 'react';
import './App.css';
import {FormComponentWrapper} from "../components";
import 'bootstrap/dist/css/bootstrap.css';
import {InputTextarea} from 'primereact/inputtextarea';
import {mainFormDefinition} from "../definitions/mainForm";

function App() {
    const [value, setValue] = useState(JSON.stringify(mainFormDefinition, null, 2));

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
