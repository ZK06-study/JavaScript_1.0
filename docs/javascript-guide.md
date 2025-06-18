# JavaScript 학습 가이드

## 목차
1. [JavaScript 소개](#javascript-소개)
2. [튜토리얼](#튜토리얼)
3. [값 다루기](#값-다루기)
4. [Number 타입](#number-타입)
5. [String 타입](#string-타입)
6. [Boolean 타입](#boolean-타입)
7. [null과 undefined](#null과-undefined)
8. [함수](#함수)
9. [제어 구문](#제어-구문)
10. [객체](#객체)
11. [배열](#배열)

---

## JavaScript 소개

JavaScript는 웹의 초창기였던 1995년에 Netscape Navigator라는 웹 브라우저에 처음으로 탑재되어 세상에 공개됐습니다. JavaScript는 Java와 많은 부분에서 다르지만, 마케팅 상의 이유로 그 문법과 이름이 Java와 유사하게 만들어진 덕분에 아직도 Java와 JavaScript를 혼동하는 사람들이 많습니다. **"Java와 JavaScript 사이의 관계는 햄과 햄스터 사이의 관계와 같다"**와 같이 그 미묘한 관계를 풍자하는 많은 농담들이 있습니다.

### 언어와 구동 환경

JavaScript 언어 자체에는 다른 범용 프로그래밍 언어에 비해 적은 양의 기능(주로 **코드의 실행**과 관련된 것)을 포함하고 있습니다. 하지만 이 JavaScript를 구동할 수 있는 **구동 환경**에 여러 기능(주로 **입출력**과 관련된 것)이 포함되어 있어서, 우리는 이 기능을 이용해 쓸모있는 응용 프로그램을 만들 수 있게 됩니다. JavaScript 구동 환경에는 웹 브라우저, 웹 서버 (Node.js), 게임 엔진, 포토샵(!) 등 많은 프로그램들이 있습니다.

### ECMAScript와 브라우저 호환성

몇몇 유명한 프로그래밍 언어와 마찬가지로, JavaScript라는 언어에는 표준 명세(standard specification)라는 것이 존재합니다. JavaScript의 표준 명세는 **ECMAScript**라는 이름을 갖고 있는데, Netscape에 탑재되었던 JavaScript 구현체를 ECMA(European Computer Manufacturer's Association)라는 단체에서 표준화한 것입니다.

ES2015에서 엄청나게 많은 문법과 기능(클래스, 모듈, 분해대입, 템플릿 문자열, 블록 스코프, 반복자, 프록시 등등...)이 추가되고, Node.js 등 웹 브라우저 외에도 JavaScript를 구동할 수 있는 구동 환경의 종류가 많아지면서, 이제 JavaScript는 Python 등 다른 범용 프로그래밍 언어와 비교해도 전혀 뒤쳐지지 않는 범용 프로그래밍 언어가 되었습니다.

---

## 튜토리얼

교재를 읽어나가기 위해 JavaScript 언어의 기본적인 구성요소를 이해하고 넘어갈 필요가 있습니다.

### 코드의 실행

기본적으로 JavaScript 코드는 세미콜론(`;`)으로 구분된 구문(statement) 단위로 위에서부터 차례대로 실행됩니다. JavaScript 코드는 REPL이라는 도구를 이용해서 조금씩 실행시킬 수도 있고, 혹은 미리 작성해둔 많은 양의 코드를 한 번에 실행시킬 수도 있습니다.

### 기본 문법

#### 대소문자의 구분
JavaScript 언어는 모든 부분에서 대소문자 구분을 하기 때문에 주의해야 합니다. 예를 들어 `function`과 `Function`은 JavaScript에서 완전히 다른 의미를 가집니다.

#### 세미콜론
JavaScript는 세미콜론(;)을 이용해서 각 구문을 구분합니다.

```js
const a = 1;
const b = 2;
```

#### 공백
JavaScript 언어는 공백에 민감하지 않은 언어입니다. 즉, 다른 문법 요소만 잘 지킨다면 공백의 수가 코드의 실행에 별 영향을 미치지 않습니다.

### 주석(comment)

주석은 실행되는 코드는 아니지만, 코드에 부가적인 설명을 넣고 싶을 때 사용합니다.

```js
// 한 줄 주석

/* 여러 줄 주석 */

/*
여러
줄
주석
*/
```

### 값(value)과 그 리터럴(literal)

프로그래밍은 근본적으로 '값'을 다루는 행위라 할 수 있습니다. JavaScript에도 여러 가지 값을 표현하는 문법이 있으며, 이를 리터럴(literal)이라고 합니다.

```js
1 // 정수
2.5 // 부동소수점 실수
'hello world' // 작은 따옴표 문자열
"JavaScript" // 큰 따옴표 문자열
true // 참임을 나타내는 진리값
false // 거짓임을 나타내는 진리값
null // '존재하지 않음'을 나타내는 값
undefined // '정의된 적 없음'을 나타내는 값
```

### 값의 타입(type)

JavaScript에서 다루어지는 모든 값은 그 '타입'을 가지고 있습니다. `typeof` 연산자는 피연산자의 타입을 가리키는 문자열을 반환합니다.

```js
typeof 1 // 'number'
typeof 2.5 // 'number'
typeof 'hello world' // 'string'
typeof true // 'boolean'
typeof null // 'object'
typeof undefined // 'undefined'
```

---

## 값 다루기

### 값과 리터럴

프로그래밍을 하며 가장 많이 하는 일은 값(value)을 다루는 것입니다. 프로그래밍 언어에서 값을 생성하는 가장 쉬운 방법은 리터럴(literal)을 사용하는 것입니다. 리터럴은 **값의 표기법**으로, 프로그래밍 언어마다 값을 표현하는 여러 가지 리터럴을 가지고 있습니다.

```js
1; // 정수 리터럴
2.5; // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값 리터럴
```

### 변수 (Variable)

값을 한 번 생성한 뒤에 다시 쓰지 못한다면 아주 간단한 프로그램밖에 만들지 못할 것입니다. 그래서 프로그래밍 언어에는 대개 **값에 이름을 붙여서 다시 쓸 수 있게 만드는 기능**이 존재합니다.

#### let

`let`은 변수(variable)를 선언(declare)할 때 쓰는 키워드로, ES2015에서 도입되었습니다.

```js
let seven = 7;
```

변수의 선언이 끝난 이후에 대입을 하거나, 이미 값이 대입되어 있는 변수에 다른 값을 대입할 수도 있습니다.

```js
let eight;
eight = 8;
let seven = 7;
seven = 77;
seven = 777;
```

#### const

`const`는 재대입(reassign)이 불가능한 변수를 선언할 때 쓰는 키워드로, 역시 ES2015에 도입되었습니다.

```js
const myConstant = 7;
```

`const`로 변수를 선언할 때는 반드시 선언 시에 값을 대입해주어야 합니다. 값 없이 선언만 하게 되면 에러가 발생합니다.

### let과 const 중 무엇을 쓸 것인가?

항상 **let 보다 const**를 사용하는 것이 좋습니다. `let`을 사용하면 의도치 않게 다른 값이 대입되어 버리는 일이 생길 수 있기 때문입니다. 정말로 재대입이 필요한 경우에만 `let`을 사용하는 것이 좋은 습관입니다.

### 식별자

변수의 이름은 모두 **식별자(Identifier)**입니다. JavaScript 식별자는 아래와 같이 정해진 규칙에 따라 지어져야 합니다.

- 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
- 단, 숫자로 시작되어서는 안 된다.
- 예약어는 식별자가 될 수 없다.

#### Camel Case

식별자 이름을 지을 때 JavaScript에서 널리 사용되는 관례(convention)가 있는데, 이 관례를 Camel case라고 부릅니다. 식별자에 들어가는 각 단어의 첫 글자를 대문자로 써 주는 방식입니다.

```js
// Camel case
let fastCampus;
let fooBar;
```

### 타입

JavaScript를 비롯한 대부분의 프로그래밍 언어는 여러 가지 종류의 값을 지원하는데, 이러한 **값의 종류**를 가지고 자료형(data type)이라고 부릅니다. 줄여서 **타입**이라고 부르기도 합니다.

값의 타입을 알아보기 위해 `typeof` 연산자를 사용할 수 있습니다.

```js
typeof 1; // 'number'
typeof 'hello'; // 'string'
```

---

## Number 타입

### number 타입 리터럴

number 타입 리터럴에는 다음과 같은 것들이 있습니다.

```js
7; // 정수 리터럴
2.5; // 부동 소수점 리터럴
0b111; // 2진수 리터럴 (binary literal)
0o777; // 8진수 리터럴 (octal literal)
0xf5; // 16진수 리터럴 (hexademical literal)
10_000 // 숫자 구분 기호 (Numeric Separators)
```

### 정수인지 실수인지 판별하기

다른 많은 프로그래밍 언어와는 다르게, JavaScript는 정수와 실수를 별도의 타입으로 다루지 않습니다. 다만 어떤 수가 정수인지, 혹은 실수인지를 판별할 수는 있고, 이를 위해 `Number.isInteger` 메소드를 사용합니다.

```js
Number.isInteger(1); // true
Number.isInteger(0.1); // false
```

### number 타입에 대한 연산

number 타입에 대해 아래와 같은 연산자(operator)를 사용해 연산을 할 수 있습니다.

```js
// 산술 연산 (arithmetic operators)
1 + 2; // 더하기
3 - 4; // 빼기
5 * 6; // 곱하기
7 / 8; // 실수 나누기
14 % 3; // 나머지
2 ** 3; // 거듭제곱

// 비교 연산 (comparison operators)
1 < 2; // 작다
3 > 4; // 크다
5 <= 5; // 작거나 같다
6 >= 7; // 크거나 같다
8 === 8; // 같다
8 !== 9; // 같지 않다
```

### 부동 소수점 vs 고정 소수점

컴퓨터는 소수를 2진수를 이용해 저장하기 때문에, 컴퓨터는 10진수 소수를 정확히 다룰 수 없습니다. 이 오차를 반올림 오차(rounding error)라고 합니다.

```js
0.1 + 0.2; // 0.30000000000000004
```

### number 타입의 특이한 값들

다음 값들도 모두 number 타입에 속합니다.

```js
NaN
-0
Infinity
-Infinity
```

#### NaN

`NaN`은 **'Not a Number'**의 약자로, 계산 불가능한 연산의 결과값을 나타내기 위해 사용됩니다.

```js
0 / 0; // NaN
1 * 'hello'; // NaN
```

`NaN`은 JavaScript의 값들 중 유일하게 **자기 자신과 같지 않은 값**입니다.

```js
const thisIsNan = NaN;
thisIsNan === NaN; // false
Number.isNaN(thisIsNan); // true
```

---

## String 타입

문자열에 `typeof` 연산을 해보면 다음과 같은 결과가 나옵니다.

```js
typeof 'hello'; // 'string'
```

### 문자열 리터럴

JavaScript는 문자열 값을 표현하기 위한 여러 가지 리터럴을 제공합니다.

```js
'hello'
"hello 안녕하세요"
`hello world` // template literal
```

### 템플릿 리터럴 (Template Literal)

ES2015에서 도입된 템플릿 리터럴(template literal)은 문자열 리터럴의 일종으로, 추가적인 기능을 지원합니다.

```js
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`;
console.log(sentence); // Foo meets Bar!
```

또한, 템플릿 리터럴을 사용하면 **여러 줄로 이루어진 문자열**을 쉽게 표현할 수 있습니다.

```js
`hello
world
hello
javascript!
`
```

### Escape Sequence

JavaScript는 특수 문자를 문자열에 넣거나, 혹은 직접 유니코드 코드포인트를 사용해서 문자를 넣을 수 있도록 해주는 escape sequence를 제공합니다.

```js
console.log('lorem \'ipsum\''); // lorem 'ipsum'
console.log('line\nfeed'); // line(줄바꿈)feed
console.log('\uD55C\uAE00'); // 한글
console.log('\u{1F435}'); // 🐵
```

### 문자열과 연산자

수 타입 뿐 아니라 문자열에 대해서도 여러 가지 연산자를 쓸 수 있습니다.

```js
// 문자열 연결하기
'hello' + 'world'; // 'helloworld'

// 등호 비교
'hello' === 'hello'; // true
'hello' !== 'hello'; // false

// 유니코드 코드포인트 비교
'a' < 'b'; // true
'aaa' < 'abc'; // true
```

### 속성 및 메소드

string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있습니다.

```js
// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

// 특정 문자열을 반복하는 새 문자열 생성하기
'*'.repeat(3); // '***'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true

// 문자열의 특정 부분을 바꾼 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(2, 4); // 'll'

// 좌우 공백문자를 제거한 새 문자열 생성하기
'   hello  '.trim(); // 'hello'
```

---

## Boolean 타입

boolean 타입에 해당하는 값은 `true`, `false` 두 가지 밖에 없습니다. 이 값들을 '진리값'이라고 부릅니다. 프로그래밍에서의 진리값은 어떤 조건이 참인지 거짓인지를 나타내기 위해 사용됩니다.

```js
1 < 2; // true
1 > 2; // false
3 === 3; // true
3 !== 3; // false
```

### 논리 연산자

JavaScript는 진리값에 대한 여러 연산을 지원합니다.

```js
// 논리 부정 (logical NOT)
!true; // false
!false; // true

// 논리합 (logical OR)
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱 (logical AND)
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// 삼항 연산자 (ternary operator)
true ? 1 : 2; // 1
false ? 1 : 2; // 2
```

### truthy & falsy

JavaScript에서는 boolean 타입이 와야 하는 자리에 다른 타입의 값이 와도 에러가 나지 않고 실행됩니다.

```js
if (1) {
  console.log('이 코드는 실행됩니다.');
}

if (0) {
  console.log('이 코드는 실행되지 않습니다.');
}
```

JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `''`

### 다른 타입의 값을 진리값으로 변환하기

어떤 값을 명시적으로 boolean 타입으로 변환해야 할 때가 있는데, 그 때에는 두 가지 방법을 사용할 수 있습니다.

```js
!!'hello'; // true
Boolean('hello'); // true
```

---

## null과 undefined

JavaScript에는 '없음'을 나타내는 값이 두 개 있는데, 바로 `null`와 `undefined`입니다. 두 값의 의미는 비슷하지만, 각각이 사용되는 목적과 장소가 다릅니다.

JavaScript는 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 `undefined`를 반환합니다.

```js
let foo;
foo // undefined

const obj = {};
obj.prop; // undefined
```

`null`은 '객체가 없음'을 나타냅니다.

```js
typeof null // 'object'
typeof undefined // 'undefined'
```

**프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용**하는 것이 좋습니다.

### Null Check

`null`이나 `undefined`는 어떤 변수에도, 어떤 속성에도 들어있을 수 있기 때문에 우리는 코드를 짤 때 값이 있는 경우와 없는 경우를 모두 고려해서 코드를 짜야 할 필요가 있습니다. 어떤 값이 `null` 혹은 `undefined`인지 확인하는 작업을 **null check**라고 합니다.

```js
function printIfNotNull(input) {
  if (input !== null && input !== undefined) {
    console.log(input);
  }
}
```

위 `if` 구문 안에 있는 식을 다음과 같이 줄여 쓸 수 있습니다.

```js
// 아래 세 개의 식은 완전히 같은 의미입니다.
input !== null && input !== undefined;
input != null;
input != undefined;
```

null check를 할 때 만큼은 `==`를 사용하는 것이 편합니다. 다른 모든 경우에는 `===`를 사용하는 것이 좋습니다.

---

## 함수

프로그래밍에서의 함수란, **큰 프로그램을 잘게 쪼개어 특정 코드 뭉치를 반복해서 사용할 수 있도록 묶어놓은 코드 뭉치의 단위**를 말합니다.

### 함수의 구성 요소

두 값을 더하는 아주 간단한 함수를 정의해 보겠습니다.

```js
function add(x, y) {
  const result = x + y;
  return result;
}
```

위에서 `add`라는 **이름**을 갖는 함수를 정의했습니다. 괄호 안의 `x`와 `y`를 **매개변수(parameter)**라 하며, `return` 뒤에 오는 값을 **반환값(return value)**이라고 합니다.

함수를 정의했다면, 아래와 같이 함수 이름 뒤에 괄호를 붙여서 이 함수를 실행시킬 수 있습니다. 이를 함수의 **호출(function call)**이라고 합니다.

```js
add(2, 3); // 5
```

여기서 괄호 안에 넘겨준 `2`, `3`을 **인수(argument)**라고 부릅니다.

### 스코프 (Scope)

함수의 매개변수를 비롯한, 모든 변수들은 특별한 성질을 갖습니다. 매개변수와 같이 함수 안에서 정의된 변수는 함수 바깥에서는 접근할 수 없기 때문에 함수 안에서만 사용할 수 있습니다. 이렇게, 특정 변수가 유효한 코드 상의 **유효 범위**를 가지고 **스코프(scope)**라고 합니다.

```js
function add(x, y) { // 변수 `x`와 `y`가 정의됨
  return x + y;
}
add(2, 3);
console.log(x); // 에러!
```

#### 스코프 연쇄 (Scope Chain)

함수 내부 코드에서, 매개변수 혹은 그 함수 안에서 정의된 변수만 사용할 수 있는 것은 아닙니다.

```js
const five = 5;
function add5(x) {
  return x + five; // 바깥 스코프의 `five` 변수에 접근
}
add5(3); // 8
```

코드의 실행 흐름이 식별자에 도달하면, 먼저 그 식별자와 같은 이름을 갖는 변수를 현재 스코프에서 찾아보고, 변수가 존재하면 그것을 그대로 사용합니다. 만약 현재 스코프에서 변수를 찾지 못하면 바로 바깥쪽 스코프에서 변수를 찾아봅니다. 이 과정을 **스코프 연쇄(scope chain)**라 하고, 가장 바깥에 있는 스코프를 **전역 스코프(global scope)**라고 부릅니다.

### 값으로서의 함수

JavaScript에서는 함수도 값입니다!

```js
function add(x, y) {
  return x + y;
}

const plus = add;
plus(1, 2); // 3
```

다른 값과 마찬가지로, 함수를 선언한 뒤 변수에 대입해서 호출할 수도 있고, 혹은 배열이나 객체에 넣을 수도 있고, 심지어는 함수를 다른 함수에 인수로 넘기거나, 함수에서 함수를 반환할 수도 있습니다.

### 익명 함수 (Anonymous Function)

JavaScript에서 함수를 선언할 때 꼭 **이름**을 붙여주어야 하는 것은 아닙니다. 아래와 같이 이름을 붙이지 않은 함수를 가지고 **익명 함수(anonymous function)**라고 합니다.

```js
// 두 수를 더해서 반환하는 익명 함수
function(x, y) {
  return x + y;
}

// 호출을 하려면 변수에 저장한 후에 변수의 이름을 통해 호출해야 합니다.
const add = function(x, y) {
  return x + y;
}
add(1, 2); // 3
```

---

## 제어 구문

이 챕터에서는 프로그램의 논리 구조를 표현할 수 있는 **조건문과 반복문**, 그리고 그 밖에 프로그램의 논리 구조에 영향을 미치는 구문들을 살펴볼 것입니다.

### 조건문 (Conditional Statement)

우리가 실제로 사용하는 프로그램들은 수많은 **'경우의 수'**를 다루고 있습니다. 이렇게 경우에 따라 프로그램의 동작이 달라야 할 때, 우리는 **조건문(conditional statement)**을 통해 프로그램의 논리 구조를 표현할 수 있습니다.

#### if...else 구문

`if...else` 구문을 사용하면 조건에 따라 특정 영역의 코드를 실행시키거나 실행시키지 않을 수 있습니다.

```js
function game() {
  const result = Math.ceil(Math.random() * 6);
  
  if (result >= 4) {
    alert('당신이 이겼습니다!');
  } else {
    alert('당신이 졌습니다.');
  }
}
```

`else`가 필요 없는 경우에는 `else`를 생략할 수 있습니다.

```js
if (result === 6) {
  alert('당신은 운이 좋군요!');
}
```

#### if...else 구문의 중첩

만약 세 개 이상의 경우의 수를 `if...else`를 통해 표현하려면, `if...else`를 **중첩**시키면 됩니다.

```js
if (result >= 5) {
  alert('당신이 이겼습니다!');
} else if (result >= 3) {
  alert('비겼습니다.');
} else {
  alert('당신이 졌습니다.');
}
```

#### switch 구문

하나의 변수에 대해 많은 경우의 수가 있는 경우, `switch` 구문을 사용하면 코드를 조금 더 보기 좋게 만들 수 있습니다.

```js
function translateColor(english) {
  let result;
  switch (english) {
    case 'red':
      result = '빨강색';
      break;
    case 'blue':
      result = '파랑색';
      break;
    case 'purple':
    case 'violet':
      result = '보라색';
      break;
    default:
      result = '일치하는 색깔이 없습니다.';
  }
  return result;
}
```

### 반복문 (Looping Statement)

프로그래밍을 하다보면 유사한 작업을 여러 번 반복해서 해야할 경우가 있습니다. 위와 같은 작업을 하기 위해 JavaScript에서는 반복문(looping statement)을 사용합니다.

#### while 구문

`while` 구문은 특정 조건을 만족하는 한 코드를 반복해서 실행시킵니다.

```js
let i = 0; // 초기값

while (i < 5) {
  console.log(`현재 i의 값: ${i}`);
  i++; // 갱신
}

console.log('루프가 종료되었습니다.');
```

#### for 구문

루프에는 초기값과 갱신에 대한 코드가 있는 경우가 많습니다. 이런 경우에는 `for` 구문을 이용해 코드를 조금 더 짧게 짤 수 있습니다.

```js
// for (초기값 정의; 실행 조건; 갱신) { ... }
for (let i = 0; i < 5; i++) {
  console.log(`현재 i의 값: ${i}`);
}
console.log('루프가 종료되었습니다.');
```

---

## 객체

객체는 JavaScript라는 언어만이 가지고 있는 특징의 기초를 이루는 자료형으로, **많은 기능**을 내장하고 있습니다.

### 객체 리터럴 (Object Literal)

객체는 한꺼번에 여러 값을 담을 수 있는 **통(container)**과 같은 **자료구조(data structure)**입니다. 객체 안에는 **이름-값 쌍(name-value pair)**이 저장되는데, 이를 객체의 **속성(property)**이라고 합니다.

```js
const person = {
  name: '윤아준', // 속성 이름 - 'name', 속성 값 - '윤아준'
  age: 19, // 속성 이름 - 'age', 속성 값 - 19
  'languages': ['Korean', 'English'], // 속성 이름 - 'languages', 속성 값 - 배열
  '한국 나이': 20 // 속성 이름 - '한국 나이', 속성 값 - 20
};
```

### 점 표기법, 대괄호 표기법

**속성 접근자(property accessor)**를 이용해 이미 생성된 객체의 속성을 지정해줄 수도 있습니다.

```js
const person = {}; // 빈 객체

// 점 표기법 (Dot notation)
person.name = '윤아준';
person.age = 19;
person.languages = ['Korean', 'English'];

// 대괄호 표기법 (Bracket notation)
person['한국 나이'] = 20;
```

### 객체 다루기

속성 접근자, `delete` 연산자, `in` 연산자 등을 이용해서 객체에 대한 정보를 읽고 쓸 수 있습니다.

```js
const person = {
  name: '윤아준',
  age: 19,
  languages: ['Korean', 'English']
};

// 속성 읽기
person.name; // '윤아준'
person.age; // 19

// 속성 쓰기
person.name = '신하경';
person.age = 20;

// 새 속성 추가하기
person.address = '서울특별시 강남구 신사동';

// 속성 삭제하기
delete person.address;

// 속성이 객체에 존재하는지 확인하기
'name' in person; // true
'phoneNumber' in person; // false
```

### 메소드 (Method)

객체의 속성값으로 **함수**를 지정할 수도 있습니다.

```js
const person = {
  greet: function() {
    return 'hello';
  }
};

person.greet(); // 'hello';
```

위와 같이 **어떤 객체의 속성으로 접근해서 사용하는 함수**를 **메소드(method)**라고 부릅니다. 아래와 같이, 객체 리터럴 안에서 특별한 표기법을 사용해 메소드를 정의할 수도 있습니다.

```js
// 위 예제와 완전히 똑같이 동작합니다.
const person = {
  greet() {
    return 'hello';
  }
};
```

### this

`this` 키워드를 사용하면, 메소드 호출 시에 해당 메소드를 갖고 있는 객체에 접근할 수 있습니다.

```js
const person = {
  name: '윤아준',
  age: 19,
  introduce() {
    // `this`를 사용해서 객체의 속성에 접근함
    return `안녕하세요, 제 이름은 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
  },
  getOlder() {
    // `this`를 사용해서 객체의 속성을 갱신함
    this.age++;
  }
};

person.introduce(); // '안녕하세요, 제 이름은 윤아준입니다. 제 나이는 19살 입니다.'
person.getOlder();
person.introduce(); // '안녕하세요, 제 이름은 윤아준입니다. 제 나이는 20살 입니다.'
```

메소드를 사용하면, **데이터**와, 그 데이터와 관련된 **동작**을 **객체라는 하나의 단위로 묶어서 다룰 수 있습니다.** 이것이 함수 대신 메소드를 사용하는 핵심적인 이유입니다.

---

## 배열

배열은 JavaScript에 내장되어 있는 자료구조입니다. 배열은 객체의 일종이지만, 내부적으로 특별하게 취급되어 일반적인 객체들과는 다른 특징을 갖고 있습니다.

```js
typeof []; // 'object'
```

배열 안에 들어있는 값들을 **요소(element)** 혹은 **항목(item)**이라고 합니다. 객체와 배열의 가장 큰 차이점은, 배열의 각 요소 간에는 **순서가 있다**는 점입니다.

### 배열 생성하기

#### 배열 리터럴

배열은 **배열 리터럴(array literal)**을 통해서 생성하는 것이 가장 쉽습니다.

```js
const empty = []; // 빈 배열
const numbers = [1, 2, 3]; // 숫자가 들어있는 배열
const strings = ['one', 'two', 'three']; // 문자열이 들어있는 배열
const objects = [{prop: 1}, {prop: 2}, {prop: 3}]; // 객체가 들어있는 배열
const mixed = [1, 'one', {prop: 1}, null]; // 아무거나(?) 들어있는 배열
```

#### Array 생성자

**`Array` 생성자**를 통해서도 배열을 생성할 수 있습니다.

```js
new Array(1); // [empty]
new Array(1000); // [empty × 1000]
new Array(1, 2, 3); // [1, 2, 3]
```

#### Array.of

ES2015에 `Array.of` 정적 메소드가 추가되었습니다.

```js
Array.of(1, 2, 3) // [1, 2, 3]
Array.of(1); // [1]
```

### 요소 읽기

배열의 각 요소는 **인덱스(index)**를 이용해 읽어올 수 있습니다. 인덱스는 **0 이상의 정수**만이 배열의 인덱스가 될 수 있습니다.

```js
const arr = ['one', 'two', 'three'];
arr[0]; // 'one'
arr[1]; // 'two'
arr[2]; // 'three'
arr[3]; // undefined
```

인덱스는 0부터 시작합니다. 즉, **첫 번째 요소를 가리키는 인덱스는 1이 아니라 0입니다.**

### 요소 수정하기

객체와 마찬가지로 대괄호 표기법을 이용해서 요소를 수정할 수 있습니다.

```js
const arr = [false, false, false];
arr[1] = true;
console.log(arr); // [ false, true, false ]
```

### 배열의 끝 부분에서 요소를 추가/제거하기

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
```

### 배열의 시작 부분에서 요소를 추가/제거하기

반대로 `unshift`, `shift` 메소드를 사용해 **배열의 시작 부분에서** 요소를 추가하거나 제거할 수도 있습니다.

```js
const arr = [];
arr.unshift(1); // 1
arr.unshift(2, 3); // 3

console.log(arr); // [ 2, 3, 1 ]

// 배열의 요소 삭제하기
arr.shift(); // 2
arr.shift(); // 3
arr.shift(); // 1
```

### 요소를 배열 중간에 삽입하기

`splice` 메소드를 사용하면 배열에 속해있는 연속된 여러 요소, 즉 배열의 일부분을 통째로 바꿔버릴 수 있습니다.

```js
let arr = [1, 2, 3, 4, 5];

// 인덱스 `1`인 요소부터 `3`개을 바꿔치기 합니다.
arr.splice(1, 3, 'two', 'three', 'four'); // [2, 3, 4]
console.log(arr); // [ 1, 'two', 'three', 'four', 5]
```

---

이 가이드는 JavaScript의 기본적인 개념들을 다룹니다. 각 주제에 대해 더 자세한 내용을 학습하려면 추가적인 자료를 참고하시기 바랍니다. 