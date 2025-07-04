# 기타

```js
function Person() {
  if (new.target) {
    console.log('생성자로 호출되었습니다.');
  } else {
    console.log('생성자로 호출되지 않았습니다.');
  }
}

new Person(); // 생성자로 호출되었습니다.
Person(); // 생성자로 호출되지 않았습니다.
```

이 기능을 이용해, 실수로 `new`를 빠트렸을 때도 문제없이 객체가 생성되도록 코드를 작성할 수 있습니다.

```js
function Person(name) {
  if (!new.target) {
    // `new` 없이 호출되면, 직접 객체를 생성해 반환합니다.
    return new Person(name);
  } else {
    this.name = name;
  }
}
```

### 객체 - instanceof

앞에서 봤던 `instanceof` 연산자의 동작은 사실 생각보다 조금 복잡합니다. `instanceof` 연산자는 **생성자의 `prototype` 속성**이 **객체의 프로토타입 체인에 등장하는지**를 검사합니다. 그래서, 특별한 경우가 아니라면 생성자를 통해 생성된 객체는 `Object` 생성자의 인스턴스이기도 합니다.

```js
function Person() {}
const person = new Person();
person1 instanceof Person; // true
person instanceof Object; // true
```
