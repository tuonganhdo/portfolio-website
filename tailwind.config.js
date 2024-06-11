/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'dialogue': '12px',
      'subsm': '14px',
      'sub': '16px',
      'sublg': '18px',
      'default': '22px',
      'subheader': '40px',
      'header': '56px',
    },
    colors: {
      'blue': '#9EDDF8',
      'green': '#ADEC97',
      'pink': '#FBC9DD',
      'orange': '#FFD8AA',
      'purple': '#E0CCFF',
    }
  },
  plugins: [],
};
