# 15. 연산자 더 알아보기

## 산술 연산자

### 기본 산술 연산자
```javascript
console.log(10 + 3);  // 13 (덧셈)
console.log(10 - 3);  // 7  (뺄셈)
console.log(10 * 3);  // 30 (곱셈)
console.log(10 / 3);  // 3.333... (나눗셈)
console.log(10 % 3);  // 1  (나머지)
console.log(10 ** 3); // 1000 (거듭제곱)
```

### 증감 연산자
```javascript
let a = 5;

console.log(++a); // 6 (전위 증가: 먼저 증가 후 값 반환)
console.log(a++); // 6 (후위 증가: 값 반환 후 증가)
console.log(a);   // 7

console.log(--a); // 6 (전위 감소)
console.log(a--); // 6 (후위 감소)
console.log(a);   // 5
```

## 비교 연산자

### 동등 연산자 (==)와 일치 연산자 (===)
```javascript
// 동등 연산자 (타입 변환 후 비교)
console.log(1 == '1');     // true
console.log(true == 1);    // true
console.log(null == undefined); // true

// 일치 연산자 (타입과 값 모두 같아야 함)
console.log(1 === '1');    // false
console.log(true === 1);   // false
console.log(null === undefined); // false
```

### 대소 비교
```javascript
console.log(5 > 3);   // true
console.log(5 >= 5);  // true
console.log(3 < 5);   // true
console.log(3 <= 2);  // false

// 문자열 비교 (사전 순서)
console.log('apple' < 'banana'); // true
console.log('Apple' < 'apple');  // true (대문자가 먼저)
```

## 논리 연산자

### AND (&&), OR (||), NOT (!)
```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(!true);          // false
console.log(!false);         // true
```

### 단축 평가 (Short-circuit Evaluation)
```javascript
// AND: 첫 번째 falsy 값 또는 마지막 값 반환
console.log(0 && 'hello');     // 0
console.log('hello' && 'world'); // 'world'

// OR: 첫 번째 truthy 값 또는 마지막 값 반환
console.log(0 || 'default');   // 'default'
console.log('hello' || 'world'); // 'hello'
```

### Nullish 병합 연산자 (??)
```javascript
const value1 = null ?? 'default';     // 'default'
const value2 = undefined ?? 'default'; // 'default'
const value3 = 0 ?? 'default';        // 0 (falsy이지만 null/undefined가 아님)
const value4 = '' ?? 'default';       // '' (빈 문자열)
```

## 할당 연산자

### 복합 할당 연산자
```javascript
let x = 10;

x += 5;  // x = x + 5;  → 15
x -= 3;  // x = x - 3;  → 12
x *= 2;  // x = x * 2;  → 24
x /= 4;  // x = x / 4;  → 6
x %= 4;  // x = x % 4;  → 2
x **= 3; // x = x ** 3; → 8
```

### 논리 할당 연산자 (ES2021)
```javascript
let a = false;
let b = null;
let c = 'hello';

a ||= 'default';  // a가 falsy면 'default' 할당 → 'default'
b ??= 'default';  // b가 null/undefined면 'default' 할당 → 'default'
c &&= 'world';    // c가 truthy면 'world' 할당 → 'world'
```

## 삼항 연산자 (Conditional Operator)

```javascript
const age = 20;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status); // 'adult'

// 중첩 사용
const score = 85;
const grade = score >= 90 ? 'A' : 
              score >= 80 ? 'B' : 
              score >= 70 ? 'C' : 'F';
console.log(grade); // 'B'
```

## typeof 연산자

```javascript
console.log(typeof 42);          // 'number'
console.log(typeof 'hello');     // 'string'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof null);        // 'object' (주의!)
console.log(typeof {});          // 'object'
console.log(typeof []);          // 'object' (배열도 객체)
console.log(typeof function(){}); // 'function'
```

## instanceof 연산자

```javascript
function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log([] instanceof Array);      // true
console.log([] instanceof Object);     // true
```

## in 연산자

```javascript
const obj = { name: 'Alice', age: 30 };

console.log('name' in obj);     // true
console.log('height' in obj);   // false
console.log('toString' in obj); // true (상속된 속성)

// 배열에서 사용
const arr = [1, 2, 3];
console.log(0 in arr); // true (인덱스 확인)
console.log(3 in arr); // false
```

## 비트 연산자

```javascript
// 비트 AND (&)
console.log(5 & 3); // 1 (101 & 011 = 001)

// 비트 OR (|)
console.log(5 | 3); // 7 (101 | 011 = 111)

// 비트 XOR (^)
console.log(5 ^ 3); // 6 (101 ^ 011 = 110)

// 비트 NOT (~)
console.log(~5); // -6

// 왼쪽 시프트 (<<)
console.log(5 << 1); // 10 (101 → 1010)

// 오른쪽 시프트 (>>)
console.log(5 >> 1); // 2 (101 → 10)
```

## 쉼표 연산자

```javascript
let a, b, c;
a = (b = 1, c = 2, b + c); // a = 3

console.log(a); // 3
console.log(b); // 1
console.log(c); // 2
```

## 연산자 우선순위

### 높은 우선순위부터 낮은 순서
1. `()` - 괄호
2. `++`, `--` - 후위 증감
3. `++`, `--`, `!`, `~`, `typeof` - 전위 연산자
4. `**` - 거듭제곱
5. `*`, `/`, `%` - 곱셈, 나눗셈, 나머지
6. `+`, `-` - 덧셈, 뺄셈
7. `<<`, `>>`, `>>>` - 비트 시프트
8. `<`, `<=`, `>`, `>=`, `in`, `instanceof` - 관계 연산자
9. `==`, `!=`, `===`, `!==` - 동등 연산자
10. `&`, `^`, `|` - 비트 연산자
11. `&&` - 논리 AND
12. `||` - 논리 OR
13. `??` - Nullish 병합
14. `? :` - 삼항 연산자
15. `=`, `+=`, `-=` 등 - 할당 연산자

```javascript
// 우선순위 예제
const result = 2 + 3 * 4; // 14 (곱셈이 먼저)
const result2 = (2 + 3) * 4; // 20 (괄호가 먼저)
```

## 자동 타입 변환 (Type Coercion)

### 문자열 변환
```javascript
console.log('5' + 3);    // '53' (숫자가 문자열로 변환)
console.log('5' + true); // '5true'
console.log('5' + null); // '5null'
```

### 숫자 변환
```javascript
console.log('5' - 3);    // 2 (문자열이 숫자로 변환)
console.log('5' * 2);    // 10
console.log(true + 1);   // 2 (true → 1)
console.log(false + 1);  // 1 (false → 0)
```

### 불린 변환
```javascript
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean('hello'));   // true
console.log(Boolean(1));         // true
``` 