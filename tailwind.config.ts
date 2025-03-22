import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#0B132B', // Dark blue background
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#5BC0BE', // Light blue primary color
          foreground: '#0B132B'
        },
        secondary: {
          DEFAULT: '#3A506B', // Darker blue secondary color
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: '#6FFFE9', // Teal accent color
          foreground: '#000000'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: '#1C2541', // Dark card background
          foreground: '#FFFFFF'
        },
        gold: {
          '24k': '#F2F200',
          '22k': '#FFEA00',
          '14k': '#B3F56D',
          '8k': '#F96B1B',
        },
        binance: {
          primary: '#f0b90b', // Binance Yellow
          background: '#121212', // Very dark gray
          foreground: '#f3f3f3', // Light gray
          secondary: '#212121', // Slightly lighter dark gray
          surface: '#1a1a1a', // Dark gray surface
          panel: 'rgba(33, 33, 33, 0.7)', // Semi-transparent dark gray
          accent: '#f0b90b',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'appear': {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-subtle': 'pulse-subtle 2s infinite ease-in-out',
        'appear': 'appear 0.4s forwards ease-out',
        'rotate-slow': 'rotate-slow 10s linear infinite',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'neo': '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.05)',
        'input': 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(240, 185, 11, 0.5)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
