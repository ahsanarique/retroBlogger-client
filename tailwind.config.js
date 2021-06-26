module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
      colors: {
        nav: "#264653",
        button: "#2a9d8f",
        main: "#e9c46a",
        hover: "#f4a261",
        heading: "#e76f51",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
