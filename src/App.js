import { QueryClient } from "react-query";
import ReduxConsumerContainer from "./2_react_practice/3_redux/2_hello_redux/ReduxConsumerContainer";
import ToDoWidgetContainer from "./2_react_practice/3_redux/3_todo_widget/ToDoWidgetContainer";
import TodoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/TodoList";
import DanToDoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/DanToDoList";
import AkToDoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/AkToDoList";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

function App() {
  const queryClient = new QueryClient();

  function ComponentWithError() {
    throw new Error("Booom!");

    // ...rest of the component code
  }

  const Fallback = styled.div`
    color: red;
  `;

  return (
    <ErrorBoundary
      fallback={
        <div>
          Something went wrong<Fallback>Stay calm!</Fallback>
        </div>
      }
    >
      {/*<ComponentWithError />*/}

      <div className="App">
        <AkToDoList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
