# 객체 학습지

## 📌 **객체 기본 개념**

### **1️⃣ 객체란?**

| 특징 | 설명 | 예시 |
|------|------|------|
| **key-value 쌍** | 속성(property)과 값으로 구성 | `name: '김철수'` |
| **참조 타입** | 메모리 주소를 참조 | 객체 복사 시 주의 |
| **동적 속성** | 런타임에 속성 추가/삭제 가능 | `obj.newProp = 'value'` |
| **메소드 포함** | 함수를 값으로 가질 수 있음 | `greet: function() {}` |

### **2️⃣ 객체 vs 기본 타입**

| 구분 | 기본 타입 | 객체 타입 |
|------|-----------|-----------|
| **저장 방식** | 값을 직접 저장 | 주소를 참조 |
| **복사** | 값 복사 | 참조 복사 |
| **변경 가능성** | 불변 (immutable) | 가변 (mutable) |
| **종류** | number, string, boolean 등 | Object, Array, Function 등 |

💡 **객체 기본 예제**

```javascript
// 객체 리터럴로 생성
let person = {
    name: '김철수',        // 문자열 속성
    age: 30,              // 숫자 속성
    isStudent: false,     // 불린 속성
    hobbies: ['독서', '영화'], // 배열 속성
    address: {            // 중첩 객체
        city: '서울',
        district: '강남구'
    }
};

// 속성 접근
console.log(person.name);           // '김철수'
console.log(person['age']);         // 30
console.log(person.address.city);   // '서울'

// 동적 속성 추가
person.job = '개발자';
person['salary'] = 5000;

// 속성 삭제
delete person.isStudent;

console.log(person);
```

---

## 📌 **객체 생성 방법**

### **1️⃣ 객체 생성 방식 비교**

| 방식 | 문법 | 사용 시기 | 장점 |
|------|------|-----------|------|
| **리터럴** | `{}` | 단순한 객체 | 간단하고 직관적 |
| **생성자** | `new Object()` | 동적 생성 | 조건부 생성 가능 |
| **Object.create()** | `Object.create(proto)` | 프로토타입 지정 | 상속 관계 설정 |
| **클래스** | `new ClassName()` | 복잡한 객체 | 구조화된 설계 |

### **2️⃣ 속성 명명 규칙**

| 규칙 | 설명 | 예시 |
|------|------|------|
| **일반 식별자** | 문자, 숫자, _, $ 사용 | `name`, `age_`, `$price` |
| **예약어 가능** | JavaScript 예약어도 속성명 가능 | `class`, `if`, `for` |
| **공백/특수문자** | 따옴표로 감싸야 함 | `'full name'`, `'data-id'` |
| **숫자 시작** | 따옴표 필요 | `'1st-place'` |

💡 **객체 생성 예제**

```javascript
// 1. 객체 리터럴 (가장 일반적)
let book = {
    title: 'JavaScript Guide',
    author: '김개발',
    year: 2024,
    pages: 300
};

// 2. Object 생성자
let emptyObj = new Object();
emptyObj.name = 'test';
emptyObj.value = 100;

// 3. Object.create()
let prototypeObj = {
    type: 'person',
    introduce: function() {
        return `${this.name}입니다.`;
    }
};

let student = Object.create(prototypeObj);
student.name = '이학생';
student.grade = 3;

// 4. 특수한 속성명
let specialProps = {
    'full name': '김철수',        // 공백 포함
    'data-id': 'user123',        // 하이픈 포함
    '1st': 'first',              // 숫자로 시작
    class: 'A',                  // 예약어
    for: 'test'                  // 예약어
};

// 접근 시 대괄호 표기법 사용
console.log(specialProps['full name']);
console.log(specialProps['data-id']);
console.log(specialProps.class);        // 예약어는 점 표기법도 가능

// 5. 동적 속성명
let dynamicKey = 'hobby';
let person = {
    name: '박철수',
    [dynamicKey]: '게임',        // 계산된 속성명
    [`${dynamicKey}Count`]: 3    // 템플릿 리터럴 활용
};

console.log(person.hobby);      // '게임'
console.log(person.hobbyCount); // 3
```

---

## 📌 **속성 접근과 조작**

### **1️⃣ 속성 접근 방법**

| 방법 | 문법 | 사용 시기 | 특징 |
|------|------|-----------|------|
| **점 표기법** | `obj.property` | 속성명이 확실할 때 | 간단하고 읽기 쉬움 |
| **대괄호 표기법** | `obj['property']` | 동적 접근, 특수 문자 | 변수나 표현식 사용 가능 |

### **2️⃣ 속성 존재 확인**

| 방법 | 문법 | 결과 | 특징 |
|------|------|------|------|
| **in 연산자** | `'prop' in obj` | boolean | 상속된 속성도 확인 |
| **hasOwnProperty** | `obj.hasOwnProperty('prop')` | boolean | 자체 속성만 확인 |
| **undefined 체크** | `obj.prop !== undefined` | boolean | 값이 undefined인 속성은 false |

💡 **속성 접근 예제**

```javascript
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    specs: {
        engine: '2.5L',
        fuel: 'Gasoline'
    }
};

// 점 표기법
console.log(car.brand);           // 'Toyota'
console.log(car.specs.engine);    // '2.5L'

// 대괄호 표기법
console.log(car['model']);        // 'Camry'
console.log(car['specs']['fuel']); // 'Gasoline'

// 동적 접근
let property = 'year';
console.log(car[property]);       // 2023

// 변수를 이용한 중첩 접근
let keys = ['specs', 'engine'];
console.log(car[keys[0]][keys[1]]); // '2.5L'

// 속성 존재 확인
console.log('brand' in car);           // true
console.log('color' in car);           // false
console.log(car.hasOwnProperty('model')); // true

// 안전한 접근 (옵셔널 체이닝 ES2020)
console.log(car.specs?.transmission);     // undefined (에러 없음)
console.log(car.owner?.name);              // undefined (에러 없음)

// 속성 수정
car.year = 2024;                    // 기존 속성 수정
car.color = 'Blue';                 // 새 속성 추가
car['owner'] = '김자동차';           // 대괄호로 추가

// 중첩 객체 수정
car.specs.transmission = 'Auto';    // 중첩 속성 추가
car.specs['power'] = '203hp';       // 대괄호로 중첩 속성 추가

// 속성 삭제
delete car.color;                   // 속성 완전 삭제
car.owner = undefined;              // 값만 undefined로 변경 (속성은 유지)

console.log(car);
```

---

## 📌 **메소드 (Methods)**

### **1️⃣ 메소드 정의 방법**

| 방법 | 문법 | ES 버전 | 특징 |
|------|------|---------|------|
| **함수 표현식** | `method: function() {}` | ES3+ | 전통적인 방법 |
| **단축 문법** | `method() {}` | ES6+ | 간결한 문법 |
| **화살표 함수** | `method: () => {}` | ES6+ | this 바인딩 다름 |

### **2️⃣ this 키워드**

| 호출 방식 | this가 가리키는 것 | 예시 |
|-----------|-------------------|------|
| **메소드 호출** | 메소드를 소유한 객체 | `obj.method()` |
| **함수 호출** | 전역 객체 (또는 undefined) | `func()` |
| **생성자 호출** | 새로 생성된 객체 | `new Func()` |
| **명시적 바인딩** | 지정된 객체 | `func.call(obj)` |

💡 **메소드 예제**

```javascript
let calculator = {
    // 데이터 속성
    result: 0,
    history: [],
    
    // 메소드들
    add: function(num) {
        this.result += num;
        this.history.push(`+${num}`);
        return this; // 체이닝을 위한 반환
    },
    
    // ES6 단축 문법
    subtract(num) {
        this.result -= num;
        this.history.push(`-${num}`);
        return this;
    },
    
    multiply(num) {
        this.result *= num;
        this.history.push(`×${num}`);
        return this;
    },
    
    divide(num) {
        if (num !== 0) {
            this.result /= num;
            this.history.push(`÷${num}`);
        } else {
            console.log('0으로 나눌 수 없습니다');
        }
        return this;
    },
    
    clear() {
        this.result = 0;
        this.history = [];
        return this;
    },
    
    getResult() {
        return this.result;
    },
    
    getHistory() {
        return this.history.join(' ');
    },
    
    // 화살표 함수 - this가 다르게 동작
    arrowMethod: () => {
        console.log(this); // 전역 객체 또는 undefined
    }
};

// 메소드 체이닝
calculator
    .clear()
    .add(10)
    .multiply(2)
    .subtract(5)
    .divide(3);

console.log(calculator.getResult());  // 5
console.log(calculator.getHistory()); // '+10 ×2 -5 ÷3'

// this 바인딩 예제
let person = {
    name: '김철수',
    age: 30,
    
    introduce() {
        return `안녕하세요, ${this.name}입니다. ${this.age}살입니다.`;
    },
    
    birthday() {
        this.age++;
        console.log(`생일축하해요! 이제 ${this.age}살이네요.`);
    },
    
    // 중첩된 함수에서의 this 문제
    scheduleIntroduction() {
        setTimeout(function() {
            console.log(this.introduce()); // 에러: this가 person이 아님
        }, 1000);
    },
    
    // 해결 방법 1: 화살표 함수 사용
    scheduleIntroductionFixed() {
        setTimeout(() => {
            console.log(this.introduce()); // 정상 동작
        }, 1000);
    },
    
    // 해결 방법 2: bind 사용
    scheduleIntroductionBind() {
        setTimeout(function() {
            console.log(this.introduce());
        }.bind(this), 1000);
    }
};

console.log(person.introduce()); // 정상 동작
person.birthday();               // 정상 동작

// 메소드를 변수에 할당하면 this 바인딩이 사라짐
let introduce = person.introduce;
// console.log(introduce()); // 에러: this가 undefined

// call, apply, bind로 this 명시적 지정
console.log(introduce.call(person));  // 정상 동작
console.log(introduce.apply(person)); // 정상 동작

let boundIntroduce = introduce.bind(person);
console.log(boundIntroduce());        // 정상 동작
```

---

## 📌 **객체와 참조**

### **1️⃣ 참조 타입의 특징**

| 특징 | 설명 | 주의사항 |
|------|------|----------|
| **참조 복사** | 변수는 객체의 주소를 저장 | 원본과 복사본이 같은 객체 |
| **얕은 복사** | 1단계만 복사 | 중첩 객체는 여전히 참조 |
| **깊은 복사** | 모든 단계 복사 | 완전히 독립적인 객체 |

### **2️⃣ 객체 복사 방법**

| 방법 | 문법 | 복사 수준 | 사용 상황 |
|------|------|-----------|-----------|
| **할당** | `obj2 = obj1` | 참조만 복사 | 같은 객체 공유 |
| **Object.assign** | `Object.assign({}, obj)` | 얕은 복사 | 1단계 속성만 복사 |
| **스프레드** | `{...obj}` | 얕은 복사 | ES6 문법 선호 |
| **JSON 방법** | `JSON.parse(JSON.stringify(obj))` | 깊은 복사 | 함수/undefined 제외 |

💡 **객체 참조 예제**

```javascript
// 참조의 특성
let original = {
    name: '김철수',
    scores: [85, 90, 88],
    info: {
        age: 30,
        city: '서울'
    }
};

// 1. 참조 복사 (같은 객체를 참조)
let reference = original;
reference.name = '이영희';
console.log(original.name);  // '이영희' - 원본도 변경됨!

// 2. 얕은 복사 - Object.assign
let shallowCopy1 = Object.assign({}, original);
shallowCopy1.name = '박민수';
console.log(original.name);     // '이영희' - 1단계는 독립적

shallowCopy1.scores.push(95);
console.log(original.scores);   // [85, 90, 88, 95] - 중첩 배열은 공유됨!

// 3. 얕은 복사 - 스프레드 연산자 (ES6)
let shallowCopy2 = {...original};
shallowCopy2.name = '최개발';
console.log(original.name);     // '이영희' - 1단계는 독립적

shallowCopy2.info.age = 25;
console.log(original.info.age); // 25 - 중첩 객체는 공유됨!

// 4. 깊은 복사 - JSON 방법 (제한적)
let deepCopy1 = JSON.parse(JSON.stringify(original));
deepCopy1.info.city = '부산';
console.log(original.info.city); // '서울' - 완전히 독립적

// JSON 방법의 한계
let objWithFunction = {
    name: '테스트',
    method: function() { return 'hello'; },
    date: new Date(),
    undefined: undefined,
    symbol: Symbol('test')
};

let jsonCopy = JSON.parse(JSON.stringify(objWithFunction));
console.log(jsonCopy);
// { name: '테스트', date: '2024-01-01T...' }
// 함수, undefined, Symbol은 제거됨!

// 5. 수동 깊은 복사 함수
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepCopy(item));
    }
    
    if (typeof obj === 'object') {
        let copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
        return copy;
    }
}

let manualDeepCopy = deepCopy(original);
manualDeepCopy.info.age = 40;
console.log(original.info.age); // 25 - 원본 그대로

// 6. 객체 비교
let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, b: 2};
let obj3 = obj1;

console.log(obj1 === obj2);    // false - 다른 객체
console.log(obj1 === obj3);    // true - 같은 객체 참조

// 값으로 비교하려면 직접 구현
function objectsEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

console.log(objectsEqual(obj1, obj2)); // true
```

---

## 📌 **실용적인 객체 패턴**

### **1️⃣ 객체 구조 분해**

```javascript
// 기본 구조 분해
let person = {
    name: '김철수',
    age: 30,
    job: '개발자',
    address: {
        city: '서울',
        district: '강남구'
    }
};

// 변수명 그대로 추출
let {name, age} = person;
console.log(name, age); // '김철수' 30

// 변수명 변경
let {name: fullName, job: occupation} = person;
console.log(fullName, occupation); // '김철수' '개발자'

// 기본값 설정
let {name: userName, salary = 5000} = person;
console.log(userName, salary); // '김철수' 5000

// 중첩 구조 분해
let {address: {city, district}} = person;
console.log(city, district); // '서울' '강남구'

// 나머지 속성 수집
let {name: personName, ...others} = person;
console.log(personName); // '김철수'
console.log(others);     // {age: 30, job: '개발자', address: {...}}
```

### **2️⃣ 동적 객체 조작**

```javascript
// 동적 속성 추가/수정
let product = {};

function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

addProperty(product, 'name', 'MacBook');
addProperty(product, 'price', 2000000);
addProperty(product, 'category', 'laptop');

// 조건부 속성 추가
let isOnSale = true;
let productWithConditional = {
    name: 'iPhone',
    price: 1200000,
    ...(isOnSale && {discount: 0.1, salePrice: 1080000})
};

// 객체 변환
function transformObject(obj, transformer) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = transformer(obj[key], key);
        }
    }
    return result;
}

let scores = {math: 85, english: 90, science: 88};
let grades = transformObject(scores, (score) => 
    score >= 90 ? 'A' : score >= 80 ? 'B' : 'C'
);
console.log(grades); // {math: 'B', english: 'A', science: 'B'}
```

### **3️⃣ 팩토리 패턴**

```javascript
// 객체 생성 팩토리
function createUser(name, email, role = 'user') {
    return {
        name,
        email,
        role,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        
        getInfo() {
            return `${this.name} (${this.email}) - ${this.role}`;
        },
        
        updateRole(newRole) {
            this.role = newRole;
            this.updatedAt = new Date();
        },
        
        isAdmin() {
            return this.role === 'admin';
        }
    };
}

let user1 = createUser('김철수', 'kim@example.com');
let user2 = createUser('이영희', 'lee@example.com', 'admin');

console.log(user1.getInfo());
console.log(user2.isAdmin()); // true

// 설정 객체 패턴
function createApiClient(config) {
    let defaults = {
        baseURL: 'http://localhost:3000',
        timeout: 5000,
        headers: {},
        retries: 3
    };
    
    let settings = {...defaults, ...config};
    
    return {
        settings,
        
        get(url) {
            return `GET ${settings.baseURL}${url}`;
        },
        
        post(url, data) {
            return `POST ${settings.baseURL}${url} with ${JSON.stringify(data)}`;
        },
        
        updateConfig(newConfig) {
            this.settings = {...this.settings, ...newConfig};
        }
    };
}

let api = createApiClient({
    baseURL: 'https://api.example.com',
    headers: {'Authorization': 'Bearer token123'}
});
```

---

## 📌 **학습 체크리스트**

- [ ] 객체 리터럴로 객체를 생성할 수 있다
- [ ] 점 표기법과 대괄호 표기법으로 속성에 접근할 수 있다
- [ ] 메소드를 정의하고 this 키워드를 이해한다
- [ ] 객체의 참조 특성과 복사 방법을 안다
- [ ] 구조 분해 할당을 활용할 수 있다
- [ ] 동적으로 객체를 조작할 수 있다
- [ ] 실용적인 객체 패턴을 구현할 수 있다 