/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#038C4B",
        primaryOrange: "#F5821F",
        greendark: "#04502C",
        whiteopacity: "rgba(255, 255, 255, 0.75)",
      },
      maxWidth: {
        containerMax: "1160px",
      },
      boxShadow: {
        'shadowlg': '10px -7px rgb(242, 242, 242, 0.5)'
      }
    },
  },
  plugins: [],
};
