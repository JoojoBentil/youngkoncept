import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A9CF46',
          light: '#B8D96A',
          dark: '#8FB32E',
        },
        secondary: {
          DEFAULT: '#A7CD49',
          light: '#B6D86D',
          dark: '#8FB331',
        },
        text: {
          heading: '#FFFFFF',
          body: '#D9D9D9',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
