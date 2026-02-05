import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const nextConfig = nextCoreWebVitals.default ?? nextCoreWebVitals;

export default [
  ...nextConfig,
  {
    files: ['app/**/*.ts', 'app/**/*.tsx', 'src/**/*.ts', 'src/**/*.tsx'],
    rules: {
      'no-console': 'warn',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];
