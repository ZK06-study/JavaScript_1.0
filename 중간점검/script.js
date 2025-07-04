class JavaScriptMidtermTest {
    constructor() {
        this.questions = [
            {
                id: 1,
                category: '배열 조작',
                title: '중복 제거 함수',
                text: '배열에서 중복된 요소를 제거하는 함수를 작성하세요.',
                description: '주어진 배열에서 중복된 요소를 제거하고 순서를 유지한 새 배열을 반환하는 함수를 구현하세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 10,
                starterCode: `function removeDuplicates(arr) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
                    { input: [['a', 'b', 'a', 'c', 'b']], expected: ['a', 'b', 'c'] },
                    { input: [[]], expected: [] },
                    { input: [[1, 1, 1]], expected: [1] },
                    { input: [[1, 2, 3]], expected: [1, 2, 3] }
                ],
                hints: [
                    'Set 자료구조를 활용해보세요',
                    '배열의 indexOf 메소드를 사용할 수도 있습니다',
                    'filter 메소드와 indexOf를 조합해보세요'
                ]
            },
            {
                id: 2,
                category: '문자열 처리',
                title: '회문 검사',
                text: '주어진 문자열이 회문(palindrome)인지 확인하는 함수를 작성하세요.',
                description: '대소문자를 구분하지 않고, 공백과 특수문자는 무시하여 회문 여부를 판단하세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 8,
                starterCode: `function isPalindrome(str) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: ['racecar'], expected: true },
                    { input: ['A man a plan a canal Panama'], expected: true },
                    { input: ['race a car'], expected: false },
                    { input: ['hello'], expected: false },
                    { input: ['Madam'], expected: true }
                ],
                hints: [
                    '문자열을 정제(소문자 변환, 특수문자 제거)해보세요',
                    'split, reverse, join 메소드를 활용해보세요',
                    '정규표현식 /[^a-zA-Z0-9]/g를 사용할 수 있습니다'
                ]
            },
            {
                id: 3,
                category: '객체 조작',
                title: '객체 깊은 복사',
                text: '중첩된 객체를 깊은 복사(deep copy)하는 함수를 작성하세요.',
                description: '객체 내부에 다른 객체나 배열이 있어도 완전히 독립적인 복사본을 만드세요.',
                type: 'coding',
                difficulty: '중상',
                timeLimit: 15,
                starterCode: `function deepCopy(obj) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { 
                        input: [{ a: 1, b: { c: 2 } }], 
                        expected: { a: 1, b: { c: 2 } },
                        customCheck: true 
                    },
                    { 
                        input: [{ arr: [1, 2, { x: 3 }] }], 
                        expected: { arr: [1, 2, { x: 3 }] },
                        customCheck: true 
                    },
                    { input: [null], expected: null },
                    { input: [42], expected: 42 },
                    { input: ['hello'], expected: 'hello' }
                ],
                hints: [
                    'typeof 연산자로 타입을 확인하세요',
                    '재귀 함수를 사용해보세요',
                    'Array.isArray()로 배열인지 확인할 수 있습니다'
                ]
            },
            {
                id: 4,
                category: '함수형 프로그래밍',
                title: '함수 조합',
                text: '여러 함수를 조합하는 compose 함수를 작성하세요.',
                description: 'compose(f, g, h)(x)가 f(g(h(x)))와 같이 동작하도록 구현하세요.',
                type: 'coding',
                difficulty: '중상',
                timeLimit: 12,
                starterCode: `function compose(...functions) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { 
                        input: 'custom',
                        test: `
                            const add5 = x => x + 5;
                            const multiply2 = x => x * 2;
                            const composed = compose(multiply2, add5);
                            return composed(3) === 16; // (3 + 5) * 2
                        `
                    },
                    { 
                        input: 'custom',
                        test: `
                            const square = x => x * x;
                            const add1 = x => x + 1;
                            const composed = compose(square, add1);
                            return composed(4) === 25; // (4 + 1)^2
                        `
                    }
                ],
                hints: [
                    'reduceRight 메소드를 사용해보세요',
                    '함수를 반환하는 함수를 만들어야 합니다',
                    '스프레드 연산자(...)를 활용하세요'
                ]
            },
            {
                id: 5,
                category: '배열 알고리즘',
                title: '배열 회전',
                text: '배열을 오른쪽으로 k번 회전시키는 함수를 작성하세요.',
                description: '원본 배열을 수정하지 않고 새로운 배열을 반환해야 합니다.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 10,
                starterCode: `function rotateArray(arr, k) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
                    { input: [['a', 'b', 'c'], 1], expected: ['c', 'a', 'b'] },
                    { input: [[1, 2], 3], expected: [2, 1] },
                    { input: [[], 5], expected: [] },
                    { input: [[1, 2, 3], 0], expected: [1, 2, 3] }
                ],
                hints: [
                    'k가 배열 길이보다 클 수 있습니다 (% 연산자 활용)',
                    'slice 메소드를 두 번 사용해보세요',
                    'concat이나 스프레드 연산자로 배열을 합칠 수 있습니다'
                ]
            },
            {
                id: 6,
                category: '객체 처리',
                title: '객체 평탄화',
                text: '중첩된 객체를 평탄화(flatten)하는 함수를 작성하세요.',
                description: '점 표기법을 사용하여 중첩된 속성을 평탄한 구조로 변환하세요.',
                type: 'coding',
                difficulty: '중상',
                timeLimit: 15,
                starterCode: `function flattenObject(obj, prefix = '') {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { 
                        input: [{ a: 1, b: { c: 2, d: 3 } }], 
                        expected: { 'a': 1, 'b.c': 2, 'b.d': 3 } 
                    },
                    { 
                        input: [{ user: { name: 'Kim', age: 25, address: { city: 'Seoul' } } }], 
                        expected: { 'user.name': 'Kim', 'user.age': 25, 'user.address.city': 'Seoul' } 
                    },
                    { input: [{ x: 1 }], expected: { 'x': 1 } },
                    { input: [{}], expected: {} }
                ],
                hints: [
                    '재귀 함수를 사용하세요',
                    'Object.keys()로 객체의 키를 순회하세요',
                    'typeof obj[key] === "object"로 중첩 객체를 확인하세요'
                ]
            },
            {
                id: 7,
                category: '문자열 알고리즘',
                title: '문자 빈도 계산',
                text: '문자열에서 각 문자의 빈도를 계산하는 함수를 작성하세요.',
                description: '대소문자를 구분하고, 공백은 무시하며, 결과를 빈도 순으로 정렬하세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 12,
                starterCode: `function characterFrequency(str) {
    // 여기에 코드를 작성하세요
    // 결과 형태: [['a', 3], ['b', 2], ['c', 1]]
    
}`,
                testCases: [
                    { input: ['hello'], expected: [['l', 2], ['h', 1], ['e', 1], ['o', 1]] },
                    { input: ['javascript'], expected: [['a', 2], ['j', 1], ['v', 1], ['s', 1], ['c', 1], ['r', 1], ['i', 1], ['p', 1], ['t', 1]] },
                    { input: ['aaa'], expected: [['a', 3]] },
                    { input: [''], expected: [] }
                ],
                hints: [
                    'Object나 Map을 사용하여 빈도를 저장하세요',
                    'Object.entries()로 객체를 배열로 변환할 수 있습니다',
                    'sort() 메소드로 빈도 순으로 정렬하세요'
                ]
            },
            {
                id: 8,
                category: '자료구조',
                title: '스택 구현',
                text: '배열을 사용하여 스택(Stack) 자료구조를 구현하세요.',
                description: 'push, pop, peek, isEmpty, size 메소드를 가진 Stack 클래스를 만드세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 15,
                starterCode: `class Stack {
    constructor() {
        // 여기에 코드를 작성하세요
    }
    
    push(item) {
        // 여기에 코드를 작성하세요
    }
    
    pop() {
        // 여기에 코드를 작성하세요
    }
    
    peek() {
        // 여기에 코드를 작성하세요
    }
    
    isEmpty() {
        // 여기에 코드를 작성하세요
    }
    
    size() {
        // 여기에 코드를 작성하세요
    }
}`,
                testCases: [
                    {
                        input: 'custom',
                        test: `
                            const stack = new Stack();
                            stack.push(1);
                            stack.push(2);
                            return stack.peek() === 2 && stack.size() === 2;
                        `
                    },
                    {
                        input: 'custom',
                        test: `
                            const stack = new Stack();
                            stack.push(1);
                            const popped = stack.pop();
                            return popped === 1 && stack.isEmpty();
                        `
                    }
                ],
                hints: [
                    '내부적으로 배열을 사용하세요',
                    'push()는 배열의 끝에 추가, pop()은 배열의 끝에서 제거',
                    'peek()은 마지막 요소를 제거하지 않고 반환'
                ]
            },
            {
                id: 9,
                category: '비동기 처리',
                title: 'Promise 체이닝',
                text: '여러 비동기 작업을 순차적으로 실행하는 함수를 작성하세요.',
                description: '주어진 함수들을 순서대로 실행하고, 각 함수의 결과를 다음 함수에 전달하세요.',
                type: 'coding',
                difficulty: '중상',
                timeLimit: 18,
                starterCode: `function sequentialExecution(tasks, initialValue) {
    // 여기에 코드를 작성하세요
    // tasks: Promise를 반환하는 함수들의 배열
    // initialValue: 첫 번째 함수에 전달할 초기값
    
}`,
                testCases: [
                    {
                        input: 'custom',
                        test: `
                            const add = (x) => Promise.resolve(x + 1);
                            const multiply = (x) => Promise.resolve(x * 2);
                            return sequentialExecution([add, multiply], 5)
                                .then(result => result === 12); // (5 + 1) * 2
                        `
                    }
                ],
                hints: [
                    'reduce 메소드를 Promise와 함께 사용해보세요',
                    'Promise.resolve()로 초기값을 Promise로 감싸세요',
                    'then() 메소드를 체이닝하세요'
                ]
            },
            {
                id: 10,
                category: '알고리즘',
                title: '최빈값 찾기',
                text: '배열에서 가장 자주 나타나는 요소(최빈값)를 찾는 함수를 작성하세요.',
                description: '동일한 빈도의 요소가 여러 개 있으면 가장 먼저 나타나는 것을 반환하세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 12,
                starterCode: `function findMode(arr) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: [[1, 2, 2, 3, 3, 3]], expected: 3 },
                    { input: [['a', 'b', 'a', 'c', 'b', 'a']], expected: 'a' },
                    { input: [[1, 1, 2, 2]], expected: 1 },
                    { input: [[5]], expected: 5 },
                    { input: [[]], expected: undefined }
                ],
                hints: [
                    'Map이나 객체로 빈도를 계산하세요',
                    '최대 빈도와 해당 요소를 추적하세요',
                    '첫 번째 등장 순서를 고려하세요'
                ]
            },
            {
                id: 11,
                category: '함수 고급',
                title: '메모이제이션',
                text: '함수의 결과를 캐싱하는 메모이제이션을 구현하세요.',
                description: '주어진 함수를 래핑하여 같은 인자로 호출될 때 캐시된 결과를 반환하도록 하세요.',
                type: 'coding',
                difficulty: '중상',
                timeLimit: 15,
                starterCode: `function memoize(fn) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    {
                        input: 'custom',
                        test: `
                            let callCount = 0;
                            const expensiveFunction = (n) => {
                                callCount++;
                                return n * n;
                            };
                            const memoized = memoize(expensiveFunction);
                            memoized(5);
                            memoized(5);
                            return callCount === 1; // 두 번째 호출은 캐시 사용
                        `
                    }
                ],
                hints: [
                    'Map이나 객체로 캐시를 구현하세요',
                    '함수를 반환하는 함수를 만드세요',
                    'JSON.stringify()로 인자를 문자열 키로 변환할 수 있습니다'
                ]
            },
            {
                id: 12,
                category: '배열 고급',
                title: '배열 청크',
                text: '배열을 지정된 크기로 나누는 함수를 작성하세요.',
                description: '큰 배열을 작은 배열들로 분할하여 2차원 배열로 반환하세요.',
                type: 'coding',
                difficulty: '중',
                timeLimit: 10,
                starterCode: `function chunkArray(arr, size) {
    // 여기에 코드를 작성하세요
    
}`,
                testCases: [
                    { input: [[1, 2, 3, 4, 5, 6], 2], expected: [[1, 2], [3, 4], [5, 6]] },
                    { input: [[1, 2, 3, 4, 5], 3], expected: [[1, 2, 3], [4, 5]] },
                    { input: [[], 2], expected: [] },
                    { input: [[1, 2], 5], expected: [[1, 2]] },
                    { input: [[1, 2, 3, 4], 1], expected: [[1], [2], [3], [4]] }
                ],
                hints: [
                    'for 루프로 배열을 순회하며 size만큼 잘라내세요',
                    'slice() 메소드를 사용해보세요',
                    '결과를 담을 빈 배열을 만들어두세요'
                ]
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.questionTimers = [];
        this.currentQuestionTimer = null;
        this.testResults = [];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showScreen('start');
    }
    
    bindEvents() {
        document.getElementById('start-test-btn').addEventListener('click', () => this.startTest());
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitTest());
        document.getElementById('review-btn').addEventListener('click', () => this.showReview());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartTest());
        document.getElementById('close-review-btn').addEventListener('click', () => this.closeReview());
        
        // 새로운 이벤트 바인딩
        document.getElementById('run-code-btn').addEventListener('click', () => this.runCode());
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('close-hint-btn').addEventListener('click', () => this.closeHint());
    }
    
    startTest() {
        this.startTime = new Date();
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.currentQuestionIndex = 0;
        this.startTimer();
        this.showQuestion();
        this.showScreen('question');
        this.updateNavigation();
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            const elapsed = new Date() - this.startTime;
            const hours = Math.floor(elapsed / 3600000);
            const minutes = Math.floor((elapsed % 3600000) / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            
            document.getElementById('timer').textContent = 
                `⏱️ ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // 기본 정보 설정
        document.getElementById('question-number').textContent = `문제 ${this.currentQuestionIndex + 1}`;
        document.getElementById('question-category').textContent = question.category;
        document.getElementById('question-difficulty').textContent = question.difficulty;
        document.getElementById('question-title').textContent = question.title;
        document.getElementById('question-text').textContent = question.text;
        document.getElementById('question-description').textContent = question.description;
        
        // 문제별 타이머 시작
        this.startQuestionTimer(question.timeLimit);
        
        // 코드 에디터 설정
        const codeEditor = document.getElementById('code-editor');
        codeEditor.value = this.userAnswers[this.currentQuestionIndex] || question.starterCode;
        
        // 테스트 케이스 정보 설정
        document.getElementById('total-tests').textContent = question.testCases.length;
        document.getElementById('passed-tests').textContent = '0';
        
        // 테스트 결과 초기화
        this.updateTestResults(question, []);
        this.clearConsoleOutput();
        
        // 힌트 패널 숨기기
        document.getElementById('hint-panel').style.display = 'none';
        
        this.updateProgress();
        hljs.highlightAll();
    }
    
    startQuestionTimer(timeLimit) {
        if (this.currentQuestionTimer) {
            clearInterval(this.currentQuestionTimer);
        }
        
        let remainingTime = timeLimit * 60; // 분을 초로 변환
        
        const updateTimer = () => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            document.getElementById('question-timer').textContent = 
                `⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (remainingTime <= 0) {
                clearInterval(this.currentQuestionTimer);
                // 시간 초과 시 다음 문제로 넘어가거나 제출
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.nextQuestion();
                } else {
                    this.submitTest();
                }
            }
            remainingTime--;
        };
        
        updateTimer(); // 즉시 한 번 실행
        this.currentQuestionTimer = setInterval(updateTimer, 1000);
    }
    
    runCode() {
        const question = this.questions[this.currentQuestionIndex];
        const code = document.getElementById('code-editor').value;
        
        // 사용자 답안 저장
        this.userAnswers[this.currentQuestionIndex] = code;
        this.updateNavigation();
        
        this.clearConsoleOutput();
        
        try {
            // 테스트 케이스 실행
            const results = this.runTestCases(question, code);
            this.updateTestResults(question, results);
            
            // 통과한 테스트 수 업데이트
            const passedCount = results.filter(result => result.passed).length;
            document.getElementById('passed-tests').textContent = passedCount;
            
            // 콘솔 출력
            this.addToConsole(`실행 완료: ${passedCount}/${results.length} 테스트 통과`, 'info');
            
        } catch (error) {
            this.addToConsole(`에러: ${error.message}`, 'error');
            this.updateTestResults(question, []);
        }
    }
    
    runTestCases(question, code) {
        const results = [];
        
        for (let i = 0; i < question.testCases.length; i++) {
            const testCase = question.testCases[i];
            
            try {
                let result;
                
                if (testCase.input === 'custom') {
                    // 커스텀 테스트
                    const testFunction = new Function('', code + '\n' + testCase.test);
                    result = testFunction();
                } else {
                    // 일반 테스트
                    const functionName = this.extractFunctionName(code);
                    const userFunction = new Function('', code + `\nreturn ${functionName};`);
                    const fn = userFunction();
                    
                    if (question.title.includes('Stack')) {
                        // 스택 클래스 테스트
                        const testFunction = new Function('Stack', testCase.test);
                        result = testFunction(fn);
                    } else {
                        // 일반 함수 테스트
                        result = fn.apply(null, testCase.input);
                    }
                }
                
                const passed = testCase.customCheck ? 
                    this.deepEqual(result, testCase.expected) : 
                    JSON.stringify(result) === JSON.stringify(testCase.expected);
                
                results.push({
                    input: testCase.input,
                    expected: testCase.expected,
                    actual: result,
                    passed: passed,
                    error: null
                });
                
            } catch (error) {
                results.push({
                    input: testCase.input,
                    expected: testCase.expected,
                    actual: null,
                    passed: false,
                    error: error.message
                });
            }
        }
        
        return results;
    }
    
    deepEqual(obj1, obj2) {
        if (obj1 === obj2) return true;
        
        if (obj1 == null || obj2 == null) return obj1 === obj2;
        
        if (typeof obj1 !== typeof obj2) return false;
        
        if (typeof obj1 !== 'object') return obj1 === obj2;
        
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
        const container = document.getElementById('test-results');
        
        if (results.length === 0) {
            container.innerHTML = '<div class="no-results">코드를 실행하여 테스트 결과를 확인하세요.</div>';
            return;
        }
        
        container.innerHTML = results.map((result, index) => {
            const statusClass = result.passed ? 'test-pass' : 'test-fail';
            const statusIcon = result.passed ? '✅' : '❌';
            
            return `
                <div class="test-case ${statusClass}">
                    <div class="test-case-header">
                        <span class="test-number">${statusIcon} 테스트 ${index + 1}</span>
                        <span class="test-status">${result.passed ? '통과' : '실패'}</span>
                    </div>
                    <div class="test-case-details">
                        <div class="test-input">
                            <strong>입력:</strong> ${result.input === 'custom' ? '커스텀 테스트' : JSON.stringify(result.input)}
                        </div>
                        <div class="test-expected">
                            <strong>예상 결과:</strong> ${JSON.stringify(result.expected)}
                        </div>
                        <div class="test-actual">
                            <strong>실제 결과:</strong> ${result.error ? `에러: ${result.error}` : JSON.stringify(result.actual)}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    clearConsoleOutput() {
        const console = document.getElementById('console-output');
        console.innerHTML = '<div class="console-placeholder">코드를 실행하면 결과가 여기에 표시됩니다.</div>';
    }
    
    addToConsole(message, type = 'log') {
        const console = document.getElementById('console-output');
        const placeholder = console.querySelector('.console-placeholder');
        if (placeholder) {
            console.removeChild(placeholder);
        }
        
        const logEntry = document.createElement('div');
        logEntry.className = `console-entry console-${type}`;
        logEntry.textContent = message;
        console.appendChild(logEntry);
        
        // 자동 스크롤
        console.scrollTop = console.scrollHeight;
    }
    
    showHint() {
        const question = this.questions[this.currentQuestionIndex];
        const hintPanel = document.getElementById('hint-panel');
        const hintContent = document.getElementById('hint-content');
        
        hintContent.innerHTML = question.hints.map((hint, index) => 
            `<div class="hint-item">
                <strong>힌트 ${index + 1}:</strong> ${hint}
            </div>`
        ).join('');
        
        hintPanel.style.display = 'block';
    }
    
    closeHint() {
        document.getElementById('hint-panel').style.display = 'none';
    }
    
    extractFunctionName(code) {
        // 함수 이름 추출 (function 키워드 또는 const/let 함수 선언)
        const functionMatch = code.match(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
        if (functionMatch) {
            return functionMatch[1];
        }
        
        const constMatch = code.match(/(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/);
        if (constMatch) {
            return constMatch[1];
        }
        
        const classMatch = code.match(/class\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
        if (classMatch) {
            return classMatch[1];
        }
        
        return 'userFunction'; // 기본값
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = 
            `문제 ${this.currentQuestionIndex + 1}/${this.questions.length}`;
    }
    
    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // 코딩 문제는 코드가 있으면 답안이 있는 것으로 간주
        const hasAnswer = this.userAnswers[this.currentQuestionIndex] !== null && 
                         this.userAnswers[this.currentQuestionIndex] !== '' &&
                         this.userAnswers[this.currentQuestionIndex] !== this.questions[this.currentQuestionIndex].starterCode;
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
            submitBtn.disabled = !hasAnswer;
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
            nextBtn.disabled = !hasAnswer;
        }
    }
    
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
            this.updateNavigation();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
            this.updateNavigation();
        }
    }
    
    submitTest() {
        this.endTime = new Date();
        clearInterval(this.timer);
        this.calculateResults();
        this.showResults();
        this.showScreen('result');
    }
    
    calculateResults() {
        let totalScore = 0;
        const categoryResults = {};
        
        this.questions.forEach((question, index) => {
            const category = question.category;
            if (!categoryResults[category]) {
                categoryResults[category] = { score: 0, total: 0, maxScore: 0 };
            }
            
            // 각 문제는 테스트 케이스 통과율에 따라 점수 계산
            const maxPossibleScore = 100 / this.questions.length; // 각 문제당 최대 점수
            categoryResults[category].maxScore += maxPossibleScore;
            categoryResults[category].total++;
            
            let questionScore = 0;
            
            if (this.userAnswers[index] && this.userAnswers[index] !== question.starterCode) {
                try {
                    const results = this.runTestCases(question, this.userAnswers[index]);
                    const passedTests = results.filter(r => r.passed).length;
                    questionScore = (passedTests / results.length) * maxPossibleScore;
                } catch (error) {
                    questionScore = 0;
                }
            }
            
            totalScore += questionScore;
            categoryResults[category].score += questionScore;
        });
        
        this.results = {
            totalScore: Math.round(totalScore),
            categoryResults,
            duration: this.endTime - this.startTime
        };
    }
    
    showResults() {
        const { totalScore, categoryResults, duration } = this.results;
        
        document.getElementById('final-score').querySelector('.score-number').textContent = totalScore;
        document.getElementById('accuracy-rate').textContent = `${totalScore}%`;
        
        const hours = Math.floor(duration / 3600000);
        const minutes = Math.floor((duration % 3600000) / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        document.getElementById('total-time').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('total-questions').textContent = this.questions.length;
        
        const categoryContainer = document.getElementById('category-results');
        categoryContainer.innerHTML = Object.entries(categoryResults)
            .map(([category, result]) => {
                const percentage = Math.round((result.score / result.maxScore) * 100);
                return `
                    <div class="category-result">
                        <div class="category-name">${category}</div>
                        <div class="category-score">
                            <span>${Math.round(result.score)}/${Math.round(result.maxScore)}점</span>
                            <span class="category-percentage">${percentage}%</span>
                        </div>
                        <div class="category-bar">
                            <div class="category-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
            }).join('');
    }
    
    showReview() {
        const reviewContent = document.getElementById('review-content');
        const incorrectQuestions = this.questions.filter((question, index) => {
            if (question.type === 'multiple') {
                return this.userAnswers[index] !== question.correct;
            } else if (question.type === 'code') {
                const userAnswer = this.userAnswers[index]?.trim().toLowerCase();
                const correctAnswer = question.answer.trim().toLowerCase();
                return userAnswer !== correctAnswer;
            }
        });
        
        reviewContent.innerHTML = incorrectQuestions.map((question, index) => {
            const questionIndex = this.questions.findIndex(q => q.id === question.id);
            const userAnswer = this.userAnswers[questionIndex];
            
            return `
                <div class="review-item">
                    <div class="review-question">
                        <h4>문제 ${question.id}: ${question.title}</h4>
                        <p>${question.text}</p>
                        ${question.code ? `<pre><code class="language-javascript">${question.code}</code></pre>` : ''}
                    </div>
                    <div class="review-answer">
                        <div class="user-answer">
                            <strong>당신의 답:</strong> 
                            ${question.type === 'multiple' ? 
                                (userAnswer !== null ? question.options[userAnswer] : '답하지 않음') : 
                                (userAnswer || '답하지 않음')
                            }
                        </div>
                        <div class="correct-answer">
                            <strong>정답:</strong> 
                            ${question.type === 'multiple' ? 
                                question.options[question.correct] : 
                                question.answer
                            }
                        </div>
                        <div class="explanation">
                            <strong>해설:</strong> ${question.explanation}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        if (incorrectQuestions.length === 0) {
            reviewContent.innerHTML = '<div class="perfect-score">🎉 모든 문제를 맞히셨습니다!</div>';
        }
        
        this.showScreen('review');
        hljs.highlightAll();
    }
    
    closeReview() {
        this.showScreen('result');
    }
    
    restartTest() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.showScreen('start');
    }
    
    showScreen(screenName) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(`${screenName}-screen`).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JavaScriptMidtermTest();
});