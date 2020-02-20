import React from 'react';
import ReactDOM from 'react-dom';
import Backendless from 'backendless';
import './index.css';
import StartScreenComponent from "./start-screen-component";
Backendless.initApp('59FE682A-E700-AB72-FF67-F5C494C10500', 'B1178B46-7137-47DC-88AB-576BBE0500F5');


ReactDOM.render(<StartScreenComponent />, document.getElementById('root'));