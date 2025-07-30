import config from 'eslint-config-coderiety';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  ...config,
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: '19' } }
  }
];
