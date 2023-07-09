import Link from "next/link";
import React from "react";

function NavigationBar() {
  return (
    <div className="h-full  flex justify-center items-center gap-4 py-3 font-extrabold text-xl text-primary">
      <Link
        className="h-full flex items-center drop-shadow-[1px_1px_1px_rgba(219,204,239,0.9)] hover:text-secondary "
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="h-full flex items-center  drop-shadow-[1px_1px_1px_rgba(219,204,239,0.9)] hover:text-secondary"
        href={"/"}
      >
        Login
      </Link>
      <Link
        className="h-full  flex items-center drop-shadow-[1px_1px_1px_rgba(219,204,239,0.9)] hover:text-secondary"
        href={"/todolist"}
      >
        Todo-List
      </Link>
      <Link
        className="h-full  flex items-center drop-shadow-[1px_1px_1px_rgba(219,204,239,0.9)] hover:text-secondary"
        href={"/pdf/1/1"}
      >
        Admin
      </Link>
      <Link
        className="h-full  flex items-center drop-shadow-[1px_1px_1px_rgba(219,204,239,0.9)] hover:text-secondary"
        href={"#"}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavigationBar;
