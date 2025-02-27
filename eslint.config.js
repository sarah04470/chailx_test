import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/*', 'dist/*', 'build/*'],
  },

  js.configs.recommended, // 기본 JS 린트 규칙
  prettier, // Prettier와 충돌 방지
  {
    rules: {
      'no-console': 'warn', // console.log 사용 시 경고
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
