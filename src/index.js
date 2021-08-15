import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
