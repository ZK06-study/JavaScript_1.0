# 불린 타입 학습지

## 1. 불린 기본 개념

| 개념 | 설명 | 값 |
|------|------|-----|
| **불린 타입** | 참(true) 또는 거짓(false)을 나타내는 타입 | true, false |
| **불린 리터럴** | 불린 값을 직접 표현 | true, false |
| **불린 객체** | new Boolean()으로 생성 | 권장하지 않음 |

```javascript
// 불린 리터럴
let isTrue = true;
let isFalse = false;

// typeof 확인
console.log(typeof true);   // 'boolean'
console.log(typeof false);  // 'boolean'

// 불린 객체 (사용 비권장)
let boolObj = new Boolean(true);
console.log(typeof boolObj); // 'object'
```

## 2. 논리 연산자

| 연산자 | 이름 | 설명 | 예시 | 결과 |
|--------|------|------|------|------|
| **&&** | 논리곱 (AND) | 모두 참일 때만 참 | true && true | true |
| **\|\|** | 논리합 (OR) | 하나라도 참이면 참 | true \|\| false | true |
| **!** | 논리부정 (NOT) | 참과 거짓을 뒤바꿈 | !true | false |

### 진리표

| A | B | A && B | A \|\| B | !A |
|---|---|--------|----------|----|
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

```javascript
// AND (&&) - 모두 참이어야 참
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR (||) - 하나라도 참이면 참
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!) - 참과 거짓 뒤바꿈
console.log(!true);          // false
console.log(!false);         // true
console.log(!!true);         // true (이중 부정)
```

## 3. 단축 평가 (Short-Circuit Evaluation)

| 연산자 | 동작 방식 | 예시 |
|--------|-----------|------|
| **&&** | 첫 번째가 false면 두 번째 평가 안 함 | false && console.log('실행 안됨') |
| **\|\|** | 첫 번째가 true면 두 번째 평가 안 함 | true \|\| console.log('실행 안됨') |

```javascript
// AND 단축 평가
let user = { name: 'Kim' };
user && console.log(user.name); // 'Kim' 출력

let nullUser = null;
nullUser && console.log(nullUser.name); // 실행되지 않음 (에러 방지)

// OR 단축 평가
let defaultName = '익명';
let userName = '' || defaultName; // '익명'
let actualName = 'Kim' || defaultName; // 'Kim'

// 실용적 활용
function greet(name) {
    name = name || '손님';  // name이 falsy면 '손님' 사용
    console.log(`안녕하세요, ${name}님!`);
}
```

## 4. Truthy와 Falsy 값

### Falsy 값 (거짓으로 변환되는 값)

| 값 | 타입 | 설명 |
|----|------|------|
| **false** | boolean | 불린 false |
| **0** | number | 숫자 0 |
| **-0** | number | 음수 0 |
| **0n** | bigint | BigInt 0 |
| **""** | string | 빈 문자열 |
| **null** | null | null 값 |
| **undefined** | undefined | undefined 값 |
| **NaN** | number | Not a Number |

### Truthy 값 (참으로 변환되는 값)

| 값 | 설명 |
|----|------|
| **Falsy가 아닌 모든 값** | 빈 배열 [], 빈 객체 {}, 문자열 "false" 등 |

```javascript
// Falsy 값들
if (false) console.log('실행 안됨');
if (0) console.log('실행 안됨');
if ('') console.log('실행 안됨');
if (null) console.log('실행 안됨');
if (undefined) console.log('실행 안됨');
if (NaN) console.log('실행 안됨');

// Truthy 값들
if (true) console.log('실행됨');
if (1) console.log('실행됨');
if ('hello') console.log('실행됨');
if ([]) console.log('실행됨');      // 빈 배열도 truthy!
if ({}) console.log('실행됨');      // 빈 객체도 truthy!
if ('false') console.log('실행됨'); // 문자열 'false'도 truthy!

// 불린 변환 확인
console.log(Boolean(0));      // false
console.log(Boolean(''));     // false
console.log(Boolean([]));     // true
console.log(Boolean({}));     // true
```

## 5. 비교 연산자

### 동등성 비교

| 연산자 | 이름 | 타입 변환 | 예시 | 결과 |
|--------|------|-----------|------|------|
| **==** | 동등 | O | '5' == 5 | true |
| **!=** | 부등 | O | '5' != 5 | false |
| **===** | 일치 | X | '5' === 5 | false |
| **!==** | 불일치 | X | '5' !== 5 | true |

### 크기 비교

| 연산자 | 의미 | 예시 | 결과 |
|--------|------|------|------|
| **<** | 작다 | 5 < 10 | true |
| **>** | 크다 | 5 > 10 | false |
| **<=** | 작거나 같다 | 5 <= 5 | true |
| **>=** | 크거나 같다 | 5 >= 10 | false |

```javascript
// 동등성 비교의 차이
console.log(5 == '5');    // true (타입 변환 후 비교)
console.log(5 === '5');   // false (타입까지 엄격 비교)

console.log(true == 1);   // true
console.log(true === 1);  // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

// 특별한 경우들
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true (ES6)

// 권장: 항상 === 사용
if (value === null) { /* null 체크 */ }
if (value === undefined) { /* undefined 체크 */ }
if (value === 0) { /* 0 체크 */ }
```

## 6. 조건문에서 활용

```javascript
// if 문
let score = 85;
if (score >= 90) {
    console.log('A학점');
} else if (score >= 80) {
    console.log('B학점');
} else {
    console.log('C학점');
}

// 삼항 연산자
let age = 20;
let canVote = age >= 18 ? '투표 가능' : '투표 불가';

// 복합 조건
let isWeekend = true;
let isHoliday = false;
let canRest = isWeekend || isHoliday;

let hasLicense = true;
let hasGoodEyesight = true;
let canDrive = hasLicense && hasGoodEyesight;
```

## 7. 불린 변환 패턴

```javascript
// 값이 존재하는지 확인
function hasValue(value) {
    return !!value; // 이중 부정으로 불린 변환
}

// 배열이 비어있지 않은지 확인
function isNotEmpty(arr) {
    return Array.isArray(arr) && arr.length > 0;
}

// 객체가 비어있지 않은지 확인
function hasProperties(obj) {
    return obj && Object.keys(obj).length > 0;
}

// 기본값 설정 패턴
function setDefault(value, defaultValue) {
    return value || defaultValue;
}

// null/undefined 체크
function isNullish(value) {
    return value === null || value === undefined;
}

// ES2020 Nullish Coalescing
let userName = null ?? 'Guest';        // 'Guest'
let userAge = 0 ?? 18;                // 0 (0은 nullish가 아님)
let userScore = undefined ?? 100;      // 100
```

## 8. 실용 예제

```javascript
// 폼 검증
function validateForm(name, email, age) {
    let isValid = true;
    let errors = [];
    
    if (!name || name.trim() === '') {
        errors.push('이름을 입력하세요');
        isValid = false;
    }
    
    if (!email || !email.includes('@')) {
        errors.push('유효한 이메일을 입력하세요');
        isValid = false;
    }
    
    if (!age || age < 18) {
        errors.push('18세 이상이어야 합니다');
        isValid = false;
    }
    
    return { isValid, errors };
}

// 권한 체크
function checkPermission(user, action) {
    return user && 
           user.isActive && 
           user.permissions && 
           user.permissions.includes(action);
}

// 안전한 속성 접근
function getUserCity(user) {
    return user && 
           user.address && 
           user.address.city || 
           '미등록';
}

// Optional Chaining (ES2020)
function getUserCityModern(user) {
    return user?.address?.city ?? '미등록';
}
```

## 9. 학습 체크리스트

- [ ] 논리 연산자 (&&, ||, !)를 사용할 수 있다
- [ ] 단축 평가를 이해하고 활용할 수 있다
- [ ] Truthy와 Falsy 값을 구분할 수 있다
- [ ] == 과 === 의 차이점을 안다
- [ ] 조건문에서 불린 값을 활용할 수 있다
- [ ] 불린 변환 패턴을 사용할 수 있다 