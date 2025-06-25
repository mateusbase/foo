import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      lato: ["Lato", "sans-serif"],
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
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        xl2: "1472px",
        "3xl": "1903px",
      },
      fontSize: {
        "title-lg": "40px",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 300ms ease-out",
        "accordion-up": "accordion-up 300ms ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [
    // eslint-disable-next-line
    require("tailwindcss-animate"),
  ],
};

export default config;
