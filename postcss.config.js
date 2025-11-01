export default {
  plugins: {
    // Tailwind's PostCSS integration moved to a separate package in v4+
    // Use the official PostCSS plugin package instead of `tailwindcss` here.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}