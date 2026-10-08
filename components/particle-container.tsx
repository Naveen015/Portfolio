"use client";

import React, { useCallback, useMemo } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/context/theme-context";

const ParticleContainer: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles.js loaded");
    },
    []
  );

  const options = useMemo(() => ({
    background: {
      color: {
        value: theme === "dark" ? "#111827" : "#f9fafb",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: { opacity: 1 },
        },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    fullScreen: { enable: false },
    particles: {
      color: {
        value: theme === "dark" ? "#ffffff" : "#0f172a",
      },
      links: {
        color: theme === "dark" ? "#ffffff" : "#0f172a",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "bounce" as const },
        random: false,
        speed: 2,
        straight: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      size: {
        value: 2,
        random: true,
      },
    },
    detectRetina: true,
  }), [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default React.memo(ParticleContainer);
