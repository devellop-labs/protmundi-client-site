import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      mobile: "0px",
      sm: "720px",
      md: "960px",
      lg: "1366px", // For desktops or larger (desktop default)
      xl: "1920px",
    },
    extend: {
      colors: {
        default_bg: "#ffffff",
        dark_bg: "#002646",
        dark: "#093a58",
        light_bg: "#dbeaf6",
        medium_bg: "#006c9e",
        primary_hover: "#09a5ed",
        primary: "#018fd1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        button: "0px 16px 12px rgba(0,0,0,0.35)", // Custom drop-shadow for buttons
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
