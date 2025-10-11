"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const normalizedPathname = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-light-background bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-auto sm:rounded-full dark:bg-dark-background dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-light-text/50 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-dark-text/50">
          {links.map((link) => (
            <motion.li
              className="h-full flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-light-text transition dark:hover:text-dark-text",
                  {
                    "text-light-text dark:text-dark-text":
                      normalizedPathname === link.hash,
                  }
                )}
                href={link.hash}
              >
                {link.name}

                {normalizedPathname === link.hash && (
                  <motion.span
                    className="bg-light-primary/20 rounded-full absolute inset-0 -z-10 dark:bg-dark-primary/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}