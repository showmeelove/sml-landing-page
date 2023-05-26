/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
      fontFamily: {
        Eina01Bold: ["Eina01-Bold", "sans-serif"],
        EinasemiBold: ["EinasemiBold", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
