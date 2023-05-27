import { loadState, saveState } from "./localStorage";
import todoApp from "./reducers";
import { createStore } from "redux";
import throttle from "lodash/throttle";

const configureStore = () => {
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

  return todoAppStore;
};

// Export creaeStore() function, so that we can create many stores.
export default configureStore;
