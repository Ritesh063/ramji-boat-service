/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ganga: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        kashi: {
          gold: '#D4AF37',
          saffron: '#FF7722',
          maroon: '#800020',
          sunset: '#E65100',
          amber: '#F59E0B',
          deep: '#1E1B18',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'ghat-pattern': "radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
