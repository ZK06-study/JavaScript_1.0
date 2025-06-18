# 14. 객체 더 알아보기

## 속성 정의하기

### 속성 접근법
```javascript
const obj = {
  name: 'Alice',
  age: 30,
  'special-key': 'value' // 특수 문자가 있는 키
};

// 점 표기법
console.log(obj.name); // 'Alice'

// 대괄호 표기법
console.log(obj['age']); // 30
console.log(obj['special-key']); // 'value'

// 변수를 사용한 접근
const key = 'name';
console.log(obj[key]); // 'Alice'
```

### 속성 추가/수정/삭제
```javascript
const person = { name: 'Bob' };

// 속성 추가
person.age = 25;
person['city'] = 'Seoul';

// 속성 수정
person.name = 'Charlie';

// 속성 삭제
delete person.age;

console.log(person); // { name: 'Charlie', city: 'Seoul' }
```

## 메서드

### 일반 메서드
```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
  
  // 화살표 함수는 this가 다르게 동작
  multiply: (a, b) => a * b
};
```

### this 키워드
```javascript
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // "Hello, I'm Alice"

// this 바인딩 주의사항
const greetFunc = person.greet;
greetFunc(); // this가 undefined (엄격 모드) 또는 window
```

## 생성자 함수

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}

const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

alice.greet(); // "Hello, I'm Alice"
```

### new.target
```javascript
function Person(name) {
  if (!new.target) {
    return new Person(name); // new 없이 호출되면 자동으로 new 추가
  }
  this.name = name;
}

const person1 = new Person('Alice');
const person2 = Person('Bob'); // new 없어도 동작
```

## 프로토타입 (Prototype)

### 프로토타입 체인
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name); // 부모 생성자 호출
  this.breed = breed;
}

// 프로토타입 상속
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // "Buddy makes a sound"
myDog.bark(); // "Buddy barks!"
```

## 객체 지향 프로그래밍

### 캡슐화 (Encapsulation)
```javascript
function BankAccount(balance) {
  let _balance = balance; // 프라이빗 변수
  
  return {
    deposit(amount) {
      if (amount > 0) {
        _balance += amount;
      }
    },
    
    withdraw(amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
      }
    },
    
    getBalance() {
      return _balance;
    }
  };
}

const account = BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
```

### 상속 (Inheritance)
```javascript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function() {
  console.log(`${this.type} is starting...`);
};

function Car(brand, model) {
  Vehicle.call(this, 'Car');
  this.brand = brand;
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log('Beep beep!');
};

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // "Car is starting..."
myCar.honk(); // "Beep beep!"
```

## 내장 객체 활용

### Object 메서드
```javascript
const obj = { a: 1, b: 2, c: 3 };

// 키 배열
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// 값 배열
console.log(Object.values(obj)); // [1, 2, 3]

// [키, 값] 쌍 배열
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// 객체 복사
const copy = Object.assign({}, obj);
const spread = { ...obj }; // 스프레드 문법 사용
```

### 속성 설명자 (Property Descriptor)
```javascript
const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: false,    // 수정 불가
  enumerable: true,   // 열거 가능
  configurable: false // 설정 변경 불가
});

obj.name = 'Bob'; // 무시됨 (엄격 모드에서는 에러)
console.log(obj.name); // 'Alice'
```

### getter와 setter
```javascript
const person = {
  _name: '',
  
  get name() {
    return this._name.toUpperCase();
  },
  
  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    }
  }
};

person.name = 'alice';
console.log(person.name); // 'ALICE'
```

## 객체 순회

### for...in 루프
```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

### Object 메서드와 forEach
```javascript
Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`);
});

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

## 객체 검사

### 속성 존재 확인
```javascript
const obj = { name: 'Alice', age: 30 };

console.log('name' in obj); // true
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false (상속된 속성)
```

### instanceof 연산자
```javascript
function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
``` 