class AdvancedJavaScriptTest {
    constructor() {
        this.questions = [
            {
                id: 1,
                category: '복합 자료구조',
                title: 'LRU 캐시 구현',
                text: 'LRU(Least Recently Used) 캐시 클래스를 구현하세요.',
                description: '주어진 용량 제한 내에서 가장 최근에 사용하지 않은 항목을 제거하는 캐시 시스템을 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'get(key) 메소드: 키의 값을 반환하고 해당 키를 가장 최근 사용으로 마킹',
                    'put(key, value) 메소드: 키-값 쌍을 저장하고 용량 초과 시 LRU 항목 제거',
                    'O(1) 시간 복잡도로 구현',
                    '용량 제한 준수'
                ],
                starterCode: `class LRUCache {
    constructor(capacity) {
        // 여기에 코드를 작성하세요
        
    }
    
    get(key) {
        // 여기에 코드를 작성하세요
        
    }
    
    put(key, value) {
        // 여기에 코드를 작성하세요
        
    }
}`,
                testCases: [
                    {
                        input: [2, [['put', 1, 1], ['put', 2, 2], ['get', 1], ['put', 3, 3], ['get', 2], ['put', 4, 4], ['get', 1], ['get', 3], ['get', 4]]],
                        expected: [null, null, 1, null, -1, null, -1, 3, 4],
                        customCheck: true
                    },
                    {
                        input: [1, [['put', 2, 1], ['get', 2], ['put', 3, 2], ['get', 2], ['get', 3]]],
                        expected: [null, 1, null, -1, 2],
                        customCheck: true
                    }
                ],
                hints: [
                    '더블 링크드 리스트와 해시맵을 조합하여 사용하세요',
                    '최근 사용된 항목을 리스트의 앞쪽으로 이동시키세요',
                    'Map을 사용하여 O(1) 접근을 보장하세요'
                ],
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(capacity)'
            },
            {
                id: 2,
                category: '고급 알고리즘',
                title: '최장 공통 부분 수열',
                text: '두 문자열의 최장 공통 부분 수열(LCS)의 길이를 구하는 함수를 작성하세요.',
                description: '동적 계획법을 사용하여 두 문자열 간의 최장 공통 부분 수열을 찾으세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    '동적 계획법 사용',
                    '두 문자열의 LCS 길이 반환',
                    '공간 복잡도 최적화 고려',
                    '빈 문자열 처리'
                ],
                starterCode: `function longestCommonSubsequence(text1, text2) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: ['abcde', 'ace'], expected: 3 },
                    { input: ['abc', 'abc'], expected: 3 },
                    { input: ['abc', 'def'], expected: 0 },
                    { input: ['', 'abc'], expected: 0 },
                    { input: ['ABCDGH', 'AEDFHR'], expected: 3 }
                ],
                hints: [
                    '2차원 DP 테이블을 사용하세요',
                    '문자가 일치하면 dp[i-1][j-1] + 1',
                    '문자가 일치하지 않으면 max(dp[i-1][j], dp[i][j-1])',
                    '공간 복잡도를 O(min(m,n))으로 최적화할 수 있습니다'
                ],
                timeComplexity: 'O(m*n)',
                spaceComplexity: 'O(m*n)'
            },
            {
                id: 3,
                category: '함수형 프로그래밍',
                title: '커링 및 부분 적용',
                text: '다양한 인수를 받는 함수에 대한 커링과 부분 적용을 구현하세요.',
                description: '임의의 함수를 커링하여 부분 적용이 가능한 함수로 변환하는 curry 함수를 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'curry 함수 구현',
                    '가변 인수 처리',
                    '부분 적용 지원',
                    '완전한 인수가 제공되면 원본 함수 실행'
                ],
                starterCode: `function curry(fn) {
    // 여기에 코드를 작성하세요
    
}

// 테스트용 함수들
function add(a, b, c) {
    return a + b + c;
}

function multiply(a, b, c, d) {
    return a * b * c * d;
}`,
                testCases: [
                    {
                        input: [add, [1, 2, 3]],
                        expected: 6,
                        customCheck: true
                    },
                    {
                        input: [multiply, [2, 3, 4, 5]],
                        expected: 120,
                        customCheck: true
                    }
                ],
                hints: [
                    'Function.length를 사용하여 원본 함수의 매개변수 개수를 확인하세요',
                    '재귀적으로 인수를 누적하세요',
                    'rest parameters와 spread operator를 활용하세요',
                    '클로저를 사용하여 상태를 유지하세요'
                ],
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 4,
                category: '객체지향 패턴',
                title: '옵저버 패턴 구현',
                text: '옵저버 패턴을 구현하여 이벤트 시스템을 만드세요.',
                description: 'Subject와 Observer 클래스를 구현하여 발행-구독 패턴을 만드세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'Subject 클래스: 옵저버 추가/제거, 알림 기능',
                    'Observer 클래스: 업데이트 메소드',
                    '다중 옵저버 지원',
                    '이벤트 타입별 구독 가능'
                ],
                starterCode: `class Subject {
    constructor() {
        // 여기에 코드를 작성하세요
        
    }
    
    attach(observer, eventType = 'default') {
        // 여기에 코드를 작성하세요
        
    }
    
    detach(observer, eventType = 'default') {
        // 여기에 코드를 작성하세요
        
    }
    
    notify(eventType = 'default', data = null) {
        // 여기에 코드를 작성하세요
        
    }
}

class Observer {
    constructor(name) {
        this.name = name;
        this.received = [];
    }
    
    update(data) {
        // 여기에 코드를 작성하세요
        
    }
}`,
                testCases: [
                    {
                        input: [],
                        expected: 'pattern_test',
                        customCheck: true
                    }
                ],
                hints: [
                    'Map을 사용하여 이벤트 타입별 옵저버 목록을 관리하세요',
                    'Set을 사용하여 중복 옵저버를 방지하세요',
                    '옵저버가 제거될 때 메모리 누수를 방지하세요',
                    '에러 핸들링을 고려하세요'
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 5,
                category: '비동기 프로그래밍',
                title: '프로미스 스케줄러',
                text: '동시 실행 개수를 제한하는 프로미스 스케줄러를 구현하세요.',
                description: '최대 동시 실행 개수를 제한하면서 여러 비동기 작업을 순차적으로 처리하는 스케줄러를 만드세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'concurrency 제한 준수',
                    '작업 큐 관리',
                    '완료된 작업 결과 수집',
                    '에러 처리'
                ],
                starterCode: `class PromiseScheduler {
    constructor(concurrency) {
        // 여기에 코드를 작성하세요
        
    }
    
    add(promiseFactory) {
        // 여기에 코드를 작성하세요
        
    }
    
    async start() {
        // 여기에 코드를 작성하세요
        
    }
}`,
                testCases: [
                    {
                        input: [2, 5],
                        expected: 'scheduler_test',
                        customCheck: true
                    }
                ],
                hints: [
                    '현재 실행 중인 프로미스 개수를 추적하세요',
                    '큐에서 다음 작업을 가져와 실행하세요',
                    'Promise.all을 사용하여 모든 작업 완료를 기다리세요',
                    '에러가 발생해도 다른 작업은 계속 실행되어야 합니다'
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 6,
                category: '자료구조 설계',
                title: '균형 이진 탐색 트리',
                text: 'AVL 트리의 기본 구조와 회전 연산을 구현하세요.',
                description: '자가 균형 이진 탐색 트리를 구현하여 O(log n) 시간 복잡도를 보장하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 5,
                requirements: [
                    'insert, delete, search 연산',
                    '좌회전, 우회전 연산',
                    '균형 팩터 계산',
                    '트리 높이 유지'
                ],
                starterCode: `class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    
    insert(val) {
        // 여기에 코드를 작성하세요
        
    }
    
    delete(val) {
        // 여기에 코드를 작성하세요
        
    }
    
    search(val) {
        // 여기에 코드를 작성하세요
        
    }
    
    getHeight(node) {
        // 여기에 코드를 작성하세요
        
    }
    
    getBalance(node) {
        // 여기에 코드를 작성하세요
        
    }
    
    rotateLeft(node) {
        // 여기에 코드를 작성하세요
        
    }
    
    rotateRight(node) {
        // 여기에 코드를 작성하세요
        
    }
}`,
                testCases: [
                    {
                        input: [[10, 20, 30, 40, 50, 25]],
                        expected: 'avl_test',
                        customCheck: true
                    }
                ],
                hints: [
                    '노드의 높이를 지속적으로 업데이트하세요',
                    '균형 팩터가 -1, 0, 1을 벗어나면 회전이 필요합니다',
                    'LL, LR, RR, RL 케이스를 고려하세요',
                    '삽입과 삭제 후 균형을 맞추세요'
                ],
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 7,
                category: '문자열 알고리즘',
                title: 'KMP 패턴 매칭',
                text: 'KMP 알고리즘을 사용하여 문자열 패턴 매칭을 구현하세요.',
                description: 'Knuth-Morris-Pratt 알고리즘을 구현하여 효율적인 문자열 검색을 수행하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'LPS 배열 구성',
                    'KMP 패턴 매칭',
                    '모든 매칭 위치 반환',
                    'O(n+m) 시간 복잡도'
                ],
                starterCode: `function kmpSearch(text, pattern) {
    // 여기에 코드를 작성하세요
    
}

function computeLPS(pattern) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: ['ABABDABACDABABCABCABCABCABC', 'ABABCABCABCABC'], expected: [15] },
                    { input: ['AABAACAADAABAABA', 'AABA'], expected: [0, 9, 12] },
                    { input: ['ABCABCABCABC', 'ABC'], expected: [0, 3, 6, 9] },
                    { input: ['HELLO', 'WORLD'], expected: [] }
                ],
                hints: [
                    'LPS(Longest Proper Prefix Suffix) 배열을 먼저 구성하세요',
                    '매칭 실패 시 LPS 배열을 사용하여 건너뛸 수 있습니다',
                    '이중 포인터를 사용하여 텍스트와 패턴을 비교하세요',
                    '매칭 실패 시 패턴 포인터를 LPS 값으로 이동하세요'
                ],
                timeComplexity: 'O(n + m)',
                spaceComplexity: 'O(m)'
            },
            {
                id: 8,
                category: '그래프 알고리즘',
                title: '최단 경로 찾기',
                text: '가중 그래프에서 다익스트라 알고리즘을 구현하세요.',
                description: '우선순위 큐를 사용하여 시작점에서 모든 정점까지의 최단 거리를 구하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 5,
                requirements: [
                    '다익스트라 알고리즘 구현',
                    '우선순위 큐 사용',
                    '모든 정점까지의 최단 거리 반환',
                    '음수 가중치 없음 가정'
                ],
                starterCode: `function dijkstra(graph, start) {
    // 여기에 코드를 작성하세요
    // graph: 인접 리스트 형태의 그래프
    // 예: {0: [[1, 4], [2, 2]], 1: [[2, 1], [3, 5]], ...}
    
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    enqueue(element, priority) {
        // 여기에 코드를 작성하세요
        
    }
    
    dequeue() {
        // 여기에 코드를 작성하세요
        
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}`,
                testCases: [
                    {
                        input: [{0: [[1, 4], [2, 2]], 1: [[2, 1], [3, 5]], 2: [[3, 8], [4, 10]], 3: [[4, 2]], 4: []}, 0],
                        expected: {0: 0, 1: 4, 2: 2, 3: 9, 4: 11}
                    }
                ],
                hints: [
                    '우선순위 큐를 구현하여 최소 거리부터 처리하세요',
                    '방문한 정점은 다시 처리하지 않도록 체크하세요',
                    '거리 배열을 무한대로 초기화하세요',
                    '인접한 정점들의 거리를 업데이트하세요'
                ],
                timeComplexity: 'O((V + E) log V)',
                spaceComplexity: 'O(V)'
            },
            {
                id: 9,
                category: '동적 계획법',
                title: '배낭 문제 해결',
                text: '0-1 배낭 문제를 동적 계획법으로 해결하세요.',
                description: '주어진 무게 제한 내에서 가치의 합이 최대가 되도록 물건을 선택하는 문제를 해결하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    '0-1 배낭 문제 해결',
                    '동적 계획법 사용',
                    '선택된 물건 목록 반환',
                    '공간 복잡도 최적화'
                ],
                starterCode: `function knapsack(capacity, weights, values) {
    // 여기에 코드를 작성하세요
    // capacity: 배낭의 용량
    // weights: 물건들의 무게 배열
    // values: 물건들의 가치 배열
    // 반환값: {maxValue: 최대 가치, items: 선택된 물건의 인덱스 배열}
    
}`,
                testCases: [
                    {
                        input: [50, [10, 20, 30], [60, 100, 120]],
                        expected: {maxValue: 220, items: [1, 2]}
                    },
                    {
                        input: [10, [5, 4, 6, 3], [10, 40, 30, 50]],
                        expected: {maxValue: 90, items: [1, 3]}
                    }
                ],
                hints: [
                    '2차원 DP 테이블을 사용하세요',
                    '물건을 포함하는 경우와 포함하지 않는 경우를 비교하세요',
                    '역추적을 통해 선택된 물건들을 찾으세요',
                    '1차원 배열로 공간 복잡도를 최적화할 수 있습니다'
                ],
                timeComplexity: 'O(n * W)',
                spaceComplexity: 'O(n * W)'
            },
            {
                id: 10,
                category: '메모리 최적화',
                title: '메모이제이션 데코레이터',
                text: '함수 결과를 캐싱하는 메모이제이션 데코레이터를 구현하세요.',
                description: '함수의 결과를 캐싱하여 동일한 인수로 호출 시 캐시된 결과를 반환하는 고급 메모이제이션을 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    '임의의 함수에 적용 가능',
                    '복잡한 인수 처리 (객체, 배열 포함)',
                    '캐시 크기 제한',
                    'TTL(Time To Live) 지원'
                ],
                starterCode: `function memoize(fn, options = {}) {
    // 여기에 코드를 작성하세요
    // options: { maxSize: 100, ttl: 60000 }
    
}

// 테스트용 함수
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function expensiveCalculation(obj) {
    // 복잡한 계산을 시뮬레이션
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    return result * Math.random();
}`,
                testCases: [
                    {
                        input: [fibonacci, 10],
                        expected: 55,
                        customCheck: true
                    }
                ],
                hints: [
                    'JSON.stringify를 사용하여 복잡한 인수를 키로 변환하세요',
                    'WeakMap이나 Map을 사용하여 캐시를 구현하세요',
                    'LRU 방식으로 캐시 크기를 제한하세요',
                    'setTimeout을 사용하여 TTL을 구현하세요'
                ],
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(cache size)'
            },
            {
                id: 11,
                category: '함수 조합',
                title: '파이프라인 구현',
                text: '함수형 프로그래밍의 파이프라인을 구현하세요.',
                description: '여러 함수를 연결하여 데이터 변환 파이프라인을 만드는 pipe와 compose 함수를 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    'pipe 함수: 왼쪽에서 오른쪽으로 함수 실행',
                    'compose 함수: 오른쪽에서 왼쪽으로 함수 실행',
                    '비동기 함수 지원',
                    '에러 처리 지원'
                ],
                starterCode: `function pipe(...functions) {
    // 여기에 코드를 작성하세요
    
}

function compose(...functions) {
    // 여기에 코드를 작성하세요
    
}

function pipeAsync(...functions) {
    // 여기에 코드를 작성하세요
    
}

// 테스트용 함수들
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const square = (x) => x * x;`,
                testCases: [
                    {
                        input: [5, [add, multiply, square]],
                        expected: 144,
                        customCheck: true
                    }
                ],
                hints: [
                    'reduce를 사용하여 함수들을 차례로 실행하세요',
                    'compose는 pipe와 반대 순서로 실행됩니다',
                    'Promise.resolve를 사용하여 비동기 함수를 처리하세요',
                    'try-catch를 사용하여 에러를 처리하세요'
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)'
            },
            {
                id: 12,
                category: '성능 최적화',
                title: '가상 DOM 구현',
                text: '간단한 가상 DOM 시스템을 구현하세요.',
                description: '실제 DOM 조작을 최소화하기 위한 가상 DOM과 diffing 알고리즘을 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 5,
                requirements: [
                    '가상 DOM 노드 생성',
                    'diffing 알고리즘',
                    '실제 DOM 패치',
                    '이벤트 핸들링'
                ],
                starterCode: `function createElement(tag, props, ...children) {
    // 여기에 코드를 작성하세요
    
}

function render(vnode, container) {
    // 여기에 코드를 작성하세요
    
}

function diff(oldVnode, newVnode) {
    // 여기에 코드를 작성하세요
    
}

function patch(patches, container) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    {
                        input: ['vdom_test'],
                        expected: 'vdom_test',
                        customCheck: true
                    }
                ],
                hints: [
                    '가상 노드를 객체로 표현하세요',
                    '노드 타입에 따라 다른 처리를 하세요',
                    '키를 사용하여 효율적인 리스트 diffing을 구현하세요',
                    '실제 DOM 조작을 최소화하세요'
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 13,
                category: '이벤트 시스템',
                title: '커스텀 이벤트 버스',
                text: '고급 이벤트 버스 시스템을 구현하세요.',
                description: '네임스페이스, 와일드카드, 한 번만 실행되는 이벤트 등을 지원하는 이벤트 시스템을 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    '이벤트 등록/해제',
                    '네임스페이스 지원',
                    '와일드카드 패턴',
                    'once 이벤트 지원'
                ],
                starterCode: `class EventBus {
    constructor() {
        // 여기에 코드를 작성하세요
        
    }
    
    on(event, handler) {
        // 여기에 코드를 작성하세요
        
    }
    
    off(event, handler) {
        // 여기에 코드를 작성하세요
        
    }
    
    once(event, handler) {
        // 여기에 코드를 작성하세요
        
    }
    
    emit(event, data) {
        // 여기에 코드를 작성하세요
        
    }
    
    // 네임스페이스 지원: 'namespace:event'
    // 와일드카드 지원: 'namespace:*'
}`,
                testCases: [
                    {
                        input: ['eventbus_test'],
                        expected: 'eventbus_test',
                        customCheck: true
                    }
                ],
                hints: [
                    'Map을 사용하여 이벤트별 핸들러를 관리하세요',
                    '정규표현식을 사용하여 와일드카드를 처리하세요',
                    'once 이벤트는 실행 후 자동으로 제거하세요',
                    '네임스페이스는 콜론(:)으로 구분하세요'
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)'
            },
            {
                id: 14,
                category: '데이터 구조',
                title: '트라이(Trie) 구현',
                text: '문자열 검색을 위한 트라이 자료구조를 구현하세요.',
                description: '효율적인 문자열 검색과 자동완성 기능을 제공하는 트라이를 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 4,
                requirements: [
                    '문자열 삽입',
                    '문자열 검색',
                    '접두사 검색',
                    '자동완성 기능'
                ],
                starterCode: `class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        // 여기에 코드를 작성하세요
        
    }
    
    search(word) {
        // 여기에 코드를 작성하세요
        
    }
    
    startsWith(prefix) {
        // 여기에 코드를 작성하세요
        
    }
    
    autocomplete(prefix) {
        // 여기에 코드를 작성하세요
        // 주어진 접두사로 시작하는 모든 단어를 반환
        
    }
}`,
                testCases: [
                    {
                        input: [['apple', 'app', 'application'], ['app', 'apple', 'apply']],
                        expected: {
                            search: [true, true, false],
                            startsWith: [true, true, true],
                            autocomplete: [['app', 'apple', 'application'], ['apple'], []]
                        },
                        customCheck: true
                    }
                ],
                hints: [
                    'Map을 사용하여 자식 노드를 관리하세요',
                    'DFS를 사용하여 자동완성 목록을 수집하세요',
                    '접두사 검색 시 해당 노드를 먼저 찾으세요',
                    'isEnd 플래그로 단어의 끝을 표시하세요'
                ],
                timeComplexity: 'O(m)',
                spaceComplexity: 'O(n * m)'
            },
            {
                id: 15,
                category: '고급 최적화',
                title: '스케줄러 구현',
                text: '작업 우선순위를 관리하는 스케줄러를 구현하세요.',
                description: '우선순위 기반으로 작업을 스케줄링하고 실행하는 시스템을 구현하세요.',
                type: 'coding',
                difficulty: '상',
                timeLimit: 5,
                requirements: [
                    '우선순위 기반 스케줄링',
                    '작업 큐 관리',
                    '동시 실행 제한',
                    '작업 취소 기능'
                ],
                starterCode: `class TaskScheduler {
    constructor(maxConcurrency = 3) {
        // 여기에 코드를 작성하세요
        
    }
    
    addTask(task, priority = 0) {
        // 여기에 코드를 작성하세요
        // task: 실행할 함수
        // priority: 우선순위 (높을수록 먼저 실행)
        // 반환값: 작업 취소를 위한 ID
        
    }
    
    cancelTask(taskId) {
        // 여기에 코드를 작성하세요
        
    }
    
    start() {
        // 여기에 코드를 작성하세요
        
    }
    
    stop() {
        // 여기에 코드를 작성하세요
        
    }
    
    getStatus() {
        // 여기에 코드를 작성하세요
        // 현재 실행 중인 작업 수, 대기 중인 작업 수 반환
        
    }
}`,
                testCases: [
                    {
                        input: ['scheduler_test'],
                        expected: 'scheduler_test',
                        customCheck: true
                    }
                ],
                hints: [
                    '우선순위 큐를 사용하여 작업을 관리하세요',
                    '실행 중인 작업의 개수를 추적하세요',
                    'UUID를 사용하여 작업 ID를 생성하세요',
                    '작업 완료 시 다음 작업을 자동으로 실행하세요'
                ],
                timeComplexity: 'O(log n)',
                spaceComplexity: 'O(n)'
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeRemaining = 3600; // 60분 = 3600초
        this.questionTimeRemaining = 0;
        this.isTestActive = false;
        this.startTime = null;
        this.endTime = null;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.testResults = [];
        
        this.timer = null;
        this.questionTimer = null;
        
        this.initializeElements();
        this.bindEvents();
        this.showStartScreen();
    }
    
    initializeElements() {
        // 기본 요소들
        this.startBtn = document.getElementById('start-btn');
        this.startTestBtn = document.getElementById('start-test-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.runCodeBtn = document.getElementById('run-code-btn');
        this.hintBtn = document.getElementById('hint-btn');
        this.optimizeBtn = document.getElementById('optimize-btn');
        this.closeHintBtn = document.getElementById('close-hint-btn');
        
        // 화면 요소들
        this.startScreen = document.getElementById('start-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
        // 타이머 요소들
        this.timerDisplay = document.getElementById('timer');
        this.questionTimerDisplay = document.getElementById('question-timer');
        
        // 문제 요소들
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.questionNumber = document.getElementById('question-number');
        this.questionCategory = document.getElementById('question-category');
        this.questionDifficulty = document.getElementById('question-difficulty');
        this.questionTitle = document.getElementById('question-title');
        this.questionText = document.getElementById('question-text');
        this.questionDescription = document.getElementById('question-description');
        this.requirementsList = document.getElementById('requirements-list');
        this.codeEditor = document.getElementById('code-editor');
        this.hintPanel = document.getElementById('hint-panel');
        this.hintContent = document.getElementById('hint-content');
        
        // 결과 요소들
        this.consoleOutput = document.getElementById('console-output');
        this.testResults = document.getElementById('test-results');
        this.testStatus = document.getElementById('test-status');
        this.passedTests = document.getElementById('passed-tests');
        this.totalTests = document.getElementById('total-tests');
        this.performanceInfo = document.getElementById('performance-info');
        this.timeComplexity = document.getElementById('time-complexity');
        this.spaceComplexity = document.getElementById('space-complexity');
        
        // 최종 결과 요소들
        this.finalScore = document.getElementById('final-score');
        this.accuracyRate = document.getElementById('accuracy-rate');
        this.totalTime = document.getElementById('total-time');
        this.avgDifficulty = document.getElementById('avg-difficulty');
        this.categoryResults = document.getElementById('category-results');
        
        // 리뷰 요소들
        this.reviewBtn = document.getElementById('review-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.closeReviewBtn = document.getElementById('close-review-btn');
        this.reviewContent = document.getElementById('review-content');
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.showStartScreen());
        this.startTestBtn.addEventListener('click', () => this.startTest());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitTest());
        this.runCodeBtn.addEventListener('click', () => this.runCode());
        this.hintBtn.addEventListener('click', () => this.showHints());
        this.optimizeBtn.addEventListener('click', () => this.showOptimization());
        this.closeHintBtn.addEventListener('click', () => this.hideHints());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.restartBtn.addEventListener('click', () => this.restartTest());
        this.closeReviewBtn.addEventListener('click', () => this.hideReview());
        
        // 코드 에디터 변경 시 저장
        this.codeEditor.addEventListener('input', () => {
            this.userAnswers[this.currentQuestionIndex] = this.codeEditor.value;
            this.updateNavigation();
        });
    }
    
    showStartScreen() {
        this.showScreen('start');
        this.updateNavigation();
    }
    
    startTest() {
        this.isTestActive = true;
        this.startTime = Date.now();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.testResults = [];
        
        this.showQuestionScreen();
        this.displayCurrentQuestion();
        this.startTimer();
        this.updateNavigation();
    }
    
    showQuestionScreen() {
        this.showScreen('question');
    }
    
    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        this.questionNumber.textContent = `문제 ${this.currentQuestionIndex + 1}`;
        this.questionCategory.textContent = question.category;
        this.questionDifficulty.textContent = question.difficulty;
        this.questionTitle.textContent = question.title;
        this.questionText.textContent = question.text;
        this.questionDescription.textContent = question.description;
        
        // 요구사항 표시
        this.requirementsList.innerHTML = '';
        question.requirements.forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            this.requirementsList.appendChild(li);
        });
        
        // 코드 에디터 설정
        const savedCode = this.userAnswers[this.currentQuestionIndex];
        this.codeEditor.value = savedCode || question.starterCode;
        
        // 성능 정보 표시
        this.timeComplexity.textContent = question.timeComplexity;
        this.spaceComplexity.textContent = question.spaceComplexity;
        
        // 테스트 상태 초기화
        this.passedTests.textContent = '0';
        this.totalTests.textContent = question.testCases.length;
        this.consoleOutput.innerHTML = '<div class="console-placeholder">코드를 실행하면 결과가 여기에 표시됩니다.</div>';
        this.testResults.innerHTML = '';
        
        // 힌트 패널 숨기기
        this.hideHints();
        
        // 문제별 타이머 시작
        this.questionTimeRemaining = question.timeLimit * 60; // 분을 초로 변환
        this.startQuestionTimer();
        
        // 진행률 업데이트
        this.updateProgress();
        
        // 네비게이션 업데이트
        this.updateNavigation();
    }
    
    runCode() {
        const question = this.questions[this.currentQuestionIndex];
        const code = this.codeEditor.value;
        
        // 콘솔 출력 초기화
        this.consoleOutput.innerHTML = '';
        this.testResults.innerHTML = '';
        
        try {
            // 테스트 케이스 실행
            const results = this.runTestCases(question, code);
            
            // 결과 표시
            this.updateTestResults(question, results);
            
            // 사용자 답안 저장
            this.saveUserAnswer(question, code, results);
            
        } catch (error) {
            this.addToConsole(`에러: ${error.message}`, 'error');
        }
    }
    
    runTestCases(question, code) {
        const results = [];
        let passedCount = 0;
        
        for (let i = 0; i < question.testCases.length; i++) {
            const testCase = question.testCases[i];
            let result = {
                index: i + 1,
                passed: false,
                input: testCase.input,
                expected: testCase.expected,
                actual: null,
                error: null
            };
            
            try {
                // 커스텀 테스트 케이스 처리
                if (testCase.customCheck) {
                    result = this.runCustomTestCase(question, code, testCase, i);
                } else {
                    // 일반 테스트 케이스 실행
                    const functionName = this.extractFunctionName(code) || this.extractClassName(code);
                    if (!functionName) {
                        throw new Error('함수 또는 클래스 이름을 찾을 수 없습니다.');
                    }
                    
                    const userFunction = new Function('', code + `\nreturn ${functionName};`);
                    const fn = userFunction();
                    
                    if (typeof fn === 'function') {
                        result.actual = fn.apply(null, testCase.input);
                    } else {
                        // 클래스인 경우
                        result.actual = this.testClass(fn, testCase);
                    }
                    
                    result.passed = this.deepEqual(result.actual, testCase.expected);
                }
                
                if (result.passed) {
                    passedCount++;
                }
                
            } catch (error) {
                result.error = error.message;
                result.passed = false;
            }
            
            results.push(result);
        }
        
        // 통과한 테스트 수 업데이트
        this.passedTests.textContent = passedCount;
        
        return results;
    }
    
    runCustomTestCase(question, code, testCase, index) {
        const result = {
            index: index + 1,
            passed: false,
            input: testCase.input,
            expected: testCase.expected,
            actual: null,
            error: null
        };
        
        try {
            switch (question.id) {
                case 1: // LRU Cache
                    result.actual = this.testLRUCache(code, testCase.input);
                    result.passed = this.deepEqual(result.actual, testCase.expected);
                    break;
                case 3: // Curry
                    result.actual = this.testCurry(code, testCase.input);
                    result.passed = this.deepEqual(result.actual, testCase.expected);
                    break;
                case 4: // Observer Pattern
                    result.actual = this.testObserverPattern(code);
                    result.passed = result.actual === 'pattern_test';
                    break;
                case 5: // Promise Scheduler
                    result.actual = this.testPromiseScheduler(code, testCase.input);
                    result.passed = result.actual === 'scheduler_test';
                    break;
                case 6: // AVL Tree
                    result.actual = this.testAVLTree(code, testCase.input);
                    result.passed = result.actual === 'avl_test';
                    break;
                case 10: // Memoization
                    result.actual = this.testMemoization(code, testCase.input);
                    result.passed = result.actual === testCase.expected;
                    break;
                case 11: // Pipeline
                    result.actual = this.testPipeline(code, testCase.input);
                    result.passed = result.actual === testCase.expected;
                    break;
                case 12: // Virtual DOM
                    result.actual = this.testVirtualDOM(code);
                    result.passed = result.actual === 'vdom_test';
                    break;
                case 13: // Event Bus
                    result.actual = this.testEventBus(code);
                    result.passed = result.actual === 'eventbus_test';
                    break;
                case 14: // Trie
                    result.actual = this.testTrie(code, testCase.input);
                    result.passed = this.deepEqual(result.actual, testCase.expected);
                    break;
                case 15: // Task Scheduler
                    result.actual = this.testTaskScheduler(code);
                    result.passed = result.actual === 'scheduler_test';
                    break;
                default:
                    throw new Error('지원하지 않는 커스텀 테스트 케이스입니다.');
            }
        } catch (error) {
            result.error = error.message;
            result.passed = false;
        }
        
        return result;
    }
    
    // 커스텀 테스트 케이스 구현 메소드들
    testLRUCache(code, input) {
        const createCache = new Function('', code + '\nreturn LRUCache;');
        const LRUCache = createCache();
        const cache = new LRUCache(input[0]);
        const results = [];
        
        for (let i = 1; i < input.length; i++) {
            const [operation, key, value] = input[i];
            if (operation === 'put') {
                results.push(cache.put(key, value));
            } else if (operation === 'get') {
                results.push(cache.get(key));
            }
        }
        
        return results;
    }
    
    testCurry(code, input) {
        const createCurry = new Function('', code + '\nreturn curry;');
        const curry = createCurry();
        const [fn, args] = input;
        
        const curriedFn = curry(fn);
        let result = curriedFn;
        
        for (const arg of args) {
            result = result(arg);
        }
        
        return result;
    }
    
    testObserverPattern(code) {
        try {
            const createClasses = new Function('', code + '\nreturn { Subject, Observer };');
            const { Subject, Observer } = createClasses();
            
            const subject = new Subject();
            const observer1 = new Observer('Observer1');
            const observer2 = new Observer('Observer2');
            
            subject.attach(observer1);
            subject.attach(observer2, 'test');
            
            subject.notify('default', 'Hello');
            subject.notify('test', 'World');
            
            return 'pattern_test';
        } catch (error) {
            throw error;
        }
    }
    
    testPromiseScheduler(code, input) {
        try {
            const createScheduler = new Function('', code + '\nreturn PromiseScheduler;');
            const PromiseScheduler = createScheduler();
            
            const scheduler = new PromiseScheduler(input[0]);
            
            // 테스트 작업들 추가
            for (let i = 0; i < input[1]; i++) {
                scheduler.add(() => new Promise(resolve => {
                    setTimeout(() => resolve(i), 100);
                }));
            }
            
            return 'scheduler_test';
        } catch (error) {
            throw error;
        }
    }
    
    testAVLTree(code, input) {
        try {
            const createTree = new Function('', code + '\nreturn AVLTree;');
            const AVLTree = createTree();
            
            const tree = new AVLTree();
            
            for (const val of input[0]) {
                tree.insert(val);
            }
            
            return 'avl_test';
        } catch (error) {
            throw error;
        }
    }
    
    testMemoization(code, input) {
        try {
            const createMemoize = new Function('', code + '\nreturn memoize;');
            const memoize = createMemoize();
            
            const fib = function(n) {
                if (n <= 1) return n;
                return fib(n - 1) + fib(n - 2);
            };
            
            const memoizedFib = memoize(fib);
            return memoizedFib(input[1]);
        } catch (error) {
            throw error;
        }
    }
    
    testPipeline(code, input) {
        try {
            const createPipe = new Function('', code + '\nreturn pipe;');
            const pipe = createPipe();
            
            const add = (x) => x + 1;
            const multiply = (x) => x * 2;
            const square = (x) => x * x;
            
            const pipeline = pipe(add, multiply, square);
            return pipeline(input[0]);
        } catch (error) {
            throw error;
        }
    }
    
    testVirtualDOM(code) {
        try {
            const createVDOM = new Function('', code + '\nreturn { createElement, render, diff, patch };');
            const { createElement, render, diff, patch } = createVDOM();
            
            const vnode = createElement('div', { id: 'test' }, 'Hello World');
            return 'vdom_test';
        } catch (error) {
            throw error;
        }
    }
    
    testEventBus(code) {
        try {
            const createEventBus = new Function('', code + '\nreturn EventBus;');
            const EventBus = createEventBus();
            
            const bus = new EventBus();
            let result = '';
            
            bus.on('test', (data) => {
                result += data;
            });
            
            bus.emit('test', 'eventbus_test');
            
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    testTrie(code, input) {
        try {
            const createTrie = new Function('', code + '\nreturn Trie;');
            const Trie = createTrie();
            
            const trie = new Trie();
            const [words, testWords] = input;
            
            // 단어 삽입
            for (const word of words) {
                trie.insert(word);
            }
            
            // 테스트 수행
            const searchResults = testWords.map(word => trie.search(word));
            const startsWithResults = testWords.map(word => trie.startsWith(word));
            const autocompleteResults = testWords.map(word => trie.autocomplete(word));
            
            return {
                search: searchResults,
                startsWith: startsWithResults,
                autocomplete: autocompleteResults
            };
        } catch (error) {
            throw error;
        }
    }
    
    testTaskScheduler(code) {
        try {
            const createScheduler = new Function('', code + '\nreturn TaskScheduler;');
            const TaskScheduler = createScheduler();
            
            const scheduler = new TaskScheduler(2);
            
            scheduler.addTask(() => new Promise(resolve => {
                setTimeout(() => resolve('task1'), 100);
            }), 1);
            
            scheduler.addTask(() => new Promise(resolve => {
                setTimeout(() => resolve('task2'), 50);
            }), 2);
            
            return 'scheduler_test';
        } catch (error) {
            throw error;
        }
    }
    
    extractFunctionName(code) {
        // 함수 선언식
        const functionDeclaration = /function\s+(\w+)\s*\(/;
        let match = code.match(functionDeclaration);
        if (match) return match[1];
        
        // 화살표 함수
        const arrowFunction = /(?:const|let|var)\s+(\w+)\s*=\s*(?:\([^)]*\)|[^=])*=>/;
        match = code.match(arrowFunction);
        if (match) return match[1];
        
        // 함수 표현식
        const functionExpression = /(?:const|let|var)\s+(\w+)\s*=\s*function/;
        match = code.match(functionExpression);
        if (match) return match[1];
        
        return null;
    }
    
    extractClassName(code) {
        const classDeclaration = /class\s+(\w+)/;
        const match = code.match(classDeclaration);
        return match ? match[1] : null;
    }
    
    testClass(ClassConstructor, testCase) {
        const instance = new ClassConstructor(...testCase.input);
        // 클래스 테스트 로직 구현
        return instance;
    }
    
    deepEqual(obj1, obj2) {
        if (obj1 === obj2) return true;
        
        if (obj1 == null || obj2 == null) return false;
        
        if (typeof obj1 !== typeof obj2) return false;
        
        if (typeof obj1 !== 'object') return obj1 === obj2;
        
        if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
        
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        
        if (keys1.length !== keys2.length) return false;
        
        for (let key of keys1) {
            if (!keys2.includes(key)) return false;
            if (!this.deepEqual(obj1[key], obj2[key])) return false;
        }
        
        return true;
    }
    
    updateTestResults(question, results) {
        this.testResults.innerHTML = '';
        
        if (results.length === 0) {
            this.testResults.innerHTML = '<div class="no-results">테스트 결과가 없습니다.</div>';
            return;
        }
        
        results.forEach(result => {
            const testCase = document.createElement('div');
            testCase.className = `test-case ${result.passed ? 'test-pass' : 'test-fail'}`;
            
            const header = document.createElement('div');
            header.className = 'test-case-header';
            header.innerHTML = `
                <span>테스트 케이스 ${result.index}</span>
                <span>${result.passed ? '✓ 통과' : '✗ 실패'}</span>
            `;
            
            const details = document.createElement('div');
            details.className = 'test-case-details';
            
            if (result.error) {
                details.innerHTML = `
                    <div><strong>에러:</strong> ${result.error}</div>
                `;
            } else {
                details.innerHTML = `
                    <div><strong>입력:</strong> ${JSON.stringify(result.input)}</div>
                    <div><strong>예상 출력:</strong> ${JSON.stringify(result.expected)}</div>
                    <div><strong>실제 출력:</strong> ${JSON.stringify(result.actual)}</div>
                `;
            }
            
            testCase.appendChild(header);
            testCase.appendChild(details);
            this.testResults.appendChild(testCase);
        });
    }
    
    addToConsole(message, type = 'info') {
        const entry = document.createElement('div');
        entry.className = `console-entry console-${type}`;
        entry.textContent = message;
        this.consoleOutput.appendChild(entry);
        this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
    }
    
    saveUserAnswer(question, code, results) {
        const passedTests = results.filter(r => r.passed).length;
        const totalTests = results.length;
        const score = Math.round((passedTests / totalTests) * 100);
        
        this.userAnswers[this.currentQuestionIndex] = {
            questionId: question.id,
            code: code,
            results: results,
            score: score,
            timestamp: Date.now()
        };
    }
    
    showHints() {
        const question = this.questions[this.currentQuestionIndex];
        
        this.hintContent.innerHTML = '';
        question.hints.forEach((hint, index) => {
            const hintItem = document.createElement('div');
            hintItem.className = 'hint-item';
            hintItem.innerHTML = `<strong>힌트 ${index + 1}:</strong> ${hint}`;
            this.hintContent.appendChild(hintItem);
        });
        
        this.hintPanel.style.display = 'block';
    }
    
    hideHints() {
        this.hintPanel.style.display = 'none';
    }
    
    showOptimization() {
        const question = this.questions[this.currentQuestionIndex];
        
        this.addToConsole('최적화 가이드:', 'info');
        this.addToConsole(`목표 시간 복잡도: ${question.timeComplexity}`, 'info');
        this.addToConsole(`목표 공간 복잡도: ${question.spaceComplexity}`, 'info');
        this.addToConsole('현재 구현을 검토하고 더 효율적인 방법을 고려해보세요.', 'info');
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
        }
    }
    
    updateNavigation() {
        this.questionCounter.textContent = `문제 ${this.currentQuestionIndex + 1}/${this.questions.length}`;
        
        this.prevBtn.disabled = this.currentQuestionIndex === 0 || !this.isTestActive;
        this.nextBtn.disabled = this.currentQuestionIndex === this.questions.length - 1 || !this.isTestActive;
        
        const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
        this.submitBtn.disabled = !this.isTestActive;
        this.submitBtn.style.display = isLastQuestion && this.isTestActive ? 'inline-block' : 'none';
        this.nextBtn.style.display = isLastQuestion ? 'none' : 'inline-block';
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submitTest();
            }
        }, 1000);
    }
    
    startQuestionTimer() {
        if (this.questionTimer) {
            clearInterval(this.questionTimer);
        }
        
        this.questionTimer = setInterval(() => {
            this.questionTimeRemaining--;
            this.updateQuestionTimerDisplay();
            
            if (this.questionTimeRemaining <= 0) {
                this.addToConsole('시간 초과! 다음 문제로 이동합니다.', 'error');
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.nextQuestion();
                } else {
                    this.submitTest();
                }
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const hours = Math.floor(this.timeRemaining / 3600);
        const minutes = Math.floor((this.timeRemaining % 3600) / 60);
        const seconds = this.timeRemaining % 60;
        
        this.timerDisplay.textContent = `⏱️ ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    updateQuestionTimerDisplay() {
        const minutes = Math.floor(this.questionTimeRemaining / 60);
        const seconds = this.questionTimeRemaining % 60;
        
        this.questionTimerDisplay.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    submitTest() {
        this.isTestActive = false;
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        if (this.questionTimer) {
            clearInterval(this.questionTimer);
        }
        
        this.calculateFinalScore();
        this.showResults();
    }
    
    calculateFinalScore() {
        let totalScore = 0;
        let answeredQuestions = 0;
        
        for (let i = 0; i < this.questions.length; i++) {
            const answer = this.userAnswers[i];
            if (answer) {
                totalScore += answer.score;
                answeredQuestions++;
            }
        }
        
        this.score = answeredQuestions > 0 ? Math.round(totalScore / answeredQuestions) : 0;
    }
    
    showResults() {
        this.showScreen('result');
        
        const endTime = Date.now();
        const totalTimeSeconds = Math.floor((endTime - this.startTime) / 1000);
        
        // 최종 점수 표시
        this.finalScore.querySelector('.score-number').textContent = this.score;
        
        // 정답률 계산
        const answeredCount = this.userAnswers.filter(a => a).length;
        const accuracyRate = answeredCount > 0 ? Math.round((answeredCount / this.questions.length) * 100) : 0;
        this.accuracyRate.textContent = `${accuracyRate}%`;
        
        // 소요 시간 표시
        const hours = Math.floor(totalTimeSeconds / 3600);
        const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
        const seconds = totalTimeSeconds % 60;
        this.totalTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // 카테고리별 결과 표시
        this.displayCategoryResults();
    }
    
    displayCategoryResults() {
        const categories = {};
        
        this.questions.forEach((question, index) => {
            const category = question.category;
            if (!categories[category]) {
                categories[category] = { total: 0, correct: 0 };
            }
            
            categories[category].total++;
            
            const answer = this.userAnswers[index];
            if (answer && answer.score >= 70) { // 70% 이상을 정답으로 간주
                categories[category].correct++;
            }
        });
        
        this.categoryResults.innerHTML = '';
        
        Object.entries(categories).forEach(([category, data]) => {
            const percentage = Math.round((data.correct / data.total) * 100);
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-result';
            categoryDiv.innerHTML = `
                <div class="category-name">${category}</div>
                <div class="category-score">
                    <span>${data.correct}/${data.total}</span>
                    <span class="category-percentage">${percentage}%</span>
                </div>
                <div class="category-bar">
                    <div class="category-fill" style="width: ${percentage}%"></div>
                </div>
            `;
            
            this.categoryResults.appendChild(categoryDiv);
        });
    }
    
    showReview() {
        this.showScreen('review');
        
        this.reviewContent.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const answer = this.userAnswers[index];
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'review-question';
            questionDiv.innerHTML = `
                <h4>문제 ${index + 1}: ${question.title}</h4>
                <p><strong>카테고리:</strong> ${question.category}</p>
                <p><strong>설명:</strong> ${question.description}</p>
                <h5>요구사항:</h5>
                <ul>
                    ${question.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            `;
            
            const answerDiv = document.createElement('div');
            answerDiv.className = 'review-answer';
            
            if (answer) {
                answerDiv.innerHTML = `
                    <div><strong>점수:</strong> ${answer.score}/100</div>
                    <div><strong>제출한 코드:</strong></div>
                    <pre><code>${answer.code}</code></pre>
                    <div><strong>힌트:</strong></div>
                    <ul>
                        ${question.hints.map(hint => `<li>${hint}</li>`).join('')}
                    </ul>
                `;
            } else {
                answerDiv.innerHTML = `
                    <div class="no-answer">답안이 제출되지 않았습니다.</div>
                    <div><strong>힌트:</strong></div>
                    <ul>
                        ${question.hints.map(hint => `<li>${hint}</li>`).join('')}
                    </ul>
                `;
            }
            
            reviewItem.appendChild(questionDiv);
            reviewItem.appendChild(answerDiv);
            this.reviewContent.appendChild(reviewItem);
        });
    }
    
    hideReview() {
        this.showScreen('result');
    }
    
    restartTest() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeRemaining = 3600;
        this.questionTimeRemaining = 0;
        this.isTestActive = false;
        this.startTime = null;
        this.userAnswers = [];
        this.testResults = [];
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        if (this.questionTimer) {
            clearInterval(this.questionTimer);
            this.questionTimer = null;
        }
        
        this.showStartScreen();
    }
    
    showScreen(screenName) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(`${screenName}-screen`).classList.add('active');
    }
    
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }
}

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedJavaScriptTest();
});