/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               colors: { primary: "#25282C", text: "#ABAEBB" },
          },
     },
     plugins: [],
};
