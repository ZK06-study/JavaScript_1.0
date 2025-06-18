# 08. 함수 - 퀴즈

## 객관식 문제

### 1. 함수의 매개변수와 인수에 대한 설명으로 옳은 것은?
a) 매개변수와 인수는 같은 의미이다
b) 매개변수는 함수 정의 시, 인수는 함수 호출 시 사용된다
c) 인수는 함수 정의 시, 매개변수는 함수 호출 시 사용된다
d) 매개변수는 숫자만, 인수는 문자열만 가능하다

### 2. `return` 구문에 대한 설명으로 옳지 않은 것은?
a) 함수의 반환값을 결정한다
b) return 실행 즉시 함수가 종료된다
c) return 구문이 없으면 에러가 발생한다
d) return 뒤에 값이 없으면 undefined를 반환한다

### 3. 스코프(scope)에 대한 설명으로 옳은 것은?
a) 변수가 유효한 범위를 의미한다
b) 함수의 이름을 의미한다
c) 매개변수의 개수를 의미한다
d) 함수의 실행 시간을 의미한다

### 4. 변수 가리기(variable shadowing)란?
a) 변수를 삭제하는 것
b) 바깥쪽 스코프의 같은 이름 변수가 안쪽 스코프에서 무시되는 현상
c) 변수의 타입이 바뀌는 것
d) 변수의 값이 초기화되는 것

### 5. JavaScript에서 함수는?
a) 값이 아니다
b) 값이다
c) 객체가 아니다
d) 실행만 가능하다

### 6. 화살표 함수의 특징으로 옳지 않은 것은?
a) ES2015에서 도입되었다
b) `=>` 기호를 사용한다
c) 항상 return 키워드를 명시해야 한다
d) 매개변수가 하나면 괄호를 생략할 수 있다

## 단답형 문제

### 7. 다음 함수 호출의 결과를 쓰시오.
```js
function add(x, y) {
  return x + y;
}
add(3, 5);
```

### 8. 다음 코드에서 `x`의 값은?
```js
const x = 1;
function test(x) {
  x = 2;
}
test(x);
console.log(x);
```

### 9. 익명 함수(anonymous function)의 다른 이름은?

### 10. 1급 함수(first-class function)의 의미는?

## 서술형 문제

### 11. 스코프 연쇄(scope chain)의 동작 원리를 설명하시오.

### 12. 어휘적 스코핑(lexical scoping)이 무엇인지 설명하고, 함수 호출과 스코프의 관계를 서술하시오.

### 13. 함수를 값으로 사용할 수 있는 방법들을 나열하고 각각의 예제를 제시하시오.

## 코딩 문제

### 14. 세 개의 숫자 중 가장 큰 값을 반환하는 함수를 작성하시오.

### 15. 다음 요구사항에 따라 함수를 작성하시오.
- 이름: `calculator`
- 매개변수: 두 숫자와 연산자 문자열 ('+', '-', '*', '/')
- 반환값: 계산 결과

### 16. 화살표 함수를 사용하여 배열의 모든 요소를 제곱하는 함수를 작성하시오.

### 17. 함수를 반환하는 함수(고차 함수)를 작성하시오.
```js
// 사용 예시
const addTen = createAdder(10);
console.log(addTen(5)); // 15
```

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 스코프 관점에서 설명하시오.
```js
const global = 'I am global';

function outer() {
  const outerVar = 'I am outer';
  
  function inner() {
    const innerVar = 'I am inner';
    console.log(global);
    console.log(outerVar);
    console.log(innerVar);
  }
  
  inner();
}

outer();
```

### 19. 콜백 함수의 개념을 설명하고 간단한 예제를 작성하시오.

### 20. 다음 두 함수의 차이점을 설명하시오.
```js
// 함수 1
function regularFunction() {
  return 'regular';
}

// 함수 2  
const arrowFunction = () => 'arrow';
```

---

## 정답

### 객관식 정답
1. b) 매개변수는 함수 정의 시, 인수는 함수 호출 시 사용된다
2. c) return 구문이 없으면 에러가 발생한다 (실제로는 undefined 반환)
3. a) 변수가 유효한 범위를 의미한다
4. b) 바깥쪽 스코프의 같은 이름 변수가 안쪽 스코프에서 무시되는 현상
5. b) 값이다
6. c) 항상 return 키워드를 명시해야 한다

### 단답형 정답
7. `8`
8. `1` (매개변수는 독립적인 변수)
9. 함수 리터럴(function literal)
10. 값으로 사용할 수 있는 함수

### 서술형 정답
11. 식별자에 도달하면 현재 스코프에서 변수를 찾고, 없으면 바깥쪽 스코프로 계속 올라가며 찾는 과정이다. 전역 스코프까지 찾아도 없으면 에러가 발생한다.

12. 어휘적 스코핑은 스코프가 코드가 작성된 구조에 의해 결정되는 것이다. 함수가 어디서 호출되는지가 아니라 어디서 정의되었는지에 따라 스코프가 결정된다.

13. 
- 변수에 할당: `const fn = function() {}`
- 배열 요소: `[function() {}]`
- 객체 속성: `{method: function() {}}`
- 인수로 전달: `array.map(function() {})`
- 반환값: `return function() {}`

### 코딩 정답
14.
```js
function getMax(a, b, c) {
  return Math.max(a, b, c);
}

// 또는
function getMax(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
```

15.
```js
function calculator(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 'Invalid operator';
  }
}
```

16.
```js
const square = arr => arr.map(x => x * x);

// 또는
const squareArray = (arr) => {
  return arr.map(num => num * num);
};
```

17.
```js
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

// 화살표 함수 버전
const createAdder = x => y => x + y;
```

### 응용 정답
18.
```js
// 출력 결과:
// I am global
// I am outer  
// I am inner
```
`inner` 함수에서 스코프 연쇄를 통해 자신의 스코프 → `outer` 함수 스코프 → 전역 스코프 순으로 변수를 찾는다.

19.
콜백 함수는 다른 함수의 인수로 전달되어 특정 시점에 호출되는 함수이다.
```js
function processData(data, callback) {
  const result = data * 2;
  callback(result);
}

processData(5, function(result) {
  console.log('결과:', result); // 결과: 10
});
```

20.
- 문법: `function` 키워드 vs 화살표(`=>`) 문법
- 호이스팅: 함수 선언은 호이스팅되지만 화살표 함수는 변수 호이스팅 규칙을 따름
- `this` 바인딩: 화살표 함수는 `this`를 바인딩하지 않음
- 생성자 사용: 화살표 함수는 생성자로 사용할 수 없음

## 실습 코딩 문제

### 문제 1: 팩토리얼 계산

**문제 설명**
양의 정수 n을 입력받아 n!를 계산하는 factorial 함수를 작성하세요.
팩토리얼이란 1부터 n까지의 모든 양의 정수의 곱입니다.

**제한사항**
- n은 0 이상 12 이하의 정수
- 0! = 1로 정의

**입출력 예**
| n | result |
|---|--------|
| 5 | 120 |
| 0 | 1 |
| 3 | 6 |

**입출력 예 설명**

**입출력 예 #1**
5! = 5 × 4 × 3 × 2 × 1 = 120

**입출력 예 #2**
0! = 1 (정의에 의해)

---

### 문제 2: 클로저를 이용한 카운터

**문제 설명**
초기값을 받아서 호출할 때마다 1씩 증가하는 카운터 함수를 반환하는 createCounter 함수를 작성하세요.

**제한사항**
- 초기값은 0 이상의 정수
- 반환되는 함수는 호출할 때마다 현재 값을 반환하고 1 증가

**입출력 예**
```javascript
const counter1 = createCounter(0);
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter(10);
console.log(counter2()); // 10
console.log(counter2()); // 11
```

---

### 문제 3: 함수 조합 (Function Composition)

**문제 설명**
두 개의 함수를 받아서 합성 함수를 반환하는 compose 함수를 작성하세요.
compose(f, g)(x)는 f(g(x))와 같은 결과를 반환해야 합니다.

**제한사항**
- 입력 함수들은 모두 하나의 매개변수를 받는 함수
- 반환되는 함수도 하나의 매개변수를 받음

**입출력 예**
```javascript
const double = x => x * 2;
const addOne = x => x + 1;
const doubleThenAddOne = compose(addOne, double);

console.log(doubleThenAddOne(3)); // 7 (3 * 2 + 1)
console.log(doubleThenAddOne(5)); // 11 (5 * 2 + 1)
```

**입출력 예 설명**

**입출력 예 #1**
double(3) = 6, addOne(6) = 7

**입출력 예 #2**
double(5) = 10, addOne(10) = 11