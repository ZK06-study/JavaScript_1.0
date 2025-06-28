# 19. 클래스

## 클래스 기본 문법

### 클래스 선언
```javascript
class Person {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // 메서드
  greet() {
    return `안녕하세요, 저는 ${this.name}입니다.`;
  }
  
  getInfo() {
    return `이름: ${this.name}, 나이: ${this.age}`;
  }
}

// 인스턴스 생성
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.greet()); // "안녕하세요, 저는 Alice입니다."
console.log(person2.getInfo()); // "이름: Bob, 나이: 25"
```

### 클래스 표현식
```javascript
// 익명 클래스 표현식
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
};

// 기명 클래스 표현식
const Circle = class CircleClass {
  constructor(radius) {
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};
```

## 접근자 프로퍼티 (getter/setter)

```javascript
class Temperature {
  constructor(celsius = 0) {
    this._celsius = celsius;
  }
  
  // getter
  get celsius() {
    return this._celsius;
  }
  
  // setter
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('절대영도보다 낮을 수 없습니다');
    }
    this._celsius = value;
  }
  
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 86;
console.log(temp.celsius);    // 30
```

## 정적 메서드와 정적 프로퍼티

```javascript
class MathUtils {
  // 정적 프로퍼티
  static PI = 3.14159;
  
  // 정적 메서드
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static getCircleArea(radius) {
    return this.PI * radius ** 2; // this는 클래스 자체를 가리킴
  }
}

// 정적 메서드는 클래스명으로 직접 호출
console.log(MathUtils.add(5, 3));        // 8
console.log(MathUtils.PI);               // 3.14159
console.log(MathUtils.getCircleArea(5)); // 78.53975

// 인스턴스에서는 정적 메서드 호출 불가
const utils = new MathUtils();
// console.log(utils.add(1, 2)); // 에러!
```

## 클래스 상속

### extends 키워드
```javascript
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  speak() {
    return `${this.name}이(가) 소리를 냅니다.`;
  }
  
  getInfo() {
    return `이름: ${this.name}, 종류: ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, '개'); // 부모 클래스의 생성자 호출
    this.breed = breed;
  }
  
  speak() {
    return `${this.name}이(가) 멍멍 짖습니다.`;
  }
  
  wagTail() {
    return `${this.name}이(가) 꼬리를 흔듭니다.`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, '고양이');
    this.color = color;
  }
  
  speak() {
    return `${this.name}이(가) 야옹 웁니다.`;
  }
  
  purr() {
    return `${this.name}이(가) 그르르 웁니다.`;
  }
}

const dog = new Dog('바둑이', '진돗개');
const cat = new Cat('나비', '검정');

console.log(dog.speak());    // "바둑이이(가) 멍멍 짖습니다."
console.log(cat.speak());    // "나비이(가) 야옹 웁니다."
console.log(dog.wagTail());  // "바둑이이(가) 꼬리를 흔듭니다."
console.log(cat.purr());     // "나비이(가) 그르르 웁니다."
```

### super 키워드
```javascript
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  
  start() {
    return `${this.brand} 차량이 시동을 겁니다.`;
  }
  
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year); // 부모 생성자 호출
    this.doors = doors;
  }
  
  start() {
    // 부모 메서드 호출 후 추가 동작
    const parentResult = super.start();
    return `${parentResult} 문은 ${this.doors}개입니다.`;
  }
  
  honk() {
    return '빵빵!';
  }
}

const car = new Car('현대', 2020, 4);
console.log(car.start());   // "현대 차량이 시동을 겁니다. 문은 4개입니다."
console.log(car.getAge());  // 4 (2024 기준)
```

## 프라이빗 필드

```javascript
class BankAccount {
  // 프라이빗 필드 (ES2022)
  #balance = 0;
  #accountNumber;
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  // 프라이빗 메서드
  #validateAmount(amount) {
    return amount > 0 && typeof amount === 'number';
  }
  
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
      return `${amount}원이 입금되었습니다. 잔액: ${this.#balance}원`;
    }
    throw new Error('올바른 금액을 입력하세요.');
  }
  
  withdraw(amount) {
    if (!this.#validateAmount(amount)) {
      throw new Error('올바른 금액을 입력하세요.');
    }
    if (amount > this.#balance) {
      throw new Error('잔액이 부족합니다.');
    }
    this.#balance -= amount;
    return `${amount}원이 출금되었습니다. 잔액: ${this.#balance}원`;
  }
  
  get balance() {
    return this.#balance;
  }
  
  get accountNumber() {
    return this.#accountNumber;
  }
}

const account = new BankAccount('123-456-789', 10000);
console.log(account.deposit(5000));  // "5000원이 입금되었습니다. 잔액: 15000원"
console.log(account.withdraw(3000)); // "3000원이 출금되었습니다. 잔액: 12000원"
console.log(account.balance);        // 12000

// 프라이빗 필드에 직접 접근 불가
// console.log(account.#balance); // SyntaxError
```

## 클래스와 프로토타입의 관계

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person('Alice');

// 클래스는 실제로 함수이고 프로토타입을 사용
console.log(typeof Person);                    // 'function'
console.log(person instanceof Person);         // true
console.log(person.constructor === Person);    // true
console.log(person.greet === Person.prototype.greet); // true

// 프로토타입에 메서드 추가 가능
Person.prototype.sayBye = function() {
  return `Bye from ${this.name}`;
};

console.log(person.sayBye()); // "Bye from Alice"
```

## 클래스 믹스인 (Mixin)

```javascript
// 믹스인 함수들
const CanFly = {
  fly() {
    return `${this.name}이(가) 날아갑니다.`;
  }
};

const CanSwim = {
  swim() {
    return `${this.name}이(가) 헤엄칩니다.`;
  }
};

// 믹스인을 적용하는 함수
function mixin(BaseClass, ...mixins) {
  mixins.forEach(mixin => {
    Object.assign(BaseClass.prototype, mixin);
  });
  return BaseClass;
}

class Bird {
  constructor(name) {
    this.name = name;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

// 믹스인 적용
const FlyingBird = mixin(Bird, CanFly);
const SwimmingFish = mixin(Fish, CanSwim);

const eagle = new FlyingBird('독수리');
const salmon = new SwimmingFish('연어');

console.log(eagle.fly());   // "독수리이(가) 날아갑니다."
console.log(salmon.swim()); // "연어이(가) 헤엄칩니다."

// 둘 다 할 수 있는 동물
class Duck extends Bird {}
mixin(Duck, CanFly, CanSwim);

const duck = new Duck('오리');
console.log(duck.fly());    // "오리이(가) 날아갑니다."
console.log(duck.swim());   // "오리이(가) 헤엄칩니다."
```

## 실제 활용 예제

```javascript
// 추상 클래스 패턴 (JavaScript에는 추상 클래스가 없으므로 시뮬레이션)
class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error('추상 클래스는 직접 인스턴스화할 수 없습니다.');
    }
    this.name = name;
  }
  
  // 추상 메서드 (서브클래스에서 반드시 구현해야 함)
  getArea() {
    throw new Error('getArea() 메서드를 구현해야 합니다.');
  }
  
  getPerimeter() {
    throw new Error('getPerimeter() 메서드를 구현해야 합니다.');
  }
  
  // 공통 메서드
  describe() {
    return `${this.name} - 넓이: ${this.getArea()}, 둘레: ${this.getPerimeter()}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('직사각형');
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('원');
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle(5, 3);
const circle = new Circle(4);

console.log(rect.describe());   // "직사각형 - 넓이: 15, 둘레: 16"
console.log(circle.describe()); // "원 - 넓이: 50.26548245743669, 둘레: 25.132741228718345"

// const shape = new Shape(); // 에러!
``` 