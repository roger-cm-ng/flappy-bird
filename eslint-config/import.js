/**
 * Plugin import linting rules.
 * @see https://github.com/import-js/eslint-plugin-import
 */
module.exports = {
    plugins: [
        'import'
    ],
    extends: [
        'plugin:import/recommended'
    ],
    settings: {},
    rules: {
        // Leave this here for debugging cyclic issues,
        // if this is left on, it is known to impact performance.
        // "import/no-cycle": ["warn", { "ignoreExternal": true }],
        'import/no-duplicates': ['error'],
        // Too many false positives in typescript type imports with current config.
        // @see related maybe https://github.com/import-js/eslint-plugin-import/issues/1282.
        'import/named': ['off'],
        'import/prefer-default-export': ['off'],
        'import/no-commonjs': ['error'],
        'import/newline-after-import': ['error', {'count': 1}],
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external'
                ],
                'newlines-between': 'always',
                'alphabetize': {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ]
    }
};
