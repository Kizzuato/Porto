"use client";

import React, { useState } from "react";
import { ContactItem, contactItems } from "../data/contactItem";
import Image from "next/image";
import git from "../../../public/git.svg";

const Contact: React.FC = () => {
  return (
    <>
      <div className="px-6 py-10 h-full lg:w-full w-full bg-black lg:flex-row flex-col flex lg:justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold pb-2">
            CONTACT <a className="text-green-500">ME </a>
          </h1>
          <div className="text-justify mb-8">
            Do you have a project idea or just want to say hello? Feel free to
            reach out! I am always open to new opportunities and collaborations.
          </div>

          <div className="grid grid-cols-1 gap-8">
            {contactItems.map((item: ContactItem) => (
              <a
                key={item.name}
                href="https://www.geeksforgeeks.org/how-to-make-the-background-of-a-div-clickable-in-html/?ref=ml_lbp"
              >
                <div className="flex flex-row content-center items-center gap-5 border-green-500 rounded-lg p-2 relative font-medium group py-1.5 px-2.5">
                  <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-green-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-black border border-green-500 group-hover:bg-black"></span>
                  <svg
                    className="text-green-500 fill-current h-10 w-10 relative"
                    viewBox={item.ukuran}
                  >
                    <path d={item.de} />
                  </svg>
                  <h3 className="text-xl relative">{item.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gray-900  lg:w-1 h-1 lg:h-full"></div>
        <div className="bg-gray-900  lg:w-1/2 h-full lg:h-full p-11 text-justify">
          <div>
            Or simply fill out the contact form below, and I will get back to
            you as soon as possible!
          </div>
          <div className="mt-5">
            <form className="flex flex-col gap-2">
              <div className="flex lg:flex-row flex-col lg:gap-5 gap-2 justify-between">
                <label className="flex flex-col">
                  First Name
                  <input
                    className="p-1 rounded-sm text-black mt-1"
                    type="text"
                    id=""
                    name="Name"
                  ></input>
                </label>
                <label className="flex flex-col">
                  Last Name
                  <input
                    className="p-1 rounded-sm text-black mt-1"
                    type="text"
                    id=""
                    name="Name"
                  ></input>
                </label>
              </div>
              <label className="flex flex-col">
                Email
                <input
                  className="p-1 rounded-sm text-black mt-1"
                  type="email"
                  id=""
                  name="Name"
                ></input>
              </label>
              <label className="flex flex-col">
                Message
                <textarea
                  className="p-1 rounded-sm text-black mt-1"
                  id=""
                  name="Name"
                ></textarea>
              </label>
              <div className="grid grid-cols grid-cols-2 gap-16 mt-10">
                <button
                  className="outline outline-1 text-green-500 bg-black rounded-sm p-1"
                  type="reset"
                >
                  Reset
                </button>
                <button
                  className="outline outline-1 text-black bg-green-500 rounded-sm p-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
