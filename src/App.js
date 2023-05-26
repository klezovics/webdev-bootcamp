import { QueryClient } from "react-query";
import ReduxConsumerContainer from "./2_react_practice/3_redux/2_hello_redux/ReduxConsumerContainer";
import ToDoWidgetContainer from "./2_react_practice/3_redux/3_todo_widget/ToDoWidgetContainer";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <ToDoWidgetContainer />
    </div>
  );
}

export default App;
