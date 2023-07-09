import React, { useState } from "react";
interface props {
  message: string;
  status: boolean;
  date: Date;
}
function TodoListBlock(props: props) {
  const { message, status, date } = props;

  return (
    <div className="w-full h-[100px] rounded-xl flex justify-between shadow-xl">
      <div className="grow w-full  flex justify-start items-center px-10">
        {message}
      </div>
      <div className="w-[200px] flex flex-col items-center justify-center">
        <div className="text-green-300 w-[100px] border border-green-300 rounded-full flex items-center justify-center">
          {status}
        </div>
        <div>
          due:
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoListBlock;
