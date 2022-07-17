const theme = require('@davjhan/broth-css/dist/tailwind.theme.cjs')
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        '../**/**/*.{svelte,html}',
    ],
    plugins: [
        require('@tailwindcss/forms')
    ],
    theme: {
        extend: {
            colors: {
                outlineColor: colors.indigo[200],
                transparent: 'transparent',
                white: colors.white,
                ink: {
                    DEFAULT: colors.neutral[800],
                    light: colors.neutral[700],
                    primary: colors.indigo[600],
                    secondary: colors.neutral[500],
                    error: colors.red[800],
                    success: colors.green[600],
                },
                accent: {
                    DEFAULT: colors.indigo[200],
                    error: colors.red[200],
                    secondary: colors.neutral[200],
                },
                shade: {
                    DEFAULT: colors.neutral[100],
                    primary: colors.indigo[100],
                    success: colors.green[100],
                    error: colors.red[100],
                },
                divider: {
                    DEFAULT: colors.neutral[300],
                    primary: colors.indigo[300],
                    success: colors.green[300],
                    error: colors.red[300],
                },
            },

        }
    }
}