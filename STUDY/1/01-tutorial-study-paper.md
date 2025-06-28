# JavaScript 튜토리얼 학습지

## 📌 **JavaScript 기본 문법**

### **1️⃣ 기본 규칙**

| 규칙 | 설명 | 예제 |
| --- | --- | --- |
| **대소문자 구분** | 모든 부분에서 대소문자를 구분함 | `function`과 `Function`은 다름 |
| **세미콜론** | 구문을 구분하는 구분자 | `const a = 1;` |
| **공백** | 공백 수는 실행에 영향 없음 | `const x = 1;` |

### **2️⃣ 주석 (Comment)**

| 주석 타입 | 문법 | 예제 |
| --- | --- | --- |
| **한 줄 주석** | `//` | `// 한 줄 주석` |
| **여러 줄 주석** | `/* */` | `/* 여러 줄 주석 */` |

💡 **예제**

```javascript
const name = 'JavaScript'; // 한 줄 주석
/* 
여러 줄 주석
이렇게 사용합니다
*/
```

---

## 📌 **값과 타입**

### **1️⃣ 기본 데이터 타입**

| 타입 | 설명 | 리터럴 예제 | typeof 결과 |
| --- | --- | --- | --- |
| **number** | 숫자 | `1`, `2.5` | `'number'` |
| **string** | 문자열 | `'hello'`, `"world"` | `'string'` |
| **boolean** | 진리값 | `true`, `false` | `'boolean'` |
| **null** | 존재하지 않음 | `null` | `'object'` |
| **undefined** | 정의되지 않음 | `undefined` | `'undefined'` |

### **2️⃣ 기본 연산자**

| 연산자 타입 | 연산자 | 설명 | 예제 |
| --- | --- | --- | --- |
| **산술** | `+`, `-`, `*`, `/` | 사칙연산 | `1 + 2` |
| **논리** | `||`, `&&` | OR, AND | `true && false` |
| **비교** | `===`, `!==` | 같음, 다름 | `3 === 3` |

💡 **예제**

```javascript
typeof 1; // 'number'
typeof 'hello'; // 'string'
typeof true; // 'boolean'
1 + 2 * 3; // 7 (연산자 우선순위)
```

---

## 📌 **변수 (Variable)**

### **1️⃣ 변수 선언 키워드**

| 키워드 | 설명 | 재할당 | 사용 시기 |
| --- | --- | --- | --- |
| **`let`** | 변경 가능한 변수 | ⭕ | 재할당이 필요한 경우 |
| **`const`** | 변경 불가능한 변수 | ❌ | 재할당이 불필요한 경우 (권장) |

### **2️⃣ 식별자 규칙**

| 조건 | 허용됨 | 허용되지 않음 |
| --- | --- | --- |
| **문자** | 숫자, 알파벳, $, _ | 숫자로 시작 |
| **예약어** | 일반 단어 | `const`, `let`, `function` 등 |
| **관례** | Camel Case | Snake Case (권장하지 않음) |

💡 **예제**

```javascript
// 변수 선언과 할당
let name = 'JavaScript';
const age = 25;

// Camel Case 사용
let fastCampus = 'coding';
const userName = 'developer';

// 재할당
name = 'TypeScript'; // 가능
// age = 30; // 에러! const는 재할당 불가
```

---

## 📌 **제어 흐름**

### **1️⃣ 조건문 (if...else)**

```javascript
if (조건) {
    // 조건이 true일 때 실행
} else {
    // 조건이 false일 때 실행
}
```

### **2️⃣ 반복문 (while, for)**

| 반복문 | 사용 시기 | 문법 |
| --- | --- | --- |
| **while** | 조건 기반 반복 | `while (조건) { }` |
| **for** | 횟수 기반 반복 | `for (초기값; 조건; 갱신) { }` |

💡 **예제**

```javascript
// 조건문
if (score >= 90) {
    console.log('A 학점');
} else if (score >= 80) {
    console.log('B 학점');
} else {
    console.log('C 학점');
}

// for 반복문
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}번째 실행`);
}

// while 반복문
let count = 0;
while (count < 3) {
    console.log(`반복 ${count}`);
    count++;
}
```

---

## 📌 **함수 (Function)**

### **1️⃣ 함수 정의 방법**

| 방법 | 문법 | 특징 |
| --- | --- | --- |
| **함수 선언** | `function name() { }` | 호이스팅 가능 |
| **화살표 함수** | `const name = () => { }` | 간결한 문법 |

### **2️⃣ 함수 구성 요소**

| 요소 | 설명 | 예제 |
| --- | --- | --- |
| **매개변수** | 함수가 받는 입력값 | `function add(x, y)` |
| **반환값** | 함수가 돌려주는 결과 | `return x + y;` |
| **호출** | 함수 실행 | `add(1, 2)` |

💡 **예제**

```javascript
// 함수 선언
function add(x, y) {
    return x + y;
}

// 화살표 함수
const multiply = (x, y) => x * y;

// 함수 호출
add(1, 2); // 3
multiply(3, 4); // 12

// 내장 함수 사용
alert('안녕하세요!');
console.log('콘솔 출력');
```

---

## 📌 **객체 (Object)**

### **1️⃣ 객체 생성과 접근**

| 기능 | 문법 | 예제 |
| --- | --- | --- |
| **객체 생성** | `{ key: value }` | `const obj = { name: 'JS' };` |
| **속성 접근** | `.` 또는 `[]` | `obj.name` 또는 `obj['name']` |
| **속성 추가** | `obj.key = value` | `obj.age = 25;` |
| **속성 삭제** | `delete obj.key` | `delete obj.age;` |

### **2️⃣ 메소드 (Method)**

```javascript
const obj = {
    name: 'JavaScript',
    greet() {
        return `안녕하세요, ${this.name}입니다!`;
    }
};
```

💡 **예제**

```javascript
// 객체 생성
const person = {
    name: '김개발',
    age: 25,
    languages: ['JavaScript', 'Python']
};

// 속성 접근
person.name; // '김개발'
person['age']; // 25

// 속성 변경
person.age = 26;

// 메소드 사용
person.introduce = function() {
    return `제 이름은 ${this.name}입니다.`;
};
```

---

## 📌 **배열 (Array)**

### **1️⃣ 배열 기본 조작**

| 기능 | 메소드/문법 | 설명 | 예제 |
| --- | --- | --- | --- |
| **생성** | `[]` | 배열 리터럴 | `const arr = [1, 2, 3];` |
| **접근** | `arr[index]` | 인덱스로 접근 | `arr[0]` |
| **길이** | `arr.length` | 배열 길이 | `arr.length` |
| **요소 추가** | `push()` | 끝에 추가 | `arr.push(4)` |

### **2️⃣ 배열 특징**

- **인덱스는 0부터 시작**
- **순서가 있는 데이터 구조**
- **다양한 타입의 요소 저장 가능**

💡 **예제**

```javascript
// 배열 생성
const fruits = ['apple', 'banana', 'orange'];

// 인덱스로 접근 (0부터 시작)
fruits[0]; // 'apple'
fruits[1]; // 'banana'

// 배열 길이
fruits.length; // 3

// 요소 추가/제거
fruits.push('grape'); // ['apple', 'banana', 'orange', 'grape']
fruits[1]; // 'banana'
``` 