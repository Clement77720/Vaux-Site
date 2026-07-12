import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E4",
        creamDeep: "#EDE4CC",
        navy: "#1B2740",
        navySoft: "#24344F",
        gold: "#B8935A",
        goldLight: "#D8C193",
        brown: "#3B2A1A",
        ink: "#1C1912",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-garamond)", "serif"],
        ui: ["var(--font-jost)", "sans-serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
