# 객체 학습지

## 1. 객체 기본 개념

| 개념 | 설명 | 예시 |
|------|------|------|
| **객체** | 키-값 쌍으로 이루어진 데이터 구조 | {name: 'Kim', age: 30} |
| **프로퍼티** | 객체의 키-값 쌍 | name: 'Kim' |
| **메소드** | 객체의 함수 프로퍼티 | greet: function() {} |
| **키** | 프로퍼티의 이름 (문자열 또는 심볼) | 'name', 'age' |

## 2. 객체 생성 방법

| 방법 | 문법 | 특징 | 예시 |
|------|------|------|------|
| **객체 리터럴** | {} | 가장 일반적 | let obj = {} |
| **Object 생성자** | new Object() | 잘 사용하지 않음 | let obj = new Object() |
| **생성자 함수** | new Constructor() | 재사용 가능 | let obj = new Person() |
| **Object.create()** | Object.create(proto) | 프로토타입 지정 | Object.create(null) |

```javascript
// 객체 리터럴
let person = {
    name: '김철수',
    age: 30,
    city: '서울',
    isMarried: false
};

// 빈 객체 생성 후 프로퍼티 추가
let car = {};
car.brand = 'Toyota';
car.model = 'Camry';
car.year = 2023;

// Object 생성자 (권장하지 않음)
let book = new Object();
book.title = 'JavaScript 입문';
book.author = '홍길동';

// 중첩 객체
let student = {
    name: '이영희',
    grade: 3,
    subjects: {
        math: 90,
        english: 85,
        science: 88
    },
    address: {
        city: '부산',
        district: '해운대구'
    }
};
```

## 3. 프로퍼티 접근

| 방법 | 문법 | 사용 시기 | 예시 |
|------|------|-----------|------|
| **점 표기법** | obj.property | 키가 유효한 식별자일 때 | person.name |
| **대괄호 표기법** | obj['property'] | 동적 키, 특수문자 포함 | person['name'] |
| **변수 사용** | obj[variable] | 런타임에 키 결정 | person[key] |

```javascript
let person = {
    name: '김철수',
    age: 30,
    'full-name': '김철수',
    'job title': '개발자'
};

// 점 표기법
console.log(person.name);    // '김철수'
console.log(person.age);     // 30

// 대괄호 표기법
console.log(person['name']); // '김철수'
console.log(person['full-name']); // '김철수' (하이픈 때문에 대괄호 필요)
console.log(person['job title']); // '개발자' (공백 때문에 대괄호 필요)

// 동적 프로퍼티 접근
let property = 'age';
console.log(person[property]); // 30

// 존재하지 않는 프로퍼티
console.log(person.height);    // undefined

// 프로퍼티 존재 확인
console.log('name' in person);        // true
console.log('height' in person);      // false
console.log(person.hasOwnProperty('name')); // true
```

## 4. 프로퍼티 추가, 수정, 삭제

| 작업 | 문법 | 예시 |
|------|------|------|
| **추가/수정** | obj.key = value | person.age = 31 |
| **삭제** | delete obj.key | delete person.age |
| **다중 할당** | Object.assign() | Object.assign(obj, {a: 1}) |

```javascript
let person = {
    name: '김철수',
    age: 30
};

// 프로퍼티 추가
person.city = '서울';
person['hobby'] = '독서';

// 프로퍼티 수정
person.age = 31;
person['name'] = '김철수님';

// 프로퍼티 삭제
delete person.hobby;

console.log(person); // {name: '김철수님', age: 31, city: '서울'}

// Object.assign을 이용한 다중 프로퍼티 추가
Object.assign(person, {
    job: '개발자',
    salary: 5000,
    department: 'IT'
});

// 스프레드 연산자로 새 객체 생성 (ES6)
let updatedPerson = {
    ...person,
    age: 32,
    city: '부산'
};
```

## 5. 메소드

| 개념 | 설명 | 예시 |
|------|------|------|
| **메소드** | 객체의 함수 프로퍼티 | greet: function() {} |
| **this** | 메소드 내에서 객체 자신 참조 | this.name |
| **메소드 축약** | function 키워드 생략 (ES6) | greet() {} |

```javascript
// 메소드가 있는 객체
let person = {
    name: '김철수',
    age: 30,
    
    // 일반 메소드
    greet: function() {
        return `안녕하세요, ${this.name}입니다.`;
    },
    
    // 메소드 축약 문법 (ES6)
    introduce() {
        return `저는 ${this.age}세 ${this.name}입니다.`;
    },
    
    // 화살표 함수 (this 바인딩 주의)
    sayAge: () => {
        return `나이는 ${this.age}세입니다.`; // this가 window/global
    },
    
    // 매개변수가 있는 메소드
    setAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
};

console.log(person.greet());      // '안녕하세요, 김철수입니다.'
console.log(person.introduce());  // '저는 30세 김철수입니다.'

person.setAge(35);
console.log(person.age);          // 35

// 메소드 동적 추가
person.getInfo = function() {
    return `${this.name} (${this.age}세)`;
};
```

## 6. this 키워드

| 상황 | this 값 | 예시 |
|------|---------|------|
| **메소드 호출** | 메소드를 호출한 객체 | obj.method() |
| **일반 함수** | window/global (undefined in strict) | function() {} |
| **화살표 함수** | 상위 스코프의 this | () => {} |
| **생성자 함수** | 새로 생성된 객체 | new Constructor() |

```javascript
let person = {
    name: '김철수',
    
    greet() {
        console.log(`안녕, ${this.name}`);  // this는 person
    },
    
    delayedGreet() {
        setTimeout(function() {
            console.log(`안녕, ${this.name}`); // this는 window/global
        }, 1000);
    },
    
    delayedGreetArrow() {
        setTimeout(() => {
            console.log(`안녕, ${this.name}`); // this는 person (상위 스코프)
        }, 1000);
    }
};

person.greet(); // '안녕, 김철수'

// 메소드를 변수에 할당하면 this 바인딩 변경
let greetFunc = person.greet;
greetFunc(); // '안녕, undefined' (strict mode에서는 오류)

// bind로 this 고정
let boundGreet = person.greet.bind(person);
boundGreet(); // '안녕, 김철수'

// call과 apply로 this 명시적 설정
let anotherPerson = {name: '이영희'};
person.greet.call(anotherPerson);  // '안녕, 이영희'
person.greet.apply(anotherPerson); // '안녕, 이영희'
```

## 7. 객체와 반복

### for...in 문
```javascript
let person = {
    name: '김철수',
    age: 30,
    city: '서울'
};

// for...in으로 모든 프로퍼티 순회
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 상속된 프로퍼티 제외
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
```

### Object 메소드
```javascript
let person = {
    name: '김철수',
    age: 30,
    city: '서울'
};

// Object.keys() - 키 배열 반환
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Object.values() - 값 배열 반환 (ES8)
let values = Object.values(person);
console.log(values); // ['김철수', 30, '서울']

// Object.entries() - [키, 값] 배열 반환 (ES8)
let entries = Object.entries(person);
console.log(entries); // [['name', '김철수'], ['age', 30], ['city', '서울']]

// entries로 반복
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

## 8. 구조 분해 할당

```javascript
let person = {
    name: '김철수',
    age: 30,
    city: '서울',
    job: '개발자'
};

// 기본 구조 분해
let {name, age} = person;
console.log(name); // '김철수'
console.log(age);  // 30

// 변수명 변경
let {name: personName, city: location} = person;
console.log(personName); // '김철수'
console.log(location);   // '서울'

// 기본값 설정
let {name, salary = 3000} = person;
console.log(salary); // 3000 (person.salary가 없으므로 기본값)

// 나머지 패턴
let {name, ...rest} = person;
console.log(rest); // {age: 30, city: '서울', job: '개발자'}

// 중첩 구조 분해
let student = {
    name: '이영희',
    grades: {
        math: 90,
        english: 85
    }
};

let {grades: {math, english}} = student;
console.log(math);    // 90
console.log(english); // 85

// 함수 매개변수에서 구조 분해
function introduce({name, age = 0}) {
    return `${name} (${age}세)`;
}

console.log(introduce(person)); // '김철수 (30세)'
```

## 9. 객체 복사

### 얕은 복사 (Shallow Copy)
```javascript
let original = {
    name: '김철수',
    age: 30,
    address: {
        city: '서울',
        district: '강남구'
    }
};

// Object.assign()
let copy1 = Object.assign({}, original);

// 스프레드 연산자 (ES6)
let copy2 = {...original};

// 얕은 복사의 문제점
copy1.name = '이영희';      // 원본에 영향 없음
copy1.address.city = '부산'; // 원본에도 영향 있음!

console.log(original.address.city); // '부산' (변경됨)
```

### 깊은 복사 (Deep Copy)
```javascript
// JSON을 이용한 깊은 복사 (함수, undefined, Symbol 등은 복사 안됨)
let deepCopy1 = JSON.parse(JSON.stringify(original));

// Lodash 라이브러리 사용
// let deepCopy2 = _.cloneDeep(original);

// 재귀 함수로 직접 구현
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepCopy(item));
    }
    
    let copied = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copied[key] = deepCopy(obj[key]);
        }
    }
    return copied;
}
```

## 10. 프로토타입

```javascript
// 모든 객체는 프로토타입을 가짐
let person = {name: '김철수'};

// 프로토타입 확인
console.log(Object.getPrototypeOf(person)); // Object.prototype

// 프로토타입 체인
console.log(person.toString()); // Object.prototype.toString() 호출

// 생성자 함수와 프로토타입
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `안녕하세요, ${this.name}입니다.`;
};

let person1 = new Person('김철수', 30);
let person2 = new Person('이영희', 25);

console.log(person1.greet()); // '안녕하세요, 김철수입니다.'
console.log(person2.greet()); // '안녕하세요, 이영희입니다.'

// 프로토타입 상속 확인
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

## 11. 실용적인 객체 패턴

```javascript
// 팩토리 함수
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            return `안녕하세요, ${this.name}입니다.`;
        },
        getAge() {
            return this.age;
        }
    };
}

// 네임스페이스 객체
let Utils = {
    math: {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    },
    string: {
        capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
        reverse: (str) => str.split('').reverse().join('')
    }
};

// 설정 객체
let config = {
    api: {
        baseUrl: 'https://api.example.com',
        timeout: 5000
    },
    ui: {
        theme: 'dark',
        language: 'ko'
    }
};

// 옵션 객체 패턴
function processData(data, options = {}) {
    let settings = {
        format: 'json',
        validate: true,
        transform: false,
        ...options  // 기본값 덮어쓰기
    };
    
    // 데이터 처리 로직
    return settings;
}

let result = processData(data, {validate: false, transform: true});
```

## 12. 학습 체크리스트

- [ ] 객체 리터럴로 객체를 생성할 수 있다
- [ ] 점 표기법과 대괄호 표기법을 구분하여 사용할 수 있다
- [ ] 객체 메소드와 this 키워드를 이해한다
- [ ] for...in과 Object 메소드로 객체를 순회할 수 있다
- [ ] 구조 분해 할당을 활용할 수 있다
- [ ] 얕은 복사와 깊은 복사의 차이점을 안다 