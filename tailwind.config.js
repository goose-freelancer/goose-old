/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body: ['MDIO', 'sans-serif'],
    },
    extend: {
      colors: {
        'mint-green': '#a1e8af',
        'mighty-purple': '#372772',
        'welsh-slate': '#747c92',
      },
    },
  },
  plugins: [],
}

