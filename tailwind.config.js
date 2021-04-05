const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",

      white: colors.white,
    },
    screens: {
      sm: "375px",
      md: "1024px",
    },
    fontFamily: {
      body: ["Poppins"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
