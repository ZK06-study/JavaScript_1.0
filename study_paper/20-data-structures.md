# 자료구조 개념정리

## 1. 추상 자료형 (ADT)
**ADT(Abstract Data Type)**는 데이터의 구체적인 구현 방식은 생략한 채, 데이터의 추상적 형태와 그 데이터를 다루는 방법만을 정해놓은 것입니다.

### 핵심 개념
- 데이터의 구조와 연산의 명세만 정의
- 구현 세부사항은 숨김
- 재사용성과 유지보수성 향상

## 2. 큐 (Queue)

### 특징
- **FIFO (First In First Out)**: 먼저 들어간 데이터가 먼저 나옴
- 선형 자료구조
- 한쪽 끝에서는 삽입, 다른 한쪽 끝에서는 삭제

### 주요 연산
```javascript
class Queue {
  constructor() {
    this._arr = [];
  }
  
  // 큐의 뒤쪽에 데이터 추가
  enqueue(item) {
    this._arr.push(item);
  }
  
  // 큐의 앞쪽에서 데이터 제거 및 반환
  dequeue() {
    return this._arr.shift();
  }
  
  // 큐가 비어있는지 확인
  isEmpty() {
    return this._arr.length === 0;
  }
}
```

### 사용 예시
```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
```

### 활용 분야
- 작업 스케줄링
- 프린터 대기열
- BFS(너비 우선 탐색)
- 버퍼 역할

## 3. 스택 (Stack)

### 특징
- **LIFO (Last In First Out)**: 나중에 들어간 데이터가 먼저 나옴
- 선형 자료구조
- 한쪽 끝에서만 삽입과 삭제가 일어남

### 주요 연산
```javascript
class Stack {
  constructor() {
    this._arr = [];
  }
  
  // 스택 맨 위에 데이터 추가
  push(item) {
    this._arr.push(item);
  }
  
  // 스택 맨 위의 데이터 제거 및 반환
  pop() {
    return this._arr.pop();
  }
  
  // 스택 맨 위의 데이터 확인 (제거하지 않음)
  peek() {
    return this._arr[this._arr.length - 1];
  }
  
  isEmpty() {
    return this._arr.length === 0;
  }
}
```

### 사용 예시
```javascript
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.pop());  // 2
```

### 활용 분야
- 함수 호출 관리 (Call Stack)
- 실행 취소 기능
- 괄호 매칭 검사
- DFS(깊이 우선 탐색)

## 4. 트리 (Tree)

### 특징
- 계층적 구조를 나타내는 비선형 자료구조
- 노드들이 부모-자식 관계로 연결
- 사이클이 없는 연결 그래프

### 트리 용어
```javascript
// 트리 노드 예시
class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}
```

- **노드(Node)**: 트리의 각 항목
- **루트 노드(Root)**: 최상위 노드
- **부모 노드(Parent)**: 특정 노드의 상위 노드
- **자식 노드(Child)**: 특정 노드의 하위 노드
- **리프 노드(Leaf)**: 자식이 없는 노드
- **조상 노드(Ancestor)**: 특정 노드에서 루트까지의 경로상 노드들
- **자손 노드(Descendant)**: 특정 노드의 하위 트리에 있는 모든 노드들
- **형제 노드(Sibling)**: 같은 부모를 가진 노드들

### 트리 순회
```javascript
function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

// 사용 예시
const tree = new Node('루트', [
  new Node('자식1'),
  new Node('자식2', [
    new Node('손자1'),
    new Node('손자2')
  ])
]);

traverse(tree);
// 루트 -> 자식1 -> 자식2 -> 손자1 -> 손자2
```

### 활용 분야
- 파일 시스템
- 조직도
- HTML DOM 구조
- 결정 트리
- 이진 탐색 트리

## 5. 실습 문제

### 문제 1: 큐를 이용한 회전 배열
```javascript
function rotateArray(arr, k) {
  const queue = new Queue();
  
  // 배열 요소를 큐에 추가
  for (let item of arr) {
    queue.enqueue(item);
  }
  
  // k번 회전
  for (let i = 0; i < k; i++) {
    const item = queue.dequeue();
    queue.enqueue(item);
  }
  
  // 결과 배열 생성
  const result = [];
  while (!queue.isEmpty()) {
    result.push(queue.dequeue());
  }
  
  return result;
}
```

### 문제 2: 스택을 이용한 괄호 검사
```javascript
function isValidParentheses(str) {
  const stack = new Stack();
  const pairs = { '(': ')', '[': ']', '{': '}' };
  
  for (let char of str) {
    if (char in pairs) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.isEmpty() || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  
  return stack.isEmpty();
}

console.log(isValidParentheses("()[]{}"));   // true
console.log(isValidParentheses("([)]"));     // false
```

### 문제 3: 트리 깊이 계산
```javascript
function getTreeDepth(node) {
  if (!node || node.children.length === 0) {
    return 1;
  }
  
  let maxDepth = 0;
  for (let child of node.children) {
    maxDepth = Math.max(maxDepth, getTreeDepth(child));
  }
  
  return maxDepth + 1;
}
```

## 정리

1. **큐**: FIFO 구조로 순서대로 처리할 작업 관리
2. **스택**: LIFO 구조로 임시 저장과 되돌리기 작업
3. **트리**: 계층적 데이터 표현과 효율적인 탐색

각 자료구조는 특정 상황에서 최적의 성능을 제공하므로, 문제의 특성에 맞는 적절한 자료구조를 선택하는 것이 중요합니다. 