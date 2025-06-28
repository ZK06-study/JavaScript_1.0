# 배열 학습지

## 📌 **배열 기본 개념**

### **1️⃣ 배열이란?**

| 특징 | 설명 | 예시 |
|------|------|------|
| **순서가 있는 리스트** | 인덱스로 접근 | `arr[0]`, `arr[1]` |
| **참조 타입** | 객체의 한 종류 | 메모리 주소 참조 |
| **동적 크기** | 런타임에 크기 변경 가능 | `push()`, `pop()` |
| **다양한 타입** | 여러 타입 요소 저장 가능 | `[1, 'hello', true]` |

### **2️⃣ 배열 vs 객체**

| 구분 | 배열 | 객체 |
|------|------|------|
| **인덱스** | 숫자 인덱스 (0부터) | 문자열 키 |
| **순서** | 순서 보장 | 순서 보장 안됨 (ES6+는 보장) |
| **length** | length 속성 있음 | length 속성 없음 |
| **용도** | 순서가 중요한 데이터 | 키-값 매핑 |

💡 **배열 기본 예제**

```javascript
// 배열 리터럴로 생성
let fruits = ['사과', '바나나', '오렌지'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, {name: 'Kim'}];

// 배열 접근
console.log(fruits[0]);    // '사과'
console.log(fruits[2]);    // '오렌지'
console.log(fruits.length); // 3

// 배열 수정
fruits[1] = '딸기';        // 기존 요소 변경
fruits[3] = '포도';        // 새 요소 추가

console.log(fruits);       // ['사과', '딸기', '오렌지', '포도']
console.log(fruits.length); // 4

// 희소 배열 (sparse array)
let sparse = [];
sparse[0] = 'first';
sparse[10] = 'eleventh';
console.log(sparse.length); // 11 (빈 자리는 undefined)
console.log(sparse[5]);     // undefined
```

---

## 📌 **배열 생성 방법**

### **1️⃣ 배열 생성 방식**

| 방법 | 문법 | 특징 | 예시 |
|------|------|------|------|
| **리터럴** | `[]` | 가장 일반적 | `[1, 2, 3]` |
| **Array 생성자** | `new Array()` | 동적 생성 | `new Array(5)` |
| **Array.of()** | `Array.of(...)` | 인수를 요소로 | `Array.of(3)` → `[3]` |
| **Array.from()** | `Array.from(iterable)` | 유사배열을 배열로 | `Array.from('hello')` |

### **2️⃣ 특수한 배열 생성**

| 용도 | 방법 | 예시 |
|------|------|------|
| **고정 크기** | `new Array(length)` | `new Array(5)` |
| **채워진 배열** | `Array(n).fill(value)` | `Array(3).fill(0)` |
| **연속 숫자** | `Array.from({length: n}, (_, i) => i)` | `[0, 1, 2, 3, 4]` |
| **범위 배열** | `Array.from({length: n}, (_, i) => start + i)` | `[10, 11, 12]` |

💡 **배열 생성 예제**

```javascript
// 1. 배열 리터럴 (권장)
let numbers = [1, 2, 3, 4, 5];
let empty = [];

// 2. Array 생성자
let arr1 = new Array();        // []
let arr2 = new Array(5);       // [ <5 empty items> ] - 길이만 설정
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

// 3. Array.of() - 모든 인수를 요소로
let arr4 = Array.of(3);        // [3] (길이가 아닌 요소)
let arr5 = Array.of(1, 2, 3);  // [1, 2, 3]

// 4. Array.from() - 유사배열이나 이터러블을 배열로
let str = 'hello';
let chars = Array.from(str);   // ['h', 'e', 'l', 'l', 'o']

let nodeList = document.querySelectorAll('div'); // HTMLCollection
let divArray = Array.from(nodeList);

// 5. 특수한 배열 생성
// 0으로 채운 배열
let zeros = new Array(5).fill(0);    // [0, 0, 0, 0, 0]

// 1부터 10까지 배열
let oneToTen = Array.from({length: 10}, (_, i) => i + 1);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 짝수 배열
let evens = Array.from({length: 5}, (_, i) => (i + 1) * 2);
// [2, 4, 6, 8, 10]

// 문자열 배열
let alphabet = Array.from({length: 26}, (_, i) => 
    String.fromCharCode(65 + i)
); // ['A', 'B', 'C', ..., 'Z']

// 2차원 배열
let matrix = Array.from({length: 3}, () => Array(3).fill(0));
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// 랜덤 배열
let random = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
```

---

## 📌 **배열 요소 조작**

### **1️⃣ 요소 추가/제거 메소드**

| 메소드 | 기능 | 원본 변경 | 반환값 | 예시 |
|--------|------|----------|--------|------|
| **push()** | 끝에 추가 | ✅ | 새로운 length | `arr.push(4)` |
| **pop()** | 끝에서 제거 | ✅ | 제거된 요소 | `arr.pop()` |
| **unshift()** | 앞에 추가 | ✅ | 새로운 length | `arr.unshift(0)` |
| **shift()** | 앞에서 제거 | ✅ | 제거된 요소 | `arr.shift()` |
| **splice()** | 임의 위치 추가/제거 | ✅ | 제거된 요소들 | `arr.splice(1, 2)` |

### **2️⃣ 배열 변경 메소드**

| 메소드 | 기능 | 원본 변경 | 예시 |
|--------|------|----------|------|
| **reverse()** | 순서 뒤집기 | ✅ | `arr.reverse()` |
| **sort()** | 정렬 | ✅ | `arr.sort()` |
| **fill()** | 특정 값으로 채우기 | ✅ | `arr.fill(0)` |

💡 **배열 요소 조작 예제**

```javascript
let fruits = ['사과', '바나나'];

// 1. push/pop - 끝 요소 조작
fruits.push('오렌지');           // ['사과', '바나나', '오렌지'] - 길이 반환: 3
fruits.push('포도', '딸기');     // ['사과', '바나나', '오렌지', '포도', '딸기']

let lastFruit = fruits.pop();    // lastFruit: '딸기'
console.log(fruits);             // ['사과', '바나나', '오렌지', '포도']

// 2. unshift/shift - 앞 요소 조작
fruits.unshift('키위');          // ['키위', '사과', '바나나', '오렌지', '포도']
fruits.unshift('메론', '체리');  // ['메론', '체리', '키위', '사과', '바나나', '오렌지', '포도']

let firstFruit = fruits.shift(); // firstFruit: '메론'
console.log(fruits);             // ['체리', '키위', '사과', '바나나', '오렌지', '포도']

// 3. splice - 임의 위치 조작
let numbers = [1, 2, 3, 4, 5];

// 요소 제거: splice(시작인덱스, 제거개수)
let removed = numbers.splice(2, 2);  // removed: [3, 4]
console.log(numbers);                 // [1, 2, 5]

// 요소 추가: splice(시작인덱스, 0, 추가할요소들...)
numbers.splice(2, 0, 3, 4);          // [1, 2, 3, 4, 5]

// 요소 교체: splice(시작인덱스, 제거개수, 추가할요소들...)
numbers.splice(1, 2, 'a', 'b', 'c'); // [1, 'a', 'b', 'c', 4, 5]

// 4. 배열 정렬과 뒤집기
let letters = ['c', 'a', 'b'];
letters.sort();                      // ['a', 'b', 'c'] - 알파벳 순
letters.reverse();                   // ['c', 'b', 'a'] - 뒤집기

// 숫자 정렬 (주의: 기본은 문자열 정렬)
let nums = [10, 5, 40, 25, 1000, 1];
nums.sort();                         // [1, 10, 1000, 25, 40, 5] - 잘못된 결과!

// 올바른 숫자 정렬
nums.sort((a, b) => a - b);          // [1, 5, 10, 25, 40, 1000] - 오름차순
nums.sort((a, b) => b - a);          // [1000, 40, 25, 10, 5, 1] - 내림차순

// 5. fill - 배열 채우기
let arr = new Array(5);
arr.fill(0);                         // [0, 0, 0, 0, 0]
arr.fill(1, 2, 4);                   // [0, 0, 1, 1, 0] - 인덱스 2부터 4까지

// 6. 실용적인 조작 예제
let tasks = ['일어나기', '양치하기', '아침먹기'];

// 새 할일 추가
function addTask(taskArray, task, position = 'end') {
    if (position === 'end') {
        taskArray.push(task);
    } else if (position === 'start') {
        taskArray.unshift(task);
    } else if (typeof position === 'number') {
        taskArray.splice(position, 0, task);
    }
    return taskArray;
}

addTask(tasks, '커피마시기');        // 끝에 추가
addTask(tasks, '스트레칭', 1);      // 인덱스 1에 추가

// 할일 완료 (제거)
function completeTask(taskArray, index) {
    if (index >= 0 && index < taskArray.length) {
        return taskArray.splice(index, 1)[0];
    }
    return null;
}

let completed = completeTask(tasks, 0); // '일어나기' 완료
console.log(tasks);
console.log(`완료된 할일: ${completed}`);
```

---

## 📌 **배열 탐색과 검사**

### **1️⃣ 검색 메소드**

| 메소드 | 기능 | 반환값 | 예시 |
|--------|------|--------|------|
| **indexOf()** | 첫 번째 일치 인덱스 | 인덱스 또는 -1 | `arr.indexOf('apple')` |
| **lastIndexOf()** | 마지막 일치 인덱스 | 인덱스 또는 -1 | `arr.lastIndexOf('apple')` |
| **includes()** | 포함 여부 | boolean | `arr.includes('apple')` |
| **find()** | 조건 만족 첫 요소 | 요소 또는 undefined | `arr.find(x => x > 10)` |
| **findIndex()** | 조건 만족 첫 인덱스 | 인덱스 또는 -1 | `arr.findIndex(x => x > 10)` |

### **2️⃣ 검사 메소드**

| 메소드 | 기능 | 반환값 | 예시 |
|--------|------|--------|------|
| **every()** | 모든 요소가 조건 만족 | boolean | `arr.every(x => x > 0)` |
| **some()** | 하나라도 조건 만족 | boolean | `arr.some(x => x > 10)` |

💡 **배열 탐색과 검사 예제**

```javascript
let numbers = [1, 5, 10, 15, 20, 15, 30];
let fruits = ['apple', 'banana', 'orange', 'apple'];

// 1. indexOf/lastIndexOf - 값으로 인덱스 찾기
console.log(numbers.indexOf(15));     // 3 (첫 번째 15의 인덱스)
console.log(numbers.lastIndexOf(15)); // 5 (마지막 15의 인덱스)
console.log(numbers.indexOf(100));    // -1 (없는 값)

console.log(fruits.indexOf('apple'));     // 0
console.log(fruits.lastIndexOf('apple')); // 3

// 2. includes - 포함 여부 확인
console.log(numbers.includes(10));    // true
console.log(numbers.includes(100));   // false
console.log(fruits.includes('grape')); // false

// 3. find/findIndex - 조건으로 찾기
let people = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25},
    {name: '박민수', age: 35}
];

// 첫 번째 30세 이상인 사람
let adult = people.find(person => person.age >= 30);
console.log(adult); // {name: '김철수', age: 30}

// 25세인 사람의 인덱스
let youngIndex = people.findIndex(person => person.age === 25);
console.log(youngIndex); // 1

// 없는 조건
let notFound = people.find(person => person.age > 40);
console.log(notFound); // undefined

// 4. every/some - 전체/부분 조건 검사
let scores = [85, 90, 78, 92, 88];

// 모든 점수가 60점 이상인가?
let allPassed = scores.every(score => score >= 60);
console.log(allPassed); // true

// 90점 이상인 점수가 있는가?
let hasExcellent = scores.some(score => score >= 90);
console.log(hasExcellent); // true

// 모든 점수가 90점 이상인가?
let allExcellent = scores.every(score => score >= 90);
console.log(allExcellent); // false

// 5. 실용적인 검색 예제
let products = [
    {id: 1, name: 'MacBook', price: 2000000, category: 'laptop'},
    {id: 2, name: 'iPhone', price: 1200000, category: 'phone'},
    {id: 3, name: 'iPad', price: 800000, category: 'tablet'},
    {id: 4, name: 'Galaxy', price: 1100000, category: 'phone'}
];

// ID로 상품 찾기
function findProductById(products, id) {
    return products.find(product => product.id === id);
}

// 카테고리별 상품 확인
function hasProductInCategory(products, category) {
    return products.some(product => product.category === category);
}

// 모든 상품이 특정 가격 이상인지 확인
function allProductsAbovePrice(products, minPrice) {
    return products.every(product => product.price >= minPrice);
}

// 가격 범위 내 상품 찾기
function findProductInPriceRange(products, min, max) {
    return products.find(product => 
        product.price >= min && product.price <= max
    );
}

console.log(findProductById(products, 2));           // iPhone 객체
console.log(hasProductInCategory(products, 'laptop')); // true
console.log(allProductsAbovePrice(products, 500000));  // true
console.log(findProductInPriceRange(products, 1000000, 1300000)); // iPhone 객체

// 6. 복잡한 검색 조건
let users = [
    {name: '김철수', age: 30, active: true, role: 'admin'},
    {name: '이영희', age: 25, active: false, role: 'user'},
    {name: '박민수', age: 35, active: true, role: 'user'},
    {name: '최영수', age: 28, active: true, role: 'admin'}
];

// 활성 사용자인 관리자 찾기
let activeAdmin = users.find(user => 
    user.active && user.role === 'admin'
);

// 모든 사용자가 활성상태인가?
let allActive = users.every(user => user.active);

// 관리자가 있는가?
let hasAdmin = users.some(user => user.role === 'admin');

// 30세 이상의 활성 사용자가 있는가?
let hasActiveAdult = users.some(user => 
    user.age >= 30 && user.active
);

console.log('활성 관리자:', activeAdmin);
console.log('모든 사용자 활성:', allActive);      // false
console.log('관리자 존재:', hasAdmin);           // true
console.log('30세 이상 활성 사용자:', hasActiveAdult); // true
```

---

## 📌 **배열 변환 메소드**

### **1️⃣ 함수형 메소드**

| 메소드 | 기능 | 원본 변경 | 반환값 | 예시 |
|--------|------|----------|--------|------|
| **map()** | 각 요소 변환 | ❌ | 새 배열 | `arr.map(x => x * 2)` |
| **filter()** | 조건 만족 요소만 | ❌ | 새 배열 | `arr.filter(x => x > 10)` |
| **reduce()** | 누적 연산 | ❌ | 단일 값 | `arr.reduce((sum, x) => sum + x)` |
| **forEach()** | 각 요소에 함수 실행 | ❌ | undefined | `arr.forEach(console.log)` |

### **2️⃣ 기타 변환 메소드**

| 메소드 | 기능 | 예시 |
|--------|------|------|
| **join()** | 문자열로 연결 | `arr.join(', ')` |
| **slice()** | 부분 배열 추출 | `arr.slice(1, 3)` |
| **concat()** | 배열 연결 | `arr1.concat(arr2)` |
| **flat()** | 중첩 배열 평탄화 | `arr.flat()` |

💡 **배열 변환 예제**

```javascript
let numbers = [1, 2, 3, 4, 5];
let people = [
    {name: '김철수', age: 30, salary: 5000},
    {name: '이영희', age: 25, salary: 4000},
    {name: '박민수', age: 35, salary: 6000}
];

// 1. map - 각 요소 변환
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let names = people.map(person => person.name);
console.log(names); // ['김철수', '이영희', '박민수']

// 복합 변환
let nameAgeStr = people.map(person => 
    `${person.name}(${person.age}세)`
);
console.log(nameAgeStr); // ['김철수(30세)', '이영희(25세)', '박민수(35세)']

// 2. filter - 조건 필터링
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let seniors = people.filter(person => person.age >= 30);
console.log(seniors); // [{name: '김철수', ...}, {name: '박민수', ...}]

// 복합 조건 필터링
let highEarners = people.filter(person => 
    person.age >= 30 && person.salary >= 5000
);

// 3. reduce - 누적 연산
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

let product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// 총 급여 계산
let totalSalary = people.reduce((total, person) => 
    total + person.salary, 0
);
console.log(totalSalary); // 15000

// 가장 높은 급여 찾기
let maxSalary = people.reduce((max, person) => 
    Math.max(max, person.salary), 0
);

// 나이별 그룹핑
let ageGroups = people.reduce((groups, person) => {
    let ageGroup = person.age >= 30 ? 'senior' : 'junior';
    if (!groups[ageGroup]) {
        groups[ageGroup] = [];
    }
    groups[ageGroup].push(person);
    return groups;
}, {});

// 4. forEach - 각 요소에 작업 수행
numbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});

people.forEach(person => {
    console.log(`${person.name}의 월급: ${person.salary}만원`);
});

// 5. 메소드 체이닝
let result = people
    .filter(person => person.age >= 30)      // 30세 이상 필터링
    .map(person => ({                        // 새 객체로 변환
        name: person.name,
        yearlySalary: person.salary * 12
    }))
    .reduce((total, person) =>               // 연봉 합계
        total + person.yearlySalary, 0
    );

console.log(result); // 30세 이상 직원들의 총 연봉

// 6. 기타 변환 메소드
let fruits = ['apple', 'banana', 'orange'];

// join - 문자열로 연결
console.log(fruits.join(', '));      // 'apple, banana, orange'
console.log(fruits.join(' | '));     // 'apple | banana | orange'

// slice - 부분 배열 (원본 변경 안됨)
let subset = fruits.slice(1, 3);     // ['banana', 'orange']
let lastTwo = fruits.slice(-2);      // ['banana', 'orange']

// concat - 배열 연결
let vegetables = ['carrot', 'potato'];
let food = fruits.concat(vegetables);
console.log(food); // ['apple', 'banana', 'orange', 'carrot', 'potato']

// 스프레드 연산자로 연결 (ES6)
let combined = [...fruits, ...vegetables];

// flat - 중첩 배열 평탄화
let nested = [[1, 2], [3, 4], [5, [6, 7]]];
console.log(nested.flat());    // [1, 2, 3, 4, 5, [6, 7]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6, 7] - 2단계 평탄화

// 7. 실용적인 데이터 처리 예제
let sales = [
    {product: 'MacBook', amount: 2000000, month: 'Jan'},
    {product: 'iPhone', amount: 1200000, month: 'Jan'},
    {product: 'MacBook', amount: 2000000, month: 'Feb'},
    {product: 'iPad', amount: 800000, month: 'Feb'}
];

// 월별 총 매출
let monthlySales = sales.reduce((acc, sale) => {
    acc[sale.month] = (acc[sale.month] || 0) + sale.amount;
    return acc;
}, {});

// 제품별 총 매출
let productSales = sales
    .reduce((acc, sale) => {
        acc[sale.product] = (acc[sale.product] || 0) + sale.amount;
        return acc;
    }, {});

// 100만원 이상 매출 제품들
let highValueSales = sales
    .filter(sale => sale.amount >= 1000000)
    .map(sale => sale.product);

console.log('월별 매출:', monthlySales);
console.log('제품별 매출:', productSales);
console.log('고액 매출 제품:', highValueSales);
```

---

## 📌 **학습 체크리스트**

- [ ] 배열 리터럴과 다양한 생성 방법을 안다
- [ ] 인덱스를 통한 요소 접근과 수정을 할 수 있다
- [ ] push, pop, shift, unshift로 요소를 조작할 수 있다
- [ ] splice로 임의 위치의 요소를 추가/제거할 수 있다
- [ ] indexOf, includes, find로 요소를 검색할 수 있다
- [ ] map, filter, reduce를 활용한 함수형 프로그래밍을 할 수 있다
- [ ] 메소드 체이닝으로 복잡한 데이터 처리를 할 수 있다 