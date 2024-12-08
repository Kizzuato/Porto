import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Services: React.FC = () => {
  return (
    <>
      <div
        className="bg-gray-300 grid px-6 py-6 h-full gap-6"
        id="particles-js"
        >
        <h1 className="text-black text-4xl font-bold uppercase">SERVICES</h1>
        <div
          className=" lg:grid-row grid-col grid lg:grid-cols-4 grid-cols-1"
          id="particles-js"
        >
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        </div>
        {/* <h1 className="text-black text-4xl font-bold uppercase">Certifications</h1>
        <div
          className=" lg:grid-row grid-col grid lg:grid-cols-4 grid-cols-1"
          id="particles-js"
        >
        <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        </div> */}
      </div>
    </>
  );
};

export default Services;
