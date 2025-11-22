"use client";
import React, { useState, useMemo } from "react";
import {
  RiReactjsFill,
  RiTailwindCssFill,
  RiNextjsFill,
  RiMapPin2Fill,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";

interface Icon {
  name?: string;
  ikon: JSX.Element;
}

interface MenuItem {
  title: string;
  detail: string;
  icons?: Icon[];
}

const Menues: React.FC = () => {
  const menuItems: MenuItem[] = useMemo(
    () => [
    {
      title: "Background",
      detail:
        "I am an Informatics student with a strong passion for building modern and efficient web applications. I have been exploring technologies such as React, Next.js, and Tailwind CSS to create responsive and user-friendly web experiences. My learning journey extends beyond development, delving into fields like graphic design and digital illustration to enhance my creative problem-solving abilities. I believe that design is just as critical as functionality when it comes to delivering impactful user experiences. Additionally, I am enthusiastic about keeping up with emerging technologies and trends in the software development ecosystem.",
    },
    {
      title: "Skills",
      detail: "Proficient in React, Next.js, Tailwind CSS.",
      icons: [
        { name: "HTML", ikon: <RiHtml5Fill key="html" /> },
        { name: "CSS", ikon: <RiCss3Fill key="CSS" /> },
        { name: "Javascript", ikon: <RiJavascriptFill key="Javascript" /> },
        { name: "React", ikon: <RiReactjsFill key="react" /> },
        { name: "Tailwind CSS", ikon: <RiTailwindCssFill key="tailwind" /> },
        { name: "Next.jS", ikon: <RiNextjsFill key="nextjs" /> },
      ],
    },
    {
      title: "Location",
      detail: "Based in Indonesia.",
      icons: [{ name: "Bandung, Indonesia", ikon: <RiMapPin2Fill /> }],
    },
    {
      title: "Goals",
      detail:
        "My goal is to become a skilled and innovative Front-end Developer, collaborating on meaningful projects that solve real-world problems and improve user engagement. Outside of coding, I enjoy participating in technology events, creating visual artworks, and contributing to open-source projects. This well-rounded approach allows me to continuously learn and grow as a professional in the dynamic tech landscape.",
    },
  ],
    []
  );

  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);

  return (
    <>
      <hr className="border-gray-600 border-2" />
      <div className="flex flex-wrap gap-3 h-10 overflow-scroll w-full">
        {menuItems.map((item) => (
          <button
            className={`hover:bg-gray-800 px-3 font-bold uppercase text-xl transition-colors ${
              selectedItem?.title === item.title ? "bg-gray-800" : ""
            }`}
            key={item.title}
            onClick={() => setSelectedItem(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="pt-3">
        {selectedItem?.icons ? (
          <div className="gap-3 flex-col flex">
            {selectedItem.icons.map((icon, index) => (
              <div key={icon.name || index} className="items-center w-full flex gap-2">
                <p className="text-2xl">{icon.ikon}</p>
                {icon.name}
              </div>
            ))}
          </div>
        ) : (
          <h2 className="lg:text-xl text-justify pr-5">
            {selectedItem?.detail}
          </h2>
        )}
      </div>
    </>
  );
};

export default Menues;
