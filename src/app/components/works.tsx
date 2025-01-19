"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import me from "../../../public/placeholder.png";
import and from "../../../public/image.png";
import Carousel from "./carousel";

const Works: React.FC = () => {
  return (
    <>
      <div className="grid px-6 pt-6 h-full">
        <div className=" grid lg:grid-cols-8 items-center">
          <h1 className="text-green-500 text-4xl font-bold uppercase col-span-2">
            WORKS
          </h1>
          <hr className="border-white col-span-6 lg:mt-0 mt-3" />
        </div>
        <p className="py-6 text-gray-300">
          Here are some of the projects I have worked on, showcasing my skills
          and creativity in building functional and user-friendly applications.
          Each project reflects my passion for problem-solving and delivering
          high-quality solutions.
        </p>
        {/* <Carousel /> */}

        <div className="grid lg:grid-cols-7 items-center justify-between pt-16">
          <hr className="border-white lg:col-span-5 lg:mt-0 mt-3 lg:order-first order-last w-full" />
          <h1 className="text-green-500 text-4xl font-bold uppercase justify-end text-right pr-5 col-span-1 lg:col-span-2">
            Certifications
          </h1>
        </div>
        <p className="py-6 text-gray-300">
          These certifications validate my expertise and commitment to
          continuous learning in the field of technology. They showcase my
          dedication to staying up-to-date with the latest trends and tools in
          the industry.
        </p>
        {/* <div className=" grid-row grid-col grid grid-cols-4">
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
        </div> */}
      </div>
    </>
  );
};

export default Works;
