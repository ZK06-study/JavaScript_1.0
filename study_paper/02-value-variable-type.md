# 값, 변수, 타입 학습지

## 1. 값(Value)과 리터럴(Literal)

| 개념 | 설명 | 예시 |
|------|------|------|
| **값** | 프로그램이 조작하는 데이터 | 42, 'Hello', true |
| **리터럴** | 값을 직접 표현하는 방법 | 숫자: 123, 문자열: 'text' |
| **표현식** | 값으로 평가되는 코드 | 10 + 20, 'Hello' + 'World' |

## 2. 변수 선언

| 키워드 | 재선언 | 재할당 | 스코프 | 호이스팅 |
|--------|--------|--------|--------|----------|
| **var** | ✅ | ✅ | 함수 스코프 | undefined로 초기화 |
| **let** | ❌ | ✅ | 블록 스코프 | TDZ (참조 불가) |
| **const** | ❌ | ❌ | 블록 스코프 | TDZ (참조 불가) |

### 코드 예시
```javascript
// var - 재선언, 재할당 가능
var name = 'Kim';
var name = 'Lee';  // 재선언 가능
name = 'Park';     // 재할당 가능

// let - 재할당만 가능
let age = 20;
// let age = 30;   // 오류: 재선언 불가
age = 30;          // 재할당 가능

// const - 둘 다 불가
const PI = 3.14159;
// const PI = 3.14; // 오류: 재선언 불가
// PI = 3.14;       // 오류: 재할당 불가
```

## 3. 식별자 규칙

| 규칙 | 설명 | 올바른 예시 | 잘못된 예시 |
|------|------|-------------|-------------|
| **첫 글자** | 문자, _, $ 만 가능 | name, _temp, $element | 2name, #value |
| **이후 글자** | 문자, 숫자, _, $ 가능 | userName2, _count | user-name, user name |
| **예약어** | JavaScript 키워드 사용 불가 | myClass, myFunction | class, function |
| **대소문자** | 구분함 | name ≠ Name ≠ NAME | - |

### 네이밍 컨벤션
```javascript
// 카멜케이스 (권장)
let firstName = 'John';
let userAge = 25;

// 스네이크케이스
let first_name = 'John';
let user_age = 25;

// 상수는 대문자 + 언더스코어
const MAX_SIZE = 100;
const API_URL = 'https://api.example.com';
```

## 4. 데이터 타입

### 원시 타입 (Primitive Type)

| 타입 | 설명 | 리터럴 예시 | typeof 결과 |
|------|------|-------------|-------------|
| **number** | 숫자 | 42, 3.14, -7 | 'number' |
| **string** | 문자열 | 'hello', "world" | 'string' |
| **boolean** | 참/거짓 | true, false | 'boolean' |
| **undefined** | 값이 할당되지 않음 | undefined | 'undefined' |
| **null** | 의도적인 빈 값 | null | 'object' |
| **symbol** | 고유한 식별자 | Symbol('id') | 'symbol' |

### 객체 타입 (Object Type)

| 타입 | 설명 | 예시 | typeof 결과 |
|------|------|------|-------------|
| **object** | 객체 | {name: 'Kim'} | 'object' |
| **array** | 배열 | [1, 2, 3] | 'object' |
| **function** | 함수 | function() {} | 'function' |

## 5. 타입 확인

```javascript
// typeof 연산자
console.log(typeof 42);        // 'number'
console.log(typeof 'hello');   // 'string'
console.log(typeof true);      // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null);      // 'object' (버그)
console.log(typeof {});        // 'object'
console.log(typeof []);        // 'object'
console.log(typeof function(){}); // 'function'

// 배열 확인
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false

// null 확인
console.log(value === null);        // null 체크
```

## 6. 타입 변환

### 묵시적 타입 변환 (자동 변환)
```javascript
// 문자열 연결
console.log('5' + 3);    // '53' (숫자가 문자열로 변환)
console.log(5 + '3');    // '53'

// 산술 연산
console.log('5' - 3);    // 2 (문자열이 숫자로 변환)
console.log('5' * 2);    // 10
console.log('5' / 2);    // 2.5

// 불린 변환
console.log(!!'hello');  // true
console.log(!!0);        // false
```

### 명시적 타입 변환 (의도적 변환)
```javascript
// 숫자로 변환
Number('123');     // 123
parseInt('123px'); // 123
parseFloat('3.14'); // 3.14

// 문자열로 변환
String(123);       // '123'
(123).toString();  // '123'

// 불린으로 변환
Boolean(1);        // true
Boolean(0);        // false
```

## 7. 스코프

| 스코프 종류 | 설명 | 예시 |
|-------------|------|------|
| **전역 스코프** | 코드 어디서든 접근 가능 | 함수 밖에서 선언 |
| **함수 스코프** | 함수 내부에서만 접근 가능 | var로 함수 내 선언 |
| **블록 스코프** | 블록({}) 내부에서만 접근 가능 | let, const로 블록 내 선언 |

```javascript
// 전역 스코프
var globalVar = '전역';

function myFunction() {
    // 함수 스코프
    var functionVar = '함수';
    
    if (true) {
        // 블록 스코프
        let blockLet = '블록';
        const blockConst = '블록';
        var functionVar2 = '함수2'; // 함수 스코프
    }
    
    console.log(functionVar);  // '함수'
    console.log(functionVar2); // '함수2'
    // console.log(blockLet);  // 오류: 블록 밖에서 접근 불가
}
```

## 8. 학습 체크리스트

- [ ] var, let, const의 차이점을 설명할 수 있다
- [ ] 식별자 명명 규칙을 안다
- [ ] 원시 타입과 객체 타입을 구분할 수 있다
- [ ] typeof 연산자를 사용할 수 있다
- [ ] 타입 변환을 이해한다
- [ ] 스코프의 종류와 차이점을 안다 