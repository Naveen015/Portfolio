"use client";

import React, { useRef } from "react";
import SectionHeading from "@/components/section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { achievementsData } from "@/lib/data";

export default function AchievementsPage() {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <main className="flex flex-col items-center px-4">
      <motion.section
        ref={element}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="mb-20 sm:mb-28 max-w-3xl mx-auto"
      >
        <SectionHeading>Scholastic Achievements</SectionHeading>

        <div className="mt-6 space-y-4">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start justify-between gap-4 p-4 sm:p-6 rounded-xl border border-light-primary/20 dark:border-dark-primary/20 bg-light-background/70 dark:bg-dark-background/70 backdrop-blur-md shadow-sm transition hover:shadow-lg hover:bg-light-background/90 dark:hover:bg-dark-background/90"
            >
              <p className="text-light-text dark:text-dark-text/80 text-sm sm:text-base">
                {item.description}
              </p>
              <span className="text-sm text-light-text/70 dark:text-dark-text/70 whitespace-nowrap absolute top-4 right-4 sm:static sm:ml-auto">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}