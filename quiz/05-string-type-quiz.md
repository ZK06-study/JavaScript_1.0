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

## 코딩 문제

### 11. 다음 요구사항에 따라 코드를 작성하시오.
- 이름과 나이 변수를 사용하여 템플릿 리터럴로 자기소개 문장 만들기

### 12. 다음 문자열 결합의 결과를 쓰시오.
```js
'Hello' + ', ' + 'World' + '!';
```

### 13. 다음 템플릿 리터럴의 결과를 쓰시오.
```js
const name = 'JavaScript';
`안녕하세요, ${name}입니다!`;
```

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

### 코딩 정답
11.
```js
const name = '홍길동';
const age = 25;
const introduction = `안녕하세요, 제 이름은 ${name}이고 나이는 ${age}살입니다.`;
```

12.
```js
'Hello, World!'
```

13.
```js
'안녕하세요, JavaScript입니다!'
```

