/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#d49e4a",
        cyan: "#37abb4",
        teal: "#7ed2bb",
        dark: "#585252",
      },
      padding: {
        section: "50px 20px 40px 20px"
      }
    },
  },
  plugins: [],
};
