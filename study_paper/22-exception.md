# 예외 처리 개념정리

## 1. 예외 처리란?

**예외 처리(Exception Handling)**는 프로그램 실행 중 발생하는 예기치 못한 에러로부터 코드의 실행 흐름을 복구하는 기능입니다.

### 에러의 종류
```javascript
// 1. 문법 에러 (Syntax Error)
// console.log('잘못된 문법'); // 따옴표 불일치

// 2. 런타임 에러 (Runtime Error)
console.log(undefinedVariable); // ReferenceError

// 3. 논리 에러 (Logic Error)
function divide(a, b) {
  return a / b; // b가 0일 때 문제
}
```

## 2. try...catch...finally 구문

### 기본 구조
```javascript
try {
  // 에러가 발생할 수 있는 코드
  console.log('시작');
  throw new Error('의도적 에러');
  console.log('이 코드는 실행되지 않음');
} catch (error) {
  // 에러 처리 코드
  console.log('에러 발생:', error.message);
} finally {
  // 항상 실행되는 코드
  console.log('정리 작업');
}
```

### catch 블록에서 에러 객체 사용
```javascript
try {
  new Array(-1); // RangeError
} catch (error) {
  console.log('에러 이름:', error.name);
  console.log('에러 메시지:', error.message);
  console.log('스택 트레이스:', error.stack);
}
```

### 에러 객체 생략 (ES2019+)
```javascript
try {
  riskyOperation();
} catch {
  // 에러 객체를 사용하지 않을 때
  console.log('에러가 발생했습니다.');
}
```

## 3. 다양한 에러 유형

### 내장 에러 타입
```javascript
// ReferenceError
try {
  console.log(notDefined);
} catch (error) {
  console.log(error.name); // "ReferenceError"
}

// TypeError
try {
  null.property;
} catch (error) {
  console.log(error.name); // "TypeError"
}

// RangeError
try {
  new Array(-1);
} catch (error) {
  console.log(error.name); // "RangeError"
}

// SyntaxError (eval 사용 시)
try {
  eval('invalid syntax {');
} catch (error) {
  console.log(error.name); // "SyntaxError"
}
```

### 특정 에러 타입 처리
```javascript
try {
  riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    console.log('타입 에러 처리');
  } else if (error instanceof ReferenceError) {
    console.log('참조 에러 처리');
  } else {
    console.log('기타 에러:', error.message);
    throw error; // 처리할 수 없는 에러는 다시 던지기
  }
}
```

## 4. 직접 에러 발생시키기

### Error 생성자 사용
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다.');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (error) {
  console.log(error.message); // "0으로 나눌 수 없습니다."
}
```

### 커스텀 에러 클래스
```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// 사용 예시
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new ValidationError('나이는 숫자여야 합니다.', 'age');
  }
  if (age < 0 || age > 150) {
    throw new ValidationError('유효하지 않은 나이입니다.', 'age');
  }
}

try {
  validateAge('30'); // 문자열 전달
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`검증 에러 (${error.field}): ${error.message}`);
  }
}
```

## 5. finally 블록의 특징

### 항상 실행되는 finally
```javascript
function testFinally(throwError) {
  try {
    if (throwError) {
      throw new Error('테스트 에러');
    }
    return '성공';
  } catch (error) {
    return '에러 처리';
  } finally {
    console.log('항상 실행됨');
  }
}

console.log(testFinally(false)); // "성공"
console.log(testFinally(true));  // "에러 처리"
// 둘 다 "항상 실행됨"이 출력됨
```

### return, break, continue와 finally
```javascript
function testFinallyWithReturn() {
  try {
    return '시도';
  } finally {
    console.log('finally 실행');
    // return 전에 실행됨
  }
}

for (let i = 0; i < 3; i++) {
  try {
    if (i === 1) continue;
  } finally {
    console.log(`i = ${i}`);
  }
}
```

## 6. 비동기 코드에서의 예외 처리

### 콜백에서의 에러 처리
```javascript
// 잘못된 방법
try {
  setTimeout(() => {
    throw new Error('비동기 에러');
  }, 1000);
} catch (error) {
  // 이 catch는 동작하지 않음
  console.log('에러 잡힘');
}

// 올바른 방법
setTimeout(() => {
  try {
    throw new Error('비동기 에러');
  } catch (error) {
    console.log('에러 처리:', error.message);
  }
}, 1000);
```

### Promise에서의 에러 처리
```javascript
// .catch() 사용
Promise.resolve()
  .then(() => {
    throw new Error('Promise 에러');
  })
  .then(() => {
    console.log('실행되지 않음');
  })
  .catch(error => {
    console.log('에러 처리:', error.message);
  })
  .finally(() => {
    console.log('정리 작업');
  });

// 에러 복구
Promise.reject('첫 번째 에러')
  .catch(error => {
    console.log('첫 번째 에러 처리:', error);
    return '복구된 값';
  })
  .then(value => {
    console.log('성공:', value); // "성공: 복구된 값"
  });
```

### async/await에서의 에러 처리
```javascript
async function handleAsyncError() {
  try {
    const result = await fetch('/api/data');
    
    if (!result.ok) {
      throw new Error(`HTTP ${result.status}: ${result.statusText}`);
    }
    
    const data = await result.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('네트워크 에러:', error.message);
    } else {
      console.log('기타 에러:', error.message);
    }
    throw error; // 상위로 에러 전파
  } finally {
    console.log('요청 완료');
  }
}
```

## 7. 실제 활용 예제

### 폼 검증 시스템
```javascript
class FormValidator {
  static validate(formData) {
    const errors = [];
    
    try {
      this.validateEmail(formData.email);
    } catch (error) {
      errors.push(error.message);
    }
    
    try {
      this.validatePassword(formData.password);
    } catch (error) {
      errors.push(error.message);
    }
    
    try {
      this.validateAge(formData.age);
    } catch (error) {
      errors.push(error.message);
    }
    
    if (errors.length > 0) {
      throw new ValidationError('폼 검증 실패', errors);
    }
    
    return true;
  }
  
  static validateEmail(email) {
    if (!email) {
      throw new ValidationError('이메일은 필수입니다.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ValidationError('유효한 이메일 형식이 아닙니다.');
    }
  }
  
  static validatePassword(password) {
    if (!password) {
      throw new ValidationError('비밀번호는 필수입니다.');
    }
    if (password.length < 8) {
      throw new ValidationError('비밀번호는 최소 8자 이상이어야 합니다.');
    }
  }
  
  static validateAge(age) {
    if (age === undefined || age === null) {
      throw new ValidationError('나이는 필수입니다.');
    }
    if (typeof age !== 'number' || age < 0 || age > 150) {
      throw new ValidationError('유효한 나이를 입력해주세요.');
    }
  }
}

// 사용
try {
  FormValidator.validate({
    email: 'invalid-email',
    password: '123',
    age: -5
  });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('검증 에러들:', error.errors);
  }
}
```

### API 요청 헬퍼
```javascript
class ApiHelper {
  static async request(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new NetworkError(
          `요청 실패: ${response.statusText}`,
          response.status
        );
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new NetworkError('요청 시간 초과', 408);
      }
      
      if (error instanceof NetworkError) {
        throw error;
      }
      
      throw new NetworkError('네트워크 에러', 0);
    }
  }
  
  static async get(url) {
    return this.request(url);
  }
  
  static async post(url, data) {
    return this.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
}

// 사용
async function fetchUserData(userId) {
  try {
    const user = await ApiHelper.get(`/api/users/${userId}`);
    console.log('사용자 데이터:', user);
  } catch (error) {
    if (error instanceof NetworkError) {
      if (error.statusCode === 404) {
        console.log('사용자를 찾을 수 없습니다.');
      } else if (error.statusCode === 408) {
        console.log('요청 시간이 초과되었습니다.');
      } else {
        console.log('네트워크 에러:', error.message);
      }
    } else {
      console.log('예상치 못한 에러:', error);
    }
  }
}
```

## 8. 에러 처리 모범 사례

### 1. 적절한 에러 메시지
```javascript
// 나쁜 예
throw new Error('에러');

// 좋은 예
throw new Error('사용자 ID가 유효하지 않습니다. 양의 정수를 입력해주세요.');
```

### 2. 에러 로깅
```javascript
function logError(error, context = '') {
  console.error(`[${new Date().toISOString()}] ${context}:`, {
    name: error.name,
    message: error.message,
    stack: error.stack
  });
}

try {
  riskyOperation();
} catch (error) {
  logError(error, 'riskyOperation 실행 중');
  throw error; // 필요시 재던지기
}
```

### 3. 복구 가능한 에러 처리
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetch(url);
    } catch (error) {
      console.log(`시도 ${attempt} 실패:`, error.message);
      
      if (attempt === maxRetries) {
        throw new Error(`${maxRetries}번 시도 후에도 실패: ${error.message}`);
      }
      
      // 재시도 전 대기
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}
```

## 정리

1. **try...catch...finally**: 동기 코드의 에러 처리
2. **커스텀 에러**: 의미 있는 에러 타입 정의
3. **비동기 에러**: Promise와 async/await에서의 처리
4. **에러 복구**: 적절한 fallback과 재시도 로직
5. **에러 로깅**: 디버깅을 위한 상세한 정보 기록

예외 처리는 안정적인 애플리케이션을 만들기 위한 필수 요소입니다. 예상 가능한 에러를 미리 처리하고, 사용자에게 적절한 피드백을 제공하는 것이 중요합니다. 