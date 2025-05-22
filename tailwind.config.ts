import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,css}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        border: "hsl(var(--border-hsl))",
        input: "hsl(var(--input-hsl))",
        ring: "hsl(var(--ring-hsl))",
        background: "hsl(var(--background-hsl))",
        foreground: "hsl(var(--foreground-hsl))",
        'gray-medium': "hsl(var(--gray-medium-hsl))",
        primary: {
          DEFAULT: "hsl(var(--primary-hsl))",
          foreground: "hsl(var(--primary-foreground-hsl))",
          darker: "hsl(var(--primary-darker-hsl))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-hsl))",
          foreground: "hsl(var(--secondary-foreground-hsl))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-hsl))",
          foreground: "hsl(var(--destructive-foreground-hsl))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted-hsl))",
          foreground: "hsl(var(--muted-foreground-hsl))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-hsl))",
          foreground: "hsl(var(--accent-foreground-hsl))",
          darker: "hsl(var(--accent-darker-hsl))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-hsl))",
          foreground: "hsl(var(--popover-foreground-hsl))",
        },
        card: {
          DEFAULT: "hsl(var(--card-hsl))",
          foreground: "hsl(var(--card-foreground-hsl))",
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        info: 'var(--info)',
        'vyrale-pink': 'var(--vyrale-pink)',
        'vyrale-pink-darker': 'var(--vyrale-pink-darker)',
        'vyrale-blue': 'var(--vyrale-blue)',
        'vyrale-blue-darker': 'var(--vyrale-blue-darker)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-raleway)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;