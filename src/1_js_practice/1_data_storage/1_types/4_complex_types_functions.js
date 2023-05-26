function saveFunctionToAVariableAndUseVariableToCallFunction() {
  const x = function () {
    console.log("Hello");
  };
  x();
}

saveFunctionToAVariableAndUseVariableToCallFunction();
