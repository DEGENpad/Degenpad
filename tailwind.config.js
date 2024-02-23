/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light :{
          100:'#e6e8fd',
          200:'#d9ddfd',
          300:'#b0b8fa'
        },
        normal:{
          100:'#0119ef',
          200:'#0117d7',
          300:'#0114bf'
        },
        dark:{
          100:'#0113b3',
          200:'#010f8f',
          300:'#000b6c',
          400:'#000954'
        },
        white:{
          100:'#ffffff',
          200:'#fcfdfd',
          300:'#f5f7f9'
        },
        gray:{
          100:'#fcfdfd',
          200:'#f5f7f9',
          300:'#f0f3f6'
        },
        whiteDark:{
          100:'#f9fafb',
          200:'#f2f4f7',
          300:'#ebeef2',
          400:'#f6f8f9'
        }
      },
      gradientColorStops:{}
    },
  },
  plugins: [],
}