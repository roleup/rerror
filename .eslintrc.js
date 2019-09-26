module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', '@roleup/eslint-config'],
  settings: {
    'import/resolver': {
      'typescript': {},
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    }
  },
  rules: {
    'no-useless-constructor': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/camelcase': 'warn',
    '@xtrctio/disallow-date/no-static-date': 'off',
    '@xtrctio/disallow-date/no-new-date': 'off'
  }
};
