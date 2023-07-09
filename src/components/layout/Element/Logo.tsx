import React from "react";
import goSlide from "../../../../public/Go_slide.gif";
import Image from "next/image";
function Logo() {
  return (
    <div className="h-full p-1 ">
      <Image className="my-auto" src={goSlide} height={100} alt="logo" />
    </div>
  );
}

export default Logo;
