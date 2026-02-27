import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8edf2',
          100: '#ccd6df',
          200: '#a8b8c7',
          300: '#7f96ab',
          400: '#516f86',
          500: '#0B1F33',
          600: '#0a1c2e',
          700: '#091829',
          800: '#081522',
          900: '#060f19',
        },
        secondary: {
          50: '#edf5f8',
          100: '#dbeaf0',
          200: '#c0dbe5',
          300: '#9ec5d3',
          400: '#77acbe',
          500: '#4A90A4',
          600: '#3f7f91',
          700: '#356a79',
          800: '#2d5763',
          900: '#264a54',
        },
        accent: {
          50: '#f7fbfd',
          100: '#eef7fb',
          200: '#e2f1f8',
          300: '#d7ecf5',
          400: '#cfe8f2',
          500: '#C9E4F0',
          600: '#b5d3e0',
          700: '#9ebfcd',
          800: '#87a9b6',
          900: '#6f8c97',
        },
        neutral: {
          50: '#f4f7fa',
          100: '#e9eef3',
          200: '#d9e1e8',
          300: '#c0ccd8',
          400: '#8a99a9',
          500: '#5C6B7A',
          600: '#475868',
          700: '#334555',
          800: '#243646',
          900: '#1C2B3A',
        },
        surface: {
          light: '#F4F7FA',
          alt: '#E9EEF3',
          dark: '#162636',
        },
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
