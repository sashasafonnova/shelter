module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'linebreak-style': ['warning', 'windows'],
    }
};
