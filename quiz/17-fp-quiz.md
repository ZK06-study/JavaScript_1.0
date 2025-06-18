# 17. 함수형 프로그래밍 - 퀴즈

## 객관식 문제

### 1. 🟡 순수 함수(Pure Function)의 특징이 아닌 것은?
a) 같은 입력에 대해 항상 같은 출력을 반환한다
b) 부작용(side effect)이 없다
c) 외부 상태를 변경할 수 있다
d) 테스트하기 쉽다

### 2. 🟢 다음 중 함수형 프로그래밍의 핵심 원칙이 아닌 것은?
a) 불변성(Immutability)
b) 순수 함수 사용
c) 상태 변경 최소화
d) 반복문 우선 사용

### 3. 🟠 고차 함수(Higher-order Function)에 대한 설명으로 올바른 것은?
a) 매개변수가 많은 함수
b) 함수를 매개변수로 받거나 함수를 반환하는 함수
c) 실행 시간이 긴 함수
d) 재귀 함수

### 4. 🟡 다음 중 배열의 고차 함수가 아닌 것은?
a) map
b) filter
c) push
d) reduce

### 5. 🟠 커링(Currying)에 대한 설명으로 올바른 것은?
a) 함수의 실행 속도를 높이는 기법
b) 여러 인자를 받는 함수를 하나씩 인자를 받는 함수들의 체인으로 만드는 것
c) 함수의 메모리 사용량을 줄이는 방법
d) 비동기 함수를 동기로 만드는 기법

### 6. 🟡 `[1,2,3].map(x => x * 2)`의 결과는?
a) [1, 2, 3]
b) [2, 4, 6]
c) 6
d) [1, 4, 9]

## 단답형 문제

### 7. 🟢 `[1,2,3,4,5].filter(x => x % 2 === 0)`의 결과는?

### 8. 🟡 `[1,2,3,4].reduce((acc, x) => acc + x, 0)`의 결과는?

### 9. 🟠 함수 합성(Function Composition)에서 함수들이 실행되는 순서는?

### 10. 🟢 불변성을 유지하면서 배열에 요소를 추가하는 방법은?

## 서술형 문제

### 11. 🟡 함수형 프로그래밍의 장점과 단점을 설명하시오.

### 12. 🟠 `map`, `filter`, `reduce`의 차이점과 각각의 사용 시나리오를 설명하시오.

### 13. 🟡 불변성(Immutability)의 개념과 JavaScript에서 불변성을 유지하는 방법들을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
```javascript
// 숫자 배열에서 짝수만 골라 제곱한 후 합계를 구하는 함수
// 함수형 프로그래밍 방식으로 작성
const numbers = [1, 2, 3, 4, 5, 6];
```

### 15. 🟡 커링을 구현하는 범용 함수를 작성하시오.
```javascript
// 사용 예시
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
```

### 16. 🟠 함수 합성(compose)을 구현하는 함수를 작성하시오.
```javascript
// 사용 예시
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const composed = compose(square, double, addOne);
console.log(composed(3)); // ((3 + 1) * 2)^2 = 64
```

### 17. 🟡 불변성을 유지하면서 중첩된 객체를 업데이트하는 함수를 작성하시오.
```javascript
// 사용 예시
const user = {
  profile: {
    name: 'Alice',
    settings: { theme: 'light' }
  }
};
// user.profile.settings.theme을 'dark'로 변경하되 원본은 유지
```

## 응용 문제

### 18. 🟠 다음 명령형 코드를 함수형으로 리팩토링하시오.
```javascript
const users = [
  { name: 'Alice', age: 30, city: 'Seoul' },
  { name: 'Bob', age: 25, city: 'Busan' },
  { name: 'Charlie', age: 35, city: 'Seoul' }
];

// 명령형 코드
let result = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].city === 'Seoul' && users[i].age >= 30) {
    result.push(users[i].name.toUpperCase());
  }
}
```

### 19. 🟠 파이프라인(Pipeline) 함수를 구현하고 사용하시오.
```javascript
// pipe는 compose와 반대 순서로 함수를 실행
// pipe(f, g, h)(x) === h(g(f(x)))
```

### 20. 🟠 메모이제이션을 적용한 피보나치 함수를 함수형 방식으로 작성하시오.
- 순수 함수로 구현
- 고차 함수를 활용한 메모이제이션
- 재귀와 반복문 두 가지 방식으로 구현

---

## 정답

### 객관식 정답
1. c) 외부 상태를 변경할 수 있다 (순수 함수는 부작용이 없어야 함)
2. d) 반복문 우선 사용 (함수형에서는 고차 함수 우선)
3. b) 함수를 매개변수로 받거나 함수를 반환하는 함수
4. c) push (원본을 변경하는 메서드)
5. b) 여러 인자를 받는 함수를 하나씩 인자를 받는 함수들의 체인으로 만드는 것
6. b) [2, 4, 6]

### 단답형 정답
7. `[2, 4]`
8. `10`
9. 오른쪽에서 왼쪽으로 (또는 마지막부터 첫 번째로)
10. 스프레드 연산자 `[...arr, newItem]` 또는 `concat()` 메서드

### 서술형 정답
11. **함수형 프로그래밍의 장단점:**
**장점:**
- 예측 가능하고 테스트하기 쉬운 코드
- 버그 발생률 감소
- 병렬 처리에 유리
- 코드 재사용성 향상

**단점:**
- 학습 곡선이 steep
- 메모리 사용량 증가 가능성
- 성능 오버헤드 (불변성 유지)

12. **map, filter, reduce 차이점:**
- **map**: 각 요소를 변환하여 같은 길이의 새 배열 반환
- **filter**: 조건에 맞는 요소만 선별하여 새 배열 반환
- **reduce**: 배열을 하나의 값으로 축약

13. **불변성(Immutability):**
데이터가 생성된 후 변경되지 않는 특성
**유지 방법:**
- 스프레드 연산자 (`...`)
- `Object.assign()`, `Array.from()`
- Immutable.js 라이브러리
- 구조적 공유를 통한 효율적 복사

### 코딩 정답
14.
```javascript
function processNumbers(numbers) {
  return numbers
    .filter(x => x % 2 === 0)  // 짝수만 필터링
    .map(x => x * x)           // 제곱
    .reduce((sum, x) => sum + x, 0); // 합계
}

// 또는 한 줄로
const processNumbers = nums => nums
  .filter(x => x % 2 === 0)
  .map(x => x * x)
  .reduce((sum, x) => sum + x, 0);

console.log(processNumbers([1, 2, 3, 4, 5, 6])); // 56 (4 + 16 + 36)
```

15.
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// 사용 예시
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
```

16.
```javascript
function compose(...fns) {
  return function(value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

// 화살표 함수 버전
const compose = (...fns) => value => 
  fns.reduceRight((acc, fn) => fn(acc), value);

// 사용 예시
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(square, double, addOne);
console.log(composed(3)); // ((3 + 1) * 2)^2 = 64
```

17.
```javascript
function updateNested(obj, path, value) {
  const keys = path.split('.');
  
  function update(current, keyIndex) {
    if (keyIndex === keys.length - 1) {
      return { ...current, [keys[keyIndex]]: value };
    }
    
    const key = keys[keyIndex];
    return {
      ...current,
      [key]: update(current[key], keyIndex + 1)
    };
  }
  
  return update(obj, 0);
}

// 또는 더 일반적인 방법
function immutableUpdate(obj, path, updater) {
  const keys = Array.isArray(path) ? path : path.split('.');
  
  if (keys.length === 1) {
    return { ...obj, [keys[0]]: updater(obj[keys[0]]) };
  }
  
  const [head, ...tail] = keys;
  return {
    ...obj,
    [head]: immutableUpdate(obj[head], tail, updater)
  };
}

// 사용 예시
const user = {
  profile: {
    name: 'Alice',
    settings: { theme: 'light' }
  }
};

const updatedUser = updateNested(user, 'profile.settings.theme', 'dark');
console.log(user.profile.settings.theme);        // 'light' (원본 유지)
console.log(updatedUser.profile.settings.theme); // 'dark'
```

### 응용 정답
18.
```javascript
// 함수형 리팩토링
const result = users
  .filter(user => user.city === 'Seoul')
  .filter(user => user.age >= 30)
  .map(user => user.name.toUpperCase());

// 또는 더 효율적으로
const result = users
  .filter(user => user.city === 'Seoul' && user.age >= 30)
  .map(user => user.name.toUpperCase());

console.log(result); // ['ALICE', 'CHARLIE']
```

19.
```javascript
function pipe(...fns) {
  return function(value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

// 화살표 함수 버전
const pipe = (...fns) => value => 
  fns.reduce((acc, fn) => fn(acc), value);

// 사용 예시
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const pipeline = pipe(addOne, double, square);
console.log(pipeline(3)); // ((3 + 1) * 2)^2 = 64

// compose와 비교
const composed = compose(square, double, addOne);
console.log(composed(3)); // 같은 결과: 64
```

20.
```javascript
// 고차 함수를 이용한 메모이제이션
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 재귀 방식 피보나치
const fibonacciRecursive = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
});

// 반복 방식 피보나치 (함수형 스타일)
function fibonacciIterative(n) {
  if (n <= 1) return n;
  
  return Array.from({ length: n - 1 }, (_, i) => i)
    .reduce(([prev, curr]) => [curr, prev + curr], [0, 1])[1];
}

// 사용 예시
console.log(fibonacciRecursive(40)); // 빠른 계산 (메모이제이션)
console.log(fibonacciIterative(40)); // 반복 방식

// 순수 함수형 스타일의 피보나치 시퀀스 생성
function fibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  return Array.from({ length: n }, (_, i) => {
    if (i <= 1) return i;
    return fibonacciRecursive(i);
  });
}

console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```