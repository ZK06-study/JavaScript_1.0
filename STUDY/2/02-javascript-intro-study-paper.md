# JavaScript 소개 학습지

## 📌 **JavaScript의 탄생과 역사**

### **1️⃣ JavaScript의 시작**

| 연도 | 사건 | 설명 |
| --- | --- | --- |
| **1995년** | JavaScript 탄생 | Netscape Navigator에 최초 탑재 |
| **마케팅** | Java와 유사한 이름 | 실제로는 Java와 다른 언어 |
| **관계** | "햄과 햄스터의 관계" | Java와 JavaScript는 별개 언어 |

### **2️⃣ 언어 vs 구동 환경**

| 구분 | 역할 | 예시 |
| --- | --- | --- |
| **JavaScript 언어** | 코드 실행 관련 기능 | 변수, 함수, 객체 등 |
| **구동 환경** | 입출력 관련 기능 | 브라우저, Node.js, 게임 엔진 |

💡 **예제**

```javascript
// JavaScript 언어 기능
const message = 'Hello World';
function greet() { return message; }

// 구동 환경 기능 (브라우저)
alert('안녕하세요!'); // 브라우저 전용
console.log('콘솔 출력'); // 다양한 환경 지원
```

---

## 📌 **ECMAScript와 표준화**

### **1️⃣ ECMAScript 버전 히스토리**

| 버전 | 연도 | 주요 특징 | 별칭 |
| --- | --- | --- | --- |
| **ES3** | 1999 | 기본적인 JavaScript | - |
| **ES5** | 2009 | 브라우저 호환성 개선 | - |
| **ES2015** | 2015 | 대대적인 문법 추가 | ES6 |
| **ES2016+** | 매년 | 지속적인 기능 추가 | ES2017, ES2018... |

### **2️⃣ ES2015의 주요 기능**

| 기능 | 설명 | 예제 |
| --- | --- | --- |
| **클래스** | 객체지향 프로그래밍 | `class Person { }` |
| **모듈** | 코드 분할과 재사용 | `import`, `export` |
| **블록 스코프** | `let`, `const` | `let x = 1;` |
| **템플릿 문자열** | 문자열 보간 | `` `Hello ${name}` `` |
| **화살표 함수** | 간결한 함수 문법 | `() => { }` |

💡 **ES2015 예제**

```javascript
// 이전 방식 (ES5)
var name = 'JavaScript';
function greet() {
    return 'Hello ' + name;
}

// ES2015 방식
const name = 'JavaScript';
const greet = () => `Hello ${name}`;

// 클래스
class Developer {
    constructor(name) {
        this.name = name;
    }
    
    introduce() {
        return `저는 ${this.name}입니다.`;
    }
}
```

---

## 📌 **브라우저 호환성 문제**

### **1️⃣ 호환성 문제의 원인**

| 문제 | 원인 | 해결 방법 |
| --- | --- | --- |
| **구형 브라우저** | 최신 기능 미지원 | 트랜스파일러 사용 |
| **브라우저별 차이** | 업데이트 주기 다름 | 폴리필 사용 |
| **개발 속도** | 표준보다 빠른 개발 | 호환성 확인 필수 |

### **2️⃣ 브라우저 간 호환성 역사**

| 시기 | 상황 | 해결책 |
| --- | --- | --- |
| **1999년 이전** | 독자 표준 난립 | IE vs Firefox 문제 |
| **ES3 시대** | 표준화 시작 | jQuery 등 라이브러리 등장 |
| **ES5 이후** | 호환성 개선 | 표준 준수 증가 |

---

## 📌 **트랜스파일러와 폴리필**

### **1️⃣ 트랜스파일러 (Transpiler)**

| 특징 | 설명 | 대표 도구 |
| --- | --- | --- |
| **목적** | 최신 문법을 이전 버전으로 변환 | Babel, TypeScript |
| **변환 대상** | **문법** (syntax) | `=>` → `function` |
| **장점** | 최신 문법 사용 가능 | 개발 편의성 향상 |

### **2️⃣ 폴리필 (Polyfill)**

| 특징 | 설명 | 대표 예시 |
| --- | --- | --- |
| **목적** | 구형 환경에서 새 기능 구현 | core-js, es6-shim |
| **변환 대상** | **기능** (feature) | `Array.includes()` 구현 |
| **별칭** | Shim이라고도 부름 | 기능 보완 라이브러리 |

💡 **트랜스파일러 예제**

```javascript
// 최신 문법 (ES2015+)
const greet = (name) => `Hello ${name}!`;
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);

// 트랜스파일 결과 (ES5)
var greet = function(name) {
    return 'Hello ' + name + '!';
};
var numbers = [1, 2, 3];
var doubled = numbers.map(function(x) {
    return x * 2;
});
```

💡 **폴리필 예제**

```javascript
// 최신 기능 사용
const fruits = ['apple', 'banana', 'orange'];
const hasApple = fruits.includes('apple'); // ES2016 기능

// 폴리필로 구형 브라우저 지원
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement) {
        return this.indexOf(searchElement) !== -1;
    };
}
```

---

## 📌 **현대 JavaScript 개발 환경**

### **1️⃣ 개발 도구 생태계**

| 도구 타입 | 역할 | 대표 도구 |
| --- | --- | --- |
| **트랜스파일러** | 문법 변환 | Babel, TypeScript |
| **번들러** | 파일 결합 | Webpack, Rollup |
| **폴리필** | 기능 보완 | core-js, polyfill.io |
| **브라우저 지원 확인** | 호환성 체크 | Can I Use, MDN |

### **2️⃣ 브라우저 지원 전략**

| 전략 | 설명 | 고려사항 |
| --- | --- | --- |
| **최신 브라우저만** | 현대적 기능 전부 사용 | 일부 사용자 배제 |
| **광범위 지원** | 구형 브라우저까지 지원 | 개발 복잡도 증가 |
| **점진적 개선** | 기본 기능 + 향상된 경험 | 균형잡힌 접근 |

💡 **현대적 개발 환경 설정**

```javascript
// package.json 설정 예시
{
  "name": "modern-js-project",
  "scripts": {
    "build": "babel src -d dist",
    "dev": "webpack-dev-server"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "webpack": "^5.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}

// Babel 설정 (.babelrc)
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ]
}
``` 