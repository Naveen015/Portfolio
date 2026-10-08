"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import utdLogo from "@/public/utd-Logo.png";
import iitmLogo from "@/public/iitm-Logo.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="flex flex-col gap-6 mt-6">

        {/* UTD Card */}
        <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/20 hover:shadow-lg">
          <Image src={utdLogo} alt="UTD" width={120} className="object-contain" />
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Master of Science in Computer Science
            </h3>
            <p className="text-gray-700 dark:text-white/80">University of Texas at Dallas</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-white/60">Graduated in May 2025</p>
            <p className="mb-2 text-sm text-gray-600 dark:text-white/60">GPA: 3.55 / 4.00</p>
            <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-white/70 space-y-1">
              <li>MS Computer Science</li>
              <li>Specialization in Intelligent Systems</li>
            </ul>
          </div>
        </div>

        {/* IITM Card */}
        <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/20 hover:shadow-lg">
          <Image src={iitmLogo} alt="IITM" width={120} className="object-contain" />
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dual Degree: B.Tech + M.Tech in Mechanical Engineering
            </h3>
            <p className="text-gray-700 dark:text-white/80">Indian Institute of Technology Madras</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-white/60">Graduated in July 2022</p>
            <p className="mb-2 text-sm text-gray-600 dark:text-white/60">GPA: 3.62 / 4.00</p>
            <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-white/70 space-y-1">
              <li>Major in Mechanical Engineering</li>
              <li>Minor in AI & Machine Learning</li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
