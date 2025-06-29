# 함수 심화 문제 (Advanced Function Problems)

이전 학습 내용: 함수 정의와 호출, 매개변수와 인수, 반환값, 스코프와 스코프 연쇄, 변수 가리기, 어휘적 스코핑, 1급 함수, 화살표 함수

## 문제 1: 고차 함수 유틸리티 라이브러리 (Higher-Order Function Utility Library)

### 문제 설명
함수를 조작하고 조합하는 고차 함수들로 구성된 유틸리티 라이브러리를 구현하세요.

### 요구 사항
```javascript
function memoize(fn, options = {}) {
  // 함수 결과를 캐싱하여 성능 최적화
  // options: { maxSize: number, ttl: number, keyGenerator: function }
}

function debounce(fn, delay, options = {}) {
  // 함수 호출을 지연시켜 과도한 호출 방지
  // options: { leading: boolean, trailing: boolean, maxWait: number }
}

function throttle(fn, limit, options = {}) {
  // 함수 호출 빈도 제한
  // options: { leading: boolean, trailing: boolean }
}

function compose(...functions) {
  // 함수들을 오른쪽에서 왼쪽으로 조합
  // compose(f, g, h)(x) === f(g(h(x)))
}

function pipe(...functions) {
  // 함수들을 왼쪽에서 오른쪽으로 조합
  // pipe(f, g, h)(x) === h(g(f(x)))
}

function curry(fn, arity = fn.length) {
  // 함수를 커링하여 부분 적용 가능하게 만듦
}
```

### 예시
```javascript
// 메모이제이션
const expensiveCalculation = memoize((n) => {
  console.log(`Computing for ${n}`);
  return n * n * n;
}, { maxSize: 100, ttl: 60000 });

expensiveCalculation(5); // "Computing for 5", 반환: 125
expensiveCalculation(5); // 캐시에서 반환: 125 (console.log 없음)

// 디바운스
const saveData = debounce((data) => {
  console.log('Saving:', data);
}, 1000, { leading: false, trailing: true });

// 여러 번 빠르게 호출해도 마지막 호출 후 1초 뒤에만 실행됨

// 함수 조합
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const square = (x) => x * x;

const composedFn = compose(square, multiply, add);
composedFn(3); // square(multiply(add(3))) = square(multiply(4)) = square(8) = 64

const pipedFn = pipe(add, multiply, square);
pipedFn(3); // square(multiply(add(3))) = square(multiply(4)) = square(8) = 64

// 커링
const add3Numbers = curry((a, b, c) => a + b + c);
const add5 = add3Numbers(5);
const add5And3 = add5(3);
add5And3(2); // 10
```

### 채점 기준
- 메모이제이션 구현 (20점)
- 디바운스/스로틀 구현 (25점)
- 함수 조합 (compose/pipe) (25점)
- 커링 구현 (20점)
- 성능 최적화 및 메모리 관리 (10점)

---

## 문제 2: 함수형 데이터 처리 파이프라인 (Functional Data Processing Pipeline)

### 문제 설명
함수형 프로그래밍 패턴을 사용하여 복잡한 데이터 변환 파이프라인을 구현하세요.

### 요구 사항
```javascript
function createPipeline(initialData) {
  // 체이닝 가능한 데이터 처리 파이프라인
  return {
    map: function(transformFn),
    filter: function(predicateFn),
    reduce: function(reducerFn, initialValue),
    groupBy: function(keyFn),
    sortBy: function(keyFn, direction = 'asc'),
    take: function(n),
    skip: function(n),
    execute: function() // 최종 결과 반환
  };
}

function createTransformers() {
  // 재사용 가능한 변환 함수들
  return {
    normalize: (key) => (obj) => ({ ...obj, [key]: obj[key].toLowerCase().trim() }),
    validate: (schema) => (obj) => { /* 검증 로직 */ },
    aggregate: (groupKey, valueKey, operation) => (data) => { /* 집계 로직 */ },
    join: (otherData, leftKey, rightKey) => (data) => { /* 조인 로직 */ }
  };
}

function lazyEvaluate(operations) {
  // 지연 평가를 통한 성능 최적화
}
```

### 예시
```javascript
const salesData = [
  { id: 1, product: 'Laptop', category: 'Electronics', price: 1000, quantity: 2, date: '2024-01-15' },
  { id: 2, product: 'Phone', category: 'Electronics', price: 500, quantity: 5, date: '2024-01-16' },
  { id: 3, product: 'Book', category: 'Education', price: 20, quantity: 10, date: '2024-01-17' },
  { id: 4, product: 'Tablet', category: 'Electronics', price: 300, quantity: 3, date: '2024-01-18' }
];

const result = createPipeline(salesData)
  .map(item => ({ ...item, total: item.price * item.quantity }))
  .filter(item => item.total > 100)
  .groupBy(item => item.category)
  .map(group => ({
    category: group.key,
    totalRevenue: group.items.reduce((sum, item) => sum + item.total, 0),
    averageOrderValue: group.items.reduce((sum, item) => sum + item.total, 0) / group.items.length,
    productCount: group.items.length
  }))
  .sortBy(item => item.totalRevenue, 'desc')
  .execute();

// 결과:
// [
//   { category: 'Electronics', totalRevenue: 5400, averageOrderValue: 1800, productCount: 3 },
//   { category: 'Education', totalRevenue: 200, averageOrderValue: 200, productCount: 1 }
// ]

// 변환기 사용
const transformers = createTransformers();
const pipeline = createPipeline(userData)
  .map(transformers.normalize('email'))
  .filter(transformers.validate(userSchema))
  .execute();
```

### 채점 기준
- 파이프라인 체이닝 구현 (25점)
- 함수형 변환 연산자들 (30점)
- 지연 평가 최적화 (25점)
- 재사용 가능한 변환기 설계 (20점)

---

## 문제 3: 스코프 및 클로저 고급 활용 (Advanced Scope & Closure Usage)

### 문제 설명
스코프와 클로저를 활용하여 모듈 패턴, 팩토리 패턴, 싱글톤 패턴을 구현하세요.

### 요구 사항
```javascript
function createModule(moduleName, dependencies = []) {
  // 모듈 패턴 구현
  // 의존성 주입 지원
  // private/public 멤버 구분
}

function createFactory(blueprint) {
  // 팩토리 패턴으로 객체 생성
  // 스코프를 활용한 private 속성 보호
}

function createSingleton(constructor) {
  // 싱글톤 패턴 구현
  // 인스턴스가 이미 존재하면 같은 인스턴스 반환
}

function createNamespace(name) {
  // 네임스페이스 패턴
  // 전역 스코프 오염 방지
}

function createLexicalScope() {
  // 어휘적 스코핑을 활용한 동적 스코프 시뮬레이션
}
```

### 예시
```javascript
// 모듈 패턴
const mathModule = createModule('Math', ['Logger']) {
  // 비공개 변수
  let cache = new Map();
  
  // 의존성
  const logger = this.dependencies.Logger;
  
  // 비공개 함수
  function validateInput(x) {
    return typeof x === 'number' && !isNaN(x);
  }
  
  // 공개 API
  return {
    calculate: function(operation, x, y) {
      if (!validateInput(x) || !validateInput(y)) {
        throw new Error('Invalid input');
      }
      
      const key = `${operation}-${x}-${y}`;
      if (cache.has(key)) {
        logger.log('Cache hit');
        return cache.get(key);
      }
      
      let result;
      switch(operation) {
        case 'add': result = x + y; break;
        case 'multiply': result = x * y; break;
        default: throw new Error('Unknown operation');
      }
      
      cache.set(key, result);
      logger.log(`Calculated: ${operation}(${x}, ${y}) = ${result}`);
      return result;
    },
    
    clearCache: function() {
      cache.clear();
      logger.log('Cache cleared');
    }
  };
};

// 팩토리 패턴
const userFactory = createFactory({
  init: function(name, email) {
    // 비공개 속성
    let _name = name;
    let _email = email;
    let _createdAt = new Date();
    
    // 공개 메소드
    return {
      getName: () => _name,
      getEmail: () => _email,
      setEmail: (newEmail) => {
        if (this.validateEmail(newEmail)) {
          _email = newEmail;
        }
      },
      getAge: () => Math.floor((Date.now() - _createdAt.getTime()) / (1000 * 60 * 60 * 24))
    };
  },
  
  validateEmail: function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

const user1 = userFactory.create('John', 'john@example.com');
const user2 = userFactory.create('Jane', 'jane@example.com');

// 싱글톤 패턴
const DatabaseConnection = createSingleton(function(connectionString) {
  let isConnected = false;
  
  return {
    connect: function() {
      if (!isConnected) {
        console.log(`Connecting to ${connectionString}`);
        isConnected = true;
      }
      return this;
    },
    
    query: function(sql) {
      if (!isConnected) {
        throw new Error('Not connected');
      }
      console.log(`Executing: ${sql}`);
      return [];
    }
  };
});

const db1 = DatabaseConnection('mysql://localhost:3306/mydb');
const db2 = DatabaseConnection('postgresql://localhost:5432/mydb');
console.log(db1 === db2); // true (같은 인스턴스)
```

### 채점 기준
- 모듈 패턴 구현 (25점)
- 팩토리 패턴 구현 (25점)
- 싱글톤 패턴 구현 (20점)
- 스코프 보호 및 캡슐화 (20점)
- 메모리 누수 방지 (10점)

---

## 문제 4: 비동기 함수 제어 시스템 (Async Function Control System)

### 문제 설명
Promise와 async/await을 활용하여 비동기 함수들을 제어하고 조합하는 시스템을 구현하세요.

### 요구 사항
```javascript
function createAsyncPipeline(steps) {
  // 비동기 함수들의 순차 실행 파이프라인
  // 에러 처리 및 중간 결과 캐싱 지원
}

function parallelLimit(tasks, limit) {
  // 제한된 동시 실행 수로 병렬 처리
}

function retryWithBackoff(asyncFn, options = {}) {
  // 지수 백오프를 사용한 재시도 메커니즘
  // options: { maxRetries: 3, baseDelay: 1000, maxDelay: 30000 }
}

function timeout(asyncFn, ms) {
  // 타임아웃 기능을 추가한 함수 래퍼
}

function createCircuitBreaker(asyncFn, options = {}) {
  // 서킷 브레이커 패턴 구현
  // options: { failureThreshold: 5, resetTimeout: 60000 }
}
```

### 예시
```javascript
// 비동기 파이프라인
const dataProcessingPipeline = createAsyncPipeline([
  async (input) => {
    console.log('Step 1: Fetching data');
    const response = await fetch(`/api/data/${input.id}`);
    return response.json();
  },
  async (data) => {
    console.log('Step 2: Transforming data');
    return {
      ...data,
      processed: true,
      timestamp: new Date().toISOString()
    };
  },
  async (transformedData) => {
    console.log('Step 3: Saving to database');
    await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(transformedData)
    });
    return transformedData;
  }
]);

await dataProcessingPipeline.execute({ id: 123 });

// 병렬 제한 처리
const urls = [
  'https://api.example.com/data/1',
  'https://api.example.com/data/2',
  // ... 100개의 URL
];

const fetchTasks = urls.map(url => () => fetch(url).then(r => r.json()));
const results = await parallelLimit(fetchTasks, 5); // 최대 5개씩 동시 실행

// 재시도 메커니즘
const unreliableApiCall = retryWithBackoff(
  async (id) => {
    const response = await fetch(`/api/unreliable/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  },
  { maxRetries: 3, baseDelay: 1000, maxDelay: 10000 }
);

// 서킷 브레이커
const protectedApiCall = createCircuitBreaker(
  async (data) => {
    const response = await fetch('/api/external', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.json();
  },
  { failureThreshold: 5, resetTimeout: 60000 }
);

try {
  const result = await protectedApiCall({ key: 'value' });
} catch (error) {
  if (error.name === 'CircuitBreakerOpen') {
    console.log('Service is temporarily unavailable');
  }
}
```

### 채점 기준
- 비동기 파이프라인 구현 (25점)
- 병렬 제한 처리 (20점)
- 재시도 및 백오프 로직 (25점)
- 서킷 브레이커 패턴 (20점)
- 에러 처리 및 로깅 (10점)

---

## 문제 5: 함수 메타프로그래밍 시스템 (Function Metaprogramming System)

### 문제 설명
리플렉션과 프록시를 활용하여 함수를 동적으로 조작하고 확장하는 메타프로그래밍 시스템을 구현하세요.

### 요구 사항
```javascript
function createFunctionDecorator(decoratorName, decoratorLogic) {
  // 함수에 추가 기능을 부여하는 데코레이터 생성
}

function analyzeFunctionSignature(fn) {
  // 함수의 매개변수, 기본값, 반환 타입 등 분석
}

function createSmartProxy(target, interceptors) {
  // 함수 호출을 가로채서 다양한 처리 수행
  // 로깅, 캐싱, 검증, 변환 등
}

function createFunctionBuilder() {
  // 동적으로 함수를 생성하는 빌더
}

function instrumentFunction(fn, options = {}) {
  // 함수에 성능 측정, 로깅 등 계측 기능 추가
}
```

### 예시
```javascript
// 함수 데코레이터
const logExecutionTime = createFunctionDecorator('logExecutionTime', (originalFn) => {
  return function(...args) {
    const start = performance.now();
    const result = originalFn.apply(this, args);
    const end = performance.now();
    console.log(`${originalFn.name} executed in ${end - start} milliseconds`);
    return result;
  };
});

const validateInput = createFunctionDecorator('validateInput', (originalFn, schema) => {
  return function(...args) {
    for (let i = 0; i < args.length; i++) {
      if (!schema[i](args[i])) {
        throw new Error(`Invalid argument at position ${i}`);
      }
    }
    return originalFn.apply(this, args);
  };
});

// 데코레이터 적용
const add = logExecutionTime(
  validateInput(
    (a, b) => a + b,
    [(x) => typeof x === 'number', (y) => typeof y === 'number']
  )
);

add(5, 3); // 로깅과 검증이 자동으로 수행됨

// 함수 분석
const complexFunction = (name = 'Anonymous', age, ...hobbies) => {
  return { name, age, hobbies };
};

const signature = analyzeFunctionSignature(complexFunction);
console.log(signature);
// {
//   name: 'complexFunction',
//   parameters: [
//     { name: 'name', hasDefault: true, defaultValue: 'Anonymous' },
//     { name: 'age', hasDefault: false },
//     { name: 'hobbies', isRest: true }
//   ],
//   arity: 3,
//   isArrow: true
// }

// 스마트 프록시
const smartCalculator = createSmartProxy(
  {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  },
  {
    beforeCall: (methodName, args) => {
      console.log(`Calling ${methodName} with args:`, args);
    },
    afterCall: (methodName, result, executionTime) => {
      console.log(`${methodName} returned ${result} in ${executionTime}ms`);
    },
    onError: (methodName, error, args) => {
      console.error(`Error in ${methodName}:`, error.message);
      throw error;
    }
  }
);

smartCalculator.divide(10, 2); // 자동 로깅과 에러 처리

// 동적 함수 생성
const builder = createFunctionBuilder()
  .withName('customValidator')
  .withParameters(['input', 'rules'])
  .withBody(`
    for (const rule of rules) {
      if (!rule.test(input)) {
        throw new Error('Validation failed: ' + rule.message);
      }
    }
    return true;
  `)
  .build();

// 함수 계측
const instrumentedFunction = instrumentFunction(someComplexFunction, {
  measurePerformance: true,
  logCalls: true,
  trackMemoryUsage: true,
  enableProfiling: true
});
```

### 채점 기준
- 함수 데코레이터 시스템 (25점)
- 함수 분석 및 리플렉션 (25점)
- 프록시 기반 인터셉션 (25점)
- 동적 함수 생성 (15점)
- 성능 및 메모리 최적화 (10점)

---

## 채점 방식
- 각 문제는 100점 만점
- 전체 점수: 500점 만점
- 등급: A(450+), B(400+), C(350+), D(300+), F(300 미만)

## 추가 도전 과제
1. 함수형 프로그래밍 패러다임 완전 구현 (모나드, 펑터 등)
2. JavaScript 엔진 수준의 최적화 기법 적용
3. 웹 워커를 활용한 병렬 함수 실행
4. TypeScript 타입 시스템과의 통합
5. 함수 직렬화 및 네트워크 전송 최적화