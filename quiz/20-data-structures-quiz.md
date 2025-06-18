# 20. 자료구조 - 퀴즈

## 객관식 문제

### 1. 🟢 `Map`과 일반 객체의 차이점으로 올바른 것은?
a) Map은 키로 문자열만 사용할 수 있다
b) Map은 키로 모든 타입의 값을 사용할 수 있다
c) Map은 프로토타입을 가진다
d) Map은 이터러블이 아니다

### 2. 🟡 `Set`의 특징으로 틀린 것은?
a) 중복된 값을 허용하지 않는다
b) 순서를 유지한다
c) 인덱스로 접근할 수 있다
d) 이터러블이다

### 3. 🟠 `WeakMap`의 특징으로 올바른 것은?
a) 키로 원시 타입만 사용할 수 있다
b) 키로 객체만 사용할 수 있다
c) 이터러블이다
d) `size` 속성을 가진다

### 4. 🟡 다음 중 `Map`에서 사용할 수 있는 메서드가 아닌 것은?
a) `set()`
b) `get()`
c) `push()`
d) `has()`

### 5. 🟠 `WeakSet`과 `Set`의 차이점으로 올바른 것은?
a) WeakSet은 원시 타입만 저장할 수 있다
b) WeakSet은 이터러블하다
c) WeakSet은 가비지 컬렉션의 대상이 될 수 있다
d) WeakSet은 크기를 확인할 수 있다

### 6. 🟡 `new Map([['a', 1], ['b', 2]])`의 크기는?
a) 1
b) 2
c) 3
d) 4

## 단답형 문제

### 7. 🟢 `Set`에서 중복을 제거하려는 값을 추가할 때 사용하는 메서드는?

### 8. 🟡 `Map`에서 특정 키가 존재하는지 확인하는 메서드는?

### 9. 🟠 `WeakMap`과 `WeakSet`에서 사용할 수 없는 공통 속성은?

### 10. 🟢 배열에서 중복을 제거하는 가장 간단한 방법은?

## 서술형 문제

### 11. 🟡 `Map`을 사용해야 하는 상황과 일반 객체를 사용해야 하는 상황을 비교하여 설명하시오.

### 12. 🟠 `WeakMap`과 `WeakSet`의 사용 목적과 가비지 컬렉션과의 관계를 설명하시오.

### 13. 🟡 `Set`의 다양한 활용 방법과 실제 사용 사례를 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 함수를 작성하시오.
```javascript
// 1. 배열에서 중복 제거
// 2. 두 배열의 합집합, 교집합, 차집합 계산
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
```

### 15. 🟡 `Map`을 활용한 캐시 시스템을 구현하시오.
```javascript
// LRU (Least Recently Used) 캐시
// 최대 크기 제한
// 가장 오래된 항목 자동 삭제
```

### 16. 🟠 `WeakMap`을 이용한 private 데이터 저장소를 구현하시오.
```javascript
// 클래스의 private 데이터를 WeakMap으로 관리
// 인스턴스가 삭제되면 private 데이터도 자동으로 정리
```

### 17. 🟡 다양한 자료구조를 활용한 유틸리티 함수들을 작성하시오.
```javascript
// 1. 문자열에서 문자 빈도수 계산 (Map 사용)
// 2. 배열에서 유니크한 요소들의 개수 (Set 사용)
// 3. 객체 깊은 비교 (Set으로 순환 참조 방지)
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
const map = new Map();
const obj = {};
const arr = [];

map.set(obj, 'object');
map.set(arr, 'array');
map.set('key', 'string');

console.log(map.get({}));
console.log(map.get(obj));
console.log(map.get('key'));
console.log(map.size);
```

### 19. 🟠 그래프 자료구조를 `Map`과 `Set`으로 구현하시오.
```javascript
// 방향 그래프 (Directed Graph)
// 노드 추가/제거, 엣지 추가/제거
// DFS, BFS 순회 구현
// 사이클 검출
```

### 20. 🟠 `Set`과 `Map`을 활용한 관계형 데이터 관리자를 구현하시오.
```javascript
// 다대다 관계 관리
// 사용자와 그룹 간의 관계
// 효율적인 검색과 업데이트
```

---

## 정답

### 객관식 정답
1. b) Map은 키로 모든 타입의 값을 사용할 수 있다
2. c) 인덱스로 접근할 수 있다 (Set은 인덱스 접근 불가)
3. b) 키로 객체만 사용할 수 있다
4. c) `push()` (배열 메서드, Map에는 없음)
5. c) WeakSet은 가비지 컬렉션의 대상이 될 수 있다
6. b) 2

### 단답형 정답
7. `add()`
8. `has()`
9. `size` (WeakMap과 WeakSet은 size 속성이 없음)
10. `[...new Set(array)]`

### 서술형 정답
11. **Map vs 객체 사용 기준:**
**Map 사용 시:**
- 키가 문자열이 아닌 경우
- 키-값 쌍의 빈번한 추가/삭제
- 크기를 자주 확인해야 하는 경우
- 순회 순서가 중요한 경우

**객체 사용 시:**
- 레코드나 딕셔너리 역할
- JSON과의 호환성이 필요한 경우
- 메서드나 속성이 포함된 경우

12. **WeakMap/WeakSet과 가비지 컬렉션:**
- 키/값이 다른 곳에서 참조되지 않으면 자동으로 제거
- 메모리 누수 방지
- private 데이터 저장, 메타데이터 관리에 활용
- DOM 노드와 연관 데이터 관리에 유용

13. **Set 활용 방법:**
- 배열 중복 제거
- 집합 연산 (합집합, 교집합, 차집합)
- 유니크한 값들의 추적
- 순환 참조 감지
- 태그 시스템, 권한 관리

### 코딩 정답
14.
```javascript
// 1. 배열에서 중복 제거
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 2. 집합 연산들
function setOperations(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  
  // 합집합
  const union = new Set([...set1, ...set2]);
  
  // 교집합
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  
  // 차집합 (set1 - set2)
  const difference = new Set([...set1].filter(x => !set2.has(x)));
  
  return {
    union: [...union],
    intersection: [...intersection],
    difference: [...difference]
  };
}

// 사용 예시
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

const result = setOperations(arr1, arr2);
console.log(result.union);        // [1, 2, 3, 4, 5, 6]
console.log(result.intersection); // [3, 4]
console.log(result.difference);   // [1, 2]
```

15.
```javascript
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }
  
  get(key) {
    if (this.cache.has(key)) {
      // 키를 가장 최근 사용으로 이동
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return undefined;
  }
  
  set(key, value) {
    if (this.cache.has(key)) {
      // 기존 키 업데이트
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // 가장 오래된 항목 제거
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, value);
  }
  
  has(key) {
    return this.cache.has(key);
  }
  
  delete(key) {
    return this.cache.delete(key);
  }
  
  clear() {
    this.cache.clear();
  }
  
  get size() {
    return this.cache.size;
  }
  
  keys() {
    return [...this.cache.keys()];
  }
  
  values() {
    return [...this.cache.values()];
  }
  
  entries() {
    return [...this.cache.entries()];
  }
}

// 사용 예시
const cache = new LRUCache(3);

cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
console.log(cache.keys()); // ['a', 'b', 'c']

cache.get('a'); // 'a'를 최근 사용으로 이동
console.log(cache.keys()); // ['b', 'c', 'a']

cache.set('d', 4); // 'b'가 제거됨
console.log(cache.keys()); // ['c', 'a', 'd']
```

16.
```javascript
// WeakMap을 이용한 private 데이터 저장소
const privateData = new WeakMap();

class BankAccount {
  constructor(accountNumber, initialBalance = 0) {
    // private 데이터를 WeakMap에 저장
    privateData.set(this, {
      accountNumber,
      balance: initialBalance,
      transactions: []
    });
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error('입금액은 0보다 커야 합니다.');
    }
    
    const data = privateData.get(this);
    data.balance += amount;
    data.transactions.push({
      type: 'deposit',
      amount,
      timestamp: new Date(),
      balance: data.balance
    });
    
    return data.balance;
  }
  
  withdraw(amount) {
    const data = privateData.get(this);
    
    if (amount <= 0) {
      throw new Error('출금액은 0보다 커야 합니다.');
    }
    if (amount > data.balance) {
      throw new Error('잔액이 부족합니다.');
    }
    
    data.balance -= amount;
    data.transactions.push({
      type: 'withdraw',
      amount,
      timestamp: new Date(),
      balance: data.balance
    });
    
    return data.balance;
  }
  
  getBalance() {
    return privateData.get(this).balance;
  }
  
  getAccountNumber() {
    return privateData.get(this).accountNumber;
  }
  
  getTransactionHistory() {
    return [...privateData.get(this).transactions];
  }
}

// 사용 예시
const account = new BankAccount('123-456-789', 1000);
console.log(account.getBalance()); // 1000

account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300

// private 데이터에 직접 접근 불가
// console.log(account.accountNumber); // undefined
// console.log(account.balance); // undefined

// 계좌 객체가 제거되면 WeakMap의 데이터도 자동으로 제거됨
```

17.
```javascript
// 1. 문자열에서 문자 빈도수 계산
function characterFrequency(str) {
  const frequency = new Map();
  
  for (const char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }
  
  return frequency;
}

// 2. 배열에서 유니크한 요소들의 개수
function countUniqueElements(arr) {
  return new Set(arr).size;
}

// 3. 객체 깊은 비교 (순환 참조 방지)
function deepEqual(obj1, obj2, visited = new Set()) {
  // 같은 참조면 true
  if (obj1 === obj2) return true;
  
  // 타입이 다르면 false
  if (typeof obj1 !== typeof obj2) return false;
  
  // null 체크
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  
  // 원시 타입이면 직접 비교
  if (typeof obj1 !== 'object') return obj1 === obj2;
  
  // 순환 참조 체크
  if (visited.has(obj1) || visited.has(obj2)) {
    return obj1 === obj2;
  }
  
  visited.add(obj1);
  visited.add(obj2);
  
  try {
    // 배열 체크
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
    
    // 키 개수 비교
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    // 각 키에 대해 재귀적으로 비교
    for (const key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!deepEqual(obj1[key], obj2[key], visited)) return false;
    }
    
    return true;
  } finally {
    visited.delete(obj1);
    visited.delete(obj2);
  }
}

// 사용 예시
console.log(characterFrequency('hello')); // Map {'h'=>1, 'e'=>1, 'l'=>2, 'o'=>1}
console.log(countUniqueElements([1, 2, 2, 3, 3, 4])); // 4

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true
```

### 응용 정답
18.
```javascript
// 실행 결과:
console.log(map.get({}));    // undefined (다른 객체 참조)
console.log(map.get(obj));   // 'object' (같은 객체 참조)
console.log(map.get('key')); // 'string'
console.log(map.size);       // 3

// 설명: Map에서 키 비교는 === 연산자를 사용하므로
// 새로운 빈 객체 {}는 기존에 저장된 obj와 다른 참조입니다.
```

19.
```javascript
class DirectedGraph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map(); // node -> Set of connected nodes
  }
  
  addNode(node) {
    this.nodes.add(node);
    if (!this.edges.has(node)) {
      this.edges.set(node, new Set());
    }
  }
  
  removeNode(node) {
    if (!this.nodes.has(node)) return false;
    
    this.nodes.delete(node);
    this.edges.delete(node);
    
    // 다른 노드들에서 이 노드로의 엣지 제거
    for (const [_, connections] of this.edges) {
      connections.delete(node);
    }
    
    return true;
  }
  
  addEdge(from, to) {
    this.addNode(from);
    this.addNode(to);
    this.edges.get(from).add(to);
  }
  
  removeEdge(from, to) {
    if (!this.edges.has(from)) return false;
    return this.edges.get(from).delete(to);
  }
  
  hasEdge(from, to) {
    return this.edges.has(from) && this.edges.get(from).has(to);
  }
  
  getNeighbors(node) {
    return this.edges.has(node) ? [...this.edges.get(node)] : [];
  }
  
  // DFS 순회
  *dfs(startNode, visited = new Set()) {
    if (!this.nodes.has(startNode) || visited.has(startNode)) return;
    
    visited.add(startNode);
    yield startNode;
    
    for (const neighbor of this.edges.get(startNode)) {
      yield* this.dfs(neighbor, visited);
    }
  }
  
  // BFS 순회
  *bfs(startNode) {
    if (!this.nodes.has(startNode)) return;
    
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);
    
    while (queue.length > 0) {
      const node = queue.shift();
      yield node;
      
      for (const neighbor of this.edges.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  
  // 사이클 검출 (DFS 기반)
  hasCycle() {
    const visited = new Set();
    const recursionStack = new Set();
    
    const dfsHasCycle = (node) => {
      visited.add(node);
      recursionStack.add(node);
      
      for (const neighbor of this.edges.get(node)) {
        if (!visited.has(neighbor)) {
          if (dfsHasCycle(neighbor)) return true;
        } else if (recursionStack.has(neighbor)) {
          return true; // 사이클 발견
        }
      }
      
      recursionStack.delete(node);
      return false;
    };
    
    for (const node of this.nodes) {
      if (!visited.has(node)) {
        if (dfsHasCycle(node)) return true;
      }
    }
    
    return false;
  }
  
  // 그래프 정보 출력
  toString() {
    const result = [];
    for (const [node, connections] of this.edges) {
      result.push(`${node} -> [${[...connections].join(', ')}]`);
    }
    return result.join('\n');
  }
}

// 사용 예시
const graph = new DirectedGraph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log('DFS from A:', [...graph.dfs('A')]); // ['A', 'B', 'D', 'E', 'C']
console.log('BFS from A:', [...graph.bfs('A')]); // ['A', 'B', 'C', 'D', 'E']
console.log('Has cycle:', graph.hasCycle()); // false

// 사이클 추가
graph.addEdge('E', 'A');
console.log('Has cycle after adding E->A:', graph.hasCycle()); // true
```

20.
```javascript
class RelationshipManager {
  constructor() {
    this.users = new Set();
    this.groups = new Set();
    this.userToGroups = new Map(); // user -> Set of groups
    this.groupToUsers = new Map(); // group -> Set of users
  }
  
  addUser(user) {
    this.users.add(user);
    if (!this.userToGroups.has(user)) {
      this.userToGroups.set(user, new Set());
    }
  }
  
  addGroup(group) {
    this.groups.add(group);
    if (!this.groupToUsers.has(group)) {
      this.groupToUsers.set(group, new Set());
    }
  }
  
  removeUser(user) {
    if (!this.users.has(user)) return false;
    
    // 사용자가 속한 모든 그룹에서 제거
    const userGroups = this.userToGroups.get(user);
    for (const group of userGroups) {
      this.groupToUsers.get(group).delete(user);
    }
    
    this.users.delete(user);
    this.userToGroups.delete(user);
    return true;
  }
  
  removeGroup(group) {
    if (!this.groups.has(group)) return false;
    
    // 그룹에 속한 모든 사용자에서 이 그룹 제거
    const groupUsers = this.groupToUsers.get(group);
    for (const user of groupUsers) {
      this.userToGroups.get(user).delete(group);
    }
    
    this.groups.delete(group);
    this.groupToUsers.delete(group);
    return true;
  }
  
  addUserToGroup(user, group) {
    this.addUser(user);
    this.addGroup(group);
    
    this.userToGroups.get(user).add(group);
    this.groupToUsers.get(group).add(user);
  }
  
  removeUserFromGroup(user, group) {
    if (!this.userToGroups.has(user) || !this.groupToUsers.has(group)) {
      return false;
    }
    
    this.userToGroups.get(user).delete(group);
    this.groupToUsers.get(group).delete(user);
    return true;
  }
  
  getUserGroups(user) {
    return this.userToGroups.has(user) ? [...this.userToGroups.get(user)] : [];
  }
  
  getGroupUsers(group) {
    return this.groupToUsers.has(group) ? [...this.groupToUsers.get(group)] : [];
  }
  
  isUserInGroup(user, group) {
    return this.userToGroups.has(user) && this.userToGroups.get(user).has(group);
  }
  
  // 공통 그룹에 속한 사용자들 찾기
  findUsersInSameGroups(user) {
    if (!this.userToGroups.has(user)) return [];
    
    const userGroups = this.userToGroups.get(user);
    const relatedUsers = new Set();
    
    for (const group of userGroups) {
      const groupUsers = this.groupToUsers.get(group);
      for (const otherUser of groupUsers) {
        if (otherUser !== user) {
          relatedUsers.add(otherUser);
        }
      }
    }
    
    return [...relatedUsers];
  }
  
  // 특정 권한을 가진 사용자들 찾기 (교집합)
  findUsersWithAllGroups(groups) {
    if (groups.length === 0) return [];
    
    let result = new Set(this.getGroupUsers(groups[0]));
    
    for (let i = 1; i < groups.length; i++) {
      const groupUsers = new Set(this.getGroupUsers(groups[i]));
      result = new Set([...result].filter(user => groupUsers.has(user)));
    }
    
    return [...result];
  }
  
  // 통계 정보
  getStats() {
    return {
      totalUsers: this.users.size,
      totalGroups: this.groups.size,
      avgGroupsPerUser: this.users.size > 0 ? 
        [...this.userToGroups.values()].reduce((sum, groups) => sum + groups.size, 0) / this.users.size : 0,
      avgUsersPerGroup: this.groups.size > 0 ?
        [...this.groupToUsers.values()].reduce((sum, users) => sum + users.size, 0) / this.groups.size : 0
    };
  }
  
  // 관계 출력
  toString() {
    const result = [];
    result.push('=== Users and their Groups ===');
    for (const [user, groups] of this.userToGroups) {
      result.push(`${user}: [${[...groups].join(', ')}]`);
    }
    result.push('\n=== Groups and their Users ===');
    for (const [group, users] of this.groupToUsers) {
      result.push(`${group}: [${[...users].join(', ')}]`);
    }
    return result.join('\n');
  }
}

// 사용 예시
const rm = new RelationshipManager();

// 사용자와 그룹 관계 설정
rm.addUserToGroup('Alice', 'Developers');
rm.addUserToGroup('Alice', 'Managers');
rm.addUserToGroup('Bob', 'Developers');
rm.addUserToGroup('Charlie', 'Designers');
rm.addUserToGroup('Charlie', 'Managers');

console.log('Alice의 그룹:', rm.getUserGroups('Alice')); // ['Developers', 'Managers']
console.log('Developers 그룹 멤버:', rm.getGroupUsers('Developers')); // ['Alice', 'Bob']
console.log('Alice와 같은 그룹의 사용자들:', rm.findUsersInSameGroups('Alice')); // ['Bob', 'Charlie']

// 복수 그룹에 모두 속한 사용자 찾기
console.log('Developers와 Managers 모두에 속한 사용자:', rm.findUsersWithAllGroups(['Developers', 'Managers'])); // ['Alice']

console.log('통계:', rm.getStats());
console.log(rm.toString());
```