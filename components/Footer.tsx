import React from "react";
import { Zap, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import Link from "next/link";

// المكون الرئيسي للتذييل
export default function Footer() {
  const phoneNumber = "201021094777"; // بدون +
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "About" },
    { href: "#work", label: "Our Work" },
    { href: "#price", label: "Pricing" },
  ];

  return (
    <footer className="relative w-full overflow-hidden min-h-[500px] flex items-center justify-center bg-background ">
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
        <div className="flex flex-col justify-between">
          <div className="lg:flex flex-row mt-4 gap-4 hidden ">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <Link
              aria-label="Linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/hussein-elsaeid-445032238/"
              className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg mt-4"
            >
              <Linkedin />
            </Link>
            <Link
              aria-label="Githup"
              target="_blank"
              href="https://github.com/HusseinSaeid"
              className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg mt-4"
            >
              <Github />
            </Link>
            <Link
              aria-label="WhatsApp"
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
