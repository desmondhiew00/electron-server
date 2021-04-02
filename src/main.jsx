import * as React from "react";
import * as ReactDOM from "react-dom";

const MOUNT_NODE = document.getElementById('root');
function render() {
  const App = require('./app/app.jsx').default;
  ReactDOM.render(<App />, MOUNT_NODE);
}

render();