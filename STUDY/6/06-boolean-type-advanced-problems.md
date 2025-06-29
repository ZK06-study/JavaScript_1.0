# 불린 타입 심화 문제 (Advanced Boolean Type Problems)

이전 학습 내용: 불린 값과 논리 연산자, 연산자 우선순위, 논리 법칙, truthy/falsy 값, 타입 변환

## 문제 1: 고급 조건 검증기 (Advanced Condition Validator)

### 문제 설명
복합적인 조건들을 조합하여 사용자 권한을 검증하는 시스템을 구현하세요.

### 요구 사항
```javascript
function validateUserAccess(user, resource, action) {
  // user: { role: string, isActive: boolean, permissions: string[], 
  //         subscription: string, loginTime: Date }
  // resource: { type: string, isPublic: boolean, requiredLevel: number }
  // action: string ('read', 'write', 'delete', 'admin')
  
  // 복합 조건:
  // 1. 활성 사용자이고 로그인한지 24시간 이내
  // 2. 구독 상태와 리소스 레벨 매칭
  // 3. 특정 권한을 가지고 있거나 관리자
  // 4. 공개 리소스는 읽기만 허용
}
```

### 예시
```javascript
const user1 = {
  role: 'premium',
  isActive: true,
  permissions: ['read', 'write'],
  subscription: 'pro',
  loginTime: new Date(Date.now() - 1000 * 60 * 60 * 10) // 10시간 전
};

const resource1 = {
  type: 'document',
  isPublic: false,
  requiredLevel: 2
};

validateUserAccess(user1, resource1, 'write');
// { allowed: true, reason: "Valid subscription and permissions" }

validateUserAccess(user1, resource1, 'delete');
// { allowed: false, reason: "Insufficient permissions for delete action" }
```

### 채점 기준
- 복합 불린 로직 정확성 (30점)
- 시간 기반 조건 처리 (25점)
- 권한 계층 구조 처리 (25점)
- 상세한 이유 제공 (20점)

---

## 문제 2: 스마트 필터 시스템 (Smart Filter System)

### 문제 설명
다중 조건을 사용하여 배열을 필터링하는 동적 필터 시스템을 구현하세요.

### 요구 사항
```javascript
function createSmartFilter(conditions) {
  // conditions: 조건들의 배열
  // 각 조건: { field: string, operator: string, value: any, logic: 'AND'|'OR' }
  
  return function(items) {
    // 동적으로 생성된 필터 함수
  };
}

function optimizeFilterConditions(conditions) {
  // 논리 법칙을 사용하여 조건 최적화
  // 드모르간 법칙, 항등원, 영원 등 적용
}
```

### 예시
```javascript
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics', inStock: true, rating: 4.5 },
  { name: 'Phone', price: 500, category: 'electronics', inStock: false, rating: 4.0 },
  { name: 'Book', price: 20, category: 'education', inStock: true, rating: 3.8 }
];

const expensiveElectronics = createSmartFilter([
  { field: 'category', operator: 'equals', value: 'electronics', logic: 'AND' },
  { field: 'price', operator: 'greaterThan', value: 300, logic: 'AND' },
  { field: 'inStock', operator: 'equals', value: true, logic: 'OR' },
  { field: 'rating', operator: 'greaterThanOrEqual', value: 4.0, logic: 'AND' }
]);

expensiveElectronics(products);
// [{ name: 'Laptop', price: 1000, category: 'electronics', inStock: true, rating: 4.5 }]

// 최적화 예시
optimizeFilterConditions([
  { field: 'active', operator: 'equals', value: true, logic: 'AND' },
  { field: 'active', operator: 'equals', value: false, logic: 'OR' }
]);
// 항상 true를 반환하도록 최적화
```

### 채점 기준
- 동적 필터 생성 (25점)
- 다양한 연산자 지원 (25점)
- AND/OR 로직 조합 (25점)
- 논리 최적화 구현 (25점)

---

## 문제 3: 조건식 파서 및 평가기 (Condition Parser & Evaluator)

### 문제 설명
문자열로 표현된 복잡한 불린 표현식을 파싱하고 평가하는 시스템을 구현하세요.

### 요구 사항
```javascript
function parseCondition(expression) {
  // "age > 18 AND (status = 'active' OR premium = true)"
  // 파싱 결과를 AST(Abstract Syntax Tree) 형태로 반환
}

function evaluateCondition(ast, context) {
  // AST와 변수 컨텍스트를 받아 불린 값 반환
}

function simplifyExpression(ast) {
  // 논리 법칙을 사용하여 표현식 단순화
  // 예: "true AND x" → "x", "false OR x" → "x"
}
```

### 예시
```javascript
const expression = "(age >= 18 AND verified = true) OR (vip = true AND active = true)";
const ast = parseCondition(expression);

const user1 = { age: 25, verified: true, vip: false, active: true };
const user2 = { age: 16, verified: false, vip: true, active: true };

evaluateCondition(ast, user1); // true (첫 번째 조건 만족)
evaluateCondition(ast, user2); // true (두 번째 조건 만족)

// 표현식 단순화
const simpleExpr = "true AND (x OR false)";
const simplified = simplifyExpression(parseCondition(simpleExpr));
// "x"로 단순화
```

### 채점 기준
- 표현식 파싱 정확성 (30점)
- AST 구조 및 평가 (30점)
- 논리 법칙 적용 단순화 (25점)
- 복잡한 중첩 표현식 처리 (15점)

---

## 문제 4: 상태 머신 검증기 (State Machine Validator)

### 문제 설명
불린 로직을 사용하여 상태 전이가 유효한지 검증하는 상태 머신을 구현하세요.

### 요구 사항
```javascript
function createStateMachine(states, transitions, rules) {
  // states: 가능한 상태들
  // transitions: 허용된 상태 전이들
  // rules: 전이 조건들 (불린 표현식)
  
  return {
    canTransition: function(from, to, context),
    validateSequence: function(stateSequence, contextSequence),
    getAllValidTransitions: function(currentState, context)
  };
}
```

### 예시
```javascript
const orderStates = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

const orderTransitions = [
  { from: 'pending', to: 'confirmed' },
  { from: 'pending', to: 'cancelled' },
  { from: 'confirmed', to: 'shipped' },
  { from: 'confirmed', to: 'cancelled' },
  { from: 'shipped', to: 'delivered' }
];

const orderRules = [
  { 
    from: 'pending', 
    to: 'confirmed', 
    condition: (ctx) => ctx.paymentReceived && ctx.stockAvailable 
  },
  { 
    from: 'confirmed', 
    to: 'shipped', 
    condition: (ctx) => ctx.addressVerified && !ctx.isWeekend 
  }
];

const orderMachine = createStateMachine(orderStates, orderTransitions, orderRules);

orderMachine.canTransition('pending', 'confirmed', {
  paymentReceived: true,
  stockAvailable: true
}); // true

orderMachine.validateSequence(
  ['pending', 'confirmed', 'shipped'],
  [
    { paymentReceived: true, stockAvailable: true },
    { addressVerified: true, isWeekend: false }
  ]
); // { valid: true, errors: [] }
```

### 채점 기준
- 상태 전이 로직 (25점)
- 조건부 전이 검증 (30점)
- 시퀀스 검증 (25점)
- 에러 처리 및 디버깅 정보 (20점)

---

## 문제 5: 논리 회로 시뮬레이터 (Logic Circuit Simulator)

### 문제 설명
디지털 논리 회로를 시뮬레이션하는 시스템을 구현하세요.

### 요구 사항
```javascript
function createLogicGate(type, inputs) {
  // type: 'AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'
  // inputs: 입력 게이트들 또는 값들
}

function createCircuit(gates, connections) {
  // 복합 논리 회로 생성
}

function optimizeCircuit(circuit) {
  // 불린 대수를 사용한 회로 최적화
  // 게이트 수 최소화, 지연 시간 최적화
}
```

### 예시
```javascript
// 반가산기 (Half Adder) 구현
const input1 = true;
const input2 = false;

const xorGate = createLogicGate('XOR', [input1, input2]);
const andGate = createLogicGate('AND', [input1, input2]);

const halfAdder = createCircuit([xorGate, andGate], {
  sum: xorGate,
  carry: andGate
});

halfAdder.evaluate(); // { sum: true, carry: false }

// 회로 최적화
const redundantCircuit = createCircuit([
  createLogicGate('NOT', [createLogicGate('NOT', ['A'])]), // 이중 부정
  createLogicGate('AND', ['A', true]), // A AND true = A
  createLogicGate('OR', ['B', false])  // B OR false = B
]);

const optimized = optimizeCircuit(redundantCircuit);
// A, B만 남도록 최적화
```

### 고급 요구사항
- 지연 시간 시뮬레이션
- 회로 그래프 시각화 정보 생성
- 진리표 자동 생성

### 채점 기준
- 기본 논리 게이트 구현 (25점)
- 복합 회로 구성 (25점)
- 회로 최적화 알고리즘 (30점)
- 성능 및 메모리 효율성 (20점)

---

## 채점 방식
- 각 문제는 100점 만점
- 전체 점수: 500점 만점
- 등급: A(450+), B(400+), C(350+), D(300+), F(300 미만)

## 추가 도전 과제
1. 드모르간 법칙 자동 적용 함수 구현
2. 불린 표현식 최적화 벤치마크 테스트
3. 병렬 조건 평가 시스템 (Promise 기반)
4. 퍼지 로직 (Fuzzy Logic) 확장
5. 불린 대수 공식 검증기