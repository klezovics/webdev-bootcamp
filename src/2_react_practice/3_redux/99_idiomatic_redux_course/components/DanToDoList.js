import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

const DanToDoList = () => {
  let logTodo = (id) => {
    console.log("Todo clicked: " + id);
  };

  return (
    <div>
      <AddTodo />
      <VisibleTodoList
        todos={[{ id: 1, text: "Hi", completed: "false" }]}
        onTodoClick={logTodo}
      />
      <Footer />
    </div>
  );
};

export default DanToDoList;
