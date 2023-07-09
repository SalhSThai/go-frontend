import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoCreateData } from "@/model/todo";

function TodolistContainer() {
  const [todos, setTodos] = useState<todoCreateData[]>([
    { date: new Date(), message: "", status: false },
  ]);
  return (
    <div className="w-1/2 h-[90%] backdrop-blur-sm shadow-md flex flex-col items-center">
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default TodolistContainer;
