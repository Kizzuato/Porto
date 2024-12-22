import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Works: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 grid px-6 py-6 h-full">
        <div className="text-black grid grid-cols-8 items-center">
          <h1 className="text-black text-4xl font-bold uppercase col-span-2">
            WORKS
          </h1>
          <hr className="border-black col-span-6" />
        </div>
        <p className="text-black">
          Here are some of the projects I have worked on, showcasing my skills
          and creativity in building functional and user-friendly applications.
          Each project reflects my passion for problem-solving and delivering
          high-quality solutions.
        </p>
        <div className=" lg:grid-row grid lg:grid-cols-4 justify-between">
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
        </div>
        <div className="text-black grid lg:grid-cols-7 grid-cols-7 items-center justify-between">
          <hr className="border-black lg:col-span-5 col-span-1" />
          <h1 className="text-black text-4xl font-bold uppercase justify-end text-right pr-5 col-span-1 lg:col-span-2">
            Certifications
          </h1>
        </div>
        <p className="text-black">
          These certifications validate my expertise and commitment to
          continuous learning in the field of technology. They showcase my
          dedication to staying up-to-date with the latest trends and tools in
          the industry.
        </p>
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
