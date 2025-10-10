"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <motion.section
        className="mb-20 sm:mb-28"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SectionHeading>My projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </motion.section>
    </main>
  );
}