# 03. 값, 변수, 타입

## 값(Value)
JavaScript에서 값은 프로그램에서 조작할 수 있는 데이터입니다.

### 원시 값(Primitive Values)
- Number: 숫자
- String: 문자열
- Boolean: 불린
- undefined: 정의되지 않음
- null: 빈 값
- Symbol: 심볼 (ES6+)
- BigInt: 큰 정수 (ES2020+)

### 객체 값(Object Values)
- Object: 객체
- Array: 배열
- Function: 함수

## 변수(Variable)
값을 저장하는 메모리 공간에 붙인 이름입니다.

### 변수 선언
```javascript
var name;
let age;
const PI = 3.14159;
```

### 변수 명명 규칙
- 영문자, 숫자, _, $ 사용 가능
- 숫자로 시작할 수 없음
- 예약어 사용 불가
- 대소문자 구분

## 타입(Type)
JavaScript는 동적 타입 언어입니다.

### typeof 연산자
```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (주의!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"
```

## 타입 변환
### 명시적 변환
```javascript
String(123); // "123"
Number("123"); // 123
Boolean(1); // true
```

### 암시적 변환
```javascript
"5" + 3; // "53"
"5" - 3; // 2
"5" * 3; // 15
``` 