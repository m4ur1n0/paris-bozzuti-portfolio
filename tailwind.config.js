/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,jsx}",
        "./src/components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          app_white: "var(--background)",
          app_black: "var(--foreground)",
        },
      },
    },
    plugins: [],
  }
  