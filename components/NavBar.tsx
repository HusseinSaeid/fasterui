"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Zap, Menu, X } from "lucide-react";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "About" },
    { href: "#work", label: "Our Work" },
    { href: "#price", label: "Pricing" },
  ];

  return (
    <div className="w-full mt-8 px-4 md:px-24">
      {/* Logo + toggle */}
      <div className="flex items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
            <Zap className="w-4 h-4 text-white dark:text-black" />
          </div>
          <h1 className="text-2xl font-bold">FasterUI</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex bg-white/60 dark:bg-black/60 border shadow-[var(--shadow-elevation)] border-white dark:border-black rounded-[20px] box-border px-8 gap-12 py-4 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
            className="md:hidden text-3xl rounded p-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X /> : <Menu />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile nav unified style */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col mt-4 md:hidden bg-white/60 dark:bg-black/60 border shadow-[var(--shadow-elevation)] border-white dark:border-black rounded-[20px] px-6 py-4 gap-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#FFDD55]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </div>
  );
}
