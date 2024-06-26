/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xl : ['66px', '81px'],
      lg : ['38px', '48px'],
      md : ['28', '33px'],
      sm : ['22', '26px']
    },
    fontWeight: {
      normal : '450',
      medium : '550',
      bold : '700'
    },
    colors: {
      'white' : '#FFFDF7',
      'gray' : '#F9F7F1',
      'black' : '#272528',
      'blue' : '#083EB5',
      'red' : '#E22403',
      'yellow' : '#FFBE46'
    }
  },
  plugins: [],
};
