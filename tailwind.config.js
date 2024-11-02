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
    },
  },
  plugins: [],
};
