import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-konsultasi_awal',
    'text-implementasi',
    'text-personalisasi',
    'text-harga',
    'text-putih',
    'group-hover:text-putih',
  ],
  theme: {
    extend: {
      colors: {
        konsultasi_awal: '#BDDBFF',
        implementasi: '#D2BFF750',
        personalisasi: '#A7DCEB50',
        harga: '#FDBFC150',
        putih: '#FFFFFF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        black_ani: '#252525',
        primary_ani: '#4C9DAE',
        title: '#223650',
        desc: '#343C46',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundColor: {
        primary: '#4C9DAE',
        secondary: '#D5E1E9',
        black_ani: '#252525',
      },
      backgroundImage: {
        'card-hover': 'linear-gradient(145deg, #4C9DAE 0%, #2C4D77 58%)',
        quotes: 'linear-gradient(90deg, #fbfdfe33 0%, #307a8a33 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        top: '0px 0px 60px 0px rgba(50, 50, 71, 0.4)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
