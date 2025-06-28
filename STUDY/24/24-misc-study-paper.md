# JavaScript 기타 중요 개념들

## 1. new.target

### new.target이란?
**new.target**은 함수가 생성자로 호출되었는지 확인할 수 있는 메타 속성입니다.

```javascript
function Person(name) {
  if (new.target) {
    console.log('생성자로 호출됨');
    this.name = name;
  } else {
    console.log('일반 함수로 호출됨');
    return new Person(name); // 자동으로 new 추가
  }
}

new Person('홍길동'); // "생성자로 호출됨"
Person('김철수');     // "일반 함수로 호출됨"
```

### 안전한 생성자 패턴
```javascript
function SafeConstructor(value) {
  // new 없이 호출되면 자동으로 new를 추가
  if (!new.target) {
    return new SafeConstructor(value);
  }
  
  this.value = value;
}

const obj1 = new SafeConstructor(10);
const obj2 = SafeConstructor(20); // new 없이 호출해도 동작
console.log(obj1 instanceof SafeConstructor); // true
console.log(obj2 instanceof SafeConstructor); // true
```

## 2. instanceof 심화

### 기본 동작 원리
```javascript
function Person() {}
const person = new Person();

// instanceof는 프로토타입 체인을 확인
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

// 실제로는 이렇게 동작
console.log(Person.prototype.isPrototypeOf(person)); // true
console.log(Object.prototype.isPrototypeOf(person)); // true
```

### 커스텀 instanceof 동작
```javascript
class MyClass {
  static [Symbol.hasInstance](instance) {
    // 커스텀 instanceof 로직
    return instance.hasOwnProperty('customProperty');
  }
}

const obj = { customProperty: true };
console.log(obj instanceof MyClass); // true
```

## 3. Symbol과 Well-known Symbols

### Symbol 기본 사용법
```javascript
// 고유한 식별자 생성
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// 객체 속성으로 사용
const obj = {
  [sym1]: 'Symbol 속성'
};
console.log(obj[sym1]); // "Symbol 속성"
```

### Well-known Symbols
```javascript
// Symbol.iterator
const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value); // 1, 2, 3
}

// Symbol.toPrimitive
const obj = {
  value: 42,
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number': return this.value;
      case 'string': return `값: ${this.value}`;
      default: return this.value;
    }
  }
};

console.log(+obj);     // 42 (number)
console.log(`${obj}`); // "값: 42" (string)
```

## 4. Proxy와 Reflect

### Proxy 기본 사용법
```javascript
const target = { name: '홍길동', age: 25 };

const proxy = new Proxy(target, {
  get(target, property) {
    console.log(`${property} 속성에 접근`);
    return target[property];
  },
  
  set(target, property, value) {
    console.log(`${property}를 ${value}로 설정`);
    target[property] = value;
    return true;
  }
});

console.log(proxy.name); // "name 속성에 접근", "홍길동"
proxy.age = 30;          // "age를 30로 설정"
```

### 실용적인 Proxy 활용
```javascript
// 속성 검증 Proxy
function createValidatedObject(schema) {
  return new Proxy({}, {
    set(target, property, value) {
      const validator = schema[property];
      if (validator && !validator(value)) {
        throw new Error(`${property}의 값이 유효하지 않습니다.`);
      }
      target[property] = value;
      return true;
    }
  });
}

const userSchema = {
  name: value => typeof value === 'string' && value.length > 0,
  age: value => typeof value === 'number' && value >= 0
};

const user = createValidatedObject(userSchema);
user.name = '홍길동'; // 성공
// user.age = -1;     // 에러 발생
```

## 5. WeakMap과 WeakSet

### WeakMap 사용법
```javascript
const privateData = new WeakMap();

class Person {
  constructor(name) {
    // private 속성 저장
    privateData.set(this, { name, secret: '비밀 정보' });
  }
  
  getName() {
    return privateData.get(this).name;
  }
  
  getSecret() {
    return privateData.get(this).secret;
  }
}

const person = new Person('홍길동');
console.log(person.getName()); // "홍길동"
// person 객체가 GC되면 privateData의 항목도 자동 삭제됨
```

### WeakSet 사용법
```javascript
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    console.log('이미 처리된 객체입니다.');
    return;
  }
  
  // 객체 처리 로직
  console.log('객체를 처리합니다.');
  processedObjects.add(obj);
}

const obj1 = { data: 'test' };
processObject(obj1); // "객체를 처리합니다."
processObject(obj1); // "이미 처리된 객체입니다."
```

## 6. Generator 심화

### Generator와 상태 머신
```javascript
function* stateMachine() {
  let state = 'START';
  
  while (true) {
    const action = yield state;
    
    switch (state) {
      case 'START':
        state = action === 'begin' ? 'PROCESSING' : 'START';
        break;
      case 'PROCESSING':
        state = action === 'complete' ? 'END' : 
                action === 'error' ? 'ERROR' : 'PROCESSING';
        break;
      case 'END':
        state = action === 'restart' ? 'START' : 'END';
        break;
      case 'ERROR':
        state = action === 'retry' ? 'START' : 'ERROR';
        break;
    }
  }
}

const machine = stateMachine();
console.log(machine.next().value);        // "START"
console.log(machine.next('begin').value); // "PROCESSING"
console.log(machine.next('complete').value); // "END"
```

### Generator와 비동기 처리
```javascript
function* asyncGenerator() {
  try {
    const user = yield fetch('/api/user');
    const posts = yield fetch(`/api/user/${user.id}/posts`);
    return { user, posts };
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// Generator 실행기
async function runGenerator(generator) {
  const gen = generator();
  let result = gen.next();
  
  while (!result.done) {
    try {
      const value = await result.value;
      result = gen.next(value);
    } catch (error) {
      result = gen.throw(error);
    }
  }
  
  return result.value;
}
```

## 7. 메모리 관리와 가비지 컬렉션

### 메모리 누수 방지
```javascript
// 문제가 될 수 있는 코드
function createMemoryLeak() {
  const largeData = new Array(1000000).fill('data');
  
  return function() {
    // largeData가 클로저에 의해 계속 참조됨
    console.log('함수 실행');
  };
}

// 개선된 코드
function createOptimized() {
  const largeData = new Array(1000000).fill('data');
  const neededData = largeData.length; // 필요한 정보만 추출
  
  return function() {
    // 작은 데이터만 참조
    console.log(`데이터 크기: ${neededData}`);
  };
}
```

### 이벤트 리스너 정리
```javascript
class ComponentManager {
  constructor() {
    this.components = new Map();
    this.eventListeners = new WeakMap();
  }
  
  addComponent(element, component) {
    this.components.set(element, component);
    
    // 이벤트 리스너 등록 및 추적
    const listeners = [];
    
    const clickHandler = () => component.onClick();
    element.addEventListener('click', clickHandler);
    listeners.push({ event: 'click', handler: clickHandler });
    
    this.eventListeners.set(element, listeners);
  }
  
  removeComponent(element) {
    // 이벤트 리스너 정리
    const listeners = this.eventListeners.get(element);
    if (listeners) {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    }
    
    this.components.delete(element);
    this.eventListeners.delete(element);
  }
}
```

## 8. 성능 최적화 기법

### 디바운싱과 스로틀링
```javascript
// 디바운싱: 마지막 호출 후 일정 시간 대기
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 스로틀링: 일정 시간 간격으로 실행
function throttle(func, delay) {
  let lastCallTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      func.apply(this, args);
    }
  };
}

// 사용 예시
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((value) => {
  console.log('검색:', value);
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### 메모이제이션
```javascript
function memoize(func) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 피보나치 수열 (메모이제이션 적용)
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // 빠른 실행
```

## 9. 실용적인 유틸리티 함수들

### 깊은 복사
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (obj instanceof Object) {
    const clonedObj = {};
    Object.keys(obj).forEach(key => {
      clonedObj[key] = deepClone(obj[key]);
    });
    return clonedObj;
  }
}
```

### 객체 비교
```javascript
function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== typeof b) return false;
  
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    return keysA.every(key => 
      keysB.includes(key) && deepEqual(a[key], b[key])
    );
  }
  
  return false;
}
```

### 파이프라인 함수
```javascript
function pipe(...functions) {
  return function(initialValue) {
    return functions.reduce((acc, func) => func(acc), initialValue);
  };
}

// 사용 예시
const processData = pipe(
  data => data.filter(x => x > 0),
  data => data.map(x => x * 2),
  data => data.reduce((sum, x) => sum + x, 0)
);

console.log(processData([1, -2, 3, 4])); // 16
```

## 정리

1. **new.target**: 생성자 호출 확인
2. **Symbol**: 고유 식별자와 메타프로그래밍
3. **Proxy/Reflect**: 객체 동작 가로채기
4. **WeakMap/WeakSet**: 메모리 효율적인 저장
5. **성능 최적화**: 디바운싱, 스로틀링, 메모이제이션

이러한 고급 기능들을 적절히 활용하면 더 효율적이고 안정적인 JavaScript 애플리케이션을 만들 수 있습니다. 