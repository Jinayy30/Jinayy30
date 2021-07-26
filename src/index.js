import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import './index.css';
import allReducers from "./Reducers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import background from "/Users/jinay/nodeJs/seasons/src/img/coolbackground3.png";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <div style= {{ backgroundImage: `url(${background})` }}><App /> </div>
  </Provider>,
  document.querySelector("#root")
);
//<Segment style={{ backgroundImage: `url(${background})` }}></Segment>