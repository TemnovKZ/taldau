/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F3F5F9",
        },
        blacks: "#101317",
        grays: "#404245",
        indigo: "#311C7E"
      },
    },
  },
  plugins: [],
}

