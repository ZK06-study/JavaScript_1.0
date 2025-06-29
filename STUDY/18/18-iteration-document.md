# 순회

반복 가능한 객체(iterable object)는 `for...of` 구문과 함께 ES2015에서 도입되었습니다. 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 `Symbol.iterator` 속성에 **특별한 형태의 함수**가 들어있다는 것입니다.

```js
const str = 'hello';
str[Symbol.iterator]; // [Function]
```

객체의 `Symbol.iterator` 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(iterable object) 혹은 줄여서 **iterable**이라 부르고, **해당 객체는 iterable protocol을 만족한다**고 말합니다. 이런 객체들에 대해서는 ES2015에서 추가된 다양한 기능들을 사용할 수 있습니다.

내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있습니다.

- `String`
- `Array`
- `TypedArray`
- `Map`
- `Set`

## Iterable의 사용

어떤 객체가 Iterable이라면, 그 객체에 대해서 아래의 기능들을 사용할 수 있습니다.

- `for...of` 루프
- spread 연산자 (`...`)
- 분해대입(destructuring assignment)
- 기타 iterable을 인수로 받는 함수

즉, **문자열에 대해서도 위 기능들을 사용할 수 있습니다.** 아래의 코드를 실행하고 그 결과를 직접 확인해보세요.

```js
// `for...of`
for (let c of 'hello') {
  console.log(c);
}

// spread 연산자
const characters = [...'hello'];

// 분해대입
const [c1, c2] = 'hello';

// `Array.from`은 iterable 혹은 array-like 객체를 인수로 받습니다.
Array.from('hello');
```

## Generator 함수

그러면 우리가 직접 iterable인 객체를 만들 수는 없을까요? 결론부터 말하면, iterable protocol을 구현하기만 하면 **어떤 객체든 iterable이 될 수 있습니다.**

Iterable을 구현하는 가장 쉬운 방법은 ES2015에 도입된 **generator 함수**를 사용하는 것입니다.[^1]

Generator 함수는 **iterable 객체를 반환하는 특별한 형태의 함수**입니다.

아래와 같은 문법을 통해 generator 함수를 정의할 수 있습니다.

```js
// generator 함수 선언하기
function* gen1() {
  // ...
}

// 표현식으로 사용하기
const gen2 = function* () {
  // ...
}

// 메소드 문법으로 사용하기
const obj = {
  * gen3() {
    // ...
  }
}
```

Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol을 만족합니다. 즉, `Symbol.iterator` 속성을 갖고 있습니다.

```js
function* gen1() {
  // ...
}

// `gen1`를 호출하면 iterable이 반환됩니다.
const iterable = gen1();

iterable[Symbol.iterator]; // [Function]
```

Generator 함수 안에서는 `yield`라는 특별한 키워드를 사용할 수 있습니다. Generator 함수 안에서 `yield` 키워드는 `return`과 유사한 역할을 하며, iterable의 기능을 사용할 때 **`yield` 키워드 뒤에 있는 값들을 순서대로 넘겨줍니다.**

```js
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

// 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen()) {
  console.log(n);
}
```

`yield*` 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있습니다.

```js
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

function* numberGen2() {
  yield* numberGen();
  yield* numberGen();
}

// 1, 2, 3, 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen2()) {
  console.log(n);
}
```

이제 조금 더 흥미로운 generator 함수를 만들어 보겠습니다. `yield` 키워드를 제외하면, generator 함수 내부의 동작 방식은 일반적인 함수와 별반 다르지 않습니다. 즉, 다른 함수에서 할 수 있는 일이라면 generator 함수 안에서도 모두 할 수 있습니다.

```js
// 등차수열 생성하기
function* range(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// 피보나치 수열 생성하기
function* fibonacci(count = Infinity) {
  let x = 1;
  let y = 1;
  for (let i = 0; i < count; i++) {
    yield x;
    [x, y] = [y, x + y];
  }
}

// 하나의 항목을 계속 넘겨주기
function* repeat(item, count = Infinity) {
  for (let i = 0; i < count; i++) {
    yield item;
  }
}

// 여러 요소를 반복해서 넘겨주기
function* repeatMany(array) {
  while (true) {
    for (let item of array) {
      yield item;
    }
  }
}
```




Generator 함수를 사용할 때 주의할 점이 있습니다.

- Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있습니다.[^2]
- Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없습니다.

```js
// Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있습니다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();

for (let n of iter) {
  // 잘 출력됩니다.
  console.log(n);
}
for (let n of iter) {
  // `iter`는 한 번 사용되었으므로, 이 코드는 실행되지 않습니다.
  console.log(n);
}
```

```js
// Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없습니다.
function* gen2() {
  // 아예 문법 오류가 납니다. (Unexpected token)
  function fakeGen() {
    yield 1;
    yield 2;
    yield 3;
  }
  fakeGen();
}
```

## Iterator Protocol

이제 iterable의 동작 원리를 살펴보겠습니다. (여기서부터는 말이 조금 어렵습니다. **iterable과 iterator를 잘 구분하세요!**)

앞에서 'iterable 객체는 iterable protocol을 만족한다. 즉, `Symbol.iterator` 속성에 **특별한 형태의 함수가 저장되어 있다**'고 했습니다.

Iterable protocol을 만족하려면, `Symbol.iterator` 속성에 저장되어 있는 함수는 **iterator** 객체를 반환해야 합니다.

Iterator 객체는 아래의 특별한 조건을 만족하는 객체입니다.

- Iterator는 `next`라는 메소드를 갖습니다.
- `next` 메소드는 다음 두 속성을 갖는 객체를 반환해야 합니다.
  - `done` - 반복이 모두 끝났는지를 나타냅니다.
  - `value` - 현재 순서의 값을 나타냅니다.

위 조건을 **iterator protocol**이라고 합니다.

조금 어렵나요? `next`를 직접 호출해보면 감이 올 것입니다.

```js
// 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
const strIterator = 'go'[Symbol.iterator]();
strIterator.next(); // { value: 'g', done: false }
strIterator.next(); // { value: 'o', done: false }
strIterator.next(); // { value: undefined, done: true }
strIterator.next(); // { value: undefined, done: true }

// generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
function* gen() {
  yield 1;
  yield 2;
}
const genIterator = gen()[Symbol.iterator]();
genIterator.next(); // { value: 1, done: false }
genIterator.next(); // { value: 2, done: false }
genIterator.next(); // { value: undefined, done: true }
genIterator.next(); // { value: undefined, done: true }
```

Iterable protocol과 iterator protocol을 모두 이해하셨다면, 이제 직접 iterable을 만들 수 있습니다. 앞의 예제에 있었던 `range` 함수를 generator 함수를 사용하지 않고 똑같이 구현해보겠습니다.

```js
function range(start = 0, end = Infinity, step = 1) {
  // `range` 함수는 iterable을 반환합니다.
  return {
    currentValue: start,
    [Symbol.iterator]() {
      // iterable의 `Symbol.iterator` 메소드는 iterator를 반환해야 합니다.
      return {
        next: () => {
          if (this.currentValue < end) {
            const value = this.currentValue;
            this.currentValue += step;
            return {
              done: false,
              value
            }
          } else {
            return {
              done: true
            }
          }
        }
      };
    }
  }
}
```

Generator 함수를 사용했을 때보다 훨씬 복잡해졌습니다. 이 때문에 iterator protocol을 직접 구현하는 대신 generator 함수를 사용하는 경우가 많습니다. 다만, `next` 메소드를 사용하면 iterable을 세부적으로 제어할 수 있으므로, iterator 대해서 알아둘 필요는 있습니다.

## Generator와 Iterator

Generator 함수로부터 만들어진 객체는 일반적인 iterable처럼 쓸 수 있지만, iterator와 관련된 특별한 성질을 갖고 있습니다.

첫 번째로, generator 함수로부터 만들어진 객체는 **iterable protocol과 iterator protocol을 동시에 만족합니다.**

```js
function* gen() {
  // ...
}

const genObj = gen();
genObj[Symbol.iterator]().next === genObj.next; // true
```

즉, `Symbol.iterator`를 통해 iterator를 생성하지 않고도 바로 `next`를 호출할 수 있습니다.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();

iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: false }
iter.next(); // { value: 3, done: false }
iter.next(); // { value: undefined, done: true }
```

두 번째로, generator 함수 안에서 `return` 키워드를 사용하면 반복이 바로 끝나면서 `next` 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장됩니다. 다만, `return`을 통해 반환된 값이 반복 절차에 포함되지는 않습니다.

```js
function* gen() {
  yield 1;
  return 2; // generator 함수는 여기서 종료됩니다.
  yield 3;
}

const iter = gen();

iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: true }
iter.next(); // { value: undefined, done: true }

// `1`만 출력됩니다.
for (let v of gen()) {
  console.log(v);
}
```

세 번째로, generator 함수로부터 생성된 객체의 `next` 메소드에 인수를 주어서 호출하면, generator 함수가 멈췄던 부분의 `yield` 표현식의 결과값은 앞에서 받은 인수가 됩니다!

```js
function* gen() {
  const received = yield 1;
  console.log(received);
}

const iter = gen();
iter.next(); // { value: 1, done: false }

// 'hello'가 출력됩니다.
iter.next('hello'); // { value: undefined, done: true }
```

Generator 함수의 이런 성질은 비동기 프로그래밍을 위해 활용되기도 합니다. 이에 대한 자세한 내용은 [비동기 프로그래밍](./285-async.md) 챕터에서 다룹니다.

## Generator Examples

위에서 배웠던 성질들을 활용해서, 다른 iterable을 활용하는 몇 개의 generator 함수 예제를 작성해봤습니다.

```js
// 각 항목을 변환한 후 넘겨주기
function* map(iterable, mapper) {
  for (let item of iterable) {
    yield mapper(item);
  }
}

// 각 순서까지의 누적값을 넘겨주기
function* reduce(iterable, reducer, initial) {
  let acc = initial;
  for (let item of iterable) {
    acc = reducer(acc, item);
    yield acc;
  }
}

// 조건에 만족하는 항목만 넘겨주기
function* filter(iterable, predicate) {
  for (let item of iterable) {
    if (predicate(item)) {
      yield item;
    }
  }
}

// 여러 iterable을 연결하기
function* concat(iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

// 앞쪽 몇 개의 항목만 넘겨주기
function* take(iterable, count = Infinity) {
  const iterator = iterable[Symbol.iterator]();
  for (let i = 0; i < count; i++) {
    // `yield*`와는 다르게, iterator의 `next` 메소드를 이용하면 iterable의 일부만 가져올 수 있습니다.
    const {value, done} = iterator.next();
    if (done) break;
    yield value;
  }
}
```

위 generator 함수들이 어떻게 구현되었는지 파악해보세요. 그리고 위 generator 함수들을 이용해서 iterable이 제공하는 여러 기능들을 사용해보세요.

[^1]: Generator 함수로부터 생성된 객체를 'generator 객체'라고 부르기도 합니다만, 여기서는 혼동을 피하기 위해 generator라는 용어를 '함수'의 의미로만 사용하겠습니다.
[^2]: 이는 모든 iterable에 해당되는 사항은 아닙니다. 문자열이나 배열 역시 iterable이지만, 횟수에 제한 없이 사용될 수 있습니다.
