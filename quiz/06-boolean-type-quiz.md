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

## 서술형 문제

### 11. truthy와 falsy의 개념을 설명하고, 이것이 조건문에서 어떻게 활용되는지 서술하시오.

### 12. 논리 연산자 `&&`와 `||`의 단축 평가(short-circuit evaluation) 동작 방식을 설명하시오.

### 13. `==`와 `===`의 차이점을 설명하고, 어느 것을 사용하는 것이 좋은지 서술하시오.

## 코딩 문제

### 14. 다음 값들을 boolean으로 변환하는 코드를 작성하시오.
- `''` (빈 문자열)
- `'hello'`
- `0`
- `42`
- `null`

### 15. 사용자가 입력한 값이 유효한지 검사하는 함수를 작성하시오. (빈 문자열, null, undefined는 무효)

### 16. 다음 조건을 만족하는 함수를 작성하시오.
- 두 개의 매개변수를 받음
- 둘 다 truthy이면 `'both'` 반환
- 하나만 truthy이면 `'one'` 반환
- 둘 다 falsy이면 `'none'` 반환

## 응용 문제

### 17. 다음 표현식들의 결과를 예상하고 설명하시오.
```js
console.log(null || undefined || 0 || 'default');
console.log(true && 'hello' && 42);
console.log(false && 'never executed');
```

### 18. 기본값 설정을 위한 OR 연산자 패턴과 조건부 실행을 위한 AND 연산자 패턴의 예제를 각각 작성하시오.

### 19. 다음 코드의 문제점을 찾고 개선된 코드를 작성하시오.
```js
function processUser(user) {
  if (user.name != null) {
    console.log('사용자 이름:', user.name);
  }
}
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

### 서술형 정답
11. truthy는 boolean 컨텍스트에서 `true`로 평가되는 값이고, falsy는 `false`로 평가되는 값이다. 조건문에서 명시적으로 boolean 값을 사용하지 않아도 조건을 판단할 수 있게 해준다.

12. `&&`는 첫 번째 falsy 값을 만나면 즉시 그 값을 반환하고, 모두 truthy면 마지막 값을 반환한다. `||`는 첫 번째 truthy 값을 만나면 즉시 그 값을 반환하고, 모두 falsy면 마지막 값을 반환한다.

13. `==`는 타입 변환을 수행한 후 비교하고, `===`는 타입과 값을 모두 비교한다. 예측 가능한 동작을 위해 `===`를 사용하는 것이 좋다.

### 코딩 정답
14.
```js
console.log(Boolean(''));     // false
console.log(Boolean('hello')); // true
console.log(Boolean(0));      // false
console.log(Boolean(42));     // true
console.log(Boolean(null));   // false
```

15.
```js
function isValid(value) {
  return value !== '' && value !== null && value !== undefined;
}
// 또는
function isValid(value) {
  return Boolean(value);
}
```

16.
```js
function checkValues(a, b) {
  if (a && b) {
    return 'both';
  } else if (a || b) {
    return 'one';
  } else {
    return 'none';
  }
}
```

### 응용 정답
17.
```js
console.log(null || undefined || 0 || 'default'); // 'default'
console.log(true && 'hello' && 42); // 42
console.log(false && 'never executed'); // false
```

18.
```js
// 기본값 설정 (OR 패턴)
function greet(name) {
  name = name || 'Anonymous';
  console.log('Hello, ' + name);
}

// 조건부 실행 (AND 패턴)
function processData(data) {
  data && data.length && console.log('Processing data...');
}
```

19.
문제점: `!=` 사용으로 예상치 못한 타입 변환 발생 가능
```js
function processUser(user) {
  if (user && user.name !== null && user.name !== undefined) {
    console.log('사용자 이름:', user.name);
  }
}
// 또는
function processUser(user) {
  if (user?.name) {
    console.log('사용자 이름:', user.name);
  }
}
```