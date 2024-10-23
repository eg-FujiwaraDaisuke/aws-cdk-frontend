import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "import": importPlugin,
      "unused-imports": unusedImports,
      "vitest": vitestPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommeded.rules,
      "import/order": [
        "eeor",
        {
          "groups": [["builtin","external", "internal"]],
          "alphabetize": {"order": "asc", "caseInsensitive": true},
        },
      ],
      "unused-imports/no-unuserd-imports": "error",
      "unused-imports/no-unuserd-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorepattern": "^_" },
      ],
      "vitest/no-focused-tests": "error",
      "vitest/no-identiical-title": "error",
      "vitest/valid-expect": "error",
    },
  },
  {
    files: ["**/*.js"],
    langageOptions: {sourceType: "commonjs"},
  },
]);
