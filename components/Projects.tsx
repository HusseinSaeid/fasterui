"use client";

import Carousel from "./ui/carousel";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Projects() {
  const [current, setCurrent] = useState(1);

  const slideData = [
    {
      src: "/project-1.jpg",
    },
    {
      src: "/project-2.jpg",
    },
    {
      src: "/project-3.jpg",
    },
  ];
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  return (
    <div className="w-full">
      <div className="">
        <div className="flex flex-row justify-center gap-8 md:gap-16">
          <button
            aria-label="Previous slide"
            onClick={handlePreviousClick}
            className="hidden  bg-white dark:bg-black rounded-xl shadow-[var(--shadow-elevation)] cursor-pointer lg:flex justify-center items-center p-1 focus:outline outline-blue-500"
          >
            <ArrowLeft size={32} />
          </button>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center font-raleway">
            Check Our Work
          </h2>
          <button
            aria-label="Next slide"
            onClick={handleNextClick}
            className="hidden bg-white dark:bg-black rounded-xl shadow-[var(--shadow-elevation)] cursor-pointer lg:flex justify-center items-center p-1 focus:outline outline-blue-500"
          >
            <ArrowRight size={32} />
          </button>
        </div>
        <p className="text-center mt-4 text-black dark:text-white">
          Take a look at some of our recent projects to see how we have helped
          <br /> businesses like yours succeed online
        </p>
      </div>
      <div className="mt-10">
        <Carousel
          slides={slideData}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
}
