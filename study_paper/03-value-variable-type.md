# 값, 변수, 타입 학습지

## 📌 **값과 리터럴 (Value & Literal)**

### **1️⃣ 리터럴의 종류**

| 리터럴 타입 | 설명 | 예제 | 용도 |
| --- | --- | --- | --- |
| **정수 리터럴** | 정수 값 표현 | `1`, `42`, `-10` | 숫자 계산 |
| **실수 리터럴** | 소수점 숫자 | `2.5`, `3.14` | 정밀 계산 |
| **문자열 리터럴** | 텍스트 표현 | `'hello'`, `"world"` | 텍스트 처리 |
| **불린 리터럴** | 참/거짓 | `true`, `false` | 조건 판단 |

### **2️⃣ 기본 연산 예제**

💡 **리터럴과 연산**

```javascript
// 숫자 연산
1 + 2; // 3
3 * 4; // 12

// 문자열 연산
'hello' + 'world'; // 'helloworld'

// 논리 연산
true || false; // true
true && false; // false

// 혼합 연산 (주의!)
1 + '1'; // '11' (문자열 결합)
1 - '1'; // 0 (숫자 연산)
```

---

## 📌 **변수 (Variable)**

### **1️⃣ 변수 선언 키워드 비교**

| 키워드 | 재할당 | 재선언 | 호이스팅 | 사용 권장도 |
| --- | --- | --- | --- | --- |
| **`let`** | ⭕ 가능 | ❌ 불가능 | ❌ | 재할당 필요시 |
| **`const`** | ❌ 불가능 | ❌ 불가능 | ❌ | ⭐ **기본 권장** |
| **`var`** | ⭕ 가능 | ⭕ 가능 | ⭕ | ❌ 사용 지양 |

### **2️⃣ 변수 사용 패턴**

| 패턴 | 설명 | 예제 |
| --- | --- | --- |
| **선언 후 할당** | 나중에 값 대입 | `let x; x = 1;` |
| **선언과 동시에 할당** | 즉시 값 대입 | `const name = 'JS';` |
| **다중 선언** | 여러 변수 한번에 | `let a = 1, b = 2;` |

💡 **변수 사용 예제**

```javascript
// let - 재할당 가능
let score = 85;
score = 90; // 성공
score = 95; // 성공

// const - 재할당 불가능
const name = 'JavaScript';
// name = 'TypeScript'; // 에러!

// const는 선언시 반드시 초기화
// const empty; // 에러!
const initialized = 'value'; // 성공

// 다중 선언
let x = 1, y = 2, z = 3;
const PI = 3.14, E = 2.71;

// 재선언 불가
let message = 'hello';
// let message = 'hi'; // 에러!
```

---

## 📌 **let vs const 선택 가이드**

### **1️⃣ 사용 기준**

| 상황 | 선택 | 이유 |
| --- | --- | --- |
| **값이 변하지 않는 경우** | `const` | 의도치 않은 변경 방지 |
| **값이 변해야 하는 경우** | `let` | 재할당 필요 |
| **반복문 카운터** | `let` | 값이 계속 변경됨 |
| **설정값, 상수** | `const` | 고정된 값 |

### **2️⃣ 권장 사용 패턴**

```javascript
// ✅ 좋은 예 - const 우선 사용
const API_URL = 'https://api.example.com';
const user = { name: 'John', age: 25 };
const numbers = [1, 2, 3, 4, 5];

// ✅ 좋은 예 - 재할당이 필요한 경우만 let
let counter = 0;
for (let i = 0; i < 10; i++) {
    counter += i;
}

// ❌ 나쁜 예 - 불필요한 let 사용
let message = 'Hello'; // const를 사용하는 것이 더 좋음
```

---

## 📌 **식별자 (Identifier)**

### **1️⃣ 식별자 명명 규칙**

| 규칙 | 허용 | 금지 | 예제 |
| --- | --- | --- | --- |
| **사용 가능 문자** | 문자, 숫자, $, _ | 특수문자 | `name1`, `$value`, `_private` |
| **시작 문자** | 문자, $, _ | 숫자 | `name` ⭕, `1name` ❌ |
| **예약어** | 일반 단어 | JavaScript 키워드 | `function` ❌, `myFunction` ⭕ |
| **한글** | 기술적 가능 | 권장하지 않음 | `변수` 가능하지만 비추천 |

### **2️⃣ 명명 관례 (Convention)**

| 관례 | 설명 | 예제 | 사용 위치 |
| --- | --- | --- | --- |
| **Camel Case** | 각 단어 첫글자 대문자 | `firstName`, `getUserName` | 변수, 함수 |
| **Pascal Case** | 모든 단어 첫글자 대문자 | `UserProfile`, `DataManager` | 클래스, 생성자 |
| **Snake Case** | 언더스코어로 구분 | `user_name`, `api_key` | JavaScript에서 비권장 |
| **상수** | 모두 대문자 | `MAX_COUNT`, `API_URL` | 상수값 |

💡 **식별자 예제**

```javascript
// ✅ 올바른 식별자
const userName = 'john'; // Camel Case
const API_BASE_URL = 'https://api.com'; // 상수
let $element = document.querySelector('#app');
let _privateVar = 'secret';

// ❌ 잘못된 식별자
// const 1name = 'error'; // 숫자로 시작
// const function = 'error'; // 예약어 사용
// const user-name = 'error'; // 하이픈 사용

// 관례에 따른 명명
class UserManager { } // Pascal Case
function calculateTotal() { } // Camel Case
const MAX_RETRY_COUNT = 3; // 상수
```

---

## 📌 **타입 (Type)**

### **1️⃣ JavaScript 기본 타입**

| 타입 | 설명 | typeof 결과 | 예제 |
| --- | --- | --- | --- |
| **number** | 숫자 | `'number'` | `1`, `3.14`, `NaN`, `Infinity` |
| **string** | 문자열 | `'string'` | `'hello'`, `"world"` |
| **boolean** | 불린 | `'boolean'` | `true`, `false` |
| **undefined** | 정의되지 않음 | `'undefined'` | `undefined` |
| **null** | 널 값 | `'object'` | `null` |
| **object** | 객체 | `'object'` | `{}`, `[]`, `function` |

### **2️⃣ typeof 연산자 사용법**

💡 **타입 확인 예제**

```javascript
// 기본 타입 확인
typeof 42; // 'number'
typeof 'hello'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'

// 주의: null의 특이한 동작
typeof null; // 'object' (버그지만 호환성 유지)

// 객체 타입들
typeof {}; // 'object'
typeof []; // 'object'
typeof function() {}; // 'function'

// 변수의 타입 확인
const name = 'JavaScript';
const age = 25;
const isActive = true;

console.log(`name은 ${typeof name} 타입입니다.`);
console.log(`age는 ${typeof age} 타입입니다.`);
console.log(`isActive는 ${typeof isActive} 타입입니다.`);
```

### **3️⃣ 타입 변환**

| 변환 방법 | 목적 | 예제 |
| --- | --- | --- |
| **명시적 변환** | 의도적 타입 변경 | `String(123)`, `Number('456')` |
| **암시적 변환** | 자동 타입 변경 | `'1' + 2` → `'12'` |

💡 **타입 변환 예제**

```javascript
// 명시적 타입 변환
const num = 123;
const str = String(num); // '123'
const bool = Boolean(1); // true

const text = '456';
const converted = Number(text); // 456

// 암시적 타입 변환 (주의 필요!)
1 + '2'; // '12' (문자열 결합)
'3' - 1; // 2 (숫자 연산)
!!'hello'; // true (불린 변환)
``` 