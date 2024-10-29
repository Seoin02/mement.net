/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      tabletPro: {min: '1024px', max: '1279px'},
      desktop: { min: '1280px' },
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-100%, 0, 0)'
          },
          'to': {
            opacity: '1',
            transform: 'translateZ(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(100%, 0, 0)'
          },
          'to': {
            opacity: '1',
            transform: 'translateZ(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          }
        },
        textFade: {
          '0%': {
            opacity: '0',
            transform: 'translate(40px, 0px)',
          },
          'to': {
            opacity: '1',
            transform: 'translate(0px, 0px)',
          }
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s',
        fadeInRight: 'fadeInRight 1s',
        fadeIn: 'fadeIn 1s',
        'fade-in-1': 'fadeIn 1s 0.2s',
        'fade-in-2': 'fadeIn 1s 0.4s',
        'fade-in-3': 'fadeIn 1s 0.6s',
        'fade-in-4': 'fadeIn 1s 0.8s',
        textFade: 'textFade 1s ease-out',
      },
      colors: {
        red: '#D6173A',
        gray: {
          10: '#F3F4F6',
          50: '#6B7280',
          80: '#111927',
        },
        purple: {
          10: '#F4ECFC',
          30: '#eac1f9',
          50: '#760DDE',
        },
        yellow: {
          50: '#FFD400',
        },
        blue: {
          10: '#FAF9FF',
        },
        'sky-blue': {
          50: '#8eeefd',
        },
        green: {
          50: '#98f49b',
        },
        orange: {
          50: '#facf8f',
        },
        pink: {
          50: '#f8b9f2',
        },
      },
    },
  },
}