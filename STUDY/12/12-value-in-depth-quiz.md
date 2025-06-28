# 12. 값 더 알아보기 - 퀴즈

## 객관식 문제

### 1. 🟡 `let`과 `const`의 공통적인 특징이 아닌 것은?
a) 블록 스코프를 가진다
b) 호이스팅이 발생하지 않는다
c) 재선언이 불가능하다
d) 전역 변수로 선언 시 전역 객체의 속성이 되지 않는다

### 2. 🟢 다음 중 원시 타입(Primitive Type)이 아닌 것은?
a) string
b) number
c) array
d) boolean

### 3. 🟡 블록 스코프의 특징으로 올바른 것은?
a) 함수 내부에서만 적용된다
b) `{}`로 둘러싸인 영역에서 변수의 유효 범위가 결정된다
c) ES5에서 도입되었다
d) `var` 키워드에도 적용된다

### 4. 🟠 다음 코드의 실행 결과는?
```javascript
let a = 1;
let b = a;
a = 2;
console.log(b);
```
a) 1
b) 2
c) undefined
d) ReferenceError

### 5. 🟠 다음 코드의 실행 결과는?
```javascript
let obj1 = { prop: 1 };
let obj2 = obj1;
obj1.prop = 2;
console.log(obj2.prop);
```
a) 1
b) 2
c) undefined
d) ReferenceError

### 6. 🟡 스코프 체인에 대한 설명으로 올바른 것은?
a) 바깥쪽 스코프에서 안쪽 스코프의 변수에 접근할 수 있다
b) 안쪽 스코프에서 바깥쪽 스코프의 변수에 접근할 수 있다
c) 같은 레벨의 스코프끼리만 변수를 공유할 수 있다
d) 스코프 체인은 런타임에 결정된다

## 단답형 문제

### 7. 🟢 원시 타입과 참조 타입의 가장 큰 차이점은 무엇인가?

### 8. 🟡 `TDZ`의 풀네임을 쓰시오.

### 9. 🟡 `var`, `let`, `const` 중에서 재할당이 가능한 것을 모두 나열하시오.

### 10. 🟢 현재 권장되는 변수 선언 순서를 우선순위대로 나열하시오.

## 서술형 문제

### 11. 🟡 호이스팅(Hoisting)에 대해 설명하고, `var`와 `let/const`의 호이스팅 차이점을 서술하시오.

### 12. 🟠 참조(Reference)와 얕은 복사, 깊은 복사의 개념을 설명하고 각각의 예시를 들어보시오.

### 13. 🟡 렉시컬 스코프(Lexical Scope)의 개념과 특징을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 코드를 작성하시오.
- 블록 스코프의 특성을 보여주는 예제 코드 작성
- `let`을 사용하여 반복문에서 클로저 문제 해결

### 15. 🟡 객체의 얕은 복사를 수행하는 함수를 3가지 방법으로 작성하시오.

### 16. 🟠 깊은 복사를 수행하는 함수를 작성하시오. (단, 순환 참조는 고려하지 않음)

### 17. 🟡 다음 코드의 실행 결과를 예상하고 그 이유를 설명하시오.
```javascript
function test() {
  console.log(a); // ?
  console.log(b); // ?
  console.log(c); // ?
  
  var a = 1;
  let b = 2;
  const c = 3;
}
test();
```

## 응용 문제

### 18. 🟠 다음 코드를 분석하고 실행 결과를 예상하시오.
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 100);
}
```

### 19. 🟠 메모리 관리 관점에서 다음 두 코드의 차이점을 설명하시오.
```javascript
// 코드 A
let obj = { data: new Array(1000000).fill(0) };
let copy1 = obj;

// 코드 B  
let obj2 = { data: new Array(1000000).fill(0) };
let copy2 = { ...obj2 };
```

### 20. 🟠 다음 요구사항을 만족하는 함수를 작성하시오.
- 객체의 중첩된 속성에 안전하게 접근하는 함수
- 존재하지 않는 속성에 접근 시 기본값 반환
- 옵셔널 체이닝을 사용하지 않고 구현

---

## 정답

### 객관식 정답
1. b) 호이스팅이 발생하지 않는다 (호이스팅은 발생하지만 TDZ로 인해 접근할 수 없음)
2. c) array (배열은 객체 타입의 참조 타입)
3. b) `{}`로 둘러싸인 영역에서 변수의 유효 범위가 결정된다
4. a) 1 (원시 타입은 값이 복사됨)
5. b) 2 (참조 타입은 참조가 복사되어 같은 객체를 가리킴)
6. b) 안쪽 스코프에서 바깥쪽 스코프의 변수에 접근할 수 있다

### 단답형 정답
7. 원시 타입은 값 자체가 복사되고, 참조 타입은 메모리 주소(참조)가 복사된다
8. Temporal Dead Zone (일시적 데드 존)
9. `var`, `let`
10. `const` → `let` → `var`(사용 금지)

### 서술형 정답
11. 호이스팅은 변수나 함수 선언이 해당 스코프의 최상단으로 끌어올려지는 JavaScript의 특성이다. `var`는 선언과 동시에 `undefined`로 초기화되어 선언 전에도 접근 가능하지만, `let/const`는 선언은 호이스팅되나 초기화되지 않아 TDZ에 의해 선언 전 접근 시 ReferenceError가 발생한다.

12. 
- **참조**: 메모리 주소를 통해 객체에 접근하는 방식
- **얕은 복사**: 객체의 1차원 속성만 복사하고 중첩된 객체는 참조를 복사 (예: `Object.assign()`, `{...obj}`)
- **깊은 복사**: 중첩된 모든 객체까지 완전히 복사 (예: `JSON.parse(JSON.stringify())`)

13. 렉시컬 스코프는 함수가 정의된 위치에 따라 상위 스코프가 결정되는 방식이다. 함수가 호출되는 위치가 아닌 선언된 위치의 스코프를 기준으로 변수를 찾으며, JavaScript는 렉시컬 스코프를 따른다.

### 코딩 정답
14.
```javascript
// 블록 스코프 예제
function blockScopeExample() {
  let x = 1;
  
  if (true) {
    let x = 2; // 새로운 블록 스코프의 x
    console.log(x); // 2
  }
  
  console.log(x); // 1
}

// 클로저 문제 해결
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2가 출력됨
  }, 100);
}
```

15.
```javascript
// 방법 1: Object.assign()
function shallowCopy1(obj) {
  return Object.assign({}, obj);
}

// 방법 2: 스프레드 연산자
function shallowCopy2(obj) {
  return { ...obj };
}

// 방법 3: 반복문
function shallowCopy3(obj) {
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}
```

16.
```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }
  
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

// 또는 간단한 방법 (함수, undefined, Symbol 등은 제외됨)
function simpleDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

17.
```javascript
// 실행 결과:
// undefined (var a는 호이스팅되어 undefined로 초기화)
// ReferenceError (let b는 TDZ에 있음)
// ReferenceError (const c는 TDZ에 있음)
```

### 응용 정답
18.
```javascript
// 실행 결과:
// var: 3 (3번 출력) - var는 함수 스코프이므로 모든 콜백이 같은 i(3)를 참조
// let: 0
// let: 1  
// let: 2
// let은 블록 스코프이므로 각 반복마다 새로운 j 변수가 생성됨
```

19.
**코드 A**: `copy1`과 `obj`가 같은 메모리 위치를 참조하므로 실제로는 하나의 객체만 메모리에 존재한다.

**코드 B**: `copy2`는 `obj2`의 얕은 복사본으로 새로운 객체가 생성되지만, `data` 배열은 여전히 참조를 공유한다. 하지만 최상위 객체는 독립적이다.

20.
```javascript
function safeGet(obj, path, defaultValue = undefined) {
  const keys = path.split('.');
  let current = obj;
  
  for (let key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return defaultValue;
    }
    current = current[key];
  }
  
  return current;
}

// 사용 예제
const user = {
  profile: {
    address: {
      city: 'Seoul'
    }
  }
};

console.log(safeGet(user, 'profile.address.city')); // 'Seoul'
console.log(safeGet(user, 'profile.phone.number', 'N/A')); // 'N/A'
```