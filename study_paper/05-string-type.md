# 문자열 타입 학습지

## 1. 문자열 생성 방법

| 방법 | 문법 | 예시 | 특징 |
|------|------|------|------|
| **작은따옴표** | 'text' | 'Hello World' | 가장 일반적 |
| **큰따옴표** | "text" | "Hello World" | HTML 속성과 구분 |
| **백틱** | \`text\` | \`Hello World\` | 템플릿 리터럴 (ES6) |

```javascript
// 기본 문자열
let str1 = 'Hello';
let str2 = "World";
let str3 = `JavaScript`;

// 따옴표 안에 따옴표
let quote1 = "It's a beautiful day";
let quote2 = 'He said "Hello"';
let quote3 = `She said "It's perfect"`;
```

## 2. 이스케이프 시퀀스

| 시퀀스 | 의미 | 예시 |
|--------|------|------|
| **\\n** | 줄바꿈 | 'Hello\\nWorld' |
| **\\t** | 탭 | 'Hello\\tWorld' |
| **\\r** | 캐리지 리턴 | 'Hello\\rWorld' |
| **\\\\** | 백슬래시 | 'C:\\\\Users' |
| **\\'** | 작은따옴표 | 'It\\'s okay' |
| **\\"** | 큰따옴표 | "Say \\"Hello\\"" |
| **\\`** | 백틱 | \`Use \\`backtick\\`\` |

```javascript
console.log('첫 번째 줄\n두 번째 줄');
console.log('이름:\t김철수');
console.log('경로: C:\\Users\\Kim');
console.log('그는 "안녕"이라고 말했다');
```

## 3. 템플릿 리터럴 (ES6)

| 기능 | 문법 | 예시 |
|------|------|------|
| **문자열 보간** | \${변수} | \`이름: ${name}\` |
| **다중 라인** | 백틱으로 감싸기 | \`첫 줄\n둘째 줄\` |
| **표현식 삽입** | \${표현식} | \`합계: ${a + b}\` |

```javascript
let name = '김철수';
let age = 25;

// 문자열 연결 (기존 방식)
let intro1 = '안녕하세요. 제 이름은 ' + name + '이고, 나이는 ' + age + '세입니다.';

// 템플릿 리터럴 (새로운 방식)
let intro2 = `안녕하세요. 제 이름은 ${name}이고, 나이는 ${age}세입니다.`;

// 다중 라인
let multiLine = `첫 번째 줄
두 번째 줄
세 번째 줄`;

// 표현식 사용
let a = 10, b = 20;
console.log(`${a} + ${b} = ${a + b}`); // "10 + 20 = 30"
```

## 4. 문자열 연산자

| 연산자 | 의미 | 예시 | 결과 |
|--------|------|------|------|
| **+** | 문자열 연결 | 'Hello' + 'World' | 'HelloWorld' |
| **+=** | 연결 후 할당 | str += 'World' | str = str + 'World' |

```javascript
let greeting = 'Hello';
greeting += ' ';     // 'Hello '
greeting += 'World'; // 'Hello World'

// 숫자와 문자열
console.log('나이: ' + 25);        // '나이: 25'
console.log(10 + '20');           // '1020' (숫자가 문자열로 변환)
console.log('10' + 20);           // '1020'
```

## 5. 문자열 속성과 메소드

### 기본 속성

| 속성 | 설명 | 예시 |
|------|------|------|
| **length** | 문자열 길이 | 'Hello'.length // 5 |

### 검색 메소드

| 메소드 | 설명 | 예시 | 결과 |
|--------|------|------|------|
| **indexOf()** | 첫 번째 위치 찾기 | 'Hello'.indexOf('l') | 2 |
| **lastIndexOf()** | 마지막 위치 찾기 | 'Hello'.lastIndexOf('l') | 3 |
| **includes()** | 포함 여부 확인 | 'Hello'.includes('ell') | true |
| **startsWith()** | 시작 여부 확인 | 'Hello'.startsWith('He') | true |
| **endsWith()** | 끝 여부 확인 | 'Hello'.endsWith('lo') | true |

### 추출 메소드

| 메소드 | 설명 | 예시 | 결과 |
|--------|------|------|------|
| **charAt()** | 특정 위치 문자 | 'Hello'.charAt(1) | 'e' |
| **substring()** | 부분 문자열 | 'Hello'.substring(1, 4) | 'ell' |
| **slice()** | 부분 문자열 | 'Hello'.slice(1, 4) | 'ell' |
| **substr()** | 부분 문자열 | 'Hello'.substr(1, 3) | 'ell' |

```javascript
let str = 'Hello World';

// 검색
console.log(str.indexOf('o'));        // 4
console.log(str.indexOf('o', 5));     // 7 (5번째부터 검색)
console.log(str.includes('World'));   // true

// 추출
console.log(str.charAt(6));           // 'W'
console.log(str.substring(6, 11));    // 'World'
console.log(str.slice(-5));           // 'World' (뒤에서 5글자)
```

### 변환 메소드

| 메소드 | 설명 | 예시 | 결과 |
|--------|------|------|------|
| **toUpperCase()** | 대문자 변환 | 'hello'.toUpperCase() | 'HELLO' |
| **toLowerCase()** | 소문자 변환 | 'HELLO'.toLowerCase() | 'hello' |
| **trim()** | 공백 제거 | ' hello '.trim() | 'hello' |
| **replace()** | 문자열 치환 | 'hello'.replace('l', 'x') | 'hexlo' |
| **split()** | 문자열 분할 | 'a,b,c'.split(',') | ['a','b','c'] |

```javascript
let text = '  Hello World  ';

console.log(text.toUpperCase());      // '  HELLO WORLD  '
console.log(text.toLowerCase());      // '  hello world  '
console.log(text.trim());             // 'Hello World'

// replace (첫 번째만 치환)
console.log('hello world'.replace('l', 'x')); // 'hexlo world'

// replaceAll (모든 문자 치환, ES2021)
console.log('hello world'.replaceAll('l', 'x')); // 'hexxo worxd'

// split
let csv = 'apple,banana,orange';
console.log(csv.split(','));          // ['apple', 'banana', 'orange']
```

## 6. 정규식과 함께 사용

| 메소드 | 설명 | 예시 |
|--------|------|------|
| **match()** | 패턴 매칭 | 'abc123'.match(/\d+/) |
| **search()** | 패턴 검색 | 'abc123'.search(/\d/) |
| **replace()** | 패턴 치환 | 'abc123'.replace(/\d/g, 'X') |

```javascript
let text = 'My phone number is 010-1234-5678';

// 숫자만 추출
console.log(text.match(/\d+/g));      // ['010', '1234', '5678']

// 전화번호 패턴 검색
console.log(text.search(/\d{3}-\d{4}-\d{4}/)); // 19

// 숫자를 X로 치환
console.log(text.replace(/\d/g, 'X')); // 'My phone number is XXX-XXXX-XXXX'
```

## 7. 문자열과 배열 변환

```javascript
// 문자열 → 배열
let str = 'Hello';
let arr1 = str.split('');     // ['H','e','l','l','o']
let arr2 = Array.from(str);   // ['H','e','l','l','o']
let arr3 = [...str];          // ['H','e','l','l','o'] (ES6)

// 배열 → 문자열
let fruits = ['apple', 'banana', 'orange'];
let str1 = fruits.join();     // 'apple,banana,orange'
let str2 = fruits.join(' ');  // 'apple banana orange'
let str3 = fruits.join('');   // 'applebananaorange'
```

## 8. 실용 예제

```javascript
// 이메일 유효성 검사
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

// 이름 형식 변환
function formatName(fullName) {
    return fullName.toLowerCase()
                   .split(' ')
                   .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                   .join(' ');
}
console.log(formatName('KIM CHUL SOO')); // 'Kim Chul Soo'

// URL에서 파일명 추출
function getFileName(url) {
    return url.split('/').pop();
}
console.log(getFileName('https://example.com/images/photo.jpg')); // 'photo.jpg'

// 문자열 뒤집기
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello')); // 'olleH'
```

## 9. 학습 체크리스트

- [ ] 세 가지 문자열 생성 방법을 사용할 수 있다
- [ ] 이스케이프 시퀀스를 활용할 수 있다
- [ ] 템플릿 리터럴로 동적 문자열을 만들 수 있다
- [ ] 문자열 검색 메소드들을 사용할 수 있다
- [ ] 문자열 변환 메소드들을 활용할 수 있다
- [ ] 문자열과 배열을 상호 변환할 수 있다 