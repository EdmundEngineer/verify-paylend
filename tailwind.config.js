module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f0047f',
        secondary: {
          100: '#e0d3e6',
          200: '#d1bdda',
          300: '#c2a7cd',
          400: '#b392c1',
          500: '#a37cb5',
          600: '#9466a8',
          700: '#85509c',
          800: '#753a8f',
          900: '#662483',
          
        },
        backgroundImage: {
        'primary-gradient':
        'linear-gradient(to right, rgba(86, 57, 151, 1) 0%, rgba(94, 54, 150, 1) 14%, rgba(116, 49, 147, 1) 35%, rgba(152, 40, 143, 1) 62%, rgba(202, 27, 137, 1) 92%, rgba(217, 24, 136, 1))'
      },
        fontFamily:{
        body:['Nunito']

      },
      }
    },
  },
  plugins: [],
}
