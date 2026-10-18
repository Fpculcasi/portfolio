/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#1b1e24',
        surface:       '#22262e',
        'surface-2':   '#2a2f38',
        accent:        '#d4f344',
        'accent-blue': '#0a84ff',
        foreground:    '#e6e8ec',
        muted:         '#9aa0ab',
        border:        '#2e333c',
        success:       '#3fb950',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero':    ['5.5rem',   { lineHeight: '1.02', fontWeight: '700' }],
        'heading': ['2.75rem',  { lineHeight: '1.15', fontWeight: '600' }],
        'sub':     ['1.625rem', { lineHeight: '1.3',  fontWeight: '600' }],
        'body':    ['1.125rem', { lineHeight: '1.7'  }],
        'caption': ['1rem',     { lineHeight: '1.5'  }],
      },
    },
  },
  plugins: [],
}
