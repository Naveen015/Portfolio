"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with email handler (EmailJS, Formspree, or API endpoint)
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center px-4">
      <motion.section
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-light-text/80 -mt-6 dark:text-dark-text/80 mb-6">
          You can reach out directly at{" "}
          <a className="underline hover:text-light-primary dark:hover:text-dark-primary" href="mailto:gnaveen1509@gmail.com">
            gnaveen1509@gmail.com
          </a>{" "}
          or leave me a message below:
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-light-primary/50 bg-light-background/80 dark:bg-dark-background/80 text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-light-primary/50 bg-light-background/80 dark:bg-dark-background/80 text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-light-primary/50 bg-light-background/80 dark:bg-dark-background/80 text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-light-primary text-light-text py-2 px-4 rounded-md hover:bg-opacity-90 transition dark:bg-dark-primary dark:text-dark-background font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </main>
  );
}