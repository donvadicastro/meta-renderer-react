import React, {useState} from 'react';
import './App.css';
import {FormComponentWrapper} from "../components";
import 'bootstrap/dist/css/bootstrap.css';
import {mainFormDefinitionYAML} from "../definitions/mainFormYAML";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-xcode";

function App() {
    const [value, setValue] = useState(mainFormDefinitionYAML);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <AceEditor
                        mode="yaml"
                        theme="xcode"
                        value={value}
                        width={"100%"}
                        height={"100%"}
                        onChange={(value) => setValue(value)}
                        name="FormYamlEditor"
                        editorProps={{ $blockScrolling: true }} />
                </div>
                <div className="col-sm-8">
                    <FormComponentWrapper yaml={value} />
                </div>
            </div>
        </div>
    );
}

export default App;
