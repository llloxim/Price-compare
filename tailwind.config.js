/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightyellow: "#fefae0",
        lightbrown: "#dda15e",
        darkbrown: "#bc6c25",
        darkgreen: "#606c38",
      },
    },
    fontFamily: {
      sans: ["Comic Sans MS", "sans-serif"],
    },
  },
  plugins: [],
};
