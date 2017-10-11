import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, hashHistory } from "react-router-dom";

import App from "./pages/App";


ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <App />
  </BrowserRouter>
,document.getElementById('app'));
