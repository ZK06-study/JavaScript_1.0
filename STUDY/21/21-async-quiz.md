# 21. 비동기 프로그래밍 - 퀴즈

## 객관식 문제

### 1. 🟢 비동기 프로그래밍이 필요한 이유로 올바른 것은?
a) 코드를 더 복잡하게 만들기 위해
b) 메인 스레드를 블로킹하지 않기 위해
c) 메모리 사용량을 늘리기 위해
d) 에러를 더 쉽게 만들기 위해

### 2. 🟡 Promise의 상태로 올바르지 않은 것은?
a) pending
b) fulfilled
c) rejected
d) waiting

### 3. 🟠 `async` 함수의 반환값은?
a) 항상 undefined
b) 항상 Promise
c) 함수 내에서 반환하는 값
d) Error 객체

### 4. 🟡 `await` 키워드를 사용할 수 있는 곳은?
a) 모든 함수 내부
b) async 함수 내부만
c) 전역 스코프
d) 콜백 함수 내부

### 5. 🟠 `Promise.all()`의 특징으로 틀린 것은?
a) 모든 Promise가 완료될 때까지 기다린다
b) 하나라도 실패하면 전체가 실패한다
c) 결과는 순서대로 반환된다
d) 가장 빠른 Promise의 결과만 반환한다

### 6. 🟡 콜백 지옥(Callback Hell)을 해결하는 방법이 아닌 것은?
a) Promise 사용
b) async/await 사용
c) 더 많은 중첩 콜백 사용
d) 함수 분리

## 단답형 문제

### 7. 🟢 `setTimeout` 함수의 최소 지연 시간은 몇 밀리초인가?

### 8. 🟡 Promise에서 성공 시 호출되는 메서드는?

### 9. 🟠 `Promise.race()`는 어떤 Promise의 결과를 반환하는가?

### 10. 🟢 `async` 함수에서 에러를 처리하는 구문은?

## 서술형 문제

### 11. 🟡 콜백, Promise, async/await의 차이점과 각각의 장단점을 설명하시오.

### 12. 🟠 이벤트 루프(Event Loop)의 동작 원리와 마이크로태스크 큐의 역할을 설명하시오.

### 13. 🟡 `Promise.all()`, `Promise.allSettled()`, `Promise.race()`의 차이점을 예시와 함께 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
```javascript
// 1. 지연 실행 함수 (delay)
// 2. 콜백을 Promise로 변환하는 함수 (promisify)
// 3. 간단한 비동기 데이터 가져오기 함수
```

### 15. 🟡 Promise 체이닝을 async/await로 변환하시오.
```javascript
// 기존 Promise 체이닝 코드
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

### 16. 🟠 병렬 처리와 순차 처리를 구현하시오.
```javascript
// 여러 API 호출을 병렬/순차로 처리하는 함수들
// 실행 시간 비교 포함
```

### 17. 🟡 재시도 로직이 포함된 비동기 함수를 작성하시오.
```javascript
// 실패 시 자동으로 재시도하는 fetch 함수
// 최대 재시도 횟수와 지연 시간 설정 가능
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 순서를 예상하고 설명하시오.
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0);
});

console.log('7');
```

### 19. 🟠 커스텀 Promise 구현체를 작성하시오.
```javascript
// MyPromise 클래스
// then, catch, finally 메서드 구현
// 기본적인 Promise 동작 모방
```

### 20. 🟠 비동기 작업 큐 관리자를 구현하시오.
```javascript
// 동시 실행 제한이 있는 비동기 작업 큐
// 우선순위 지원
// 진행 상황 모니터링
```

---

## 정답

### 객관식 정답
1. b) 메인 스레드를 블로킹하지 않기 위해
2. d) waiting (Promise 상태는 pending, fulfilled, rejected만 존재)
3. b) 항상 Promise
4. b) async 함수 내부만 (ES2022에서 top-level await 추가됨)
5. d) 가장 빠른 Promise의 결과만 반환한다 (이것은 Promise.race()의 특징)
6. c) 더 많은 중첩 콜백 사용

### 단답형 정답
7. 4밀리초 (브라우저에서 최소 지연 시간)
8. `then()`
9. 가장 먼저 완료되는 Promise
10. `try/catch`

### 서술형 정답
11. **콜백 vs Promise vs async/await:**

**콜백:**
- 장점: 간단한 구조, 이해하기 쉬움
- 단점: 콜백 지옥, 에러 처리 어려움

**Promise:**
- 장점: 체이닝 가능, 에러 처리 개선, 상태 관리
- 단점: 여전히 복잡할 수 있음

**async/await:**
- 장점: 동기적 코드처럼 작성, 가독성 최고, 에러 처리 간편
- 단점: ES2017+, 병렬 처리 시 주의 필요

12. **이벤트 루프와 마이크로태스크:**
- **이벤트 루프**: 콜 스택이 비어있을 때 큐에서 작업을 가져와 실행
- **마이크로태스크 큐**: Promise의 then/catch/finally가 대기하는 곳
- **우선순위**: 마이크로태스크 > 매크로태스크 (setTimeout 등)

13. **Promise 유틸리티 메서드들:**
- **Promise.all()**: 모든 Promise 완료 대기, 하나라도 실패하면 전체 실패
- **Promise.allSettled()**: 모든 Promise 완료 대기, 실패해도 계속 진행
- **Promise.race()**: 가장 먼저 완료되는 Promise 결과 반환

### 코딩 정답
14.
```javascript
// 1. 지연 실행 함수
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 2. 콜백을 Promise로 변환
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };
}

// 3. 비동기 데이터 가져오기 함수
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
    throw error;
  }
}

// 사용 예시
async function example() {
  await delay(1000); // 1초 대기
  console.log('1초 후 실행됨');
  
  // Node.js fs.readFile을 Promise로 변환
  // const readFile = promisify(fs.readFile);
  // const data = await readFile('file.txt', 'utf8');
  
  const userData = await fetchData('/api/user');
  console.log(userData);
}
```

15.
```javascript
// async/await로 변환
async function fetchUserPosts() {
  try {
    const userResponse = await fetch('/api/user');
    const user = await userResponse.json();
    
    const postsResponse = await fetch(`/api/posts/${user.id}`);
    const posts = await postsResponse.json();
    
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 더 간결한 버전 (에러 처리 포함)
async function fetchUserPostsSimple() {
  try {
    const user = await fetch('/api/user').then(res => res.json());
    const posts = await fetch(`/api/posts/${user.id}`).then(res => res.json());
    
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 사용
fetchUserPosts();
```

16.
```javascript
// 병렬 처리 vs 순차 처리
async function compareExecution() {
  const urls = [
    '/api/data1',
    '/api/data2', 
    '/api/data3'
  ];
  
  // 병렬 처리 (모든 요청을 동시에 시작)
  async function fetchParallel() {
    console.time('병렬 처리');
    
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const results = await Promise.all(promises);
    
    console.timeEnd('병렬 처리');
    return results;
  }
  
  // 순차 처리 (하나씩 순서대로)
  async function fetchSequential() {
    console.time('순차 처리');
    
    const results = [];
    for (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      results.push(data);
    }
    
    console.timeEnd('순차 처리');
    return results;
  }
  
  // 병렬 처리 (에러 처리 개선)
  async function fetchParallelSafe() {
    console.time('안전한 병렬 처리');
    
    const results = await Promise.allSettled(
      urls.map(async (url) => {
        try {
          const response = await fetch(url);
          return await response.json();
        } catch (error) {
          return { error: error.message, url };
        }
      })
    );
    
    console.timeEnd('안전한 병렬 처리');
    return results;
  }
  
  // 제한된 동시성 (최대 2개씩만 동시 실행)
  async function fetchWithConcurrencyLimit(limit = 2) {
    console.time('제한된 동시성');
    
    const results = [];
    for (let i = 0; i < urls.length; i += limit) {
      const batch = urls.slice(i, i + limit);
      const batchResults = await Promise.all(
        batch.map(url => fetch(url).then(res => res.json()))
      );
      results.push(...batchResults);
    }
    
    console.timeEnd('제한된 동시성');
    return results;
  }
  
  return {
    fetchParallel,
    fetchSequential,
    fetchParallelSafe,
    fetchWithConcurrencyLimit
  };
}

// 사용 예시
// const fetchers = compareExecution();
// await fetchers.fetchParallel(); // 가장 빠름
// await fetchers.fetchSequential(); // 가장 느림
```

17.
```javascript
// 재시도 로직이 포함된 fetch 함수
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
  const {
    retryDelay = delay,
    retryMultiplier = 2,
    retryCondition = (error) => true,
    onRetry = null,
    ...fetchOptions
  } = options;
  
  let lastError;
  let currentDelay = retryDelay;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      
      // HTTP 에러 상태 코드 체크
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      lastError = error;
      
      // 마지막 시도였다면 에러 throw
      if (attempt === maxRetries) {
        throw error;
      }
      
      // 재시도 조건 확인
      if (!retryCondition(error)) {
        throw error;
      }
      
      // 재시도 콜백 호출
      if (onRetry) {
        onRetry(error, attempt + 1, maxRetries);
      }
      
      console.log(`재시도 ${attempt + 1}/${maxRetries}: ${currentDelay}ms 후 재시도`);
      
      // 지연 후 재시도
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      currentDelay *= retryMultiplier;
    }
  }
  
  throw lastError;
}

// 사용하기 쉬운 래퍼 함수들
async function fetchJSON(url, options = {}) {
  const response = await fetchWithRetry(url, {
    ...options,
    onRetry: (error, attempt, maxAttempts) => {
      console.log(`🔄 재시도 중... (${attempt}/${maxAttempts})`);
    }
  });
  return await response.json();
}

async function fetchWithExponentialBackoff(url, options = {}) {
  return await fetchWithRetry(url, {
    retryDelay: 1000,
    retryMultiplier: 2,
    retryCondition: (error) => {
      // 네트워크 에러나 5xx 서버 에러만 재시도
      return error.message.includes('fetch') || 
             error.message.includes('5');
    },
    ...options
  });
}

// 사용 예시
async function example() {
  try {
    const data = await fetchJSON('/api/unreliable-endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('데이터:', data);
  } catch (error) {
    console.error('최종 실패:', error.message);
  }
}
```

### 응용 정답
18.
```javascript
// 실행 순서:
// 1, 4, 7, 3, 5, 2, 6

// 설명:
// 1. '1' 출력 (동기)
// 2. setTimeout이 태스크 큐에 추가
// 3. Promise.resolve().then이 마이크로태스크 큐에 추가
// 4. '4' 출력 (동기)
// 5. 또 다른 Promise가 마이크로태스크 큐에 추가
// 6. '7' 출력 (동기)
// 7. 마이크로태스크 큐 처리: '3' 출력
// 8. 마이크로태스크 큐 처리: '5' 출력 및 새 setTimeout 등록
// 9. 태스크 큐 처리: '2' 출력
// 10. 태스크 큐 처리: '6' 출력
```

19.
```javascript
// 커스텀 Promise 구현
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
      }
    };
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          if (typeof onFulfilled === 'function') {
            const result = onFulfilled(this.value);
            resolve(result);
          } else {
            resolve(this.value);
          }
        } catch (error) {
          reject(error);
        }
      };
      
      const handleRejected = () => {
        try {
          if (typeof onRejected === 'function') {
            const result = onRejected(this.reason);
            resolve(result);
          } else {
            reject(this.reason);
          }
        } catch (error) {
          reject(error);
        }
      };
      
      if (this.state === 'fulfilled') {
        setTimeout(handleFulfilled, 0);
      } else if (this.state === 'rejected') {
        setTimeout(handleRejected, 0);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  
  finally(onFinally) {
    return this.then(
      value => {
        onFinally();
        return value;
      },
      reason => {
        onFinally();
        throw reason;
      }
    );
  }
  
  static resolve(value) {
    return new MyPromise(resolve => resolve(value));
  }
  
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
  
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let completedCount = 0;
      
      if (promises.length === 0) {
        resolve(results);
        return;
      }
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = value;
            completedCount++;
            if (completedCount === promises.length) {
              resolve(results);
            }
          },
          reject
        );
      });
    });
  }
}

// 사용 예시
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('성공!'), 1000);
});

promise
  .then(value => {
    console.log(value); // '성공!'
    return value + ' 추가';
  })
  .then(value => {
    console.log(value); // '성공! 추가'
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('완료');
  });
```

20.
```javascript
// 비동기 작업 큐 관리자
class AsyncTaskQueue {
  constructor(maxConcurrency = 3) {
    this.maxConcurrency = maxConcurrency;
    this.running = 0;
    this.queue = [];
    this.results = new Map();
    this.listeners = new Set();
  }
  
  // 작업 추가
  add(task, priority = 0, id = null) {
    const taskWrapper = {
      id: id || Date.now() + Math.random(),
      task,
      priority,
      status: 'pending',
      result: null,
      error: null,
      addedAt: Date.now(),
      startedAt: null,
      completedAt: null
    };
    
    // 우선순위에 따라 정렬하여 삽입
    const insertIndex = this.queue.findIndex(item => item.priority < priority);
    if (insertIndex === -1) {
      this.queue.push(taskWrapper);
    } else {
      this.queue.splice(insertIndex, 0, taskWrapper);
    }
    
    this.notifyListeners('taskAdded', taskWrapper);
    this.processQueue();
    
    return taskWrapper.id;
  }
  
  // 큐 처리
  async processQueue() {
    while (this.running < this.maxConcurrency && this.queue.length > 0) {
      const taskWrapper = this.queue.shift();
      this.executeTask(taskWrapper);
    }
  }
  
  // 개별 작업 실행
  async executeTask(taskWrapper) {
    this.running++;
    taskWrapper.status = 'running';
    taskWrapper.startedAt = Date.now();
    
    this.notifyListeners('taskStarted', taskWrapper);
    
    try {
      const result = await taskWrapper.task();
      taskWrapper.status = 'completed';
      taskWrapper.result = result;
      taskWrapper.completedAt = Date.now();
      
      this.results.set(taskWrapper.id, {
        success: true,
        result,
        duration: taskWrapper.completedAt - taskWrapper.startedAt
      });
      
      this.notifyListeners('taskCompleted', taskWrapper);
    } catch (error) {
      taskWrapper.status = 'failed';
      taskWrapper.error = error;
      taskWrapper.completedAt = Date.now();
      
      this.results.set(taskWrapper.id, {
        success: false,
        error,
        duration: taskWrapper.completedAt - taskWrapper.startedAt
      });
      
      this.notifyListeners('taskFailed', taskWrapper);
    } finally {
      this.running--;
      this.processQueue(); // 다음 작업 처리
    }
  }
  
  // 이벤트 리스너 관리
  on(event, listener) {
    this.listeners.add({ event, listener });
  }
  
  off(event, listener) {
    this.listeners.delete({ event, listener });
  }
  
  notifyListeners(event, data) {
    this.listeners.forEach(({ event: listenerEvent, listener }) => {
      if (listenerEvent === event) {
        listener(data);
      }
    });
  }
  
  // 상태 조회
  getStatus() {
    return {
      running: this.running,
      queued: this.queue.length,
      maxConcurrency: this.maxConcurrency,
      totalCompleted: this.results.size
    };
  }
  
  // 결과 조회
  getResult(taskId) {
    return this.results.get(taskId);
  }
  
  // 모든 작업 완료 대기
  async waitForAll() {
    return new Promise((resolve) => {
      const checkCompletion = () => {
        if (this.running === 0 && this.queue.length === 0) {
          resolve(Array.from(this.results.values()));
        } else {
          setTimeout(checkCompletion, 100);
        }
      };
      checkCompletion();
    });
  }
  
  // 큐 정리
  clear() {
    this.queue = [];
    this.results.clear();
  }
  
  // 통계
  getStats() {
    const results = Array.from(this.results.values());
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    return {
      total: results.length,
      successful: successful.length,
      failed: failed.length,
      averageDuration: results.length > 0 ? 
        results.reduce((sum, r) => sum + r.duration, 0) / results.length : 0,
      successRate: results.length > 0 ? 
        (successful.length / results.length) * 100 : 0
    };
  }
}

// 사용 예시
const queue = new AsyncTaskQueue(2); // 최대 2개 동시 실행

// 이벤트 리스너 등록
queue.on('taskCompleted', (task) => {
  console.log(`✅ 작업 완료: ${task.id}`);
});

queue.on('taskFailed', (task) => {
  console.log(`❌ 작업 실패: ${task.id}`, task.error.message);
});

// 작업들 추가
const taskId1 = queue.add(
  () => new Promise(resolve => setTimeout(() => resolve('결과1'), 2000)),
  1, // 낮은 우선순위
  'task1'
);

const taskId2 = queue.add(
  () => new Promise(resolve => setTimeout(() => resolve('결과2'), 1000)),
  5, // 높은 우선순위 (먼저 실행됨)
  'task2'
);

const taskId3 = queue.add(
  () => new Promise((_, reject) => setTimeout(() => reject(new Error('실패')), 500)),
  3,
  'task3'
);

// 모든 작업 완료 대기
async function monitorQueue() {
  console.log('큐 모니터링 시작');
  
  const interval = setInterval(() => {
    console.log('현재 상태:', queue.getStatus());
  }, 500);
  
  await queue.waitForAll();
  clearInterval(interval);
  
  console.log('모든 작업 완료');
  console.log('통계:', queue.getStats());
  
  // 개별 결과 확인
  console.log('Task1 결과:', queue.getResult('task1'));
  console.log('Task2 결과:', queue.getResult('task2'));
  console.log('Task3 결과:', queue.getResult('task3'));
}

monitorQueue();
```