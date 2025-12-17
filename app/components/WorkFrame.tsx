"use client";

import Image from "next/image";

const works = [
  {
    image: "/sand-club.png",
    title: "Stop Searching",
    year: "2024",
  },
  {
    image: "/bitcon.png",
    title: "Diamante",
    year: "2023",
  },
   {
    image: "/sand-club.png",
    title: "Stop Searching",
    year: "2024",
  },
  {
    image: "/bitcon.png",
    title: "Diamante",
    year: "2023",
  },
];

export default function WorkFrame() {
  return (
    <section className="relative px-6 md:px-12 py-20">
      {/* ===== Works Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {works.map((work, i) => (
          <div key={i} className="group w-full">
            {/* ===== Frame ===== */}
            <div className="relative overflow-hidden border border-white/15 py-40 px-15">
              <Image
                src={work.image}
                alt={work.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* ===== Bottom Info ===== */}
            <div className="mt-3 flex items-center justify-between text-sm text-white/70">
              <span className="uppercase tracking-wide font-medium">
                {work.title}
              </span>
              <span>{work.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
