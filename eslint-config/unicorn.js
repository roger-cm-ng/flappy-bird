/**
 * Plugin unicorn linting rules.
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
 */
module.exports = {
    plugins: [
        'unicorn'
    ],
    rules: {
        'unicorn/filename-case': [
            'error',
            {
                'case': 'kebabCase'
            }
        ]
    }
};
