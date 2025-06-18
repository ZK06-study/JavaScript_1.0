# 제어문 학습지

## 1. 조건문 개요

| 제어문 | 설명 | 사용 시기 |
|--------|------|-----------|
| **if...else** | 조건에 따라 다른 코드 실행 | 간단한 조건 분기 |
| **switch** | 여러 값과 비교하여 분기 | 많은 경우의 수 |
| **삼항 연산자** | 간단한 조건부 값 할당 | 짧은 조건문 |

## 2. if...else 문

### 기본 문법

| 형태 | 문법 | 설명 |
|------|------|------|
| **if** | if (조건) { 코드 } | 조건이 참일 때만 실행 |
| **if...else** | if (조건) { 코드1 } else { 코드2 } | 참/거짓에 따라 분기 |
| **if...else if** | if (조건1) {} else if (조건2) {} | 여러 조건 순차 검사 |

```javascript
// 기본 if 문
let score = 85;
if (score >= 80) {
    console.log('합격입니다!');
}

// if...else 문
let age = 17;
if (age >= 18) {
    console.log('성인입니다.');
} else {
    console.log('미성년자입니다.');
}

// if...else if...else 문
let grade = 85;
if (grade >= 90) {
    console.log('A학점');
} else if (grade >= 80) {
    console.log('B학점');
} else if (grade >= 70) {
    console.log('C학점');
} else {
    console.log('재시험');
}

// 중첩 if 문
let weather = '맑음';
let temperature = 25;

if (weather === '맑음') {
    if (temperature >= 20) {
        console.log('야외 활동하기 좋은 날씨입니다.');
    } else {
        console.log('맑지만 조금 쌀쌀합니다.');
    }
} else {
    console.log('실내 활동을 권합니다.');
}
```

## 3. switch 문

### switch 문법과 특징

| 요소 | 설명 | 예시 |
|------|------|------|
| **case** | 비교할 값 | case 'A': |
| **break** | switch 문 탈출 | break; |
| **default** | 일치하는 case가 없을 때 | default: |
| **fall through** | break 없이 다음 case로 진행 | 의도적 활용 |

```javascript
// 기본 switch 문
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = '월요일';
        break;
    case 2:
        dayName = '화요일';
        break;
    case 3:
        dayName = '수요일';
        break;
    case 4:
        dayName = '목요일';
        break;
    case 5:
        dayName = '금요일';
        break;
    case 6:
    case 7:
        dayName = '주말';
        break;
    default:
        dayName = '잘못된 요일';
}

console.log(dayName); // '수요일'

// fall through 활용
let month = 2;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = '겨울';
        break;
    case 3:
    case 4:
    case 5:
        season = '봄';
        break;
    case 6:
    case 7:
    case 8:
        season = '여름';
        break;
    case 9:
    case 10:
    case 11:
        season = '가을';
        break;
    default:
        season = '잘못된 월';
}

// switch 표현식 (함수로 감싸서 활용)
function getGrade(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        default:
            return 'F';
    }
}
```

## 4. 삼항 연산자

| 구성요소 | 설명 | 예시 |
|----------|------|------|
| **조건** | 참/거짓을 판단할 식 | age >= 18 |
| **?** | 조건이 참일 때 값 | ? '성인' |
| **:** | 조건이 거짓일 때 값 | : '미성년' |

```javascript
// 기본 삼항 연산자
let age = 20;
let status = age >= 18 ? '성인' : '미성년자';

// 변수 할당
let score = 85;
let result = score >= 60 ? '합격' : '불합격';

// 함수 호출에서 활용
function getDiscount(isMember) {
    return isMember ? 0.1 : 0;
}

// 중첩 삼항 연산자 (권장하지 않음)
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';

// 더 읽기 쉬운 방법
let grade2;
if (score >= 90) grade2 = 'A';
else if (score >= 80) grade2 = 'B';
else if (score >= 70) grade2 = 'C';
else grade2 = 'F';

// 실용 예시
let userName = inputName || '게스트';  // falsy면 기본값
let message = isError ? showError() : showSuccess();
```

## 5. 반복문 개요

| 반복문 | 설명 | 사용 시기 |
|--------|------|-----------|
| **for** | 횟수가 정해진 반복 | 배열, 카운터 |
| **while** | 조건이 참인 동안 반복 | 조건부 반복 |
| **do...while** | 최소 1회 실행 후 조건 검사 | 최소 1회 실행 필요 |
| **for...in** | 객체 속성 순회 | 객체 프로퍼티 |
| **for...of** | 이터러블 순회 | 배열, 문자열 |

## 6. for 문

### 기본 for 문

```javascript
// 기본 for 문 구조
// for (초기화; 조건; 증감) { 코드 }

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 배열 순회
let fruits = ['사과', '바나나', '오렌지'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// 역순 반복
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 2씩 증가
for (let i = 0; i < 20; i += 2) {
    console.log(i);  // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
}

// 중첩 for 문 (구구단)
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단:`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}
```

### for...in 문 (객체용)

```javascript
let person = {
    name: '김철수',
    age: 30,
    city: '서울'
};

// 객체의 모든 속성 순회
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 배열에서 for...in 사용 (권장하지 않음)
let numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(index, numbers[index]); // index는 문자열
}
```

### for...of 문 (이터러블용)

```javascript
// 배열 순회
let colors = ['빨강', '파랑', '노랑'];
for (let color of colors) {
    console.log(color);
}

// 문자열 순회
let text = '안녕';
for (let char of text) {
    console.log(char);  // '안', '녕'
}

// Map 순회
let map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Set 순회
let set = new Set([1, 2, 3]);
for (let value of set) {
    console.log(value);
}
```

## 7. while 문

```javascript
// 기본 while 문
let count = 0;
while (count < 5) {
    console.log(`카운트: ${count}`);
    count++;
}

// 조건부 반복
let input = '';
while (input !== 'quit') {
    input = prompt('명령을 입력하세요 (quit로 종료):');
    console.log(`입력: ${input}`);
}

// 무한 루프 방지
let attempts = 0;
let maxAttempts = 10;

while (attempts < maxAttempts) {
    // 어떤 작업 수행
    attempts++;
    
    // 성공 조건
    if (Math.random() > 0.7) {
        console.log('성공!');
        break;
    }
}

if (attempts === maxAttempts) {
    console.log('최대 시도 횟수 초과');
}
```

## 8. do...while 문

```javascript
// 최소 1회 실행
let number;
do {
    number = prompt('1부터 10 사이의 숫자를 입력하세요:');
    number = parseInt(number);
} while (number < 1 || number > 10);

console.log(`올바른 숫자: ${number}`);

// 메뉴 시스템
let choice;
do {
    console.log('1. 추가');
    console.log('2. 삭제');
    console.log('3. 종료');
    choice = prompt('선택하세요:');
    
    switch (choice) {
        case '1':
            console.log('추가 기능');
            break;
        case '2':
            console.log('삭제 기능');
            break;
        case '3':
            console.log('프로그램 종료');
            break;
        default:
            console.log('잘못된 선택');
    }
} while (choice !== '3');
```

## 9. 반복문 제어

| 키워드 | 설명 | 사용 위치 |
|--------|------|-----------|
| **break** | 반복문 완전히 종료 | 반복문 내부 |
| **continue** | 현재 반복 건너뛰고 다음 반복 | 반복문 내부 |
| **label** | 중첩 반복문에서 특정 반복문 제어 | 반복문 앞 |

```javascript
// break 예시
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // 5에서 반복문 종료
    }
    console.log(i);  // 1, 2, 3, 4
}

// continue 예시
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // 짝수는 건너뛰기
    }
    console.log(i);  // 1, 3, 5, 7, 9
}

// label을 이용한 중첩 반복문 제어
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;  // 외부 반복문까지 종료
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 배열에서 특정 값 찾기
let numbers = [1, 3, 5, 7, 8, 9, 11];
let target = 8;
let found = false;

for (let number of numbers) {
    if (number === target) {
        console.log(`${target}을 찾았습니다!`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`${target}을 찾지 못했습니다.`);
}
```

## 10. 실용적인 반복 패턴

```javascript
// 배열 요소 합계
function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

// 배열에서 최댓값 찾기
function findMax(numbers) {
    if (numbers.length === 0) return undefined;
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// 배열 필터링
function filterEven(numbers) {
    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evens.push(number);
        }
    }
    return evens;
}

// 객체 배열에서 검색
let users = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25},
    {name: '박민수', age: 35}
];

function findUserByName(users, name) {
    for (let user of users) {
        if (user.name === name) {
            return user;
        }
    }
    return null;
}

// 카운터 객체 만들기
function countChars(text) {
    let counts = {};
    for (let char of text) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

console.log(countChars('hello')); // {h: 1, e: 1, l: 2, o: 1}
```

## 11. 학습 체크리스트

- [ ] if...else 문을 적절히 사용할 수 있다
- [ ] switch 문의 fall through를 이해한다
- [ ] 삼항 연산자를 간단한 조건에 활용할 수 있다
- [ ] for 문의 다양한 형태를 사용할 수 있다
- [ ] while과 do...while의 차이점을 안다
- [ ] break와 continue를 적절히 사용할 수 있다 