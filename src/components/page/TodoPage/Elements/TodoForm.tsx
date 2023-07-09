import { todoCreateData } from "@/model/todo";
import React, { FormEvent, useState } from "react";

interface props {
  todos: todoCreateData[];
  setTodos: React.Dispatch<React.SetStateAction<todoCreateData[]>>;
}
function TodoForm(props: props) {
  const { todos, setTodos } = props;
  const [message, setMessage] = useState("TodoList");
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState<Date>(new Date("1999-05-10"));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: todoCreateData = {
      message,
      status,
      date,
    };
    setTodos([...todos, newTodo]);
    setMessage("");
  };
  return (
    <form
      className="w-full h-10 flex gap-2 p-1"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="w-full rounded-lg"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="border border-slate-900 px-4 py-2 rounded-lg shadow-lg active:shadow-inner flex justify-center items-center"
        type="button"
      >
        ADD
      </button>
    </form>
  );
}
export default TodoForm;
