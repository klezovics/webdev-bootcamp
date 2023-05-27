import { QueryClient } from "react-query";
import React, { useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "./2_react_practice/7_react_patterns/2_error_boundary/error_boundary.js";

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
    <ErrorBoundary>
      <ComponentWithError />

      <div className="App">{/* Rest of your code */}</div>
    </ErrorBoundary>
  );
}

export default App;
