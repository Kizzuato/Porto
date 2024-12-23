"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import and from "../../../public/image.png";

const Works: React.FC = () => {
  const items = [me, me, me, me, and, me, me, me, me, me, and, me]; // Ganti dengan data/gambar Anda
  const itemsPerSlideDesktop = 4;
  const itemsPerSlideMobile = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Reset `currentSlide` jika mode berubah untuk mencegah slide yang tidak valid
      setCurrentSlide((prevSlide) => {
        const maxSlides = Math.ceil(
          items.length / (mobile ? itemsPerSlideMobile : itemsPerSlideDesktop)
        );
        return Math.min(prevSlide, maxSlides - 1);
      });
    };

    // Set ukuran layar awal
    handleResize();

    // Tambahkan listener untuk resize
    window.addEventListener("resize", handleResize);

    // Hapus listener saat komponen dilepas
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hitung jumlah item per slide berdasarkan mode
  const itemsPerSlide = isMobile ? itemsPerSlideMobile : itemsPerSlideDesktop;

  const currentItems = isMobile
    ? [items[currentSlide]] // 1 item per slide di mode mobile
    : items.slice(
        currentSlide * itemsPerSlide,
        (currentSlide + 1) * itemsPerSlide
      );

  const totalSlides = isMobile
    ? items.length // Total slide sama dengan jumlah item di mode mobile
    : Math.ceil(items.length / itemsPerSlide);

  const prevIndex = (currentSlide - 1 + items.length) % items.length;
  const nextIndex = (currentSlide + 1) % items.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid px-6 pt-6 h-full">
        <div className=" grid lg:grid-cols-8 items-center">
          <h1 className="text-green-500 text-4xl font-bold uppercase col-span-2">
            WORKS
          </h1>
          <hr className="border-white col-span-6 lg:mt-0 mt-3" />
        </div>
        <p className="py-6">
          Here are some of the projects I have worked on, showcasing my skills
          and creativity in building functional and user-friendly applications.
          Each project reflects my passion for problem-solving and delivering
          high-quality solutions.
        </p>
        <div className="">
          <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="slide"
          >
            <div className="grid md:grid-cols-4 gap-4 px-20">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#AYONIMA">
                      <Image
                        className="rounded-t-lg"
                        src={me}
                        alt=""
                      />
                    </a>
                    <div className="p-5">
                      <a href="#AYONIMA">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      <a
                        href="#AYONIMA"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* <Image
                    src={item}
                    alt={`Item ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrev}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNext}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide
                    ? "bg-green-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-7 items-center justify-between pt-16">
          <hr className="border-white lg:col-span-5 lg:mt-0 mt-3 lg:order-first order-last w-full" />
          <h1 className="text-green-500 text-4xl font-bold uppercase justify-end text-right pr-5 col-span-1 lg:col-span-2">
            Certifications
          </h1>
        </div>
        <p className="py-6">
          These certifications validate my expertise and commitment to
          continuous learning in the field of technology. They showcase my
          dedication to staying up-to-date with the latest trends and tools in
          the industry.
        </p>
        <div className=" grid-row grid-col grid grid-cols-4">
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
          <div className="bg-black h-72 w-72 rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
