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

## 서술형 문제

### 11. `null`과 `undefined`의 의미적 차이를 설명하고, 각각 언제 사용되는지 서술하시오.

### 12. `null`의 typeof가 `'object'`인 이유와 이것이 JavaScript의 어떤 특징을 보여주는지 설명하시오.

### 13. `null` 또는 `undefined` 값을 안전하게 확인하는 방법들을 제시하고 각각의 장단점을 설명하시오.

## 코딩 문제

### 14. 다음 변수들의 값과 타입을 확인하는 코드를 작성하시오.
```js
let a;
let b = null;
let c = undefined;
```

### 15. 매개변수가 `null` 또는 `undefined`일 때 기본값을 설정하는 함수를 작성하시오.

### 16. 객체의 속성이 존재하고 `null`이나 `undefined`가 아닌지 확인하는 함수를 작성하시오.

### 17. 다음 상황들을 구분하여 처리하는 함수를 작성하시오.
- 값이 `null`인 경우
- 값이 `undefined`인 경우  
- 값이 존재하는 경우

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 설명하시오.
```js
let obj = {
  name: null,
  age: undefined
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.address);
```

### 19. Optional Chaining (`?.`) 연산자가 없던 시절에 안전하게 중첩된 객체 속성에 접근하는 방법을 작성하시오.

### 20. `null` 병합 연산자(`??`)와 OR 연산자(`||`)의 차이점을 예제와 함께 설명하시오.

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

### 서술형 정답
11. `undefined`는 '값이 정의되지 않음'을 의미하며 JavaScript 엔진이 자동으로 할당한다. `null`은 '의도적으로 값이 없음'을 나타내며 프로그래머가 명시적으로 할당한다.

12. `null`의 typeof가 `'object'`인 것은 JavaScript 초기 버전의 버그로, 하위 호환성을 위해 수정되지 않았다. 이는 JavaScript가 완벽하지 않은 언어임을 보여주는 예시이다.

13. 
- `value == null`: null과 undefined 모두 확인 (간단하지만 타입 변환 발생)
- `value === null || value === undefined`: 명시적 확인 (정확하지만 길다)
- `typeof value === 'undefined'`: undefined만 확인
- `value != null`: null과 undefined가 아닌 경우 확인

### 코딩 정답
14.
```js
let a;
let b = null;
let c = undefined;

console.log('a:', a, typeof a);           // undefined 'undefined'
console.log('b:', b, typeof b);           // null 'object'
console.log('c:', c, typeof c);           // undefined 'undefined'
```

15.
```js
function greet(name) {
  if (name == null) {  // null과 undefined 모두 처리
    name = 'Anonymous';
  }
  return `Hello, ${name}!`;
}

// ES6+ 기본 매개변수 사용
function greet(name = 'Anonymous') {
  return `Hello, ${name}!`;
}
```

16.
```js
function hasValidProperty(obj, prop) {
  return obj != null && obj.hasOwnProperty(prop) && obj[prop] != null;
}

// 또는
function hasValidProperty(obj, prop) {
  return obj?.[prop] != null;
}
```

17.
```js
function checkValue(value) {
  if (value === null) {
    return 'Value is null';
  } else if (value === undefined) {
    return 'Value is undefined';
  } else {
    return 'Value exists: ' + value;
  }
}
```

### 응용 정답
18.
```js
console.log(obj.name);    // null
console.log(obj.age);     // undefined  
console.log(obj.address); // undefined
```
`name`은 명시적으로 `null`로 설정되었고, `age`는 `undefined`로 설정되었으며, `address`는 존재하지 않는 속성이므로 `undefined`이다.

19.
```js
// 전통적인 방법
function safeAccess(obj) {
  return obj && obj.user && obj.user.profile && obj.user.profile.name;
}

// 함수로 추상화
function get(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key];
  }, obj);
}

// 사용: get(data, 'user.profile.name')
```

20.
```js
// || 연산자: 모든 falsy 값에 대해 기본값 제공
let name1 = '' || 'default';        // 'default'
let name2 = 0 || 'default';         // 'default'

// ?? 연산자: null과 undefined에만 기본값 제공
let name3 = '' ?? 'default';        // ''
let name4 = 0 ?? 'default';         // 0
let name5 = null ?? 'default';      // 'default'
```