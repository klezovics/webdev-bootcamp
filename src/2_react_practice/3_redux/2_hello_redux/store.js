// src/redux/reducer.js
import { createStore } from "redux";

const initialState = {
  message: "Hello World",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
