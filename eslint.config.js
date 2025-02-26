// 📌 ESLint 9.x 이상 Flat Config 형식으로 ESLint + Prettier만 설정
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended, // 기본 JS 린트 규칙
  prettier, // Prettier와 충돌 방지
  {
    rules: {
      // 'prettier/prettier': ['error'], // Prettier 적용
      'no-console': 'warn', // console.log 사용 시 경고
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    },
    ignores: ['node_modules/', 'dist/', 'build/'], // 불필요한 폴더 제외
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
