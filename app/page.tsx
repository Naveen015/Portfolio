"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";
import { FaCode, FaRobot, FaChartLine, FaGithub, FaFile, FaPaperPlane } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import naveen from "@/public/naveen.jpg";
import ParticleContainer from "@/components/particle-container";
import type { Message } from "@/lib/types";
import { useState, useRef, useEffect } from "react";

const roleData = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Software Engineer",
    description:
      "I build robust and scalable web applications, focusing on creating seamless user experiences from front-end to back-end. My expertise lies in modern frameworks and clean, efficient code.",
    link: "/projects",
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Data Scientist",
    description:
      "I transform complex datasets into actionable insights. With a strong foundation in machine learning and statistical analysis, I enjoy uncovering patterns and building predictive models.",
    link: "/skills",
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: "AI Engineer",
    description:
      "I specialize in developing intelligent systems and AI-driven solutions. From natural language processing to computer vision, I am passionate about pushing the boundaries of artificial intelligence.",
    link: "/experience",
  },
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("https://naveen-chatbot-api.onrender.com/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "Hi" }),
    }).catch((err) => {
      console.warn("Chatbot ping failed (probably cold start)", err);
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, animatedText]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setChatOpen(true);
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setAnimatedText("");

    try {
      const res = await fetch("https://naveen-chatbot-api.onrender.com/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      const data = await res.json();
      const fullText = data.answer;
      setLoading(false);
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedText((prev) => {
          const nextChar = fullText.charAt(index);
          index++;
          if (index >= fullText.length) {
            clearInterval(interval);
            setMessages((prev) => [...prev, { sender: "bot", text: fullText }]);
            setAnimatedText("");
          }
          return prev + nextChar;
        });
      }, 20);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error connecting to chat." }]);
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center text-light-text dark:text-dark-text overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
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
            className="rounded-full object-cover border-4 border-light-primary/50 dark:border-dark-primary/50 shadow-lg mx-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold mt-6 text-light-text dark:text-dark-text">
            Hi, I'm Naveen
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mt-4 h-10 text-light-text dark:text-dark-text">
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
              className="text-light-primary dark:text-dark-primary"
              repeat={Infinity}
            />
          </div>
        </motion.div>

        {/* Chat Section */}
        <div className="relative z-10 w-full max-w-4xl mt-8">
          {!chatOpen ? (
            <motion.div
              className="flex items-center justify-between w-[90%] sm:w-[36rem] h-[3.25rem] mx-auto rounded-full border border-light-primary/50 dark:border-dark-primary/50 bg-light-background/50 dark:bg-dark-background/50 shadow-xl backdrop-blur-md hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 h-full px-5 text-base sm:text-lg bg-transparent outline-none placeholder-light-text/70 dark:placeholder-dark-text/70"
              />
              <button
                onClick={sendMessage}
                className="h-full px-5 text-light-text dark:text-dark-text rounded-full bg-light-primary/80 dark:bg-dark-primary/80 hover:bg-opacity-90 transition-all duration-300"
              >
                <FaPaperPlane className="text-lg" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="w-full shadow-xl rounded-xl overflow-hidden border border-light-primary/30 dark:border-dark-primary/30 bg-light-background/50 dark:bg-dark-background/50 backdrop-blur"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-light-primary/20 dark:border-dark-primary/20 font-semibold text-lg">
                <span>NaviBot</span>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-sm px-2 py-1 rounded hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition"
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
              <div
                ref={containerRef}
                className="p-4 text-sm"
                style={{ maxHeight: "20rem", overflowY: "auto", scrollBehavior: "smooth" }}
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`inline-block my-1 px-4 py-2 max-w-[75%] rounded-xl text-sm break-words text-left ${msg.sender === "user" ? "bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background" : "bg-light-background/80 dark:bg-dark-background/80"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {animatedText && (
                  <div className="flex justify-start">
                    <div className="inline-block my-1 px-4 py-2 rounded-xl text-sm max-w-[75%] break-words text-left bg-light-background/80 dark:bg-dark-background/80">
                      {animatedText}<span className="animate-pulse">▍</span>
                    </div>
                  </div>
                )}
                {loading && (
                  <div className="flex justify-start">
                    <div className="inline-block my-1 px-4 py-2 rounded-xl text-sm text-left bg-light-background/80 dark:bg-dark-background/80 animate-pulse">...</div>
                  </div>
                )}
              </div>
              <div className="px-4 py-3 border-t border-light-primary/20 dark:border-dark-primary/20">
                <div className="flex items-center justify-between w-full h-[3.25rem] rounded-full border border-light-primary/50 dark:border-dark-primary/50 bg-light-background/50 dark:bg-dark-background/50 shadow-xl backdrop-blur-md px-2 sm:px-4">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 h-full px-4 text-base sm:text-lg bg-transparent outline-none placeholder-light-text/70 dark:placeholder-dark-text/70"
                  />
                  <button
                    onClick={sendMessage}
                    className="h-[2.5rem] px-5 rounded-full bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background hover:bg-opacity-90 transition-all duration-300"
                  >
                    <FaPaperPlane className="text-lg" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium mt-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            className="group bg-light-background/70 dark:bg-dark-background/70 text-light-text dark:text-dark-text px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border border-light-primary/40 dark:border-dark-primary/40"
            href="/NaveenPrashanna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FaFile />
          </a>
          <a
            className="group bg-light-background/70 dark:bg-dark-background/70 text-light-text dark:text-dark-text px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border border-light-primary/40 dark:border-dark-primary/40"
            href="https://github.com/Naveen015"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaGithub />
          </a>
          <a
            className="group bg-light-background/70 dark:bg-dark-background/70 text-light-text dark:text-dark-text px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border border-light-primary/40 dark:border-dark-primary/40"
            href="https://www.linkedin.com/in/naveen015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <BsLinkedin />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 z-0"
        >
          <FiArrowDown className="text-3xl animate-bounce" />
        </motion.div>
      </section>

      {/* Role Sections */}
      <section className="w-full py-20 bg-light-background/50 dark:bg-dark-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {roleData.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-light-background/70 dark:bg-dark-background/70 p-8 rounded-xl shadow-lg border border-light-primary/20 dark:border-dark-primary/20 flex flex-col items-center text-center transition-all duration-300 hover:border-light-primary/80 dark:hover:border-dark-primary/80 hover:scale-105"
            >
              <div className="mb-4 text-light-primary dark:text-dark-primary">{role.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text">{role.title}</h3>
              <p className="text-light-text/70 dark:text-dark-text/70 mb-6">{role.description}</p>
              <Link
                href={role.link}
                className="mt-auto bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90 hover:scale-110"
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