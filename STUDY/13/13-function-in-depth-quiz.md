# 13. 함수 더 알아보기 - 퀴즈

## 객관식 문제

### 1. 🟡 함수 선언문과 함수 표현식의 차이점으로 올바른 것은?
a) 함수 선언문은 호이스팅되지 않고 함수 표현식은 호이스팅된다
b) 함수 선언문은 호이스팅되고 함수 표현식은 호이스팅되지 않는다
c) 둘 다 동일하게 작동한다
d) 함수 표현식은 이름을 가질 수 없다

### 2. 🟢 화살표 함수의 특징이 아닌 것은?
a) `this` 바인딩이 없다
b) 생성자로 사용할 수 없다
c) `arguments` 객체를 가진다
d) 짧은 문법으로 작성할 수 있다

### 3. 🟠 클로저(Closure)에 대한 설명으로 올바른 것은?
a) 함수가 실행될 때마다 새로운 스코프를 생성하는 것
b) 함수와 그 함수가 선언된 렉시컬 환경의 조합
c) 함수 내부에서만 사용할 수 있는 변수
d) ES6에서 도입된 새로운 함수 타입

### 4. 🟡 다음 코드에서 `person.getName()`을 호출했을 때 `this`는 무엇을 가리키는가?
```javascript
const person = {
  name: 'Alice',
  getName: function() {
    return this.name;
  }
};
```
a) 전역 객체
b) undefined
c) person 객체
d) getName 함수

### 5. 🟠 고차 함수(Higher-order Function)의 정의로 올바른 것은?
a) 매개변수가 많은 함수
b) 실행 시간이 긴 함수
c) 함수를 매개변수로 받거나 함수를 반환하는 함수
d) 중첩된 함수

### 6. 🟡 다음 코드의 실행 결과는?
```javascript
function test() {
  console.log(this);
}

const obj = { method: test };
obj.method();
```
a) 전역 객체
b) undefined
c) obj 객체
d) test 함수

## 단답형 문제

### 7. 🟢 함수의 매개변수 개수를 확인할 수 있는 속성은?

### 8. 🟡 함수 내부에서 자기 자신을 호출하는 것을 무엇이라고 하는가?

### 9. 🟠 `call`, `apply`, `bind` 메서드의 공통점은 무엇인가?

### 10. 🟡 IIFE의 풀네임을 쓰시오.

## 서술형 문제

### 11. 🟡 클로저를 사용하는 이유와 실제 활용 예시를 설명하시오.

### 12. 🟠 `this` 바인딩 규칙 4가지를 설명하고 각각의 예시를 들어보시오.

### 13. 🟡 콜백 함수(Callback Function)의 개념과 장단점을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
- 매개변수로 받은 숫자들의 합을 반환하는 함수
- 매개변수 개수는 가변적이어야 함
- 화살표 함수와 일반 함수 두 가지 방법으로 작성

### 15. 🟡 클로저를 이용한 카운터 함수를 작성하시오.
- `increase()`, `decrease()`, `getValue()` 메서드를 제공
- 외부에서 카운터 값에 직접 접근할 수 없어야 함

### 16. 🟠 커링(Currying)을 구현하는 함수를 작성하시오.
```javascript
// 사용 예시
const add = curry((a, b, c) => a + b + c);
const addOne = add(1);
const addTwo = addOne(2);
console.log(addTwo(3)); // 6
```

### 17. 🟡 다음 코드를 클로저를 사용하여 수정하시오.
```javascript
// 문제 코드 (모든 버튼이 3을 출력)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
const obj = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  },
  delayedGreet: function() {
    setTimeout(function() {
      console.log('Delayed Hello, ' + this.name);
    }, 1000);
  }
};

obj.greet();
obj.delayedGreet();
```

### 19. 🟠 메모이제이션(Memoization)을 구현하는 고차 함수를 작성하시오.
- 함수의 결과를 캐시하여 같은 입력에 대해 빠르게 반환
- 피보나치 수열에 적용하여 성능 개선 확인

### 20. 🟠 함수 합성(Function Composition)을 구현하는 `compose` 함수를 작성하시오.
```javascript
// 사용 예시
const addOne = x => x + 1;
const multiplyTwo = x => x * 2;
const composed = compose(multiplyTwo, addOne);
console.log(composed(3)); // (3 + 1) * 2 = 8
```

---

## 정답

### 객관식 정답
1. b) 함수 선언문은 호이스팅되고 함수 표현식은 호이스팅되지 않는다
2. c) `arguments` 객체를 가진다 (화살표 함수는 arguments를 가지지 않음)
3. b) 함수와 그 함수가 선언된 렉시컬 환경의 조합
4. c) person 객체 (메서드 호출에서 this는 호출한 객체)
5. c) 함수를 매개변수로 받거나 함수를 반환하는 함수
6. c) obj 객체 (메서드로 호출되었으므로)

### 단답형 정답
7. `length` (함수명.length)
8. 재귀 호출 (Recursion)
9. 함수의 `this` 값을 명시적으로 설정할 수 있다
10. Immediately Invoked Function Expression (즉시 실행 함수 표현식)

### 서술형 정답
11. **클로저 사용 이유:**
- 데이터 은닉과 캡슐화
- 모듈 패턴 구현
- 콜백과 이벤트 핸들러에서 상태 보존

**활용 예시:**
- 팩토리 패턴, 모듈 패턴
- React 훅의 상태 관리
- 비동기 작업에서 상태 보존

12. **this 바인딩 4가지 규칙:**
- **기본 바인딩**: 전역 객체 또는 undefined (엄격 모드)
- **암시적 바인딩**: 메서드 호출 시 호출한 객체
- **명시적 바인딩**: call, apply, bind로 명시적 설정
- **new 바인딩**: 생성자 함수로 호출 시 새 인스턴스

13. **콜백 함수:**
- 다른 함수에 매개변수로 전달되어 특정 시점에 호출되는 함수
- **장점**: 비동기 처리, 코드 재사용성, 유연성
- **단점**: 콜백 지옥, 디버깅 어려움, 에러 처리 복잡

### 코딩 정답
14.
```javascript
// 일반 함수 (arguments 사용)
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 화살표 함수 (rest parameter 사용)
const sumArrow = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

// 사용 예시
console.log(sum(1, 2, 3, 4)); // 10
console.log(sumArrow(1, 2, 3, 4)); // 10
```

15.
```javascript
function createCounter() {
  let count = 0;
  
  return {
    increase() {
      count++;
      return count;
    },
    decrease() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

// 사용 예시
const counter = createCounter();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.getValue()); // 1
```

16.
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

// 사용 예시
const add = curry((a, b, c) => a + b + c);
const addOne = add(1);
const addTwo = addOne(2);
console.log(addTwo(3)); // 6
```

17.
```javascript
// 해결 방법 1: 클로저 사용
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => console.log(index), 100);
  })(i);
}

// 해결 방법 2: let 사용
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// 해결 방법 3: bind 사용
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 100);
}
```

### 응용 정답
18.
```javascript
// 실행 결과:
// "Hello, Alice" (즉시 출력)
// "Delayed Hello, undefined" (1초 후 출력)

// 이유: delayedGreet의 setTimeout 콜백에서 this는 전역 객체를 가리키므로
// this.name은 undefined가 된다.

// 해결 방법:
delayedGreet: function() {
  const self = this;
  setTimeout(function() {
    console.log('Delayed Hello, ' + self.name);
  }, 1000);
}
// 또는 화살표 함수 사용
delayedGreet: function() {
  setTimeout(() => {
    console.log('Delayed Hello, ' + this.name);
  }, 1000);
}
```

19.
```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log('캐시에서 반환:', key);
      return cache[key];
    }
    
    console.log('계산 중:', key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// 피보나치 수열에 적용
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55 (빠른 계산)
```

20.
```javascript
function compose(...fns) {
  return function(value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

// 또는 화살표 함수로
const compose2 = (...fns) => (value) => 
  fns.reduceRight((acc, fn) => fn(acc), value);

// 사용 예시
const addOne = x => x + 1;
const multiplyTwo = x => x * 2;
const square = x => x * x;

const composed = compose(square, multiplyTwo, addOne);
console.log(composed(3)); // ((3 + 1) * 2)^2 = 64
```