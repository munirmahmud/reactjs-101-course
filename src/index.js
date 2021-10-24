// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootRender = document.getElementById("app");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootRender
);

// https://demo.themeum.com/html/triangle/1.1/index.html
