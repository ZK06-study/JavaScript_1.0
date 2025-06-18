# 24. 기타 유용한 기능들 - 퀴즈

## 객관식 문제

### 1. 🟢 구조 분해 할당에서 기본값을 설정하는 문법은?
a) `const {name || 'default'} = obj`
b) `const {name = 'default'} = obj`
c) `const {name: 'default'} = obj`
d) `const {name && 'default'} = obj`

### 2. 🟡 스프레드 연산자의 용도가 아닌 것은?
a) 배열 요소 펼치기
b) 객체 속성 복사
c) 함수 매개변수 펼치기
d) 변수 선언

### 3. 🟠 정규 표현식에서 전역 검색을 나타내는 플래그는?
a) i
b) g
c) m
d) s

### 4. 🟡 `JSON.stringify()`에서 순환 참조가 있을 때 발생하는 에러는?
a) SyntaxError
b) TypeError
c) ReferenceError
d) RangeError

### 5. 🟠 `Proxy`의 주요 용도로 올바르지 않은 것은?
a) 객체 접근 가로채기
b) 속성 설정 가로채기
c) 메모리 자동 정리
d) 메서드 호출 가로채기

### 6. 🟡 Rest parameter의 올바른 문법은?
a) `function fn(a, b, ...rest)`
b) `function fn(a, ...rest, b)`
c) `function fn(...rest, a, b)`
d) `function fn(a, b, rest...)`

## 단답형 문제

### 7. 🟢 `{a, b}`에서 a의 값을 x라는 변수에 할당하는 구조 분해 문법은?

### 8. 🟡 문자열에서 정규 표현식과 일치하는 모든 부분을 찾는 메서드는?

### 9. 🟠 객체를 JSON 문자열로 변환할 때 특정 속성만 포함시키는 매개변수는?

### 10. 🟢 배열의 요소들을 다른 배열에 개별적으로 추가할 때 사용하는 연산자는?

## 서술형 문제

### 11. 🟡 구조 분해 할당의 다양한 활용법과 장점을 예시와 함께 설명하시오.

### 12. 🟠 Proxy와 Reflect의 관계와 활용 사례를 설명하시오.

### 13. 🟡 정규 표현식의 주요 메타문자와 실용적인 패턴들을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
```javascript
// 1. 객체에서 특정 속성들만 추출하는 함수 (구조 분해 활용)
// 2. 배열 평탄화 함수 (스프레드 연산자 활용)
// 3. 함수 매개변수 기본값 설정 (구조 분해 + 기본값)
```

### 15. 🟡 정규 표현식을 활용한 유효성 검사 라이브러리를 작성하시오.
```javascript
// 이메일, 전화번호, 비밀번호, URL 검증
// 커스텀 패턴 추가 기능
// 여러 규칙 조합 지원
```

### 16. 🟠 Proxy를 이용한 객체 변화 감지 시스템을 구현하시오.
```javascript
// 속성 변경 감지
// 중첩 객체 지원
// 변경 이력 추적
// 콜백 시스템
```

### 17. 🟡 JSON을 안전하게 다루는 유틸리티 함수들을 작성하시오.
```javascript
// 깊은 복사, 순환 참조 처리
// 스키마 검증
// 선택적 직렬화/역직렬화
```

## 응용 문제

### 18. 🟠 다음 구조 분해 할당의 결과를 예상하고 설명하시오.
```javascript
const arr = [1, 2, 3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };

const [first, , third, ...rest] = arr;
const {a, b: newB, d = 'default'} = obj;

console.log(first, third, rest);
console.log(a, newB, d);
```

### 19. 🟠 메타프로그래밍을 활용한 동적 API 클라이언트를 구현하시오.
```javascript
// Proxy를 이용해 API 엔드포인트를 메서드처럼 호출
// 자동 요청 구성 및 응답 처리
// 타입 추론 및 검증
```

### 20. 🟠 고급 패턴 매칭 라이브러리를 구현하시오.
```javascript
// 다양한 데이터 타입 매칭
// 가드 조건 지원
// 중첩 패턴 매칭
// 함수형 프로그래밍 스타일
```

---

## 정답

### 객관식 정답
1. b) `const {name = 'default'} = obj`
2. d) 변수 선언
3. b) g (global)
4. b) TypeError
5. c) 메모리 자동 정리
6. a) `function fn(a, b, ...rest)`

### 단답형 정답
7. `const {a: x} = obj`
8. `matchAll()` 또는 `match()` (g 플래그와 함께)
9. `replacer` (두 번째 매개변수)
10. `...` (스프레드 연산자)

### 서술형 정답
11. **구조 분해 할당의 활용법:**
```javascript
// 배열 구조 분해
const [a, b] = [1, 2];
const [first, ...rest] = [1, 2, 3, 4];

// 객체 구조 분해
const {name, age} = user;
const {name: userName, age = 0} = user;

// 함수 매개변수
function greet({name, age = 0}) { ... }

// 중첩 구조 분해
const {address: {city}} = user;

// 장점: 코드 간결성, 가독성 향상, 기본값 설정 용이
```

12. **Proxy와 Reflect:**
- **Proxy**: 객체의 기본 동작을 가로채고 재정의
- **Reflect**: Proxy와 동일한 메서드를 제공하는 내장 객체
- **관계**: Proxy 핸들러에서 Reflect 사용하여 기본 동작 수행
- **활용**: 데이터 바인딩, 속성 검증, 로깅, 캐싱

13. **정규 표현식 패턴:**
- **메타문자**: `.` (모든 문자), `*` (0회 이상), `+` (1회 이상), `?` (0회 또는 1회)
- **문자 클래스**: `[a-z]`, `\d` (숫자), `\w` (단어 문자), `\s` (공백)
- **앵커**: `^` (시작), `$` (끝)
- **그룹**: `()` (캡처링), `(?:)` (비캡처링)

### 코딩 정답
14.
```javascript
// 1. 객체에서 특정 속성들만 추출
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 구조 분해를 활용한 버전
function pickDestructured(obj, ...keys) {
  return keys.reduce((result, key) => {
    const { [key]: value } = obj;
    if (value !== undefined) {
      result[key] = value;
    }
    return result;
  }, {});
}

// 2. 배열 평탄화 함수
function flatten(arr, depth = Infinity) {
  const result = [];
  
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

// 스프레드 연산자를 활용한 버전
function flattenSpread(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? [...acc, ...flattenSpread(val)] : [...acc, val], []);
}

// 3. 함수 매개변수 기본값 설정
function createUser({
  name = 'Anonymous',
  age = 0,
  email = '',
  preferences: {
    theme = 'light',
    language = 'ko',
    notifications = true
  } = {}
} = {}) {
  return {
    name,
    age,
    email,
    preferences: {
      theme,
      language,
      notifications
    },
    createdAt: new Date()
  };
}

// 사용 예시
console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }
console.log(flatten([[1, 2], [3, [4, 5]]])); // [1, 2, 3, 4, 5]
console.log(createUser({ name: 'Alice', preferences: { theme: 'dark' } }));
```

15.
```javascript
// 정규 표현식 유효성 검사 라이브러리
class Validator {
  constructor() {
    this.patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^(\+?[1-9]\d{1,14}|0[1-9]\d{8,9})$/,
      url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      password: {
        weak: /^.{6,}$/,
        medium: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
      },
      korean: /^[가-힣]+$/,
      englishOnly: /^[a-zA-Z]+$/,
      alphanumeric: /^[a-zA-Z0-9]+$/,
      creditCard: /^(?:\d{4}-?){3}\d{4}$/
    };
    
    this.customPatterns = new Map();
    this.rules = new Map();
  }
  
  // 커스텀 패턴 추가
  addPattern(name, pattern, description = '') {
    this.customPatterns.set(name, { pattern, description });
  }
  
  // 복합 규칙 정의
  defineRule(name, validators) {
    this.rules.set(name, validators);
  }
  
  // 단일 패턴 검증
  validate(value, patternName) {
    let pattern;
    
    if (this.patterns[patternName]) {
      pattern = this.patterns[patternName];
    } else if (this.customPatterns.has(patternName)) {
      pattern = this.customPatterns.get(patternName).pattern;
    } else {
      throw new Error(`Pattern '${patternName}' not found`);
    }
    
    // 중첩된 패턴 처리 (예: password.strong)
    if (typeof pattern === 'object' && !pattern.test) {
      const parts = patternName.split('.');
      if (parts.length > 1) {
        pattern = pattern[parts[1]];
      }
    }
    
    if (!pattern || typeof pattern.test !== 'function') {
      throw new Error(`Invalid pattern for '${patternName}'`);
    }
    
    return {
      isValid: pattern.test(value),
      pattern: pattern.source,
      value
    };
  }
  
  // 복합 규칙 검증
  validateRule(value, ruleName) {
    const rule = this.rules.get(ruleName);
    if (!rule) {
      throw new Error(`Rule '${ruleName}' not found`);
    }
    
    const results = [];
    let allValid = true;
    
    for (const validator of rule) {
      let result;
      
      if (typeof validator === 'string') {
        result = this.validate(value, validator);
      } else if (typeof validator === 'function') {
        result = validator(value);
      } else if (validator.pattern) {
        result = this.validate(value, validator.pattern);
        result.message = validator.message;
      }
      
      results.push(result);
      if (!result.isValid) {
        allValid = false;
      }
    }
    
    return {
      isValid: allValid,
      results,
      value
    };
  }
  
  // 객체 전체 검증
  validateObject(obj, schema) {
    const results = {};
    let allValid = true;
    
    for (const [field, validators] of Object.entries(schema)) {
      const value = obj[field];
      
      if (Array.isArray(validators)) {
        results[field] = this.validateRule(value, `temp_${field}`);
        // 임시 규칙으로 검증
        this.rules.set(`temp_${field}`, validators);
        results[field] = this.validateRule(value, `temp_${field}`);
        this.rules.delete(`temp_${field}`);
      } else {
        results[field] = this.validate(value, validators);
      }
      
      if (!results[field].isValid) {
        allValid = false;
      }
    }
    
    return {
      isValid: allValid,
      fields: results
    };
  }
  
  // 실시간 검증 (debouncing 포함)
  createLiveValidator(element, patternName, options = {}) {
    const { 
      debounceTime = 300,
      onValid = () => {},
      onInvalid = () => {}
    } = options;
    
    let timeout;
    
    const validator = (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const result = this.validate(event.target.value, patternName);
        
        if (result.isValid) {
          onValid(result, element);
        } else {
          onInvalid(result, element);
        }
      }, debounceTime);
    };
    
    element.addEventListener('input', validator);
    
    return () => element.removeEventListener('input', validator);
  }
  
  // 패턴 목록 조회
  getPatterns() {
    return {
      builtin: Object.keys(this.patterns),
      custom: Array.from(this.customPatterns.keys()),
      rules: Array.from(this.rules.keys())
    };
  }
}

// 사용 예시
const validator = new Validator();

// 커스텀 패턴 추가
validator.addPattern('koreanName', /^[가-힣]{2,4}$/, '한국어 이름 (2-4글자)');
validator.addPattern('username', /^[a-zA-Z0-9_]{3,20}$/, '사용자명 (3-20자, 영문/숫자/언더스코어)');

// 복합 규칙 정의
validator.defineRule('signupForm', [
  'email',
  'password.strong',
  (value) => ({ isValid: value.length >= 8, message: '8자 이상 입력하세요' })
]);

// 검증 실행
const emailResult = validator.validate('test@example.com', 'email');
console.log('이메일 검증:', emailResult);

const passwordResult = validator.validate('MyPass123!', 'password.strong');
console.log('비밀번호 검증:', passwordResult);

// 객체 전체 검증
const userForm = {
  email: 'user@example.com',
  username: 'user123',
  name: '김철수'
};

const schema = {
  email: 'email',
  username: 'username',
  name: 'koreanName'
};

const formResult = validator.validateObject(userForm, schema);
console.log('폼 검증:', formResult);
```

16.
```javascript
// Proxy를 이용한 객체 변화 감지 시스템
class ChangeDetector {
  constructor(target, options = {}) {
    this.target = target;
    this.options = {
      deep: true,
      trackHistory: true,
      maxHistorySize: 100,
      ...options
    };
    
    this.listeners = new Set();
    this.history = [];
    this.proxies = new WeakMap();
    
    return this.createProxy(target, []);
  }
  
  createProxy(target, path) {
    if (this.proxies.has(target)) {
      return this.proxies.get(target);
    }
    
    const self = this;
    
    const proxy = new Proxy(target, {
      get(obj, prop, receiver) {
        const value = Reflect.get(obj, prop, receiver);
        
        // 메서드 바인딩 처리
        if (typeof value === 'function') {
          return value.bind(obj);
        }
        
        // 깊은 감지가 활성화되고 객체인 경우 중첩 프록시 생성
        if (self.options.deep && 
            value !== null && 
            typeof value === 'object' && 
            !self.proxies.has(value)) {
          return self.createProxy(value, [...path, prop]);
        }
        
        return value;
      },
      
      set(obj, prop, value, receiver) {
        const oldValue = obj[prop];
        const result = Reflect.set(obj, prop, value, receiver);
        
        if (result && oldValue !== value) {
          const change = {
            type: 'set',
            path: [...path, prop],
            property: prop,
            oldValue,
            newValue: value,
            timestamp: Date.now(),
            target: obj
          };
          
          self.recordChange(change);
          self.notifyListeners(change);
        }
        
        return result;
      },
      
      deleteProperty(obj, prop) {
        const oldValue = obj[prop];
        const result = Reflect.deleteProperty(obj, prop);
        
        if (result) {
          const change = {
            type: 'delete',
            path: [...path, prop],
            property: prop,
            oldValue,
            newValue: undefined,
            timestamp: Date.now(),
            target: obj
          };
          
          self.recordChange(change);
          self.notifyListeners(change);
        }
        
        return result;
      },
      
      defineProperty(obj, prop, descriptor) {
        const oldDescriptor = Object.getOwnPropertyDescriptor(obj, prop);
        const result = Reflect.defineProperty(obj, prop, descriptor);
        
        if (result) {
          const change = {
            type: 'define',
            path: [...path, prop],
            property: prop,
            oldValue: oldDescriptor?.value,
            newValue: descriptor.value,
            timestamp: Date.now(),
            target: obj
          };
          
          self.recordChange(change);
          self.notifyListeners(change);
        }
        
        return result;
      }
    });
    
    this.proxies.set(target, proxy);
    return proxy;
  }
  
  // 변경 사항 기록
  recordChange(change) {
    if (!this.options.trackHistory) return;
    
    this.history.push(change);
    
    // 히스토리 크기 제한
    if (this.history.length > this.options.maxHistorySize) {
      this.history.shift();
    }
  }
  
  // 리스너들에게 알림
  notifyListeners(change) {
    this.listeners.forEach(listener => {
      try {
        listener(change);
      } catch (error) {
        console.error('Change listener error:', error);
      }
    });
  }
  
  // 변경 감지 리스너 추가
  onChange(callback) {
    this.listeners.add(callback);
    
    return () => this.listeners.delete(callback);
  }
  
  // 특정 경로 변경 감지
  onPathChange(path, callback) {
    const pathArray = Array.isArray(path) ? path : path.split('.');
    
    const listener = (change) => {
      if (this.pathMatches(change.path, pathArray)) {
        callback(change);
      }
    };
    
    return this.onChange(listener);
  }
  
  // 경로 매칭 확인
  pathMatches(changePath, targetPath) {
    if (targetPath.length > changePath.length) return false;
    
    return targetPath.every((segment, index) => 
      segment === '*' || segment === changePath[index]
    );
  }
  
  // 히스토리 조회
  getHistory(filter = null) {
    if (!filter) return [...this.history];
    
    return this.history.filter(change => {
      if (filter.type && change.type !== filter.type) return false;
      if (filter.property && change.property !== filter.property) return false;
      if (filter.path && !this.pathMatches(change.path, filter.path)) return false;
      if (filter.since && change.timestamp < filter.since) return false;
      return true;
    });
  }
  
  // 변경 사항 되돌리기
  undo(steps = 1) {
    const changes = this.history.slice(-steps).reverse();
    
    for (const change of changes) {
      this.revertChange(change);
    }
    
    // 되돌린 변경사항을 히스토리에서 제거
    this.history.splice(-steps, steps);
  }
  
  // 개별 변경 사항 되돌리기
  revertChange(change) {
    let target = this.target;
    
    // 경로를 따라 대상 객체 찾기
    for (let i = 0; i < change.path.length - 1; i++) {
      target = target[change.path[i]];
      if (!target) return false;
    }
    
    const property = change.path[change.path.length - 1];
    
    switch (change.type) {
      case 'set':
        if (change.oldValue === undefined) {
          delete target[property];
        } else {
          target[property] = change.oldValue;
        }
        break;
        
      case 'delete':
        target[property] = change.oldValue;
        break;
        
      case 'define':
        if (change.oldValue === undefined) {
          delete target[property];
        } else {
          target[property] = change.oldValue;
        }
        break;
    }
    
    return true;
  }
  
  // 통계 정보
  getStats() {
    const typeCount = this.history.reduce((acc, change) => {
      acc[change.type] = (acc[change.type] || 0) + 1;
      return acc;
    }, {});
    
    return {
      totalChanges: this.history.length,
      changesByType: typeCount,
      listeners: this.listeners.size,
      oldestChange: this.history[0]?.timestamp,
      newestChange: this.history[this.history.length - 1]?.timestamp
    };
  }
}

// 사용 예시
const user = {
  name: 'Alice',
  profile: {
    age: 30,
    settings: {
      theme: 'light'
    }
  },
  hobbies: ['reading', 'coding']
};

const watchedUser = new ChangeDetector(user, {
  deep: true,
  trackHistory: true
});

// 전체 변경 감지
const unsubscribe = watchedUser.onChange((change) => {
  console.log('변경 감지:', {
    type: change.type,
    path: change.path.join('.'),
    old: change.oldValue,
    new: change.newValue
  });
});

// 특정 경로 변경 감지
const unsubscribeProfile = watchedUser.onPathChange(['profile', '*'], (change) => {
  console.log('프로필 변경:', change);
});

// 변경 테스트
watchedUser.name = 'Bob';                          // 변경 감지
watchedUser.profile.age = 31;                      // 깊은 변경 감지
watchedUser.profile.settings.theme = 'dark';      // 더 깊은 변경 감지
watchedUser.hobbies.push('gaming');               // 배열 변경 감지
delete watchedUser.profile.age;                   // 삭제 감지

// 히스토리 조회
console.log('전체 히스토리:', watchedUser.getHistory());
console.log('설정 변경만:', watchedUser.getHistory({ 
  path: ['profile', 'settings'] 
}));

// 변경 되돌리기
watchedUser.undo(2); // 마지막 2개 변경사항 되돌리기

console.log('통계:', watchedUser.getStats());
```

### 응용 정답
18.
```javascript
// 실행 결과:
const arr = [1, 2, 3, 4, 5];
const obj = { a: 1, b: 2, c: 3 };

const [first, , third, ...rest] = arr;
// first = 1, third = 3, rest = [4, 5]

const {a, b: newB, d = 'default'} = obj;
// a = 1, newB = 2, d = 'default'

console.log(first, third, rest);  // 1 3 [4, 5]
console.log(a, newB, d);          // 1 2 'default'

// 설명:
// - [first, , third, ...rest]: 첫 번째와 세 번째 요소를 추출, 두 번째는 건너뛰고, 나머지는 rest 배열에
// - {a, b: newB, d = 'default'}: a 그대로, b를 newB로 별칭, d는 존재하지 않으므로 기본값 사용
```

19.
```javascript
// 메타프로그래밍을 활용한 동적 API 클라이언트
class DynamicApiClient {
  constructor(baseURL, options = {}) {
    this.baseURL = baseURL;
    this.options = {
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
      ...options
    };
    
    this.interceptors = {
      request: [],
      response: []
    };
    
    return this.createProxy();
  }
  
  createProxy() {
    return new Proxy(this, {
      get(target, prop, receiver) {
        // 기존 메서드나 속성이 있으면 그대로 반환
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        
        // HTTP 메서드 감지
        const httpMethods = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options'];
        
        for (const method of httpMethods) {
          if (prop.startsWith(method)) {
            const endpoint = target.extractEndpoint(prop, method);
            return target.createRequestFunction(method.toUpperCase(), endpoint);
          }
        }
        
        // RESTful 패턴 감지
        if (target.isResourcePattern(prop)) {
          return target.createResourceProxy(prop);
        }
        
        // 기본 GET 요청으로 처리
        return target.createRequestFunction('GET', target.camelToKebab(prop));
      }
    });
  }
  
  // 엔드포인트 추출
  extractEndpoint(prop, method) {
    const endpoint = prop.slice(method.length);
    return endpoint ? this.camelToKebab(endpoint) : '';
  }
  
  // 리소스 패턴 감지 (복수형 명사)
  isResourcePattern(prop) {
    return prop.endsWith('s') && prop.length > 1;
  }
  
  // 리소스 프록시 생성
  createResourceProxy(resource) {
    const self = this;
    
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop === 'create') {
          return (data) => self.request('POST', `/${resource}`, data);
        }
        
        if (prop === 'list') {
          return (params) => self.request('GET', `/${resource}`, null, params);
        }
        
        if (prop === 'update') {
          return (id, data) => self.request('PUT', `/${resource}/${id}`, data);
        }
        
        if (prop === 'delete') {
          return (id) => self.request('DELETE', `/${resource}/${id}`);
        }
        
        if (prop === 'get') {
          return (id) => self.request('GET', `/${resource}/${id}`);
        }
        
        // 숫자면 ID로 간주
        if (!isNaN(prop)) {
          return self.createResourceInstance(resource, prop);
        }
        
        return undefined;
      }
    });
  }
  
  // 개별 리소스 인스턴스 생성
  createResourceInstance(resource, id) {
    const self = this;
    
    return new Proxy({}, {
      get(target, prop, receiver) {
        if (prop === 'get') {
          return () => self.request('GET', `/${resource}/${id}`);
        }
        
        if (prop === 'update') {
          return (data) => self.request('PUT', `/${resource}/${id}`, data);
        }
        
        if (prop === 'delete') {
          return () => self.request('DELETE', `/${resource}/${id}`);
        }
        
        // 중첩 리소스
        return self.createRequestFunction('GET', `/${resource}/${id}/${self.camelToKebab(prop)}`);
      }
    });
  }
  
  // 요청 함수 생성
  createRequestFunction(method, endpoint) {
    return (data, params) => {
      const url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
      return this.request(method, url, data, params);
    };
  }
  
  // 실제 HTTP 요청
  async request(method, url, data = null, params = null) {
    let fullURL = `${this.baseURL}${url}`;
    
    // 쿼리 파라미터 추가
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams(params);
      fullURL += `?${searchParams.toString()}`;
    }
    
    const config = {
      method,
      headers: { ...this.options.headers },
      signal: AbortSignal.timeout(this.options.timeout)
    };
    
    // 요청 본문 추가
    if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
      config.body = JSON.stringify(data);
    }
    
    // 요청 인터셉터 실행
    const processedConfig = await this.runInterceptors('request', {
      url: fullURL,
      method,
      data,
      params,
      config
    });
    
    try {
      const response = await fetch(processedConfig.url, processedConfig.config);
      
      let responseData;
      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
      
      const responseObj = {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        url: response.url
      };
      
      if (!response.ok) {
        throw new ApiError(responseObj);
      }
      
      // 응답 인터셉터 실행
      return await this.runInterceptors('response', responseObj);
      
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError({
        data: { message: error.message },
        status: 0,
        statusText: 'Network Error'
      });
    }
  }
  
  // 인터셉터 실행
  async runInterceptors(type, data) {
    let result = data;
    
    for (const interceptor of this.interceptors[type]) {
      result = await interceptor(result);
    }
    
    return result;
  }
  
  // 인터셉터 추가
  addRequestInterceptor(fn) {
    this.interceptors.request.push(fn);
  }
  
  addResponseInterceptor(fn) {
    this.interceptors.response.push(fn);
  }
  
  // 유틸리티 메서드
  camelToKebab(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}

// API 에러 클래스
class ApiError extends Error {
  constructor(response) {
    super(response.data?.message || `HTTP ${response.status}: ${response.statusText}`);
    this.name = 'ApiError';
    this.response = response;
    this.status = response.status;
  }
}

// 사용 예시
const api = new DynamicApiClient('https://api.example.com');

// 인터셉터 설정
api.addRequestInterceptor(async (config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.addResponseInterceptor(async (response) => {
  console.log('API Response:', response.status, response.url);
  return response;
});

// 동적 API 호출 예시
async function demonstrateApi() {
  try {
    // RESTful 패턴
    const users = await api.users.list({ page: 1, limit: 10 });
    const user = await api.users.get(123);
    const newUser = await api.users.create({ name: 'John', email: 'john@example.com' });
    const updatedUser = await api.users.update(123, { name: 'John Doe' });
    await api.users.delete(123);
    
    // 개별 리소스 인스턴스
    const userInstance = api.users[123];
    const userData = await userInstance.get();
    const userPosts = await userInstance.posts();
    
    // HTTP 메서드 기반 호출
    const profile = await api.getUserProfile(123);
    const settings = await api.postUserSettings({ theme: 'dark' });
    
    // 직접 엔드포인트 호출
    const stats = await api.statistics();
    const health = await api.healthCheck();
    
    console.log('API calls completed successfully');
    
  } catch (error) {
    if (error instanceof ApiError) {
      console.error('API Error:', error.status, error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

demonstrateApi();
```

20.
```javascript
// 고급 패턴 매칭 라이브러리
class PatternMatcher {
  constructor() {
    this.patterns = [];
  }
  
  // 패턴 매칭 빌더 시작
  when(pattern) {
    return new PatternBuilder(this, pattern);
  }
  
  // 기본 케이스
  otherwise(handler) {
    this.patterns.push({
      pattern: () => true,
      guard: null,
      handler,
      isDefault: true
    });
    return this;
  }
  
  // 값에 대해 매칭 실행
  match(value) {
    for (const { pattern, guard, handler } of this.patterns) {
      const matched = this.matchPattern(pattern, value);
      
      if (matched.success) {
        // 가드 조건 확인
        if (guard && !guard(matched.bindings, value)) {
          continue;
        }
        
        return handler(matched.bindings, value);
      }
    }
    
    throw new Error('No pattern matched and no default case provided');
  }
  
  // 패턴 매칭 로직
  matchPattern(pattern, value) {
    const bindings = {};
    
    if (this.isPattern(pattern)) {
      return pattern.match(value, bindings);
    }
    
    if (typeof pattern === 'function') {
      try {
        const result = pattern(value);
        return { success: !!result, bindings };
      } catch {
        return { success: false, bindings };
      }
    }
    
    if (pattern === value || pattern === Pattern.any) {
      return { success: true, bindings };
    }
    
    // 배열 패턴
    if (Array.isArray(pattern) && Array.isArray(value)) {
      return this.matchArray(pattern, value, bindings);
    }
    
    // 객체 패턴
    if (this.isPlainObject(pattern) && this.isPlainObject(value)) {
      return this.matchObject(pattern, value, bindings);
    }
    
    return { success: false, bindings };
  }
  
  // 배열 패턴 매칭
  matchArray(pattern, value, bindings) {
    let patternIndex = 0;
    let valueIndex = 0;
    
    while (patternIndex < pattern.length && valueIndex < value.length) {
      const patternElement = pattern[patternIndex];
      
      // 스프레드 패턴 처리
      if (this.isSpreadPattern(patternElement)) {
        const remaining = pattern.length - patternIndex - 1;
        const elementsToTake = value.length - valueIndex - remaining;
        
        if (elementsToTake < 0) {
          return { success: false, bindings };
        }
        
        bindings[patternElement.name] = value.slice(valueIndex, valueIndex + elementsToTake);
        valueIndex += elementsToTake;
        patternIndex++;
        continue;
      }
      
      const matched = this.matchPattern(patternElement, value[valueIndex]);
      if (!matched.success) {
        return { success: false, bindings };
      }
      
      Object.assign(bindings, matched.bindings);
      patternIndex++;
      valueIndex++;
    }
    
    // 길이 검사
    if (patternIndex !== pattern.length || valueIndex !== value.length) {
      return { success: false, bindings };
    }
    
    return { success: true, bindings };
  }
  
  // 객체 패턴 매칭
  matchObject(pattern, value, bindings) {
    for (const [key, patternValue] of Object.entries(pattern)) {
      if (!(key in value)) {
        return { success: false, bindings };
      }
      
      const matched = this.matchPattern(patternValue, value[key]);
      if (!matched.success) {
        return { success: false, bindings };
      }
      
      Object.assign(bindings, matched.bindings);
    }
    
    return { success: true, bindings };
  }
  
  // 헬퍼 메서드들
  isPattern(obj) {
    return obj && typeof obj.match === 'function';
  }
  
  isSpreadPattern(obj) {
    return obj && obj.__type === 'spread';
  }
  
  isPlainObject(obj) {
    return obj && typeof obj === 'object' && obj.constructor === Object;
  }
}

// 패턴 빌더 클래스
class PatternBuilder {
  constructor(matcher, pattern) {
    this.matcher = matcher;
    this.pattern = pattern;
    this.guardCondition = null;
  }
  
  guard(condition) {
    this.guardCondition = condition;
    return this;
  }
  
  then(handler) {
    this.matcher.patterns.push({
      pattern: this.pattern,
      guard: this.guardCondition,
      handler,
      isDefault: false
    });
    return this.matcher;
  }
}

// 패턴 생성 헬퍼들
class Pattern {
  static any = Symbol('any');
  
  static bind(name) {
    return {
      match(value, bindings) {
        bindings[name] = value;
        return { success: true, bindings };
      }
    };
  }
  
  static type(typeName) {
    return {
      match(value, bindings) {
        const match = typeof value === typeName ||
                     (typeName === 'array' && Array.isArray(value)) ||
                     (typeName === 'null' && value === null);
        return { success: match, bindings };
      }
    };
  }
  
  static range(min, max) {
    return {
      match(value, bindings) {
        const match = typeof value === 'number' && value >= min && value <= max;
        return { success: match, bindings };
      }
    };
  }
  
  static oneOf(...values) {
    return {
      match(value, bindings) {
        return { success: values.includes(value), bindings };
      }
    };
  }
  
  static regex(pattern) {
    return {
      match(value, bindings) {
        const match = typeof value === 'string' && pattern.test(value);
        return { success: match, bindings };
      }
    };
  }
  
  static spread(name) {
    return {
      __type: 'spread',
      name
    };
  }
  
  static object(schema) {
    return {
      match(value, bindings) {
        if (!value || typeof value !== 'object') {
          return { success: false, bindings };
        }
        
        for (const [key, pattern] of Object.entries(schema)) {
          if (!(key in value)) {
            return { success: false, bindings };
          }
          
          const matcher = new PatternMatcher();
          const matched = matcher.matchPattern(pattern, value[key]);
          
          if (!matched.success) {
            return { success: false, bindings };
          }
          
          Object.assign(bindings, matched.bindings);
        }
        
        return { success: true, bindings };
      }
    };
  }
}

// 편의 함수
function match(value) {
  const matcher = new PatternMatcher();
  matcher._value = value;
  
  const proxy = new Proxy(matcher, {
    get(target, prop) {
      if (prop === 'with') {
        return function(patternFn) {
          return patternFn(target);
        };
      }
      return target[prop];
    }
  });
  
  return proxy;
}

// 사용 예시
function demonstratePatternMatching() {
  // 1. 기본 패턴 매칭
  const result1 = match(42)
    .when(Pattern.type('string')).then(() => 'It is a string')
    .when(Pattern.range(1, 100)).then((_, value) => `Number in range: ${value}`)
    .otherwise(() => 'Something else')
    .match(42);
  
  console.log('Basic matching:', result1); // "Number in range: 42"
  
  // 2. 배열 분해 매칭
  const result2 = match([1, 2, 3, 4, 5])
    .when([Pattern.bind('first'), Pattern.spread('rest')])
    .then(({ first, rest }) => `First: ${first}, Rest: ${rest}`)
    .match([1, 2, 3, 4, 5]);
  
  console.log('Array destructuring:', result2); // "First: 1, Rest: 2,3,4,5"
  
  // 3. 객체 매칭
  const user = { type: 'admin', name: 'Alice', age: 30 };
  
  const result3 = match(user)
    .when({ type: 'admin', name: Pattern.bind('name') })
    .guard(({ name }) => name.length > 3)
    .then(({ name }) => `Admin: ${name}`)
    .when({ type: 'user' })
    .then(() => 'Regular user')
    .otherwise(() => 'Unknown user type')
    .match(user);
  
  console.log('Object matching:', result3); // "Admin: Alice"
  
  // 4. 복합 패턴 매칭 (HTTP 응답 처리)
  function handleHttpResponse(response) {
    return match(response)
      .when({ status: Pattern.range(200, 299), data: Pattern.bind('data') })
      .then(({ data }) => ({ success: true, data }))
      
      .when({ status: Pattern.oneOf(400, 401, 403) })
      .then(() => ({ success: false, error: 'Client error' }))
      
      .when({ status: Pattern.range(500, 599) })
      .then(() => ({ success: false, error: 'Server error' }))
      
      .otherwise(() => ({ success: false, error: 'Unknown error' }))
      .match(response);
  }
  
  console.log('HTTP 200:', handleHttpResponse({ status: 200, data: 'success' }));
  console.log('HTTP 404:', handleHttpResponse({ status: 404 }));
  console.log('HTTP 500:', handleHttpResponse({ status: 500 }));
  
  // 5. 재귀적 데이터 구조 매칭 (JSON AST)
  function processJsonAst(node) {
    return match(node)
      .when({ type: 'string', value: Pattern.bind('str') })
      .then(({ str }) => `"${str}"`)
      
      .when({ type: 'number', value: Pattern.bind('num') })
      .then(({ num }) => num.toString())
      
      .when({ type: 'array', items: Pattern.bind('items') })
      .then(({ items }) => `[${items.map(processJsonAst).join(', ')}]`)
      
      .when({ type: 'object', properties: Pattern.bind('props') })
      .then(({ props }) => {
        const pairs = props.map(prop => 
          `${processJsonAst(prop.key)}: ${processJsonAst(prop.value)}`
        );
        return `{${pairs.join(', ')}}`;
      })
      
      .otherwise(() => 'null')
      .match(node);
  }
  
  const jsonAst = {
    type: 'object',
    properties: [
      {
        key: { type: 'string', value: 'name' },
        value: { type: 'string', value: 'Alice' }
      },
      {
        key: { type: 'string', value: 'age' },
        value: { type: 'number', value: 30 }
      }
    ]
  };
  
  console.log('JSON AST:', processJsonAst(jsonAst));
}

demonstratePatternMatching();
```

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"id": "quiz-12", "content": "12\ubc88 \uac12 \ub354 \uc54c\uc544\ubcf4\uae30 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-13", "content": "13\ubc88 \ud568\uc218 \ub354 \uc54c\uc544\ubcf4\uae30 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-14", "content": "14\ubc88 \uac1d\uccb4 \ub354 \uc54c\uc544\ubcf4\uae30 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-15", "content": "15\ubc88 \uc5f0\uc0b0\uc790 \uc2ec\ud654 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-16", "content": "16\ubc88 \ub0b4\uc7a5 \uac1d\uccb4 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-17", "content": "17\ubc88 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-18", "content": "18\ubc88 \uc774\ud130\ub808\uc774\uc158 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-19", "content": "19\ubc88 \ud074\ub798\uc2a4 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-20", "content": "20\ubc88 \uc790\ub8cc\uad6c\uc870 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-21", "content": "21\ubc88 \ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-22", "content": "22\ubc88 \uc608\uc678 \ucc98\ub9ac \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-23", "content": "23\ubc88 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}, {"id": "quiz-24", "content": "24\ubc88 \uae30\ud0c0 \uc720\uc6a9\ud55c \uae30\ub2a5 \ud034\uc988 \uc791\uc131", "status": "completed", "priority": "medium"}]