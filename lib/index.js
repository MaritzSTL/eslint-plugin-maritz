'use strict';

/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'google',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'html',
  ],
  rules: {
    // 2 == error, 1 == warning, 0 == off
    // Maritz Overrides
    'arrow-parens': [2, 'always'],
    'indent': [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 2,
    }],
    'prefer-const': 2,
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: '^goog\.(module|require)',
    }],
    'new-cap': ['error', {
      'capIsNewExceptions': ['Polymer'],
      'capIsNewExceptionPattern': 'Mixin$',
    }],
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: false,
    }],
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
    }],

  },
  settings: {
    // Plugin HTML
    'html/indent': '+2',
    'html/report-bad-indent': 2,
  },
  globals: {
    customElements: false,
    mtz: false,
    Polymer: false,
  },
};
