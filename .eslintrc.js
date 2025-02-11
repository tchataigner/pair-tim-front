module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "mocha": true
  },
  'extends': [
    'standard',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
