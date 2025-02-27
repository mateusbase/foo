import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    safelist: [
      "data-[hover=true]:bg-primary",
      "data-[hover=true]:text-white",
      "data-[focus=true]:bg-primary",
      "data-[focus=true]:text-white",
      "data-[selected=true]:bg-primary",
      "data-[selected=true]:text-white",
      "aria-[selected=true]:bg-primary",
      "aria-[selected=true]:text-white",
    ],
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
        "custom-gradient-light":
          "linear-gradient(180deg, #00B6AD 0%, #00B6AD 25%, #B799E6 120%)",
        "custom-gradient-dark":
          "linear-gradient(180deg, #007D77 60%, #6328B4 125%, #B799E6 110%)",
        "custom-gradient-dark-145deg":
          "linear-gradient(145deg, #007D77 60%, #6328B4 125%, #B799E6 110%)",
        "custom-gradient-purple-145deg":
          "linear-gradient(145deg, #473067 60%, #8E60CD 125%, #B799E6 110%)",
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
        skyBlue: "#87A1D7",
        "primary-foreground": "#00B6AD",
        "secondary-foreground": "#BA99E7",
        "gray-foreground": "#F0F0F0",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
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
