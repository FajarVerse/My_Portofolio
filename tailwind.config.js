import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#023466",
        accent: "#E69500",
        dark: "#00071B",
        light: "#FFFFFF",
        second: "#F0F0F0",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [autoprefixer],
};
