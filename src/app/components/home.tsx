"use client";

import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import placeholder from "../../../public/placeholder.png";

interface Home {
  videoId: string;
}

const Home: React.FC<Home> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div
        className="flex lg:flex-row flex-col justify-center h-100%"
        id="particles-js"
      >
        <div className="text-5xl lg:w-1/2 w-full bg-black flex flex-col text-center justify-center h-full">
          <h1 className="text-green-500 font-bold animate-fade-right animate-delay-200 lg:text-5xl text-4xl ">
            PORTOFOLIO 
          </h1>
          <div className="">
            <h2 className="text-white text-opacity-70 font-bold animate-fade-right animate-delay-200 text-sm">
              FULLSTACK DEVELOPER & GRAPHIC DESIGNER
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
