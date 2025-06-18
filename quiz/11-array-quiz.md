# 11. 배열 - 퀴즈

## 객관식 문제

### 1. 배열과 객체의 차이점으로 옳지 않은 것은?
a) 배열은 순서가 있고 객체는 순서가 없다
b) 배열은 인덱스로 접근하고 객체는 속성명으로 접근한다
c) 배열은 숫자만 저장할 수 있고 객체는 모든 타입을 저장할 수 있다
d) 배열의 요소는 element, 객체의 요소는 property라고 한다

### 2. 배열의 인덱스는 몇 번부터 시작하는가?
a) 1
b) 0
c) -1
d) 10

### 3. `arr.length`가 나타내는 것은?
a) 배열의 마지막 인덱스
b) 배열의 요소 개수
c) 배열의 타입
d) 배열의 크기(바이트)

### 4. `push()` 메소드의 역할은?
a) 배열의 첫 번째 요소를 제거한다
b) 배열의 마지막에 요소를 추가한다
c) 배열을 정렬한다
d) 배열을 뒤집는다

### 5. `slice()`와 `splice()`의 차이점은?
a) 완전히 동일하다
b) `slice()`는 원본을 변경하고 `splice()`는 변경하지 않는다
c) `slice()`는 원본을 변경하지 않고 `splice()`는 변경한다
d) 매개변수 개수만 다르다

### 6. 다음 중 원본 배열을 변경하지 않는 메소드는?
a) `push()`
b) `pop()`
c) `map()`
d) `splice()`

## 단답형 문제

### 7. `[1, 2, 3].length`의 결과는?

### 8. `['a', 'b', 'c'][1]`의 결과는?

### 9. `[1, 2, 3].pop()`의 결과는?

### 10. 빈 배열을 생성하는 방법 두 가지를 쓰시오.

## 서술형 문제

### 11. 배열의 특징과 일반 객체와의 차이점을 설명하시오.

### 12. 배열을 순회하는 다양한 방법들을 나열하고 각각의 특징을 설명하시오.

### 13. 고차 함수 메소드(`map`, `filter`, `reduce`)의 개념과 사용 목적을 설명하시오.

## 코딩 문제

### 14. 다음 요구사항에 따라 코드를 작성하시오.
- 1부터 5까지의 숫자를 담은 배열 생성
- 배열의 모든 요소를 출력

### 15. 배열에서 특정 값의 모든 인덱스를 찾는 함수를 작성하시오.

### 16. 다음 배열 조작을 수행하는 코드를 작성하시오.
```js
const numbers = [1, 2, 3, 4, 5];
// 1. 모든 요소에 2를 곱한 새 배열
// 2. 짝수만 필터링한 새 배열  
// 3. 모든 요소의 합
```

### 17. 배열을 역순으로 정렬하되 원본은 변경하지 않는 함수를 작성하시오.

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 설명하시오.
```js
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);
```

### 19. 2차원 배열을 다루는 코드를 작성하시오.
- 3x3 행렬 생성
- 모든 요소의 합 계산

### 20. 다음 요구사항을 만족하는 함수를 작성하시오.
- 배열에서 중복을 제거하여 반환
- 원본 배열은 변경하지 않음

---

## 정답

### 객관식 정답
1. c) 배열은 숫자만 저장할 수 있고 객체는 모든 타입을 저장할 수 있다
2. b) 0
3. b) 배열의 요소 개수
4. b) 배열의 마지막에 요소를 추가한다
5. c) `slice()`는 원본을 변경하지 않고 `splice()`는 변경한다
6. c) `map()`

### 단답형 정답
7. `3`
8. `'b'`
9. `3`
10. `[]`, `new Array()`

### 서술형 정답
11. 배열은 순서가 있는 데이터 집합으로 인덱스로 접근하고, 객체는 이름-값 쌍의 집합으로 속성명으로 접근한다. 배열은 `length` 속성을 가지며 다양한 배열 전용 메소드를 제공한다.

12. 
- `for` 루프: 인덱스 기반, 가장 기본적
- `for...of`: 값 기반 순회, ES2015+
- `forEach()`: 콜백 함수 사용, 함수형 스타일
- `map()`: 변환된 새 배열 반환
- `for...in`: 인덱스 순회(비추천)

13. 고차 함수는 함수를 인수로 받거나 반환하는 함수이다. `map`은 변환, `filter`는 조건에 맞는 요소 선별, `reduce`는 하나의 값으로 축약하는 용도로 사용한다.

### 코딩 정답
14.
```js
const numbers = [1, 2, 3, 4, 5];

// 방법 1: for 루프
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 방법 2: forEach
numbers.forEach(num => console.log(num));
```

15.
```js
function findAllIndexes(arr, target) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexes.push(i);
    }
  }
  return indexes;
}

// 또는
function findAllIndexes(arr, target) {
  return arr.map((item, index) => item === target ? index : -1)
            .filter(index => index !== -1);
}
```

16.
```js
const numbers = [1, 2, 3, 4, 5];

// 1. 모든 요소에 2를 곱한 새 배열
const doubled = numbers.map(num => num * 2);

// 2. 짝수만 필터링한 새 배열
const evens = numbers.filter(num => num % 2 === 0);

// 3. 모든 요소의 합
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

17.
```js
function reverseArray(arr) {
  return [...arr].reverse();
}

// 또는
function reverseArray(arr) {
  return arr.slice().reverse();
}

// 또는 
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
```

## 실습 코딩 문제

### 문제 1: 배열 회전

**문제 설명**
배열을 오른쪽으로 k번 회전시키는 함수를 작성하세요.
회전이란 배열의 마지막 요소가 앞으로 이동하는 것을 의미합니다.

**제한사항**
- 배열의 길이는 1 이상 1000 이하
- k는 0 이상의 정수
- 원본 배열은 변경하지 않음

**입출력 예**
| arr | k | result |
|-----|---|--------|
| [1,2,3,4,5] | 2 | [4,5,1,2,3] |
| [1,2] | 3 | [2,1] |
| [1] | 1 | [1] |

**입출력 예 설명**

**입출력 예 #1**
[1,2,3,4,5]를 2번 회전: [5,1,2,3,4] → [4,5,1,2,3]

**입출력 예 #2**
[1,2]를 3번 회전: [2,1] → [1,2] → [2,1] (k가 배열 길이보다 큰 경우)

---

### 문제 2: 배열에서 두 번째로 큰 수 찾기

**문제 설명**
중복되지 않는 정수 배열에서 두 번째로 큰 수를 찾는 함수를 작성하세요.

**제한사항**
- 배열의 길이는 2 이상 1000 이하
- 모든 요소는 서로 다른 정수
- -1000 이상 1000 이하의 정수

**입출력 예**
| numbers | result |
|---------|--------|
| [3,1,4,1,5] | 4 |
| [2,1] | 1 |
| [5,3,9,1] | 5 |

**입출력 예 설명**

**입출력 예 #1**
[3,1,4,1,5]를 내림차순으로 정렬하면 [5,4,3,1,1], 두 번째로 큰 수는 4

**입출력 예 #2**
[2,1]에서 가장 큰 수는 2, 두 번째로 큰 수는 1

---

### 문제 3: 부분 배열의 최대 합

**문제 설명**
정수 배열에서 연속된 부분 배열의 합 중 최댓값을 구하는 함수를 작성하세요.
(카데인 알고리즘)

**제한사항**
- 배열의 길이는 1 이상 100 이하
- -100 이상 100 이하의 정수
- 적어도 하나의 요소를 포함해야 함

**입출력 예**
| nums | result |
|------|--------|
| [-2,1,-3,4,-1,2,1,-5,4] | 6 |
| [1] | 1 |
| [5,4,-1,7,8] | 23 |

**입출력 예 설명**

**입출력 예 #1**
부분 배열 [4,-1,2,1]의 합이 6으로 최댓값

**입출력 예 #2**
요소가 하나뿐이므로 1이 최댓값

**입출력 예 #3**
전체 배열 [5,4,-1,7,8]의 합이 23으로 최댓값

### 응용 정답
18.
```js
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```
`arr2 = arr1`은 참조를 복사하므로 두 변수가 같은 배열을 가리킨다. 따라서 `arr2`를 수정하면 `arr1`도 영향을 받는다.

19.
```js
// 3x3 행렬 생성
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 모든 요소의 합 계산
function sumMatrix(matrix) {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j];
    }
  }
  return total;
}

// 또는 함수형 스타일
function sumMatrix(matrix) {
  return matrix.flat().reduce((sum, num) => sum + num, 0);
}
```

20.
```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 또는
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 또는
function removeDuplicates(arr) {
  const result = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
```