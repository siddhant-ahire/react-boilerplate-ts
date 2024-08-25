import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import airbnbConfig from "eslint-config-airbnb";
import tsParser from "@typescript-eslint/parser";

// Exporting flat configuration
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for both JS and TS files
      globals: { ...globals.browser, ...globals.jest, process: "readonly", }, // Enable Jest and browser globals
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      ...airbnbConfig.rules,

      // Consolidated Prettier rules
      "prettier/prettier": ["error", { "semi": true }],

      // Additional React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".tsx"] }],
      "react/prop-types": "off", // If using TypeScript for type checking

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],

      // Accessibility rules
      "jsx-a11y/accessible-emoji": "warn",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    },
  },
];
