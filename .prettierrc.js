module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    importOrder: ['^@opp-studio/(.*)$', '^lib/(.*)$', '^components/(.*)$', '^[./]'],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    plugins: [require('prettier-plugin-tailwindcss', 'prettier-plugin-sort-imports')],
}
