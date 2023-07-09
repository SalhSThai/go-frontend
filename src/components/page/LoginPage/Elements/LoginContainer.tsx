import React from "react";
import LoginForm from "./LoginForm";

function LoginContainer() {
  return (
    <div className="relative h-full w-full flex">
      <div className="absolute top-0 left-0 h-full w-1/2 bg-secondary -skew-x-[37deg]" />
      <LoginForm />
    </div>
  );
}

export default LoginContainer;
