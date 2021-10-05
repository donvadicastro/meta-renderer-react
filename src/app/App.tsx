import React, {useState} from 'react';
import './App.css';
import {FormComponentWrapper} from "../components";
import 'bootstrap/dist/css/bootstrap.css';
import {InputTextarea} from 'primereact/inputtextarea';
import {mainFormDefinitionYAML} from "../definitions/mainFormYAML";

function App() {
    const [value, setValue] = useState(mainFormDefinitionYAML);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Form definition</h5>
                    <InputTextarea rows={30} defaultValue={value} className="form-control"
                                   onBlur={(e) => setValue(e.target.value)} />
                </div>
                <div className="col-sm-8">
                    <FormComponentWrapper yaml={value} />
                </div>
            </div>
        </div>
    );
}

export default App;
