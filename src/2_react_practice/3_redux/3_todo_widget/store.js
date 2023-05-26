// src/redux/reducer.js
import { createStore } from "redux";

const initialState = {
  todos: ["Wash car"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
