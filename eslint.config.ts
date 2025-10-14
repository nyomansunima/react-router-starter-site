import config from "@antfu/eslint-config"

export default config({
  stylistic: false,
  typescript: {
    overrides: {
      "node/prefer-global/process": "off",
    },
  },
  react: {
    overrides: {
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
      "react-refresh/only-export-components": "off",
      "react/no-unstable-context-value": "off",
    },
  },
})
