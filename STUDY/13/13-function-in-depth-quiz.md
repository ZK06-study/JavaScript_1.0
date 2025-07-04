# 함수 심층 탐구 - 퀴즈

## 📚 학습 확인 문제

### 1. 객관식 문제

#### 문제 1
다음 코드의 실행 결과는?
```javascript
function greet(name, age) {
    return `안녕하세요, ${name}님!`;
}
console.log(greet.length);
```

a) 1  
b) 2  
c) 3  
d) undefined

**정답**: b) 2
**해설**: 함수의 `length` 속성은 매개변수의 개수를 반환합니다. `greet` 함수는 `name`과 `age` 두 개의 매개변수를 가지므로 2를 반환합니다.

---

#### 문제 2
일반 함수에서 `this`의 값은 엄격 모드가 아닐 때 무엇을 가리키나요?

a) 함수 자체  
b) undefined  
c) 전역 객체  
d) null

**정답**: c) 전역 객체
**해설**: 엄격 모드가 아닌 상황에서 일반 함수 내부의 `this`는 전역 객체(브라우저에서는 `window`, Node.js에서는 `global`)를 가리킵니다.

---

#### 문제 3
엄격 모드에서 일반 함수의 `this` 값은?

a) 전역 객체  
b) undefined  
c) 함수 자체  
d) null

**정답**: b) undefined
**해설**: 엄격 모드에서는 일반 함수 내부의 `this`가 `undefined`가 됩니다. 이는 프로그래머의 실수를 방지하기 위한 기능입니다.

---

#### 문제 4
다음 중 `this` 값을 바꿀 수 있는 메서드가 아닌 것은?

a) bind()  
b) call()  
c) apply()  
d) length()

**정답**: d) length()
**해설**: `length`는 함수의 속성이지 메서드가 아닙니다. `bind`, `call`, `apply`는 모두 `this` 값을 바꿀 수 있는 메서드들입니다.

---

#### 문제 5
화살표 함수의 `this`에 대한 설명으로 올바른 것은?

a) 호출될 때마다 달라진다  
b) 항상 전역 객체를 가리킨다  
c) 정의될 때의 상위 스코프의 `this`를 가리킨다  
d) 항상 `undefined`이다

**정답**: c) 정의될 때의 상위 스코프의 `this`를 가리킨다
**해설**: 화살표 함수는 자신만의 `this`를 갖지 않고, 정의될 때의 상위 스코프의 `this`를 그대로 사용합니다.

---

### 2. 단답형 문제

#### 문제 6
JavaScript에서 모든 함수가 엄격 모드로 동작하게 하려면 코드 상단에 어떤 문자열을 작성해야 하나요?

**정답**: `'use strict';`
**해설**: 파일 또는 함수의 최상단에 `'use strict';`를 작성하면 엄격 모드가 활성화됩니다.

---

#### 문제 7
ES2015 모듈로 작성된 코드는 기본적으로 어떤 모드로 동작하나요?

**정답**: 엄격 모드 (strict mode)
**해설**: ES2015 모듈을 사용하면 별도로 `'use strict';`를 선언하지 않아도 자동으로 엄격 모드로 동작합니다.

---

#### 문제 8
함수 객체의 어떤 속성을 사용하면 함수의 이름을 알 수 있나요?

**정답**: `name`
**해설**: 함수의 `name` 속성은 함수의 이름을 문자열로 반환합니다.

---

### 3. 코딩 문제

#### 문제 9
다음 코드의 실행 결과를 예측하고, 그 이유를 설명하세요.

```javascript
const obj = {
    name: "홍길동",
    greet: function() {
        console.log(`안녕하세요, ${this.name}님!`);
    }
};

const sayHello = obj.greet;
sayHello();
```

**정답**: 
- 엄격 모드가 아닌 경우: `"안녕하세요, undefined님!"` 출력
- 엄격 모드인 경우: TypeError 발생

**해설**: `obj.greet`를 `sayHello`에 할당하면서 메서드가 일반 함수가 되었습니다. 따라서 `this`가 객체 `obj`를 가리키지 않게 됩니다.

---

#### 문제 10
위 문제를 `bind` 메서드를 사용해서 올바르게 동작하도록 수정해보세요.

**정답**:
```javascript
const obj = {
    name: "홍길동",
    greet: function() {
        console.log(`안녕하세요, ${this.name}님!`);
    }
};

const sayHello = obj.greet.bind(obj);
sayHello(); // "안녕하세요, 홍길동님!"
```

**해설**: `bind(obj)`를 사용하여 `this`가 항상 `obj`를 가리키도록 고정시켰습니다.

---

#### 문제 11
다음 코드를 `call` 메서드를 사용하여 작성해보세요.

```javascript
function introduce(age, hobby) {
    console.log(`저는 ${this.name}이고, ${age}살이며, ${hobby}를 좋아합니다.`);
}

const person = { name: "김철수" };
// call 메서드를 사용하여 introduce 함수를 호출하세요
```

**정답**:
```javascript
introduce.call(person, 25, "독서");
// 출력: "저는 김철수이고, 25살이며, 독서를 좋아합니다."
```

**해설**: `call` 메서드는 첫 번째 인수로 `this` 값을, 나머지 인수들은 함수의 매개변수로 전달합니다.

---

#### 문제 12
위와 같은 결과를 `apply` 메서드로 구현해보세요.

**정답**:
```javascript
introduce.apply(person, [25, "독서"]);
// 출력: "저는 김철수이고, 25살이며, 독서를 좋아합니다."
```

**해설**: `apply` 메서드는 두 번째 인수로 배열을 받아서 각 요소를 함수의 매개변수로 전달합니다.

---

### 4. 응용 문제

#### 문제 13
다음 코드에서 화살표 함수와 일반 함수의 `this` 동작 차이를 설명하고, 각각의 실행 결과를 예측해보세요.

```javascript
const timer = {
    seconds: 0,
    start1: function() {
        setInterval(function() {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    },
    start2: function() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
};

timer.start1(); // 결과 1
timer.start2(); // 결과 2
```

**정답**:
- `start1()`: `NaN`이 출력됩니다. 콜백 함수 내부의 `this`가 `timer` 객체가 아닌 전역 객체(또는 `undefined`)를 가리키기 때문입니다.
- `start2()`: 1, 2, 3... 순서대로 출력됩니다. 화살표 함수는 상위 스코프의 `this`(즉, `timer` 객체)를 그대로 사용하기 때문입니다.

**해설**: 화살표 함수는 자신만의 `this`를 갖지 않고 정의될 때의 상위 스코프의 `this`를 사용하는 반면, 일반 함수는 호출 방식에 따라 `this`가 결정됩니다.

---

#### 문제 14
다음 상황에서 올바른 함수를 작성해보세요.

요구사항:
- 여러 학생의 점수를 관리하는 객체가 있습니다
- 특정 학생의 점수를 출력하는 함수를 만들되, `this`를 활용해야 합니다
- `bind`, `call`, `apply` 중 하나를 사용해야 합니다

```javascript
const students = {
    "홍길동": 85,
    "김철수": 92,
    "이영희": 78
};

function printScore(subject) {
    // 이 함수를 완성하세요
    // this.name의 students 객체에서의 점수를 출력해야 합니다
    // 예: "홍길동의 수학 점수는 85점입니다."
}

const student1 = { name: "홍길동" };
// bind, call, 또는 apply를 사용하여 함수를 호출하세요
```

**정답**:
```javascript
function printScore(subject) {
    const score = students[this.name];
    console.log(`${this.name}의 ${subject} 점수는 ${score}점입니다.`);
}

const student1 = { name: "홍길동" };

// 방법 1: call 사용
printScore.call(student1, "수학");

// 방법 2: apply 사용  
printScore.apply(student1, ["수학"]);

// 방법 3: bind 사용
const printHongScore = printScore.bind(student1);
printHongScore("수학");
```

---

### 5. 실무 응용 문제

#### 문제 15
실제 웹 개발에서 자주 발생하는 문제입니다. 다음 코드의 문제점을 찾고 수정해보세요.

```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
        console.log(this.count);
    }
    
    start() {
        // 1초마다 카운트를 증가시키려고 합니다
        setInterval(this.increment, 1000);
    }
}

const counter = new Counter();
counter.start(); // 예상과 다른 결과가 나옵니다
```

**정답**:
```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
        console.log(this.count);
    }
    
    start() {
        // 방법 1: bind 사용
        setInterval(this.increment.bind(this), 1000);
        
        // 방법 2: 화살표 함수 사용
        // setInterval(() => this.increment(), 1000);
    }
}
```

**해설**: `setInterval`에 메서드를 직접 전달하면 `this`가 손실됩니다. `bind`를 사용하거나 화살표 함수로 감싸서 해결할 수 있습니다.

---

## 📊 점수 계산
- 객관식 (1-5번): 각 10점 = 50점
- 단답형 (6-8번): 각 10점 = 30점  
- 코딩 문제 (9-12번): 각 15점 = 60점
- 응용 문제 (13-14번): 각 25점 = 50점
- 실무 응용 (15번): 30점

**총점: 220점**

### 성취도 기준
- 200점 이상: 우수 (함수 심층 개념 완벽 이해)
- 160-199점: 양호 (대부분의 개념 이해, 일부 연습 필요)
- 120-159점: 보통 (기본 개념 이해, 심화 학습 필요)
- 120점 미만: 미흡 (추가 학습 및 복습 필요)

## 🎯 추가 학습 권장사항

### 우수 등급
- 클로저와 고차 함수 학습
- 함수형 프로그래밍 패러다임 탐구
- 실무 프로젝트에서 this 바인딩 패턴 연습

### 양호 등급  
- bind, call, apply 메서드 추가 연습
- 화살표 함수 vs 일반 함수 차이점 정리
- 실제 코드에서 this 바인딩 오류 찾기 연습

### 보통 등급
- this 바인딩 규칙 반복 학습
- 간단한 예제로 bind, call, apply 연습
- 엄격 모드와 일반 모드 차이점 이해

### 미흡 등급
- 함수 기본 개념 복습
- this의 기본 개념부터 다시 학습
- 간단한 메서드 호출 예제부터 시작