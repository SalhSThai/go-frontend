import React from "react";
import DividerBar from "../../Element/DividerBar";
import Logo from "../../Element/Logo";
import NavigationBar from "./NavigationBar";

function MainHeadder() {
  return (
    <div className="h-[120px] w-full flex flex-col items-center justify-start">
      <div className="grow h-10 w-full flex justify-between items-center px-4 bg-[#fbfbfb]">
        <Logo />
        <NavigationBar />
      </div>
      <DividerBar />
    </div>
  );
}

export default MainHeadder;
