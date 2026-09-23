// Tailwind v4 ships its own PostCSS plugin. Using the `tailwindcss` plugin
// directly here is a v3 pattern and breaks on v4.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
