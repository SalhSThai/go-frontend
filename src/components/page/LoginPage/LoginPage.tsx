import React from "react";
import LoginContainer from "./Elements/LoginContainer";
import LoginBgContainer from "./Elements/LoginBgContainer";

function LoginPage() {
  return (
    <div className="relative w-full h-full ">
      <LoginBgContainer />
      <LoginContainer />
    </div>
  );
}

export default LoginPage;
