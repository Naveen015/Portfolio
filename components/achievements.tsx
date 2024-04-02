"use client";

import React from "react";
import { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { achievementsData } from "@/lib/data"

export default function Achievements() {
    const { ref } = useSectionInView("Achievements");
    const element = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["0 1", "1.33 1"],
      });
      const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
      const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
      <motion.section
        id="achievements"
        ref={ref}
        style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        className="mb-20 sm:mb-28 scroll-mt-28"
      >
        <SectionHeading>Scholastic Achievements</SectionHeading>
        <div >
            {achievementsData.map((item, index) => (
            <React.Fragment key={index} >
                <ul className="flex flex-wrap mb-3 sm:mt-auto rounded-lg sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:hover:bg-white/20">
                    <p className="ml-2 mr-10">{item.description}</p>
                    <h4 className="absolute hidden lg:block -right-0 mr-2">{item.year}</h4>
                </ul>
            </React.Fragment>
            ))}

        </div>
        
      </motion.section>
    );
  }
  