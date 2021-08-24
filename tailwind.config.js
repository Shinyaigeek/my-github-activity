module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#080708",
      white: "#faf5fa",
      gray: "#C6C6C6",
      indigo: "#4b0082",
      red: "#F26052",
      yellow: "#F2D544",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
