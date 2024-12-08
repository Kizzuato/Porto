import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Contact: React.FC = () => {
  return (
    <>
      <div
        className="px-6 py-10 h-full w-full bg-black flex justify-between gap-10"
        id="particles-js"
      >
        <div className=" w-1/2 h-full">
          <h1 className="text-3xl">CONTACT ME AT</h1>
        </div>
        <div className="bg-gray-900  w-1 h-full"></div>
        <div className="bg-gray-900  w-1/2 h-full"></div>
      </div>
    </>
  );
};

export default Contact;
