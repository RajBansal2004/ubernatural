"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticCursor from "./components/MagneticCursor";
import OurWorksSection from "./components/OurWorksSection";
import WorkFrame from "./components/WorkFrame";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Instagram } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};


const fadeUpDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});


export default function Page() {
  const line1 = "We Design Websites".split("");
  const line2 = "That Raise Rounds".split("");

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ================= Cursor ================= */}
      <MagneticCursor />

      {/* ================= Navbar ================= */}
      <motion.nav
        variants={fadeUp}
        initial="hidden"
        animate="show"
className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 "
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="font-medium">ubernatural</span>
        </div>

        <div className="flex items-center gap-4">
         <button className="h-10 w-10 rounded-full flex items-center justify-center 
  bg-white/10 text-white 
  hover:bg-white/20 transition backdrop-blur-md">
  ◎
</button>

<button className="h-10 w-10 rounded-full flex items-center justify-center 
  bg-white/10 text-white 
  hover:bg-white/20 transition backdrop-blur-md">
  <Instagram size={18} />
</button>
          <button className="rounded-full bg-white px-5 py-2 text-black text-sm font-medium">
            Get in touch
          </button>
        </div>
      </motion.nav>

      {/* ================= Floating Top Images ================= */}
      <Image
        src="/bitcon.png"
        alt=""
        width={240}
        height={100}
        className="absolute  z-20 top-14 left-20 hidden lg:block brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition duration-500"
      />

      <Image
        src="/moder.png"
        alt=""
        width={200}
        height={120}
        className="absolute  z-20 top-0 left-1/2 -translate-x-1/2 hidden lg:block brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition duration-500"
      />

      <Image
        src="/sand-club.png"
        alt=""
        width={240}
        height={170}
        className="absolute  z-20 top-16 right-12 hidden lg:block brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition duration-500"
      />

      {/* ================= Center Content ================= */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Brand */}
        <motion.div
          variants={fadeUpDelay(0.2)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 mt-40"
        >
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="font-medium">ubernatural</span>
        </motion.div>

        {/* ================= Heading Typing ================= */}
        <h1 className="mt-2 max-w-5xl text-4xl md:text-6xl lg:text-6xl leading-tight">
          <div>
            {line1.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.06 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div>
            {line2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: (line1.length + i) * 0.06,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* ================= Paragraph ================= */}
        <motion.p
          variants={fadeUpDelay(1.3)}
          initial="hidden"
          animate="show"
          className="mt-3 max-w-xl text-sm md:text-base text-white/60"
        >
          Need the best design in the shortest timeframe?
          <br />
          There’s no one who does this better than us.
        </motion.p>

        {/* ================= Buttons ================= */}
        <motion.div
  variants={fadeUpDelay(1.5)}
  initial="hidden"
  animate="show"
  className="mt-10 flex gap-4"
>
  {/* ===== Button 1 ===== */}
  <button className="group relative overflow-hidden rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105">
    <span className="relative block h-[1.25em] overflow-hidden">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        Let’s work
      </span>
      <span className="absolute left-0 top-full block w-full transition-transform duration-300 group-hover:-translate-y-full">
        Let’s work
      </span>
    </span>
  </button>

  {/* ===== Button 2 ===== */}
  <button className="group relative overflow-hidden rounded-full  px-7 py-3 font-medium text-white transition hover:bg-white/10">
    <span className="relative block h-[1.25em] overflow-hidden">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        How it works →
      </span>
      <span className="absolute left-0 top-full block w-full transition-transform duration-300 group-hover:-translate-y-full">
        How it works →
      </span>
    </span>
  </button>
</motion.div>


        {/* ================= Bottom Overlapping Images ================= */}
        <motion.div
          variants={fadeUpDelay(1.8)}
          initial="hidden"
          animate="show"
          className="relative hidden lg:flex w-full justify-between px-8"
        >
          {/* Left stack */}
          <div className="relative w-[280px] h-[220px]">
            <Image
              src="/cryptocurrency.png"
              alt=""
              width={280}
              height={200}
              className="absolute top-6 left-0 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition"
            />
            <Image
              src="/bitcon.png"
              alt=""
              width={260}
              height={180}
              className="absolute top-0 left-20 z-10 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition"
            />
          </div>

          {/* Right stack */}
          <div className="relative w-[280px] h-[220px]">
            <Image
              src="/sand-club.png"
              alt=""
              width={280}
              height={200}
              className="absolute top-6 right-0 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition"
            />
            <Image
              src="/formula-x.png"
              alt=""
              width={260}
              height={180}
              className="absolute top-0 right-20 z-10 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition"
            />
          </div>
        </motion.div>
      </div>
      <OurWorksSection />
      <WorkFrame/>
      <ContactSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
