import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#22C55E',
          'primary-dark': '#16A34A',
          'primary-light': '#86EFAC',
          secondary: '#3B82F6',
          'secondary-dark': '#2563EB',
          'secondary-light': '#93C5FD',
          orange: '#F59E0B',
          yellow: '#FACC15',
          danger: '#EF4444',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        card: '0 15px 35px -5px rgba(34, 197, 94, 0.08)',
        float: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
