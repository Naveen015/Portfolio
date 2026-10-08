"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFile, FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import naveen from "@/public/naveen.jpg";
import type { Message } from "@/lib/types";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  // Switchable inference model state: default is local LLM ("vllm")
  const [provider, setProvider] = useState<"vllm" | "openai">("openai");

  useEffect(() => {
    // Background ping to wake up Render's server
    fetch("https://naveen-chatbot-api.onrender.com/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "Hi", provider: "openai" }),
    }).catch((err) => {
      console.warn("Chatbot ping failed (probably cold start)", err);
    });
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setChatOpen(true);
    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setAnimatedText("");

    try {
      const res = await fetch("https://naveen-chatbot-api.onrender.com/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input, provider: provider }),
      });

      const data = await res.json();
      const fullText = data.answer;

      setLoading(false);
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedText(prev => {
          const nextChar = fullText.charAt(index);
          index++;
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
          if (index >= fullText.length) {
            clearInterval(interval);
            setMessages(prev => [...prev, { sender: "bot", text: fullText }]);
            setAnimatedText("");
          }
          return prev + nextChar;
        });
      }, 20);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Error connecting to chat." }
      ]);
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
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
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {!chatOpen && (
        <div className="flex flex-col items-center justify-center ">
          <motion.h3
            className="mb-10 mt-4 px-0 sm:px-4 text-xl font-small !leading-[1.5] sm:text-3xl dark:text-white max-w-[60rem] mx-auto text-justify"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I'm Naveen, a passionate computer scientist specializing in Intelligent Systems.</span> I'm currently pursuing a <span className="font-bold">Master of Science in Computer Science</span> at <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">The University of Texas - Dallas</a> building upon my strong educational foundation from the <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">Indian Institute of Technology Madras (IIT-M)</a>, where I earned a Bachelor + Master of Technology degree in Mechanical Engineering with a Minor in Artificial Intelligence and Machine Learning.
          </motion.h3>

          <motion.div
            className="flex items-center justify-between w-[90%] sm:w-[38rem] h-[3.25rem] my-8 rounded-full border border-white border-opacity-50 bg-white/10 dark:bg-black/20 shadow-xl backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 px-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask me anything..."
              className="flex-1 h-full px-3 text-base sm:text-lg font-medium text-gray-800 dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
            />
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as "vllm" | "openai")}
              className="mr-2 text-xs px-2.5 py-1.5 rounded-full bg-white/40 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 outline-none cursor-pointer hover:bg-white/60 dark:hover:bg-white/20 transition font-medium"
            >
              <option value="vllm" className="text-black bg-white dark:bg-gray-800 dark:text-white">Local LLM (7B)</option>
              <option value="openai" className="text-black bg-white dark:bg-gray-800 dark:text-white">OpenAI (GPT-4)</option>
            </select>
            <button
              onClick={sendMessage}
              className="h-[2.5rem] px-5 text-white rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </motion.div>
        </div>
      )}

      {chatOpen && (
        <motion.div className="w-full max-w-4xl mx-auto px-4 py-10" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="w-full h-[25rem] shadow-xl rounded-xl overflow-hidden border border-black dark:border-white border-opacity-30 dark:bg-black/20 backdrop-blur">
            <div className="flex items-center justify-between p-4 border-b border-black/20 dark:border-white/20 dark:border-gray-600 text-gray-900 dark:text-white font-semibold text-lg bg-gray-200 dark:bg-black/30">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">NaviBot</span>
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value as "vllm" | "openai")}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/50 dark:bg-white/10 text-gray-900 dark:text-gray-100 border border-gray-400 dark:border-gray-600 outline-none cursor-pointer hover:bg-white/70 dark:hover:bg-white/20 transition font-medium"
                >
                  <option value="vllm" className="text-black bg-white dark:bg-gray-800 dark:text-white">Local LLM (vLLM 7B)</option>
                  <option value="openai" className="text-black bg-white dark:bg-gray-800 dark:text-white">OpenAI (GPT-4)</option>
                </select>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-sm px-2 py-1 rounded hover:bg-white/20 dark:hover:bg-black/20 transition"
                aria-label="Close chat"
              >✕</button>
            </div>

            <div ref={containerRef} className="p-4 text-sm text-white" style={{ maxHeight: "16rem", overflowY: "auto", scrollBehavior: "smooth" }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`inline-block my-1 px-4 py-2 max-w-[75%] rounded-xl text-sm break-words text-left ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"}`}>{msg.text}</div>
                </div>
              ))}
              {animatedText && (
                <div className="flex justify-start">
                  <div className="inline-block my-1 px-4 py-2 rounded-xl text-sm max-w-[75%] break-words text-left shadow-md bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
                    {animatedText}<span className="animate-pulse">▍</span>
                  </div>
                </div>
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="inline-block my-1 px-4 py-2 rounded-xl text-sm text-left bg-gray-300 text-black dark:bg-gray-600 dark:text-white animate-pulse">...</div>
                </div>
              )}
            </div>

            <div className="px-4 py-3 border-white/10 dark:border-gray-700 bg-transparent">
              <div className="flex items-center justify-between w-full h-[3.25rem] rounded-full border border-white border-opacity-50 bg-gray-200 dark:bg-black/20 shadow-xl backdrop-blur-md px-2 sm:px-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Ask me anything..."
                  className="flex-1 h-full px-4 text-sm sm:text-sm font-medium text-gray-800 dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
                />
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value as "vllm" | "openai")}
                  className="mr-2 text-xs px-2.5 py-1.5 rounded-full bg-white/50 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 outline-none cursor-pointer hover:bg-white/70 dark:hover:bg-white/20 transition font-medium"
                >
                  <option value="vllm" className="text-black bg-white dark:bg-gray-800 dark:text-white">Local LLM (7B)</option>
                  <option value="openai" className="text-black bg-white dark:bg-gray-800 dark:text-white">OpenAI (GPT-4)</option>
                </select>
                <button
                  onClick={sendMessage}
                  className="h-[2.5rem] px-5 text-white rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <a className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40" href="https://naveen015.github.io/Resume/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <span className="opacity-70">Resume</span>
          <FaFile className="opacity-70" />
        </a>
        <a className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40" href="https://github.com/Naveen015", target="_blank", rel="noopener noreferrer">
          <span className="opacity-70">GitHub</span>
          <FaGithub className="opacity-70" />
        </a>
        <a className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40" href="https://www.linkedin.com/in/naveen015/", target="_blank", rel="noopener noreferrer">
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
