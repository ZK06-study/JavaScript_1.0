# 23. 모듈 시스템 - 퀴즈

## 객관식 문제

### 1. 🟢 ES2015 모듈에서 기본 내보내기를 하는 키워드는?
a) module.exports
b) export default
c) exports
d) default export

### 2. 🟡 다음 중 올바른 import 구문은?
a) `import * from './module.js'`
b) `import { func } from './module.js'`
c) `import './module.js' from func`
d) `from './module.js' import func`

### 3. 🟠 모듈의 특징으로 틀린 것은?
a) 자동으로 엄격 모드가 적용된다
b) 최상위 변수가 전역 스코프에 추가된다
c) 한 번만 실행된다
d) 고유한 스코프를 가진다

### 4. 🟡 동적 import의 반환 타입은?
a) 모듈 객체
b) Promise
c) undefined
d) Function

### 5. 🟠 `import.meta`의 주요 용도는?
a) 모듈을 동적으로 가져오기
b) 모듈에 대한 메타데이터 제공
c) 모듈을 내보내기
d) 모듈을 삭제하기

### 6. 🟡 CommonJS와 ES 모듈의 차이점으로 올바른 것은?
a) CommonJS는 정적 분석이 가능하다
b) ES 모듈은 런타임에 의존성을 결정한다
c) ES 모듈은 정적 분석이 가능하다
d) 둘 다 동일한 방식으로 작동한다

## 단답형 문제

### 7. 🟢 모든 내보내기를 가져올 때 사용하는 구문의 와일드카드는?

### 8. 🟡 모듈을 가져올 때 별칭을 지정하는 키워드는?

### 9. 🟠 Node.js에서 ES 모듈을 사용하기 위한 package.json 설정은?

### 10. 🟢 side effect만을 위해 모듈을 가져올 때 사용하는 방법은?

## 서술형 문제

### 11. 🟡 ES 모듈과 CommonJS의 차이점을 비교하여 설명하시오.

### 12. 🟠 Tree Shaking의 개념과 모듈 시스템에서의 중요성을 설명하시오.

### 13. 🟡 모듈의 순환 참조 문제와 해결 방법을 설명하시오.

## 코딩 문제

### 14. 🟢 다음 요구사항에 따라 모듈을 작성하시오.
```javascript
// math.js - 수학 유틸리티 모듈
// 1. add, subtract, multiply 함수 내보내기
// 2. PI 상수 내보내기  
// 3. Calculator 클래스를 기본 내보내기

// main.js - 모듈 사용
// 위 함수들과 클래스를 가져와서 사용
```

### 15. 🟡 동적 import를 활용한 지연 로딩 시스템을 구현하시오.
```javascript
// 조건에 따라 모듈을 동적으로 로드
// 로딩 상태 표시 포함
// 에러 처리 포함
```

### 16. 🟠 모듈 번들러 없이 브라우저에서 ES 모듈을 사용하는 예제를 작성하시오.
```javascript
// HTML에서 직접 모듈 로드
// import map 사용
// 다양한 모듈 패턴 구현
```

### 17. 🟡 모듈 레지스트리 시스템을 구현하시오.
```javascript
// 모듈 등록 및 의존성 관리
// 버전 관리 기능
// 지연 로딩 지원
```

## 응용 문제

### 18. 🟠 다음 코드의 실행 결과를 예상하고 설명하시오.
```javascript
// a.js
import { valueFromB } from './b.js';
export const valueFromA = 'A';
console.log('A:', valueFromB);

// b.js  
import { valueFromA } from './a.js';
export const valueFromB = 'B';
console.log('B:', valueFromA);

// main.js
import './a.js';
```

### 19. 🟠 모듈 기반 플러그인 시스템을 구현하시오.
```javascript
// 플러그인 인터페이스 정의
// 플러그인 동적 로딩
// 플러그인 간 통신
// 플러그인 생명주기 관리
```

### 20. 🟠 마이크로프론트엔드를 위한 모듈 페더레이션을 구현하시오.
```javascript
// 원격 모듈 로딩
// 모듈 간 상태 공유
// 버전 호환성 관리
```

---

## 정답

### 객관식 정답
1. b) export default
2. b) `import { func } from './module.js'`
3. b) 최상위 변수가 전역 스코프에 추가된다 (모듈 스코프에만 추가됨)
4. b) Promise
5. b) 모듈에 대한 메타데이터 제공
6. c) ES 모듈은 정적 분석이 가능하다

### 단답형 정답
7. `*` (애스터리스크)
8. `as`
9. `"type": "module"`
10. `import './module.js'`

### 서술형 정답
11. **ES 모듈 vs CommonJS:**

| 특징 | ES 모듈 | CommonJS |
|------|---------|----------|
| 문법 | import/export | require/module.exports |
| 로딩 시점 | 컴파일 타임 | 런타임 |
| 정적 분석 | 가능 | 불가능 |
| Tree Shaking | 지원 | 제한적 |
| 브라우저 지원 | 네이티브 | 불가능 |
| 순환 참조 | 더 안전함 | 문제 발생 가능 |

12. **Tree Shaking:**
- 사용되지 않는 코드를 제거하여 번들 크기 최적화
- ES 모듈의 정적 분석 덕분에 가능
- 번들러가 import/export를 분석하여 사용되지 않는 exports 제거

13. **순환 참조:**
- 두 모듈이 서로를 참조하는 상황
- **해결법**: 의존성 역전, 공통 모듈 분리, 지연 로딩

### 코딩 정답
14.
```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;

export default class Calculator {
  constructor() {
    this.history = [];
  }
  
  add(a, b) {
    const result = add(a, b);
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }
  
  subtract(a, b) {
    const result = subtract(a, b);
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }
  
  multiply(a, b) {
    const result = multiply(a, b);
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }
  
  getHistory() {
    return [...this.history];
  }
  
  clear() {
    this.history = [];
  }
}

// main.js
import Calculator, { add, subtract, multiply, PI } from './math.js';

// 개별 함수 사용
console.log('덧셈:', add(5, 3)); // 8
console.log('뺄셈:', subtract(10, 4)); // 6
console.log('곱셈:', multiply(3, 7)); // 21
console.log('원주율:', PI); // 3.14159

// 클래스 사용
const calc = new Calculator();
calc.add(10, 20);
calc.multiply(5, 4);
console.log('계산 기록:', calc.getHistory());

// 별칭 사용
import { add as plus, multiply as times } from './math.js';
console.log('별칭 사용:', plus(1, 2), times(3, 4));

// 전체 가져오기
import * as MathUtils from './math.js';
console.log('전체 가져오기:', MathUtils.add(1, 1));
```

15.
```javascript
// 동적 import를 활용한 지연 로딩 시스템
class ModuleLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
    this.loadingIndicator = null;
  }
  
  // 로딩 상태 표시
  showLoading(message = 'Loading...') {
    if (this.loadingIndicator) return;
    
    this.loadingIndicator = document.createElement('div');
    this.loadingIndicator.className = 'loading-indicator';
    this.loadingIndicator.textContent = message;
    this.loadingIndicator.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 10000;
    `;
    document.body.appendChild(this.loadingIndicator);
  }
  
  hideLoading() {
    if (this.loadingIndicator) {
      document.body.removeChild(this.loadingIndicator);
      this.loadingIndicator = null;
    }
  }
  
  // 모듈 동적 로딩
  async loadModule(modulePath, options = {}) {
    const {
      useCache = true,
      showLoading = true,
      timeout = 10000
    } = options;
    
    // 캐시에서 확인
    if (useCache && this.cache.has(modulePath)) {
      return this.cache.get(modulePath);
    }
    
    // 이미 로딩 중인지 확인
    if (this.loading.has(modulePath)) {
      return this.loading.get(modulePath);
    }
    
    // 로딩 시작
    if (showLoading) {
      this.showLoading(`Loading ${modulePath}...`);
    }
    
    const loadPromise = this.performLoad(modulePath, timeout);
    this.loading.set(modulePath, loadPromise);
    
    try {
      const module = await loadPromise;
      
      // 캐시에 저장
      if (useCache) {
        this.cache.set(modulePath, module);
      }
      
      return module;
      
    } finally {
      this.loading.delete(modulePath);
      if (showLoading) {
        this.hideLoading();
      }
    }
  }
  
  // 실제 로딩 수행
  async performLoad(modulePath, timeout) {
    return new Promise(async (resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error(`Module loading timeout: ${modulePath}`));
      }, timeout);
      
      try {
        const module = await import(modulePath);
        clearTimeout(timeoutId);
        resolve(module);
      } catch (error) {
        clearTimeout(timeoutId);
        reject(new Error(`Failed to load module ${modulePath}: ${error.message}`));
      }
    });
  }
  
  // 조건부 로딩
  async loadConditionally(condition, modulePath, fallbackPath = null) {
    if (condition) {
      return this.loadModule(modulePath);
    } else if (fallbackPath) {
      return this.loadModule(fallbackPath);
    }
    return null;
  }
  
  // 배치 로딩
  async loadBatch(modulePaths, options = {}) {
    const { parallel = true } = options;
    
    if (parallel) {
      return Promise.allSettled(
        modulePaths.map(path => this.loadModule(path, options))
      );
    } else {
      const results = [];
      for (const path of modulePaths) {
        try {
          const module = await this.loadModule(path, options);
          results.push({ status: 'fulfilled', value: module });
        } catch (error) {
          results.push({ status: 'rejected', reason: error });
        }
      }
      return results;
    }
  }
  
  // 캐시 관리
  clearCache(modulePath = null) {
    if (modulePath) {
      this.cache.delete(modulePath);
    } else {
      this.cache.clear();
    }
  }
  
  getCacheStats() {
    return {
      cached: this.cache.size,
      loading: this.loading.size,
      paths: [...this.cache.keys()]
    };
  }
}

// 사용 예시
const loader = new ModuleLoader();

// 기본 사용법
document.getElementById('load-chart').addEventListener('click', async () => {
  try {
    const chartModule = await loader.loadModule('./chart-module.js');
    const chart = new chartModule.Chart('#chart-container');
    chart.render();
  } catch (error) {
    console.error('차트 모듈 로딩 실패:', error);
  }
});

// 조건부 로딩
const userRole = 'admin';
const adminModule = await loader.loadConditionally(
  userRole === 'admin',
  './admin-module.js',
  './user-module.js'
);

// 배치 로딩
const modules = await loader.loadBatch([
  './utils.js',
  './api.js',
  './ui-components.js'
], { parallel: true });

console.log('로더 통계:', loader.getCacheStats());
```

16.
```javascript
// index.html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES 모듈 예제</title>
    
    <!-- Import Map 설정 -->
    <script type="importmap">
    {
      "imports": {
        "lodash": "https://cdn.skypack.dev/lodash",
        "dayjs": "https://cdn.skypack.dev/dayjs",
        "utils/": "./modules/utils/",
        "components/": "./modules/components/"
      }
    }
    </script>
</head>
<body>
    <div id="app"></div>
    
    <!-- ES 모듈로 메인 스크립트 로드 -->
    <script type="module" src="./main.js"></script>
</body>
</html>

// modules/utils/math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

export default class MathUtils {
  static factorial(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }
  
  static isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

// modules/components/button.js
export class Button {
  constructor(text, onClick) {
    this.element = document.createElement('button');
    this.element.textContent = text;
    this.element.addEventListener('click', onClick);
  }
  
  render(container) {
    container.appendChild(this.element);
  }
  
  setDisabled(disabled) {
    this.element.disabled = disabled;
  }
}

// modules/api/client.js
export class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
  
  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }
}

// main.js
// Import Map을 사용한 외부 라이브러리 가져오기
import _ from 'lodash';
import dayjs from 'dayjs';

// 로컬 모듈 가져오기
import MathUtils, { add, multiply } from 'utils/math.js';
import { Button } from 'components/button.js';
import { ApiClient } from './modules/api/client.js';

// 동적 import 예제
async function loadUtilsModule() {
  const { default: UtilsClass } = await import('./modules/utils/string-utils.js');
  return new UtilsClass();
}

// 애플리케이션 초기화
class App {
  constructor() {
    this.container = document.getElementById('app');
    this.api = new ApiClient('https://api.example.com');
    this.init();
  }
  
  async init() {
    // 수학 유틸리티 사용
    console.log('5 + 3 =', add(5, 3));
    console.log('4 * 6 =', multiply(4, 6));
    console.log('5! =', MathUtils.factorial(5));
    
    // 외부 라이브러리 사용
    const numbers = [1, 2, 3, 4, 5];
    console.log('Sum:', _.sum(numbers));
    console.log('Current time:', dayjs().format('YYYY-MM-DD HH:mm:ss'));
    
    // 동적 모듈 로딩
    try {
      const stringUtils = await loadUtilsModule();
      console.log('String utils loaded:', stringUtils);
    } catch (error) {
      console.error('Failed to load string utils:', error);
    }
    
    // UI 컴포넌트 생성
    this.createUI();
  }
  
  createUI() {
    const title = document.createElement('h1');
    title.textContent = 'ES 모듈 예제';
    this.container.appendChild(title);
    
    const button = new Button('클릭하세요!', () => {
      alert('버튼이 클릭되었습니다!');
    });
    button.render(this.container);
    
    // API 호출 버튼
    const apiButton = new Button('API 호출', async () => {
      try {
        apiButton.setDisabled(true);
        const data = await this.api.get('/users/1');
        console.log('API 응답:', data);
      } catch (error) {
        console.error('API 호출 실패:', error);
      } finally {
        apiButton.setDisabled(false);
      }
    });
    apiButton.render(this.container);
  }
}

// 애플리케이션 시작
new App();

// modules/utils/string-utils.js (동적 로딩용)
export default class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  static kebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  static truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
  }
}
```

17.
```javascript
// 모듈 레지스트리 시스템
class ModuleRegistry {
  constructor() {
    this.modules = new Map();
    this.dependencies = new Map();
    this.versions = new Map();
    this.loadingPromises = new Map();
  }
  
  // 모듈 등록
  register(name, version, factory, dependencies = []) {
    const moduleKey = `${name}@${version}`;
    
    if (this.modules.has(moduleKey)) {
      throw new Error(`Module ${moduleKey} is already registered`);
    }
    
    this.modules.set(moduleKey, {
      name,
      version,
      factory,
      dependencies,
      instance: null,
      loaded: false
    });
    
    // 버전 관리
    if (!this.versions.has(name)) {
      this.versions.set(name, []);
    }
    this.versions.get(name).push(version);
    this.versions.get(name).sort(this.compareVersions);
    
    // 의존성 기록
    this.dependencies.set(moduleKey, dependencies);
  }
  
  // 모듈 로드
  async load(name, version = 'latest') {
    const resolvedVersion = this.resolveVersion(name, version);
    const moduleKey = `${name}@${resolvedVersion}`;
    
    // 이미 로딩 중이면 기다림
    if (this.loadingPromises.has(moduleKey)) {
      return this.loadingPromises.get(moduleKey);
    }
    
    // 이미 로드된 경우 인스턴스 반환
    const moduleInfo = this.modules.get(moduleKey);
    if (!moduleInfo) {
      throw new Error(`Module ${moduleKey} not found`);
    }
    
    if (moduleInfo.loaded) {
      return moduleInfo.instance;
    }
    
    // 로딩 프로미스 생성
    const loadingPromise = this.performLoad(moduleKey);
    this.loadingPromises.set(moduleKey, loadingPromise);
    
    try {
      const instance = await loadingPromise;
      return instance;
    } finally {
      this.loadingPromises.delete(moduleKey);
    }
  }
  
  // 실제 로딩 수행
  async performLoad(moduleKey) {
    const moduleInfo = this.modules.get(moduleKey);
    
    // 의존성 먼저 로드
    const dependencies = {};
    for (const depName of moduleInfo.dependencies) {
      dependencies[depName] = await this.load(depName);
    }
    
    // 모듈 팩토리 실행
    try {
      moduleInfo.instance = await moduleInfo.factory(dependencies);
      moduleInfo.loaded = true;
      return moduleInfo.instance;
    } catch (error) {
      throw new Error(`Failed to load module ${moduleKey}: ${error.message}`);
    }
  }
  
  // 버전 해결
  resolveVersion(name, requestedVersion) {
    const availableVersions = this.versions.get(name);
    if (!availableVersions || availableVersions.length === 0) {
      throw new Error(`No versions available for module ${name}`);
    }
    
    if (requestedVersion === 'latest') {
      return availableVersions[availableVersions.length - 1];
    }
    
    if (availableVersions.includes(requestedVersion)) {
      return requestedVersion;
    }
    
    // 호환 버전 찾기 (semver 간단 구현)
    const compatible = availableVersions.filter(v => 
      this.isCompatible(requestedVersion, v)
    );
    
    if (compatible.length === 0) {
      throw new Error(`No compatible version found for ${name}@${requestedVersion}`);
    }
    
    return compatible[compatible.length - 1];
  }
  
  // 버전 비교
  compareVersions(a, b) {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || 0;
      const bPart = bParts[i] || 0;
      
      if (aPart < bPart) return -1;
      if (aPart > bPart) return 1;
    }
    
    return 0;
  }
  
  // 호환성 확인 (간단한 semver)
  isCompatible(requested, available) {
    const reqParts = requested.split('.').map(Number);
    const availParts = available.split('.').map(Number);
    
    // 메이저 버전이 다르면 호환 불가
    if (reqParts[0] !== availParts[0]) return false;
    
    // 마이너 버전이 더 낮으면 호환 불가
    if (availParts[1] < reqParts[1]) return false;
    
    return true;
  }
  
  // 의존성 그래프 분석
  getDependencyGraph(name, version = 'latest') {
    const resolvedVersion = this.resolveVersion(name, version);
    const moduleKey = `${name}@${resolvedVersion}`;
    const visited = new Set();
    const graph = {};
    
    const buildGraph = (key) => {
      if (visited.has(key)) return;
      visited.add(key);
      
      const moduleInfo = this.modules.get(key);
      if (!moduleInfo) return;
      
      graph[key] = moduleInfo.dependencies.map(depName => {
        const depVersion = this.resolveVersion(depName, 'latest');
        const depKey = `${depName}@${depVersion}`;
        buildGraph(depKey);
        return depKey;
      });
    };
    
    buildGraph(moduleKey);
    return graph;
  }
  
  // 순환 의존성 검사
  hasCircularDependency(name, version = 'latest') {
    const graph = this.getDependencyGraph(name, version);
    const visiting = new Set();
    const visited = new Set();
    
    const hasCycle = (node) => {
      if (visiting.has(node)) return true;
      if (visited.has(node)) return false;
      
      visiting.add(node);
      
      for (const dependency of graph[node] || []) {
        if (hasCycle(dependency)) return true;
      }
      
      visiting.delete(node);
      visited.add(node);
      return false;
    };
    
    const startNode = `${name}@${this.resolveVersion(name, version)}`;
    return hasCycle(startNode);
  }
  
  // 통계 정보
  getStats() {
    return {
      totalModules: this.modules.size,
      loadedModules: Array.from(this.modules.values()).filter(m => m.loaded).length,
      loadingModules: this.loadingPromises.size,
      moduleNames: Array.from(this.versions.keys())
    };
  }
}

// 사용 예시
const registry = new ModuleRegistry();

// 유틸리티 모듈 등록
registry.register('utils', '1.0.0', async () => {
  return {
    formatDate: (date) => date.toISOString(),
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1)
  };
});

// HTTP 클라이언트 모듈 등록 (utils에 의존)
registry.register('http-client', '1.0.0', async (deps) => {
  const utils = deps.utils;
  
  return {
    async get(url) {
      console.log(`GET ${url} at ${utils.formatDate(new Date())}`);
      const response = await fetch(url);
      return response.json();
    },
    
    async post(url, data) {
      console.log(`POST ${url} at ${utils.formatDate(new Date())}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };
}, ['utils']);

// 사용자 서비스 모듈 등록 (http-client에 의존)
registry.register('user-service', '1.0.0', async (deps) => {
  const httpClient = deps['http-client'];
  
  return {
    async getUser(id) {
      return httpClient.get(`/api/users/${id}`);
    },
    
    async createUser(userData) {
      return httpClient.post('/api/users', userData);
    }
  };
}, ['http-client']);

// 모듈 사용
async function useModules() {
  try {
    // 의존성 그래프 확인
    console.log('의존성 그래프:', registry.getDependencyGraph('user-service'));
    console.log('순환 의존성:', registry.hasCircularDependency('user-service'));
    
    // 모듈 로드 및 사용
    const userService = await registry.load('user-service');
    const userData = await userService.getUser(123);
    console.log('사용자 데이터:', userData);
    
    // 통계 확인
    console.log('레지스트리 통계:', registry.getStats());
    
  } catch (error) {
    console.error('모듈 로딩 실패:', error);
  }
}

useModules();
```

### 응용 정답
18.
```javascript
// 실행 결과:
// B: undefined
// A: B

// 설명:
// 1. main.js가 a.js를 import
// 2. a.js가 b.js를 import하려 하지만, b.js는 아직 평가되지 않음
// 3. b.js가 a.js를 import하려 하지만, a.js도 아직 완전히 평가되지 않음
// 4. b.js에서 valueFromA는 아직 undefined (호이스팅되었지만 초기화 안됨)
// 5. b.js 평가 완료 후 a.js가 valueFromB에 접근 가능

// ES 모듈은 순환 참조를 허용하지만, 초기화 순서에 주의해야 함
```

19.
```javascript
// 모듈 기반 플러그인 시스템
class PluginSystem {
  constructor() {
    this.plugins = new Map();
    this.hooks = new Map();
    this.eventBus = new EventTarget();
  }
  
  // 플러그인 인터페이스 정의
  defineInterface(name, methods) {
    this.interfaces = this.interfaces || new Map();
    this.interfaces.set(name, methods);
  }
  
  // 플러그인 등록
  async registerPlugin(name, pluginModule, config = {}) {
    try {
      // 플러그인 모듈 로드
      const plugin = typeof pluginModule === 'string' 
        ? await import(pluginModule)
        : pluginModule;
      
      // 인터페이스 검증
      if (plugin.interface && this.interfaces.has(plugin.interface)) {
        this.validateInterface(plugin, plugin.interface);
      }
      
      // 플러그인 인스턴스 생성
      const instance = new plugin.default(config);
      
      this.plugins.set(name, {
        instance,
        config,
        loaded: false,
        active: false,
        hooks: new Set(),
        dependencies: plugin.dependencies || []
      });
      
      // 생명주기 이벤트 발생
      this.emit('plugin:registered', { name, plugin: instance });
      
      return instance;
      
    } catch (error) {
      this.emit('plugin:error', { name, error });
      throw new Error(`Failed to register plugin ${name}: ${error.message}`);
    }
  }
  
  // 인터페이스 검증
  validateInterface(plugin, interfaceName) {
    const requiredMethods = this.interfaces.get(interfaceName);
    const pluginClass = plugin.default;
    
    for (const method of requiredMethods) {
      if (typeof pluginClass.prototype[method] !== 'function') {
        throw new Error(`Plugin missing required method: ${method}`);
      }
    }
  }
  
  // 플러그인 로드
  async loadPlugin(name) {
    const pluginInfo = this.plugins.get(name);
    if (!pluginInfo) {
      throw new Error(`Plugin ${name} not found`);
    }
    
    if (pluginInfo.loaded) return;
    
    // 의존성 먼저 로드
    for (const dependency of pluginInfo.dependencies) {
      await this.loadPlugin(dependency);
    }
    
    try {
      // 플러그인 초기화
      if (typeof pluginInfo.instance.initialize === 'function') {
        await pluginInfo.instance.initialize(this);
      }
      
      pluginInfo.loaded = true;
      this.emit('plugin:loaded', { name, plugin: pluginInfo.instance });
      
    } catch (error) {
      this.emit('plugin:error', { name, error });
      throw error;
    }
  }
  
  // 플러그인 활성화
  async activatePlugin(name) {
    const pluginInfo = this.plugins.get(name);
    if (!pluginInfo) {
      throw new Error(`Plugin ${name} not found`);
    }
    
    if (!pluginInfo.loaded) {
      await this.loadPlugin(name);
    }
    
    if (pluginInfo.active) return;
    
    try {
      if (typeof pluginInfo.instance.activate === 'function') {
        await pluginInfo.instance.activate();
      }
      
      pluginInfo.active = true;
      this.emit('plugin:activated', { name, plugin: pluginInfo.instance });
      
    } catch (error) {
      this.emit('plugin:error', { name, error });
      throw error;
    }
  }
  
  // 플러그인 비활성화
  async deactivatePlugin(name) {
    const pluginInfo = this.plugins.get(name);
    if (!pluginInfo || !pluginInfo.active) return;
    
    try {
      if (typeof pluginInfo.instance.deactivate === 'function') {
        await pluginInfo.instance.deactivate();
      }
      
      // 등록된 훅 정리
      for (const hookName of pluginInfo.hooks) {
        this.removeHook(hookName, pluginInfo.instance);
      }
      
      pluginInfo.active = false;
      this.emit('plugin:deactivated', { name, plugin: pluginInfo.instance });
      
    } catch (error) {
      this.emit('plugin:error', { name, error });
      throw error;
    }
  }
  
  // 훅 시스템
  addHook(name, callback, priority = 10) {
    if (!this.hooks.has(name)) {
      this.hooks.set(name, []);
    }
    
    this.hooks.get(name).push({ callback, priority });
    this.hooks.get(name).sort((a, b) => a.priority - b.priority);
  }
  
  removeHook(name, callback) {
    if (!this.hooks.has(name)) return;
    
    const hooks = this.hooks.get(name);
    const index = hooks.findIndex(hook => hook.callback === callback);
    if (index !== -1) {
      hooks.splice(index, 1);
    }
  }
  
  async executeHook(name, data = {}) {
    if (!this.hooks.has(name)) return data;
    
    let result = data;
    for (const hook of this.hooks.get(name)) {
      try {
        const hookResult = await hook.callback(result);
        if (hookResult !== undefined) {
          result = hookResult;
        }
      } catch (error) {
        this.emit('hook:error', { name, error });
      }
    }
    
    return result;
  }
  
  // 이벤트 시스템
  emit(eventName, data) {
    this.eventBus.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  }
  
  on(eventName, callback) {
    this.eventBus.addEventListener(eventName, callback);
  }
  
  off(eventName, callback) {
    this.eventBus.removeEventListener(eventName, callback);
  }
  
  // 플러그인 간 통신
  sendMessage(fromPlugin, toPlugin, message) {
    const targetPlugin = this.plugins.get(toPlugin);
    if (targetPlugin && targetPlugin.active) {
      if (typeof targetPlugin.instance.receiveMessage === 'function') {
        targetPlugin.instance.receiveMessage(fromPlugin, message);
      }
    }
  }
  
  // 통계 및 관리
  getPluginInfo(name) {
    return this.plugins.get(name);
  }
  
  listPlugins() {
    return Array.from(this.plugins.keys());
  }
  
  getActivePlugins() {
    return Array.from(this.plugins.entries())
      .filter(([name, info]) => info.active)
      .map(([name, info]) => name);
  }
}

// 플러그인 예제
// plugins/logger.js
export const interface = 'logger';
export const dependencies = [];

export default class LoggerPlugin {
  constructor(config) {
    this.config = { level: 'info', ...config };
    this.logs = [];
  }
  
  async initialize(system) {
    this.system = system;
    system.addHook('app:log', this.log.bind(this), 1);
  }
  
  async activate() {
    console.log('Logger plugin activated');
  }
  
  async deactivate() {
    console.log('Logger plugin deactivated');
  }
  
  log(data) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: data.level || 'info',
      message: data.message,
      source: data.source || 'unknown'
    };
    
    this.logs.push(entry);
    
    if (this.shouldLog(entry.level)) {
      console.log(`[${entry.timestamp}] ${entry.level.toUpperCase()}: ${entry.message}`);
    }
    
    return data;
  }
  
  shouldLog(level) {
    const levels = ['debug', 'info', 'warn', 'error'];
    const configLevel = levels.indexOf(this.config.level);
    const messageLevel = levels.indexOf(level);
    return messageLevel >= configLevel;
  }
  
  getLogs() {
    return [...this.logs];
  }
}

// 사용 예시
const pluginSystem = new PluginSystem();

// 인터페이스 정의
pluginSystem.defineInterface('logger', ['log', 'getLogs']);

// 플러그인 등록 및 활성화
async function setupPlugins() {
  try {
    await pluginSystem.registerPlugin('logger', './plugins/logger.js', {
      level: 'info'
    });
    
    await pluginSystem.activatePlugin('logger');
    
    // 훅 실행 테스트
    await pluginSystem.executeHook('app:log', {
      message: 'Application started',
      level: 'info',
      source: 'main'
    });
    
    console.log('Active plugins:', pluginSystem.getActivePlugins());
    
  } catch (error) {
    console.error('Plugin setup failed:', error);
  }
}

setupPlugins();
```

20.
```javascript
// 마이크로프론트엔드 모듈 페더레이션
class ModuleFederation {
  constructor(config = {}) {
    this.config = {
      name: 'host',
      remotes: {},
      shared: {},
      exposes: {},
      ...config
    };
    
    this.remoteModules = new Map();
    this.sharedModules = new Map();
    this.exposedModules = new Map();
    this.loadingPromises = new Map();
  }
  
  // 원격 모듈 등록
  registerRemote(name, url, modules = {}) {
    this.remoteModules.set(name, {
      url,
      modules,
      loaded: false,
      container: null
    });
  }
  
  // 모듈 노출
  exposeModule(name, factory) {
    this.exposedModules.set(name, factory);
  }
  
  // 공유 모듈 등록
  shareModule(name, version, factory) {
    const key = `${name}@${version}`;
    this.sharedModules.set(key, {
      name,
      version,
      factory,
      instance: null,
      consumers: new Set()
    });
  }
  
  // 원격 모듈 로드
  async loadRemoteModule(remoteName, moduleName) {
    const cacheKey = `${remoteName}/${moduleName}`;
    
    if (this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey);
    }
    
    const loadPromise = this.performRemoteLoad(remoteName, moduleName);
    this.loadingPromises.set(cacheKey, loadPromise);
    
    try {
      return await loadPromise;
    } finally {
      this.loadingPromises.delete(cacheKey);
    }
  }
  
  async performRemoteLoad(remoteName, moduleName) {
    const remoteInfo = this.remoteModules.get(remoteName);
    if (!remoteInfo) {
      throw new Error(`Remote ${remoteName} not found`);
    }
    
    // 원격 컨테이너 로드
    if (!remoteInfo.loaded) {
      await this.loadRemoteContainer(remoteName);
    }
    
    // 모듈 팩토리 가져오기
    const moduleFactory = await remoteInfo.container.get(moduleName);
    const module = moduleFactory();
    
    return module;
  }
  
  async loadRemoteContainer(remoteName) {
    const remoteInfo = this.remoteModules.get(remoteName);
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = remoteInfo.url;
      script.onload = () => {
        const containerName = `${remoteName}Container`;
        if (window[containerName]) {
          remoteInfo.container = window[containerName];
          remoteInfo.loaded = true;
          resolve();
        } else {
          reject(new Error(`Container ${containerName} not found`));
        }
      };
      script.onerror = () => reject(new Error(`Failed to load ${remoteInfo.url}`));
      document.head.appendChild(script);
    });
  }
  
  // 공유 모듈 가져오기
  async getSharedModule(name, version = 'latest') {
    const availableVersions = Array.from(this.sharedModules.keys())
      .filter(key => key.startsWith(`${name}@`))
      .map(key => key.split('@')[1]);
    
    if (availableVersions.length === 0) {
      throw new Error(`Shared module ${name} not found`);
    }
    
    const resolvedVersion = version === 'latest' 
      ? availableVersions.sort().pop()
      : version;
    
    const moduleKey = `${name}@${resolvedVersion}`;
    const moduleInfo = this.sharedModules.get(moduleKey);
    
    if (!moduleInfo) {
      throw new Error(`Shared module ${moduleKey} not found`);
    }
    
    if (!moduleInfo.instance) {
      moduleInfo.instance = await moduleInfo.factory();
    }
    
    moduleInfo.consumers.add(this.config.name);
    return moduleInfo.instance;
  }
  
  // 버전 호환성 검사
  checkVersionCompatibility(requested, available) {
    // 간단한 semver 호환성 검사
    const reqParts = requested.split('.').map(Number);
    const availParts = available.split('.').map(Number);
    
    // 메이저 버전이 같고, 마이너 버전이 같거나 더 높으면 호환
    return reqParts[0] === availParts[0] && availParts[1] >= reqParts[1];
  }
  
  // 모듈 간 상태 공유
  createSharedState(name, initialState = {}) {
    const stateKey = `__shared_state_${name}`;
    
    if (!window[stateKey]) {
      window[stateKey] = {
        state: initialState,
        subscribers: new Set(),
        subscribe(callback) {
          this.subscribers.add(callback);
          return () => this.subscribers.delete(callback);
        },
        setState(newState) {
          this.state = { ...this.state, ...newState };
          this.subscribers.forEach(callback => callback(this.state));
        },
        getState() {
          return { ...this.state };
        }
      };
    }
    
    return window[stateKey];
  }
  
  // 모듈 레지스트리 생성
  createModuleRegistry() {
    return {
      // 노출된 모듈 제공
      get: async (moduleName) => {
        if (this.exposedModules.has(moduleName)) {
          return this.exposedModules.get(moduleName);
        }
        throw new Error(`Module ${moduleName} not exposed`);
      },
      
      // 공유 모듈 제공
      shared: async (moduleName, version) => {
        return this.getSharedModule(moduleName, version);
      }
    };
  }
  
  // 마이크로프론트엔드 로더
  async loadMicrofrontend(name, selector, props = {}) {
    try {
      const MicrofrontendComponent = await this.loadRemoteModule(name, 'default');
      const container = document.querySelector(selector);
      
      if (!container) {
        throw new Error(`Container ${selector} not found`);
      }
      
      // 마이크로프론트엔드 마운트
      const instance = new MicrofrontendComponent(props);
      if (typeof instance.mount === 'function') {
        await instance.mount(container);
      }
      
      return instance;
      
    } catch (error) {
      console.error(`Failed to load microfrontend ${name}:`, error);
      throw error;
    }
  }
  
  // 통계 및 디버깅
  getStats() {
    return {
      remotes: Array.from(this.remoteModules.keys()),
      shared: Array.from(this.sharedModules.keys()),
      exposed: Array.from(this.exposedModules.keys()),
      loadedRemotes: Array.from(this.remoteModules.values())
        .filter(r => r.loaded).length
    };
  }
}

// 사용 예제

// Host 애플리케이션 설정
const federation = new ModuleFederation({
  name: 'shell',
  remotes: {
    'header-app': 'http://localhost:3001/headerApp.js',
    'content-app': 'http://localhost:3002/contentApp.js'
  }
});

// 공유 모듈 등록
federation.shareModule('react', '18.0.0', () => import('react'));
federation.shareModule('shared-utils', '1.0.0', () => import('./shared/utils'));

// 원격 앱 등록
federation.registerRemote('header-app', 'http://localhost:3001/remoteEntry.js', {
  'Header': './Header',
  'Navigation': './Navigation'
});

federation.registerRemote('content-app', 'http://localhost:3002/remoteEntry.js', {
  'default': './App',
  'ContentList': './ContentList'
});

// 공유 상태 생성
const appState = federation.createSharedState('app', {
  user: null,
  theme: 'light'
});

// 마이크로프론트엔드 로드
async function loadApp() {
  try {
    // 헤더 마이크로프론트엔드 로드
    const header = await federation.loadMicrofrontend('header-app', '#header', {
      onUserChange: (user) => appState.setState({ user })
    });
    
    // 콘텐츠 마이크로프론트엔드 로드
    const content = await federation.loadMicrofrontend('content-app', '#content', {
      theme: appState.getState().theme
    });
    
    // 상태 변화 감지
    appState.subscribe((newState) => {
      console.log('App state changed:', newState);
      // 필요시 마이크로프론트엔드에 상태 전파
    });
    
    console.log('Federation stats:', federation.getStats());
    
  } catch (error) {
    console.error('Failed to load microfrontends:', error);
  }
}

loadApp();

// 원격 앱에서 사용할 예제 코드
/*
// header-app의 webpack.config.js
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'headerApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
        './Navigation': './src/Navigation'
      },
      shared: {
        'react': { singleton: true },
        'shared-utils': { singleton: true }
      }
    })
  ]
};

// header-app의 Header 컴포넌트
export default class Header {
  constructor(props) {
    this.props = props;
  }
  
  async mount(container) {
    container.innerHTML = `
      <header>
        <h1>Microfrontend Header</h1>
        <nav>Navigation here</nav>
      </header>
    `;
  }
  
  unmount() {
    // 정리 작업
  }
}
*/
```