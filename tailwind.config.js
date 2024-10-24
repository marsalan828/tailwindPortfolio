/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        navbarbg: '#be3144',
        projectsbg :'#45567d',
      },
      backgroundImage:{
        gradientcolor: 'linear-gradient(62deg, #3a3d40 0%, #181719 100%)',
      },
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize:{
        heroHeading:'6rem',
      },
      colors: {
        defaultcolor : '#be3144',
        projectbg: '#303841',
        coffecolor: '#8d9196',
      }
    },
  },
  plugins: [],
}

