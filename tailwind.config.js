/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary:{
          light: 'white',
          dark: 'dark',
        },
        secondary:{
          light: 'white',
          dark: 'dark',        
        },
        "darkMode": "#614b83"
      }
    },
  },
  plugins: [],
}

