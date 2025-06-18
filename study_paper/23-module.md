# 모듈 시스템 개념정리

## 1. 모듈이란?

**모듈(Module)**은 JavaScript 코드를 여러 파일로 나누어 작성하고, 서로 효율적으로 불러올 수 있게 해주는 시스템입니다.

### 모듈의 필요성
- 코드의 재사용성 향상
- 네임스페이스 분리
- 의존성 관리
- 유지보수성 향상

## 2. ES2015 모듈 특징

### 일반 JavaScript 파일과의 차이점
```javascript
// 일반 JavaScript 파일
var globalVar = '전역 변수'; // window.globalVar로 접근 가능

// 모듈 파일 (module.mjs)
const moduleVar = '모듈 변수'; // 모듈 스코프에서만 접근 가능
console.log(window.moduleVar); // undefined
```

### 모듈 특징
- `import`/`export` 구문 사용 가능
- 자동으로 엄격 모드(strict mode)로 동작
- 모듈 스코프 (전역 스코프가 아님)
- 지연 실행 (defer와 같은 동작)

## 3. Export (내보내기)

### Named Export (이름 지정 내보내기)
```javascript
// math.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// 또는 한 번에 내보내기
const PI = 3.14159;
const E = 2.71828;
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

export { PI, E, add, multiply };
```

### Default Export (기본 내보내기)
```javascript
// calculator.js - 기본 내보내기
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}

// 또는 함수를 기본 내보내기
export default function calculate(operation, a, b) {
  switch(operation) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    default: throw new Error('지원하지 않는 연산');
  }
}
```

### 다른 이름으로 Export
```javascript
// utils.js
const internalFunction = () => '내부 함수';
const utilityFunction = () => '유틸리티 함수';

export { 
  internalFunction as publicFunction,
  utilityFunction as utils
};
```

## 4. Import (가져오기)

### Named Import
```javascript
// main.js
import { PI, add, multiply } from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20

// 특정 이름들만 가져오기
import { add } from './math.js';
```

### Default Import
```javascript
// main.js
import Calculator from './calculator.js';

const calc = new Calculator();
console.log(calc.add(10, 5)); // 15

// 기본 내보내기는 원하는 이름으로 가져올 수 있음
import MyCalculator from './calculator.js';
import calc from './calculator.js';
```

### 혼합 Import
```javascript
// React 라이브러리 예시
import React, { Component, useState, useEffect } from 'react';
// React는 default export, 나머지는 named export
```

### 다른 이름으로 Import
```javascript
import { add as sum, multiply as product } from './math.js';

console.log(sum(2, 3)); // 5
console.log(product(4, 5)); // 20
```

### 전체 Import
```javascript
// 모든 내보내기를 하나의 객체로 가져오기
import * as MathUtils from './math.js';

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(2, 3)); // 5
```

## 5. 동적 Import

### import() 함수
```javascript
// 조건부 모듈 로딩
async function loadMath() {
  if (needMathUtils) {
    const mathModule = await import('./math.js');
    return mathModule;
  }
}

// 사용 예시
document.querySelector('#load-math').addEventListener('click', async () => {
  const { add, multiply } = await import('./math.js');
  console.log(add(1, 2));
});
```

### 조건부 모듈 로딩
```javascript
// 브라우저 환경에 따른 다른 모듈 로딩
async function loadPolyfill() {
  if (!window.fetch) {
    await import('./fetch-polyfill.js');
  }
}

// 코드 분할 (Code Splitting)
async function loadComponent() {
  const { default: LargeComponent } = await import('./LargeComponent.js');
  return LargeComponent;
}
```

## 6. 실제 사용 예제

### 유틸리티 모듈
```javascript
// utils/string.js
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function truncate(str, length = 50) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}
```

```javascript
// utils/date.js
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
}

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
```

### API 모듈
```javascript
// api/user.js
const BASE_URL = 'https://api.example.com';

export async function fetchUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error('사용자 정보를 가져올 수 없습니다.');
  }
  return response.json();
}

export async function updateUser(id, userData) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
}

export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE'
  });
  return response.ok;
}
```

### 설정 모듈
```javascript
// config/app.js
export const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://api.myapp.com' 
    : 'http://localhost:3000',
  
  features: {
    darkMode: true,
    notifications: true,
    analytics: process.env.NODE_ENV === 'production'
  },
  
  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100
  }
};

export default config;
```

## 7. 모듈 사용 시 주의사항

### 1. 순환 의존성 피하기
```javascript
// 문제가 될 수 있는 코드
// file1.js
import { func2 } from './file2.js';
export function func1() { return func2(); }

// file2.js  
import { func1 } from './file1.js';
export function func2() { return func1(); }
```

### 2. 모듈은 한 번만 실행됨
```javascript
// counter.js
let count = 0;
export function increment() { count++; }
export function getCount() { return count; }

// main.js
import { increment, getCount } from './counter.js';
import { increment as inc2 } from './counter.js';

increment(); // count = 1
inc2();      // count = 2 (같은 모듈 인스턴스)
console.log(getCount()); // 2
```

### 3. 최상위 스코프에서만 사용
```javascript
// 잘못된 사용
function loadModule() {
  import { add } from './math.js'; // 에러!
}

if (condition) {
  import { add } from './math.js'; // 에러!
}

// 올바른 사용 (동적 import)
async function loadModule() {
  const { add } = await import('./math.js');
  return add;
}
```

## 8. 브라우저에서 모듈 사용

### HTML에서 모듈 로드
```html
<!DOCTYPE html>
<html>
<head>
  <title>ES2015 모듈 예제</title>
</head>
<body>
  <!-- type="module" 지정 -->
  <script type="module" src="main.js"></script>
  
  <!-- 인라인 모듈 -->
  <script type="module">
    import { add } from './math.js';
    console.log(add(2, 3));
  </script>
</body>
</html>
```

### 모듈 번들러 사용
```javascript
// webpack.config.js (Webpack 설정 예시)
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
```

## 9. 실습 예제

### 할 일 관리 앱 모듈 구조
```javascript
// models/todo.js
export class Todo {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.completed = false;
    this.createdAt = new Date();
  }
  
  toggle() {
    this.completed = !this.completed;
  }
}

// services/todoService.js
import { Todo } from '../models/todo.js';

class TodoService {
  constructor() {
    this.todos = [];
  }
  
  add(text) {
    const todo = new Todo(text);
    this.todos.push(todo);
    return todo;
  }
  
  remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  toggle(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) todo.toggle();
  }
  
  getAll() {
    return this.todos;
  }
}

export default new TodoService();

// components/todoList.js
import todoService from '../services/todoService.js';

export function renderTodoList(container) {
  const todos = todoService.getAll();
  
  container.innerHTML = todos.map(todo => `
    <div class="todo-item ${todo.completed ? 'completed' : ''}">
      <input type="checkbox" ${todo.completed ? 'checked' : ''} 
             onchange="toggleTodo(${todo.id})">
      <span>${todo.text}</span>
      <button onclick="deleteTodo(${todo.id})">삭제</button>
    </div>
  `).join('');
}

// main.js
import todoService from './services/todoService.js';
import { renderTodoList } from './components/todoList.js';

const container = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

window.toggleTodo = (id) => {
  todoService.toggle(id);
  renderTodoList(container);
};

window.deleteTodo = (id) => {
  todoService.remove(id);
  renderTodoList(container);
};

addButton.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    todoService.add(text);
    input.value = '';
    renderTodoList(container);
  }
});

// 초기 렌더링
renderTodoList(container);
```

## 정리

1. **모듈 시스템**: 코드를 파일별로 분리하여 관리
2. **Export/Import**: named export와 default export 활용
3. **모듈 스코프**: 전역 오염 방지
4. **동적 Import**: 필요할 때만 모듈 로드
5. **모듈 번들러**: 브라우저 호환성과 성능 최적화

모듈 시스템을 잘 활용하면 유지보수가 쉽고 재사용 가능한 코드를 작성할 수 있습니다. 