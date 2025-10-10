"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

export default function SkillsPage() {
  return (
    <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
      <section
        className="mb-28 max-w-[58rem] text-center sm:mb-40"
      >
        <SectionHeading>My Skills</SectionHeading>
        <motion.ul
          className="flex flex-wrap justify-center gap-2 text-lg text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <li
              className="flex flex-col items-center px-4 py-3"
              key={index}
            >
              <Image src={skill.icon} alt={skill.name} className="text-5xl md:text-7xl" height="64" width="64" />
              <span className="mt-2 text-pretty">{skill.name}</span>
            </li>
          ))}
        </motion.ul>
      </section>
    </main>
  );
}