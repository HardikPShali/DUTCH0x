/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: { "100": "#f7f7f7", "200": "#efefef" },
        gray: { "100": "rgba(0, 0, 0, 0.5)", "200": "rgba(0, 0, 0, 0.7)" },
        hotpink: "#ef4fad",
        "primary-black100": "#000",
        mediumorchid: "#a74cc9",
        darkturquoise: "#2ec4da",
        gold: "#f5d72e",
        "primary-black20": "rgba(0, 0, 0, 0.2)",
        "primary-black60": "rgba(0, 0, 0, 0.6)",
        "primary-orange": "#ff4800",
        gainsboro: "rgba(217, 217, 217, 0.1)",
        "primary-white801": "rgba(255, 255, 255, 0.8)",
        "primary-black101": "rgba(0, 0, 0, 0.1)",
        "primary-white1001": "#fff",
      },
      fontFamily: { "p-xsmall1": "Satoshi", inter: "Inter" },
      borderRadius: { base: "25px" },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "30px",
    },
  },
  corePlugins: { preflight: false },
};
