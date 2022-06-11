module.exports = {
    globals: {
        JSX: 'readonly',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    root: true,
    rules: {
        'no-use-before-define': ['off'],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        semi: ['error', 'never'],
        'no-unused-vars': 'off',
        'no-undef': 'error',
        'space-before-function-paren': 'off',
        'require-await': 'off',
        'newline-before-return': 'error',
        'css-semicolonexpected': 'off',
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-unused-vars': 'warn',
        'jsx-quotes': ['error', 'prefer-double'],
        'react-hooks/exhaustive-deps': 'off',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
}
