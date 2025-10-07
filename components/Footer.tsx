"use client";

import React from "react";
import { Zap, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const phoneNumber = "201021094777";
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "About" },
    { href: "#work", label: "Our Work" },
    { href: "#price", label: "Pricing" },
  ];

  return (
    <footer className="relative w-full bg-background py-12 flex justify-center">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between gap-10 p-8 bg-white/60 dark:bg-black/60 shadow-[var(--shadow-elevation)] rounded-xl">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
              <Zap className="w-4 h-4 text-white dark:text-black" />
            </div>
            <h1 className="text-2xl font-bold">FasterUI</h1>
          </div>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Ready to elevate your online presence? <br />
            Contact us today to discuss your project <br />
            and discover how we can bring your vision to life.
          </p>
        </div>

        {/* Links desktop only */}
        <div className="hidden lg:flex flex-row gap-4 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-blue-500 text-gray-700 dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-row justify-center lg:justify-start items-center gap-4 mt-4 lg:mt-0">
          <Link
            aria-label="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/hussein-elsaeid-445032238/"
            className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg transition-transform duration-200"
          >
            <Linkedin />
          </Link>
          <Link
            aria-label="Github"
            target="_blank"
            href="https://github.com/HusseinSaeid"
            className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg transition-transform duration-200"
          >
            <Github />
          </Link>
          <Link
            aria-label="WhatsApp"
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            className="bg-[#F5F8FF] dark:bg-[#111827] hover:scale-110 h-12 w-12 flex justify-center items-center rounded-lg transition-transform duration-200"
          >
            <FaWhatsapp size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
