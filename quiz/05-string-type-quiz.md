# 05. string 타입 - 퀴즈

## 객관식 문제

### 1. 템플릿 리터럴을 작성할 때 사용하는 기호는?
a) 홑따옴표 (')
b) 쌍따옴표 (")
c) 백틱 (`)
d) 슬래시 (/)

### 2. 다음 중 escape sequence가 아닌 것은?
a) `\n`
b) `\t`
c) `\s`
d) `\\`

### 3. `'hello'.length`의 결과는?
a) 4
b) 5
c) 6
d) 에러

### 4. 템플릿 리터럴의 내삽(interpolation) 기능에서 사용하는 문법은?
a) `{변수명}`
b) `${변수명}`
c) `#{변수명}`
d) `@{변수명}`

### 5. 다음 중 문자열을 대문자로 변환하는 메소드는?
a) `toUpperCase()`
b) `toUpper()`
c) `upperCase()`
d) `upper()`

### 6. `'hello javascript'.indexOf('java')`의 결과는?
a) 5
b) 6
c) 7
d) -1

## 단답형 문제

### 7. `typeof 'hello'`의 결과를 쓰시오.

### 8. `'hello' === "hello"`의 결과를 쓰시오.

### 9. `'*'.repeat(3)`의 결과를 쓰시오.

### 10. `'   hello  '.trim()`의 결과를 쓰시오.

## 서술형 문제

### 11. 템플릿 리터럴의 장점 두 가지를 설명하시오.

### 12. 유니코드 코드포인트 비교와 사전순 비교의 차이점을 설명하고, 사전순 비교를 위한 메소드를 제시하시오.

### 13. JavaScript에서 문자열이 내부적으로 어떻게 표현되는지 설명하시오.

## 코딩 문제

### 14. 다음 요구사항에 따라 코드를 작성하시오.
- 이름과 나이 변수를 사용하여 템플릿 리터럴로 자기소개 문장 만들기

### 15. 문자열에서 특정 단어가 포함되어 있는지 확인하는 세 가지 방법을 코드로 작성하시오.

### 16. 다음 문자열 조작을 수행하는 코드를 작성하시오.
```js
const str = 'Hello World JavaScript';
// 1. 모두 소문자로 변환
// 2. 공백을 기준으로 배열로 분리
// 3. 'JavaScript'를 'TypeScript'로 교체
```

### 17. 여러 줄 문자열을 일반 문자열 리터럴과 템플릿 리터럴 두 가지 방법으로 작성하시오.

## 응용 문제

### 18. 다음 코드의 실행 결과를 예상하고 설명하시오.
```js
console.log('2' < '10');
console.log('a' < 'Z');
```

### 19. 이메일 주소의 유효성을 간단히 검사하는 함수를 문자열 메소드를 사용하여 작성하시오.

### 20. Tagged template literal의 개념을 설명하고 간단한 예제를 제시하시오.

---

## 정답

### 객관식 정답
1. c) 백틱 (`)
2. c) `\s`
3. b) 5
4. b) `${변수명}`
5. a) `toUpperCase()`
6. b) 6

### 단답형 정답
7. `'string'`
8. `true`
9. `'***'`
10. `'hello'`

### 서술형 정답
11. ① 내삽 기능으로 변수를 문자열에 쉽게 삽입할 수 있다 ② 여러 줄 문자열을 쉽게 표현할 수 있다

12. 유니코드 코드포인트 비교는 문자의 유니코드 값을 직접 비교하여 사전순과 다를 수 있다. 사전순 비교를 위해서는 `localeCompare()` 메소드를 사용한다.

13. JavaScript 문자열은 내부적으로 UTF-16 형식으로 인코딩된 값으로 다뤄진다.

### 코딩 정답
14.
```js
const name = '홍길동';
const age = 25;
const introduction = `안녕하세요, 제 이름은 ${name}이고 나이는 ${age}살입니다.`;
```

15.
```js
const str = 'hello javascript';
const word = 'java';

// 방법 1: includes()
console.log(str.includes(word));

// 방법 2: indexOf()
console.log(str.indexOf(word) !== -1);

// 방법 3: startsWith() 또는 endsWith()
console.log(str.startsWith('hello'));
```

16.
```js
const str = 'Hello World JavaScript';

// 1. 모두 소문자로 변환
const lowerStr = str.toLowerCase();

// 2. 공백을 기준으로 배열로 분리
const words = str.split(' ');

// 3. 'JavaScript'를 'TypeScript'로 교체
const replacedStr = str.replace('JavaScript', 'TypeScript');
```

17.
```js
// 일반 문자열 리터럴
const multiLine1 = 'hello\nworld\nhello\njavascript!';

// 템플릿 리터럴
const multiLine2 = `hello
world
hello
javascript!`;
```

### 응용 정답
18.
```js
console.log('2' < '10'); // false (유니코드 비교: '2'(50) > '1'(49))
console.log('a' < 'Z');  // false (유니코드 비교: 'a'(97) > 'Z'(90))
```

19.
```js
function isValidEmail(email) {
  return email.includes('@') && 
         email.indexOf('@') > 0 && 
         email.lastIndexOf('@') === email.indexOf('@') &&
         email.endsWith('.com') || email.endsWith('.net');
}
```

20.
Tagged template literal은 템플릿 리터럴 앞에 함수를 붙여 호출하는 특별한 함수 호출 방식이다.
```js
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `<em>${values[i]}</em>` : '');
  }, '');
}

const name = 'JavaScript';
const result = highlight`Hello ${name} World!`;
```

## 실습 코딩 문제

### 문제 1: 문자열 뒤집기

**문제 설명**
문자열 s를 입력받아서 문자열을 거꾸로 뒤집은 결과를 반환하는 함수를 작성하세요.

**제한사항**
- 문자열의 길이는 1 이상 1000 이하
- 영어 대소문자, 숫자, 공백으로만 구성

**입출력 예**
| s | result |
|---|--------|
| "hello" | "olleh" |
| "JavaScript" | "tpircSavaJ" |
| "123 abc" | "cba 321" |

**입출력 예 설명**

**입출력 예 #1**
"hello"를 뒤집으면 "olleh"입니다.

**입출력 예 #2**
"JavaScript"를 뒤집으면 "tpircSavaJ"입니다.

---

### 문제 2: 특정 문자 개수 세기

**문제 설명**
문자열 str에서 특정 문자 char가 몇 번 나타나는지 세는 함수를 작성하세요.
대소문자를 구분합니다.

**제한사항**
- 문자열의 길이는 1 이상 1000 이하
- char는 한 개의 문자

**입출력 예**
| str | char | result |
|-----|------|--------|
| "hello world" | "l" | 3 |
| "JavaScript" | "a" | 2 |
| "Programming" | "m" | 2 |

**입출력 예 설명**

**입출력 예 #1**
"hello world"에서 "l"은 3번 나타납니다.

**입출력 예 #2**
"JavaScript"에서 "a"는 2번 나타납니다.

---

### 문제 3: 팰린드롬 검사

**문제 설명**
주어진 문자열이 팰린드롬(앞뒤가 똑같은 단어)인지 확인하는 함수를 작성하세요.
대소문자는 구분하지 않으며, 공백은 무시합니다.

**제한사항**
- 문자열의 길이는 1 이상 100 이하
- 영어 알파벳과 공백으로만 구성

**입출력 예**
| s | result |
|---|--------|
| "level" | true |
| "A man a plan a canal Panama" | true |
| "hello" | false |

**입출력 예 설명**

**입출력 예 #1**
"level"은 앞뒤가 똑같으므로 팰린드롬입니다.

**입출력 예 #2**
공백을 제거하고 소문자로 변환하면 "amanaplanacanalpanama"로 팰린드롬입니다.