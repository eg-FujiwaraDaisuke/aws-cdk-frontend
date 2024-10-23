import typescriptParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'indent': ['error', 2],
    },
  },
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'indent': ['error', 2],
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
]);
