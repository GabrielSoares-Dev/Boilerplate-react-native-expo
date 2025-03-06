// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', '@rocketseat/eslint-config/react'],
  plugins: ['prettier'],
  ignorePatterns: ['/dist/*'],
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'prefer-regex-literals': 'off',
    'no-useless-escape': 'off',
    'no-labels': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
}
