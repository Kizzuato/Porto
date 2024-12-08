import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const About: React.FC = () => {
  return (
    <>
      <div
        className="px-6 py-10 h-full w-full bg-black flex lg:flex-row flex-col justify-between gap-10"
      >
        <div className="bg-gray-900  lg:w-1/2 h-96 ">
          <Image
            src="/me.jpg"
            width={500}
            height={500}
            alt="gwe"
            className="object-none h-full w-full grayscale"
          />
        </div>
        <div className="bg-gray-900  lg:w-1 h-1 lg:h-full"></div>
        <div className=" lg:w-1/2 h-full selection:bg-green-500 selection:text-black">
          <h1 className="text-3xl font-bold text-green-500">
            ABOUT <a className="text-white">ME</a>
          </h1>
          <br />
          <h2 className="text-2xl pb-1">
            <a className="text-3xl">Hi</a>, my name is{" "}
            <a className="">Dzakiyya Puteri Aulia</a>
          </h2>
          <h2 className="text-xl text-justify pr-10">
            I am an Informatics student, passionate about building modern and
            efficient web applications. Currently, I am focused on mastering
            React, Next.js, and Tailwind CSS to create user-friendly web
            experiences. Beyond coding, I am enthusiast about technology,
            Graphic Design , and creating illustration. My goal is to become a
            skilled Full-Stack Developer and contribute to impactful projects.
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
