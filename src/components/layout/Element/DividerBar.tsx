import React from "react";

function DividerBar() {
  return (
    <div className="flex w-full h-2 justify-between  bg-primary ">
      <div className="flex">
        <div className="h-full w-20 -skew-x-[37deg]  bg-primary " />
        <div className="h-full w-20 -skew-x-[37deg]  bg-secondary " />
      </div>
      <div className="flex gap-4 px-4">
        <div className="h-full w-10 -skew-x-[37deg]  bg-secondary " />
        <div className="h-full w-10 -skew-x-[37deg]  bg-secondary " />
      </div>
    </div>
  );
}

export default DividerBar;
