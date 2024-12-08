import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Works: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 grid px-6 py-6 h-full gap-6">
        <div className="text-black grid grid-cols-8 items-center">
          <h1 className="text-black text-4xl font-bold uppercase col-span-2">
            WORKS
          </h1>
          <hr className="border-black col-span-6" />
        </div>
        <div className=" lg:grid-row grid lg:grid-cols-4 justify-between">
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
        </div>
        <div className="text-black grid grid-cols-7 items-center">
          <hr className="border-black col-span-5" />
          <h1 className="text-black text-4xl font-bold uppercase justify-end text-right pr-5 col-span-2">
            Certifications
          </h1>
        </div>
        <div className=" lg:grid-row grid-col grid lg:grid-cols-4">
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
