# 배열

배열은 JavaScript에 내장되어 있는 자료구조입니다. 배열은 객체의 일종이지만, 내부적으로 특별하게 취급되어 일반적인 객체들과는 다른 특징을 갖고 있습니다.

```js
typeof []; // 'object'
```

배열 안에 들어있는 값들을 **요소(element)** 혹은 **항목(item)**이라고 합니다. "배열 `[1, 2, 3]`은 세 개의 요소를 갖고 있다." 또는 "배열 `[1, 2, 3]`의 두 번째 항목은 `2`이다."와 같이 말할 수 있습니다. 객체와 배열의 가장 큰 차이점은, 배열의 각 요소 간에는 **순서가 있다**는 점입니다.

배열은 `Array` 생성자의 인스턴스입니다. 그러니까, **배열의 프로토타입으로 `Array.prototype` 객체가 지정되어 있습니다.** 이 객체에 여러 메소드들이 내장되어 있는데, 그 [목록](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#메서드)을 확인해보세요.

## 배열 생성하기

### 배열 리터럴

배열은 **배열 리터럴(array literal)**을 통해서 생성하는 것이 가장 쉽습니다.

```js
const empty = []; // 빈 배열
const numbers = [1, 2, 3]; // 숫자가 들어있는 배열
const strings = ['one', 'two', 'three']; // 문자열이 들어있는 배열
const objects = [{prop: 1}, {prop: 2}, {prop: 3}]; // 객체가 들어있는 배열
const mixed = [1, 'one', {prop: 1}, null]; // 아무거나(?) 들어있는 배열
```

### Array 생성자

**`Array` 생성자**를 통해서도 배열을 생성할 수 있습니다. `Array` 생성자는 주어지는 인수에 따라 두 가지 서로 다른 방식으로 동작을 합니다.

1. 수 타입의 인수가 하나 주어질 때는 해당 수 만큼의 길이를 갖는 비어있는[^1] 배열을 만들어 냅니다. 만약 인수가 양의 정수가 아니라면 [에러](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)를 냅니다.
2. 이 외에 다른 모양으로 인수가 주어지면 그 인수들을 요소로 갖는 배열을 생성합니다.

```js
new Array(1); // [empty]
new Array(1000); // [empty × 1000]

new Array(1, 2, 3); // [1, 2, 3]
```

### Array.of

이렇게 일관적이지 못한 생성자의 동작방식 때문에, ES2015에 `Array.of` 정적 메소드가 추가되었습니다. 이 메소드는 위의 2번 방식으로만 동작합니다. 따라서, **`Array` 생성자를 사용할 때에는 1번 방식으로만 사용하고, 2번 방식의 코드를 작성할 때는 생성자 대신 `Array.of` 정적 메소드를 사용하세요.**

```js
new Array(1, 2, 3); // 이렇게 하지 마세요!
Array.of(1, 2, 3) // 대신 이렇게 하세요.

// `Array.of` 정적 메소드는 인수가 하나이더라도 그 인수를 요소로 갖는 배열을 반환합니다.
Array.of(1); // [1]

// 생성자는 이런 용도로만 사용하세요.
new Array(1000); // [empty × 1000]
```

### Array.from

JavaScript에는 **유사 배열 객체(array-like object)**와 **iterable**이라는 개념이 있어서, 이에 해당하는 값들은 `Array.from` 정적 메소드를 통해 배열로 쉽게 변환될 수 있습니다. 앞의 두 개념에 대해서는 [Iterable](./260-iteration.md) 챕터에서 자세히 다룹니다.

```js
// `string` 타입은 래퍼 객체를 통해 iterable로 다루어질 수 있습니다.
Array.from('hello'); // ["h", "e", "l", "l", "o"]
```

## 요소 읽기

배열의 각 요소는 **인덱스(index)**를 이용해 읽어올 수 있습니다. 인덱스는 객체의 속성 이름과 비슷한 역할을 하지만, **0 이상의 정수**만이 배열의 인덱스가 될 수 있습니다.[^2]

배열을 생성하면, 배열 안에 들어있는 각 요소는 순서대로 0부터 시작하는 인덱스를 갖게 됩니다. 대문자 표기법에 인덱스를 사용함으로써 원하는 요소를 가져올 수 있습니다.

```js
const arr = ['one', 'two', 'three'];
arr[0]; // 'one'
arr[1]; // 'two'
arr[2]; // 'three'
arr[3]; // undefined
```

위에서 볼 수 있듯이, 인덱스는 0부터 시작합니다.[^3] 즉, **첫 번째 요소를 가리키는 인덱스는 1이 아니라 0입니다.** 헷갈리지 않도록 주의하세요.

## 요소 수정하기

객체와 마찬가지로 대괄호 표기법을 이용해서 요소를 수정할 수 있습니다.

```js
const arr = [false, false, false];
arr[1] = true;
console.log(arr); // [ false, true, false ]
```

`fill` 메소드를 사용하면 한꺼번에 많은 요소를 같은 값으로 바꾸어 버릴 수도 있습니다.

```js
const arr = [1, 2, 3, 4, 5];

// 전체를 0으로 채우기
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0 ];

// 인덱스 2와 4 사이를 1로 채우기
arr.fill(1, 2, 4);
console.log(arr); // [ 0, 0, 1, 1, 0 ];
```

`Array` 생성자와 `fill` 메소드를 사용하면, 큰 배열을 만들고 값을 채워넣는 일을 쉽게 할 수 있습니다.

```js
new Array(1000); // [empty × 1000]
new Array(1000).fill(5); // [5, 5, 5, 5, ...]
```

## 배열의 끝 부분에서 요소를 추가/제거하기

`push` 메소드와 `pop` 메소드를 사용하면 **배열의 끝 부분에서** 요소를 추가하거나 제거할 수 있습니다.

```js
const arr = [];
arr.push('one'); // 1 (요소가 추가된 후의 배열의 길이를 반환)
arr.push('two', 'three'); // 3

console.log(arr); // [ 'one', 'two', 'three' ]

// 배열의 요소 삭제하기
arr.pop(); // 'three'
arr.pop(); // 'two'
arr.pop(); // 'one'
arr.pop(); // undefined (더 이상 배열에 요소가 남아있지 않으면 `undefined`를 반환)
```

## 배열의 시작 부분에서 요소를 추가/제거하기

반대로 `unshift`, `shift` 메소드를 사용해 **배열의 시작 부분에서** 요소를 추가하거나 제거할 수도 있습니다.

```js
const arr = [];
arr.unshift(1); // 1 (요소가 추가된 후의 배열의 길이를 반환)
arr.unshift(2, 3); // 3

console.log(arr); // [ 2, 3, 1 ]

// 배열의 요소 삭제하기
arr.shift(); // 2
arr.shift(); // 3
arr.shift(); // 1
arr.shift(); // undefined (더 이상 배열에 요소가 남아있지 않으면 `undefined`를 반환)
```

## 요소를 배열 중간에 삽입하기

`splice` 메소드를 사용하면 배열에 속해있는 연속된 여러 요소, 즉 배열의 일부분을 통째로 바꿔버릴 수 있습니다.

```js
let arr = [1, 2, 3, 4, 5];

// 인덱스 `1`인 요소부터 `3`개을 바꿔치기 합니다.
// `splice` 메소드는 바꿔치기를 통해 제거된 요소들을 반환합니다.
arr.splice(1, 3, 'two', 'three', 'four'); // [2, 3, 4]
console.log(arr); // [ 1, 'two', 'three', 'four', 5]
```

`splice`로 반드시 같은 개수의 요소만 바꿔치기할 수 있는 건 아닙니다.

```js
// 인덱스 `1`인 요소부터 `3`개를 바꿔치기 합니다.
// `3`개를 꺼낸 자리에 하나의 요소를 삽입합니다.
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 'three'); // [2, 3, 4]
console.log(arr); // [ 1, 'three', 5]
```

`splice`의 뒤쪽 인수를 생략하면, 요소를 제거할 뿐 배열에 아무것도 삽입하지 않습니다.

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 3); // [2, 3, 4]
console.log(arr); // [ 1, 5]
```

이렇게 `splice` 메소드를 **배열의 중간 부분에 있는 요소를 제거**하는 데도 활용할 수 있습니다.

`splice`의 두 번째 인수로 0을 사용하면, 특정 위치에 여러 요소를 삽입할 수도 있습니다.

```js
// 인덱스가 `1`인 요소 앞에 여러 요소를 추가합니다.
const arr = [1, 5];
arr.splice(1, 0, 2, 3, 4); // []
console.log(arr); // [ 1, 2, 3, 4, 5]
```

## 배열 뒤집기

배열의 `reverse` 메소드를 호출하면 해당 배열을 거꾸로 뒤집어버립니다.

```js
const arr = [1, 2, 3];

// `reverse` 메소드는 `arr`을 뒤집은 후, `arr`을 그대로 반환합니다.
arr.reverse(); // [3, 2, 1]
console.log(arr); // [3, 2, 1]
```

## 배열 정렬하기

배열의 `sort` 메소드를 통해 원하는 방식대로 배열을 정렬할 수 있습니다.

```js
const arr = [3, 1, 4, 5, 2];

// `sort` 메소드는 `arr`을 비교 함수에 따라 정렬한 뒤, `arr`을 그대로 반환합니다.)
arr.sort((x, y) => x - y); // [1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

`sort` 메소드의 인수에는 **비교 함수**를 넘겨주어야 합니다. 비교 함수는 인수 두 개를 받아서, 아래의 조건에 따라 잘 정렬되도록 적절한 값을 반환해주어야 합니다.

---

만약 어떤 두 값 `a`, `b`에 대해서 비교 함수 `compare`를 `compare(a, b)`와 같이 호출했을 때:

- 음수를 반환하면, `a`가 `b` 앞에 오도록 정렬합니다.
- 0을 반환하면, `a`와 `b`를 같은 순서로 간주합니다.[^4]
- 양수를 반환하면, `b`가 `a` 앞에 오도록 정렬합니다.

---

따라서, 어떤 배열을 정렬할 때에는 **어떤 값을 기준으로 정렬할 지**를 생각해 본 다음, 정렬함수를 만들 때 **오름차순으로 정렬할 지, 내림차순으로 정렬할 지**를 생각해보면 됩니다. 예를 들어, **문자열의 길이를 기준으로 내림차순 정렬**을 하고 싶다면 아래와 같이 하면 됩니다.

```js
const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];
names.sort((x, y) => y.length - x.length);
console.log(names); // [ 'Kathleen', 'Denton', 'Bruce', 'Ebba' ]
```

여기서 주의할 점이 하나 있습니다. 비교 함수를 넘기지 않더라도 정렬이 잘 되는 것처럼 보일 수 있습니다.

```js
const arr = [3, 1, 4, 5, 2];
arr.sort(); // [1, 2, 3, 4, 5]
```

하지만 비교 함수를 인수로 넘겨주지 않으면, **`sort` 메소드는 먼저 요소를 전부 문자열로 변환한 후, 유니코드 코드포인트를 비교하는 방식으로 정렬을 합니다.** 따라서 기대했던 것과는 전혀 다른 결과가 나올 수 있으니, `sort` 함수를 사용할 때는 꼭 비교함수를 넘겨주세요.

```js
[20, 3, 100].sort(); // [100, 20, 3]
['abc', 'DEF', 'aBC'].sort(); // [ 'DEF', 'aBC', 'abc' ]

[20, 3, 100].sort((x, y) => x - y); // [3, 20, 100]
['abc', 'DEF', 'aBC'].sort((x, y) => x.localeCompare(y)); // [ 'abc', 'aBC', 'DEF' ]
```

## 배열의 길이

배열의 길이는 `length` 속성을 통해 쉽게 확인할 수 있습니다. 배열의 길이가 변함에 따라, `length` 속성의 값도 자동으로 달라집니다.

```js
const arr = [];
console.log(arr.length); // 0
arr.push(1, 2, 3);
console.log(arr.length); // 3
```

`length` 속성에 값을 대입해서 배열의 길이를 늘였다 줄였다 하는 것도 가능하지만, **이런 방식이 권장되지는 않습니다.**

```js
const arr = [];

// 배열의 길이 늘이기
arr.length = 10;
console.log(arr); // [empty × 10]

// 배열의 길이 줄이기 (줄어든 만큼 뒤쪽에 있는 요소들은 버려집니다.)
arr.fill(1);
arr.length = 2;
console.log(arr); // [1, 1]
```

## 배열 순회하기

배열의 각 요소를 차례대로 돌면서 요소에 대한 작업을 하는 것을 가지고 **순회(traverse)**라고 합니다. 배열을 순회하는 방법에는 여러 가지가 있습니다.

### `for` 구문

일단은 단순하게 `for` 루프를 사용해서 배열의 길이만큼 루프를 돌며, 인덱스를 통해 배열의 요소에 접근해 보겠습니다.

```js
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

위 방식은 전통적으로 많이 쓰이던 방식이었습니다. 하지만, ES5에 `forEach` 메소드가 추가되고, ES2015에 `for...of` 구문이 추가되면서 위 방식은 잘 쓰이지 않게 되었습니다.

### `forEach` 메소드

배열의 `forEach` 메소드를 사용하면, 배열의 각 요소에 대해 **함수**를 호출할 수 있습니다.

```js
const arr = [1, 2, 3];

arr.forEach(item => {
  console.log(`현재 요소 ${item}에 대해 함수가 실행되고 있습니다.`);
});
```

`for` 구문을 사용했을 때와 비교해보면, 읽기에 더 자연스러운 코드가 되었습니다.

`forEach` 메소드에 넘기는 함수에는 총 세 개의 인수가 들어옵니다. 첫 번째로는 현재 순회중인 배열의 **요소**, 두 번째로는 요소의 **인덱스**, 세 번째로는 순회중인 **배열**이 들어옵니다.

```js
const arr = [1, 2, 3];
arr.forEach((item, index, array) => {
  console.log(`현재 ${index + 1}번째 요소에 대해 함수가 실행되고 있습니다.`);
})
```

### `for...of` 구문

ES2015에 도입된 `for...of` 구문은, 역시 ES2015에 도입된 **iterable**을 순회하기 위해 사용할 수 있습니다. 배열 역시 iterable이므로, `for...of` 구문을 사용해 순회할 수 있습니다. Iterable에 대해서는 [Iterable](./260-iteration.md) 챕터에서 자세히 다룹니다.

```js
const arr = [1, 2, 3, 4, 5];

for (let item of arr) {
  console.log(item);
}
```

### 어떤 것을 써야 하나요?

단순히 배열을 순회하기 위한 목적이라면 **`for...of` 구문을 사용**하는 것이 코드의 간결성이나 속도 측면에서 유리합니다. 다만, 배열을 순회하면서 배열의 **인덱스가 필요한 경우**에는 `for...of` 구문을 사용할 수 없습니다. 이 때에는 `forEach` 메소드를 사용하면 되고, **코드의 실행 속도가 정말로 중요한 부분**에서는 역사와 전통의 `for` 구문을 사용하면 됩니다.[^5]

## 배열로부터 새로운 값 생성

배열을 다루다보면 배열로부터 다른 배열, 혹은 다른 값을 계산해내야 하는 작업을 많이 하게 됩니다. **배열을 순회하는 것만으로도 이런 작업들을 할 수는 있지만,** 배열에 내장된 메소드를 활용하면 **훨씬 더 간결한 코드로 같은 작업을** 할 수 있습니다.

아래 메소드들은 모두 **원본 배열에 아무런 영향을 미치지 않습니다.**

### slice

`slice` 메소드는 배열의 일부분에 해당하는 **새로운 배열**을 반환합니다.

```js
const arr = [1, 2, 3, 4, 5];

// 인덱스 2부터 인덱스 4 사이의 요소들을 가지고 새로운 배열을 생성
const newArr = arr.slice(2, 4); // [3, 4]

// newArr을 조작해도, 원본 배열에는 영향을 미치지 않습니다.
newArr[0] = 5;
console.log(newArr); // [5, 4]
console.log(arr); // [1, 2, 3, 4, 5]
```

첫 번째 인수의 기본값은 0, 두 번째 인수의 기본값은 배열의 `length` 속성입니다. 즉, 인수 없이 호출하면 배열 전체가 **복사**됩니다.

```js
const arr2 = arr.slice(); // [1, 2, 3, 4, 5];
```

다만, `slice`는 **얕은 복사(shallow copy)**를 하므로, 배열 안에 배열 또는 객체가 들어있을 때는 주의해서 사용해야 합니다. 얕은 복사에 대해서는 [객체 더 알아보기](./240-object-in-depth.md) 챕터에서 자세히 다룹니다.

### map

`map` 메소드는 배열의 **각 요소에 함수를 적용**해서, 그 반환값을 요소로 갖는 **새로운 배열**을 만듭니다. `forEach`와 비슷해 보이지만, 새로운 배열을 만든다는 점이 다릅니다.

```js
const arr = [1, 2, 3, 4, 5];

// `arr`의 각 요소를 제곱한 값으로 새 배열을 만듭니다.
const newArr = arr.map(item => item ** 2);
console.log(newArr); // [1, 4, 9, 16, 25]
```

`map` 역시 인수로 들어온 함수를 호출할 때 세 개의 인수를 넘깁니다. 이는 `forEach`와 똑같습니다.

```js
arr.map((item, index, array) => {
  return item * index;
}); // [0, 2, 6, 12, 20]
```

### concat

`concat` 메소드는 여러 배열을 연결해서 새 배열을 만들 때 사용됩니다.

```js
const arr = [1, 2];

arr.concat([3, 4], [5, 6], [7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### reduce

`reduce` 메소드는 모든 요소의 값을 **종합**해서 하나의 값으로 만드는 계산을 할 때 사용합니다.

```js
const arr = [1, 2, 3];

arr.reduce((acc, item) => acc + item, 0); // 6
```

위 코드에서 일어난 일을 순서대로 써보면 다음과 같습니다.

1. 초기값 `0`과 배열의 첫 번째 요소인 `1`을 인수로 해서 함수를 호출합니다. 즉, `acc` 매개변수에 `0`이 대입되고, `item` 매개변수에 `1`이 대입됩니다. 결과값은 `1`이 됩니다. 이 값을 **누적값(accumulator)**라고 부릅니다.
2. 누적값 `1`과 배열의 두 번째 요소인 `2`를 인수로 해서 함수를 호출합니다. 결과값 `3`이 다시 누적값이 됩니다.
3. 누적값 `3`과 배열의 세 번째 요소인 `3`을 인수로 해서 함수를 호출합니다. 결과값은 `6`입니다.
4. 더 이상 요소가 남아있지 않으므로 `reduce` 호출의 결과값은 `6`이 됩니다.

처음에는 어렵지만, 익숙해지면 `reduce`는 **배열에 대한 계산을 하는 만능 도구**로 사용할 수 있습니다. 실제로, 배열의 많은 메소드들이 `reduce`를 통해 다시 구현될 수 있습니다. 이는 연습문제로 남깁니다.

`reduce`에 주어지는 함수 역시 `forEach`나 `map`과 마찬가지로 여러 개의 인수를 받는데, 맨 앞에 누적값이 추가되어 `(누적값, 현재 요소, 인덱스, 배열)`와 같은 인수를 받습니다.

```js
const arr = ['one', 'two', 'three'];

arr.reduce((acc, item, index, array) => {
  return acc + `(${index}: ${item})`;
}, ''); // '(0: one)(1: two)(2: three)'
```

`reduce` 메소드에 초기값 인수를 주지 않으면, 첫 번째 인수가 초기값으로 지정되어 첫 번째 요소와 두 번째 요소에 대한 계산부터 시작합니다. 즉, 위 두 예제에서 초기값을 생략해도 같은 결과가 나옵니다. 다만, 배열의 요소가 하나 밖에 없다면 아래와 같이 계산이 수행되지 않고 첫 번째 요소가 그대로 반환되므로, **초기값은 항상 제공해주는 것이 좋습니다.**

```js
const arr = ['one'];

// 문자열의 길이를 모두 더하려고 했지만...
// 계산을 수행할 대상이 하나밖에 없어서 함수가 호출되지 못하고 결과값으로 'one'이 반환됩니다.
arr.reduce((acc, item) => {
  return acc + item.length;
}); // 'one'

// 초기값을 주면 계산이 제대로 수행됩니다.
arr.reduce((acc, item) => {
  return acc + item.length;
}, 0); // 3
```

마지막으로, 계산을 오른쪽부터 수행하는 `reduceRight` 메소드도 있으니 [확인](http://devdocs.io/javascript/global_objects/array/reduceright)해보세요.

### filter

`filter` 메소드를 통해 배열에서 원하는 요소만을 골라내어 새로운 배열을 생성할 수 있습니다. `filter` 메소드에는 진리값(boolean)을 반환하는 함수를 주어야 합니다. 이처럼 **진리값을 반환하는 함수**를 **predicate**이라고 합니다.

```js
const arr = [1, 2, 3, 4, 5];

// 짝수만 골라내기
arr.filter(item => item % 2 === 0); // [2, 4];
```

`filter`에 주어지는 함수 역시 `forEach`와 마찬가지로 `(현재 요소, 인덱스, 배열)`의 세 인수를 받습니다.

### join

`join` 메소드는 배열의 요소들을 문자열로 변환 후, 메소드에 주어진 구분자(separator)를 이용해 하나의 문자열로 결합하여 반환합니다.

```js
const arr = [1, 2, 3];

arr.join('&'); // '1&2&3'
```

구분자를 넘기지 않으면, `,` 문자가 구분자로 사용됩니다.

```js
const arr = [1, 2, 3];

arr.join(); // '1,2,3'
```

### 요소 찾기

`indexOf`와 `lastIndexOf` 메소드를 사용하면 특정 요소가 배열의 몇 번째에 위치하는 지를 알아낼 수 있습니다. `indexOf`는 배열의 왼쪽부터, `lastIndexOf`는 오른쪽부터 검색해서 처음 만나는 요소의 인덱스를 반환합니다. 만약 일치하는 요소가 없다면, 두 메소드 모두 `-1`을 반환합니다.

```js
const arr = ['a', 'b', 'c', 'b', 'a'];

arr.indexOf('b'); // 1
arr.lastIndexOf('b'); // 3

arr.indexOf('z'); // -1
arr.lastIndexOf('z'); // -1
```

두 메소드 모두 두 번째 인수로 **시작 인덱스**를 받습니다. 시작 인덱스가 주어지면 해당 인덱스부터 검사를 시작합니다.

```js
const arr = ['a', 'b', 'c', 'b', 'a'];

arr.indexOf('b', 2); // 3
arr.lastIndexOf('b', 2); // 1
```

`find` 메소드와 `findIndex` 메소드를 사용하면 특정 조건을 만족하는 요소를 찾을 수 있습니다. 두 메소드 모두 predicate을 이용해 왼쪽부터 검사해서 처음 만나는 요소를 찾습니다. `find`는 요소 자체를 반환하며, `findIndex`는 요소의 인덱스를 반환한다는 차이점이 있습니다. 조건을 만족하는 요소를 찾지 못하면, `find`는 `undefined`를, `findIndex`는 `-1`을 반환합니다.

```js
const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];

names.find(item => item.length < 6); // 'Ebba'
names.findIndex(item => item.length < 6); // 2

names.find(item => item.length > 8); // undefined
names.findIndex(item => item.length > 8); // -1
```

`forEach`와 마찬가지로, `find`와 `findIndex`에 주어지는 predicate에는 `(현재 요소, 인덱스, 배열)`의 세 인수가 넘겨집니다.

### 배열이 특정 조건을 만족하는지 판별하기

배열의 세 메소드 `includes`, `every`, `some`는 모두 배열이 특정 조건을 만족하는지를 나타내는 진리값을 반환합니다.

ES2016에서 도입된 `includes` 메소드는 배열이 특정 요소를 포함하고 있는지를 판별합니다. `indexOf`로도 비슷한 일을 할 수 있지만 `includes`가 진리값을 반환한다는 점에서 조금 더 편합니다. `includes` 메소드 역시 시작 인덱스를 인수로 받습니다.

```js
const arr = ['one', 'two', 'three'];

arr.includes('one'); // true
arr.includes('one', 1); // false
```

`every`는 predicate을 인수로 받아서, **모든 요소가 조건을 만족하는 지를 검사합니다.**

```js
const arr = ['one', 'two', 'three'];

arr.every(item => item.length > 2); // true
arr.every(item => item.length > 3); // false
```

`some`은 predicate을 인수로 받아서, **조건을 만족하는 요소가 하나라도 있는지 검사합니다.**

```js
const arr = ['one', 'two', 'three'];

arr.some(item => item.length > 3); // true
arr.some(item => item.length > 5); // false
```

`forEach`와 마찬가지로, `every`와 `some`에 주어지는 predicate에는 `(현재 요소, 인덱스, 배열)`의 세 인수가 넘겨집니다.

## 배열인지 아닌지 판별하기

어떤 값이 배열인지 아닌지 판별하기 위해서 `Array.isArray` 정적 메소드를 사용할 수 있습니다.[^6]

```js
Array.isArray([]); // true
Array.isArray({}); // false
Array.isArray('hello'); // false
```

## 문자열과 배열

문자열은 배열과 유사한 문법을 통해 다뤄질 수 있습니다. 그리고 문자열의 메소드 중에는 배열의 메소드 중 몇몇과 이름이 같고 완전히 같은 방식으로 동작하는 것들이 있습니다. [문자열 메소드 목록](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)을 확인해보세요.

```js
'hello'[0]; // 'h'
'hello'.slice(2, 4); // 'll'
for (let c of 'hello') {
  console.log(c);
}
```

## 다차원 배열 (Multidimensional Array)

컴퓨터를 사용하다보면 표 형태의 자료를 많이 다루게 됩니다. JavaScript에서는 표 형태의 자료를 간단히 나타내기 위해 **배열을 요소로 갖는 배열**을 사용할 수 있습니다.

```js
const table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

이렇게 배열 속에 배열이 중첩되어 있는 자료구조를 가지고 다차원 배열(multidimensional array)라고 합니다.

다차원 배열 속에 있는 요소를 다루기 위해서, 대문자 표기법을 연이어 사용할 수 있습니다.

```js
table[0][1]; // 2
table[2][0]; // 7
```

---

[^1]: 배열의 요소는 **비어있을 수 있습니다.** 이는 `undefined`와는 다릅니다. 비어있는 요소에 대해서는 `for...of`나 `forEach` 등의 메소드를 통해 순회를 하려고 해도 순회가 되지 않습니다. `Array` 생성자를 사용하거나, `length` 속성을 조작하거나, 배열의 길이을 넘어서는 인덱스를 사용해서 요소를 추가하려고 하면 비어있는 요소가 생기게 되고, 의도치 않은 동작을 할 수 있으므로 주의해야 합니다. 대부분의 경우 이와 같은 조작을 하지 않고도 프로그램을 짤 수 있습니다.
[^2]: 사실은, 배열도 객체이므로, 속성 접근자를 통해 배열의 요소에 접근할 때 **인덱스가 문자열로 변환되는 과정**을 거칩니다. 실제로 `[1, 2, 3]['1'] === 2`와 같이 배열의 인덱스가 들어가야 할 자리에 정수를 나타내는 문자열을 넣어도 잘 동작합니다.
[^3]: C 언어의 시초가 된 BCPL 언어에서는 배열이라는 자료구조가 [포인터](https://ko.wikipedia.org/wiki/%ED%8F%AC%EC%9D%B8%ED%84%B0_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)) 연산을 통해 구현되었기 때문에, 첫 번째 요소의 인덱스를 0으로 하는 편이 구현 상 자연스러운 방향이었습니다. 이것이 시초가 되어, 대부분의 범용 프로그래밍 언어에서는 0부터 시작하는 인덱스가 쓰이게 되었습니다. 다만, COBOL, Fortran, R, Matlab 등과 같이 주로 수학/과학 분야에서 쓰이는 프로그래밍 언어에서는 1부터 시작하는 인덱스도 사용되고 있습니다.
[^4]: 정확히 말하면, ECMAScript 표준에서는 정렬 알고리즘의 [안정성](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability), 즉 `a`와 `b` 중 어떤 것이 앞에 올 지에 대해서 아무것도 보장하지 않습니다. 즉, 같은 순서라고 판별된 두 요소의 정렬 전후의 순서가 뒤바뀔 수도 있다는 말이죠. 이런 정렬 방식을 불안정 정렬(unstable sort)이라고 합니다. 이와는 다르게, 원래 `a`가 앞에 있었다면 정렬 후에도 여전히 `a`가 앞에 있도록 보장해주는 정렬 방식을 안정 정렬(stable sort)이라고 합니다. 몇몇 브라우저들이 `Array.prototype.sort`를 내부적으로 안정 정렬로 구현해놓고 있긴 하지만, 대표적으로 Chrome이 불안정 정렬을 하고 있고, ECMAScript 표준이 보장해주는 것은 아니므로 속 편하게 불안정 정렬이라고 생각하고 프로그램을 작성하세요.
[^5]: 속도의 차이를 확인하시려면 [이 벤치마크](https://jsperf.com/for-of-vs-for-loop)와 [이 벤치마크](https://jsperf.com/for-vs-foreach/75)를 참고하세요.
[^6]: `arr instanceof Array`와 같이 할 수도 있다고 생각하실지 모르겠습니다. 하지만 `instanceof` 연산자를 속이는 것은 매우 쉬운 일이므로, 어떤 값이 배열인지 아닌지 판별하기 위해서는 꼭 용도에 맞는 `Array.isArray`를 사용하세요. 마치 배열처럼 보이고 배열처럼 사용할 수 있지만, 실제로는 배열이 아닌 객체를 만들 수도 있습니다. [이 링크](https://repl.it/@seungha/fake-array)의 코드를 가지고 시험해보세요.
