import store from "../3_todo_widget/store";
import MessageContainer from "../2_hello_redux/MessageContainer";
import { Provider, useDispatch, useSelector } from "react-redux";
import ToDoWidget from "./ToDoWidget";
const ToDoWidgetContainer = () => {
  return (
    <div>
      <Provider store={store}>
        <ToDoWidget />
      </Provider>
    </div>
  );
};

export default ToDoWidgetContainer;
