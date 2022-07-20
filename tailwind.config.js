module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",

      md: "670px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        ManRope: ["Manrope", "sans-serif"],
      },
      colors: {
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
