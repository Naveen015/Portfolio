"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFile } from "react-icons/fa";
import naveen from "@/public/naveen.jpg";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <section className="mb-16 sm:mb-28 text-center pt-28 pb-14 sm:pt-36 sm:pb-18 w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={naveen}
                alt="Naveen portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-gray-700 dark:border-white shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-0 sm:px-4 text-xl font-small !leading-[1.5] sm:text-3xl dark:text-white max-w-[60rem] mx-auto text-justify"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Naveen, a passionate computer scientist specializing in Intelligent Systems.</span> I'm currently pursuing a{" "}
          <span className="font-bold">Master of Science in Computer Science</span> at{" "}
          <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">The University of Texas - Dallas</a>{" "}
          building upon my strong educational foundation from the{" "}
          <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">Indian Institute of Technology Madras (IIT-M)</a>,
          where I earned a Bachelor + Master of Technology degree in Mechanical Engineering with a Minor in Artificial Intelligence and Machine Learning.
        </motion.h1>

        <motion.div
          className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
            href="/NaveenPrashanna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="opacity-70">Resume</span>
            <FaFile className="opacity-70" />
          </a>
          <a
            className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
            href="https://github.com/Naveen015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="opacity-70">GitHub</span>
            <FaGithub className="opacity-70" />
          </a>
          <a
            className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
            href="https://www.linkedin.com/in/naveen015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="opacity-70">LinkedIn</span>
            <BsLinkedin className="opacity-70" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}