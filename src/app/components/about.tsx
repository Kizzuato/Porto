"use client";

import React from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import Menues from "./menues";

const About: React.FC = () => {
  return (
    <div className="px-6 py-10 h-full w-full bg-black flex lg:flex-row flex-col justify-between gap-10">
      <hr className="border-gray-500 lg:hidden" />
        <div className="">
          <h1 className="text-3xl font-bold h-10 pb-16 flex gap-2">
            ABOUT <p className="text-green-500">ME</p>
          </h1>
          <div className="bg-gray-900 lg:h-1/2">
            <Image
              src={me}
              width={500}
              height={500}
              alt="Profile picture"
              priority={false}
              placeholder="blur"
              className="object-none h-full w-full grayscale"
            />
          </div>
        </div>
        <div className="bg-gray-600 lg:w-1 h-1 lg:h-full lg:visible"></div>
        <div className="lg:w-1/2 h-full lg:h-[348px]">
          <Menues />
        </div>
    </div>
  );
};

export default About;
