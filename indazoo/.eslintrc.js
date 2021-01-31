module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb', // or airbnb-base
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended', // 설치 한경우
    // 'plugin:import/errors', // 설치한 경우
    // 'plugin:import/warnings', // 설치한 경우
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    semi: [2, 'never'],
    'no-console': ['warn', { allow: ['debug', 'warn', 'info', 'error'] }],
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'typescript',
        trailingComma: 'es5',
        semi: false,
        printWidth: 160,
        arrowParens: 'avoid',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
