# 제어문 학습지

## 📌 **조건문 (Conditional Statement)**

### **1️⃣ if...else 구문**

| 구문 | 문법 | 설명 | 예시 |
|------|------|------|------|
| **if** | `if (조건) { }` | 조건이 참일 때 실행 | `if (score >= 90)` |
| **if...else** | `if (조건) { } else { }` | 조건에 따라 분기 | 성공/실패 처리 |
| **else if** | `else if (조건) { }` | 여러 조건 확인 | 학점 계산 |

### **2️⃣ 조건문 특징**

| 특징 | 설명 | 예시 |
|------|------|------|
| **중괄호 생략** | 구문이 하나면 생략 가능 | `if (condition) alert('yes');` |
| **중첩 가능** | 조건문 안에 조건문 | `if (a) { if (b) { } }` |
| **falsy 체크** | 0, '', null 등은 false | `if (value)` |

💡 **if...else 예제**

```javascript
// 기본 if...else
let score = 85;
if (score >= 90) {
    console.log('A 학점');
} else if (score >= 80) {
    console.log('B 학점');
} else if (score >= 70) {
    console.log('C 학점');
} else {
    console.log('F 학점');
}

// 삼항 연산자로 간단히
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';

// 중괄호 생략 (한 줄일 때)
if (isLoggedIn) showDashboard();
else showLoginPage();

// 조건 중첩
if (user) {
    if (user.isActive) {
        if (user.hasPermission) {
            console.log('접근 허용');
        }
    }
}
```

---

## 📌 **switch 구문**

### **1️⃣ switch 구문 구조**

| 키워드 | 역할 | 설명 |
|--------|------|------|
| **switch** | 분기 시작 | `switch (변수)` |
| **case** | 각 경우 | `case 값:` |
| **break** | 실행 중단 | case 끝에 필수 |
| **default** | 기본 경우 | 일치하는 case 없을 때 |

### **2️⃣ switch vs if...else**

| 구분 | switch | if...else |
|------|--------|-----------|
| **용도** | 하나 변수의 여러 값 비교 | 복잡한 조건식 |
| **성능** | 많은 경우의 수에서 빠름 | 적은 경우의 수에 적합 |
| **가독성** | 명확한 값 비교 시 좋음 | 논리 연산 포함 시 좋음 |

💡 **switch 예제**

```javascript
// 기본 switch 구문
function getWeekdayName(day) {
    let result;
    switch (day) {
        case 0:
            result = '일요일';
            break;
        case 1:
            result = '월요일';
            break;
        case 2:
            result = '화요일';
            break;
        case 6:
            result = '토요일';
            break;
        default:
            result = '알 수 없는 요일';
    }
    return result;
}

// break 생략으로 fall-through 활용
function getSeasonFromMonth(month) {
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
            season = '알 수 없는 계절';
    }
    return season;
}

// 함수 직접 반환
function translateColor(color) {
    switch (color) {
        case 'red': return '빨강';
        case 'blue': return '파랑';
        case 'green': return '초록';
        default: return '알 수 없는 색';
    }
}
```

---

## 📌 **반복문 (Loop)**

### **1️⃣ while 구문**

| 특징 | 설명 | 사용 시기 |
|------|------|-----------|
| **조건 기반** | 조건이 참인 동안 반복 | 반복 횟수를 모를 때 |
| **사전 확인** | 조건을 먼저 확인 | 한 번도 실행 안 될 수 있음 |
| **무한 루프 주의** | 조건이 변하지 않으면 무한 반복 | 카운터 변수 필수 |

### **2️⃣ for 구문**

| 구성 요소 | 역할 | 예시 |
|-----------|------|------|
| **초기화** | 반복 변수 설정 | `let i = 0` |
| **조건** | 반복 계속 여부 | `i < 10` |
| **갱신** | 각 반복 후 실행 | `i++` |

💡 **반복문 예제**

```javascript
// while 반복문
let count = 0;
while (count < 5) {
    console.log(`반복 ${count + 1}번째`);
    count++; // 카운터 증가 필수!
}

// for 반복문
for (let i = 0; i < 5; i++) {
    console.log(`반복 ${i + 1}번째`);
}

// 배열 순회
let fruits = ['사과', '바나나', '오렌지'];

// for 문으로 배열 순회
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// for...of 문으로 배열 순회 (ES6)
for (let fruit of fruits) {
    console.log(fruit);
}

// 객체 순회 - for...in
let person = {name: '김철수', age: 30, city: '서울'};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 중첩 반복문 (구구단)
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단:`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}
```

---

## 📌 **break와 continue**

### **1️⃣ 제어 키워드**

| 키워드 | 기능 | 사용 위치 |
|--------|------|-----------|
| **break** | 반복문/switch 종료 | 반복문, switch 내부 |
| **continue** | 현재 반복 건너뛰기 | 반복문 내부만 |
| **label** | 중첩 반복문 제어 | 반복문 앞에 라벨 |

### **2️⃣ break vs continue**

| 구분 | break | continue |
|------|-------|----------|
| **동작** | 반복문 완전히 탈출 | 현재 반복만 건너뛰고 다음 반복 계속 |
| **사용 상황** | 조건 만족 시 종료 | 특정 경우만 제외하고 계속 |

💡 **break와 continue 예제**

```javascript
// break - 조건 만족 시 반복 종료
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // i가 5가 되면 반복문 종료
    }
    console.log(i); // 1, 2, 3, 4 출력
}

// continue - 특정 조건 건너뛰기
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // i가 3일 때는 건너뛰기
    }
    console.log(i); // 1, 2, 4, 5 출력
}

// 실용 예제: 배열에서 첫 번째 짝수 찾기
let numbers = [1, 3, 7, 4, 9, 6];
let firstEven;

for (let num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break; // 첫 번째 짝수 찾으면 종료
    }
}

// 홀수만 출력
for (let num of numbers) {
    if (num % 2 === 0) {
        continue; // 짝수는 건너뛰기
    }
    console.log(num); // 1, 3, 7, 9 출력
}

// 라벨을 사용한 중첩 반복문 제어
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer; // 외부 반복문까지 종료
        }
        console.log(`${i}, ${j}`);
    }
}
```

---

## 📌 **실용적인 반복문 패턴**

### **1️⃣ 배열 처리 패턴**

```javascript
let scores = [85, 92, 78, 96, 88];

// 최댓값 찾기
let max = scores[0];
for (let score of scores) {
    if (score > max) {
        max = score;
    }
}

// 합계와 평균
let sum = 0;
for (let score of scores) {
    sum += score;
}
let average = sum / scores.length;

// 조건에 맞는 요소 필터링
let passedScores = [];
for (let score of scores) {
    if (score >= 90) {
        passedScores.push(score);
    }
}

// 모든 요소 변환
let gradedScores = [];
for (let score of scores) {
    if (score >= 90) gradedScores.push('A');
    else if (score >= 80) gradedScores.push('B');
    else gradedScores.push('C');
}
```

### **2️⃣ 문자열 처리 패턴**

```javascript
let text = 'Hello World JavaScript';

// 문자 개수 세기
let count = 0;
for (let char of text) {
    if (char === 'a' || char === 'A') {
        count++;
    }
}

// 문자열 뒤집기
let reversed = '';
for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

// 단어별로 처리
let words = text.split(' ');
let capitalizedWords = [];
for (let word of words) {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
}
```

### **3️⃣ 객체 처리 패턴**

```javascript
let inventory = {
    apple: 10,
    banana: 5,
    orange: 0,
    grape: 8
};

// 재고가 있는 과일만 찾기
let availableFruits = [];
for (let fruit in inventory) {
    if (inventory[fruit] > 0) {
        availableFruits.push(fruit);
    }
}

// 전체 재고 수량
let totalStock = 0;
for (let fruit in inventory) {
    totalStock += inventory[fruit];
}

// 재고 업데이트
for (let fruit in inventory) {
    if (inventory[fruit] === 0) {
        console.log(`${fruit} 품절!`);
    }
}
```

---

## 📌 **학습 체크리스트**

- [ ] if...else 구문으로 조건에 따른 분기를 만들 수 있다
- [ ] switch 구문으로 여러 경우를 처리할 수 있다
- [ ] while과 for 반복문의 차이점을 안다
- [ ] break와 continue를 적절히 활용할 수 있다
- [ ] 배열과 객체를 반복문으로 순회할 수 있다
- [ ] 실용적인 반복문 패턴을 구현할 수 있다 