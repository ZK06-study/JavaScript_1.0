# null과 undefined

JavaScript에는 '없음'를 나타내는 값이 두 개 있는데, 바로 `null`와 `undefined`입니다. 두 값의 의미는 비슷하지만, 각각이 사용되는 목적과 장소가 다릅니다.

JavaScript는 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 `undefined`를 반환합니다.

```js
let foo;
foo // undefined

const obj = {};
obj.prop; // undefined
```

`null`은 '객체가 없음'을 나타냅니다. 실제로 `typeof` 연산을 해보면 아래와 같은 값을 반환합니다.

```js
typeof null // 'object'
typeof undefined // 'undefined'
```

그렇다면 개발자의 입장에서 **'없음'**을 저장하기 위해 둘 중 어떤 것을 써야 할까요? `undefined`를 쓴다고 가정해보면, 아래와 같은 코드는 그 의미가 불분명해집니다.

```js
let foo; // 값을 대입한 적 없음
let bar = undefined; // 값을 대입함
foo; // undefined
bar; // undefined (??)
let obj1 = {}; // 속성을 지정하지 않음
let obj2 = {prop: undefined}; // 속성을 지정함
obj1.prop; // undefined
obj2.prop; // undefined (??)
```

비록 `undefined`가 '없음'을 나타내는 값일지라도, 대입한 적 없는 변수 혹은 속성과, 명시적으로 '없음'을 나타내는 경우를 **구분**을 할 수 있어야 코드의 의미가 명확해 질 것입니다. **프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용**하는 것이 좋습니다.

다만, 객체를 사용할 때 어떤 속성의 부재를 `null`을 통해서 나타내는 쪽보다는, 그냥 그 속성을 정의하지 않는 방식이 간편하므로 더 널리 사용됩니다.

```js
// 이렇게 하는 경우는 많지 않습니다.
{
  name: 'Seungha',
  address: null
}

// 그냥 이렇게 하는 경우가 많습니다.
{
  name: 'Seungha'
}

// 어쨌든 이렇게 하지는 말아주세요.
{
  name: 'Seungha',
  address: undefined
}
```

## Null Check

`null`이나 `undefined`는 어떤 변수에도, 어떤 속성에도 들어있을 수 있기 때문에 우리는 코드를 짤 때 값이 있는 경우와 없는 경우 (즉 `null` 혹은 `undefined`인 경우)를 모두 고려해서 코드를 짜야 할 필요가 있습니다. 어떤 값이 `null` 혹은 `undefined`인지 확인하는 작업을 **null check**라고 합니다. null check는 간단히 등호를 이용해서 할 수 있습니다.

```js
function printIfNotNull(input) {
  if (input !== null && input !== undefined) {
    console.log(input);
  }
}
```

그런데 매 번 위처럼 긴 비교를 해야 한다는 것은 골치아픈 일입니다. 사실은 위 `if` 구문 안에 있는 식을 다음과 같이 줄여 쓸 수 있습니다.

```js
// 아래 세 개의 식은 완전히 같은 의미입니다.
input !== null && input !== undefined;
input != null;
input != undefined;

// 아래 세 개의 식은 완전히 같은 의미입니다.
input === null || input === undefined;
input == null;
input == undefined;
```

이제까지 세 글자 짜리 등호만을 소개했는데, 사실 JavaScript에는 **두 글자 짜리 등호**도 있습니다. 각각의 공식적인 명칭은 **strict equality** comparison operator, **abstract equality** comparison operator 입니다. 이름에서도 알 수 있듯이, 대개 `===`는 값이 정확히 같을 때 `true`라는 결과값을 반환하고, `==`는 그렇지 않을 때가 많습니다. 그래서 보통의 경우 `===`를 사용하는 것이 권장되는 편입니다.

다만 null check를 할 때 만큼은 `==`를 쓰는 것이 편리합니다. 아래 예제를 통해 설명하겠습니다.

`==`와 `===` 두 연산자는 `null`과 `undefined`에 대해서 아래와 같이 동작합니다.

```js
null === undefined; // false
null == undefined;  // true

null == 1       // false
null == 'hello' // false
null == false   // false

undefined == 1       // false
undefined == 'hello' // false
undefined == false   // false
```

즉, `==` 연산자는 한 쪽 피연산자에 `null` 혹은 `undefined`가 오면, 다른 쪽 피연산자에 `null` 혹은 `undefined`가 왔을 때만 `true`를 반환하고, 다른 모든 경우에 `false`를 반환합니다.

따라서 null check를 할 때 만큼은 `==`를 사용하는 것이 편합니다. 다른 모든 경우에는 `===`를 사용하는 것이 좋습니다.

`===`와 `==`에 대한 자세한 내용은 [연산자 더 알아보기](./245-operator-in-depth.html) 챕터에서 다룹니다. 