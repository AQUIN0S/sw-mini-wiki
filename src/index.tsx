import React from 'react';
import ReactDOM from "react-dom";
import App from './Containers/App/App';
import './index.css';

const rootElement = () => {
    const element = document.createElement("div");
    element.id = "root";
    return element;
};

document.body.appendChild(rootElement());

ReactDOM.render(<App />, document.getElementById("root"));
