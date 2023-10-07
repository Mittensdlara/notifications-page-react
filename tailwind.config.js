/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
 White: 'hsl(0, 0%, 100%)',
 VeryLightGrayishBlue: 'hsl(210, 60%, 98%)',
 LightGrayishBlue1: 'hsl(211, 68%, 94%)',
 LightGrayishBlue2: 'hsl(205, 33%, 90%)',
 GrayishBlue: 'hsl(219, 14%, 63%)',
 DarkGrayishBlue: 'hsl(219, 12%, 42%)',
 VeryDarkBlue: 'hsl(224, 21%, 14%)',
    },
  },
},
  plugins: [],
}