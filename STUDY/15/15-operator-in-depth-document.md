# 연산자 더 알아보기

## 표현식 (Expression)

코드 중에 **값으로 변환될 수 있는** 부분을 **표현식(expression)**이라고 부릅니다. 아래 목록은 표현식의 예입니다.

- 리터럴
  - `1`
  - `null`
  - `'hello'`
  - `{prop: 1}`
  - `[1, 2, 3]`
  - `function(x, y) { return x + y }`
  - `(x, y) => x + y`
- 연산자
  - `1 + 2`
  - `true && false`
  - `'prop' in obj`
  - `delete obj.prop`
  - `typeof null`
  - `obj instanceof Object`
  - `new Object()`
  - (`variable` 변수가 선언되어 있다면) `variable = 1`
- 기타
  - `this`
  - `variable` (변수)
  - `obj.prop` (속성)
  - `func()` (함수 호출)

표현식을 값으로 변환하기 위해 실제로 해당 표현식을 실행시키는 절차를 **평가(evaluation)**라고 합니다.

## Short-circuit Evaluation

피연산자가 두 개인 연산 중에, 값을 결정하기 위해 양쪽 피연산자 모두가 필요하지는 않은 경우가 있습니다. 아래 식에서는 `expression` 부분의 표현식이 평가될 필요가 없습니다. 그리고 JavaScript에서는 **실제로 `expression` 부분이 평가되지 않습니다.** 이런 평가 방식을 short-circuit evaluation이라고 합니다.

```js
false && expression
true || expression
0 ?? expression
```

세 연산자의 실제 동작 방식은 다음과 같습니다.

- `&&` - 왼쪽 피연산자를 평가해서 **falsy**이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.
- `||` - 왼쪽 피연산자를 평가해서 **truthy**이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.
- `??` - 왼쪽 피연산자를 평가해서 **null이나 undefined가 아니면**이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.

위 성질들을 이용해 **`if` 구문을 흉내낼 수 있습니다.**

```js
// `func1`과 `func2`는 동일하게 동작합니다.
function func1(cond) {
  if (cond) {
    console.log('조건을 만족합니다.');
  }
}

function func2(cond) {
  cond && console.log('조건을 만족합니다.');
}
```

```js
// `func1`과 `func2`는 동일하게 동작합니다.
function func1(arg) {
  if (!arg) {
    arg = 'hello';
  }
  console.log(arg)
}

function func2(arg) {
  arg = arg || 'hello';
  console.log(arg);
}
```

```js
// `func1`과 `func2`는 동일하게 동작합니다.
function func1(arg) {
  if (arg == null) {
    arg = 'hello';
  }
  console.log(arg)
}

function func2(arg) {
  arg = arg ?? 'hello';
  console.log(arg);
}
```

특히 `||` 연산자는 '기본 매개변수'(ES2015) 문법이 생기기 전까지 매개변수의 기본값을 지정하는 용도로 많이 사용됐습니다. `??` 연산자는 ES2020에 도입되었습니다.

위에서 볼 수 있듯이 short-circuit evaluation을 사용하면 코드의 길이가 줄어드는 효과가 있습니다. 다만 코드의 의미가 불명확해질 수 있고 논리적으로 놓치는 부분이 생길 수 있으니 주의해서 사용하세요.

## Optional chaining

여러번 중첩된 객체의 속성에 접근할 때, 특정 깊이에 중첩된 객체가 없을 수도 있다면 이를 고려해서 코드를 짜야합니다.
예를 들어 어떤 사람에 대한 정보를 다음과 같은 중첩된 객체로 가지고 있다고 가정해 보겠습니다.

```js
const person = {
  name: '준하',
  age: 28,
  company: {
    name: 'Hello World JS',
    office: {
      name: '판교 오피스',
      address: '경기도 성남시 분당구 판교동',
    }
  }
};
```

이때 준하의 회사의 주소에 접근하기 위해서는 다음과 같은 표현식을 작성할 수 있습니다.

```js
const address = person.company.office.address;
```

만약 준하가 아직 학생이어서 취업을 하지 않은 경우, 혹은 회사 주소를 입력하지 않은 경우, 다음과 같이 회사의 주소 정보를 가지지 않을 수 있습니다.

```js
// 회사 정보가 없음
const person = {
  name: '준하',
  age: 28,
};

// 회사 오피스 정보를 입력하지 않음
const person = {
  name: '준하',
  age: 28,
  company: {
    name: 'Hello World JS',
  }
};
```

이 때 그냥 `person.company.office.address` 에 접근하면 에러가 납니다!

```js
const address = person.company.office.address // Uncaught TypeError: Cannot read property 'office' of undefined
```

이 경우 회사의 주소에 접근하기 위해 중첩된 객체마다 속성에 데이터가 있는지 확인해야 합니다. 하나하나 if 문으로 null check를 할 수도 있지만, 앞서 언급한 `&&` 연산자를 사용하여 다음과 같이 작성할 수 있습니다.

```js
const address = person.company && person.company.office && person.company.office.address;
```

이렇게 논리 연산자를 사용하여 작성하면 if 문을 중첩하여 작성하는 것 보다는 간결하지만 다음과 같은 단점을 가집니다.

- 객체가 많이 중첩될수록 코드의 길이가 길어진다. 
- 값이 `null`과 `undefined`가 아닌 falsy 값인 경우도 고려해야 한다.

```js
// 많은 중첩
const sixth = first && first.second && first.second.third && first.second.third.fourth && first.second.third.fourth.fifth && first.second.third.fourth.fifth.sixth;

// 값이 null과 undefined가 아닌 falsy 값인 경우
const person = {
  name: '준하',
  age: 28,
  company: {
    name: '',
  }
};

// companyNameLength에 숫자 대신 빈 문자열이 할당됩니다.
const companyNameLength = person.company && person.company.name && person.company.name.length && 0; // ''

// 이를 고려하여 아래처럼 해주어야합니다.
const companyNameLength = person.company && typeof person.company.name === 'string' && person.company.name.length; // 0
```

ES2020에 포함된 Optional chaining 문법을 사용하면 이러한 번거로움을 해소할 수 있습니다.

```js
const person = {
    name: '준하',
  age: 28,
  company: {
    name: '',
  }
};

const address = person.company?.office?.address; // undefined
const companyNameLength = person.company?.name?.length; // 0
```

여기서 `?.` 연산자를 Optional chaining 연산자라고 부릅니다.
이 연산자는 속성 접근자와 비슷한 기능을 하지만, `obj?.prop` 에서, `obj` 가 `null` 혹은 `undefined` 이면 `obj`가 바로 반환되고, 아니면 `obj.prop`이 반환됩니다.
덕분에 접근하는 대상이 `null` 혹은 `undefined` 인 경우에 에러가 날까봐 걱정할 필요가 없습니다.

만약 아래 예시처럼 입력된 주소가 없는(`null`, `undefined`) 경우 '주소 없음'을 표시하고 싶다면 `??` 연산자와 함께 활용할 수도 있습니다.

```js
const address = person.company?.office?.address ?? '주소 없음'; // '주소 없음'
```

다만 Optional chaining을 남용하면 꼭 있어야 할 속성 값이 없는 경우 알아차리기 힘들고, 이는 또 다른 에러를 만들 수 있기 때문에 주의가 필요합니다.

## 삼항 연산자 (Ternary Operator)

`a ? b : c`와 같이 쓰이는 삼항 연산자(ternary operator)는 조건부 연산자(conditional operator)라고도 불립니다. 앞의 표현식에서, `a`가 truthy이면 `b`가, falsy이면 `c`가 반환됩니다.

```js
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2
```

삼항 연산자 역시 평가할 필요가 없는 부분은 평가하지 않습니다.

```js
true ? console.log('left') : console.log('right'); // left
false ? console.log('left') : console.log('right'); // right
```

삼항 연산자 역시 `if...else`를 대신하는 용도로 자주 사용됩니다.

```js
// `func1`과 `func2`는 동일하게 동작합니다.
function func1(cond) {
  if (cond) {
    return true;
  } else {
    return false;
  }
}

function func2(cond) {
  return cond ? true : false;
}
```

## 증가/감소 연산자 (Increment/Decrement Operator)

JavaScript에는 1 단위로 정수의 증가/감소 연산을 할 수 있는 `++`, `--` 연산자가 있습니다.

```js
let num = 10;

num++;
console.log(num); // 11

num--;
console.log(num);
```

그런데 여기서 `num++` 역시 표현식입니다. 즉, 값으로 변환된다는 말입니다. 이를 출력해보면 어떻게 될까요?

```js
let num = 10;
console.log(num++); // 10
console.log(num); // 11
```

분명 `num++` 표현식이 평가된 이후에 `num`의 값이 증가하기는 했습니다. 그런데 `num++` 표현식 자체는 **증가시키기 전의 값을 반환합니다.**

증가 연산자에는 이러한 성질이 있습니다.

- `++` 연산자는 피연산자의 값을 1 증가시킵니다. 단,
  - `++` 연산자를 피연산자 **앞**에 쓰면, 그 표현식은 값을 증가시키고 뒤의 결과값을 반환합니다.
  - `++` 연산자를 피연산자 **뒤**에 쓰면, 그 표현식은 **값을 증가시키기 전의 피연산자를 그대로 반환합니다.**

이 동작 방식은 감소 연산자(`--`)에도 적용됩니다.

예를 들어, 아래 코드 예제의 위에 있는 루프는 3번 실행되지만, 아래 있는 루프는 2번 밖에 실행되지 않습니다.

```js
let i = 3;
while (i--) {
  console.log('감소 연산자를 뒤에 쓰면 어떻게 될까요?');
}

let j = 3;
while (--j) {
  console.log('감소 연산자를 앞에 쓰면 어떻게 될까요?');
}
```

증감 연산자의 성질을 활용하면, 코드를 조금 더 짧게 작성할 수 있습니다.

```js
function Counter(initial = 0) {
  this._count = initial;
}

// `this._count`를 1 증가시키면서도 증가시키기 전 값을 반환하는 코드를,
Counter.prototype.longInc = function () {
  const result = this._count;
  this._count += 1;
  return result;
}
// 아래와 같이 짧게 쓸 수 있습니다.
Counter.prototype.inc = function() {
  return this._count++;
}
```

## 할당 연산자 (Assignment Operator)

`=` 연산자를 비롯해, 연산 후 할당을 하는 `+=`, `-=` 등등의 연산자 역시 모두 피연산자와 함께 표현식을 이룹니다.

```js
let x;
console.log(x = 5); // 5
```

할당 연산자에 대한 표현식의 결과값은 `왼쪽 피연산자에 실제로 할당된 값`이 됩니다.

```js
let x = 5;
console.log(x += 5); // 10

let y = 6;
console.log(x -= 3); // 3
```

## 연산자 우선 순위 (Operator Precedence)

연산자 여러 개가 연이어 사용된 표현식에서는, 연산자 우선 순위(operator precedence)에 따라 어떤 연산자를 먼저 계산할지가 결정됩니다.

```js
// `+` 연산자가 왼쪽에 있지만, `*` 연산자의 우선 순위가 더 높으므로 먼저 계산됩니다.
2 + 3 * 4 // 14
```

JavaScript에는 많은 연산자가 있고, 이 연산자들 간의 우선 순위도 복잡합니다. [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)를 확인해보세요. 19단계나 되는 연산자 우선 순위를 전부 외우고 있는 개발자는 많지 않을 것입니다.

아래 표현식의 결과값이 무엇일지, 코드를 실행하지 않은 채로 맞춰보세요.

```js
// ???
typeof 'helloworld' === 'hello' + 'world';
```

위와 같이, 서로 다른 연산자를 이어서 사용한 경우에는 코드의 의미를 명확히 파악하기 어렵게 됩니다. 같은 연산자를 연이어 사용한 경우가 아니라면, 코드 가독성을 위해 가장 높은 우선 순위를 갖는 연산자인 괄호로 둘러싸 주는 것이 좋습니다.

```js
// 연산 순서가 명확해졌습니다.
typeof ('helloworld' === ('hello' + 'world')); // boolean
```

## 연산자 결합 순서 (Operator Associativity)

이번에는 같은 연산자를 연이어 쓴 경우에 주의해야 할 점에 대해 알아보겠습니다.[^1]

어떤 연산자는 같은 연산자를 연이어 쓴 경우에 왼쪽부터 결합되어 계산됩니다.

```js
// 위아래 식은 완전히 같은 방식으로 동작합니다.
1 + 2 + 3 + 4 + 5
(((1 + 2) + 3) + 4) + 5

// 왼쪽부터 결합되어, 처음으로 등장하는 falsy 값이 표현식의 결과값이 됩니다. 나머지는 평가되지 않습니다.
a && b && c && d;
((a && b) && c) && d;

// 왼쪽부터 결합되어, 처음으로 등장하는 truthy 값이 표현식의 결과값이 됩니다. 나머지는 평가되지 않습니다.
a || b || c || d;
((a || b) || c) || d;
```

연산자의 결합성 때문에, 수학에서 쓰이는 식을 JavaScript에서는 그대로 쓸 수 없는 경우가 있습니다.

```js
// 위아래 식은 완전히 같은 방식으로 동작합니다.
// 결과적으로 `true > 1`이 되어 결과값이 `false`가 됩니다.
3 > 2 > 1;
(3 > 2) > 1;
true > 1; // false

// 세 개의 수에 대한 비교를 하고 싶다면 아래와 같이 해야 합니다.
3 > 2 && 2 > 1; // true
```

그리고 어떤 연산자는 오른쪽부터 결합되어 계산됩니다.

```js
// 위아래 식은 완전히 같은 방식으로 동작합니다.
2 ** 2 ** 3; // 256
2 ** (2 ** 3); // 256

// 위아래 식은 완전히 같은 방식으로 동작합니다.
let x, y, z;
z = y = x = 1
z = (y = (x = 1))

// 위아래 식은 완전히 같은 방식으로 동작합니다.
a ? b : c ? d : e ? f : g
a ? b : (c ? d : (e ? f : g))
```

대부분의 경우 결합 순서가 명확히 눈에 보이므로 결합 순서에 대한 걱정을 크게 할 필요는 없습니다. 다만, **거듭제곱 연산자, 할당 연산자, 삼항 연산자**가 우결합성을 가진다는 사실은 기억해 둘 필요가 있습니다.

## 값을 비교하는 여러 가지 방법

JavaScript에서는 두 값이 같은지를 비교하기 위해 아래 세 가지 방법을 사용할 수 있습니다.

- `==`, `!=`
- `===`, `!==`
- `Object.is`

여기서 `a != b`는 `!(a == b)`와 항상 같습니다. `a !== b` 또한 `!(a === b)`와 항상 같습니다.

### 추상적 동일성 (Abstract Equality)

`==` 연산자는 두 피연산자의 타입이 다를 때는 **타입을 변환**한 후 비교합니다. 두 피연산자의 타입이 같다면 `===` 연산자와 같은 방식으로 동작합니다.

```js
'1' == 1; // true
true == 1; // true
false == 0; // true
'' == false; // true
```

언뜻 보기에는 편해보이지만, 타입을 변환하는 과정에서 의도치 않은 방식으로 동작할 수 있기 때문에, 주의해서 사용해야 합니다.

```js
'  \n\t  ' == 0; // true
```

다만, null check를 할 때 만큼은 `==` 연산자가 유용하게 사용됩니다. `==` 연산자는 아래과 같은 성질을 갖고 있습니다.

- `null`과 `undefined` 두 값을 동일한 것으로 취급합니다. 즉, 결과값이 `true`가 됩니다.
- `null`과 `undefined`를 **이 두 값을 제외한 다른 값**과 비교했을 때는 항상 결과값이 `false`가 됩니다.

```js
null == undefined; // true

null == 0; // false
null == ''; // false
undefined == false; // false
undefined == NaN; // false
```

`==`, `!=` 연산자의 동작 방식에 대한 자세한 사항은 [명세](https://tc39.github.io/ecma262/#sec-abstract-equality-comparison)를 참고하세요.

### 엄격한 동일성 (Strict Equality)

`===`, `!==` 연산자는 **두 피연산자의 타입이 다른 경우 무조건 `false`를 반환합니다.** 따라서 `==`, `!=` 연산자와는 달리, 서로 다른 타입의 피연산자에 대해서도 안심하고 사용할 수 있습니다.

```js
'1' === 1; // false
true === 1; // false
false === 0; // false
```

다만, number 타입에 대한 비교를 할 때에는 다음과 같이 특이한 동작을 합니다.[^2]

```js
// `===` 연산에서, `NaN`은 number 타입의 **모든** 값과 다릅니다. 이는 자기 자신에 대해서도 마찬가지입니다.
NaN === NaN; // false

// `0`과 `-0`은 서로 다른 값이지만, `===` 연산은 이 둘을 같은 것으로 취급합니다.
0 === -0; // true
```

`===`, `!==` 연산자의 동작 방식에 대한 자세한 사항은 [명세](https://tc39.github.io/ecma262/#sec-strict-equality-comparison)를 참고하세요.

### Object.is

`Object.is` 정적 메소드는 두 인수가 **정말로 같은 값인지**를 검사합니다. 아래의 두 예외를 제외하고는 `===` 연산자와 같은 방식으로 동작합니다.

```js
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
```

### 무엇을 써야 하나요?

특별한 경우를 제외하고는 **`===` 혹은 `!==` 연산자를 사용해서 비교를 하면 됩니다.** 다만 null check를 할 때 만큼은 `==` 혹은 `!=` 연산자를 사용하는 것이 편합니다.

## Spread Syntax

Spread 문법을 사용하면 배열(혹은 객체)을 다른 배열(혹은 객체)에 쉽게 삽입할 수 있습니다. 나머지 매개변수(rest parameters) 문법과 같은 기호인 `...`가 사용되지만, 그 의미는 다릅니다.

### 배열

Spread 문법을 통해 배열 리터럴의 중간에 다른 배열을 이어붙일 수 있습니다. 이 때, `arr1` 안에 있는 요소들이 `arr2` 안으로 **복사**됩니다.

```js
const arr1 = [3, 4];
const arr2 = [1, 2, ...arr1, 5]; // [1, 2, 3, 4, 5]

// 이전에는 같은 작업을 하기 위해 `Array.prototype.concat` 메소드를 사용했습니다.
[1, 2].concat(arr1).concat([5]) // [1, 2, 3, 4, 5]
```

또한 배열 리터럴 안에 다른 요소를 써주지 않음으로써, 배열 전체를 쉽게 복사할 수 있습니다.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// 이전에는 같은 작업을 하기 위해 `Array.prototype.slice` 메소드를 사용했습니다.
arr1.slice();
```

다만, 이 때 역시 깊은 복사가 아니라 **얕은 복사**를 한다는 점을 기억하세요.

Spread 문법은 함수 호출 시에도 사용할 수 있습니다. 이 때 배열의 모든 요소를 함수의 인수로 넘깁니다.

```js
const arr = [1, 2, 3, 4, 5];

// 아래 코드는 `Math.max(1, 2, 3, 4, 5)`와 동일합니다.
Math.max(...arr); // 5

// 이전에는 같은 작업을 하기 위해 `Function.prototype.apply` 메소드를 사용했습니다.
Math.max.apply(null, arr); // 5
```

### 객체

객체에 대해서도 spread 문법을 사용할 수 있습니다. 이 때 자기 자신의(own) 열거 가능한(enumerable) 속성만을 복사합니다.

```js
const obj1 = {prop: 1};
const obj2 = {...obj1};

// 이전에는 같은 작업을 하기 위해 `Object.assign` 정적 메소드를 사용했습니다.
Object.assign({}, obj1);
```

아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 [Babel 플러그인](http://babeljs.io/docs/plugins/transform-object-rest-spread/) 혹은 [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest) 등의 트랜스파일러를 사용해야 합니다.

## 분해대입 (Destructuring Assignment)

ES2015에서 배열과 객체 안에 들어있는 값을 쉽게 추출해낼 수 있는 문법이 추가되었습니다.

### 배열의 분해대입

다음과 같이, 변수의 선언과 동시에 배열의 요소를 해당 변수에 대입할 수 있습니다.

```js
const [a, b, c] = [1, 2, 3];

console.log(a, b, c); // 1 2 3
```

만약 요소의 순서와 일치하는 변수가 좌측 목록에 들어있지 않으면, 해당 요소는 무시됩니다.

```js
// 여기서 `2`, `4`는 무시됩니다.
const [a, , c] = [1, 2, 3, 4];

console.log(a, c); // 1 3
```

이미 선언된 변수에 대해서도 분해대입을 할 수 있습니다.

```js
let a, b;
[a, b] = [1, 2];

console.log(a, b); // 1 2
```

배열이 중첩되어 있으면, 해당 배열에 대해서도 분해대입을 할 수 있습니다. 이 때에는 등호의 좌측에서도 배열이 중첩된 것처럼 써주면 됩니다.

```js
const [a, b, [c, d]] = [1, 2, [3, 4]];

console.log(a, b, c, d); // 1 2 3 4
```

만약 분해대입 시 배열의 뒷부분을 새로운 배열로 만들고 싶다면, 해당 위치의 변수 앞에 `...`을 붙여주면 됩니다. 나머지 매개변수(rest parameter)에서와 같이, `...`은 맨 마지막 요소에만 붙을 수 있습니다.

```js
const [a, b, ...c] = [1, 2, 3, 4, 5];

console.log(c); // [3, 4, 5]
```

### 객체의 분해대입

다음과 같이, 변수의 선언과 동시에 객체의 속성을 해당 변수에 대입할 수 있습니다.

```js
const {a: prop1, b: prop2} = {a: 1, b: 2};

console.log(prop1, prop2); // 1 2
```

좌측 객체 표기에서 속성값 부분을 생략하면, 속성 이름 부분이 곧 새 변수의 이름이 됩니다.

```js
const {a, b} = {a: 1, b: 2};

console.log(a, b); // 1 2
```

만약 어떤 속성의 이름과 같은 이름을 갖는 변수가 좌측에 들어있지 않으면, 해당 속성은 무시됩니다.

```js
// 여기서 `b`는 무시됩니다.
const {a} = {a: 1, b: 2};

console.log(a); // 1
```

이미 선언된 변수에 대해서도 분해대입을 할 수 있습니다.

```js
let a, b;
// 문장이 여는 중괄호(`{`)로 시작되면 이는 '블록'으로 간주되므로,
// 아래와 같이 분해대입을 할 때는 식 전체를 괄호로 둘러싸주어야 합니다.
({a, b} = {a: 1, b: 2});

console.log(a, b); // 1 2
```

객체가 중첩되어 있으면, 해당 객체에 대해서도 분해대입을 할 수 있습니다. 이 때에는 등호의 좌측에서도 객체가 중첩된 것처럼 써주면 됩니다.

```js
const {a, b: {c}} = {a: 1, b: {c: 2}};

console.log(a, c); // 1 2
```

배열과 객체가 함께 중첩되어 있는 경우에서도 분해대입이 가능합니다.

```js
const {
  arr: [
    a, b, {
      c
    }
  ]
} = {
  arr: [
    1, 2, {
      c : 3
    }
  ]
};

console.log(a, b, c); // 1 2 3
```

### 객체의 나머지 속성 (Object Rest Properties)

만약 분해대입 시 무시된 속성들을 가지고 새로운 객체를 만들고 싶다면, `...`을 붙여주면 됩니다. 나머지 매개변수(rest parameter)에서와 같이, `...`은 맨 마지막에만 붙을 수 있습니다.

```js
const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};

console.log(rest); // { c: 3, d: 4 }
```

아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 [Babel 플러그인](http://babeljs.io/docs/plugins/transform-object-rest-spread/) 혹은 [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest) 등의 트랜스파일러를 사용해야 합니다.

### 분해대입의 기본값

분해대입 시, 만약 좌측 변수의 위치에 해당하는 값이 우측의 배열 혹은 객체에 존재하지 않으면 거기에는 대입이 일어나지 않습니다.

```js
let a, b, c;

[a, b, c] = [1, 2];

console.log(c); // undefined
```

이 때에 좌측 변수에 기본으로 대입될 값을 미리 지정해둘 수 있습니다.

```js
// `c` 위치에는 대입될 값이 없으므로, 기본값인 `3`이 대신 사용됩니다.
let [a, b, c = 3] = [1, 2];

console.log(c); // 3
```

이 동작은 객체에 대한 분해대입에서도 적용됩니다.

```js
let {a, b, c = 3} = {a: 1, b: 2};

console.log(c); // 3
```

### 매개변수에서의 분해대입

함수의 매개변수에서도 분해대입을 할 수 있습니다.

```js
function func({prop, array: [item1, item2, item3 = 4]}) {
  console.log(prop);
  console.log(item1);
  console.log(item2);
  console.log(item3);
}

// 1, 2, 3, 4가 차례대로 출력됩니다.
func({prop: 1, array: [2, 3]});
```

[^1]: 단항 연산자나 연산의 주종 관계가 명확한 경우는 결합 순서가 명확히 보이므로 여기에서 제외했습니다.
[^2]: 이런 동작 방식은 JavaScript에만 국한된 것이 아니라, IEEE 754 표준을 따르는 다른 언어에도 해당됩니다.
