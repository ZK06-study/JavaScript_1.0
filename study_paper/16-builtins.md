# 16. 내장 객체

## 전역 객체

### 전역 함수
```javascript
// parseFloat, parseInt - 문자열을 숫자로 변환
console.log(parseFloat('3.14'));    // 3.14
console.log(parseInt('42px'));      // 42
console.log(parseInt('1010', 2));   // 10 (2진수로 해석)

// isNaN, isFinite - 숫자 검증
console.log(isNaN(NaN));           // true
console.log(isFinite(42));         // true
console.log(isFinite(Infinity));   // false

// encodeURIComponent, decodeURIComponent - URL 인코딩
const encoded = encodeURIComponent('안녕하세요');
console.log(encoded);              // '%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94'
console.log(decodeURIComponent(encoded)); // '안녕하세요'
```

## Number 객체

### 정적 속성
```javascript
console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN
```

### 정적 메서드
```javascript
// Number.isInteger - 정수 여부 확인
console.log(Number.isInteger(42));    // true
console.log(Number.isInteger(42.0));  // true
console.log(Number.isInteger(42.1));  // false

// Number.isNaN - NaN 여부 확인 (전역 isNaN보다 엄격)
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN('hello'));   // false (전역 isNaN은 true)

// Number.isSafeInteger - 안전한 정수 여부 확인
console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
```

### 인스턴스 메서드
```javascript
const num = 3.14159;

console.log(num.toFixed(2));        // '3.14' (소수점 자리수 고정)
console.log(num.toPrecision(4));    // '3.142' (전체 자리수 지정)
console.log(num.toString());        // '3.14159' (문자열 변환)
console.log(num.toString(2));       // '11.00100100001111110110101010001000100001011101101001' (2진수)
```

## Math 객체

### 상수
```javascript
console.log(Math.PI);    // 3.141592653589793
console.log(Math.E);     // 2.718281828459045
```

### 기본 연산
```javascript
console.log(Math.abs(-5));        // 5 (절댓값)
console.log(Math.ceil(4.2));      // 5 (올림)
console.log(Math.floor(4.8));     // 4 (내림)
console.log(Math.round(4.5));     // 5 (반올림)
console.log(Math.trunc(4.9));     // 4 (소수점 제거)

console.log(Math.max(1, 3, 2));   // 3 (최댓값)
console.log(Math.min(1, 3, 2));   // 1 (최솟값)
console.log(Math.pow(2, 3));      // 8 (거듭제곱)
console.log(Math.sqrt(16));       // 4 (제곱근)
```

### 삼각함수
```javascript
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1
```

### 랜덤
```javascript
console.log(Math.random());         // 0 이상 1 미만의 랜덤 수

// 1-10 사이의 랜덤 정수
const randomInt = Math.floor(Math.random() * 10) + 1;

// 특정 범위의 랜덤 정수 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## String 객체

### 문자열 생성
```javascript
const str1 = 'hello';
const str2 = new String('hello'); // 객체로 생성 (권장하지 않음)
```

### 문자열 검색
```javascript
const text = 'Hello, World!';

console.log(text.indexOf('o'));       // 4 (첫 번째 'o'의 인덱스)
console.log(text.lastIndexOf('o'));   // 8 (마지막 'o'의 인덱스)
console.log(text.includes('World'));  // true
console.log(text.startsWith('Hello')); // true
console.log(text.endsWith('!'));      // true
```

### 문자열 추출
```javascript
const text = 'JavaScript';

console.log(text.charAt(0));         // 'J' (특정 인덱스의 문자)
console.log(text.slice(0, 4));       // 'Java' (문자열 잘라내기)
console.log(text.substring(0, 4));   // 'Java' (slice와 유사)
console.log(text.substr(0, 4));      // 'Java' (비권장)
```

### 문자열 변환
```javascript
const text = '  Hello World  ';

console.log(text.toLowerCase());     // '  hello world  '
console.log(text.toUpperCase());     // '  HELLO WORLD  '
console.log(text.trim());            // 'Hello World' (앞뒤 공백 제거)
console.log(text.trimStart());       // 'Hello World  ' (앞 공백만 제거)
console.log(text.trimEnd());         // '  Hello World' (뒤 공백만 제거)
```

### 문자열 분할/결합
```javascript
const text = 'apple,banana,orange';

console.log(text.split(','));        // ['apple', 'banana', 'orange']
console.log(text.split(''));         // ['a', 'p', 'p', 'l', 'e', ',', ...]

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join(', '));      // 'apple, banana, orange'
```

### 문자열 대체
```javascript
const text = 'Hello World';

console.log(text.replace('World', 'JavaScript')); // 'Hello JavaScript'
console.log(text.replaceAll('l', 'L'));          // 'HeLLo WorLd' (ES2021)

// 정규식 사용
console.log(text.replace(/l/g, 'L'));            // 'HeLLo WorLd'
```

## Array 객체

### 배열 생성
```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = new Array(5);         // 길이가 5인 빈 배열
const arr4 = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']
const arr5 = Array.of(1, 2, 3);    // [1, 2, 3]
```

### 배열 확인
```javascript
console.log(Array.isArray([]));      // true
console.log(Array.isArray('hello')); // false
```

## Date 객체

### 날짜 생성
```javascript
const now = new Date();
const specific = new Date(2023, 11, 25); // 2023년 12월 25일 (월은 0부터 시작)
const fromString = new Date('2023-12-25');
const fromTimestamp = new Date(1640390400000);
```

### 날짜 메서드
```javascript
const date = new Date();

console.log(date.getFullYear());     // 년도
console.log(date.getMonth());        // 월 (0-11)
console.log(date.getDate());         // 일
console.log(date.getDay());          // 요일 (0: 일요일)
console.log(date.getHours());        // 시간
console.log(date.getMinutes());      // 분
console.log(date.getSeconds());      // 초
console.log(date.getTime());         // 타임스탬프
```

### 날짜 설정
```javascript
const date = new Date();

date.setFullYear(2024);
date.setMonth(0);        // 1월
date.setDate(1);         // 1일
```

## RegExp 객체

### 정규식 생성
```javascript
const regex1 = /hello/i;               // 리터럴 방식
const regex2 = new RegExp('hello', 'i'); // 생성자 방식
```

### 정규식 메서드
```javascript
const text = 'Hello World';
const regex = /l/gi;

console.log(regex.test(text));        // true (일치하는지 확인)
console.log(regex.exec(text));        // ['l', index: 2, input: 'Hello World']
console.log(text.match(regex));       // ['l', 'l', 'l'] (모든 일치 항목)
console.log(text.search(regex));      // 2 (첫 번째 일치 위치)
```

## JSON 객체

```javascript
const obj = { name: 'Alice', age: 30 };
const arr = [1, 2, 3];

// 객체를 JSON 문자열로 변환
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":30}'

// JSON 문자열을 객체로 변환
const parsed = JSON.parse(jsonString);
console.log(parsed); // { name: 'Alice', age: 30 }

// 예쁘게 출력
console.log(JSON.stringify(obj, null, 2));
``` 