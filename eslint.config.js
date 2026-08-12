import eslintPluginAstro from "eslint-plugin-astro"

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    settings: {
        "import/core-modules": ["astro:content", "astro:transitions"],
        "import/parsers": {
        "astro-eslint-parser": [".astro"],
        "espree": [".js", ".mjs", ".cjs"],
        "@typescript-eslint/parser": [".ts", ".tsx"]
        }
    }
  },
  {
    rules: {
    },
  },
]