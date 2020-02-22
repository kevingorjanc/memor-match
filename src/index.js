import React from 'react';
import ReactDOM from 'react-dom';
import Backendless from 'backendless';
import './index.css';
import StartScreenComponent from "./start-screen-component";

console.log(process.env.BACKENDLESS_ID);
Backendless.initApp(process.env.BACKENDLESS_ID, process.env.BACKENDLESS_JS_PINSET);


ReactDOM.render(<StartScreenComponent />, document.getElementById('root'));