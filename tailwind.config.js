const defaultTheme = require('tailwindcss/defaultTheme')
// https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const customTransformer = (content) => {
  const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
  return contentWithoutStyleBlocks
}

export default {
  // prefix: 'tw-',
  content:{
    files: [
      "./index.html",
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    // relative: true,
    // transform: {
    //   vue: customTransformer,
    // }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: {
        // default: 'var(--el-color-primary)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     '.card':{
    //       backgroundColor: theme('colors.white'),
    //       borderRadius: theme('borderRadius.lg'),
    //       padding: theme('spacing.6'),
    //       boxShadow: theme('boxShadow.xl'),
    //     } 
    //   })
    // })
  ],
  corePlugins: {  
    // preflight: false
  }
}

