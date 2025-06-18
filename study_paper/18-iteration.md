# 18. 반복

## Iterable과 Iterator

### Iterable이란?
- `Symbol.iterator` 메서드를 가진 객체
- `for...of` 루프로 순회 가능한 객체

```javascript
// 내장 Iterable 객체들
const str = 'hello';
const arr = [1, 2, 3];
const set = new Set([1, 2, 3]);
const map = new Map([['a', 1], ['b', 2]]);

// for...of로 순회 가능
for (const char of str) {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

for (const item of arr) {
  console.log(item); // 1, 2, 3
}
```

### Iterator란?
- `next()` 메서드를 가진 객체
- `{ value: any, done: boolean }` 형태의 객체를 반환

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## for...of 루프

### 기본 사용법
```javascript
const fruits = ['apple', 'banana', 'orange'];

// 값만 순회
for (const fruit of fruits) {
  console.log(fruit);
}

// 인덱스와 값 함께 순회
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
```

### 다양한 Iterable 객체 순회
```javascript
// 문자열 순회
for (const char of 'hello') {
  console.log(char);
}

// Set 순회
const mySet = new Set([1, 2, 3, 2, 1]);
for (const value of mySet) {
  console.log(value); // 1, 2, 3 (중복 제거됨)
}

// Map 순회
const myMap = new Map([['name', 'Alice'], ['age', 30]]);
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Map의 키만 순회
for (const key of myMap.keys()) {
  console.log(key);
}

// Map의 값만 순회
for (const value of myMap.values()) {
  console.log(value);
}
```

## Set

### Set 생성과 기본 메서드
```javascript
// Set 생성
const mySet = new Set();
const mySet2 = new Set([1, 2, 3, 2, 1]); // [1, 2, 3]

// 요소 추가
mySet.add(1);
mySet.add(2);
mySet.add(2); // 중복은 무시됨

// 요소 확인
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// 요소 개수
console.log(mySet.size); // 2

// 요소 삭제
mySet.delete(1);
console.log(mySet.has(1)); // false

// 모든 요소 삭제
mySet.clear();
console.log(mySet.size); // 0
```

### Set 활용 예제
```javascript
// 배열 중복 제거
const numbers = [1, 2, 2, 3, 3, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 합집합
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);
console.log(union); // Set {1, 2, 3, 4, 5}

// 교집합
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Set {3}

// 차집합
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Set {1, 2}
```

## Map

### Map 생성과 기본 메서드
```javascript
// Map 생성
const myMap = new Map();
const myMap2 = new Map([
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'Seoul']
]);

// 키-값 설정
myMap.set('name', 'Bob');
myMap.set('age', 25);
myMap.set(1, 'number key');
myMap.set(true, 'boolean key');

// 값 가져오기
console.log(myMap.get('name')); // 'Bob'
console.log(myMap.get(1)); // 'number key'

// 키 존재 확인
console.log(myMap.has('name')); // true
console.log(myMap.has('city')); // false

// 크기
console.log(myMap.size); // 4

// 삭제
myMap.delete('age');
console.log(myMap.has('age')); // false

// 모든 요소 삭제
myMap.clear();
```

### Map vs Object
```javascript
// Object는 문자열과 Symbol만 키로 사용 가능
const obj = {};
obj['1'] = 'string key';
obj[1] = 'number key'; // '1'로 변환됨
console.log(obj); // { '1': 'number key' }

// Map은 모든 타입을 키로 사용 가능
const map = new Map();
map.set('1', 'string key');
map.set(1, 'number key');
map.set(true, 'boolean key');
map.set({}, 'object key');

console.log(map.get('1')); // 'string key'
console.log(map.get(1)); // 'number key'
console.log(map.size); // 4
```

### Map 순회 방법
```javascript
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

// 1. for...of로 [key, value] 순회
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// 2. forEach 메서드
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 3. 키만 순회
for (const key of map.keys()) {
  console.log(key);
}

// 4. 값만 순회
for (const value of map.values()) {
  console.log(value);
}

// 5. 엔트리 순회
for (const entry of map.entries()) {
  console.log(entry); // ['a', 1], ['b', 2], ['c', 3]
}
```

## 사용자 정의 Iterable 만들기

### 간단한 Iterable 객체
```javascript
const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// 스프레드 문법도 사용 가능
console.log([...range]); // [1, 2, 3, 4, 5]
```

### 함수로 Iterable 생성
```javascript
function* fibonacci(max) {
  let a = 0, b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci(20);
for (const num of fib) {
  console.log(num); // 0, 1, 1, 2, 3, 5, 8, 13
}
```

## Generator

### Generator 함수 기본
```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator로 무한 시퀀스
```javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
```

### Generator와 yield*
```javascript
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield 3;
  yield 4;
}

function* combinedGen() {
  yield* gen1();
  yield* gen2();
  yield 5;
}

console.log([...combinedGen()]); // [1, 2, 3, 4, 5]
```

## 실제 활용 예제

### WeakMap과 WeakSet
```javascript
// WeakMap: 객체만 키로 사용, 가비지 컬렉션 대상
const wm = new WeakMap();
const obj1 = {};
const obj2 = {};

wm.set(obj1, 'data for obj1');
wm.set(obj2, 'data for obj2');

console.log(wm.get(obj1)); // 'data for obj1'

// WeakSet: 객체만 값으로 사용, 가비지 컬렉션 대상
const ws = new WeakSet();
ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true
```

### 배열 메서드와 Iterator 활용
```javascript
const numbers = [1, 2, 3, 4, 5];

// entries()로 인덱스와 값 함께 처리
for (const [index, value] of numbers.entries()) {
  console.log(`Index ${index}: ${value}`);
}

// keys()로 인덱스만
for (const index of numbers.keys()) {
  console.log(`Index: ${index}`);
}

// values()로 값만 (기본 동작과 동일)
for (const value of numbers.values()) {
  console.log(`Value: ${value}`);
}
``` 