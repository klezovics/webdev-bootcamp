import React from "react";
import DanToDoList from "./DanToDoList";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import configureStore from "../configureStore";

const todoAppStore = configureStore();

const AkToDoList = () => (
  <div>
    <Provider store={todoAppStore}>{<DanToDoList />}</Provider>
  </div>
);

export default AkToDoList;
