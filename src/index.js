import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { GeneralContext } from "./context/AppContext";

ReactDOM.render(
  <GeneralContext>
    <App />
  </GeneralContext>,
  document.getElementById("root")
);
