# 18. 이터레이션 - 퀴즈

## 객관식 문제

### 1. 🟡 이터러블(Iterable) 객체의 특징으로 올바른 것은?
a) `Symbol.iterator` 메서드를 가진 객체
b) `length` 속성을 가진 객체
c) 배열만 이터러블이다
d) ES5에서 도입된 개념

### 2. 🟢 `for...of` 반복문으로 순회할 수 있는 것은?
a) 객체 리터럴
b) 배열
c) 숫자
d) 함수

### 3. 🟠 제너레이터 함수를 정의하는 올바른 문법은?
a) `function generator() {}`
b) `function* generator() {}`
c) `generator function() {}`
d) `async function generator() {}`

### 4. 🟡 `yield` 키워드의 역할은?
a) 함수를 종료한다
b) 값을 반환하고 함수 실행을 일시 중단한다
c) 함수를 재시작한다
d) 에러를 발생시킨다

### 5. 🟠 이터레이터의 `next()` 메서드가 반환하는 객체의 구조는?
a) `{ value, done }`
b) `{ result, finished }`
c) `{ data, complete }`
d) `{ item, end }`

### 6. 🟡 다음 중 이터러블이 아닌 것은?
a) Array
b) String
c) Map
d) Object

## 단답형 문제

### 7. 🟢 문자열 "hello"를 `for...of`로 순회했을 때 몇 번 반복되는가?

### 8. 🟡 제너레이터 함수를 호출하면 반환되는 객체의 타입은?

### 9. 🟠 `Symbol.iterator`는 어떤 종류의 심볼인가?

### 10. 🟢 `for...of`와 `for...in`의 주요 차이점은?

## 서술형 문제

### 11. 🟡 이터러블과 이터레이터의 차이점을 설명하고 관계를 서술하시오.

### 12. 🟠 제너레이터의 장점과 실제 사용 사례를 설명하시오.

### 13. 🟡 `for...of`, `for...in`, `forEach`의 차이점과 각각의 사용 시나리오를 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 제너레이터를 작성하시오.
```javascript
// 1부터 n까지의 숫자를 생성하는 제너레이터
// 사용: for (const num of range(5)) { console.log(num); } // 1,2,3,4,5
```

### 15. 🟡 커스텀 이터러블 객체를 구현하시오.
```javascript
// 피보나치 수열을 생성하는 이터러블 객체
// 최대 개수를 지정할 수 있어야 함
const fib = new Fibonacci(10);
for (const num of fib) {
  console.log(num); // 0,1,1,2,3,5,8,13,21,34
}
```

### 16. 🟠 무한 시퀀스를 생성하는 제너레이터들을 작성하시오.
```javascript
// 1. 무한 자연수 시퀀스
// 2. 무한 피보나치 시퀀스  
// 3. 무한 소수 시퀀스
```

### 17. 🟡 제너레이터를 활용한 유틸리티 함수들을 작성하시오.
```javascript
// 1. take: 이터러블에서 n개의 요소만 가져오기
// 2. filter: 조건에 맞는 요소만 필터링
// 3. map: 각 요소를 변환
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
function* generator() {
  console.log('Start');
  yield 1;
  console.log('Middle');
  yield 2;
  console.log('End');
  return 3;
}

const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

### 19. 🟠 비동기 이터레이터를 구현하시오.
```javascript
// 일정 간격으로 숫자를 생성하는 비동기 이터러블
// for await...of로 사용할 수 있어야 함
```

### 20. 🟠 제너레이터를 이용한 트리 순회 함수를 작성하시오.
```javascript
const tree = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 4 }, { value: 5 }] },
    { value: 3, children: [{ value: 6 }] }
  ]
};
// 깊이 우선 순회로 모든 노드의 값을 순회
```

---

## 정답

### 객관식 정답
1. a) `Symbol.iterator` 메서드를 가진 객체
2. b) 배열
3. b) `function* generator() {}`
4. b) 값을 반환하고 함수 실행을 일시 중단한다
5. a) `{ value, done }`
6. d) Object (일반 객체는 이터러블이 아님)

### 단답형 정답
7. 5번
8. Generator (제너레이터 객체)
9. Well-known Symbol (잘 알려진 심볼)
10. `for...of`는 값을 순회, `for...in`은 키를 순회

### 서술형 정답
11. **이터러블 vs 이터레이터:**
- **이터러블**: `Symbol.iterator` 메서드를 가진 객체
- **이터레이터**: `next()` 메서드를 가진 객체로 `{value, done}` 형태 반환
- **관계**: 이터러블의 `Symbol.iterator`를 호출하면 이터레이터를 반환

12. **제너레이터의 장점:**
- 지연 평가(Lazy Evaluation)로 메모리 효율성
- 무한 시퀀스 생성 가능
- 상태를 유지하면서 값을 단계적으로 생성
- **사용 사례**: 데이터 스트림, 비동기 플로우 제어, 무한 시퀀스

13. **반복문 비교:**
- **for...of**: 이터러블의 값을 순회
- **for...in**: 객체의 열거 가능한 속성 순회
- **forEach**: 배열 전용, 콜백 함수 방식

### 코딩 정답
14.
```javascript
function* range(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

// 또는 더 간단하게
function* range(n) {
  let i = 1;
  while (i <= n) {
    yield i++;
  }
}

// 사용 예시
for (const num of range(5)) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

15.
```javascript
class Fibonacci {
  constructor(max) {
    this.max = max;
  }
  
  *[Symbol.iterator]() {
    let a = 0, b = 1, count = 0;
    
    while (count < this.max) {
      yield a;
      [a, b] = [b, a + b];
      count++;
    }
  }
}

// 또는 함수형 방식
function createFibonacci(max) {
  return {
    [Symbol.iterator]: function* () {
      let a = 0, b = 1, count = 0;
      
      while (count < max) {
        yield a;
        [a, b] = [b, a + b];
        count++;
      }
    }
  };
}

// 사용 예시
const fib = new Fibonacci(10);
for (const num of fib) {
  console.log(num); // 0,1,1,2,3,5,8,13,21,34
}
```

16.
```javascript
// 1. 무한 자연수 시퀀스
function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

// 2. 무한 피보나치 시퀀스
function* fibonacciInfinite() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// 3. 무한 소수 시퀀스
function* primes() {
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  
  let n = 2;
  while (true) {
    if (isPrime(n)) {
      yield n;
    }
    n++;
  }
}

// 사용 예시 (take 함수와 함께)
function take(iterable, n) {
  const result = [];
  const iterator = iterable[Symbol.iterator]();
  
  for (let i = 0; i < n; i++) {
    const { value, done } = iterator.next();
    if (done) break;
    result.push(value);
  }
  
  return result;
}

console.log(take(naturalNumbers(), 5)); // [1, 2, 3, 4, 5]
console.log(take(fibonacciInfinite(), 8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(take(primes(), 5)); // [2, 3, 5, 7, 11]
```

17.
```javascript
// 1. take: n개의 요소만 가져오기
function* take(iterable, n) {
  let count = 0;
  for (const item of iterable) {
    if (count >= n) break;
    yield item;
    count++;
  }
}

// 2. filter: 조건에 맞는 요소만 필터링
function* filter(iterable, predicate) {
  for (const item of iterable) {
    if (predicate(item)) {
      yield item;
    }
  }
}

// 3. map: 각 요소를 변환
function* map(iterable, transformer) {
  for (const item of iterable) {
    yield transformer(item);
  }
}

// 사용 예시
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 홀수만 필터링 후 제곱하여 처음 3개만 가져오기
const result = take(
  map(
    filter(numbers, x => x % 2 === 1),
    x => x * x
  ),
  3
);

console.log([...result]); // [1, 9, 25]
```

### 응용 정답
18.
```javascript
// 실행 결과:
// "Start"
// { value: 1, done: false }
// "Middle"  
// { value: 2, done: false }
// "End"
// { value: 3, done: true }

// 설명: 제너레이터는 next() 호출 시마다 다음 yield까지 실행되며,
// 마지막 return 값은 value에 포함되지만 done은 true가 된다.
```

19.
```javascript
// 비동기 이터레이터 구현
class AsyncNumberGenerator {
  constructor(max, delay = 1000) {
    this.max = max;
    this.delay = delay;
  }
  
  async *[Symbol.asyncIterator]() {
    for (let i = 1; i <= this.max; i++) {
      await new Promise(resolve => setTimeout(resolve, this.delay));
      yield i;
    }
  }
}

// 또는 함수형 방식
async function* asyncNumbers(max, delay = 1000) {
  for (let i = 1; i <= max; i++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    yield i;
  }
}

// 사용 예시
async function test() {
  const asyncGen = new AsyncNumberGenerator(5, 500);
  
  for await (const num of asyncGen) {
    console.log(num); // 0.5초마다 1, 2, 3, 4, 5 출력
  }
}

test();
```

20.
```javascript
// 제너레이터를 이용한 트리 순회
function* traverseTree(node) {
  // 현재 노드 값을 yield
  yield node.value;
  
  // 자식 노드들을 재귀적으로 순회
  if (node.children) {
    for (const child of node.children) {
      yield* traverseTree(child);
    }
  }
}

// 너비 우선 순회 버전
function* traverseTreeBFS(root) {
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    yield node.value;
    
    if (node.children) {
      queue.push(...node.children);
    }
  }
}

// 사용 예시
const tree = {
  value: 1,
  children: [
    { 
      value: 2, 
      children: [
        { value: 4 }, 
        { value: 5 }
      ] 
    },
    { 
      value: 3, 
      children: [
        { value: 6 }
      ] 
    }
  ]
};

console.log('DFS:', [...traverseTree(tree)]);    // [1, 2, 4, 5, 3, 6]
console.log('BFS:', [...traverseTreeBFS(tree)]); // [1, 2, 3, 4, 5, 6]

// 특정 값 찾기
function* findInTree(node, target) {
  if (node.value === target) {
    yield node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      yield* findInTree(child, target);
    }
  }
}

const found = [...findInTree(tree, 5)];
console.log(found); // [{ value: 5 }]
```