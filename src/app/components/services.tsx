import React, { useState, useEffect } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import Carousel from "./carousel";
import { ServicesItems } from "../data/servicesItems";

const Services: React.FC = () => {
  return (
    <>
      <div className="grid px-6 py-6 h-full">
        <div className=" grid lg:grid-cols-8 items-center">
          <h1 className="text-green-500 text-4xl font-bold uppercase col-span-2">
            SERVICES
          </h1>
          <hr className="border-white col-span-6 mt-3 lg:mt-0" />
        </div>
        <p className="py-6 text-gray-300">
          I offer a range of services to help bring your ideas to life. Whether
          it is building modern websites, creating intuitive user interfaces, or
          optimizing your web applications, I am here to deliver solutions
          tailored to your needs.
        </p>
        <Carousel items={ServicesItems} />
      </div>
    </>
  );
};

export default Services;
