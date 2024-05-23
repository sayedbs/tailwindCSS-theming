module.exports = {
  // Enable JIT mode if desired
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Adjust paths as necessary
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Default theme
      borderRadius: {
        DEFAULT: 'var(--button-border-radius)',
      },
      padding: {
        DEFAULT: 'var(--button-padding)',
      },
      margin: {
        DEFAULT: 'var(--button-margin)',
      },
      backgroundColor: {
        DEFAULT: 'var(--button-bg-color)',
      },
      fontSize: {
        DEFAULT: 'var(--button-font-size)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  variants: {},
  plugins: [],
  // Custom themes
  themes: {
    tenant1: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
    tenant2: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
    // Add more tenant themes as needed
  },
};
