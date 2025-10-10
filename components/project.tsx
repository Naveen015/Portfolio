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
      <section className="bg-light-background/70 max-w-[58rem] border border-light-primary/20 rounded-lg overflow-hidden sm:pr-8 relative dark:bg-dark-background/70 hover:bg-light-background/90 dark:hover:bg-dark-background/90 hover:shadow-lg transition-all duration-200">
        <div className={`flex flex-col lg:flex-row ${imageUrl ? "lg:pr-10" : ""}`}>
          <div className={`px-6 py-8 ${imageUrl ? "lg:w-1/2" : "w-full"}`}>
            <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">{title}</h3>

            {iconsArray.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="font-semibold text-light-text/70 dark:text-dark-text/70">Made with:</span>
                {iconsArray.map((icon, iconIndex) => (
                  <Icon key={iconIndex} icon={icon} className="text-2xl opacity-90 text-light-text dark:text-dark-text" />
                ))}
              </div>
            )}

            <p className="leading-relaxed text-light-text/80 dark:text-dark-text/80 mb-6">{description}</p>

            <div className="flex flex-wrap gap-3">
              {urlLink && (
                <a
                  href={urlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-light-primary text-light-background py-2 px-4 rounded-full hover:scale-105 transition-transform dark:bg-dark-primary dark:text-dark-background font-semibold"
                >
                  <BiLinkExternal /> Live
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-light-primary text-light-background py-2 px-4 rounded-full hover:scale-105 transition-transform dark:bg-dark-primary dark:text-dark-background font-semibold"
                >
                  <AiFillYoutube /> Demo
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-light-primary dark:border-dark-primary text-light-text dark:text-dark-text py-2 px-4 rounded-full hover:scale-105 transition-transform font-semibold"
                >
                  <AiFillGithub />
                  <span>GitHub</span>
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
