import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            react: pluginReact
        },
        rules: {
            ...js.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    {
        files: ["**/*.json"],
        ignores: ["**/package-lock.json"],
        language: "json/json",
        ...json.configs.recommended
    },
    {
        files: ["**/*.css"],
        language: "css/css",
        ...css.configs.recommended,
        rules: {
            "css/no-important": "off",
            "css/use-baseline": "off"
        }
    }
];
