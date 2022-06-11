const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  mode: 'jit',
  content: ['pages/**/*.{js,ts,jsx,tsx}', 'modules/**/*.{js,ts,jsx,tsx}'].map(
    (path) => join(__dirname, path)
  ),
  // Colors generated using https://tailwind.ink/
  theme: {
    extend: {
      fontFamily: {
        code: ['Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono'],
      },
      screens: {
        tall: { raw: '(max-height: 800px)' },
      },
      colors: {
        highlight: '#7affe1',
        navy: {
          50: '#f3f8f9',
          100: '#daf0fa',
          200: '#b0e0f5',
          300: '#7dc1e6',
          400: '#489ed3',
          500: '#367dc0',
          600: '#2d62a9',
          700: '#264a87',
          800: '#1b3261',
          900: '#101f3f',
        },
        blue: {
          50: '#f7f9fb',
          100: '#e5f0fc',
          200: '#c9d8fa',
          300: '#a2b4f2',
          400: '#808de8',
          500: '#6868e0',
          600: '#564cd1',
          700: '#4139b1',
          800: '#2d2783',
          900: '#191952',
        },
        purple: {
          50: '#fafafb',
          100: '#f1effa',
          200: '#e2d3f6',
          300: '#c7acea',
          400: '#b681da',
          500: '#9e5dce',
          600: '#8441b8',
          700: '#633193',
          800: '#452267',
          900: '#27163c',
        },
        cerise: {
          50: '#fdfcfb',
          100: '#faeff1',
          200: '#f6cce4',
          300: '#eca0c7',
          400: '#ea70a5',
          500: '#dd4c88',
          600: '#c73368',
          700: '#a0264c',
          800: '#741b31',
          900: '#47111a',
        },
        coral: {
          50: '#fcfbfa',
          100: '#fbf0e9',
          200: '#f7d1d1',
          300: '#eba5a8',
          400: '#e6767d',
          500: '#d6535a',
          600: '#be383e',
          700: '#962a2e',
          800: '#6b1e1f',
          900: '#421312',
        },
        ochre: {
          50: '#fcfaf6',
          100: '#faf0cd',
          200: '#f3d99c',
          300: '#e2b267',
          400: '#cf863d',
          500: '#b56521',
          600: '#974b15',
          700: '#743812',
          800: '#50270f',
          900: '#33180a',
        },
        lemon: {
          50: '#fbf9f3',
          100: '#f8efb7',
          200: '#efde78',
          300: '#d7bb48',
          400: '#b39225',
          500: '#927312',
          600: '#755a0c',
          700: '#5a430b',
          800: '#3d2e0a',
          900: '#291c08',
        },
        yellow: {
          50: '#faf9f2',
          100: '#f6efbb',
          200: '#ebe07e',
          300: '#cebe4c',
          400: '#a09628',
          500: '#7d7813',
          600: '#645f0d',
          700: '#4d480c',
          800: '#35310b',
          900: '#241e09',
        },
        emerald: {
          50: '#f1f6f4',
          100: '#d9f0ed',
          200: '#abe6d6',
          300: '#71cbab',
          400: '#30ab7d',
          500: '#219054',
          600: '#1d793f',
          700: '#1b5d33',
          800: '#144027',
          900: '#0e271e',
        },
        island: {
          50: '#f0f6f6',
          100: '#d2f0f6',
          200: '#a0e4eb',
          300: '#68c9d0',
          400: '#2ea9af',
          500: '#218c8d',
          600: '#1d7473',
          700: '#1a5859',
          800: '#143c41',
          900: '#0d252e',
        },
      },
    },
  },
  plugins: [],
};
