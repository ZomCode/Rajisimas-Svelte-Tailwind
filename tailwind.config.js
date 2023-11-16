/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
      "./src/**/*.{html,js,svelte,ts}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      circle: 'circle',
      alpha: 'lower-alpha',
      'alpha-upper': 'upper-alpha',
    },
    extend: {
      colors: {
        'dark-100': '#0F0F0F',
      },
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
};