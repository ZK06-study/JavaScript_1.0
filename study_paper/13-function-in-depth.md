# 13. 함수 더 알아보기

## 함수 정의 방법

### 1. 함수 선언문 (Function Declaration)
```javascript
function add(x, y) {
  return x + y;
}
```

### 2. 함수 표현식 (Function Expression)
```javascript
const add = function(x, y) {
  return x + y;
};
```

### 3. 화살표 함수 (Arrow Function)
```javascript
const add = (x, y) => x + y;

// 블록문을 사용할 때는 return 필요
const add2 = (x, y) => {
  return x + y;
};
```

## 매개변수와 인수

### 매개변수 기본값
```javascript
function greet(name = 'World') {
  return `Hello, ${name}!`;
}

greet(); // "Hello, World!"
greet('JavaScript'); // "Hello, JavaScript!"
```

### 나머지 매개변수 (Rest Parameters)
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3, 4, 5); // 15
```

### arguments 객체
```javascript
function oldStyleSum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
```

## 스코프와 클로저

### 클로저 (Closure)
함수와 그 함수가 선언된 렉시컬 환경의 조합입니다.

```javascript
function outer(x) {
  function inner(y) {
    return x + y; // 외부 함수의 변수 x에 접근
  }
  return inner;
}

const addFive = outer(5);
console.log(addFive(10)); // 15
```

### 클로저의 활용
```javascript
// 프라이빗 변수 구현
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
```

## this 키워드

### this의 동작 방식
- **일반 함수**: 호출한 객체
- **화살표 함수**: 상위 스코프의 this
- **메서드**: 메서드가 속한 객체
- **생성자**: 새로 생성된 인스턴스

```javascript
const obj = {
  name: 'Object',
  regularMethod() {
    console.log(this.name); // 'Object'
    
    const arrowFunction = () => {
      console.log(this.name); // 'Object' (상위 스코프의 this)
    };
    
    arrowFunction();
  }
};
```

### this 바인딩 메서드
```javascript
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: 'Alice' };

greet.call(person); // "Hello, Alice!"
greet.apply(person); // "Hello, Alice!"

const boundGreet = greet.bind(person);
boundGreet(); // "Hello, Alice!"
```

## 고차 함수 (Higher-Order Function)

### 함수를 인수로 받는 함수
```javascript
function repeat(n, func) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

repeat(3, console.log); // 0, 1, 2 출력
```

### 함수를 반환하는 함수
```javascript
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## 재귀 함수 (Recursive Function)

```javascript
function factorial(n) {
  if (n <= 1) {
    return 1; // 기저 조건
  }
  return n * factorial(n - 1); // 재귀 호출
}

console.log(factorial(5)); // 120
```

## 즉시 실행 함수 (IIFE)

```javascript
// 전역 스코프 오염 방지
(function() {
  const privateVar = 'This is private';
  console.log(privateVar);
})();

// 변수와 함께 사용
const result = (function(x, y) {
  return x + y;
})(10, 20);

console.log(result); // 30
```

## 함수형 프로그래밍 기법

### 순수 함수 (Pure Function)
- 같은 입력에 대해 항상 같은 출력
- 부수 효과(side effect) 없음

```javascript
// 순수 함수
function add(a, b) {
  return a + b;
}

// 비순수 함수 (외부 상태 변경)
let count = 0;
function impureIncrement() {
  count++; // 외부 변수 변경
  return count;
}
```

### 커링 (Currying)
```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
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
``` 