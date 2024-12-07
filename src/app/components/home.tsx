"use client";

import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import placeholder from "../../../public/placeholder.jpg";

interface Home {
  videoId: string;
}

const Home: React.FC<Home> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div
        className="bg-gray-900 flex lg:flex-row flex-col px-6 pt-20"
        id="particles-js"
      >
        <div className="text-5xl lg:w-1/2 w-full mb-10">
          <h1 className="text-green-500 flex font-bold animate-fade-right animate-delay-200">
            Welcome
          </h1>
          <div className="flex">
            <h1 className="text-white text-opacity-70 font-bold animate-fade-right animate-delay-200">
              To my website
            </h1>
            <p className="text-green-500 font-bold animate-fade-right animate-delay-200">
              !
            </p>
          </div>
        </div>

        {/* VIDEO */}
        <div className="lg:w-1/2 h-96 flex lg:justify-end justify-center bg-slate-200 p-4 ">
          {isPlaying ? (
            <iframe
              className="w-full flex rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          ) : (
            // <p>sup</p>
            <div
              className="object-cover w-full h-full bg-gray-200 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={placeholder}
                alt="YouTube thumbnail"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* <div className="top-0 object-cover w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 22V2l18 10-18 10z" />
                </svg>
              </div> */}
            </div>
          )}
          {/* <div className="bg-green-500 absolute rounded-full opacity-70"></div> */}
        </div>
        {/* VIDEO */}
      </div>
    </>
  );
};

export default Home;
