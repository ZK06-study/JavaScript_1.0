# 숫자 타입 학습지

## 1. 숫자 리터럴

| 진법 | 표기법 | 예시 | 설명 |
|------|--------|------|------|
| **10진법** | 그대로 | 123, 3.14, -42 | 일반적인 숫자 표기 |
| **2진법** | 0b 또는 0B | 0b1010, 0B1111 | 2진수 (ES6) |
| **8진법** | 0o 또는 0O | 0o777, 0O123 | 8진수 (ES6) |
| **16진법** | 0x 또는 0X | 0xFF, 0x1A2B | 16진수 |

### 코드 예시
```javascript
// 다양한 진법 표기
console.log(10);        // 10 (10진법)
console.log(0b1010);    // 10 (2진법)
console.log(0o12);      // 10 (8진법)
console.log(0xa);       // 10 (16진법)

// 소수점 표기
console.log(3.14);      // 3.14
console.log(.5);        // 0.5
console.log(5.);        // 5

// 지수 표기법
console.log(1e3);       // 1000
console.log(2e-3);      // 0.002
console.log(5.2e2);     // 520
```

## 2. 산술 연산자

| 연산자 | 의미 | 예시 | 결과 |
|--------|------|------|------|
| **+** | 덧셈 | 5 + 3 | 8 |
| **-** | 뺄셈 | 5 - 3 | 2 |
| **\*** | 곱셈 | 5 * 3 | 15 |
| **/** | 나눗셈 | 5 / 2 | 2.5 |
| **%** | 나머지 | 5 % 3 | 2 |
| **\*\*** | 거듭제곱 | 2 ** 3 | 8 |

### 단항 연산자

| 연산자 | 의미 | 예시 | 설명 |
|--------|------|------|------|
| **+** | 양수 변환 | +'5' | 5 (문자열을 숫자로) |
| **-** | 음수 변환 | -5 | -5 |
| **++** | 증가 | x++, ++x | 1 증가 |
| **--** | 감소 | x--, --x | 1 감소 |

```javascript
let x = 5;
console.log(x++);  // 5 (후위 증가: 먼저 값 반환, 후에 증가)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (전위 증가: 먼저 증가, 후에 값 반환)
console.log(y);    // 6
```

## 3. 연산자 우선순위

| 우선순위 | 연산자 | 설명 |
|----------|--------|------|
| **1** | () | 괄호 |
| **2** | **, ++, -- | 지수, 증감 |
| **3** | *, /, % | 곱셈, 나눗셈, 나머지 |
| **4** | +, - | 덧셈, 뺄셈 |
| **5** | 비교 연산자 | <, >, <=, >= |
| **6** | 동등 연산자 | ==, !=, ===, !== |

```javascript
// 우선순위 예시
console.log(2 + 3 * 4);     // 14 (곱셈 먼저)
console.log((2 + 3) * 4);   // 20 (괄호 먼저)
console.log(2 ** 3 ** 2);   // 512 (우결합성: 2**(3**2))
```

## 4. 특수한 숫자 값

| 값 | 설명 | 발생 상황 | 확인 방법 |
|----|------|-----------|----------|
| **Infinity** | 양의 무한대 | 1/0, 매우 큰 수 | isFinite() |
| **-Infinity** | 음의 무한대 | -1/0, 매우 작은 수 | isFinite() |
| **NaN** | 숫자가 아님 | 0/0, 'abc' * 2 | isNaN(), Number.isNaN() |

```javascript
// Infinity
console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
console.log(Infinity + 1);  // Infinity

// NaN
console.log(0 / 0);         // NaN
console.log('abc' * 2);     // NaN
console.log(Math.sqrt(-1)); // NaN

// NaN의 특징
console.log(NaN === NaN);   // false (자기 자신과도 다름)
console.log(isNaN(NaN));    // true
console.log(Number.isNaN(NaN)); // true (더 정확함)
```

## 5. 부동소수점

| 개념 | 설명 | 예시 |
|------|------|------|
| **정밀도 문제** | 소수점 계산의 부정확성 | 0.1 + 0.2 ≠ 0.3 |
| **해결책** | 정수로 변환 후 계산 | (0.1*10 + 0.2*10)/10 |
| **Number.EPSILON** | 최소 오차값 | 매우 작은 수와 비교 |

```javascript
// 부동소수점 문제
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// 해결책 1: 정수로 변환
function addDecimal(a, b) {
    return (a * 10 + b * 10) / 10;
}
console.log(addDecimal(0.1, 0.2)); // 0.3

// 해결책 2: Number.EPSILON 사용
function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); // true
```

## 6. 숫자 관련 전역 함수

| 함수 | 설명 | 예시 | 결과 |
|------|------|------|------|
| **parseInt()** | 정수로 변환 | parseInt('123px') | 123 |
| **parseFloat()** | 실수로 변환 | parseFloat('3.14px') | 3.14 |
| **Number()** | 숫자로 변환 | Number('123') | 123 |
| **isNaN()** | NaN 확인 | isNaN('abc') | true |
| **isFinite()** | 유한수 확인 | isFinite(Infinity) | false |

```javascript
// parseInt - 진법 지정 가능
console.log(parseInt('1010', 2));   // 10 (2진법)
console.log(parseInt('FF', 16));    // 255 (16진법)

// 변환 실패
console.log(parseInt('abc'));       // NaN
console.log(parseFloat('abc'));     // NaN
console.log(Number('abc'));         // NaN

// 부분 변환 vs 전체 변환
console.log(parseInt('123px'));     // 123 (부분 변환)
console.log(Number('123px'));       // NaN (전체 변환)
```

## 7. Math 객체

### 자주 사용하는 메소드

| 메소드 | 설명 | 예시 | 결과 |
|--------|------|------|------|
| **Math.round()** | 반올림 | Math.round(3.7) | 4 |
| **Math.floor()** | 내림 | Math.floor(3.7) | 3 |
| **Math.ceil()** | 올림 | Math.ceil(3.1) | 4 |
| **Math.abs()** | 절댓값 | Math.abs(-5) | 5 |
| **Math.max()** | 최댓값 | Math.max(1,5,3) | 5 |
| **Math.min()** | 최솟값 | Math.min(1,5,3) | 1 |
| **Math.random()** | 난수 | Math.random() | 0~1 사이 |

### Math 상수

| 상수 | 값 | 설명 |
|------|-----|------|
| **Math.PI** | 3.14159... | 원주율 |
| **Math.E** | 2.718... | 자연상수 |

```javascript
// 실용적인 예시
// 1~10 사이 정수 난수
const random = Math.floor(Math.random() * 10) + 1;

// 소수점 둘째 자리까지 반올림
const rounded = Math.round(3.14159 * 100) / 100; // 3.14
```

## 8. 학습 체크리스트

- [ ] 다양한 진법 표기법을 사용할 수 있다
- [ ] 산술 연산자와 우선순위를 안다
- [ ] NaN, Infinity 등 특수값을 이해한다
- [ ] 부동소수점 문제와 해결책을 안다
- [ ] 숫자 변환 함수들을 사용할 수 있다
- [ ] Math 객체의 주요 메소드를 활용할 수 있다 