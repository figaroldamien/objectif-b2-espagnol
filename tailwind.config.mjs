import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F7F1E8",
        ink: "#1F2A37",
        accent: "#B45309",
        olive: "#566246",
        line: "#E5D8C7"
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "system-ui", "sans-serif"],
        display: ["'Fraunces'", "Georgia", "serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(31, 42, 55, 0.08)"
      },
      maxWidth: {
        prose: "72ch"
      }
    }
  },
  plugins: [typography]
};
