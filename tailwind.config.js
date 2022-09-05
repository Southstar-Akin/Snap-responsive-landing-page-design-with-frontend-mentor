/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': {'min': '64px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        AlmostWhite: 'hsl(0, 0%, 98%)',
        MediumGray: 'hsl(0, 0%, 41%)',
        AlmostBlack: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        epilogue: 'Epilogue'
      },
      content: {
        'arrowDown': 'url("/images/icon-arrow-down.svg")',
        'arrowUp': 'url("/images/icon-arrow-up.svg")',
        'arrowDown': 'url("/images/icon-arrow-down.svg")',
        'calendar': 'url("/images/icon-calendar.svg")',
        'Planning': 'url("/images/icon-planning.svg")',
        'Reminder': 'url("/images/icon-reminders.svg")',
        'Todo': 'url("/images/icon-todo.svg")',
        'Menu': 'url("/images/icon-menu.svg")',
        'closemenu': 'url("/images/icon-close-menu.svg")',

      },
    },
  },
  plugins: [],
}
