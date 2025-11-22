import React from "react";
import { WorksItems } from "../data/worksItems";
import { CertificationsItems } from "../data/certificationItems";
import Carousel from "./carousel";

const Works: React.FC = () => {
  return (
    <div className="grid pt-6 h-full">
      <div className="grid px-6 h-full pb-6 gap-3">
        <div className="grid lg:grid-cols-7 pt-6 items-center justify-between">
          <h1 className="text-green-500 decoration-gray-500 decoration-4 text-4xl font-bold uppercase col-span-2 lg:mb-0 mb-2">
            WORKS
          </h1>
        </div>
          <p className="">
            Here are some of the projects I have worked on, showcasing my skills
            and creativity in building functional and user-friendly
            applications. Each project reflects my passion for problem-solving
            and delivering high-quality solutions.
          </p>
          <hr className="border-gray-500 mb-4" />
        <Carousel items={WorksItems} />
      </div>
      <div className="grid h-full pb-6 gap-3 px-6">
        <div className="grid lg:grid-cols-7 pt-6 items-center justify-between">
          <h1 className="text-green-500 decoration-gray-500 decoration-4 text-4xl font-bold uppercase col-span-2 lg:mb-0 mb-2">
            Certifications
          </h1>
        </div>
        <p>
          These certifications validate my expertise and commitment to
          continuous learning in the field of technology. They showcase my
          dedication to staying up-to-date with the latest trends and tools in
          the industry.
        </p>
        <hr className="border-gray-500 mb-4" />
        <Carousel items={CertificationsItems} />
      </div>
    </div>
  );
};

export default Works;
