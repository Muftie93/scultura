/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './index.vue',
    './assets/css/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MounmentGrotesk', 'monospace']
      }
    },
  },
  plugins: [],
}

