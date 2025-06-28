# 17. 함수형 프로그래밍

## 함수형 프로그래밍이란?

함수형 프로그래밍은 **함수를 값으로 다루는** 프로그래밍 패러다임입니다.

### 핵심 개념
- **순수 함수**: 같은 입력에 대해 항상 같은 출력, 부수 효과 없음
- **불변성**: 데이터를 변경하지 않고 새로운 데이터 생성
- **고차 함수**: 함수를 인수로 받거나 함수를 반환하는 함수

## 고차 함수 (Higher-Order Functions)

### Array.prototype.map()
배열의 각 요소를 변환하여 새로운 배열을 만듭니다.

```javascript
const numbers = [1, 2, 3, 4, 5];

// 각 요소를 제곱
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9, 16, 25]

// 문자열로 변환
const strings = numbers.map(x => `Number: ${x}`);
console.log(strings); // ['Number: 1', 'Number: 2', ...]

// 객체 배열 변환
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']
```

### Array.prototype.filter()
조건을 만족하는 요소들로 새로운 배열을 만듭니다.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 5보다 큰 수만 필터링
const greaterThan5 = numbers.filter(x => x > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// 객체 배열 필터링
const users = [
  { name: 'Alice', age: 30, active: true },
  { name: 'Bob', age: 25, active: false },
  { name: 'Charlie', age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // Alice와 Charlie만 포함
```

### Array.prototype.reduce()
배열의 모든 요소를 하나의 값으로 축약합니다.

```javascript
const numbers = [1, 2, 3, 4, 5];

// 합계 구하기
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 15

// 최댓값 구하기
const max = numbers.reduce((acc, current) => 
  current > acc ? current : acc, numbers[0]);
console.log(max); // 5

// 객체로 변환
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 2, orange: 1 }
```

### Array.prototype.forEach()
배열의 각 요소에 대해 함수를 실행합니다 (반환값 없음).

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// 부수 효과가 있는 작업에 사용
const results = [];
numbers.forEach(num => {
  if (num % 2 === 0) {
    results.push(num * 2);
  }
});
```

## 함수 조합 (Function Composition)

### 함수 체이닝
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(x => x % 2 === 0)    // 짝수만 필터링
  .map(x => x * x)             // 제곱
  .reduce((acc, x) => acc + x, 0); // 합계

console.log(result); // 220 (2² + 4² + 6² + 8² + 10²)
```

### pipe 함수 구현
```javascript
const pipe = (...functions) => (value) => 
  functions.reduce((acc, fn) => fn(acc), value);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = pipe(addOne, double, square);
console.log(transform(3)); // ((3 + 1) * 2)² = 64
```

### compose 함수 구현
```javascript
const compose = (...functions) => (value) =>
  functions.reduceRight((acc, fn) => fn(acc), value);

const transform2 = compose(square, double, addOne);
console.log(transform2(3)); // (3 + 1)² * 2 = 32
```

## 부분 적용과 커링

### 부분 적용 (Partial Application)
```javascript
function add(a, b, c) {
  return a + b + c;
}

function partial(fn, ...args1) {
  return function(...args2) {
    return fn(...args1, ...args2);
  };
}

const add5 = partial(add, 5);
const add5And3 = partial(add, 5, 3);

console.log(add5(2, 3)); // 10
console.log(add5And3(1)); // 9
```

### 커링 (Currying)
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

## 순수 함수와 부수 효과

### 순수 함수
```javascript
// 순수 함수: 같은 입력에 대해 항상 같은 출력
function add(a, b) {
  return a + b;
}

function multiply(arr, factor) {
  return arr.map(x => x * factor); // 원본 배열 변경하지 않음
}

// 순수 함수로 배열 요소 추가
function appendToArray(arr, item) {
  return [...arr, item]; // 새로운 배열 반환
}
```

### 부수 효과가 있는 함수
```javascript
let count = 0;

// 비순수 함수: 외부 상태 변경
function impureIncrement() {
  count++; // 외부 변수 변경 (부수 효과)
  return count;
}

// 비순수 함수: 배열 직접 변경
function impureAppend(arr, item) {
  arr.push(item); // 원본 배열 변경 (부수 효과)
  return arr;
}
```

## 불변성 (Immutability)

### 객체 불변성 유지
```javascript
// 객체 복사 및 수정
function updateUser(user, updates) {
  return {
    ...user,     // 기존 속성 복사
    ...updates   // 새로운 속성으로 덮어쓰기
  };
}

const user = { name: 'Alice', age: 30, city: 'Seoul' };
const updatedUser = updateUser(user, { age: 31, city: 'Busan' });

console.log(user);        // { name: 'Alice', age: 30, city: 'Seoul' }
console.log(updatedUser); // { name: 'Alice', age: 31, city: 'Busan' }
```

### 배열 불변성 유지
```javascript
const numbers = [1, 2, 3, 4, 5];

// 요소 추가 (불변)
const withAdded = [...numbers, 6];

// 요소 제거 (불변)
const withoutFirst = numbers.slice(1);
const withoutIndex = numbers.filter((_, index) => index !== 2);

// 요소 수정 (불변)
const doubled = numbers.map(x => x * 2);
const modified = numbers.map((x, index) => 
  index === 2 ? x * 10 : x
);
```

## 함수형 유틸리티 함수들

### some과 every
```javascript
const numbers = [2, 4, 6, 8, 10];
const mixedNumbers = [1, 2, 3, 4, 5];

// some: 하나라도 조건을 만족하면 true
console.log(mixedNumbers.some(x => x % 2 === 0)); // true (2, 4가 짝수)

// every: 모든 요소가 조건을 만족하면 true
console.log(numbers.every(x => x % 2 === 0)); // true (모두 짝수)
console.log(mixedNumbers.every(x => x % 2 === 0)); // false
```

### find와 findIndex
```javascript
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

// find: 조건을 만족하는 첫 번째 요소 반환
const user = users.find(u => u.age > 30);
console.log(user); // { id: 3, name: 'Charlie', age: 35 }

// findIndex: 조건을 만족하는 첫 번째 요소의 인덱스 반환
const index = users.findIndex(u => u.name === 'Bob');
console.log(index); // 1
```

### 함수형 프로그래밍 실제 예제
```javascript
// 사용자 데이터 처리 예제
const users = [
  { name: 'Alice', age: 30, active: true, score: 85 },
  { name: 'Bob', age: 25, active: false, score: 92 },
  { name: 'Charlie', age: 35, active: true, score: 78 },
  { name: 'David', age: 28, active: true, score: 95 }
];

// 활성 사용자 중 점수가 80 이상인 사용자의 이름과 점수만 추출
const result = users
  .filter(user => user.active)           // 활성 사용자만
  .filter(user => user.score >= 80)      // 점수 80 이상
  .map(user => ({                        // 이름과 점수만 추출
    name: user.name,
    score: user.score
  }))
  .sort((a, b) => b.score - a.score);    // 점수 내림차순 정렬

console.log(result);
// [
//   { name: 'David', score: 95 },
//   { name: 'Alice', score: 85 }
// ]
``` 