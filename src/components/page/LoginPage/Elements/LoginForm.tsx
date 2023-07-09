import React from "react";

function LoginForm() {
  return (
    <div className="w-full h-full flex justify-center items-center z-50 pb-12">
      <form className="h-1/2 w-1/2 max-w-[350px]  flex flex-col justify-center backdrop-blur-sm items-center gap-4 px-4 py-10 rounded-lg shadow-lg">
        <input
          className="w-full h-10 shadow-md rounded-lg px-4"
          type="text"
          placeholder="username"
        />
        <input
          className="w-full h-10 shadow-md rounded-lg px-4"
          type="text"
          placeholder="password"
        />
        <button
          className=" px-4 py-2 rounded-md flex justify-center items-center cursor-pointer shadow-xl active:shadow-inner border border-slate-100"
          type="button"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
