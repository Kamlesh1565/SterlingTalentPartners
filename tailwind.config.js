/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { sterling: { indigo: '#30348F', ivory: '#F1EFE5', lime: '#D8E51B', orange: '#FFB13B', cyan: '#35BDE8' } }, fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] } } },
  plugins: [],
}
