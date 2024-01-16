/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: { max: "419px" },
      xxsm:  "419px",
      sm: "650px",
      // => @media (min-width: 640px) { ... }

      md: "980px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // tablet: "1000px",
      // // => @media (min-width: px) { ... }

      // laptop: "1024px",
      // // => @media (min-width: 1024px) { ... }

      // desktop: "1280px",
      // // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

