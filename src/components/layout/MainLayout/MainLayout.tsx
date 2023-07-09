import React from "react";
import MainFooter from "./components/MainFooter";
import MainHeadder from "./components/MainHeadder";

function MainLayout({ children }: { children: React.JSX.Element }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <MainHeadder />
      <div className="h-80 w-full grow">{children}</div>
      {/* <MainFooter /> */}
    </div>
  );
}

export default MainLayout;
