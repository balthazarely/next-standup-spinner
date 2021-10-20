module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        tonic: {
          dark: "#282E44",
          light: "white",
          grey: "#F0F0F0",
          base: "#880064",
          baseDark: "#68004c",
          baseLight: "#b20082",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
