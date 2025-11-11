/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0b0d12",   // fond sombre NOOR
        gold: "#f5c542",    // accent or NOOR
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(245,196,66,0.18), 0 8px 40px rgba(245,196,66,0.08)",
      },
      backgroundImage: {
        halo: "radial-gradient(60% 60% at 50% 30%, rgba(245,196,66,0.15) 0%, rgba(245,196,66,0.04) 30%, rgba(0,0,0,0) 70%)",
      },
    },
  },
  plugins: [],
};
