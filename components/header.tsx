"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // Normalize pathname to remove trailing slash if it exists
  const normalizedPathname = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  return (
    <motion.nav
      className="fixed top-0 left-1/2 h-auto -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 z-[999]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-light-text/60 sm:w-auto sm:flex-nowrap sm:gap-5 dark:text-dark-text/60 rounded-none border border-light-primary/40 bg-light-background/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-dark-background/75 dark:border-dark-primary/40 px-4 sm:px-8 py-2">
        {links.map((link) => (
          <li
            className="h-3/4 flex items-center justify-center relative"
            key={link.hash}
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
                  className="bg-light-primary/50 rounded-full absolute inset-0 -z-10 dark:bg-dark-primary/50"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
