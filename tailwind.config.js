/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EDEFE6',
          panel: '#FFFFFF',
          line: '#C9CFC1',
        },
        ink: {
          DEFAULT: '#14201B',
          muted: '#4B594F',
        },
        bench: {
          DEFAULT: '#0F1613',
          panel: '#171F1B',
          line: '#2A342E',
        },
        mist: {
          DEFAULT: '#E9EDE6',
          muted: '#8FA39A',
        },
        copper: {
          DEFAULT: '#C1622B',
          bright: '#E8934A',
        },
        signal: {
          DEFAULT: '#1E7F72',
          bright: '#46C9B0',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        grid: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
