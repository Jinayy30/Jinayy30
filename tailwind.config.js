module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  //darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: ["hover", "focus"],
      opacity: ["disabled"],
      textColor: {
        primary: "#FF6A3D",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1A2238",
        secondary: "#FF6A3D",
        header: "#9DAAF2",
      }),
      
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
