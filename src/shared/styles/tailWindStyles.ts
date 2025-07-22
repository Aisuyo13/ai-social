export const buttonStyle = {
  primary: `
    px-4 py-2
    bg-blue-500 text-white
    rounded-2xl
    hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1
    transition-all duration-200
    dark:bg-blue-400 dark:hover:bg-blue-500
  `,

  secondary: `
    px-4 py-2
    bg-gray-100 text-gray-800
    rounded-2xl
    hover:bg-gray-200
    focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
    transition-all duration-200
    dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500
  `,

  danger: `
    px-4 py-2
    bg-red-400 text-white
    rounded-2xl
    hover:bg-red-500
    focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1
    transition-all duration-200
    dark:bg-red-500 dark:hover:bg-red-600
  `,

  disabled: `
    px-4 py-2
    bg-gray-200 text-gray-500
    rounded-2xl
    cursor-not-allowed
    transition-all duration-200
    dark:bg-gray-500 dark:text-gray-300
  `,

  ghost: `
    px-3 py-2
    bg-transparent text-blue-500
    hover:bg-blue-50
    rounded-2xl
    transition-all duration-200
    dark:text-blue-300 dark:hover:bg-blue-800/30
  `,

  fancy: `
    px-5 py-2.5
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    text-white font-medium text-sm
    rounded-full
    shadow-md hover:shadow-lg
    transition-all duration-300
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
  `,
};