# 01. 튜토리얼 - 퀴즈

## 객관식 문제

### 1. JavaScript 코드 실행에 대한 설명으로 옳은 것은?
a) 코드는 항상 아래에서 위로 실행된다
b) 코드는 세미콜론(`;`)으로 구분된 구문 단위로 위에서부터 차례대로 실행된다
c) 코드는 무작위 순서로 실행된다
d) 코드는 함수만 실행된다

### 2. JavaScript에서 대소문자 구분에 대한 설명으로 옳은 것은?
a) 대소문자를 구분하지 않는다
b) 변수명에서만 대소문자를 구분한다
c) 모든 부분에서 대소문자를 구분한다
d) 함수명에서만 대소문자를 구분한다

### 3. 다음 중 올바른 주석 표기법이 아닌 것은?
a) `// 한 줄 주석`
b) `/* 여러 줄 주석 */`
c) `# 주석`
d) `<!-- HTML 주석 -->`

### 4. 표현식(Expression)에 대한 설명으로 옳은 것은?
a) 코드 실행의 흐름을 나타낸다
b) 값으로 평가되는 코드 조각이다
c) 함수를 정의하는 방법이다
d) 변수를 선언하는 방법이다

### 5. 다음 중 구문(Statement)에 해당하는 것은?
a) `1 + 2`
b) `'hello'`
c) `true`
d) `const x = 1;`

### 6. 연산자 우선순위에 대한 설명으로 옳은 것은?
a) 항상 왼쪽부터 오른쪽으로 계산한다
b) 곱셈이 덧셈보다 먼저 계산된다
c) 괄호는 우선순위에 영향을 주지 않는다
d) 모든 연산자의 우선순위가 같다

## 단답형 문제

### 7. 다음 코드의 실행 결과를 쓰시오.
```js
1 + 2 * 3;
```

### 8. 다음 코드의 실행 결과를 쓰시오.
```js
(1 + 2) * 3;
```

### 9. 다음 코드에서 표현식에 해당하는 부분을 모두 쓰시오.
```js
const result = 10 + 5;
```

### 10. JavaScript에서 사용할 수 있는 주석 문법 두 가지를 쓰시오.

## 코딩 문제

### 11. 다음 계산식의 결과를 변수에 저장하는 코드를 작성하시오.
- 5와 3을 더한 결과
- 10에서 4를 뺀 결과
- 6과 7을 곱한 결과

### 12. 괄호를 사용하여 다음 연산의 결과가 20이 되도록 하시오.
```js
2 + 3 * 4
```

### 13. 다음 코드에 적절한 주석을 추가하시오.
```js
const price = 1000;
const discount = 100;
const finalPrice = price - discount;
```

---

## 정답

### 객관식 정답
1. b) 코드는 세미콜론(`;`)으로 구분된 구문 단위로 위에서부터 차례대로 실행된다
2. c) 모든 부분에서 대소문자를 구분한다
3. c) `# 주석`
4. b) 값으로 평가되는 코드 조각이다
5. d) `const x = 1;`
6. b) 곱셈이 덧셈보다 먼저 계산된다

### 단답형 정답
7. `7` (1 + (2 * 3) = 1 + 6 = 7)
8. `9` ((1 + 2) * 3 = 3 * 3 = 9)
9. `10`, `5`, `10 + 5`
10. `// 한 줄 주석`, `/* 여러 줄 주석 */`

### 코딩 정답
11.
```js
const addition = 5 + 3;      // 8
const subtraction = 10 - 4;   // 6
const multiplication = 6 * 7; // 42
```

12.
```js
(2 + 3) * 4  // 20
```

13.
```js
// 상품의 원래 가격
const price = 1000;
// 할인 금액
const discount = 100;
// 최종 결제 가격 계산
const finalPrice = price - discount;
```