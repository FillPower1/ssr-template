module.exports = {
    root: true,
    plugins: [
        '@typescript-eslint',
        'import',
        'eslint-comments',
        'react',
        'react-hooks'
    ],
    // Парсер
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Версия экмаскрипта которую мы умеем парсить
        ecmaVersion: 2019,
        // Можно ли использовать imports
        sourceType: 'module',
        ecmaFeatures: {
            // Нужно ли парсить jsx
            jsx: true
        }
    },
    // Применяем правила с плагинов
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        // Включает eslint-plugin-prettier и отображает более красивые ошибки как ошибки ESLint.
        'plugin:prettier/recommended'
    ],
    // окружение в котором работает приложение
    env: {
        browser: true,
        node: true
    },
    settings: {
        react: {
            // Указывает eslint-plugin-react автоматически определять версию React для использования
            version: 'detect'
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        }
    },
    // дополнительные правила
    rules: {
        // Code-style
        'arrow-parens': ['warn', 'as-needed'],
        camelcase: 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'comma-dangle': ['warn', 'only-multiline'],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'import/no-extraneous-dependencies': 0,
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                'newlines-between': 'always'
            }
        ],
        'import/no-duplicates': 1,
        indent: ['warn', 4],
        'max-params': 0,
        semi: ['warn', 'always'],
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        'eol-last': ['warn', 'always'],
        'no-cond-assign': ['error', 'except-parens'],
        'no-implicit-coercion': 0,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-nested-ternary': 2,
        'no-plusplus': 1,
        'no-constant-condition': 0,
        'no-prototype-builtins': 0,
        'no-return-await': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-useless-escape': 0,
        'prefer-rest-params': 0,
        'object-curly-spacing': ['warn', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'no-console': 'warn',
        'no-process-exit': 'error',
        'no-magic-numbers': [
            'warn',
            {
                ignore: [0, 1, -1, 100],
                ignoreArrayIndexes: false,
                enforceConst: true,
                detectObjects: false
            }
        ],

        // TypeScript
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/await-thenable': 0,
        '@typescript-eslint/prefer-regexp-exec': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ],

        // React
        'react/jsx-wrap-multilines': 'error',
        'react/jsx-no-bind': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/no-children-prop': 0,
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never'
            }
        ],
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],

        // React Hooks
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2
    }
};
