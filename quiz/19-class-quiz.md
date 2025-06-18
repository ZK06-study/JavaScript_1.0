# 19. 클래스 - 퀴즈

## 객관식 문제

### 1. 🟢 ES2015 클래스의 특징으로 올바른 것은?
a) 새로운 객체 지향 시스템을 도입했다
b) 프로토타입 기반 상속의 문법적 설탕(syntactic sugar)이다
c) 함수형 프로그래밍을 위한 새로운 방법이다
d) 기존 함수와 완전히 다른 새로운 타입이다

### 2. 🟡 클래스의 `constructor` 메서드에 대한 설명으로 틀린 것은?
a) 인스턴스를 생성할 때 자동으로 호출된다
b) 클래스당 하나만 정의할 수 있다
c) 반드시 정의해야 한다
d) `this`를 통해 인스턴스 속성을 설정할 수 있다

### 3. 🟠 정적 메서드(static method)의 특징으로 올바른 것은?
a) 인스턴스에서만 호출할 수 있다
b) 클래스명으로 직접 호출할 수 있다
c) `this`가 인스턴스를 가리킨다
d) 상속되지 않는다

### 4. 🟡 다음 중 올바른 상속 문법은?
a) `class Child inherits Parent {}`
b) `class Child extends Parent {}`
c) `class Child from Parent {}`
d) `class Child : Parent {}`

### 5. 🟠 `super` 키워드의 역할이 아닌 것은?
a) 부모 클래스의 생성자 호출
b) 부모 클래스의 메서드 호출
c) 현재 인스턴스 참조
d) 상속 관계에서 부모 클래스 접근

### 6. 🟡 private 필드의 올바른 문법은? (ES2022)
a) `private name;`
b) `#name;`
c) `_name;`
d) `private: name;`

## 단답형 문제

### 7. 🟢 클래스의 인스턴스를 생성할 때 사용하는 키워드는?

### 8. 🟡 getter 메서드를 정의할 때 사용하는 키워드는?

### 9. 🟠 클래스가 다른 클래스를 상속받았는지 확인하는 연산자는?

### 10. 🟢 클래스의 메서드는 기본적으로 어떤 모드에서 실행되는가?

## 서술형 문제

### 11. 🟡 클래스와 생성자 함수의 차이점을 설명하시오.

### 12. 🟠 상속에서 `super` 키워드의 다양한 사용법을 예시와 함께 설명하시오.

### 13. 🟡 getter와 setter의 개념과 사용 목적을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 클래스를 작성하시오.
```javascript
// Person 클래스
// - 생성자: name, age 받기
// - greet 메서드: 인사말 출력
// - getter: fullInfo (이름과 나이 반환)
```

### 15. 🟡 상속을 이용한 클래스 계층을 구현하시오.
```javascript
// Animal -> Dog -> Puppy 상속 구조
// 각 클래스마다 고유한 메서드와 속성 추가
// 메서드 오버라이딩 포함
```

### 16. 🟠 private 필드와 메서드를 사용한 은행 계좌 클래스를 작성하시오.
```javascript
// BankAccount 클래스
// - private: balance, accountNumber
// - public: deposit, withdraw, getBalance
// - 잔액 부족 시 에러 처리
```

### 17. 🟡 정적 메서드를 활용한 유틸리티 클래스를 작성하시오.
```javascript
// MathUtils 클래스
// - 정적 메서드들: add, multiply, factorial, isPrime
// - 인스턴스 생성 방지
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello from ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  
  greet() {
    super.greet();
    console.log(`I am ${this.age} years old`);
  }
}

const child = new Child('Alice', 10);
child.greet();
```

### 19. 🟠 믹스인(Mixin) 패턴을 클래스로 구현하시오.
```javascript
// Flying과 Swimming 믹스인을 만들고
// Bird 클래스에 Flying 믹스인 적용
// Fish 클래스에 Swimming 믹스인 적용
// Duck 클래스에 両방 믹스인 적용
```

### 20. 🟠 데코레이터 패턴을 활용한 로깅 시스템을 구현하시오.
```javascript
// 메서드 호출을 자동으로 로깅하는 클래스
// 실행 시간 측정 기능 포함
// 에러 발생 시 자동 로깅
```

---

## 정답

### 객관식 정답
1. b) 프로토타입 기반 상속의 문법적 설탕(syntactic sugar)이다
2. c) 반드시 정의해야 한다 (생략 가능)
3. b) 클래스명으로 직접 호출할 수 있다
4. b) `class Child extends Parent {}`
5. c) 현재 인스턴스 참조 (super는 부모 클래스 참조)
6. b) `#name;`

### 단답형 정답
7. `new`
8. `get`
9. `instanceof`
10. 엄격 모드 (strict mode)

### 서술형 정답
11. **클래스 vs 생성자 함수:**
- **문법**: 클래스는 더 명확하고 간결한 문법
- **호이스팅**: 클래스는 호이스팅되지 않음 (TDZ)
- **엄격 모드**: 클래스는 자동으로 엄격 모드
- **new 없이 호출**: 클래스는 에러 발생, 생성자 함수는 undefined 반환

12. **super 키워드 사용법:**
```javascript
class Parent {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hello, ${this.name}`); }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);        // 부모 생성자 호출
    this.age = age;
  }
  
  greet() {
    super.greet();      // 부모 메서드 호출
    console.log(`Age: ${this.age}`);
  }
  
  static info() {
    super.info();       // 정적 메서드에서 부모 정적 메서드 호출
  }
}
```

13. **getter와 setter:**
- **getter**: 속성처럼 접근하여 값을 반환하는 메서드
- **setter**: 속성처럼 접근하여 값을 설정하는 메서드
- **목적**: 데이터 캡슐화, 유효성 검사, 계산된 속성 제공

### 코딩 정답
14.
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
  
  get fullInfo() {
    return `${this.name} (${this.age}세)`;
  }
}

// 사용 예시
const person = new Person('김철수', 30);
person.greet(); // "안녕하세요, 저는 김철수입니다."
console.log(person.fullInfo); // "김철수 (30세)"
```

15.
```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
  
  sleep() {
    console.log(`${this.name}이(가) 잠을 잡니다.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, '개');
    this.breed = breed;
  }
  
  makeSound() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }
  
  wagTail() {
    console.log(`${this.name}이(가) 꼬리를 흔듭니다.`);
  }
}

class Puppy extends Dog {
  constructor(name, breed, age) {
    super(name, breed);
    this.age = age;
  }
  
  makeSound() {
    console.log(`강아지 ${this.name}이(가) 앙앙 웁니다.`);
  }
  
  play() {
    console.log(`${this.name}이(가) 장난감과 놉니다.`);
  }
  
  get info() {
    return `${this.age}개월된 ${this.breed} 강아지 ${this.name}`;
  }
}

// 사용 예시
const puppy = new Puppy('뽀삐', '골든 리트리버', 3);
puppy.makeSound(); // "강아지 뽀삐이(가) 앙앙 웁니다."
puppy.wagTail();   // "뽀삐이(가) 꼬리를 흔듭니다."
puppy.play();      // "뽀삐이(가) 장난감과 놉니다."
console.log(puppy.info); // "3개월된 골든 리트리버 강아지 뽀삐"
```

16.
```javascript
class BankAccount {
  #balance;
  #accountNumber;
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error('입금액은 0보다 커야 합니다.');
    }
    this.#balance += amount;
    console.log(`${amount}원이 입금되었습니다. 현재 잔액: ${this.#balance}원`);
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('출금액은 0보다 커야 합니다.');
    }
    if (amount > this.#balance) {
      throw new Error('잔액이 부족합니다.');
    }
    this.#balance -= amount;
    console.log(`${amount}원이 출금되었습니다. 현재 잔액: ${this.#balance}원`);
  }
  
  getBalance() {
    return this.#balance;
  }
  
  #validateAmount(amount) {
    return typeof amount === 'number' && amount > 0;
  }
  
  get accountInfo() {
    return `계좌번호: ${this.#accountNumber}, 잔액: ${this.#balance}원`;
  }
}

// 사용 예시
const account = new BankAccount('123-456-789', 10000);
account.deposit(5000);   // "5000원이 입금되었습니다..."
account.withdraw(3000);  // "3000원이 출금되었습니다..."
console.log(account.getBalance()); // 12000
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

17.
```javascript
class MathUtils {
  // 생성자를 private으로 만들어 인스턴스 생성 방지
  constructor() {
    throw new Error('MathUtils는 유틸리티 클래스입니다. 인스턴스를 생성할 수 없습니다.');
  }
  
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static factorial(n) {
    if (n < 0) throw new Error('음수의 팩토리얼은 정의되지 않습니다.');
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }
  
  static isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  static gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  }
  
  static lcm(a, b) {
    return Math.abs(a * b) / this.gcd(a, b);
  }
}

// 사용 예시
console.log(MathUtils.add(5, 3));        // 8
console.log(MathUtils.factorial(5));     // 120
console.log(MathUtils.isPrime(17));      // true
console.log(MathUtils.gcd(48, 18));      // 6

// const math = new MathUtils(); // Error: MathUtils는 유틸리티 클래스입니다...
```

### 응용 정답
18.
```javascript
// 실행 결과:
// "Hello from Alice"
// "I am 10 years old"

// 설명:
// 1. Child 클래스가 Parent를 상속받음
// 2. super(name)으로 부모 생성자 호출하여 name 설정
// 3. greet() 메서드에서 super.greet()로 부모 메서드 먼저 호출
// 4. 이후 자식 클래스의 추가 로직 실행
```

19.
```javascript
// 믹스인 팩토리 함수들
const Flying = (Base) => class extends Base {
  fly() {
    console.log(`${this.name}이(가) 날고 있습니다.`);
  }
  
  land() {
    console.log(`${this.name}이(가) 착륙했습니다.`);
  }
};

const Swimming = (Base) => class extends Base {
  swim() {
    console.log(`${this.name}이(가) 수영하고 있습니다.`);
  }
  
  dive() {
    console.log(`${this.name}이(가) 잠수합니다.`);
  }
};

// 기본 Animal 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name}이(가) 먹고 있습니다.`);
  }
}

// 믹스인 적용
class Bird extends Flying(Animal) {
  constructor(name) {
    super(name);
  }
  
  chirp() {
    console.log(`${this.name}이(가) 지저귑니다.`);
  }
}

class Fish extends Swimming(Animal) {
  constructor(name) {
    super(name);
  }
  
  breatheUnderwater() {
    console.log(`${this.name}이(가) 물속에서 호흡합니다.`);
  }
}

// 다중 믹스인 적용
class Duck extends Swimming(Flying(Animal)) {
  constructor(name) {
    super(name);
  }
  
  quack() {
    console.log(`${this.name}이(가) 꽥꽥합니다.`);
  }
}

// 사용 예시
const bird = new Bird('참새');
bird.fly();  // "참새이(가) 날고 있습니다."
bird.eat();  // "참새이(가) 먹고 있습니다."

const duck = new Duck('오리');
duck.fly();   // "오리이(가) 날고 있습니다."
duck.swim();  // "오리이(가) 수영하고 있습니다."
duck.quack(); // "오리이(가) 꽥꽥합니다."
```

20.
```javascript
// 로깅 데코레이터
function LogMethod(target, propertyName, descriptor) {
  const method = descriptor.value;
  
  descriptor.value = function(...args) {
    const start = performance.now();
    console.log(`🔵 [${target.constructor.name}] ${propertyName} 메서드 호출`);
    console.log(`📥 인자:`, args);
    
    try {
      const result = method.apply(this, args);
      const end = performance.now();
      
      console.log(`📤 결과:`, result);
      console.log(`⏱️ 실행 시간: ${(end - start).toFixed(2)}ms`);
      console.log(`✅ [${target.constructor.name}] ${propertyName} 완료\n`);
      
      return result;
    } catch (error) {
      const end = performance.now();
      console.log(`❌ 에러 발생:`, error.message);
      console.log(`⏱️ 실행 시간: ${(end - start).toFixed(2)}ms`);
      console.log(`🔴 [${target.constructor.name}] ${propertyName} 실패\n`);
      throw error;
    }
  };
  
  return descriptor;
}

// 로깅이 적용된 계산기 클래스
class Calculator {
  @LogMethod
  add(a, b) {
    return a + b;
  }
  
  @LogMethod
  divide(a, b) {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }
    return a / b;
  }
  
  @LogMethod
  factorial(n) {
    if (n < 0) throw new Error('음수의 팩토리얼은 정의되지 않습니다.');
    if (n <= 1) return 1;
    
    // 의도적으로 느린 계산 (성능 측정을 위해)
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// 데코레이터를 수동으로 적용하는 버전 (ES2022 이전)
class CalculatorManual {
  add(a, b) {
    return a + b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }
    return a / b;
  }
  
  factorial(n) {
    if (n < 0) throw new Error('음수의 팩토리얼은 정의되지 않습니다.');
    if (n <= 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// 수동 데코레이터 적용
['add', 'divide', 'factorial'].forEach(methodName => {
  const originalMethod = CalculatorManual.prototype[methodName];
  CalculatorManual.prototype[methodName] = function(...args) {
    const start = performance.now();
    console.log(`🔵 [${this.constructor.name}] ${methodName} 메서드 호출`);
    console.log(`📥 인자:`, args);
    
    try {
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      
      console.log(`📤 결과:`, result);
      console.log(`⏱️ 실행 시간: ${(end - start).toFixed(2)}ms`);
      console.log(`✅ [${this.constructor.name}] ${methodName} 완료\n`);
      
      return result;
    } catch (error) {
      const end = performance.now();
      console.log(`❌ 에러 발생:`, error.message);
      console.log(`⏱️ 실행 시간: ${(end - start).toFixed(2)}ms`);
      console.log(`🔴 [${this.constructor.name}] ${methodName} 실패\n`);
      throw error;
    }
  };
});

// 사용 예시
const calc = new CalculatorManual();

calc.add(5, 3);
calc.factorial(10);
try {
  calc.divide(10, 0);
} catch (error) {
  // 에러는 이미 로깅됨
}
```