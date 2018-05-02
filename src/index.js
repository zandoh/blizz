import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Home from "./containers/home/Home";
//import registerServiceWorker from './registerServiceWorker';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
