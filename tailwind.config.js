// tailwind.config.js
module.exports = {
    theme: {
        darkSelector: '.mode-dark',
        fill: theme => ({
            'red': theme('colors.red.500'),
            'green': theme('colors.green.500'),
            'blue': theme('colors.blue.500'),
            'gray': theme('colors.gray.900'),
            'black': theme('colors.black'),
            'white': theme('colors.white')
        }),
        stroke: theme => ({
            'red': theme('colors.red.500'),
            'green': theme('colors.green.500'),
            'blue': theme('colors.blue.500'),
            'gray': theme('colors.gray.900'),
            'black': theme('colors.black'),
            'white': theme('colors.white')
        })
    },
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
        visibility: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
        fill: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
        stroke: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    },
    plugins: [
        require('tailwindcss-dark-mode')()
    ],
};
