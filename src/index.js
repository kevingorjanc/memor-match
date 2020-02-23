import React from 'react';
import ReactDOM from 'react-dom';
import Backendless from 'backendless';
import './index.css';
import StartScreenComponent from "./start-screen-component";
import code from "./code.js"

console.log(code.api);
Backendless.initApp(code.api , 'B1178B46-7137-47DC-88AB-576BBE0500F5');


ReactDOM.render(<StartScreenComponent />, document.getElementById('root'));