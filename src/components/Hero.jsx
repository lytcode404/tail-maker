import React, { useState } from "react";
import TabsTimeline from "./TabsTimeline";
import Image from "next/image";
const Hero = () => {
  const totalTabs = 3;
  const [activeTab, setActiveTab] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBackClick = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleNextClick = () => {
    if (activeTab < totalTabs) {
      setActiveTab(activeTab + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <section className="relative bg-[#1d2363]  py-10 sm:py-16 lg:py-24">
      <Image
        src={`/illustration2.gif`}
        alt=""
        height={500}
        width={500}
        className="h-60 w-auto absolute bottom-40 right-0 z-0"
      />
      <Image
        src={`/illustration1.gif`}
        alt=""
        height={500}
        width={500}
        className="h-80 w-auto absolute bottom-0 right-0 z-0"
      />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              A social media for learners
            </p>
            <h1 className="mt-4 text-7xl font-bold text-white lg:mt-8 ">
              Drive growth at scale for your brand.
            </h1>
            <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl">
              Grow your career fast with right mentor.
            </p>
            <a
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              href="#"
            >
              <span>Join Us </span>
              <span className="w-fit">
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <TabsTimeline />
        </div>
      </div>
    </section>
  );
};

export default Hero;
