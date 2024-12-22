import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 grid px-6 py-6 h-full">
        <div className="text-black grid grid-cols-8 items-center">
          <h1 className="text-black text-4xl font-bold uppercase col-span-2">
            SERVICES
          </h1>
          <hr className="border-black col-span-6" />
        </div>
        <p className="text-black">
          I offer a range of services to help bring your ideas to life. Whether
          it is building modern websites, creating intuitive user interfaces, or
          optimizing your web applications, I am here to deliver solutions
          tailored to your needs.
        </p>
        <div className=" lg:grid-row grid-col grid lg:grid-cols-4 grid-cols-1">
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
          <div className="text-5xl bg-black h-72 w-72 rounded-xl"></div>
        </div>
        {/* <h1 className="text-black text-4xl font-bold uppercase">Certifications</h1>
        <div
          className=" lg:grid-row grid-col grid lg:grid-cols-4 grid-cols-1"

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
