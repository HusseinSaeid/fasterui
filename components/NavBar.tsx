"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Zap, Menu, X } from "lucide-react";

interface NavBarProps {
  className?: string;
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#price", label: "Pricing" },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className={`transition-colors duration-200 ease-in-out hover:text-blue-500 
            ${index === 0 ? "text-blue-500" : "text-black dark:text-white"}`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export default function NavBar({ className }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full mt-8 px-4 md:px-24 relative ${className || ""}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
            <Zap className="w-4 h-4 text-white dark:text-black" />
          </div>
          <h1 className="text-2xl font-bold">FasterUI</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex bg-white/60 dark:bg-black/60 border shadow-[var(--shadow-elevation)] border-white dark:border-black rounded-[20px] box-border px-8 gap-12 py-4 items-center">
          <NavLinks />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
            className="lg:hidden text-3xl rounded p-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile nav floating above content */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 z-50 flex flex-col 
                       lg:hidden bg-white/80 dark:bg-black/80 border 
                       shadow-[var(--shadow-elevation)] border-white 
                       dark:border-black rounded-[20px] px-6 py-4 gap-4 backdrop-blur"
          >
            <NavLinks onClick={() => setOpen(false)} />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
