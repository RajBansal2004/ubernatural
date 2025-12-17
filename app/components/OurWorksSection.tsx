"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const worksImages = [
  "/bitcon.png",
  "/cryptocurrency.png",
  "/sand-club.png",
  "/formula-x.png",
];

type TrailItem = {
  id: number;
  src: string;
  x: number;
  y: number;
};

export default function OurWorksSection() {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [active, setActive] = useState(false);

  const indexRef = useRef(0);
  const lastAdd = useRef(0);
  const idRef = useRef(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastAdd.current < 120) return;

    lastAdd.current = now;

    const img = worksImages[indexRef.current];
    indexRef.current = (indexRef.current + 1) % worksImages.length;

    const newItem: TrailItem = {
      id: idRef.current++,
      src: img,
      x: e.clientX + 24,
      y: e.clientY + 24,
    };

    setTrail((prev) => [...prev.slice(-2), newItem]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== newItem.id));
    }, 1800);
  };

  return (
    <section
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
        setTrail([]);
      }}
      onMouseMove={handleMove}
      className="relative z-20 px-8"
    >
        <h2 className="text-xl md:text-xl font-medium tracking-tight border-b border-white/10">
         Works
      </h2>
      {/* ================= TOP ROW ================= */}
      <div className="grid grid-cols-12 items-start gap-8">
        
        {/* ===== Left Empty Box ===== */}
        <div className="col-span-12 md:col-span-7">
          <div className="h-24 " />
        </div>

        {/* ===== Right Text ===== */}
        <div className="col-span-12 md:col-span-5 p-20">
          <p className="text-sm  leading-relaxed text-white/60">
            Don’t waste weeks waiting — get your website up and running within 24 hours.
            Contact us today and join businesses that trust us for fast, reliable, and professional web development.
          </p>
        </div>
      </div>

      {/* ================= BIG HEADING ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-[14vw] md:text-[20vw] leading-none font-medium tracking-tight"
      >
        Our Works
      </motion.h2>

      {/* ================= Cursor Image Trail ================= */}
      <AnimatePresence>
        {active &&
          trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                left: item.x,
                top: item.y,
              }}
              className="pointer-events-none fixed z-[80] w-[240px]"
            >
              <Image
                src={item.src}
                alt=""
                width={240}
                height={160}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </section>
  );
}
