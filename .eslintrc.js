module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    createDefaultProgram: true
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'json',
    'unused-imports',
    'sql'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:toml/standard',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 'error',
    'json/*': ['error', 'allowComments'],
    'sql/format': [
      2,
      {
        ignoreExpressions: false,
        ignoreInline: true,
        ignoreTagless: true
      }
    ],
    'sql/no-unsafe-query': [
      2,
      {
        allowLiteral: false
      }
    ]
  }
}
