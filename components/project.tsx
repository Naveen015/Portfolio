"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons?: readonly string[];
  imageUrl?: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const iconsArray = icons ?? [];

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative dark:text-white dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 hover:shadow-lg transition-all duration-200">
        <div className={`flex flex-col lg:flex-row ${imageUrl ? "lg:pr-10" : ""}`}>
          <div className={`px-6 py-8 ${imageUrl ? "lg:w-1/2" : "w-full"}`}>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>

            {iconsArray.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gray-500 dark:text-white/70">Made with:</span>
                {iconsArray.map((icon, iconIndex) => (
                  <Icon key={iconIndex} icon={icon} className="text-2xl opacity-90" />
                ))}
              </div>
            )}

            <p className="leading-relaxed text-gray-700 dark:text-white/70 mb-6">{description}</p>

            <div className="flex flex-wrap gap-3">
              {urlLink && (
                <a
                  href={urlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111827] text-white py-2 px-4 rounded-full hover:scale-105 transition-transform"
                >
                  <BiLinkExternal /> Live
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111827] text-white py-2 px-4 rounded-full hover:scale-105 transition-transform"
                >
                  <AiFillYoutube /> Demo
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#111827] dark:border-white dark:text-white py-2 px-4 rounded-full hover:scale-105 transition-transform text-[#111827] dark:border-opacity-40"
                >
                  <AiFillGithub className="opacity-70" />
                  <span className="opacity-70">GitHub</span>
                </a>
              )}
            </div>
          </div>

          {imageUrl && (
            <div className="relative lg:absolute top-6 right-6 hidden lg:block">
              <Image
                src={imageUrl}
                alt="Project image"
                quality={95}
                className="w-[28rem] rounded-xl shadow-2xl transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:rotate-[-2deg]"
              />
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
