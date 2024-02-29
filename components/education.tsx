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
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={utdLogo} alt="UTD" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Master of Science
          </p>
          <p>University of Texas at Dallas</p>
          <p className="mt-1">Expected Graduation: May 2025</p>
          <p className="my-1">GPA 3.56/4</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
            <li>Specialization in Intelligent Systems</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={iitmLogo} alt="IITM" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Bachelor + Master of Technology (Dual Degree)
          </p>
          <p>Indian Institute of Technology Madras</p>
          <p className="mt-1">Graduated in July 2022</p>
          <p className="my-1">GPA 3.24/4</p>
          <ul className="list-disc pl-6">
            <li>Major in Mechanical Engineering</li>
            <li>Minor in Artificial Intelligence / Machine Learning</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
