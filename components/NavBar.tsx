"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Zap, Menu, X } from "lucide-react";

interface NavBarProps {
  className?: string;
}

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#price", label: "Pricing" },
];

export default function NavBar({ className }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      // نستخدم متغير مؤقت لتحديد القسم النشط
      let currentActive = "#home";

      links.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            currentActive = link.href;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`sticky top-0 z-50 w-full px-4 md:px-24 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 shadow-[var(--shadow-elevation)] py-2"
          : "bg-transparent py-4"
      } ${className || ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
            <Zap className="w-4 h-4 text-white dark:text-black" />
          </div>
          <h1 className="text-2xl font-bold">FasterUI</h1>
        </div>

        {/* Desktop nav */}
        <nav
          className={`hidden lg:flex gap-12 items-center p-4 ${
            scrolled
              ? ""
              : "bg-white/60 dark:bg-black/60 border shadow-[var(--shadow-elevation)] border-white dark:border-black rounded-[20px] box-border"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ease-in-out hover:text-blue-500 ${
                activeSection === link.href
                  ? "text-blue-500 font-semibold"
                  : "text-black dark:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
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

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 z-50 flex flex-col lg:hidden bg-white/90 dark:bg-black/90 border shadow-[var(--shadow-elevation)] border-white dark:border-black rounded-[20px] px-6 py-4 gap-4 backdrop-blur mt-2"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors duration-200 ease-in-out hover:text-blue-500 ${
                    activeSection === link.href
                      ? "text-blue-500 font-semibold"
                      : "text-black dark:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
