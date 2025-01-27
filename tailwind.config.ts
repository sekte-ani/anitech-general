import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#5784B2',
        secondary: '#D5E1E9',
        black_ani: '#252525',
      },
      backgroundColor: {
        primary: '#5784B2',
        secondary: '#D5E1E9',
        black_ani: '#252525',
      },
    },
  },
  plugins: [],
} satisfies Config;
