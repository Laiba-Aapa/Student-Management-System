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
        lmsSky: "#C3EBFA",
        lmsSkyLight: '#EDF9FD',
        lmsPurple: '#CFCEFF',
        lmsPurpleLight: '#f1f0ff',
        lmsYellow: '#fae27c',
        lmsYellowLight: '#fefce8',
        lmsDarkSky: "rgb(63 121 143);",
        lmsDarkYellow: "rgb(224 193 57)",
        lmsDarkPurple : "rgb(124 123 176)"

      
      }
    },
  },
  plugins: [],
};
export default config;
