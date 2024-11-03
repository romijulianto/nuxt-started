/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", "sans-serif"],
        mono: ["Roboto Mono Variable", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
