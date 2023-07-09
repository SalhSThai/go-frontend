import React, { useEffect, useState } from "react";
import TodoListBlock from "./TodoListBlock";
import { fetchTodoApi } from "@/modules/todoApi";
import { allTodoData, todoCreateData } from "@/model/todo";
import { AxiosResponse } from "axios";
interface props {
  todos: todoCreateData[];
  setTodos: React.Dispatch<React.SetStateAction<todoCreateData[]>>;
}
function TodoList(props: props) {
  const { todos, setTodos } = props;

  const fetch = async () => {
    try {
      const res: AxiosResponse<allTodoData, any> = await fetchTodoApi();
      setTodos(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className=" w-full h-full flex flex-col items-center px-4">
      {todos.map((el, id) => (
        <TodoListBlock
          key={id}
          message={el.message}
          date={el.date}
          status={el.status}
        />
      ))}
    </div>
  );
}

export default TodoList;
