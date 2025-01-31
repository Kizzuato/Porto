import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import Carousel from "./carousel";
import { ServicesItems } from "../data/servicesItems";

const Services: React.FC = () => {
  return (
    <>
      <div className="grid px-6 h-full pb-16 gap-3">
        <div className=" lg:grid-cols-8 items-center justify-between pt-6">
          {/* <hr className="border-gray-600 rounded-md border-t-4 font-bold col-span-6 lg:mt-0" /> */}
          <h1 className="text-green-500  decoration-gray-500 decoration-4 text-4xl font-bold uppercase col-span-2 lg:mb-0 mb-2">
            SERVICES
          </h1>
          {/* <hr className="border-gray-600 rounded-md col-span-6  border-b-4 lg:mt-0" /> */}
        </div>
        <p className="">
          I offer a range of services to help bring your ideas to life. Whether
          it is building modern websites, creating intuitive user interfaces, or
          optimizing your web applications, I am here to deliver solutions
          tailored to your needs.
        </p>
        <hr className="border-gray-500 mb-4" />
        <Carousel items={ServicesItems}/>
      </div>
    </>
  );
};

export default Services;
