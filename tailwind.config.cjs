module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#030305',
        'neon': '#0a6eff',
        'card-bg': 'rgba(10,12,18,0.5)',
        'muted': '#9aa0a6'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}

