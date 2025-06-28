# 16. 내장 객체 - 퀴즈

## 객관식 문제

### 1. 🟢 `Object.keys()`가 반환하는 것은?
a) 객체의 값들의 배열
b) 객체의 키들의 배열
c) 객체의 키-값 쌍의 배열
d) 객체의 길이

### 2. 🟡 `Array.isArray([1, 2, 3])`의 결과는?
a) true
b) false
c) [1, 2, 3]
d) 3

### 3. 🟠 다음 중 `Date` 객체에서 월(month)을 나타내는 값의 범위는?
a) 1-12
b) 0-11
c) 1-31
d) 0-30

### 4. 🟡 `Math.floor(4.7)`의 결과는?
a) 4
b) 5
c) 4.7
d) 0

### 5. 🟢 `"hello".toUpperCase()`의 결과는?
a) "hello"
b) "HELLO"
c) "Hello"
d) 에러 발생

### 6. 🟠 `Object.entries({ a: 1, b: 2 })`의 결과는?
a) ["a", "b"]
b) [1, 2]
c) [["a", 1], ["b", 2]]
d) { a: 1, b: 2 }

## 단답형 문제

### 7. 🟢 1부터 10 사이의 랜덤한 정수를 생성하는 `Math` 메서드 조합을 쓰시오.

### 8. 🟡 객체의 모든 속성을 다른 객체로 복사하는 `Object` 메서드는?

### 9. 🟢 현재 날짜와 시간을 나타내는 `Date` 객체를 생성하는 방법은?

### 10. 🟡 배열이 비어있는지 확인하는 속성은?

## 서술형 문제

### 11. 🟡 `Object.keys()`, `Object.values()`, `Object.entries()`의 차이점과 사용 예시를 설명하시오.

### 12. 🟡 `Array.from()`의 다양한 활용법을 예시와 함께 설명하시오.

### 13. 🟠 `Date` 객체의 주요 메서드들과 시간대 처리 방법을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
- 두 객체를 병합하는 함수
- 중복되는 키는 두 번째 객체의 값으로 덮어쓰기
- `Object` 메서드 사용

### 15. 🟡 날짜 계산 유틸리티 함수들을 작성하시오.
```javascript
// 1. 두 날짜 사이의 일수 차이 계산
// 2. 현재로부터 N일 후의 날짜 반환
// 3. 생일로부터 나이 계산
```

### 16. 🟠 `Math` 객체를 활용한 유틸리티 함수들을 작성하시오.
```javascript
// 1. 범위 내 랜덤 정수 생성
// 2. 숫자를 특정 소수점 자리로 반올림
// 3. 배열에서 최댓값, 최솟값, 평균값 계산
```

### 17. 🟡 문자열 처리 유틸리티를 작성하시오.
- 첫 글자만 대문자로 변환 (capitalize)
- 카멜케이스를 케밥케이스로 변환
- 문자열의 단어 개수 계산

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

console.log(keys.length === values.length);
console.log(entries.length === keys.length);
console.log(Object.fromEntries(entries));
```

### 19. 🟠 깊은 객체 비교 함수를 작성하시오.
- 중첩된 객체/배열까지 재귀적으로 비교
- `Object` 메서드들을 활용
- 타입이 다르면 false 반환

### 20. 🟠 날짜 포맷팅 라이브러리를 구현하시오.
```javascript
// 사용 예시
formatDate(new Date(), 'YYYY-MM-DD'); // '2023-12-25'
formatDate(new Date(), 'YYYY년 MM월 DD일'); // '2023년 12월 25일'
formatDate(new Date(), 'HH:mm:ss'); // '14:30:45'
```

---

## 정답

### 객관식 정답
1. b) 객체의 키들의 배열
2. a) true
3. b) 0-11 (0: 1월, 11: 12월)
4. a) 4 (내림)
5. b) "HELLO"
6. c) [["a", 1], ["b", 2]]

### 단답형 정답
7. `Math.floor(Math.random() * 10) + 1`
8. `Object.assign()`
9. `new Date()`
10. `length` (array.length === 0)

### 서술형 정답
11. **Object 메서드들의 차이점:**
```javascript
const obj = { name: 'Alice', age: 30, city: 'Seoul' };

// Object.keys(): 키들의 배열
console.log(Object.keys(obj)); // ['name', 'age', 'city']

// Object.values(): 값들의 배열
console.log(Object.values(obj)); // ['Alice', 30, 'Seoul']

// Object.entries(): [키, 값] 쌍들의 배열
console.log(Object.entries(obj)); // [['name', 'Alice'], ['age', 30], ['city', 'Seoul']]
```

12. **Array.from() 활용법:**
```javascript
// 유사 배열을 실제 배열로 변환
const nodeList = document.querySelectorAll('div');
const divArray = Array.from(nodeList);

// 문자열을 문자 배열로 변환
const chars = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// 길이와 매핑 함수로 배열 생성
const numbers = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// Set을 배열로 변환
const uniqueArray = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
```

13. **Date 객체 주요 메서드:**
- **생성**: `new Date()`, `new Date(year, month, day)`
- **getter**: `getFullYear()`, `getMonth()`, `getDate()`, `getTime()`
- **setter**: `setFullYear()`, `setMonth()`, `setDate()`
- **문자열**: `toISOString()`, `toLocaleDateString()`
- **시간대**: `getTimezoneOffset()`, `toLocaleString()`

### 코딩 정답
14.
```javascript
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// 또는 스프레드 연산자 사용
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 사용 예시
const result = mergeObjects(
  { a: 1, b: 2 },
  { b: 3, c: 4 }
);
console.log(result); // { a: 1, b: 3, c: 4 }
```

15.
```javascript
// 1. 두 날짜 사이의 일수 차이
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로
  return Math.round(Math.abs((date1 - date2) / oneDay));
}

// 2. N일 후의 날짜
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// 3. 나이 계산
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

// 사용 예시
console.log(daysBetween(new Date('2023-01-01'), new Date('2023-01-10'))); // 9
console.log(addDays(new Date(), 7)); // 7일 후 날짜
console.log(calculateAge('1990-06-15')); // 나이 계산
```

16.
```javascript
// 1. 범위 내 랜덤 정수
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. 특정 소수점으로 반올림
function roundTo(number, decimals) {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// 3. 배열 통계
function arrayStats(numbers) {
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers),
    average: numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  };
}

// 사용 예시
console.log(randomInt(1, 10));        // 1-10 사이 랜덤 정수
console.log(roundTo(3.14159, 2));     // 3.14
console.log(arrayStats([1, 2, 3, 4, 5])); // {max: 5, min: 1, average: 3}
```

17.
```javascript
// 1. 첫 글자 대문자
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// 2. 카멜케이스를 케밥케이스로
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// 3. 단어 개수 계산
function countWords(str) {
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// 사용 예시
console.log(capitalize('hello world'));      // 'Hello world'
console.log(camelToKebab('backgroundColor')); // 'background-color'
console.log(countWords('Hello world test'));  // 3
```

### 응용 정답
18.
```javascript
// 실행 결과:
console.log(keys.length === values.length);    // true (3 === 3)
console.log(entries.length === keys.length);   // true (3 === 3)
console.log(Object.fromEntries(entries));      // { a: 1, b: 2, c: 3 }

// 설명: 객체의 키, 값, 엔트리의 개수는 항상 동일하며,
// Object.fromEntries()는 entries를 다시 객체로 변환한다.
```

19.
```javascript
function deepEqual(obj1, obj2) {
  // 타입 체크
  if (typeof obj1 !== typeof obj2) return false;
  
  // 원시 타입이면 직접 비교
  if (obj1 === obj2) return true;
  
  // null 체크
  if (obj1 === null || obj2 === null) return false;
  
  // 배열 체크
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  
  // 객체/배열인 경우
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // 키 개수 비교
    if (keys1.length !== keys2.length) return false;
    
    // 각 키에 대해 재귀적으로 비교
    for (let key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
  }
  
  return false;
}

// 사용 예시
const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [3, 5] } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
```

20.
```javascript
function formatDate(date, format) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  const formatMap = {
    'YYYY': year,
    'YY': String(year).slice(-2),
    'MM': month,
    'M': date.getMonth() + 1,
    'DD': day,
    'D': date.getDate(),
    'HH': hours,
    'H': date.getHours(),
    'mm': minutes,
    'm': date.getMinutes(),
    'ss': seconds,
    's': date.getSeconds()
  };
  
  let result = format;
  
  // 긴 패턴부터 대체 (YYYY를 YY보다 먼저)
  Object.keys(formatMap)
    .sort((a, b) => b.length - a.length)
    .forEach(pattern => {
      result = result.replace(new RegExp(pattern, 'g'), formatMap[pattern]);
    });
  
  return result;
}

// 사용 예시
const now = new Date(2023, 11, 25, 14, 30, 45); // 2023년 12월 25일 14:30:45

console.log(formatDate(now, 'YYYY-MM-DD'));           // '2023-12-25'
console.log(formatDate(now, 'YYYY년 MM월 DD일'));      // '2023년 12월 25일'
console.log(formatDate(now, 'HH:mm:ss'));             // '14:30:45'
console.log(formatDate(now, 'YYYY/M/D H:m:s'));       // '2023/12/25 14:30:45'
```