const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['Montserrat', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // this class is applied to `html` by `app/theme-efect.ts`, similar
      // to how `dark:` gets enabled
      addVariant("theme-system", ".theme-system &");
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
