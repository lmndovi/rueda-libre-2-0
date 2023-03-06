/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('/assets/home-bg.png')",
        "events-page": "url('/assets/events-bg.png')",
        "payment-page": "url('/assets/payment-bg.png')",
        "class-page": "url('/assets/classes-bg.png')",
      },
    },
  },
  plugins: [],
};
