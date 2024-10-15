/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        textDecoration: ["hover"],
        colors: {
          primary: "#B88E2F",
          secondary: {
            100: '#F9F1E7',
            200: "#FAF3EA",
          },
        },
      },
    },
    plugins: [],
  };