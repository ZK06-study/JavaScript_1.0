# 함수 학습지

## 1. 함수 정의 방법

| 방법 | 문법 | 특징 | 예시 |
|------|------|------|------|
| **함수 선언문** | function name() {} | 호이스팅 됨 | function add() {} |
| **함수 표현식** | let name = function() {} | 호이스팅 안 됨 | let add = function() {} |
| **화살표 함수** | let name = () => {} | this 바인딩 없음 | let add = () => {} |

```javascript
// 함수 선언문
function greet(name) {
    return `안녕하세요, ${name}님!`;
}

// 함수 표현식
let farewell = function(name) {
    return `안녕히가세요, ${name}님!`;
};

// 화살표 함수 (ES6)
let welcome = (name) => {
    return `환영합니다, ${name}님!`;
};

// 화살표 함수 (간단한 형태)
let square = x => x * x;
let add = (a, b) => a + b;
```

## 2. 매개변수와 인수

| 개념 | 설명 | 예시 |
|------|------|------|
| **매개변수** | 함수 정의 시 받을 값의 이름 | function add(a, b) |
| **인수** | 함수 호출 시 전달하는 실제 값 | add(10, 20) |
| **arguments** | 전달된 모든 인수 (화살표 함수 제외) | arguments[0] |

### 매개변수 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| **기본값 처리** | 값이 없을 때 기본값 사용 | if (name === undefined) name = '기본값' |

```javascript
// 기본 매개변수 사용
function greet(name, message) {
    if (name === undefined) name = '손님';
    if (message === undefined) message = '안녕하세요';
    return message + ', ' + name + '님!';
}
console.log(greet());           // '안녕하세요, 손님님!'
console.log(greet('김철수'));    // '안녕하세요, 김철수님!'
```

## 3. 반환값

| 개념 | 설명 | 예시 |
|------|------|------|
| **return 문** | 함수 실행을 종료하고 값 반환 | return result; |
| **return 없음** | undefined 반환 | function log() {} |
| **조기 반환** | 조건에 따라 먼저 종료 | if (error) return; |

```javascript
// 값 반환
function multiply(a, b) {
    return a * b;
}

// 조건부 반환
function divide(a, b) {
    if (b === 0) {
        return '0으로 나눌 수 없습니다';
    }
    return a / b;
}

// 여러 값 반환 (배열이나 객체 사용)
function getNameAndAge() {
    return ['김철수', 30];  // 배열로 반환
}

function getUserInfo() {
    return {             // 객체로 반환
        name: '김철수',
        age: 30,
        city: '서울'
    };
}

// 반환된 값 사용하기
let nameAndAge = getNameAndAge();
let userInfo = getUserInfo();
console.log(nameAndAge[0]); // '김철수'
console.log(userInfo.name); // '김철수'
```

## 4. 스코프와 스코프 체인

| 스코프 | 설명 | 특징 |
|--------|------|------|
| **전역 스코프** | 어디서든 접근 가능 | 전역 변수 |
| **함수 스코프** | 함수 내부에서만 접근 | 지역 변수 |
| **블록 스코프** | 블록 내부에서만 접근 | let, const |

```javascript
let globalVar = '전역 변수';

function outerFunction() {
    let outerVar = '외부 함수 변수';
    
    function innerFunction() {
        let innerVar = '내부 함수 변수';
        
        // 스코프 체인: 내부 → 외부 → 전역 순서로 변수 찾기
        console.log(innerVar);   // '내부 함수 변수'
        console.log(outerVar);   // '외부 함수 변수'
        console.log(globalVar);  // '전역 변수'
    }
    
    innerFunction();
    // console.log(innerVar); // 오류: innerVar에 접근 불가
}

// 변수 가리기 (shadowing)
let name = '전역 이름';
function test() {
    let name = '지역 이름';  // 전역 변수를 가림
    console.log(name);       // '지역 이름'
}
```

## 5. 클로저

| 개념 | 설명 | 특징 |
|------|------|------|
| **클로저** | 외부 함수의 변수에 접근할 수 있는 내부 함수 | 렉시컬 스코핑 |
| **활용** | 데이터 은닉, 모듈 패턴 | 상태 유지 |

```javascript
// 클로저 기본 예제
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (독립적인 카운터)

// 클로저를 이용한 프라이빗 변수
function createPerson(name) {
    let privateName = name;
    
    return {
        getName: function() {
            return privateName;
        },
        setName: function(newName) {
            if (newName) {
                privateName = newName;
            }
        }
    };
}

let person = createPerson('김철수');
console.log(person.getName());  // '김철수'
person.setName('이영희');
console.log(person.getName());  // '이영희'
// console.log(privateName);    // 오류: 접근 불가
```

## 6. 고차 함수

| 개념 | 설명 | 예시 |
|------|------|------|
| **고차 함수** | 함수를 인수로 받거나 함수를 반환 | map, filter, reduce |
| **콜백 함수** | 다른 함수에 인수로 전달되는 함수 | setTimeout(callback) |
| **커링** | 여러 인수를 받는 함수를 단일 인수 함수들의 체인으로 | f(a)(b)(c) |

```javascript
// 함수를 인수로 받기
function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squared = processArray(numbers, x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

// 함수를 반환하기
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// 실용적인 고차 함수들
let users = [
    {name: '김철수', age: 30},
    {name: '이영희', age: 25},
    {name: '박민수', age: 35}
];

// map: 변환
let names = users.map(user => user.name);

// filter: 필터링
let adults = users.filter(user => user.age >= 30);

// reduce: 집계
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
```

## 7. this 키워드

| 상황 | this 값 | 예시 |
|------|---------|------|
| **전역** | window (브라우저) / global (Node.js) | console.log(this) |
| **일반 함수** | window / undefined (strict mode) | function() { this } |
| **메소드** | 메소드를 호출한 객체 | obj.method() |
| **화살표 함수** | 상위 스코프의 this | () => { this } |
| **call/apply/bind** | 명시적으로 설정한 객체 | func.call(obj) |

```javascript
// 객체 메소드에서의 this
let person = {
    name: '김철수',
    greet: function() {
        return `안녕하세요, ${this.name}님!`;
    },
    greetArrow: () => {
        return `안녕하세요, ${this.name}님!`; // this는 전역 객체
    }
};

console.log(person.greet());      // '안녕하세요, 김철수님!'
console.log(person.greetArrow()); // '안녕하세요, undefined님!'

// call, apply, bind
function introduce() {
    return `저는 ${this.name}입니다.`;
}

let user1 = {name: '김철수'};
let user2 = {name: '이영희'};

console.log(introduce.call(user1));  // '저는 김철수입니다.'
console.log(introduce.apply(user2)); // '저는 이영희입니다.'

let boundIntroduce = introduce.bind(user1);
console.log(boundIntroduce()); // '저는 김철수입니다.'
```

## 8. 실용적인 함수 패턴

```javascript
// 즉시 실행 함수 (IIFE)
(function() {
    let privateVar = '은닉된 변수';
    console.log('즉시 실행됨');
})();

// 모듈 패턴
let myModule = (function() {
    let privateCount = 0;
    
    return {
        increment: function() {
            privateCount++;
        },
        getCount: function() {
            return privateCount;
        }
    };
})();

// 메모이제이션 (캐싱)
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

let fibonacci = memoize(function(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

// 디바운싱
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// 사용 예시
let debouncedSave = debounce(function() {
    console.log('저장됨');
}, 300);
```

## 9. ES6+ 함수 기능

```javascript
// 화살표 함수의 다양한 형태
let identity = x => x;                    // 단일 매개변수
let add = (a, b) => a + b;               // 여러 매개변수
let square = x => ({ value: x * x });     // 객체 반환 시 괄호 필요

// 구조 분해 매개변수
let printUser = ({name, age = 0}) => {
    console.log(`${name} (${age}세)`);
};

// 함수 매개변수에서 구조 분해
function processPoint([x, y]) {
    return Math.sqrt(x * x + y * y);
}

console.log(processPoint([3, 4])); // 5

// 템플릿 리터럴 태그 함수
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let name = '김철수';
let html = highlight`안녕하세요, ${name}님!`;
```

## 10. 학습 체크리스트

- [ ] 함수의 세 가지 정의 방법을 사용할 수 있다
- [ ] 매개변수와 인수의 차이점을 안다
- [ ] 스코프와 스코프 체인을 이해한다
- [ ] 클로저를 활용할 수 있다
- [ ] 고차 함수를 작성할 수 있다
- [ ] this 키워드의 동작을 이해한다
