# 07. null과 undefined - 퀴즈

## 객관식 문제

### 1. `null`의 typeof 결과는?
a) `'null'`
b) `'object'`
c) `'undefined'`
d) `'empty'`

### 2. `undefined`의 typeof 결과는?
a) `'null'`
b) `'object'`
c) `'undefined'`
d) `'empty'`

### 3. 변수를 선언만 하고 값을 대입하지 않았을 때의 기본값은?
a) `null`
b) `undefined`
c) `0`
d) `''`

### 4. `null == undefined`의 결과는?
a) `true`
b) `false`
c) `null`
d) `undefined`

### 5. `null === undefined`의 결과는?
a) `true`
b) `false`
c) `null`
d) `undefined`

### 6. 객체에 존재하지 않는 속성에 접근했을 때 반환되는 값은?
a) `null`
b) `undefined`
c) `0`
d) 에러 발생

## 단답형 문제

### 7. 함수에서 명시적으로 `return`하지 않았을 때 반환되는 값은?

### 8. `Boolean(null)`의 결과는?

### 9. `Boolean(undefined)`의 결과는?

### 10. `null`과 `undefined` 모두에 해당하는 공통점 한 가지는?

## 코딩 문제

### 11. 다음 변수들의 값과 타입 확인 결과를 쓰시오.
```js
let a;
let b = null;
console.log(a, typeof a);
console.log(b, typeof b);
```

---

## 정답

### 객관식 정답
1. b) `'object'` (JavaScript의 오래된 버그)
2. c) `'undefined'`
3. b) `undefined`
4. a) `true`
5. b) `false`
6. b) `undefined`

### 단답형 정답
7. `undefined`
8. `false`
9. `false`
10. falsy 값이다 (또는 primitive 타입이다)

### 코딩 정답
11.
```js
undefined 'undefined'
null 'object'
```