import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => console.log("updated store :", store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
