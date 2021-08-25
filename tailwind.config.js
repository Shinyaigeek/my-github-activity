module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.svelte"],
  },
  darkMode: "media",
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
      blue: "#1DA1F2"
    },
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
