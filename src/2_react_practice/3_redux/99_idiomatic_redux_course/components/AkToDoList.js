import React from "react";
import DanToDoList from "./DanToDoList";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import todoApp from "../reducers";

const todoAppReducer = todoApp;
const todoAppStore = createStore(todoAppReducer);
const AkToDoList = () => (
  <div>
    <Provider store={todoAppStore}>{<DanToDoList />}</Provider>
  </div>
);

export default AkToDoList;
