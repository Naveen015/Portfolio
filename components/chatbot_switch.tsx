"use client";

import { useState, useEffect  } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import type { Message } from "@/lib/types";

export default function ChatSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);;
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  // Add default message when chat is opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Welcome to NaviBot! I'm an AI assistant trained to answer questions about Naveen Prashanna. Ask me anything you'd like to know. I will try to answer them to my knowledge",
        },
      ]);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("https://naveen-chatbot-api.onrender.com/query", {
        // Replace this URL with your actual backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();

      const botMessage: Message = { sender: "bot", text: data.answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: "bot", text: "Error connecting to chat." }]);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-20 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleChat}
      >
        <IoChatbubbleOutline />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-10 w-[20rem] max-h-[30rem] bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700">
          <div className="p-3 font-semibold border-b border-gray-200 dark:border-gray-600">
            NaviBot
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-blue-100 self-end text-right dark:bg-blue-500" : "bg-gray-100 dark:bg-gray-500 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-200 dark:border-gray-600 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-1 rounded-l border border-gray-300 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
