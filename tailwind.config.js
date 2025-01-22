/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        black: "0px 0px 5px rgba(1, 1, 255, 0.8)",
        hoverBlack: "0px 0px 7px rgba(1, 1, 255, 0.3)",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/line-clamp"),
  ],
};
