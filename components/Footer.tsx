import React from "react";
import { Zap, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import Link from "next/link";

// المكون الرئيسي للتذييل
export default function Footer() {
  const phoneNumber = "201021094777"; // بدون +

  return (
    <footer className="relative w-full overflow-hidden min-h-[500px] flex items-center justify-center bg-background ">
      {/* العنصر الزخرفي (يفترض أنه SVG) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 ">
        {/*
          هنا يتم تضمين شفرة SVG للعنصر الزخرفي.
          يمكن استبدال هذا بعنصر SVG أو مكون React SVG.
          مثال: <DecorativeSVGComponent className="w-[300px] h-[300px]" />
        */}
      </div>

      {/* البطاقة المثلجة المركزية */}
      <div className="w-[90%] p-10 flex flex-col lg:flex-row justify-between md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white/60 dark:bg-black/60 shadow-[var(--shadow-elevation)] rounded-xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
              <Zap className="w-4 h-4 text-white dark:text-black" />
            </div>
            <h1 className="text-2xl font-bold ">FasterUI</h1>
          </div>
          <p>
            Ready to elevate your online presence? <br /> Contact us today to
            discuss your project <br /> and discover how we can bring your
            vision to life.
          </p>
        </div>
        <div>
          <div className="lg:flex flex-row mt-10 gap-4 hidden ">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>How it Works</h2>
            <h2>Services</h2>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hussein-elsaeid-445032238/"
              className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg mt-4"
            >
              <Linkedin />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/HusseinSaeid"
              className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg mt-4"
            >
              <Github />
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg mt-4"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
