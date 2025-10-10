"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";
import { FaCode, FaRobot, FaChartLine } from "react-icons/fa";
import naveen from "@/public/naveen.jpg";
import ParticleContainer from "@/components/particle-container";

const roleData = [
  {
    icon: <FaCode className="text-4xl text-green-400" />,
    title: "Software Engineer",
    description:
      "I build robust and scalable web applications, focusing on creating seamless user experiences from front-end to back-end. My expertise lies in modern frameworks and clean, efficient code.",
    link: "/projects",
  },
  {
    icon: <FaChartLine className="text-4xl text-green-400" />,
    title: "Data Scientist",
    description:
      "I transform complex datasets into actionable insights. With a strong foundation in machine learning and statistical analysis, I enjoy uncovering patterns and building predictive models.",
    link: "/skills",
  },
  {
    icon: <FaRobot className="text-4xl text-green-400" />,
    title: "AI Engineer",
    description:
      "I specialize in developing intelligent systems and AI-driven solutions. From natural language processing to computer vision, I am passionate about pushing the boundaries of artificial intelligence.",
    link: "/experience",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <ParticleContainer />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Image
            src={naveen}
            alt="Naveen"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-green-400/50 shadow-lg mx-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Hi, I'm Naveen
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mt-4 h-16 md:h-20">
            <span>I'm a </span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Data Scientist",
                2000,
                "AI Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-green-400"
              repeat={Infinity}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 z-10"
        >
          <FiArrowDown className="text-3xl animate-bounce" />
        </motion.div>
      </section>

      {/* Role Sections */}
      <section className="w-full py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {roleData.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 p-8 rounded-xl shadow-lg border border-green-400/20 flex flex-col items-center text-center transition-all duration-300 hover:border-green-400/80 hover:scale-105"
            >
              <div className="mb-4">{role.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
              <p className="text-gray-400 mb-6">{role.description}</p>
              <Link
                href={role.link}
                className="mt-auto bg-green-500 text-gray-900 font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-green-400 hover:scale-110"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}