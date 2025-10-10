/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F9F6EE", // cream
          text: "#1A202C",
          primary: "#A3B899", // sage green
        },
        dark: {
          background: "#1A202C", // dark gray
          text: "#F9F6EE",
          primary: "#34D399", // vibrant green
        },
        cream: "#F9F6EE",
        sage: "#A3B899",
        "dark-gray": "#1A202C",
        "brand-green": "#34D399",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
