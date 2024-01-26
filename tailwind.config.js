/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(79deg, rgba(105,215,167,1) 25%, rgba(205,105,215,1) 47%, rgba(244,82,150,1) 100%, rgba(255,255,255,1) 100%)',
      },
    },
  },
  variants: {},
  plugins: [],
}

