/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4CAC40",
        primaryHover:"#398A2F",
        primaryActive:"#2F6D28",
        primary2:"#EB662B",
        text_primary:"#0A0A0A",
        text_secondary:"#7C7C86"
      }
    },
  },
  plugins: [],
}