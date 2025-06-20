# 04. number 타입 - 퀴즈

## 객관식 문제

### 1. 다음 중 number 타입 리터럴이 아닌 것은?
a) `7`
b) `0b111`
c) `'123'`
d) `0xff`

### 2. `0.1 + 0.2`의 계산 결과가 정확히 `0.3`이 아닌 이유는?
a) JavaScript의 버그 때문
b) 부동소수점 방식으로 소수를 표현하기 때문
c) 계산기가 잘못되었기 때문
d) 브라우저의 문제 때문

### 3. `NaN`에 대한 설명으로 옳지 않은 것은?
a) 'Not a Number'의 약자이다
b) 자기 자신과 같지 않은 값이다
c) `NaN === NaN`의 결과는 `true`이다
d) 계산 불가능한 연산의 결과값이다

### 4. 어떤 값이 `NaN`인지 확인하는 올바른 방법은?
a) `value === NaN`
b) `value == NaN`
c) `Number.isNaN(value)`
d) `typeof value === 'NaN'`

### 5. `++a`와 `a++`의 차이점은?
a) 완전히 같다
b) `++a`는 증가 후 값 반환, `a++`는 증가 전 값 반환
c) `++a`는 1씩 증가, `a++`는 2씩 증가
d) `++a`는 에러가 발생한다

### 6. `Number.isFinite(Infinity)`의 결과는?
a) `true`
b) `false`
c) `undefined`
d) 에러 발생

## 단답형 문제

### 7. `typeof 10_000`의 결과를 쓰시오.

### 8. `Number.isInteger(0.1)`의 결과를 쓰시오.

### 9. `parseInt('110', 2)`의 결과를 쓰시오.

### 10. `1 / 0`의 결과를 쓰시오.

## 코딩 문제

### 11. 다음 연산의 결과를 예상하고 실제 결과를 확인하는 코드를 작성하시오.
```js
let x = 5;
console.log(++x);
console.log(x++);
console.log(x);
```

### 12. 다음 코드의 실행 결과를 쓰시오.
```js
const a = 0.1;
const b = 0.2;
const result = a + b;
console.log(result);
console.log(result === 0.3);
```

### 13. 다음 코드에서 올바른 결과가 나오도록 빈 칸을 채우시오.
```js
const bigNumber = 9007199254740991n;
const regularNumber = 42;
// BigInt와 일반 숫자를 더하기 위해 변환
const result = bigNumber + _______(regularNumber);
```

---

## 정답

### 객관식 정답
1. c) `'123'` (문자열)
2. b) 부동소수점 방식으로 소수를 표현하기 때문
3. c) `NaN === NaN`의 결과는 `true`이다 (실제로는 `false`)
4. c) `Number.isNaN(value)`
5. b) `++a`는 증가 후 값 반환, `a++`는 증가 전 값 반환
6. b) `false`

### 단답형 정답
7. `'number'`
8. `false`
9. `6`
10. `Infinity`

### 코딩 정답
11.
```js
let x = 5;
console.log(++x); // 6 (먼저 증가, 증가된 값 반환)
console.log(x++); // 6 (현재 값 반환 후 증가)
console.log(x);   // 7 (최종 값)
```

12.
```js
const a = 0.1;
const b = 0.2;
const result = a + b;
console.log(result);        // 0.30000000000000004
console.log(result === 0.3); // false
```

13.
```js
const result = bigNumber + BigInt(regularNumber);
```

