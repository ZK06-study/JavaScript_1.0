# 문자열 타입 심화 문제 (Advanced String Type Problems)

이전 학습 내용: 값과 변수, 문자열 기본 개념, 템플릿 리터럴, 문자열 메소드

## 문제 1: 텍스트 포맷터 (Text Formatter)

### 문제 설명
사용자가 입력한 텍스트를 다양한 형식으로 변환하는 함수를 작성하세요.

### 요구 사항
```javascript
function formatText(text, options) {
  // options 객체:
  // - case: 'upper', 'lower', 'title', 'camel', 'snake'
  // - removeSpaces: boolean
  // - maxLength: number (초과시 '...' 추가)
  // - prefix: string
  // - suffix: string
}
```

### 예시
```javascript
formatText("hello world javascript", {
  case: "title",
  maxLength: 15,
  prefix: ">>> ",
  suffix: " <<<"
}); 
// ">>> Hello World..."

formatText("user input data", {
  case: "camel",
  removeSpaces: true
}); 
// "userInputData"

formatText("API_RESPONSE_DATA", {
  case: "snake",
  removeSpaces: false
}); 
// "api_response_data"
```

### 채점 기준
- 모든 case 옵션 정확히 구현 (25점)
- 길이 제한과 말줄임표 처리 (20점)
- prefix/suffix 처리 (20점)
- 공백 제거 옵션 (15점)
- 예외 상황 처리 (20점)

---

## 문제 2: 문자열 패턴 매칭 (String Pattern Matching)

### 문제 설명
주어진 텍스트에서 특정 패턴을 찾고 분석하는 함수를 작성하세요.

### 요구 사항
```javascript
function analyzePattern(text, pattern) {
  // 반환값: {
  //   matches: 매칭된 문자열들의 배열,
  //   positions: 각 매칭의 시작 위치 배열,
  //   count: 총 매칭 횟수,
  //   percentage: 전체 텍스트에서 패턴이 차지하는 비율
  // }
}
```

### 예시
```javascript
analyzePattern("Hello world! Hello everyone!", "Hello");
// {
//   matches: ["Hello", "Hello"],
//   positions: [0, 13],
//   count: 2,
//   percentage: 43.48  // 10글자/23글자 * 100
// }

analyzePattern("abcabcabc", "abc");
// {
//   matches: ["abc", "abc", "abc"],
//   positions: [0, 3, 6],
//   count: 3,
//   percentage: 100.0
// }
```

### 채점 기준
- 모든 매칭 위치 정확히 찾기 (30점)
- 겹치는 패턴 처리 (25점)
- 백분율 계산 정확성 (20점)
- 빈 문자열/null 처리 (15점)
- 대소문자 구분 없는 옵션 추가 (10점)

---

## 문제 3: 문자열 압축기 (String Compressor)

### 문제 설명
연속된 같은 문자를 개수와 함께 압축하고, 다시 원본으로 복원하는 함수를 작성하세요.

### 요구 사항
```javascript
function compress(str) {
  // "aaabbcc" → "a3b2c2"
  // "abc" → "a1b1c1" 또는 "abc" (더 짧은 것 선택)
}

function decompress(compressed) {
  // "a3b2c2" → "aaabbcc"
}
```

### 예시
```javascript
compress("aaabbccccdeeeee");
// "a3b2c4d1e5"

compress("abcdef");
// "abcdef" (압축해도 더 길어지므로 원본 반환)

decompress("a3b2c4d1e5");
// "aaabbccccdeeeee"

decompress("abcdef");
// "abcdef"
```

### 고급 요구사항
- 압축된 문자열이 원본보다 길면 원본 반환
- 숫자가 포함된 문자열도 처리 가능해야 함
- 유니코드 문자 지원

### 채점 기준
- 기본 압축/복원 기능 (40점)
- 효율성 비교 및 최적 선택 (25점)
- 숫자 포함 문자열 처리 (20점)
- 에러 처리 및 유니코드 지원 (15점)

---

## 문제 4: 스마트 문자열 파서 (Smart String Parser)

### 문제 설명
다양한 형식의 데이터가 포함된 문자열을 파싱하여 구조화된 객체로 변환하는 함수를 작성하세요.

### 요구 사항
```javascript
function parseDataString(dataStr) {
  // 입력 예시: "name:John,age:25,skills:JS|Python|React,active:true"
  // 출력: {
  //   name: "John",
  //   age: 25,
  //   skills: ["JS", "Python", "React"],
  //   active: true
  // }
}
```

### 예시
```javascript
parseDataString("title:JavaScript Guide,pages:150,topics:variables|functions|objects,published:true");
// {
//   title: "JavaScript Guide",
//   pages: 150,
//   topics: ["variables", "functions", "objects"],
//   published: true
// }

parseDataString("product:Laptop,price:999.99,colors:black|silver,inStock:false");
// {
//   product: "Laptop",
//   price: 999.99,
//   colors: ["black", "silver"],
//   inStock: false
// }
```

### 고급 요구사항
- 자동 타입 변환 (숫자, 불린, 배열)
- 중첩된 객체 지원
- 이스케이프 문자 처리

### 채점 기준
- 기본 키-값 파싱 (25점)
- 자동 타입 변환 (25점)
- 배열 처리 (25점)
- 예외 상황 및 에러 처리 (15점)
- 성능 최적화 (10점)

---

## 문제 5: 텍스트 마스킹 & 유효성 검사 (Text Masking & Validation)

### 문제 설명
개인정보를 마스킹하고, 다양한 형식의 유효성을 검사하는 함수들을 작성하세요.

### 요구 사항
```javascript
function maskSensitiveData(text, type) {
  // type: 'email', 'phone', 'credit-card', 'name'
}

function validateFormat(text, format) {
  // format: 'email', 'phone', 'url', 'korean-name', 'password'
  // 반환: { isValid: boolean, errors: string[] }
}
```

### 예시
```javascript
maskSensitiveData("john.doe@example.com", "email");
// "j***.d**@ex*****.com"

maskSensitiveData("010-1234-5678", "phone");
// "010-****-5678"

maskSensitiveData("1234-5678-9012-3456", "credit-card");
// "****-****-****-3456"

validateFormat("test@domain", "email");
// { isValid: false, errors: ["Missing top-level domain"] }

validateFormat("secure123!@#", "password");
// { isValid: true, errors: [] }
```

### 고급 요구사항
- 다양한 마스킹 패턴 지원
- 복합 유효성 검사 (길이, 특수문자, 형식 등)
- 지역화된 형식 지원 (한국 전화번호, 주민번호 등)

### 채점 기준
- 기본 마스킹 기능 (30점)
- 다양한 형식 유효성 검사 (30점)
- 상세한 에러 메시지 (20점)
- 지역화 및 고급 패턴 (20점)

---

## 채점 방식
- 각 문제는 100점 만점
- 전체 점수: 500점 만점
- 등급: A(450+), B(400+), C(350+), D(300+), F(300 미만)

## 추가 도전 과제
1. 모든 함수에 JSDoc 주석 작성
2. 에러 처리 및 타입 검증 강화
3. 성능 최적화 (큰 문자열 처리)
4. 유니코드 및 다국어 지원 확장
5. 함수형 프로그래밍 패턴 적용