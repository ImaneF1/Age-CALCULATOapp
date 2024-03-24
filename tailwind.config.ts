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
      textColor: {
        "grayish": "#9495A5",
        lightGray: "#D1D2DA",
        dark: "#494C6B",
        active: "#3A7CFD"
      },
      fontSize: {
        "title": "2rem",
        regular: "1rem",
        small: "1.17rem"
      },
      borderColor: {
        grayish: "#D1D2DA",
      },
    },
  },
  plugins: [],
};
export default config;
