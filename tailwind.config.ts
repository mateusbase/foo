import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      "lato-thin": ["Lato", "sans-serif"],
      "lato-light": ["Lato", "sans-serif"],
      "lato-regular": ["Lato", "sans-serif"],
      "lato-bold": ["Lato", "sans-serif"],
      "lato-black": ["Lato", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        xl2: "1472px",
      },
      fontSize: {
        "title-xl": "3.875rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "260": "16.25rem",
      },
      width: {
        "260": "16.25rem",
      },
      colors: {
        primary: "#007D77",
        secondary: "#6328B4",
        darkGray: "#5C5C5C",
        lightGray: "#707070",
        white: "#FFFFFF",
        background: "#FFFFFF",
        purpleDark: "#473067",
        purpleLight: "#8E60CD",
        purpleAccent: "#B799E6",
        purpleMedium: "#8459BE",
        greenDark: "#034E4A",
        aquaLight: "#D6FFFD",
        "primary-foreground": "#00B6AD",
        "secondary-foreground": "#BA99E7",
        "gray-foreground": "#F0F0F0",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      themes: {
        light: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
};

export default config;
