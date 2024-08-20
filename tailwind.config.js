/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aderoLight: ["Light"],
        AderoRegular: ["Regular"],
        AderoBold: ["Bold"],
        AderoExtraBold: ["Ultrabold"],

        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
