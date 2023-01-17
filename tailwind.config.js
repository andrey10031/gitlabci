module.exports = {
    mode: "jit",
    content: ['./**/*.vue', './assets/**/*.css'],
    theme: {
        colors: {
            'primary': '#2E1664',
            'gray': '#D0B6DA',
            'gray-dark': '#8F83AB',
            'gray-primary': '#D1D5DB'
          },
          borderRadius: {
            'main': '16px',
          },
         
      extend: {
        backgroundColor:{
            'primary': 'rgba(255, 255, 255, 0.1)',
            'second-gradient': 'linear-gradient(90deg, #273592 0%, #6639E3 100%)'
          },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  