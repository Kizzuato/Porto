import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const About: React.FC = () => {
  return (
    <>
      <div
        className="px-6 py-10 h-full w-full bg-black flex justify-between gap-10"
        id="particles-js"
      >
        <div className="bg-gray-900  w-1/2 h-96 ">
          <Image src="/me.jpg" width={500} height={500} alt="gwe" className="object-none h-full w-full grayscale"/>
        </div>
        <div className="bg-gray-900  w-1 h-full"></div>
        <div className=" w-1/2 h-full">
          <h1 className="text-3xl">ABOUT ME</h1>
        </div>
      </div>
    </>
  );
};

export default About;
