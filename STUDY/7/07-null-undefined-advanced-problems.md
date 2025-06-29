# null과 undefined 심화 문제 (Advanced Null & Undefined Problems)

이전 학습 내용: null과 undefined의 차이, 동등성 연산자, null 체크 패턴, 타입 안전성

## 문제 1: 안전한 객체 탐색기 (Safe Object Navigator)

### 문제 설명
중첩된 객체에서 안전하게 값을 추출하고, null/undefined 처리를 자동화하는 시스템을 구현하세요.

### 요구 사항
```javascript
function safeGet(obj, path, defaultValue = undefined) {
  // 경로 문자열을 사용하여 안전하게 값 추출
  // 'user.profile.address.city' 형태의 경로 지원
  // 중간에 null/undefined가 있어도 에러 없이 처리
}

function safeSet(obj, path, value, createPath = false) {
  // 안전하게 값 설정
  // createPath가 true면 중간 경로 자동 생성
}

function deepCleanObject(obj, options = {}) {
  // 객체에서 null/undefined/빈 값 제거
  // options: { removeNull: true, removeUndefined: true, removeEmpty: false }
}
```

### 예시
```javascript
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: null,
    settings: {
      theme: "dark",
      notifications: undefined
    }
  }
};

safeGet(user, 'profile.address.city', 'Unknown');
// 'Unknown' (address가 null이므로 기본값 반환)

safeGet(user, 'profile.settings.theme');
// 'dark'

safeSet(user, 'profile.address.city', 'Seoul', true);
// address 객체를 생성하고 city 설정

deepCleanObject(user, { removeNull: true, removeUndefined: true });
// null과 undefined 값들이 제거된 새 객체 반환
```

### 채점 기준
- 안전한 경로 탐색 (30점)
- 동적 경로 설정 (25점)
- 깊은 정리 기능 (25점)
- 에러 처리 및 타입 안전성 (20점)

---

## 문제 2: 데이터 검증 및 정제기 (Data Validator & Sanitizer)

### 문제 설명
API 응답이나 사용자 입력에서 null/undefined를 적절히 처리하고 데이터를 검증하는 시스템을 구현하세요.

### 요구 사항
```javascript
function validateAndSanitize(data, schema) {
  // schema: 각 필드의 검증 규칙과 기본값 정의
  // {
  //   fieldName: {
  //     required: boolean,
  //     type: 'string' | 'number' | 'boolean' | 'object' | 'array',
  //     defaultValue: any,
  //     allowNull: boolean,
  //     transform: function
  //   }
  // }
}

function mergeWithDefaults(target, defaults, strategy = 'shallow') {
  // target 객체에 없는 값들을 defaults에서 채움
  // strategy: 'shallow', 'deep', 'selective'
}

function isEffectivelyEmpty(value) {
  // null, undefined뿐만 아니라 의미있는 빈 값들도 판단
  // 빈 문자열, 빈 배열, 빈 객체, NaN 등
}
```

### 예시
```javascript
const apiResponse = {
  name: "Product A",
  price: null,
  description: "",
  tags: undefined,
  metadata: {
    weight: 1.5,
    dimensions: null
  }
};

const productSchema = {
  name: { required: true, type: 'string' },
  price: { required: true, type: 'number', defaultValue: 0 },
  description: { required: false, type: 'string', defaultValue: 'No description' },
  tags: { required: false, type: 'array', defaultValue: [] },
  metadata: {
    weight: { required: false, type: 'number', allowNull: true },
    dimensions: { required: false, type: 'object', defaultValue: {} }
  }
};

validateAndSanitize(apiResponse, productSchema);
// {
//   valid: true,
//   data: {
//     name: "Product A",
//     price: 0,
//     description: "No description",
//     tags: [],
//     metadata: { weight: 1.5, dimensions: {} }
//   },
//   errors: []
// }

isEffectivelyEmpty(""); // true
isEffectivelyEmpty([]); // true
isEffectivelyEmpty({}); // true
isEffectivelyEmpty(null); // true
isEffectivelyEmpty(0); // false
```

### 채점 기준
- 스키마 기반 검증 (30점)
- 기본값 및 변환 처리 (25점)
- 깊은 병합 알고리즘 (25점)
- 빈 값 판단 로직 (20점)

---

## 문제 3: 옵셔널 체이닝 구현체 (Optional Chaining Implementation)

### 문제 설명
ES2020의 옵셔널 체이닝(?.)과 null 병합 연산자(??)를 구현하고 확장하는 시스템을 만드세요.

### 요구 사항
```javascript
function optional(obj) {
  // 프록시를 사용하여 옵셔널 체이닝 구현
  // obj?.prop?.method?.() 와 같은 동작 모방
}

function nullish(value, ...alternatives) {
  // null 병합 연산자 확장 버전
  // 여러 대안값 지원
}

function pipe(initialValue, ...operations) {
  // null-safe 파이프라인 구현
  // 중간에 null/undefined가 나오면 안전하게 중단
}
```

### 예시
```javascript
const userData = {
  user: {
    profile: {
      getName: () => "John",
      getAge: () => null
    }
  }
};

const safeUser = optional(userData);
safeUser.user.profile.getName(); // "John"
safeUser.user.profile.getAge(); // null
safeUser.user.profile.getAddress(); // undefined (에러 없음)
safeUser.user.missing.property; // undefined (에러 없음)

nullish(null, undefined, 0, "default"); // 0 (첫 번째 non-nullish 값)
nullish(null, undefined, null, "fallback"); // "fallback"

// null-safe 파이프라인
const result = pipe(
  userData,
  data => data.user,
  user => user.profile,
  profile => profile.getName(),
  name => name.toUpperCase()
); // "JOHN"

const failResult = pipe(
  userData,
  data => data.user,
  user => user.nonexistent, // undefined 반환
  missing => missing.someMethod() // 실행되지 않음
); // undefined
```

### 채점 기준
- 프록시 기반 옵셔널 체이닝 (35점)
- null 병합 연산자 확장 (25점)
- 안전한 파이프라인 구현 (25점)
- 성능 최적화 (15점)

---

## 문제 4: 메모리 효율적 캐시 시스템 (Memory-Efficient Cache System)

### 문제 설명
null/undefined 값도 적절히 캐싱하면서 메모리 누수를 방지하는 스마트 캐시 시스템을 구현하세요.

### 요구 사항
```javascript
function createSmartCache(options = {}) {
  // options: {
  //   maxSize: number,
  //   ttl: number, // time to live
  //   allowNull: boolean,
  //   allowUndefined: boolean,
  //   onEvict: function
  // }
  
  return {
    get: function(key),
    set: function(key, value, customTTL),
    has: function(key), // null/undefined 구분하여 존재 확인
    delete: function(key),
    clear: function(),
    stats: function(), // 캐시 통계
    cleanup: function() // 만료된 항목 정리
  };
}

function createNullSafeProxy(target, handler) {
  // null/undefined에 대한 안전한 프록시 래퍼
}
```

### 예시
```javascript
const cache = createSmartCache({
  maxSize: 100,
  ttl: 5000, // 5초
  allowNull: true,
  allowUndefined: false
});

cache.set('user1', { name: 'John' });
cache.set('user2', null); // null 값도 캐싱
cache.set('user3', undefined); // 거부됨 (allowUndefined: false)

cache.has('user1'); // true
cache.has('user2'); // true (null 값이지만 존재함)
cache.has('user3'); // false

cache.get('user2'); // null
cache.get('nonexistent'); // undefined

// 통계 확인
cache.stats();
// {
//   size: 2,
//   hits: 3,
//   misses: 1,
//   evictions: 0,
//   nullValues: 1
// }

// 프록시 래퍼 사용
const safeApi = createNullSafeProxy(someApi, {
  onNullAccess: (prop) => console.warn(`Accessing null property: ${prop}`),
  onUndefinedAccess: (prop) => console.warn(`Accessing undefined property: ${prop}`)
});
```

### 채점 기준
- 캐시 기본 기능 및 TTL (25점)
- null/undefined 구분 처리 (30점)
- 메모리 관리 및 LRU 구현 (25점)
- 통계 및 모니터링 (20점)

---

## 문제 5: 타입 안전 API 클라이언트 (Type-Safe API Client)

### 문제 설명
API 응답에서 null/undefined를 안전하게 처리하고, 타입 안전성을 보장하는 HTTP 클라이언트를 구현하세요.

### 요구 사항
```javascript
function createApiClient(baseURL, options = {}) {
  // options: {
  //   nullStrategy: 'ignore' | 'error' | 'default',
  //   undefinedStrategy: 'ignore' | 'error' | 'default',
  //   timeout: number,
  //   retries: number
  // }
  
  return {
    get: function(path, schema),
    post: function(path, data, schema),
    put: function(path, data, schema),
    delete: function(path, schema)
  };
}

function createResponseSchema(definition) {
  // 응답 스키마 정의 및 검증
}

function handleApiError(error, context) {
  // null/undefined 관련 에러를 포함한 API 에러 처리
}
```

### 예시
```javascript
const api = createApiClient('https://api.example.com', {
  nullStrategy: 'default',
  undefinedStrategy: 'error',
  timeout: 5000,
  retries: 3
});

const userSchema = createResponseSchema({
  id: { type: 'number', required: true },
  name: { type: 'string', required: true },
  email: { type: 'string', required: false, defaultValue: null },
  avatar: { type: 'string', required: false },
  preferences: {
    theme: { type: 'string', defaultValue: 'light' },
    notifications: { type: 'boolean', defaultValue: true }
  }
});

// API 호출
api.get('/users/123', userSchema)
  .then(result => {
    // {
    //   success: true,
    //   data: { id: 123, name: 'John', email: null, avatar: undefined, ... },
    //   warnings: ['avatar field was undefined, replaced with null'],
    //   schema: userSchema
    // }
  })
  .catch(error => {
    handleApiError(error, { endpoint: '/users/123', schema: userSchema });
  });

// POST 요청 with null handling
api.post('/users', {
  name: 'Jane',
  email: null, // 명시적 null
  preferences: {
    theme: undefined // 기본값으로 대체됨
  }
}, userSchema);
```

### 고급 요구사항
- 요청/응답 인터셉터
- 자동 재시도 로직 (null 관련 오류시)
- 캐싱 통합
- 타입스크립트 타입 정의 생성

### 채점 기준
- API 클라이언트 기본 기능 (25점)
- 스키마 검증 및 null 처리 (30점)
- 에러 처리 및 재시도 로직 (25점)
- 성능 및 확장성 (20점)

---

## 채점 방식
- 각 문제는 100점 만점
- 전체 점수: 500점 만점
- 등급: A(450+), B(400+), C(350+), D(300+), F(300 미만)

## 추가 도전 과제
1. WeakMap을 활용한 메모리 효율적 null 참조 추적
2. null/undefined 처리 성능 벤치마킹
3. 함수형 프로그래밍 패턴으로 Maybe/Option 타입 구현
4. GraphQL 스타일 null 처리 시스템
5. 동시성 환경에서의 null-safe 데이터 구조