# 10. 객체 - 퀴즈

## 객관식 문제

### 1. 객체의 속성에 접근하는 방법이 아닌 것은?
a) 점 표기법 (`obj.property`)
b) 대괄호 표기법 (`obj['property']`)
c) 소괄호 표기법 (`obj(property)`)
d) 계산된 속성명 (`obj[variable]`)

### 2. 객체의 속성으로 함수를 사용할 때 이를 무엇이라고 하는가?
a) 프로퍼티
b) 메소드
c) 함수
d) 액션

### 3. `this` 키워드가 가리키는 것은?
a) 전역 객체
b) 함수 자체
c) 메소드를 호출한 객체
d) 부모 객체

### 4. 프로토타입 상속에 대한 설명으로 옳지 않은 것은?
a) 한 객체에서 다른 객체의 기능을 가져와 사용할 수 있다
b) `Object.create()`로 프로토타입을 지정할 수 있다
c) 프로토타입 체인을 통해 속성을 찾는다
d) 모든 객체는 자동으로 서로의 프로토타입이 된다

### 5. `new` 키워드와 함께 사용하는 함수를 무엇이라고 하는가?
a) 메소드
b) 생성자
c) 프로토타입
d) 인스턴스

### 6. `instanceof` 연산자의 역할은?
a) 객체의 타입을 변경한다
b) 새로운 인스턴스를 생성한다
c) 객체가 특정 생성자의 인스턴스인지 확인한다
d) 프로토타입을 설정한다

## 단답형 문제

### 7. 다음 코드에서 `person.name`의 값은?
```js
const person = {
  name: '홍길동',
  age: 25
};
```

### 8. `delete` 연산자의 역할은?

### 9. `'name' in person`이 `true`를 반환하는 조건은?

### 10. 생성자의 `prototype` 속성에 자동으로 생성되는 특별한 속성의 이름은?

## 서술형 문제

### 11. 프로토타입 체인의 동작 원리를 설명하고, 속성을 찾는 과정을 서술하시오.

### 12. 객체 리터럴과 생성자 함수를 이용한 객체 생성 방법의 차이점과 각각의 장단점을 설명하시오.

### 13. 정적 메소드(static method)와 인스턴스 메소드의 차이점을 설명하고 각각의 사용 사례를 제시하시오.

## 코딩 문제

### 14. 다음 요구사항에 따라 객체를 생성하시오.
- 속성: name(이름), age(나이), city(도시)
- 메소드: introduce() - 자기소개 문자열 반환

### 15. `Person` 생성자 함수를 작성하고 프로토타입에 `greet` 메소드를 추가하시오.

### 16. 상속을 구현하는 코드를 작성하시오.
- `Animal` 생성자: name 속성
- `Dog` 생성자: Animal을 상속, breed 속성 추가
- `bark` 메소드를 Dog 프로토타입에 추가

### 17. 객체의 모든 속성 이름을 배열로 반환하는 함수를 작성하시오.

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 설명하시오.
```js
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;

console.log(child.a);
console.log(child.b);
console.log('a' in child);
console.log(child.hasOwnProperty('a'));
```

### 19. `this` 바인딩이 다르게 동작하는 경우들을 예제와 함께 설명하시오.

### 20. 팩토리 함수 패턴과 생성자 함수 패턴의 차이점을 코드 예제와 함께 설명하시오.

---

## 정답

### 객관식 정답
1. c) 소괄호 표기법 (`obj(property)`)
2. b) 메소드
3. c) 메소드를 호출한 객체
4. d) 모든 객체는 자동으로 서로의 프로토타입이 된다
5. b) 생성자
6. c) 객체가 특정 생성자의 인스턴스인지 확인한다

### 단답형 정답
7. `'홍길동'`
8. 객체의 속성을 삭제한다
9. `person` 객체에 `name` 속성이 존재할 때
10. `constructor`

### 서술형 정답
11. 객체의 속성에 접근할 때 해당 객체에서 먼저 찾고, 없으면 프로토타입 객체에서 찾고, 계속해서 프로토타입의 프로토타입을 따라 올라가며 찾는다. 최종적으로 `null`에 도달할 때까지 찾지 못하면 `undefined`를 반환한다.

12. 객체 리터럴은 단일 객체 생성에 간단하지만 재사용성이 떨어진다. 생성자 함수는 같은 구조의 여러 객체를 효율적으로 생성할 수 있고 프로토타입을 통한 메소드 공유가 가능하다.

13. 정적 메소드는 생성자 함수 자체의 속성으로 정의되어 인스턴스와 무관한 일반적인 기능을 제공하고(예: `Array.isArray`), 인스턴스 메소드는 특정 인스턴스의 데이터를 조작한다(예: `array.push`).

### 코딩 정답
14.
```js
const person = {
  name: '홍길동',
  age: 25,
  city: '서울',
  introduce() {
    return `안녕하세요, 저는 ${this.city}에 사는 ${this.age}살 ${this.name}입니다.`;
  }
};
```

15.
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `안녕하세요, 저는 ${this.name}입니다.`;
};
```

16.
```js
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return `${this.name}이(가) 멍멍!`;
};
```

17.
```js
function getPropertyNames(obj) {
  return Object.keys(obj);
}

// 또는 상속된 속성까지 포함
function getAllPropertyNames(obj) {
  const props = [];
  for (let prop in obj) {
    props.push(prop);
  }
  return props;
}
```

### 응용 정답
18.
```js
console.log(child.a);           // 1 (프로토타입에서 찾음)
console.log(child.b);           // 2 (자신의 속성)
console.log('a' in child);      // true (프로토타입 포함 검사)
console.log(child.hasOwnProperty('a')); // false (자신의 속성만 검사)
```

19.
```js
const obj = {
  name: 'Object',
  method: function() { return this.name; },
  arrow: () => this.name
};

obj.method();           // 'Object' (obj가 this)
const fn = obj.method;
fn();                   // undefined (전역 객체가 this)
obj.arrow();            // undefined (화살표 함수는 this 바인딩 없음)
```

20.
```js
// 팩토리 함수 패턴
function createPerson(name) {
  return {
    name: name,
    greet: function() {
      return `Hello, ${this.name}`;
    }
  };
}

// 생성자 함수 패턴  
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const person1 = createPerson('Alice');  // 일반 함수 호출
const person2 = new Person('Bob');      // new 키워드 필요
```

팩토리 함수는 `new` 없이 호출하지만 매번 새로운 메소드를 생성하고, 생성자 함수는 `new`가 필요하지만 프로토타입으로 메소드를 공유하여 메모리 효율적이다.