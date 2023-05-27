import React from "react";
import DanToDoList from "./DanToDoList";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import todoApp from "../reducers";

const persistedState = {
  todos: [
    {
      id: "0",
      text: "Welcome back!",
      completed: false,
    },
  ],
};

const todoAppReducer = todoApp;
const todoAppStore = createStore(todoAppReducer, persistedState);

console.log(todoAppStore.getState());
const AkToDoList = () => (
  <div>
    <Provider store={todoAppStore}>{<DanToDoList />}</Provider>
  </div>
);

export default AkToDoList;
