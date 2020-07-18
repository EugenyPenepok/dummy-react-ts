module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "react/jsx-filename-extension": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/prop-types": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-props-no-spreading": "off",
        'prettier/prettier': "error",
    },
    ignorePatterns: ['/*.js'],
};
