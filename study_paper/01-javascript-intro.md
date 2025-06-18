# JavaScript 소개 학습지

## 📚 학습 목표
- JavaScript의 역사와 특징을 이해한다
- ECMAScript와 브라우저 호환성을 파악한다
- 최신 JavaScript 개발 환경을 구성할 수 있다

## 📋 JavaScript 개요

| 항목 | 내용 |
|------|------|
| **개발 연도** | 1995년 |
| **개발 회사** | Netscape Communications |
| **초기 목적** | 웹 브라우저에서 동적인 기능 구현 |
| **언어 특성** | 동적 타입 언어, 인터프리터 언어, 멀티 패러다임 |
| **실행 환경** | 웹 브라우저, Node.js, 게임 엔진, 포토샵 등 |

## 📈 ECMAScript 버전 히스토리

| 버전 | 연도 | 주요 특징 |
|------|------|-----------|
| **ES3** | 1999 | 정규표현식, try/catch 구문 |
| **ES5** | 2009 | strict mode, JSON 지원, 배열 메소드 |
| **ES2015 (ES6)** | 2015 | class, 모듈, 화살표 함수, let/const |
| **ES2016** | 2016 | Array.includes(), 지수 연산자(**) |
| **ES2017** | 2017 | async/await, Object.entries() |
| **ES2018** | 2018 | 비동기 반복, 정규식 개선 |
| **ES2019** | 2019 | Array.flat(), Object.fromEntries() |
| **ES2020** | 2020 | BigInt, Optional chaining(?.) |
| **ES2021** | 2021 | 논리 할당 연산자(&&=, \|\|=) |

## 🌐 브라우저 호환성 문제와 해결방법

| 문제점 | 해결방법 | 설명 |
|--------|----------|------|
| **구형 브라우저 지원** | 트랜스파일러 | 최신 문법을 이전 버전으로 변환 |
| **최신 기능 미지원** | 폴리필 | 미지원 기능을 JavaScript로 구현 |
| **브라우저별 차이** | 라이브러리 | jQuery, Lodash 등으로 호환성 확보 |

### 주요 도구들

| 도구 | 종류 | 용도 |
|------|------|------|
| **Babel** | 트랜스파일러 | ES6+ 문법을 ES5로 변환 |
| **TypeScript** | 트랜스파일러 | 타입 체크와 ES5 변환 |
| **Polyfill.io** | 폴리필 | 브라우저별 필요 폴리필 자동 제공 |
| **Core-js** | 폴리필 | 표준 JavaScript 기능 폴리필 |

## 💻 개발 환경 구성

| 도구 | 용도 | 추천 |
|------|------|------|
| **코드 에디터** | 코드 작성 | VS Code, WebStorm |
| **브라우저** | 테스트 및 디버깅 | Chrome DevTools |
| **패키지 매니저** | 라이브러리 관리 | npm, yarn, pnpm |
| **번들러** | 모듈 번들링 | Webpack, Vite, Rollup |
| **테스트 도구** | 코드 테스트 | Jest, Cypress |

## 🔧 JavaScript 실행 방법

| 방법 | 설명 | 사용 예시 |
|------|------|-----------|
| **브라우저 콘솔** | 개발자 도구에서 직접 실행 | `F12` → Console 탭 |
| **HTML 파일** | `<script>` 태그로 실행 | `<script src="app.js"></script>` |
| **Node.js** | 서버 환경에서 실행 | `node app.js` |
| **온라인 에디터** | 웹에서 바로 테스트 | CodePen, JSFiddle, Repl.it |

## 📝 학습 체크리스트

- [ ] JavaScript의 역사와 특징을 설명할 수 있다
- [ ] ECMAScript와 JavaScript의 관계를 이해한다
- [ ] 브라우저 호환성 문제를 설명할 수 있다
- [ ] 트랜스파일러와 폴리필의 차이를 안다
- [ ] 기본적인 개발 환경을 구성할 수 있다
- [ ] 여러 방법으로 JavaScript 코드를 실행할 수 있다

## 🎯 실습 과제

1. **환경 설정**: VS Code에 JavaScript 확장 프로그램 설치
2. **버전 확인**: 브라우저 콘솔에서 ES6+ 기능 테스트
3. **온라인 실습**: CodePen에서 간단한 JavaScript 코드 작성
4. **호환성 확인**: Can I Use 사이트에서 최신 기능 지원 현황 조사

## 📖 참고 자료

- [MDN JavaScript 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
- [ECMAScript 명세](https://tc39.github.io/ecma262/)
- [Can I Use](https://caniuse.com/) - 브라우저 호환성 확인
- [Babel](https://babeljs.io/) - JavaScript 컴파일러
- [Node.js](https://nodejs.org/) - JavaScript 런타임 