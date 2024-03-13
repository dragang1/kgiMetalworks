/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBg': '	#FAF9F6',
        'mainOrange': '#EDA415',
        'headingColor': '#1B5A7D',
        'textColor': '#3A3A3A',
        'textWhite': '#fff'
      },
      fontFamily: {
        oswald: ["Oswald", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

