"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFile, FaPaperPlane } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
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
  const [provider, setProvider] = useState<"vllm" | "openai">("openai");

  useEffect(() => {
    fetch("https://naveen-chatbot-api.onrender.com/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "Hi", provider: "openai" }),
    }).catch((err) => {
      console.warn("Chatbot ping failed", err);
    });
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, animatedText, loading]);

  const sendMessageWithText = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    setChatOpen(true);
    const userMessage: Message = { sender: "user", text: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setAnimatedText("");

    const formattedHistory = messages.map((m) => ({
      role: m.sender === "user" ? "user" : "assistant",
      content: m.text,
    }));

    try {
      const res = await fetch("https://naveen-chatbot-api.onrender.com/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: textToSend, provider: provider, history: formattedHistory }),
      });

      const data = await res.json();
      const fullText = data.answer || "Sorry, I could not process your request.";

      setLoading(false);
      let index = 0;
      const chunkSize = 5;
      const interval = setInterval(() => {
        setAnimatedText((prev) => {
          const nextChunk = fullText.slice(index, index + chunkSize);
          index += chunkSize;
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
          if (index >= fullText.length) {
            clearInterval(interval);
            setMessages((prev) => [...prev, { sender: "bot", text: fullText }]);
            setAnimatedText("");
          }
          return prev + nextChunk;
        });
      }, 10);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to chat service." },
      ]);
      setLoading(false);
    }
  };

  const sendMessage = () => sendMessageWithText(input);

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

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Naveen Prashanna.</span> I&apos;m an{" "}
        <span className="font-bold">AI / Machine Learning Engineer</span> with{" "}
        <span className="font-bold">3+ years of experience</span> in building production AI/ML systems across quantitative finance, generative AI & browser automation.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <button
          onClick={() => {
            setChatOpen(true);
            if (messages.length === 0) {
              sendMessageWithText("Hi");
            }
          }}
          className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition shadow-lg border border-white/20 font-semibold cursor-pointer"
        >
          <span>Chat with NaviBot (AI)</span>
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </button>
      </motion.div>

      {!chatOpen && (
        <div className="w-full max-w-4xl mx-auto px-4 mb-8">
          <motion.div
            className="flex items-center justify-between w-full h-[3.5rem] rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 shadow-xl backdrop-blur-md px-3 sm:px-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
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
              placeholder="Ask me anything about Naveen's experience, skills, projects..."
              className="flex-1 h-full px-3 text-sm sm:text-base font-medium text-gray-800 dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
            />
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as "vllm" | "openai")}
              className="mr-2 text-xs px-2.5 py-1.5 rounded-full bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 outline-none cursor-pointer hover:bg-white/80 dark:hover:bg-white/20 transition font-medium"
            >
              <option value="openai" className="text-black bg-white dark:bg-gray-800 dark:text-white">OpenAI (GPT-4o-mini)</option>
              <option value="vllm" className="text-black bg-white dark:bg-gray-800 dark:text-white">Local LLM (7B)</option>
            </select>
            <button
              onClick={sendMessage}
              className="h-[2.5rem] px-5 text-white rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </motion.div>
        </div>
      )}

      {chatOpen && (
        <motion.div
          className="w-full max-w-4xl mx-auto px-4 py-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-full shadow-2xl rounded-2xl overflow-hidden border border-gray-300/60 dark:border-gray-700/60 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl flex flex-col text-left">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-gray-800 bg-gray-100/80 dark:bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs shadow">
                  🤖
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-gray-900 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900 dark:text-white leading-none">NaviBot</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">AI Assistant</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Trained on Naveen&apos;s records & projects</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value as "vllm" | "openai")}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 outline-none cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition font-medium"
                >
                  <option value="openai" className="text-black bg-white dark:bg-gray-800 dark:text-white">OpenAI (GPT-4o-mini)</option>
                  <option value="vllm" className="text-black bg-white dark:bg-gray-800 dark:text-white">Local LLM (7B)</option>
                </select>

                <button
                  onClick={() => { setMessages([]); setAnimatedText(""); }}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition font-medium"
                  title="Clear messages"
                >
                  Clear
                </button>

                <button
                  onClick={() => setChatOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition text-xs font-bold"
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips if clean */}
            {messages.length === 0 && !loading && (
              <div className="p-4 border-b border-gray-200/50 dark:border-gray-800/50 bg-blue-50/40 dark:bg-blue-950/20">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Suggested Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tell me about Naveen's work at Pharvision",
                    "What ML & AI projects has Naveen built?",
                    "What is Naveen's education background?",
                    "Tell me about the browser AI work at Kahana Group"
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessageWithText(chip)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs transition-all duration-200 text-left cursor-pointer"
                    >
                      💡 {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Body */}
            <div
              ref={containerRef}
              className="p-4 text-sm space-y-3.5 bg-gray-50/50 dark:bg-black/20 min-h-[16rem] max-h-[24rem] overflow-y-auto scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 items-start ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow shrink-0 mt-0.5">
                      🤖
                    </div>
                  )}

                  <div
                    className={`inline-block px-4 py-3 max-w-[85%] rounded-2xl text-sm break-words ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-xs shadow-md"
                        : "bg-white dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 rounded-tl-xs shadow-sm border border-gray-200 dark:border-gray-700/80"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <p className="m-0 text-white font-medium leading-relaxed">{msg.text}</p>
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-sm">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside my-2 space-y-1 text-sm pl-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside my-2 space-y-1 text-sm pl-1">{children}</ol>,
                          li: ({ children }) => <li className="my-0.5 text-gray-800 dark:text-gray-200">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
                          code: ({ children }) => <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-900 font-mono text-xs text-blue-600 dark:text-blue-400">{children}</code>,
                          a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:opacity-80">{children}</a>
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gray-700 dark:bg-gray-600 text-white flex items-center justify-center text-xs font-bold shadow shrink-0 mt-0.5">
                      👤
                    </div>
                  )}
                </div>
              ))}

              {animatedText && (
                <div className="flex gap-2.5 items-start justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div className="inline-block px-4 py-3 max-w-[85%] rounded-2xl rounded-tl-xs text-sm break-words shadow-sm bg-white dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700/80">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-sm">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside my-2 space-y-1 text-sm pl-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside my-2 space-y-1 text-sm pl-1">{children}</ol>,
                        li: ({ children }) => <li className="my-0.5 text-gray-800 dark:text-gray-200">{children}</li>,
                        strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
                      }}
                    >
                      {animatedText}
                    </ReactMarkdown>
                    <span className="inline-block w-2 h-4 ml-1 bg-blue-600 animate-pulse align-middle rounded-xs" />
                  </div>
                </div>
              )}

              {loading && !animatedText && (
                <div className="flex gap-2.5 items-start justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div className="inline-block px-4 py-2.5 rounded-2xl rounded-tl-xs text-sm bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700/80 shadow-xs">
                    <span className="inline-flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-3.5 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <div className="flex items-center justify-between w-full h-[3.25rem] rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100/70 dark:bg-black/30 px-3 shadow-inner focus-within:border-blue-500 dark:focus-within:border-blue-400 transition">
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
                  placeholder="Ask NaviBot anything about Naveen..."
                  className="flex-1 h-full px-3 text-sm font-medium text-gray-800 dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="h-[2.3rem] px-5 text-white rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center font-medium shadow-xs cursor-pointer"
                >
                  <FaPaperPlane className="text-xs mr-1" /> Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://naveen015.github.io/Resume/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">Resume</span>
          <FaFile className="opacity-70" />
        </a>
        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
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
  );
}
