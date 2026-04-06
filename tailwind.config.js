/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svg}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e1919',
        accent: '#0061fe',
        'standard-text': '#1e1919',
        'faint-text': 'rgba(82, 74, 62, 0.82)',
        'attention-text': '#0061fe',
        'standard-bg': '#ffffff', 
        'faint-bg': '#f7f5f2',
        'inverse-standard-text': '#f7f5f2',
        'inverse-faint-text': 'hsl(36deg 24% 96% / 60%)',
        'inverse-attention-text': '#3984ff',
        'button-hover-bg': '#0057e5',
        'secondary-hover': '#ebe9e6'
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        grotesk: ['grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
