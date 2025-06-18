# 15. 연산자 심화 - 퀴즈

## 객관식 문제

### 1. 🟡 단축 평가(Short-circuit Evaluation)에 대한 설명으로 올바른 것은?
a) 모든 조건을 항상 평가한다
b) 결과가 확정되면 나머지 조건을 평가하지 않는다
c) 오직 `&&` 연산자에서만 발생한다
d) ES6에서 도입된 새로운 개념이다

### 2. 🟢 다음 중 falsy 값이 아닌 것은?
a) 0
b) ""
c) []
d) null

### 3. 🟠 `??` (Nullish Coalescing) 연산자의 특징으로 올바른 것은?
a) 왼쪽 값이 falsy면 오른쪽 값을 반환한다
b) 왼쪽 값이 null이나 undefined일 때만 오른쪽 값을 반환한다
c) `||` 연산자와 완전히 동일하다
d) 문자열에서만 사용할 수 있다

### 4. 🟡 다음 코드의 결과는?
```javascript
console.log(0 || 5 || 10);
```
a) 0
b) 5
c) 10
d) false

### 5. 🟠 옵셔널 체이닝(`?.`) 연산자에 대한 설명으로 틀린 것은?
a) 중첩된 객체의 속성에 안전하게 접근할 수 있다
b) 메서드 호출에도 사용할 수 있다
c) 배열 인덱스 접근에도 사용할 수 있다
d) ES5에서 도입되었다

### 6. 🟡 다음 코드의 결과는?
```javascript
const obj = null;
console.log(obj?.property?.nested);
```
a) null
b) undefined
c) 에러 발생
d) "property"

## 단답형 문제

### 7. 🟢 `true && false`의 결과는?

### 8. 🟢 `null ?? 'default'`의 결과는?

### 9. 🟡 `false || null || 'hello'`의 결과는?

### 10. 🟠 `undefined?.length`의 결과는?

## 서술형 문제

### 11. 🟡 `||`와 `??` 연산자의 차이점을 예시와 함께 설명하시오.

### 12. 🟠 옵셔널 체이닝의 다양한 사용법(속성, 메서드, 대괄호)을 예시와 함께 설명하시오.

### 13. 🟡 단축 평가를 활용한 실용적인 패턴들을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 코드를 단축 평가를 사용하여 간단히 작성하시오.
```javascript
// 기존 코드
function greet(name) {
  if (name) {
    console.log('Hello, ' + name);
  } else {
    console.log('Hello, Guest');
  }
}
```

### 15. 🟡 옵셔널 체이닝과 Nullish Coalescing을 사용하여 안전한 데이터 접근 함수를 작성하시오.
```javascript
const user = {
  profile: {
    name: 'Alice',
    address: {
      city: 'Seoul'
    }
  }
};
// 안전하게 user.profile.address.city에 접근하고 기본값 제공
```

### 16. 🟠 다음 요구사항을 만족하는 함수를 작성하시오.
- 여러 값 중 첫 번째 truthy 값을 반환
- 모든 값이 falsy면 마지막 값 반환
- 단축 평가 활용

### 17. 🟡 조건부 속성 설정을 위한 유틸리티 함수를 작성하시오.
```javascript
// 사용 예시
const config = conditionalProps({
  name: 'MyApp',
  version: '1.0.0',
  debug: isDevelopment && true,
  apiKey: process.env.API_KEY || undefined
});
// falsy 값들은 제외하고 객체 생성
```

## 응용 문제

### 18. 🟠 다음 코드들의 실행 결과를 예상하고 차이점을 설명하시오.
```javascript
const a = null;
const b = '';

console.log(a || 'default');
console.log(a ?? 'default');
console.log(b || 'default');
console.log(b ?? 'default');
```

### 19. 🟠 복잡한 중첩 객체에서 안전하게 값을 추출하는 함수를 작성하시오.
```javascript
const data = {
  users: [
    {
      id: 1,
      profile: {
        personal: {
          name: 'Alice'
        }
      }
    }
  ]
};
// users[0].profile.personal.name을 안전하게 가져오기
```

### 20. 🟠 단축 평가를 활용한 캐싱 시스템을 구현하시오.
- 함수 호출 결과를 캐시
- 캐시가 있으면 캐시 반환, 없으면 계산 후 캐시 저장
- 단축 평가 패턴 활용

---

## 정답

### 객관식 정답
1. b) 결과가 확정되면 나머지 조건을 평가하지 않는다
2. c) [] (빈 배열은 truthy 값)
3. b) 왼쪽 값이 null이나 undefined일 때만 오른쪽 값을 반환한다
4. b) 5 (첫 번째 truthy 값)
5. d) ES5에서 도입되었다 (ES2020에서 도입됨)
6. b) undefined

### 단답형 정답
7. `false`
8. `'default'`
9. `'hello'`
10. `undefined`

### 서술형 정답
11. **`||` vs `??` 연산자:**
```javascript
// || 연산자: 왼쪽이 falsy면 오른쪽 반환
console.log(0 || 'default');      // 'default'
console.log('' || 'default');     // 'default'
console.log(null || 'default');   // 'default'

// ?? 연산자: 왼쪽이 null/undefined일 때만 오른쪽 반환
console.log(0 ?? 'default');      // 0
console.log('' ?? 'default');     // ''
console.log(null ?? 'default');   // 'default'
```

12. **옵셔널 체이닝 사용법:**
```javascript
const user = {
  profile: {
    getName() { return 'Alice'; }
  },
  hobbies: ['reading', 'coding']
};

// 속성 접근
console.log(user?.profile?.age);        // undefined

// 메서드 호출
console.log(user?.profile?.getName?.()); // 'Alice'

// 대괄호 표기법
console.log(user?.hobbies?.[0]);        // 'reading'
console.log(user?.hobbies?.[10]);       // undefined
```

13. **단축 평가 실용 패턴:**
- **조건부 실행**: `condition && executeFunction()`
- **기본값 설정**: `value || defaultValue`
- **null 체크**: `obj && obj.method()`
- **조건부 렌더링**: `isLoggedIn && <UserMenu />`

### 코딩 정답
14.
```javascript
// 단축 평가 사용
function greet(name) {
  console.log('Hello, ' + (name || 'Guest'));
}

// 또는
function greet(name) {
  name && console.log('Hello, ' + name) || console.log('Hello, Guest');
}

// 더 간단한 버전
const greet = (name) => console.log(`Hello, ${name || 'Guest'}`);
```

15.
```javascript
function safeGetCity(user) {
  return user?.profile?.address?.city ?? 'Unknown City';
}

// 또는 더 일반적인 함수
function safeGet(obj, path, defaultValue = undefined) {
  return path.split('.')
    .reduce((current, key) => current?.[key], obj) ?? defaultValue;
}

// 사용 예시
const city = safeGet(user, 'profile.address.city', 'Unknown City');
console.log(city); // 'Seoul'

const phone = safeGet(user, 'profile.contact.phone', 'No Phone');
console.log(phone); // 'No Phone'
```

16.
```javascript
function firstTruthy(...values) {
  return values.reduce((acc, current) => acc || current);
}

// 또는 더 간단하게
const firstTruthy = (...values) => values.find(val => val) || values[values.length - 1];

// 사용 예시
console.log(firstTruthy(null, 0, '', 'hello', 'world')); // 'hello'
console.log(firstTruthy(null, 0, false));                // false (마지막 값)
```

17.
```javascript
function conditionalProps(obj) {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    value && (result[key] = value);
  }
  
  return result;
}

// 또는 filter 방식
function conditionalProps(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value)
  );
}

// 사용 예시
const isDevelopment = true;
const config = conditionalProps({
  name: 'MyApp',
  version: '1.0.0',
  debug: isDevelopment && true,
  apiKey: process.env.API_KEY || undefined,
  timeout: 0, // 제외됨 (falsy)
  retries: null // 제외됨 (falsy)
});

console.log(config); // { name: 'MyApp', version: '1.0.0', debug: true }
```

### 응용 정답
18.
```javascript
const a = null;
const b = '';

console.log(a || 'default');  // 'default' (null은 falsy)
console.log(a ?? 'default');  // 'default' (null은 nullish)
console.log(b || 'default');  // 'default' (빈 문자열은 falsy)
console.log(b ?? 'default');  // '' (빈 문자열은 nullish가 아님)

// 핵심 차이점: ??는 null/undefined만 체크, ||는 모든 falsy 값 체크
```

19.
```javascript
function safeExtract(obj, path) {
  try {
    return path.split('.').reduce((current, key) => {
      // 배열 인덱스 처리
      if (key.includes('[') && key.includes(']')) {
        const [prop, indexStr] = key.split(/\[|\]/);
        const index = parseInt(indexStr);
        return current?.[prop]?.[index];
      }
      return current?.[key];
    }, obj);
  } catch (error) {
    return undefined;
  }
}

// 더 강력한 버전 (대괄호 표기법 지원)
function safeExtractAdvanced(obj, path) {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  return keys.reduce((current, key) => current?.[key], obj);
}

// 사용 예시
const data = {
  users: [
    {
      id: 1,
      profile: {
        personal: {
          name: 'Alice'
        }
      }
    }
  ]
};

console.log(safeExtract(data, 'users[0].profile.personal.name')); // 'Alice'
console.log(safeExtract(data, 'users[0].profile.work.company'));  // undefined
```

20.
```javascript
function createCachedFunction(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    // 단축 평가를 활용한 캐싱
    return cache.has(key) && cache.get(key) || 
           (cache.set(key, fn.apply(this, args)) && cache.get(key));
  };
}

// 더 읽기 쉬운 버전
function createCachedFunctionReadable(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    // 캐시에 있으면 캐시 반환, 없으면 계산 후 캐시 저장
    const cached = cache.get(key);
    return cached ?? (cache.set(key, fn.apply(this, args)), cache.get(key));
  };
}

// 사용 예시
const expensiveFunction = (n) => {
  console.log(`계산 중: ${n}`);
  return n * n * n;
};

const cachedFunction = createCachedFunction(expensiveFunction);

console.log(cachedFunction(5)); // "계산 중: 5", 125
console.log(cachedFunction(5)); // 125 (캐시에서 반환, 계산 안함)
console.log(cachedFunction(3)); // "계산 중: 3", 27
```