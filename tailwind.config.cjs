/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          600: '#0d6efd',
          700: '#0b5ed7',
          800: '#0a58ca'
        },
        quality: {
          premium: {
            50: '#faf8f5',
            100: '#ede6d6',
            200: '#ddd0b8',
            400: '#c4a035',
            500: '#a3842a',
            600: '#856d22',
            700: '#6b571c',
            800: '#4a3d14',
            900: '#2c2410',
          },
          standard: {
            50: '#f8fafc',
            100: '#e8edf3',
            200: '#cbd5e1',
            400: '#8b9cb3',
            500: '#64748b',
            600: '#4a6178',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          economy: {
            50: '#f2f9f8',
            100: '#d5ebe8',
            200: '#a8d4ce',
            400: '#3d9a8f',
            500: '#2a7a71',
            600: '#226660',
            700: '#1a524e',
            800: '#143f3c',
            900: '#0d2a28',
          },
        },
      }
    },
  },
  plugins: [],
};

