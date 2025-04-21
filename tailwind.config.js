/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#751B1B',
        secondary: '#1E1E1E',
        background: '#EFEFEF',
        // Couleurs pour le thème admin Stripe (sombre)
        admin: {
          dark: {
            DEFAULT: '#0A0A0A',
            lighter: '#1A1A1A',
            accent: '#2C2F36',
            accent2: '#3C3F45',
            highlight: '#6366F1',
          },
          text: {
            DEFAULT: '#E5E7EB',
            muted: '#9CA3AF',
            accent: '#6366F1',
          },
          // Couleurs pour le thème admin clair
          light: {
            DEFAULT: '#F9FAFB',
            darker: '#F3F4F6',
            accent: '#E5E7EB',
            accent2: '#D1D5DB',
            highlight: '#6366F1',
          },
          textLight: {
            DEFAULT: '#111827',
            muted: '#4B5563',
            accent: '#6366F1',
          }
        }
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
      fontFamily: {
        heading: ['Arial Black', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        admin: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'admin': '0.375rem',
      },
      boxShadow: {
        'admin': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'admin-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}