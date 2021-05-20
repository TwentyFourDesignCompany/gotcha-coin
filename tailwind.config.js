module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "rgba(29,22,255,0.3)",
        main: "#1d16ff",
      },
      secodary: {
        main: "#ff8e00",
        light: "#fee37f",
      },
      white: {
        main: "#ffffff",
        light: "#eeeeee",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
