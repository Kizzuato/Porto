import React, { useState } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";

const Contact: React.FC = () => {
  return (
    <>
      <div
        className="px-6 py-10 h-full w-full bg-black lg:flex-row flex-col flex lg:justify-between gap-10"
      >
        <div className="lg:w-1/2">
          <h1 className="text-3xl">CONTACT ME AT</h1>
        </div>
        <div className="bg-gray-900  lg:w-1 h-1 lg:h-full"></div>
        <div className="bg-gray-900  lg:w-1/2 h-1/2 lg:h-full"></div>
      </div>
    </>
  );
};

export default Contact;
