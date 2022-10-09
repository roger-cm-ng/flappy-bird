/**
 * Base linting rules, these can apply to both Javascript and Typescript projects.
 */
module.exports = {
    env: {
        'es6': true
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
        'no-unused-vars': 'warn',
        'comma-dangle': ['error', 'never'],
        'no-undef': 'warn',
        'eol-last': ['error', 'always'],
        'no-debugger': ['error'],
        'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
        'space-in-parens': ['error', 'never'],
        'object-property-newline': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                'next': 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var', 'export'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'export'
            },
            {
                blankLine: 'never',
                prev: 'var',
                next: 'var'
            },
            {
                blankLine: 'never',
                prev: 'let',
                next: 'let'
            },
            {
                blankLine: 'never',
                prev: 'const',
                next: 'const'
            },
            {
                blankLine: "always",
                prev: "*",
                next: "return"
            }
        ],
        'quotes': [
            2,
            'single',
            {
                'avoidEscape': true
            }
        ],
        'quote-props': ['error', 'consistent-as-needed'],
        'indent': ['error', 4],
        'no-spaced-func': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-trailing-spaces': ['error'],
        'object-curly-newline': [
            'error',
            {
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 2
                },
                'ObjectPattern': {
                    'multiline': true,
                    'minProperties': 2
                },
                'ImportDeclaration': {
                    'multiline': true,
                    'minProperties': 2
                },
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 2
                }
            }
        ],
        'no-new': 'off',
        'guard-for-in': 'warn',
        'no-param-reassign': 'off',
        'max-len': [
            'error',
            140,
            {
                'ignoreUrls': true
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'no-restricted-syntax': 'off',
        'no-tabs': 'error',
        'no-empty': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 1
            }
        ],
        'padded-blocks': ['error', 'never'],
        'no-inline-comments': ['error'],
        'newline-after-var': ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'prefer-spread': 'warn',
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'always'],
        'no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true
            }
        ],
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        'key-spacing': ['error', { 'afterColon': true }]
    }
};
