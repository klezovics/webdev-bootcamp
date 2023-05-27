import React from "react";
import DanToDoList from "./DanToDoList";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const todoAppStore = configureStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <DanToDoList />,
  },
]);

const AkToDoList = () => (
  <div>
    <Provider store={todoAppStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </div>
);

export default AkToDoList;
