"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { achievementsData } from "@/lib/data";

export default function Achievements() {
  const { ref } = useSectionInView("Achievements");
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      id="achievements"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-20 sm:mb-28 scroll-mt-28 max-w-3xl mx-auto"
    >
      <SectionHeading>Scholastic Achievements</SectionHeading>

      <div className="mt-6 space-y-4">
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start justify-between gap-4 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-sm transition hover:shadow-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <p className="text-gray-800 dark:text-white/80 text-sm sm:text-base">
              {item.description}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap absolute top-4 right-4 sm:static sm:ml-auto">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
