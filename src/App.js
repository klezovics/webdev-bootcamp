import { QueryClient } from "react-query";
import ReduxConsumerContainer from "./2_react_practice/3_redux/2_hello_redux/ReduxConsumerContainer";
import ToDoWidgetContainer from "./2_react_practice/3_redux/3_todo_widget/ToDoWidgetContainer";
import TodoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/TodoList";
import DanToDoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/DanToDoList";
import AkToDoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/AkToDoList";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <AkToDoList />
      <div>Hello</div>
    </div>
  );
}

export default App;
