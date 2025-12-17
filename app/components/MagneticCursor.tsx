"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isWhiteBg, setIsWhiteBg] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });

      // detect background color
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      const bg = window.getComputedStyle(el).backgroundColor;
      setIsWhiteBg(bg === "rgb(255, 255, 255)");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      animate={{
        x: mouse.x - 22,
        y: mouse.y - 22,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 22,
        mass: 0.5,
      }}
    >
      {/* Cursor */}
      <div
        className={`flex items-center justify-center rounded-full
          ${isWhiteBg ? "bg-black text-white" : "bg-white text-black"}
        `}
        style={{
          width: 20,
          height: 20,
        }}
      >
      </div>
    </motion.div>
  );
}
