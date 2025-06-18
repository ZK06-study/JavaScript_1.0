# 09. 제어 구문 - 퀴즈

## 객관식 문제

### 1. `if` 구문에서 조건이 falsy일 때 실행되는 부분은?
a) `if` 블록
b) `else` 블록  
c) `then` 블록
d) `catch` 블록

### 2. 다음 중 올바른 `for` 루프 구문은?
a) `for (let i = 0; i < 5; i++)`
b) `for (i = 0, i < 5, i++)`
c) `for (let i = 0: i < 5: i++)`
d) `for (let i = 0 to 5)`

### 3. `while` 루프와 `do...while` 루프의 차이점은?
a) 문법만 다르고 동작은 같다
b) `do...while`은 최소 한 번은 실행된다
c) `while`이 더 빠르다
d) `do...while`은 조건을 확인하지 않는다

### 4. `switch` 문에서 `break`를 생략하면?
a) 에러가 발생한다
b) 다음 case로 실행이 계속된다(fall-through)
c) 자동으로 switch문이 종료된다
d) 아무 일도 일어나지 않는다

### 5. `continue` 문의 역할은?
a) 루프를 완전히 종료한다
b) 현재 반복을 건너뛰고 다음 반복으로 이동한다
c) 함수를 종료한다
d) 조건을 다시 확인한다

### 6. `for...in` 루프는 주로 무엇을 반복할 때 사용하는가?
a) 배열의 요소
b) 객체의 속성
c) 문자열의 문자
d) 숫자 범위

## 단답형 문제

### 7. 다음 코드의 출력 결과는?
```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### 8. 다음 코드에서 몇 번 실행되는가?
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i += 2;
}
```

### 9. `break` 문은 어떤 구문들에서 사용할 수 있는가? (2가지)

### 10. 조건문에서 여러 조건을 연결할 때 사용하는 논리 연산자는?

## 서술형 문제

### 11. `if...else if...else` 구문의 실행 순서와 조건 평가 방식을 설명하시오.

### 12. `for` 루프의 세 부분(초기화, 조건, 증감)의 역할을 각각 설명하시오.

### 13. `for...in`과 `for...of`의 차이점을 설명하고 각각의 사용 사례를 제시하시오.

## 코딩 문제

### 14. 1부터 10까지의 숫자 중 짝수만 출력하는 `for` 루프를 작성하시오.

### 15. 다음 요구사항에 따라 함수를 작성하시오.
- 숫자를 입력받아 1부터 해당 숫자까지의 합을 반환
- `while` 루프 사용

### 16. 학점을 입력받아 등급을 반환하는 함수를 `switch` 문으로 작성하시오.
- 90 이상: A
- 80 이상: B  
- 70 이상: C
- 60 이상: D
- 그 외: F

### 17. 배열에서 특정 값을 찾아 인덱스를 반환하는 함수를 작성하시오. (찾지 못하면 -1 반환)

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 설명하시오.
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}
```

### 19. 중첩된 루프에서 바깥쪽 루프를 종료하는 방법을 제시하시오.

### 20. 다음 요구사항을 만족하는 코드를 작성하시오.
- 사용자가 'quit'을 입력할 때까지 계속 입력받기
- 입력받은 숫자들의 합계 출력
- 숫자가 아닌 값은 무시

---

## 정답

### 객관식 정답
1. b) `else` 블록
2. a) `for (let i = 0; i < 5; i++)`
3. b) `do...while`은 최소 한 번은 실행된다
4. b) 다음 case로 실행이 계속된다(fall-through)
5. b) 현재 반복을 건너뛰고 다음 반복으로 이동한다
6. b) 객체의 속성

### 단답형 정답
7. 
```
0
1
2
```

8. 3번 (i = 0, 2, 4일 때)

9. `switch`문, 루프문(for, while, do...while)

10. `&&` (AND), `||` (OR)

### 서술형 정답
11. `if` 조건부터 순차적으로 평가하여 처음으로 `true`인 조건의 블록을 실행하고 나머지는 건너뛴다. 모든 조건이 `false`면 `else` 블록이 실행된다.

12. 초기화: 루프 변수를 초기값으로 설정, 조건: 루프 계속 여부를 결정하는 boolean 표현식, 증감: 각 반복 후 루프 변수를 변경

13. `for...in`은 객체의 열거 가능한 속성 이름을 반복하고, `for...of`는 이터러블 객체의 값을 반복한다. `for...in`은 객체 속성 순회, `for...of`는 배열이나 문자열 순회에 사용한다.

### 코딩 정답
14.
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 또는
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

15.
```js
function sum(n) {
  let total = 0;
  let i = 1;
  while (i <= n) {
    total += i;
    i++;
  }
  return total;
}
```

16.
```js
function getGrade(score) {
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
    default:
      return 'F';
  }
}
```

17.
```js
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

### 응용 정답
18.
```
0
1
3
```
i=0,1: 정상 출력, i=2: continue로 건너뜀, i=3: 정상 출력, i=4: break로 루프 종료

19.
```js
// 방법 1: 레이블 사용
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (condition) break outer;
  }
}

// 방법 2: 플래그 변수
let shouldBreak = false;
for (let i = 0; i < 3 && !shouldBreak; i++) {
  for (let j = 0; j < 3; j++) {
    if (condition) {
      shouldBreak = true;
      break;
    }
  }
}

// 방법 3: 함수로 분리
function processMatrix() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (condition) return;
    }
  }
}
```

20.
```js
let sum = 0;
let input;

while (true) {
  input = prompt('숫자를 입력하세요 (종료: quit)');
  
  if (input === 'quit') {
    break;
  }
  
  const num = parseFloat(input);
  if (!isNaN(num)) {
    sum += num;
  }
}

console.log('합계:', sum);
```