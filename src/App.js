import { QueryClient } from "react-query";
import React, { useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "./2_react_practice/7_react_patterns/2_error_boundary/error_boundary.js";
import AkToDoList from "./2_react_practice/3_redux/99_idiomatic_redux_course/components/AkToDoList";

function ComponentWithError() {
  throw new Error("Booom!");

  // ...rest of the component code
}

const Fallback = styled.div`
  color: red;
`;

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <AkToDoList />
      <div className="App"></div>
    </>
  );
}

export default App;
