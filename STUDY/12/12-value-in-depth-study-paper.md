# 12. 값 더 알아보기

## let, const와 블록 스코프

### 특징
- **재선언 불허**: 같은 이름의 변수 재선언 불가
- **선언 전 사용 불가**: 호이스팅이 일어나지 않음
- **블록 스코프**: `{}` 블록 내에서만 유효

```javascript
let foo = 1;
let foo = 2; // 에러: 중복 선언

console.log(bar); // 에러: 선언 전 사용
let bar = 3;

if (true) {
  let i = 0;
}
console.log(i); // 에러: 블록 외부에서 접근 불가
```

## var 변수와 함수 스코프

### var의 특징
- **재선언 허용**: 같은 이름 여러 번 선언 가능
- **호이스팅**: 변수 선언이 스코프 최상단으로 끌어올려짐
- **함수 스코프**: 함수 블록에서만 스코프 형성

```javascript
var foo = 1;
var foo = 2; // 에러 없음

console.log(bar); // undefined (에러 없음)
var bar = 3;

for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i); // 3 (블록 외부에서도 접근 가능)
```

## 전역 변수와 전역 객체

### 전역 변수의 문제점
- 어디서든 접근/수정 가능 → 예측하기 어려움
- 프로그램 부분들 간 과도한 결합
- 코드 이해와 유지보수 어려움

### 전역 객체
- 브라우저: `window`
- Node.js: `global`
- 웹 워커: `self`

```javascript
let globalVar = 'hello';
console.log(window.globalVar); // 'hello'
```

## 참조 (Reference)

### 원시 타입과 참조 타입
- **원시 타입**: 값 자체가 복사됨
- **참조 타입**: 참조(주소)가 복사됨

```javascript
// 원시 타입
let a = 1;
let b = a;
a = 2;
console.log(b); // 1 (변경되지 않음)

// 참조 타입
let obj1 = { prop: 1 };
let obj2 = obj1;
obj1.prop = 2;
console.log(obj2.prop); // 2 (함께 변경됨)
```

## 객체의 같음 (Equality)

```javascript
{} === {}; // false (서로 다른 객체)
[] === []; // false (서로 다른 배열)

const obj = {};
obj === obj; // true (같은 객체 참조)
```

## 불변성 (Immutability)

### 얕은 복사 vs 깊은 복사
```javascript
// 얕은 복사
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 3;
console.log(original.b.c); // 3 (중첩 객체는 여전히 공유)

// 깊은 복사 (JSON 방법)
const deep = JSON.parse(JSON.stringify(original));
```

### Object.freeze()
```javascript
const obj = Object.freeze({ prop: 1 });
obj.prop = 2; // 무시됨 (엄격 모드에서는 에러)
console.log(obj.prop); // 1
```

## 변수 사용 권장사항
1. **const 우선 사용**: 재대입이 필요 없을 때
2. **let 차선 사용**: 재대입이 필요할 때  
3. **var 사용 금지**: 예상치 못한 동작 가능성

## 스코프 체인
안쪽 스코프에서 바깥쪽 스코프의 변수에 접근 가능하지만, 반대는 불가능합니다.

```javascript
let global = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    console.log(global, outerVar, innerVar); // 모두 접근 가능
  }
  
  inner();
  // console.log(innerVar); // 에러: 접근 불가
}
``` 