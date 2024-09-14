/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#363636",
        button1: "#2f2f2f",
        button1hover: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
