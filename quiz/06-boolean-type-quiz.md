# 06. boolean 타입 - 퀴즈

## 객관식 문제

### 1. JavaScript에서 boolean 타입의 값은?
a) `true`, `false`
b) `1`, `0`
c) `yes`, `no`
d) `on`, `off`

### 2. `typeof true`의 결과는?
a) `'bool'`
b) `'boolean'`
c) `'true'`
d) `'logical'`

### 3. falsy 값이 아닌 것은?
a) `0`
b) `''`
c) `'0'`
d) `null`

### 4. `!!0`의 결과는?
a) `true`
b) `false`
c) `0`
d) `undefined`

### 5. `true && false`의 결과는?
a) `true`
b) `false`
c) `1`
d) `0`

### 6. `false || 'hello'`의 결과는?
a) `false`
b) `true`
c) `'hello'`
d) `undefined`

## 단답형 문제

### 7. `Boolean(0)`의 결과를 쓰시오.

### 8. `Boolean('hello')`의 결과를 쓰시오.

### 9. `true || false && true`의 결과를 쓰시오.

### 10. JavaScript에서 falsy 값 6가지를 나열하시오.

## 코딩 문제

### 11. 다음 값들을 boolean으로 변환한 결과를 쓰시오.
```js
Boolean('');
Boolean('hello');
Boolean(0);
Boolean(42);
```

---

## 정답

### 객관식 정답
1. a) `true`, `false`
2. b) `'boolean'`
3. c) `'0'` (문자열 '0'은 truthy)
4. b) `false`
5. b) `false`
6. c) `'hello'`

### 단답형 정답
7. `false`
8. `true`
9. `true`
10. `false`, `0`, `''`, `null`, `undefined`, `NaN`

### 코딩 정답
11.
```js
Boolean('');      // false
Boolean('hello'); // true
Boolean(0);       // false
Boolean(42);      // true
```