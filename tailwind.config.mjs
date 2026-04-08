import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4F4F4",
        ink: "#1D3557",
        accent: "#E63946",
        gold: "#F1C40F",
        sun: "#F49E1A",
        line: "#D7DFEA"
      },
      fontFamily: {
        sans: ["'Open Sans'", "system-ui", "sans-serif"],
        display: ["'Montserrat'", "'Open Sans'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(29, 53, 87, 0.10)",
        soft: "0 8px 24px rgba(29, 53, 87, 0.08)"
      },
      maxWidth: {
        prose: "72ch"
      }
    }
  },
  plugins: [typography]
};
