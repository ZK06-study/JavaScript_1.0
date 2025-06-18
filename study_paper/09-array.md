# 배열 학습지

## 1. 배열 기본 개념

| 개념 | 설명 | 특징 |
|------|------|------|
| **배열** | 순서가 있는 데이터의 집합 | 인덱스로 접근 |
| **요소** | 배열에 저장된 각각의 데이터 | 모든 타입 가능 |
| **인덱스** | 배열 요소의 위치 (0부터 시작) | 0, 1, 2, ... |
| **length** | 배열의 길이 프로퍼티 | 요소 개수 |

## 2. 배열 생성 방법

| 방법 | 문법 | 예시 | 특징 |
|------|------|------|------|
| **배열 리터럴** | [] | [1, 2, 3] | 가장 일반적 |
| **Array 생성자** | new Array() | new Array(1, 2, 3) | 잘 사용하지 않음 |
| **Array.of()** | Array.of() | Array.of(1, 2, 3) | ES6, 생성자 문제 해결 |
| **Array.from()** | Array.from() | Array.from(iterable) | ES6, 유사배열 변환 |

```javascript
// 배열 리터럴 (권장)
let fruits = ['사과', '바나나', '오렌지'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, '문자열', true, null, {name: 'object'}];

// 빈 배열
let empty = [];

// Array 생성자
let arr1 = new Array(1, 2, 3);     // [1, 2, 3]
let arr2 = new Array(3);           // [empty × 3] (길이 3인 빈 배열)

// Array.of() (ES6)
let arr3 = Array.of(3);            // [3] (요소가 3인 배열)
let arr4 = Array.of(1, 2, 3);      // [1, 2, 3]

// Array.from() (ES6)
let str = 'hello';
let charArray = Array.from(str);   // ['h', 'e', 'l', 'l', 'o']

let nodeList = document.querySelectorAll('div');
let divArray = Array.from(nodeList); // NodeList를 배열로 변환

// 범위 배열 생성
let range = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]
```

## 3. 요소 접근과 수정

| 작업 | 문법 | 예시 | 설명 |
|------|------|------|------|
| **접근** | arr[index] | fruits[0] | 인덱스로 요소 읽기 |
| **수정** | arr[index] = value | fruits[0] = '딸기' | 인덱스로 요소 변경 |
| **길이** | arr.length | fruits.length | 배열 크기 |
| **마지막 요소** | arr[arr.length - 1] | fruits[fruits.length - 1] | 마지막 요소 접근 |

```javascript
let fruits = ['사과', '바나나', '오렌지'];

// 요소 접근
console.log(fruits[0]);    // '사과'
console.log(fruits[1]);    // '바나나'
console.log(fruits[2]);    // '오렌지'
console.log(fruits[3]);    // undefined

// 음수 인덱스는 지원하지 않음
console.log(fruits[-1]);   // undefined

// 요소 수정
fruits[1] = '포도';
console.log(fruits);       // ['사과', '포도', '오렌지']

// 길이 확인
console.log(fruits.length); // 3

// 존재하지 않는 인덱스에 할당
fruits[5] = '딸기';
console.log(fruits);       // ['사과', '포도', '오렌지', empty × 2, '딸기']
console.log(fruits.length); // 6

// 마지막 요소 접근
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);    // '딸기'
```

## 4. 배열 요소 추가/제거

### 끝에 추가/제거

| 메소드 | 설명 | 반환값 | 예시 |
|--------|------|--------|------|
| **push()** | 끝에 요소 추가 | 새로운 길이 | arr.push('새요소') |
| **pop()** | 끝에서 요소 제거 | 제거된 요소 | arr.pop() |

### 앞에 추가/제거

| 메소드 | 설명 | 반환값 | 예시 |
|--------|------|--------|------|
| **unshift()** | 앞에 요소 추가 | 새로운 길이 | arr.unshift('새요소') |
| **shift()** | 앞에서 요소 제거 | 제거된 요소 | arr.shift() |

```javascript
let fruits = ['바나나', '오렌지'];

// push: 끝에 추가
fruits.push('사과');
console.log(fruits); // ['바나나', '오렌지', '사과']

fruits.push('포도', '딸기');
console.log(fruits); // ['바나나', '오렌지', '사과', '포도', '딸기']

// pop: 끝에서 제거
let removed = fruits.pop();
console.log(removed); // '딸기'
console.log(fruits);  // ['바나나', '오렌지', '사과', '포도']

// unshift: 앞에 추가
fruits.unshift('키위');
console.log(fruits); // ['키위', '바나나', '오렌지', '사과', '포도']

// shift: 앞에서 제거
let first = fruits.shift();
console.log(first);  // '키위'
console.log(fruits); // ['바나나', '오렌지', '사과', '포도']

// 스택 구조 (LIFO)
let stack = [];
stack.push(1);    // [1]
stack.push(2);    // [1, 2]
stack.push(3);    // [1, 2, 3]
console.log(stack.pop()); // 3, stack: [1, 2]

// 큐 구조 (FIFO)
let queue = [];
queue.push(1);    // [1]
queue.push(2);    // [1, 2]
console.log(queue.shift()); // 1, queue: [2]
```

## 5. splice() 메소드

| 용도 | 문법 | 설명 |
|------|------|------|
| **삭제** | splice(start, deleteCount) | start부터 deleteCount개 삭제 |
| **삽입** | splice(start, 0, ...items) | start 위치에 items 삽입 |
| **교체** | splice(start, deleteCount, ...items) | 삭제 후 삽입 |

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7];

// 요소 삭제
let deleted = numbers.splice(2, 2); // 인덱스 2부터 2개 삭제
console.log(deleted); // [3, 4]
console.log(numbers); // [1, 2, 5, 6, 7]

// 요소 삽입
numbers.splice(2, 0, 'a', 'b'); // 인덱스 2에 'a', 'b' 삽입
console.log(numbers); // [1, 2, 'a', 'b', 5, 6, 7]

// 요소 교체
numbers.splice(2, 2, 3, 4); // 인덱스 2부터 2개 삭제 후 3, 4 삽입
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]

// 음수 인덱스 사용
numbers.splice(-2, 1); // 뒤에서 2번째부터 1개 삭제
console.log(numbers); // [1, 2, 3, 4, 5, 7]

// 배열 끝에 삽입
numbers.splice(numbers.length, 0, 8, 9);
console.log(numbers); // [1, 2, 3, 4, 5, 7, 8, 9]
```

## 6. 배열 검색

| 메소드 | 설명 | 반환값 | 예시 |
|--------|------|--------|------|
| **indexOf()** | 첫 번째 위치 찾기 | 인덱스 또는 -1 | arr.indexOf('사과') |
| **lastIndexOf()** | 마지막 위치 찾기 | 인덱스 또는 -1 | arr.lastIndexOf('사과') |
| **includes()** | 포함 여부 확인 | true/false | arr.includes('사과') |
| **find()** | 조건 만족 첫 요소 | 요소 또는 undefined | arr.find(x => x > 5) |
| **findIndex()** | 조건 만족 첫 인덱스 | 인덱스 또는 -1 | arr.findIndex(x => x > 5) |

```javascript
let fruits = ['사과', '바나나', '사과', '오렌지'];
let numbers = [1, 5, 3, 8, 2];

// indexOf, lastIndexOf
console.log(fruits.indexOf('사과'));     // 0 (첫 번째)
console.log(fruits.lastIndexOf('사과'));  // 2 (마지막)
console.log(fruits.indexOf('키위'));     // -1 (없음)

// includes (ES7)
console.log(fruits.includes('바나나'));   // true
console.log(fruits.includes('키위'));     // false

// find (ES6)
let users = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25},
    {name: '박민수', age: 35}
];

let user = users.find(user => user.age > 30);
console.log(user); // {name: '박민수', age: 35}

let notFound = users.find(user => user.age > 40);
console.log(notFound); // undefined

// findIndex (ES6)
let index = users.findIndex(user => user.name === '이영희');
console.log(index); // 1

// 복합 조건
let evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // 8 (첫 번째 짝수)
```

## 7. 고차 함수 (Higher-Order Functions)

### map() - 변환

| 특징 | 설명 |
|------|------|
| **용도** | 모든 요소를 변환하여 새 배열 생성 |
| **반환** | 새 배열 (원본 배열은 변경 안됨) |
| **콜백** | (element, index, array) => newElement |

```javascript
let numbers = [1, 2, 3, 4, 5];

// 모든 요소를 2배로
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 객체 배열 변환
let users = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25}
];

let names = users.map(user => user.name);
console.log(names); // ['김철수', '이영희']

// 인덱스 활용
let indexed = numbers.map((num, index) => `${index}: ${num}`);
console.log(indexed); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']
```

### filter() - 필터링

| 특징 | 설명 |
|------|------|
| **용도** | 조건을 만족하는 요소들로 새 배열 생성 |
| **반환** | 새 배열 (조건에 맞는 요소들) |
| **콜백** | (element, index, array) => boolean |

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 5보다 큰 수
let greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// 객체 배열 필터링
let users = [
    {name: '김철수', age: 30, active: true},
    {name: '이영희', age: 25, active: false},
    {name: '박민수', age: 35, active: true}
];

let activeUsers = users.filter(user => user.active);
let adults = users.filter(user => user.age >= 30);
```

### reduce() - 집계

| 특징 | 설명 |
|------|------|
| **용도** | 배열을 단일 값으로 줄이기 |
| **반환** | 최종 누적값 |
| **콜백** | (accumulator, current, index, array) => newAccumulator |

```javascript
let numbers = [1, 2, 3, 4, 5];

// 합계
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 곱셈
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// 최댓값
let max = numbers.reduce((acc, num) => Math.max(acc, num));
console.log(max); // 5

// 객체로 그룹화
let users = [
    {name: '김철수', department: 'IT'},
    {name: '이영희', department: 'HR'},
    {name: '박민수', department: 'IT'}
];

let grouped = users.reduce((acc, user) => {
    if (!acc[user.department]) {
        acc[user.department] = [];
    }
    acc[user.department].push(user.name);
    return acc;
}, {});

console.log(grouped); // {IT: ['김철수', '박민수'], HR: ['이영희']}

// 카운팅
let words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
let counts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(counts); // {apple: 3, banana: 2, cherry: 1}
```

## 8. 기타 유용한 배열 메소드

### 순회 메소드

| 메소드 | 설명 | 반환값 |
|--------|------|--------|
| **forEach()** | 각 요소에 대해 함수 실행 | undefined |
| **some()** | 하나라도 조건 만족하면 true | boolean |
| **every()** | 모두 조건 만족하면 true | boolean |

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});

// some: 하나라도 조건 만족
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every: 모두 조건 만족
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false
```

### 정렬 메소드

| 메소드 | 설명 | 원본 변경 |
|--------|------|----------|
| **sort()** | 정렬 (기본: 문자열 비교) | O |
| **reverse()** | 역순 정렬 | O |

```javascript
let fruits = ['바나나', '사과', '오렌지'];
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// 문자열 정렬
fruits.sort();
console.log(fruits); // ['바나나', '사과', '오렌지']

// 숫자 정렬 (비교 함수 필요)
numbers.sort(); // 문자열로 변환하여 정렬
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9] (잘못됨: 위는 ['1', '1', '2', '3', '4', '5', '6', '9'])

// 올바른 숫자 정렬
numbers.sort((a, b) => a - b); // 오름차순
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort((a, b) => b - a); // 내림차순
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]

// 객체 정렬
let users = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25},
    {name: '박민수', age: 35}
];

users.sort((a, b) => a.age - b.age); // 나이 오름차순
users.sort((a, b) => a.name.localeCompare(b.name)); // 이름 가나다순

// reverse
numbers.reverse();
console.log(numbers); // 순서 뒤집기
```

## 9. 배열 연결과 복사

| 메소드 | 설명 | 원본 변경 | 반환값 |
|--------|------|----------|--------|
| **concat()** | 배열 연결 | X | 새 배열 |
| **slice()** | 부분 배열 복사 | X | 새 배열 |
| **join()** | 문자열로 변환 | X | 문자열 |

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// concat: 배열 연결
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 스프레드 연산자로 연결 (ES6)
let combined2 = [...arr1, ...arr2];
console.log(combined2); // [1, 2, 3, 4, 5, 6]

// slice: 부분 배열 복사
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4); // 인덱스 1부터 3까지
console.log(sliced); // [2, 3, 4]

let copied = numbers.slice(); // 전체 복사
console.log(copied); // [1, 2, 3, 4, 5]

// join: 문자열로 변환
let fruits = ['사과', '바나나', '오렌지'];
console.log(fruits.join());      // '사과,바나나,오렌지'
console.log(fruits.join(' '));   // '사과 바나나 오렌지'
console.log(fruits.join(' - ')); // '사과 - 바나나 - 오렌지'
```

## 10. 다차원 배열

```javascript
// 2차원 배열
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 요소 접근
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

// 2차원 배열 순회
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// forEach로 2차원 배열 순회
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`[${i}][${j}]: ${cell}`);
    });
});

// 평탄화 (flatten)
let nested = [[1, 2], [3, 4], [5, 6]];
let flattened = nested.flat(); // ES2019
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// 깊은 평탄화
let deepNested = [1, [2, [3, [4]]]];
let deepFlattened = deepNested.flat(Infinity);
console.log(deepFlattened); // [1, 2, 3, 4]
```

## 11. 실용적인 배열 활용

```javascript
// 중복 제거
let numbers = [1, 2, 2, 3, 3, 4, 5];
let unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]

// 배열 섞기 (Fisher-Yates 알고리즘)
function shuffle(array) {
    let result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// 배열 청크 (n개씩 나누기)
function chunk(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// 배열 교집합
function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}

// 배열 차집합
function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

// 조건부 요소 추가
let items = ['a', 'b'];
items.push(...(condition ? ['c', 'd'] : []));

// 배열 메소드 체이닝
let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter(n => n % 2 === 0)        // 짝수만
    .map(n => n * n)                 // 제곱
    .reduce((sum, n) => sum + n, 0); // 합계

console.log(result); // 220 (4 + 16 + 36 + 64 + 100)
```

## 12. 학습 체크리스트

- [ ] 배열을 생성하고 요소에 접근할 수 있다
- [ ] push, pop, shift, unshift를 사용할 수 있다
- [ ] splice로 요소를 삽입, 삭제, 교체할 수 있다
- [ ] 배열 검색 메소드들을 활용할 수 있다
- [ ] map, filter, reduce 등 고차 함수를 사용할 수 있다
- [ ] 배열 메소드를 체이닝하여 복합 작업을 수행할 수 있다 