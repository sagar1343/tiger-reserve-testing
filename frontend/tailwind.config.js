/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        '8': '8',
      },
      colors: {
        'green-1': '#002C33',
        'yellow-1': '#F5B206',
      },
      screens: {
        mmd: '657px',
        lg: '920px',
      },
      backgroundImage: {
        'home-banner': "url('/src/assets/tigerBanner.png')",
        'footer-gradient': "url('/src/assets/footerGradient.webp')",
        'gallery-banner': "url('/src/assets/peacockBanner.webp')",
        'about-banner': "url('/src/assets/aboutBanner.webp')",
        'safari-banner-1': "url('/src/assets/safariBanner1.png')",
        'safari-banner-2': "url('/src/assets/safariBanner2.webp')",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp'), function ({ addUtilities }) {
    addUtilities({
      '.line-clamp-8': {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '8',
      },
    })
  },],
})
