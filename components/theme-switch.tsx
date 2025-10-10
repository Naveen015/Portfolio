"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-light-background/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-light-primary/50 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-dark-background/80 dark:border-dark-primary/50"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="text-dark-gray" />
      ) : (
        <BsMoon className="text-cream" />
      )}
    </button>
  );
}
