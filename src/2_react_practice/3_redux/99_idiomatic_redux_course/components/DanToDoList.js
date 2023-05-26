import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

const DanToDoList = () => (
  <div>
    <AddTodo />
    <VisibleTodoList todos={[{ id: 1, text: "Hi", completed: "false" }]} />
    <Footer />
  </div>
);

export default DanToDoList;
