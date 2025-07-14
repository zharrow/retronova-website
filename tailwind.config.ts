import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 20s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'drift': 'drift 80s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.15'
          },
          '25%': { 
            transform: 'translate(50px, -80px) scale(1.1)',
            opacity: '0.2'
          },
          '50%': { 
            transform: 'translate(-30px, -50px) scale(0.95)',
            opacity: '0.12'
          },
          '75%': { 
            transform: 'translate(-60px, 40px) scale(1.05)',
            opacity: '0.18'
          }
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          to: { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        drift: {
          from: { transform: 'rotate(30deg) translate(0, 0)' },
          to: { transform: 'rotate(30deg) translate(100px, 100px)' }
        }
      },
    },
  },
  plugins: [],
};

export default config;