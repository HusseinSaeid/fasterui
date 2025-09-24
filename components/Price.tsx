"use client";

import { Check, MoveRight } from "lucide-react";

const features = [
  "Unlimited requests",
  "Unlimited revisions",
  "24/7 Support",
  "Dedicated designer",
  "Fast turnaround",
  "Cancel anytime",
];

export default function Price() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main Grid Section */}
      <div className="grid lg:grid-cols-2 grid-flow-row auto-rows-min gap-10 max-w-6xl w-full ">
        {/* Section Title */}
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug font-raleway text-black dark:text-white mb-6 text-center md:text-left">
            Pricing
          </h1>
          <p className="text-[#8987A1] dark:text-[#C0BFE0] leading-relaxed text-center md:text-left">
            Take a look at some of our recent projects <br />
            to see how we have helped businesses <br /> like yours succeed
            online.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white dark:bg-black shadow-[var(--shadow-elevation)] rounded-xl row-span-2 p-6 gap-4 lg:gap-0 flex flex-col">
          <h2 className="font-raleway text-black dark:text-white font-bold text-3xl mb-4">
            Unlimited Services
          </h2>
          <p className="text-[#8987A1] dark:text-[#C0BFE0] mb-6">
            Take a look at some of our recent projects to see how <br />
            we have helped businesses like yours succeed online.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {features.map((item, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <div className="border-2 border-black dark:border-white rounded-full flex justify-center items-center h-6 w-6">
                  <Check className="dark:text-white text-black" size={16} />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="w-full bg-[#F5F8FF] dark:bg-[#111827] p-4 flex justify-between items-center mt-auto  rounded-lg">
            <div>
              <span className="font-bold text-5xl">$3,250</span>/mo
            </div>
            <MoveRight />
          </div>
        </div>

        {/* Meeting Card */}
        <div className="bg-white dark:bg-black shadow-[var(--shadow-elevation)] rounded-xl p-6 flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-bold leading-snug">
            Let’s Schedule <br /> a Meeting
          </h1>
          <button className="mt-6 h-12 w-48 bg-blue-700 hover:bg-blue-800 transition text-white cursor-pointer rounded-[20px]">
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
