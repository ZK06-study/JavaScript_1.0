# 14. 객체 더 알아보기 - 퀴즈

## 객관식 문제

### 1. 🟡 객체 속성에 접근하는 방법으로 올바른 것은?
a) 점 표기법만 사용 가능
b) 대괄호 표기법만 사용 가능  
c) 점 표기법과 대괄호 표기법 모두 사용 가능
d) 속성명에 따라 방법이 정해짐

### 2. 🟠 생성자 함수에 대한 설명으로 올바른 것은?
a) 일반 함수와 완전히 다른 특별한 함수
b) new 키워드와 함께 호출되어 객체를 생성하는 함수
c) 클래스에서만 사용할 수 있는 함수
d) ES6에서 새로 도입된 개념

### 3. 🟠 프로토타입(Prototype)에 대한 설명으로 틀린 것은?
a) 모든 함수는 prototype 속성을 가진다
b) 객체는 __proto__ 속성으로 프로토타입에 접근할 수 있다
c) 프로토타입은 상속을 구현하는 메커니즘이다
d) 프로토타입은 ES6에서 폐기되었다

### 4. 🟡 다음 코드에서 `dog.speak()`의 결과는?
```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog('Buddy', 'Golden Retriever');
```
a) "undefined makes a sound"
b) "Buddy makes a sound"
c) 에러 발생
d) "Golden Retriever makes a sound"

### 5. 🟢 `hasOwnProperty` 메서드의 역할은?
a) 객체가 특정 속성을 상속받았는지 확인
b) 객체가 특정 속성을 직접 소유하고 있는지 확인
c) 객체의 속성 개수를 반환
d) 객체의 타입을 확인

### 6. 🟡 객체 리터럴에서 사용할 수 없는 것은?
a) 메서드 단축 구문
b) 계산된 속성명
c) 상속
d) getter/setter

## 단답형 문제

### 7. 🟢 객체의 모든 속성을 순회할 때 사용하는 반복문은?

### 8. 🟡 `Object.create()`의 주요 용도는?

### 9. 🟠 프로토타입 체인의 끝에 있는 객체는?

### 10. 🟡 `this`가 가리키는 값을 결정하는 시점은 언제인가?

## 서술형 문제

### 11. 🟡 프로토타입 기반 상속의 개념과 장점을 설명하시오.

### 12. 🟠 생성자 함수와 클래스의 차이점과 공통점을 비교하여 설명하시오.

### 13. 🟡 캡슐화(Encapsulation)의 개념과 JavaScript에서 구현하는 방법을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 객체를 생성하시오.
- 이름과 나이를 가진 Person 객체
- greet 메서드로 인사말 출력
- 객체 리터럴과 생성자 함수 두 가지 방법으로 작성

### 15. 🟡 프로토타입을 이용한 상속 구조를 구현하시오.
```javascript
// Vehicle -> Car -> SportsCar 상속 구조
// 각각 고유한 메서드를 가져야 함
```

### 16. 🟠 객체의 속성을 안전하게 접근하는 함수를 작성하시오.
- 중첩된 객체의 속성에 접근
- 존재하지 않는 속성 접근 시 기본값 반환
- 메서드 체이닝 지원

### 17. 🟡 다음 요구사항을 만족하는 팩토리 함수를 작성하시오.
- 은행 계좌 객체 생성
- balance는 private하게 관리
- deposit, withdraw, getBalance 메서드 제공

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

person1.sayHello();
person2.sayHello();
```

### 19. 🟠 믹스인(Mixin) 패턴을 구현하여 다중 상속과 유사한 기능을 만드시오.
```javascript
// Flying, Swimming 믹스인을 만들고
// Duck 객체에 두 기능을 모두 추가
```

### 20. 🟠 Proxy를 이용한 객체 속성 접근 로깅 시스템을 구현하시오.
- 속성 읽기/쓰기 시 로그 출력
- 존재하지 않는 속성 접근 시 경고 메시지

---

## 정답

### 객관식 정답
1. c) 점 표기법과 대괄호 표기법 모두 사용 가능
2. b) new 키워드와 함께 호출되어 객체를 생성하는 함수
3. d) 프로토타입은 ES6에서 폐기되었다 (여전히 사용됨)
4. b) "Buddy makes a sound"
5. b) 객체가 특정 속성을 직접 소유하고 있는지 확인
6. c) 상속 (객체 리터럴에서는 직접적인 상속 불가)

### 단답형 정답
7. `for...in` 반복문
8. 특정 프로토타입을 가진 새 객체 생성
9. `Object.prototype`
10. 함수가 호출되는 시점 (Call-time)

### 서술형 정답
11. **프로토타입 기반 상속:**
- 객체가 다른 객체의 속성과 메서드를 상속받는 메커니즘
- **장점**: 메모리 효율성, 동적 상속, 유연한 객체 구조

12. **생성자 함수 vs 클래스:**
- **공통점**: 객체 생성, 상속 지원, 프로토타입 기반
- **차이점**: 문법 차이, 클래스는 호이스팅 안됨, 엄격 모드 자동 적용

13. **캡슐화:**
- 데이터와 메서드를 하나로 묶고 외부 접근을 제한하는 것
- **구현 방법**: 클로저, 심볼, private 필드(#)

### 코딩 정답
14.
```javascript
// 객체 리터럴
const person1 = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}세입니다.`);
  }
};

// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}세입니다.`);
};

const person2 = new Person('Bob', 25);
```

15.
```javascript
// Vehicle 생성자
function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.start = function() {
  console.log(`${this.brand} vehicle started`);
};

// Car 생성자
function Car(brand, model) {
  Vehicle.call(this, brand);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.model} is driving`);
};

// SportsCar 생성자
function SportsCar(brand, model, topSpeed) {
  Car.call(this, brand, model);
  this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.boost = function() {
  console.log(`${this.brand} ${this.model} boosting to ${this.topSpeed}km/h!`);
};

// 사용 예시
const ferrari = new SportsCar('Ferrari', 'F8', 340);
ferrari.start(); // Vehicle method
ferrari.drive(); // Car method
ferrari.boost(); // SportsCar method
```

16.
```javascript
function SafeObject(obj) {
  this.data = obj || {};
}

SafeObject.prototype.get = function(path, defaultValue) {
  const keys = path.split('.');
  let current = this.data;
  
  for (let key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return defaultValue;
    }
    current = current[key];
  }
  
  return current;
};

SafeObject.prototype.set = function(path, value) {
  const keys = path.split('.');
  let current = this.data;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
  return this; // 메서드 체이닝
};

// 사용 예시
const safe = new SafeObject({
  user: { profile: { name: 'Alice' } }
});

console.log(safe.get('user.profile.name')); // 'Alice'
console.log(safe.get('user.profile.age', 'Unknown')); // 'Unknown'
safe.set('user.settings.theme', 'dark').set('user.settings.lang', 'ko');
```

17.
```javascript
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`${amount}원 입금되었습니다.`);
      }
      return this;
    },
    
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`${amount}원 출금되었습니다.`);
      } else {
        console.log('출금할 수 없습니다.');
      }
      return this;
    },
    
    getBalance() {
      return balance;
    }
  };
}

// 사용 예시
const account = createBankAccount(1000);
account.deposit(500).withdraw(200);
console.log(account.getBalance()); // 1300
```

### 응용 정답
18.
```javascript
// 실행 결과:
// "Hi, I'm Alice"
// "Hi, I'm Bob"

// 설명: 프로토타입의 메서드가 변경되면 모든 인스턴스에 즉시 반영된다.
// person1과 person2 모두 변경된 sayHello 메서드를 사용한다.
```

19.
```javascript
// 믹스인 정의
const Flying = {
  fly() {
    console.log(`${this.name} is flying!`);
  },
  land() {
    console.log(`${this.name} has landed.`);
  }
};

const Swimming = {
  swim() {
    console.log(`${this.name} is swimming!`);
  },
  dive() {
    console.log(`${this.name} is diving deep.`);
  }
};

// 믹스인 적용 함수
function mixin(target, ...sources) {
  sources.forEach(source => {
    Object.getOwnPropertyNames(source).forEach(name => {
      if (name !== 'constructor') {
        target[name] = source[name];
      }
    });
  });
  return target;
}

// Duck 생성자
function Duck(name) {
  this.name = name;
}

// 믹스인 적용
mixin(Duck.prototype, Flying, Swimming);

// 사용 예시
const duck = new Duck('Donald');
duck.fly();   // "Donald is flying!"
duck.swim();  // "Donald is swimming!"
duck.dive();  // "Donald is diving deep!"
duck.land();  // "Donald has landed."
```

20.
```javascript
function createLoggedObject(target) {
  return new Proxy(target, {
    get(obj, property) {
      if (property in obj) {
        console.log(`✅ 속성 '${property}' 읽기: ${obj[property]}`);
        return obj[property];
      } else {
        console.warn(`⚠️ 존재하지 않는 속성 '${property}'에 접근했습니다.`);
        return undefined;
      }
    },
    
    set(obj, property, value) {
      const oldValue = obj[property];
      obj[property] = value;
      
      if (oldValue !== undefined) {
        console.log(`📝 속성 '${property}' 변경: ${oldValue} → ${value}`);
      } else {
        console.log(`➕ 새 속성 '${property}' 추가: ${value}`);
      }
      
      return true;
    }
  });
}

// 사용 예시
const user = createLoggedObject({
  name: 'Alice',
  age: 30
});

console.log(user.name);     // ✅ 속성 'name' 읽기: Alice
user.age = 31;              // 📝 속성 'age' 변경: 30 → 31
user.email = 'alice@example.com'; // ➕ 새 속성 'email' 추가: alice@example.com
console.log(user.phone);    // ⚠️ 존재하지 않는 속성 'phone'에 접근했습니다.
```