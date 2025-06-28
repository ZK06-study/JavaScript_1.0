# 07. null과 undefined

## null과 undefined의 차이점

JavaScript에서 값이 없음을 나타내는 두 가지 특별한 값이 있습니다.

### null
- 개발자가 의도적으로 값이 없음을 나타낼 때 사용
- 객체 타입으로 분류됨

### undefined
- 변수가 선언되었지만 값이 할당되지 않은 상태
- 함수의 반환값이 없을 때
- 객체의 존재하지 않는 속성에 접근할 때

## 예제

```javascript
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
```

## 비교

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
``` 