import React from "react";
import DanToDoList from "./DanToDoList";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import todoApp from "../reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const todoAppReducer = todoApp;
const todoAppStore = createStore(todoAppReducer, persistedState);

todoAppStore.subscribe(
  throttle(() => {
    saveState({
      todos: todoAppStore.getState().todos,
    });
  }),
  1000
);

const AkToDoList = () => (
  <div>
    <Provider store={todoAppStore}>{<DanToDoList />}</Provider>
  </div>
);

export default AkToDoList;
