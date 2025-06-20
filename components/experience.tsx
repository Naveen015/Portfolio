"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-screen-xl mx-auto">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor={theme === "light" ? "#e5e7eb" : "#334155"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: theme === "light"
                ? "1px solid rgba(0, 0, 0, 0.05)"
                : "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1.5rem 2rem",
              borderRadius: "0.75rem",
              textAlign: "left",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.3)",
            }}
            date={item.date}
            iconStyle={{
              background: theme === "light" ? "#fff" : "#1f2937",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: theme === "light"
                ? "1px solid #e5e7eb"
                : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              borderRadius: "0.5rem", // 👈 Makes it a square with rounded corners (or remove for hard square)
            }}
            icon={
              <Image
                src={item.company_icon}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
            }
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.location}
              </p>
            </div>

            <ul className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white/75 list-disc pl-5">
              {item.descriptions.map((desc, descIndex) => (
                <li key={descIndex} className="mb-1 last:mb-0">
                  {/* Remove the leading "• " if your data consistently has it,
                      otherwise, the list-disc will add one. */}
                  {desc.startsWith("• ") ? desc.substring(2) : desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
