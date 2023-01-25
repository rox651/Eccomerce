/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         keyframes: {
            upAndDown: {
               "0%": { transform: "translateY(5%)" },
               "100%": { transform: "translateY(-5%)" },
            },
         },
         animation: {
            upAndDown: "upAndDown 2.5s ease-in-out infinite alternate",
         },
      },
   },
   plugins: [],
};
