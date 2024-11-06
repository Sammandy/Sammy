module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '100px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#211951',
        accent: '#211951',
      },
      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services1.png')",
      },
    },
  },
  plugins: [],
};
// skjnvdjsd
