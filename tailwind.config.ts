import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        violet: "#3A00A5",
        pink: "#231F20",
        magenta: "#FF0077",
        orange: "#FF5F33",
        lilac: "#8770FF",
        cyan: "#00E1EE",
        yellow: "#FFE819",
      },
    },
  },
  plugins: [],
};
export default config;
