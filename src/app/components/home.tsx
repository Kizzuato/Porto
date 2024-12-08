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
        className="flex lg:flex-row flex-col justify-center h-100% align-middle"
        id="particles-js"
      >
        <div className="text-5xl lg:w-1/2 w-full mb-10 bg-black flex flex-col text-center justify-center">
          <h1 className="text-green-500 font-bold animate-fade-right animate-delay-200 lg:text-5xl text-4xl ">
            PORTOFOLIO 
          </h1>
          <div className="">
            <h2 className="text-white text-opacity-70 font-bold animate-fade-right animate-delay-200 text-sm">
              FULLSTACK DEVELOPER & DESIGNER GRAPHIC
            </h2>
            {/* <p className="text-green-500 font-bold animate-fade-right animate-delay-200">
              !
            </p> */}
          </div>
        </div>

        {/* VIDEO */}
        {/* <div className="lg:w-1/2 h-96 flex lg:justify-end justify-center bg-slate-200 p-4 ">
          {isPlaying ? (
            <iframe
              className="w-full flex rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          ) : (
            <div
              className="object-cover w-full h-full bg-gray-200 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={placeholder}
                alt="YouTube thumbnail"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Home;
