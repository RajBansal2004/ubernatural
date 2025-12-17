"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do you consider my preferences?",
    a: "We carefully analyze your goals, brand tone, and references before starting the design process.",
  },
  {
    q: "Can I make changes after launch?",
    a: "Yes, we offer post-launch support and revisions depending on your selected plan.",
  },
  {
    q: "Do you work faster than 24 hours?",
    a: "In some cases, yes. Rush delivery options are available on request.",
  },
  {
    q: "What if I need a more complex website?",
    a: "No problem. We handle complex, scalable projects tailored to your business needs.",
  },
  {
    q: "Do you provide hosting and a domain?",
    a: "We can assist you in setting up hosting and domains, or work with your existing provider.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-black text-white px-6 md:px-16 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h2 className="text-5xl md:text-6xl font-medium leading-tight">
            Questions?
          </h2>
          <h3 className="text-5xl md:text-6xl font-medium text-white/40 mt-2">
            Answers.
          </h3>

          <p className="mt-6 max-w-sm text-white/60 text-sm leading-relaxed">
            Find the answers you need to confidently navigate and succeed with UX DAO.
          </p>
        </div>

        {/* ===== RIGHT FAQ ===== */}
        <div className="divide-y divide-white/10">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div key={i} className="py-6">
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg md:text-3xl font-medium">
                    {item.q}
                  </span>
                  <span className="text-2xl font-light">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
