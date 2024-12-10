"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import me from "../../../public/me.jpg";
import { Input } from "postcss";

const Contact: React.FC = () => {


  return (
    <>
      <div className="px-6 py-10 h-full w-full bg-black lg:flex-row flex-col flex lg:justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold pb-2">
            CONTACT <a className="text-green-500">ME </a>
          </h1>
          <div className="text-justify">
            Do you have a project idea or just want to say hello? Feel free to
            reach out! I am always open to new opportunities and collaborations.
          </div>
        </div>
        <div className="bg-gray-900  lg:w-1 h-1 lg:h-full"></div>
        <div className="bg-gray-900  lg:w-1/2 h-1/2 lg:h-full p-11 text-justify">
          <div>
            Or simply fill out the contact form below, and I will get back to
            you as soon as possible!
          </div>
          <div className="mt-5">
            <form className="flex flex-col gap-2" id="emailForm">
              <div className="flex flex-row gap-5 justify-between">
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
                  className="outline outline-1 text-green-500 bg-black rounded-sm p-1" type="reset"
                >
                  Reset
                </button>
                <button className="outline outline-1 text-black bg-green-500 rounded-sm p-1" type="submit">
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
