"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/bitcon.png",
  "/cryptocurrency.png",
  "/sand-club.png",
  "/formula-x.png",
];

export default function CursorImageReveal() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastIndex = 0;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX + 24, y: e.clientY + 24 });

      lastIndex = (lastIndex + 1) % images.length;
      setIndex(lastIndex);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", () => setVisible(true));
    window.addEventListener("mouseleave", () => setVisible(false));

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.9,
      }}
      transition={{ duration: 0.25 }}
      style={{
        left: pos.x,
        top: pos.y,
      }}
      className="pointer-events-none fixed z-[60] w-[220px]"
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={images[index]}
          alt=""
          width={220}
          height={160}
          className="rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
