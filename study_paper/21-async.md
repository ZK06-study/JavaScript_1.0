# 비동기 프로그래밍 개념정리

## 1. 동기 vs 비동기

### 동기 프로그래밍
- 작업이 완료될 때까지 기다림
- 코드가 순차적으로 실행
- 블로킹(blocking) 방식

### 비동기 프로그래밍
- 작업 완료를 기다리지 않고 다음 코드 실행
- 논블로킹(non-blocking) 방식
- 성능과 응답성 향상

```javascript
// 동기 방식
console.log('1');
console.log('2'); 
console.log('3');
// 출력: 1, 2, 3

// 비동기 방식
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// 출력: 1, 3, 2
```

## 2. 타이머 API

### setTimeout
```javascript
// 일정 시간 후 한 번 실행
const timeoutId = setTimeout(() => {
  console.log('2초 후 실행');
}, 2000);

// 타이머 취소
clearTimeout(timeoutId);
```

### setInterval
```javascript
// 일정 간격으로 반복 실행
const intervalId = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

// 타이머 취소
clearInterval(intervalId);
```

### 타이머 주의사항
- 정확한 지연시간 보장 안함
- 지연시간 0도 즉시 실행되지 않음

## 3. 브라우저의 JavaScript 실행 과정

### 호출 스택 (Call Stack)
```javascript
function add(x, y) {
  return x + y;
}

function calculate() {
  const result = add(3, 4);
  console.log(result);
}

calculate();
// 호출 스택: calculate() -> add() -> console.log()
```

### 실행 맥락 (Execution Context)
호출 스택의 각 항목에 저장되는 정보:
- 함수 내부 변수
- 스코프 체인
- this 바인딩

### 작업 큐 (Task Queue)와 이벤트 루프
```javascript
setTimeout(() => {
  console.log('타이머');
}, 0);

console.log('동기');

// 실행 순서:
// 1. console.log('동기') - 즉시 실행
// 2. setTimeout 콜백 - 작업 큐에 등록 후 실행
```

## 4. 콜백 (Callback)

### 기본 콜백
```javascript
function greet(name, callback) {
  console.log(`안녕하세요, ${name}님!`);
  callback();
}

greet('홍길동', function() {
  console.log('콜백 함수 실행');
});
```

### 비동기 콜백
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: '사용자' };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log('데이터 받음:', data);
});
```

### 콜백 지옥 (Callback Hell)
```javascript
// 콜백 지옥 예시
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        // 계속 중첩...
      });
    });
  });
});
```

## 5. Promise

### Promise 기본 개념
```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  
  if (success) {
    resolve('성공!');
  } else {
    reject('실패!');
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

### Promise 상태
- **pending**: 결과를 기다리는 중
- **fulfilled**: 성공적으로 완료
- **rejected**: 에러 발생

### Promise 체이닝
```javascript
fetch('/api/user')
  .then(response => response.json())
  .then(user => {
    console.log('사용자:', user);
    return fetch(`/api/user/${user.id}/posts`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log('게시글:', posts);
  })
  .catch(error => {
    console.error('에러:', error);
  });
```

### Promise 정적 메서드
```javascript
// Promise.resolve - 즉시 해결되는 Promise
Promise.resolve('성공').then(console.log);

// Promise.reject - 즉시 거부되는 Promise
Promise.reject('실패').catch(console.log);

// Promise.all - 모든 Promise 완료 대기
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]).then(responses => {
  console.log('모든 요청 완료');
});

// Promise.race - 가장 빠른 Promise 결과 반환
Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow')
]).then(response => {
  console.log('가장 빠른 응답');
});
```

## 6. async/await

### 기본 사용법
```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/user/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('에러:', error);
    throw error;
  }
}

// 사용
fetchUser(1).then(user => console.log(user));
```

### async/await vs Promise
```javascript
// Promise 방식
function getUser() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(user => {
      return fetch(`/api/user/${user.id}/profile`);
    })
    .then(response => response.json());
}

// async/await 방식
async function getUser() {
  const response = await fetch('/api/user');
  const user = await response.json();
  
  const profileResponse = await fetch(`/api/user/${user.id}/profile`);
  const profile = await profileResponse.json();
  
  return profile;
}
```

### 병렬 처리
```javascript
// 순차 처리 (느림)
async function sequential() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  return { user, posts };
}

// 병렬 처리 (빠름)
async function parallel() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  return { user, posts };
}
```

## 7. 에러 처리

### Promise 에러 처리
```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 에러');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('에러:', error))
  .finally(() => console.log('완료'));
```

### async/await 에러 처리
```javascript
async function handleData() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error('네트워크 에러');
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('에러:', error);
  } finally {
    console.log('완료');
  }
}
```

## 8. 실습 예제

### 예제 1: 순차적 데이터 로딩
```javascript
async function loadUserData(userId) {
  try {
    // 1. 사용자 정보 가져오기
    const userResponse = await fetch(`/api/users/${userId}`);
    const user = await userResponse.json();
    
    // 2. 사용자의 게시글 가져오기
    const postsResponse = await fetch(`/api/users/${userId}/posts`);
    const posts = await postsResponse.json();
    
    // 3. 사용자의 친구 목록 가져오기
    const friendsResponse = await fetch(`/api/users/${userId}/friends`);
    const friends = await friendsResponse.json();
    
    return { user, posts, friends };
  } catch (error) {
    console.error('데이터 로딩 실패:', error);
    throw error;
  }
}
```

### 예제 2: 타임아웃이 있는 fetch
```javascript
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('타임아웃')), timeout)
    )
  ]);
}

// 사용
async function getData() {
  try {
    const response = await fetchWithTimeout('/api/data', 3000);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === '타임아웃') {
      console.log('요청 시간 초과');
    } else {
      console.log('기타 에러:', error);
    }
  }
}
```

### 예제 3: 재시도 로직
```javascript
async function retryFetch(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response;
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      console.log(`시도 ${i + 1} 실패:`, error.message);
      
      if (i === maxRetries - 1) {
        throw error; // 마지막 시도도 실패하면 에러 던지기
      }
      
      // 1초 대기 후 재시도
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
```

## 정리

1. **비동기 프로그래밍**: 성능과 사용자 경험 향상
2. **콜백**: 기본적인 비동기 처리 방법 (콜백 지옥 주의)
3. **Promise**: 콜백 지옥 해결, 체이닝 가능
4. **async/await**: Promise를 더 읽기 쉽게 작성
5. **에러 처리**: try/catch, .catch() 적절히 활용
6. **병렬 처리**: Promise.all()로 성능 향상

비동기 프로그래밍은 현대 웹 개발의 핵심이므로, 각 방법의 특징과 적절한 사용 시점을 이해하는 것이 중요합니다. 