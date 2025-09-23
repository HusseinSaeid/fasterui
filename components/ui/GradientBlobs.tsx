"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GradientBlobs() {
  const [theme, setTheme] = useState("light");

  // مثال لتبديل الوضع، ممكن تحط toggle فعلي
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "dark" : "light");
  }, []);

  const blendClass =
    theme === "dark" ? "mix-blend-overlay" : "mix-blend-screen";

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ background: `var(--background)` }}
    >
      {/* Circle blob */}
      <motion.div
        className={`absolute w-[1200px] h-[1200px] top-1/4 left-1/4 bg-gradient-to-r from-[#9403FD] to-[#00ADFE] rounded-full blur-[180px] rotate-[-10deg] ${blendClass}`}
        animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Oval blob */}
      <motion.div
        className={`absolute w-[1000px] h-[600px] top-1/3 left-1/2 bg-gradient-to-r from-[#00ADFE] to-[#9403FD] rounded-[50%/40%] blur-[150px] rotate-[20deg] ${blendClass}`}
        animate={{ x: [30, -30, 30], y: [-20, 20, -20] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rounded rectangle */}
      <motion.div
        className={`absolute w-[800px] h-[400px] top-2/3 left-1/5 bg-gradient-to-l from-[#FF12DC] to-[#FFB912] rounded-[30%] blur-[180px] rotate-[5deg] ${blendClass}`}
        animate={{ x: [-40, 40, -40], y: [20, -20, 20] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slanted stripe */}
      <motion.div
        className={`absolute w-[200px] h-[1200px] top-1/2 left-2/3 bg-gradient-to-t from-[#FFB912] to-[#FF12DC] blur-[150px] rotate-[-25deg] ${blendClass}`}
        animate={{ x: [20, -20, 20], y: [-50, 50, -50] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small accent circle */}
      <motion.div
        className={`absolute w-[400px] h-[400px] top-3/4 left-1/2 bg-gradient-to-r from-[#9403FD] to-[#00ADFE] rounded-full blur-[120px] rotate-[0deg] ${blendClass}`}
        animate={{ x: [-25, 25, -25], y: [-15, 15, -15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
