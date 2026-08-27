/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#050d1a',
        surface:       '#0c1a2e',
        'surface-2':   '#112240',
        accent:        '#64ffda',
        'accent-blue': '#0a84ff',
        foreground:    '#ccd6f6',
        muted:         '#8892b0',
        border:        '#1d3461',
        success:       '#3fb950',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero':    ['4.5rem',   { lineHeight: '1.05', fontWeight: '700' }],
        'heading': ['2.25rem',  { lineHeight: '1.2',  fontWeight: '600' }],
        'sub':     ['1.375rem', { lineHeight: '1.3',  fontWeight: '600' }],
        'body':    ['1rem',     { lineHeight: '1.75' }],
        'caption': ['0.875rem', { lineHeight: '1.5'  }],
      },
    },
  },
  plugins: [],
}
