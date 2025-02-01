module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#499DEA",
        accent: "#F6A055",
        background: "#FFFFFF",
        text: "#1F1F1F",
      },
      fontFamily: {
        "noto-sans-arabic": ["var(--font-noto-sans-arabic)"],
      },
    },
  },
  plugins: [],
}

