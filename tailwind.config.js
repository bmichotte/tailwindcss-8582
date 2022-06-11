const withOpacity = variableName => `rgb(var(${variableName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,json}'],
    theme: {
        fontFamily: {
            roboto: 'Roboto, Helvetica, Arial, sans-serif',
        },
        extend: {
            colors: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    tertiary: withOpacity('--color-tertiary'),
                },
            },
            backgroundColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    tertiary: withOpacity('--color-tertiary'),
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
