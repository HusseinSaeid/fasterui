"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement | null>(null);
  const [underlineProps, setUnderlineProps] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  // Update underline position when page changes
  useEffect(() => {
    const updateUnderline = () => {
      const currentLink = navRef.current?.querySelector(
        `[data-path='${pathname}']`
      ) as HTMLElement | null;

      if (currentLink && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = currentLink.getBoundingClientRect();

        setUnderlineProps({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateUnderline, 50);

    // Also update on resize
    window.addEventListener("resize", updateUnderline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (open && !target.closest("nav")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <nav className="bg-black text-white px-8 py-4 rounded-lg shadow-[6px_6px_0px_white] flex items-center justify-between relative">
      {/* Logo */}
      <Link
        href="/"
        className="h-16 w-16 rounded-full border-2 border-black bg-[#FFDD55]
         hover:bg-white flex items-center justify-center ml-6 
         shadow-[4px_4px_0px_white] hover:shadow-[4px_4px_0px_#ffdd55] 
         transition-all duration-300 ease-in-out transform hover:scale-105
         text-black hover:text-[#ffdd55]"
        aria-label="Home - Logo"
      >
        <span className="text-4xl font-extrabold">H</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:block relative mr-6">
        <ul ref={navRef} className="flex gap-8 text-white text-3xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-path={link.href}
                className={`relative px-1 py-2 transition-colors duration-200 hover:text-[#FFDD55] rounded ${
                  pathname === link.href ? "text-[#FFDD55]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Animated Underline */}
        <motion.div
          className="absolute bottom-0 h-[3px] bg-[#FFDD55] rounded-full"
          layout
          animate={{
            left: underlineProps.left,
            width: underlineProps.width,
            opacity: underlineProps.width > 0 ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </div>

      {/* Mobile Button */}
      <button
        aria-label={open ? "Close Menu" : "Open Menu"}
        aria-expanded={open}
        className="md:hidden text-white text-3xl  rounded p-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <X /> : <Menu />}
        </motion.div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 right-4 bg-black text-white rounded-lg shadow-[6px_6px_0px_white] flex flex-col items-start p-4 space-y-2 md:hidden z-50 min-w-[160px]"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Link
                  href={link.href}
                  className={`block w-full transition-colors duration-200 px-3 py-2 rounded hover:bg-white hover:bg-opacity-10 ${
                    pathname === link.href
                      ? "text-[#c0a63c] font-extrabold border-b-2 border-[#FFDD55] bg-white bg-opacity-5"
                      : "hover:text-[#FFDD55]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
