"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

export default function ExperiencePage() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
      <section className="mb-28 sm:mb-40 w-full mx-auto">
        <SectionHeading>My experience</SectionHeading>

        <VerticalTimeline animate={false} lineColor={theme === "light" ? "#A3B899" : "#34D399"}>
          {experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: theme === "light" ? "#f9f6ee" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: `1px solid ${theme === 'light' ? '#A3B899' : 'rgba(52, 211, 153, 0.2)'}`,
                padding: "1.5rem 2rem",
                borderRadius: "0.75rem",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #A3B899" : "0.4rem solid #34D399",
              }}
              date={item.date}
              dateClassName="text-light-text/70 dark:text-dark-text/70"
              iconStyle={{
                background: theme === "light" ? "#f9f6ee" : "#1A202C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${theme === 'light' ? '#A3B899' : 'rgba(52, 211, 153, 0.2)'}`,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                borderRadius: "0.5rem",
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
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                  {item.location}
                </p>
              </div>

              <ul className="mt-3 text-sm leading-relaxed text-light-text/80 dark:text-dark-text/80 list-disc pl-5">
                {item.descriptions.map((desc, descIndex) => (
                  <li key={descIndex} className="mb-1 last:mb-0">
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </main>
  );
}