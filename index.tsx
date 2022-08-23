import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import App from "./App";
import reducer from "./reducers/index";
import "./style.css";

const store = createStore(reducer, applyMiddleware(Thunk));
//store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//import {addTodo, toggleTodo,setVisibility,VisibilityFilter} from './actions'

// store.dispatch(addTodo('new todo item'));
// store.dispatch(addTodo('another todo item'));
// store.dispatch(toggleTodo(0));
// store.dispatch(setVisibility(VisibilityFilter.SHOW_COMPLETED));
