# 22. 예외 처리 - 퀴즈

## 객관식 문제

### 1. 🟢 `try...catch` 문에서 에러가 발생하지 않았을 때 실행되는 블록은?
a) catch
b) finally
c) else
d) then

### 2. 🟡 `finally` 블록의 특징으로 올바른 것은?
a) 에러가 발생했을 때만 실행된다
b) 에러가 발생하지 않았을 때만 실행된다
c) 항상 실행된다
d) return문을 만나면 실행되지 않는다

### 3. 🟠 사용자 정의 에러를 생성할 때 상속받아야 하는 기본 클래스는?
a) Exception
b) Error
c) ErrorObject
d) CustomError

### 4. 🟡 `throw` 문으로 던질 수 있는 것은?
a) Error 객체만
b) 문자열만
c) 모든 값
d) 숫자만

### 5. 🟠 비동기 함수에서 에러 처리 방법으로 틀린 것은?
a) try...catch 사용
b) .catch() 메서드 사용
c) 전역 에러 핸들러 사용
d) finally 블록만으로 충분하다

### 6. 🟡 `console.error()`의 주요 용도는?
a) 프로그램을 중단시키기
b) 에러 메시지를 로깅하기
c) 에러를 자동으로 수정하기
d) 에러를 숨기기

## 단답형 문제

### 7. 🟢 의도적으로 에러를 발생시킬 때 사용하는 키워드는?

### 8. 🟡 처리되지 않은 Promise rejection을 감지하는 이벤트는?

### 9. 🟠 Error 객체의 기본 속성 중 에러 위치 정보를 담는 속성은?

### 10. 🟢 try 블록에서 return문이 있어도 실행되는 블록은?

## 서술형 문제

### 11. 🟡 에러 처리의 중요성과 좋은 에러 처리 전략을 설명하시오.

### 12. 🟠 동기와 비동기 코드에서의 에러 처리 방법 차이점을 설명하시오.

### 13. 🟡 전역 에러 처리와 지역 에러 처리의 장단점을 비교하여 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
```javascript
// 1. 나이 유효성 검사 함수 (0-150 범위)
// 2. 이메일 형식 검사 함수
// 3. 사용자 정의 ValidationError 클래스
```

### 15. 🟡 안전한 JSON 파싱 함수를 작성하시오.
```javascript
// JSON 파싱 실패 시 기본값 반환
// 에러 로깅 포함
// 타입 검증 기능
```

### 16. 🟠 재시도 로직이 포함된 에러 처리 시스템을 구현하시오.
```javascript
// 특정 에러 타입에 따른 재시도 전략
// 최대 재시도 횟수 제한
// 백오프 전략 적용
```

### 17. 🟡 에러 로깅 시스템을 구현하시오.
```javascript
// 에러 레벨 분류 (info, warn, error, fatal)
// 콘솔과 서버 양쪽 로깅
// 에러 통계 수집
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
function testFinally() {
  try {
    console.log('try');
    return 'try return';
  } catch (error) {
    console.log('catch');
    return 'catch return';
  } finally {
    console.log('finally');
    return 'finally return';
  }
}

console.log(testFinally());
```

### 19. 🟠 체이닝된 비동기 작업에서의 에러 전파 시스템을 구현하시오.
```javascript
// 여러 비동기 작업 중 하나가 실패해도 다른 작업 계속 진행
// 각 단계별 에러 정보 수집
// 최종 결과에 성공/실패 정보 포함
```

### 20. 🟠 전역 에러 핸들러와 에러 리포팅 시스템을 구현하시오.
```javascript
// 처리되지 않은 에러 자동 캐치
// 에러 정보 수집 및 분석
// 개발/프로덕션 환경별 다른 처리
```

---

## 정답

### 객관식 정답
1. b) finally
2. c) 항상 실행된다
3. b) Error
4. c) 모든 값
5. d) finally 블록만으로 충분하다
6. b) 에러 메시지를 로깅하기

### 단답형 정답
7. `throw`
8. `unhandledrejection`
9. `stack`
10. `finally`

### 서술형 정답
11. **에러 처리의 중요성과 전략:**
- **중요성**: 프로그램 안정성, 사용자 경험, 디버깅 효율성
- **전략**: 
  - 예측 가능한 에러 미리 처리
  - 명확한 에러 메시지 제공
  - 적절한 fallback 제공
  - 에러 로깅 및 모니터링

12. **동기 vs 비동기 에러 처리:**
- **동기**: try...catch로 직접 처리
- **비동기**: 
  - Promise: .catch() 메서드 또는 async/await의 try...catch
  - 콜백: 에러 우선 콜백 패턴
  - 이벤트: 에러 이벤트 리스너

13. **전역 vs 지역 에러 처리:**
- **전역**: 일관된 처리, 누락 방지 / 세밀한 제어 어려움
- **지역**: 세밀한 제어, 컨텍스트 활용 / 누락 가능성, 중복 코드

### 코딩 정답
14.
```javascript
// 사용자 정의 ValidationError 클래스
class ValidationError extends Error {
  constructor(message, field, value) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
  }
}

// 1. 나이 유효성 검사 함수
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new ValidationError('나이는 숫자여야 합니다', 'age', age);
  }
  
  if (!Number.isInteger(age)) {
    throw new ValidationError('나이는 정수여야 합니다', 'age', age);
  }
  
  if (age < 0 || age > 150) {
    throw new ValidationError('나이는 0-150 사이여야 합니다', 'age', age);
  }
  
  return true;
}

// 2. 이메일 형식 검사 함수
function validateEmail(email) {
  if (typeof email !== 'string') {
    throw new ValidationError('이메일은 문자열이어야 합니다', 'email', email);
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    throw new ValidationError('올바른 이메일 형식이 아닙니다', 'email', email);
  }
  
  return true;
}

// 통합 유효성 검사 함수
function validateUser(userData) {
  const errors = [];
  
  try {
    validateAge(userData.age);
  } catch (error) {
    if (error instanceof ValidationError) {
      errors.push(error);
    } else {
      throw error;
    }
  }
  
  try {
    validateEmail(userData.email);
  } catch (error) {
    if (error instanceof ValidationError) {
      errors.push(error);
    } else {
      throw error;
    }
  }
  
  if (errors.length > 0) {
    throw new ValidationError(
      `유효성 검사 실패: ${errors.map(e => e.message).join(', ')}`,
      'multiple',
      errors
    );
  }
  
  return true;
}

// 사용 예시
try {
  validateUser({ age: 25, email: 'test@example.com' });
  console.log('유효성 검사 통과');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`검증 오류 (${error.field}):`, error.message);
  } else {
    console.error('예상치 못한 오류:', error);
  }
}
```

15.
```javascript
// 안전한 JSON 파싱 함수
function safeJsonParse(jsonString, defaultValue = null, options = {}) {
  const {
    throwOnError = false,
    logErrors = true,
    validateType = null,
    reviver = null
  } = options;
  
  try {
    if (typeof jsonString !== 'string') {
      throw new TypeError('입력값이 문자열이 아닙니다');
    }
    
    if (jsonString.trim() === '') {
      throw new SyntaxError('빈 문자열은 유효한 JSON이 아닙니다');
    }
    
    const parsed = JSON.parse(jsonString, reviver);
    
    // 타입 검증
    if (validateType && typeof validateType === 'function') {
      if (!validateType(parsed)) {
        throw new TypeError('파싱된 결과가 예상된 타입과 다릅니다');
      }
    }
    
    return {
      success: true,
      data: parsed,
      error: null
    };
    
  } catch (error) {
    if (logErrors) {
      console.error('JSON 파싱 실패:', {
        input: jsonString,
        error: error.message,
        stack: error.stack
      });
    }
    
    if (throwOnError) {
      throw error;
    }
    
    return {
      success: false,
      data: defaultValue,
      error: {
        name: error.name,
        message: error.message
      }
    };
  }
}

// 특화된 파싱 함수들
function parseUserData(jsonString) {
  return safeJsonParse(jsonString, { name: '', age: 0 }, {
    validateType: (data) => 
      typeof data === 'object' && 
      typeof data.name === 'string' && 
      typeof data.age === 'number'
  });
}

function parseArrayData(jsonString) {
  return safeJsonParse(jsonString, [], {
    validateType: (data) => Array.isArray(data)
  });
}

// 사용 예시
const validJson = '{"name": "Alice", "age": 30}';
const invalidJson = '{"name": "Alice", "age":}';
const notJson = 'hello world';

console.log(parseUserData(validJson));   // { success: true, data: {...} }
console.log(parseUserData(invalidJson)); // { success: false, data: default }
console.log(parseArrayData('[1,2,3]'));  // { success: true, data: [1,2,3] }
```

16.
```javascript
// 에러 타입 분류
class RetryableError extends Error {
  constructor(message, retryAfter = 1000) {
    super(message);
    this.name = 'RetryableError';
    this.retryAfter = retryAfter;
  }
}

class FatalError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FatalError';
  }
}

// 재시도 전략 설정
const retryStrategies = {
  exponential: (attempt) => Math.min(1000 * Math.pow(2, attempt), 30000),
  linear: (attempt) => 1000 * attempt,
  fixed: () => 1000,
  fibonacci: (() => {
    const fib = [1000, 1000];
    return (attempt) => {
      if (attempt < 2) return fib[attempt];
      const next = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(next);
      return Math.min(next, 30000);
    };
  })()
};

// 재시도 로직이 포함된 함수
async function executeWithRetry(fn, options = {}) {
  const {
    maxRetries = 3,
    strategy = 'exponential',
    retryCondition = (error) => error instanceof RetryableError,
    onRetry = null,
    onFinalFailure = null
  } = options;
  
  const getDelay = retryStrategies[strategy] || retryStrategies.exponential;
  let lastError;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();
      
      // 성공 시 재시도 횟수 정보와 함께 반환
      return {
        success: true,
        result,
        attempts: attempt + 1
      };
      
    } catch (error) {
      lastError = error;
      
      // 치명적 에러는 즉시 실패
      if (error instanceof FatalError) {
        break;
      }
      
      // 재시도 조건 확인
      if (!retryCondition(error)) {
        break;
      }
      
      // 마지막 시도였다면 더 이상 재시도하지 않음
      if (attempt === maxRetries) {
        break;
      }
      
      const delay = error.retryAfter || getDelay(attempt);
      
      // 재시도 콜백 실행
      if (onRetry) {
        await onRetry(error, attempt + 1, delay);
      }
      
      console.log(`🔄 재시도 ${attempt + 1}/${maxRetries}: ${delay}ms 후 재시도`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  // 최종 실패 처리
  if (onFinalFailure) {
    await onFinalFailure(lastError);
  }
  
  return {
    success: false,
    error: lastError,
    attempts: maxRetries + 1
  };
}

// 사용 예시
async function unreliableApiCall() {
  const random = Math.random();
  
  if (random < 0.3) {
    throw new FatalError('인증 실패'); // 재시도 불가
  } else if (random < 0.7) {
    throw new RetryableError('서버 과부하', 2000); // 재시도 가능
  }
  
  return { data: 'success', timestamp: Date.now() };
}

async function example() {
  const result = await executeWithRetry(unreliableApiCall, {
    maxRetries: 5,
    strategy: 'exponential',
    onRetry: async (error, attempt, delay) => {
      console.log(`❌ 시도 ${attempt} 실패: ${error.message}`);
      console.log(`⏰ ${delay}ms 후 재시도...`);
    },
    onFinalFailure: async (error) => {
      console.log(`💀 최종 실패: ${error.message}`);
      // 여기서 알림 발송, 로깅 등 수행
    }
  });
  
  if (result.success) {
    console.log(`✅ 성공 (${result.attempts}번 시도):`, result.result);
  } else {
    console.log(`❌ 실패 (${result.attempts}번 시도):`, result.error.message);
  }
}

example();
```

17.
```javascript
// 에러 로깅 시스템
class ErrorLogger {
  constructor(config = {}) {
    this.config = {
      logToConsole: true,
      logToServer: false,
      serverEndpoint: '/api/logs',
      maxRetries: 3,
      environment: 'development',
      ...config
    };
    
    this.stats = {
      info: 0,
      warn: 0,
      error: 0,
      fatal: 0
    };
    
    this.logQueue = [];
    this.isProcessing = false;
  }
  
  // 로그 레벨별 메서드
  info(message, context = {}) {
    this.log('info', message, context);
  }
  
  warn(message, context = {}) {
    this.log('warn', message, context);
  }
  
  error(message, context = {}) {
    this.log('error', message, context);
  }
  
  fatal(message, context = {}) {
    this.log('fatal', message, context);
  }
  
  // 메인 로그 메서드
  log(level, message, context = {}) {
    const logEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
      environment: this.config.environment,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Node.js',
      url: typeof window !== 'undefined' ? window.location.href : 'N/A'
    };
    
    // 통계 업데이트
    this.stats[level]++;
    
    // 콘솔 로깅
    if (this.config.logToConsole) {
      this.logToConsole(logEntry);
    }
    
    // 서버 로깅
    if (this.config.logToServer) {
      this.logQueue.push(logEntry);
      this.processLogQueue();
    }
  }
  
  // 콘솔 로깅
  logToConsole(logEntry) {
    const { level, message, context, timestamp } = logEntry;
    const prefix = `[${timestamp}] ${level.toUpperCase()}:`;
    
    switch (level) {
      case 'info':
        console.info(prefix, message, context);
        break;
      case 'warn':
        console.warn(prefix, message, context);
        break;
      case 'error':
        console.error(prefix, message, context);
        break;
      case 'fatal':
        console.error(`🚨 ${prefix}`, message, context);
        break;
    }
  }
  
  // 서버 로깅 큐 처리
  async processLogQueue() {
    if (this.isProcessing || this.logQueue.length === 0) return;
    
    this.isProcessing = true;
    
    while (this.logQueue.length > 0) {
      const batch = this.logQueue.splice(0, 10); // 배치 처리
      
      try {
        await this.sendToServer(batch);
      } catch (error) {
        console.error('로그 전송 실패:', error);
        // 실패한 로그들을 다시 큐에 추가 (선택사항)
        // this.logQueue.unshift(...batch);
      }
    }
    
    this.isProcessing = false;
  }
  
  // 서버로 로그 전송
  async sendToServer(logs) {
    const response = await fetch(this.config.serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ logs })
    });
    
    if (!response.ok) {
      throw new Error(`로그 전송 실패: ${response.status}`);
    }
  }
  
  // 에러 객체 처리
  logError(error, context = {}) {
    const errorContext = {
      ...context,
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...(error.cause && { cause: error.cause })
    };
    
    if (error instanceof FatalError) {
      this.fatal(error.message, errorContext);
    } else {
      this.error(error.message, errorContext);
    }
  }
  
  // 통계 조회
  getStats() {
    return { ...this.stats };
  }
  
  // 통계 리셋
  resetStats() {
    Object.keys(this.stats).forEach(key => {
      this.stats[key] = 0;
    });
  }
  
  // 중요한 에러 알림
  async alertCriticalError(error, context = {}) {
    this.fatal(error.message, context);
    
    // 개발 환경에서는 즉시 알림
    if (this.config.environment === 'development') {
      console.error('🚨 CRITICAL ERROR:', error);
    }
    
    // 프로덕션에서는 외부 알림 서비스 호출
    if (this.config.environment === 'production') {
      try {
        await this.sendCriticalAlert(error, context);
      } catch (alertError) {
        console.error('알림 전송 실패:', alertError);
      }
    }
  }
  
  async sendCriticalAlert(error, context) {
    // Slack, 이메일, SMS 등 외부 알림 서비스 호출
    // 실제 구현은 사용하는 서비스에 따라 달라짐
    console.log('Critical alert sent:', { error: error.message, context });
  }
}

// 전역 로거 인스턴스
const logger = new ErrorLogger({
  environment: process.env.NODE_ENV || 'development',
  logToServer: process.env.NODE_ENV === 'production'
});

// 사용 예시
try {
  // 일반적인 로깅
  logger.info('사용자 로그인', { userId: 123, ip: '192.168.1.1' });
  logger.warn('API 응답 시간 지연', { endpoint: '/api/users', responseTime: 5000 });
  
  // 에러 발생 시뮬레이션
  throw new Error('데이터베이스 연결 실패');
  
} catch (error) {
  logger.logError(error, { 
    operation: 'database_connection',
    retryCount: 3 
  });
}

// 통계 확인
console.log('로그 통계:', logger.getStats());

// 중요한 에러 처리
async function handleCriticalError() {
  try {
    // 중요한 작업 수행
    throw new FatalError('결제 시스템 장애');
  } catch (error) {
    await logger.alertCriticalError(error, {
      service: 'payment',
      affectedUsers: 1500
    });
  }
}
```

### 응용 정답
18.
```javascript
// 실행 결과:
// "try"
// "finally"
// "finally return"

// 설명: finally 블록의 return문이 try 블록의 return문을 덮어씁니다.
// finally 블록은 항상 실행되며, 여기서 return하면 다른 return값을 무시합니다.
```

19.
```javascript
// 체이닝된 비동기 작업의 에러 전파 시스템
class AsyncChain {
  constructor(options = {}) {
    this.tasks = [];
    this.results = [];
    this.errors = [];
    this.options = {
      continueOnError: true,
      collectResults: true,
      timeout: 30000,
      ...options
    };
  }
  
  // 작업 추가
  add(taskFunction, name = null) {
    this.tasks.push({
      fn: taskFunction,
      name: name || `Task${this.tasks.length + 1}`,
      index: this.tasks.length
    });
    return this;
  }
  
  // 모든 작업 실행
  async execute() {
    const startTime = Date.now();
    this.results = [];
    this.errors = [];
    
    for (const task of this.tasks) {
      const taskStart = Date.now();
      
      try {
        const result = await this.executeTask(task);
        
        this.results.push({
          taskName: task.name,
          index: task.index,
          success: true,
          result,
          duration: Date.now() - taskStart,
          timestamp: new Date().toISOString()
        });
        
      } catch (error) {
        const errorInfo = {
          taskName: task.name,
          index: task.index,
          success: false,
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack
          },
          duration: Date.now() - taskStart,
          timestamp: new Date().toISOString()
        };
        
        this.errors.push(errorInfo);
        this.results.push(errorInfo);
        
        // 에러 발생 시 중단할지 결정
        if (!this.options.continueOnError) {
          break;
        }
      }
    }
    
    return {
      success: this.errors.length === 0,
      totalDuration: Date.now() - startTime,
      completed: this.results.length,
      total: this.tasks.length,
      successCount: this.results.filter(r => r.success).length,
      errorCount: this.errors.length,
      results: this.options.collectResults ? this.results : null,
      errors: this.errors,
      summary: this.generateSummary()
    };
  }
  
  // 개별 작업 실행 (타임아웃 포함)
  async executeTask(task) {
    return new Promise(async (resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Task "${task.name}" timed out after ${this.options.timeout}ms`));
      }, this.options.timeout);
      
      try {
        const result = await task.fn();
        clearTimeout(timeout);
        resolve(result);
      } catch (error) {
        clearTimeout(timeout);
        reject(error);
      }
    });
  }
  
  // 결과 요약 생성
  generateSummary() {
    const successful = this.results.filter(r => r.success);
    const failed = this.results.filter(r => !r.success);
    
    return {
      totalTasks: this.tasks.length,
      successful: successful.length,
      failed: failed.length,
      successRate: this.results.length > 0 ? 
        (successful.length / this.results.length) * 100 : 0,
      averageDuration: this.results.length > 0 ?
        this.results.reduce((sum, r) => sum + r.duration, 0) / this.results.length : 0,
      failedTasks: failed.map(f => ({ name: f.taskName, error: f.error.message }))
    };
  }
}

// 사용 예시
async function demonstrateAsyncChain() {
  const chain = new AsyncChain({
    continueOnError: true,
    collectResults: true,
    timeout: 5000
  });
  
  // 작업들 추가
  chain
    .add(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { data: 'User data fetched', userId: 123 };
    }, 'FetchUser')
    
    .add(async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      throw new Error('Database connection failed');
    }, 'FetchPosts')
    
    .add(async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      return { data: 'Settings loaded', theme: 'dark' };
    }, 'LoadSettings')
    
    .add(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { data: 'Notifications fetched', count: 5 };
    }, 'FetchNotifications');
  
  const result = await chain.execute();
  
  console.log('=== 실행 결과 ===');
  console.log('성공:', result.success);
  console.log('총 소요 시간:', result.totalDuration + 'ms');
  console.log('성공/실패:', `${result.successCount}/${result.errorCount}`);
  
  console.log('\n=== 개별 결과 ===');
  result.results.forEach(r => {
    if (r.success) {
      console.log(`✅ ${r.taskName}: 성공 (${r.duration}ms)`);
    } else {
      console.log(`❌ ${r.taskName}: ${r.error.message} (${r.duration}ms)`);
    }
  });
  
  console.log('\n=== 요약 ===');
  console.log(result.summary);
  
  return result;
}

demonstrateAsyncChain();
```

20.
```javascript
// 전역 에러 핸들러와 에러 리포팅 시스템
class GlobalErrorHandler {
  constructor(config = {}) {
    this.config = {
      environment: 'development',
      reportingEndpoint: '/api/error-reports',
      enableConsoleLogging: true,
      enableReporting: false,
      maxReportsPerSession: 50,
      ...config
    };
    
    this.reportCount = 0;
    this.errorQueue = [];
    this.isReporting = false;
    
    this.initialize();
  }
  
  initialize() {
    // 처리되지 않은 JavaScript 에러
    window.addEventListener('error', (event) => {
      this.handleError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack
      });
    });
    
    // 처리되지 않은 Promise rejection
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        type: 'unhandled-promise',
        message: event.reason?.message || 'Unhandled Promise Rejection',
        reason: event.reason,
        stack: event.reason?.stack
      });
    });
    
    // 리소스 로딩 에러
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError({
          type: 'resource',
          message: `Failed to load resource: ${event.target.src || event.target.href}`,
          source: event.target.src || event.target.href,
          element: event.target.tagName
        });
      }
    }, true);
  }
  
  // 에러 처리 메인 메서드
  handleError(errorInfo) {
    if (this.reportCount >= this.config.maxReportsPerSession) {
      return; // 너무 많은 에러 방지
    }
    
    const enrichedError = this.enrichErrorInfo(errorInfo);
    
    // 콘솔 로깅
    if (this.config.enableConsoleLogging) {
      this.logToConsole(enrichedError);
    }
    
    // 에러 리포팅
    if (this.config.enableReporting) {
      this.queueErrorReport(enrichedError);
    }
    
    // 개발 환경에서 추가 디버깅 정보
    if (this.config.environment === 'development') {
      this.developmentDebugging(enrichedError);
    }
    
    this.reportCount++;
  }
  
  // 에러 정보 보강
  enrichErrorInfo(errorInfo) {
    return {
      ...errorInfo,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      sessionInfo: {
        duration: Date.now() - performance.timing.navigationStart,
        reportCount: this.reportCount
      },
      browserInfo: {
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled
      }
    };
  }
  
  // 콘솔 로깅
  logToConsole(errorInfo) {
    const prefix = `🚨 [GlobalErrorHandler] ${errorInfo.type.toUpperCase()}:`;
    
    if (this.config.environment === 'development') {
      console.group(prefix);
      console.error('Message:', errorInfo.message);
      if (errorInfo.stack) {
        console.error('Stack:', errorInfo.stack);
      }
      console.log('Error Info:', errorInfo);
      console.groupEnd();
    } else {
      console.error(prefix, errorInfo.message);
    }
  }
  
  // 에러 리포트 큐에 추가
  queueErrorReport(errorInfo) {
    this.errorQueue.push(errorInfo);
    this.processErrorQueue();
  }
  
  // 에러 리포트 처리
  async processErrorQueue() {
    if (this.isReporting || this.errorQueue.length === 0) {
      return;
    }
    
    this.isReporting = true;
    
    try {
      while (this.errorQueue.length > 0) {
        const batch = this.errorQueue.splice(0, 5); // 배치 처리
        await this.sendErrorReport(batch);
      }
    } catch (error) {
      console.error('에러 리포팅 실패:', error);
    } finally {
      this.isReporting = false;
    }
  }
  
  // 서버로 에러 리포트 전송
  async sendErrorReport(errors) {
    try {
      const response = await fetch(this.config.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          errors,
          metadata: {
            timestamp: new Date().toISOString(),
            environment: this.config.environment,
            version: window.APP_VERSION || 'unknown'
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
    } catch (error) {
      // 리포팅 실패 시 로컬 스토리지에 저장 (선택사항)
      this.saveToLocalStorage(errors);
      throw error;
    }
  }
  
  // 로컬 스토리지에 에러 저장 (오프라인 대비)
  saveToLocalStorage(errors) {
    try {
      const stored = JSON.parse(localStorage.getItem('pendingErrorReports') || '[]');
      stored.push(...errors);
      
      // 최대 100개까지만 저장
      const limited = stored.slice(-100);
      localStorage.setItem('pendingErrorReports', JSON.stringify(limited));
    } catch (error) {
      console.warn('로컬 스토리지 저장 실패:', error);
    }
  }
  
  // 개발 환경 디버깅
  developmentDebugging(errorInfo) {
    // 디버깅 도구 제안
    if (errorInfo.type === 'javascript' && errorInfo.stack) {
      console.log('💡 디버깅 팁: 스택 트레이스를 확인하여 에러 위치를 파악하세요.');
    }
    
    // 자주 발생하는 에러 패턴 감지
    if (errorInfo.message.includes('Cannot read property')) {
      console.log('💡 힌트: undefined 객체의 속성에 접근하려고 했습니다. 옵셔널 체이닝(?.)을 사용해보세요.');
    }
  }
  
  // 수동 에러 리포팅
  reportError(error, context = {}) {
    this.handleError({
      type: 'manual',
      message: error.message || String(error),
      stack: error.stack,
      context,
      error: error instanceof Error ? error : new Error(String(error))
    });
  }
  
  // 통계 정보
  getStats() {
    return {
      totalReports: this.reportCount,
      queuedReports: this.errorQueue.length,
      maxReportsReached: this.reportCount >= this.config.maxReportsPerSession
    };
  }
  
  // 리포팅 설정 업데이트
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }
}

// 전역 인스턴스 생성
const globalErrorHandler = new GlobalErrorHandler({
  environment: window.NODE_ENV || 'development',
  enableReporting: window.NODE_ENV === 'production',
  reportingEndpoint: '/api/error-reports'
});

// 수동 에러 리포팅을 위한 전역 함수
window.reportError = (error, context) => {
  globalErrorHandler.reportError(error, context);
};

// 사용 예시
try {
  // 의도적인 에러 발생
  throw new Error('테스트 에러');
} catch (error) {
  window.reportError(error, { 
    component: 'TestComponent',
    action: 'button_click' 
  });
}

// Promise rejection 테스트
// Promise.reject(new Error('테스트 Promise 에러'));

// 리소스 로딩 에러 테스트 (실제로는 실행하지 마세요)
// const img = new Image();
// img.src = 'https://invalid-url/image.jpg';

console.log('에러 핸들러 통계:', globalErrorHandler.getStats());
```