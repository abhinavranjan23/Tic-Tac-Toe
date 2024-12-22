/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      cream: "#F1DDBF",
      hgree: "#78938A",
      ngreen: "#92BA92",
      tgray: "#525E75",
    },
    extend: {
      animation: {
        hflip: "flipHorizontal 3s ",
        texthid: "hidetext 3s",
      },
      keyframes: {
        flipHorizontal: {
          "0%": { transform: "rotateY(180deg)" },
        },
        hidetext: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
