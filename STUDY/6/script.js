class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 10;
        this.animationTimeouts = [];
        this.animationIntervals = [];
        this.quizState = {
            currentQuestion: 1,
            totalQuestions: 3,
            answers: {},
            score: 0
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateProgress();
        this.initializeSlideContent();
        this.updateSlideCounter();
    }

    setupEventListeners() {
        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'Home') this.goToSlide(1);
            if (e.key === 'End') this.goToSlide(this.totalSlides);
        });

        // 네비게이션 버튼
        document.getElementById('prevBtn').addEventListener('click', () => this.previousSlide());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextSlide());

        // 슬라이드별 인터랙티브 요소들
        this.setupSlideInteractions();
    }

    setupSlideInteractions() {
        // Slide 3: Boolean 값 클릭 이벤트
        this.setupBooleanDemo();
        
        // Slide 5: 진리표 인터랙션
        this.setupTruthTable();
        
        // Slide 6: 연산자 우선순위 애니메이션
        this.setupPrecedenceDemo();
        
        // Slide 7: Truthy/Falsy 테스트
        this.setupTruthyFalsyDemo();
        
        // Slide 8: 단축 평가 시각화
        this.setupShortCircuitDemo();
        
        // Slide 9: 실무 활용 데모
        this.setupPracticalDemo();
        
        // Slide 10: 퀴즈
        this.setupQuiz();
    }

    // 슬라이드 네비게이션
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        // 현재 슬라이드 정리
        this.clearAnimations();
        
        // 슬라이드 전환
        const currentSlideEl = document.getElementById(`slide-${this.currentSlide}`);
        const targetSlideEl = document.getElementById(`slide-${slideNumber}`);
        
        if (currentSlideEl) {
            currentSlideEl.classList.remove('active');
            if (this.currentSlide > slideNumber) {
                currentSlideEl.classList.remove('prev');
            } else {
                currentSlideEl.classList.add('prev');
            }
        }
        
        if (targetSlideEl) {
            targetSlideEl.classList.add('active');
            if (this.currentSlide < slideNumber) {
                targetSlideEl.classList.remove('prev');
            }
        }
        
        this.currentSlide = slideNumber;
        this.updateProgress();
        this.updateSlideCounter();
        this.updateNavigationButtons();
        
        // 새 슬라이드 초기화
        this.initializeSlideContent();
    }

    updateProgress() {
        const progressBar = document.getElementById('progressBar');
        const progress = (this.currentSlide / this.totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }

    updateSlideCounter() {
        document.getElementById('currentSlide').textContent = this.currentSlide;
        document.getElementById('totalSlides').textContent = this.totalSlides;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.disabled = this.currentSlide === 1;
        nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    clearAnimations() {
        this.animationTimeouts.forEach(timeout => clearTimeout(timeout));
        this.animationIntervals.forEach(interval => clearInterval(interval));
        this.animationTimeouts = [];
        this.animationIntervals = [];
    }

    initializeSlideContent() {
        switch(this.currentSlide) {
            case 3:
                this.animateBooleanDemo();
                break;
            case 5:
                this.renderTruthTable('and');
                break;
            case 6:
                this.animatePrecedence();
                break;
            case 7:
                this.animateTruthyFalsy();
                break;
            case 8:
                this.animateShortCircuit();
                break;
        }
    }

    // Slide 3: Boolean 데모
    setupBooleanDemo() {
        const booleanValues = document.querySelectorAll('.boolean-value');
        booleanValues.forEach(value => {
            value.addEventListener('click', () => {
                this.toggleBooleanValue(value);
            });
        });
    }

    toggleBooleanValue(element) {
        const currentValue = element.dataset.value;
        const newValue = currentValue === 'true' ? 'false' : 'true';
        
        element.dataset.value = newValue;
        element.querySelector('h3').textContent = newValue;
        
        const lightbulb = element.querySelector('.lightbulb');
        if (newValue === 'true') {
            lightbulb.classList.add('on');
            lightbulb.classList.remove('off');
            element.classList.add('true-value');
            element.classList.remove('false-value');
            element.querySelector('p').textContent = '참, 켜짐, 1';
        } else {
            lightbulb.classList.add('off');
            lightbulb.classList.remove('on');
            element.classList.add('false-value');
            element.classList.remove('true-value');
            element.querySelector('p').textContent = '거짓, 꺼짐, 0';
        }
        
        // 반짝 효과
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }

    animateBooleanDemo() {
        const values = document.querySelectorAll('.boolean-value');
        values.forEach((value, index) => {
            const timeout = setTimeout(() => {
                value.style.animation = 'fadeInUp 0.6s ease';
            }, index * 200);
            this.animationTimeouts.push(timeout);
        });
    }

    // Slide 5: 진리표
    setupTruthTable() {
        const operatorBtns = document.querySelectorAll('.operator-btn');
        operatorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                operatorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderTruthTable(btn.dataset.op);
                this.updateCurrentOperator(btn.dataset.op);
            });
        });

        const valueA = document.getElementById('valueA');
        const valueB = document.getElementById('valueB');
        
        valueA.addEventListener('change', this.updateTestResult.bind(this));
        valueB.addEventListener('change', this.updateTestResult.bind(this));
    }

    renderTruthTable(operator) {
        const container = document.getElementById('truthTableDemo');
        
        let tableHTML = '';
        
        if (operator === 'not') {
            tableHTML = `
                <table class="truth-table">
                    <thead>
                        <tr>
                            <th>A</th>
                            <th>!A</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>true</td>
                            <td class="result-false">false</td>
                        </tr>
                        <tr>
                            <td>false</td>
                            <td class="result-true">true</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } else {
            const symbol = operator === 'and' ? '&&' : '||';
            const results = operator === 'and' 
                ? ['true', 'false', 'false', 'false']
                : ['true', 'true', 'true', 'false'];
            
            tableHTML = `
                <table class="truth-table">
                    <thead>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>A ${symbol} B</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>true</td>
                            <td>true</td>
                            <td class="result-${results[0]}">${results[0]}</td>
                        </tr>
                        <tr>
                            <td>true</td>
                            <td>false</td>
                            <td class="result-${results[1]}">${results[1]}</td>
                        </tr>
                        <tr>
                            <td>false</td>
                            <td>true</td>
                            <td class="result-${results[2]}">${results[2]}</td>
                        </tr>
                        <tr>
                            <td>false</td>
                            <td>false</td>
                            <td class="result-${results[3]}">${results[3]}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
        
        container.innerHTML = tableHTML;
        
        // 애니메이션 효과
        const rows = container.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            const timeout = setTimeout(() => {
                row.style.animation = 'fadeInUp 0.4s ease';
            }, index * 100);
            this.animationTimeouts.push(timeout);
        });
    }

    updateCurrentOperator(operator) {
        const currentOperator = document.getElementById('currentOperator');
        const symbol = operator === 'and' ? '&&' : operator === 'or' ? '||' : '!';
        currentOperator.textContent = symbol;
        this.updateTestResult();
    }

    updateTestResult() {
        const valueA = document.getElementById('valueA').value === 'true';
        const valueB = document.getElementById('valueB').value === 'true';
        const operatorBtn = document.querySelector('.operator-btn.active');
        const operator = operatorBtn ? operatorBtn.dataset.op : 'and';
        
        let result;
        switch(operator) {
            case 'and':
                result = valueA && valueB;
                break;
            case 'or':
                result = valueA || valueB;
                break;
            case 'not':
                result = !valueA;
                break;
        }
        
        const resultElement = document.getElementById('testResult');
        resultElement.textContent = result.toString();
        resultElement.className = result ? 'result-true' : 'result-false';
    }

    // Slide 6: 연산자 우선순위
    setupPrecedenceDemo() {
        // 이미 HTML에 구현되어 있음
    }

    animatePrecedence() {
        const steps = document.querySelectorAll('.step');
        steps.forEach((step, index) => {
            const timeout = setTimeout(() => {
                step.style.animation = 'fadeInUp 0.6s ease';
                step.style.opacity = '1';
            }, index * 800);
            this.animationTimeouts.push(timeout);
        });
    }

    // Slide 7: Truthy/Falsy
    setupTruthyFalsyDemo() {
        const testButton = document.getElementById('testConvert');
        const testInput = document.getElementById('testValue');
        
        if (testButton && testInput) {
            testButton.addEventListener('click', () => {
                this.testBooleanConversion();
            });
            
            testInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.testBooleanConversion();
                }
            });
        }

        // 값 항목 클릭 시 설명 표시
        const valueItems = document.querySelectorAll('.value-item');
        valueItems.forEach(item => {
            item.addEventListener('click', () => {
                this.showValueExplanation(item);
            });
        });
    }

    testBooleanConversion() {
        const input = document.getElementById('testValue');
        const result = document.getElementById('conversionResult');
        
        if (!input || !result) return;
        
        const value = input.value;
        let actualValue;
        
        try {
            // 값을 실제 JavaScript 값으로 변환
            if (value === 'true') actualValue = true;
            else if (value === 'false') actualValue = false;
            else if (value === 'null') actualValue = null;
            else if (value === 'undefined') actualValue = undefined;
            else if (value === 'NaN') actualValue = NaN;
            else if (value === '0') actualValue = 0;
            else if (value === '""' || value === "''") actualValue = '';
            else if (!isNaN(value) && value !== '') actualValue = Number(value);
            else actualValue = value;
            
            const booleanResult = Boolean(actualValue);
            
            result.textContent = booleanResult.toString();
            result.style.background = booleanResult ? 'var(--accent-green)' : 'var(--accent-red)';
            result.style.color = 'white';
            
            // 애니메이션 효과
            result.style.transform = 'scale(1.2)';
            setTimeout(() => {
                result.style.transform = 'scale(1)';
            }, 200);
            
        } catch (error) {
            result.textContent = 'Error';
            result.style.background = 'var(--accent-red)';
            result.style.color = 'white';
        }
    }

    showValueExplanation(item) {
        const value = item.dataset.value;
        const explanations = {
            'false': 'Boolean false - 기본 거짓값',
            '0': 'Number 0 - 숫자 영',
            'empty-string': 'Empty string - 빈 문자열',
            'null': 'null - 값이 없음을 나타냄',
            'undefined': 'undefined - 정의되지 않음',
            'nan': 'NaN - Not a Number',
            'true': 'Boolean true - 기본 참값',
            '1': 'Number 1 - 0이 아닌 숫자',
            'string': 'Non-empty string - 내용이 있는 문자열',
            'array': 'Array - 빈 배열도 truthy',
            'object': 'Object - 빈 객체도 truthy',
            'function': 'Function - 함수는 항상 truthy'
        };
        
        // 툴팁 표시 (간단한 구현)
        const tooltip = document.createElement('div');
        tooltip.textContent = explanations[value] || '설명 없음';
        tooltip.style.cssText = `
            position: absolute;
            background: var(--bg-primary);
            color: var(--text-primary);
            padding: 8px 12px;
            border-radius: 6px;
            border: 1px solid var(--border-color);
            font-size: 0.8rem;
            z-index: 1000;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        `;
        
        item.style.position = 'relative';
        item.appendChild(tooltip);
        
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        }, 2000);
    }

    animateTruthyFalsy() {
        const sections = document.querySelectorAll('.falsy-section, .truthy-section');
        sections.forEach((section, index) => {
            const timeout = setTimeout(() => {
                section.style.animation = 'slideInRight 0.6s ease';
                
                const items = section.querySelectorAll('.value-item');
                items.forEach((item, itemIndex) => {
                    const itemTimeout = setTimeout(() => {
                        item.style.animation = 'fadeInUp 0.4s ease';
                    }, itemIndex * 100);
                    this.animationTimeouts.push(itemTimeout);
                });
            }, index * 300);
            this.animationTimeouts.push(timeout);
        });
    }

    // Slide 8: 단축 평가
    setupShortCircuitDemo() {
        // 시각화는 CSS 애니메이션으로 처리
    }

    animateShortCircuit() {
        const examples = document.querySelectorAll('.circuit-example');
        examples.forEach((example, index) => {
            const timeout = setTimeout(() => {
                example.style.animation = 'fadeInUp 0.6s ease';
                
                // 흐름 애니메이션
                const valueBoxes = example.querySelectorAll('.value-box');
                valueBoxes.forEach((box, boxIndex) => {
                    const boxTimeout = setTimeout(() => {
                        if (!box.classList.contains('dimmed')) {
                            box.style.background = 'var(--accent-blue)';
                            box.style.color = 'white';
                            box.style.transform = 'scale(1.1)';
                            
                            setTimeout(() => {
                                box.style.transform = 'scale(1)';
                            }, 300);
                        }
                    }, boxIndex * 500);
                    this.animationTimeouts.push(boxTimeout);
                });
            }, index * 400);
            this.animationTimeouts.push(timeout);
        });
    }

    // Slide 9: 실무 활용
    setupPracticalDemo() {
        // 탭 전환
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const targetContent = document.querySelector(`[data-tab="${tabName}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // 폼 검증 데모
        const validateBtn = document.getElementById('validateBtn');
        if (validateBtn) {
            validateBtn.addEventListener('click', this.validateFormDemo.bind(this));
        }

        // 권한 관리 데모
        const checkboxes = document.querySelectorAll('#isLoggedIn, #isAdmin, #hasSubscription');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', this.updatePermissions.bind(this));
        });

        // 상태 관리 데모
        const toggles = document.querySelectorAll('#darkMode, #notifications, #autoSave');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', this.updateStateDisplay.bind(this));
        });
    }

    validateFormDemo() {
        const email = document.getElementById('demoEmail').value;
        const password = document.getElementById('demoPassword').value;
        const result = document.getElementById('validationResult');
        
        const isEmailValid = email.includes('@') && email.length > 0;
        const isPasswordValid = password.length >= 8;
        const isFormValid = isEmailValid && isPasswordValid;
        
        let message = '';
        let className = '';
        
        if (isFormValid) {
            message = '✅ 폼 검증 성공!';
            className = 'success';
            result.style.background = 'var(--accent-green)';
        } else {
            message = '❌ 검증 실패: ';
            if (!isEmailValid) message += '올바른 이메일 입력 필요. ';
            if (!isPasswordValid) message += '비밀번호 8자 이상 필요.';
            className = 'error';
            result.style.background = 'var(--accent-red)';
        }
        
        result.textContent = message;
        result.style.color = 'white';
        result.style.padding = '1rem';
        result.style.borderRadius = '8px';
        result.style.marginTop = '1rem';
    }

    updatePermissions() {
        const isLoggedIn = document.getElementById('isLoggedIn').checked;
        const isAdmin = document.getElementById('isAdmin').checked;
        const hasSubscription = document.getElementById('hasSubscription').checked;
        
        // 기본 콘텐츠 (항상 허용)
        const basicAccess = document.getElementById('basicAccess');
        basicAccess.textContent = '허용';
        basicAccess.className = 'access-status allowed';
        
        // 프리미엄 콘텐츠 (로그인 && 구독)
        const premiumAccess = document.getElementById('premiumAccess');
        if (isLoggedIn && hasSubscription) {
            premiumAccess.textContent = '허용';
            premiumAccess.className = 'access-status allowed';
        } else {
            premiumAccess.textContent = '차단';
            premiumAccess.className = 'access-status denied';
        }
        
        // 관리자 패널 (로그인 && 관리자)
        const adminAccess = document.getElementById('adminAccess');
        if (isLoggedIn && isAdmin) {
            adminAccess.textContent = '허용';
            adminAccess.className = 'access-status allowed';
        } else {
            adminAccess.textContent = '차단';
            adminAccess.className = 'access-status denied';
        }
    }

    updateStateDisplay() {
        const darkMode = document.getElementById('darkMode').checked;
        const notifications = document.getElementById('notifications').checked;
        const autoSave = document.getElementById('autoSave').checked;
        
        const display = document.getElementById('stateDisplay');
        
        const settings = {
            '다크모드': darkMode,
            '알림': notifications,
            '자동저장': autoSave
        };
        
        let html = '<h4>현재 설정:</h4>';
        for (const [key, value] of Object.entries(settings)) {
            const status = value ? '✅ 활성화' : '❌ 비활성화';
            const color = value ? 'var(--accent-green)' : 'var(--accent-red)';
            html += `<div style="margin: 0.5rem 0; color: ${color};">${key}: ${status}</div>`;
        }
        
        display.innerHTML = html;
    }

    // Slide 10: 퀴즈
    setupQuiz() {
        const quizOptions = document.querySelectorAll('.quiz-option');
        quizOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                this.handleQuizAnswer(e.target);
            });
        });

        const prevQuizBtn = document.getElementById('prevQuiz');
        const nextQuizBtn = document.getElementById('nextQuiz');
        
        if (prevQuizBtn) prevQuizBtn.addEventListener('click', () => this.previousQuestion());
        if (nextQuizBtn) nextQuizBtn.addEventListener('click', () => this.nextQuestion());
    }

    handleQuizAnswer(button) {
        const question = button.closest('.quiz-question');
        const questionNumber = parseInt(question.dataset.question);
        
        // 이미 답변한 질문은 무시
        if (this.quizState.answers.hasOwnProperty(questionNumber)) {
            return;
        }

        const isCorrect = button.dataset.answer === 'correct';
        
        // 모든 옵션 비활성화
        const options = question.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.style.pointerEvents = 'none'; // 중복 클릭 방지
            if (option.dataset.answer !== 'correct') {
                option.style.opacity = '0.5';
            }
        });

        // 선택한 버튼에 스타일 적용
        button.classList.add(isCorrect ? 'correct' : 'wrong');
        
        // 피드백 표시
        const feedback = question.querySelector('.quiz-feedback');
        feedback.style.display = 'block'; // 피드백 보이기
        if (isCorrect) {
            feedback.innerHTML = '✅ 정답입니다!';
            feedback.style.background = 'var(--accent-green)';
            this.quizState.score++;
        } else {
            feedback.innerHTML = '❌ 틀렸습니다. 정답을 확인해보세요.';
            feedback.style.background = 'var(--accent-red)';
            // 오답 시 정답 옵션 강조
            question.querySelector('.quiz-option[data-answer="correct"]').classList.add('correct');
        }
        feedback.style.color = 'white';
        feedback.style.padding = '1rem';
        feedback.style.borderRadius = '8px';
        
        this.quizState.answers[questionNumber] = isCorrect;
        
        // 다음 버튼 활성화
        const nextBtn = document.getElementById('nextQuiz');
        if (nextBtn) nextBtn.disabled = false;
    }

    previousQuestion() {
        if (this.quizState.currentQuestion > 1) {
            this.showQuestion(this.quizState.currentQuestion - 1);
        }
    }

    nextQuestion() {
        if (this.quizState.currentQuestion < this.quizState.totalQuestions) {
            this.showQuestion(this.quizState.currentQuestion + 1);
        } else {
            this.showQuizSummary();
        }
    }

    showQuestion(questionNumber) {
        // 현재 질문 숨기기
        const currentQuestion = document.querySelector('.quiz-question.active');
        if (currentQuestion) currentQuestion.classList.remove('active');
        
        // 새 질문 표시
        const newQuestion = document.querySelector(`[data-question="${questionNumber}"]`);
        if (newQuestion) newQuestion.classList.add('active');
        
        this.quizState.currentQuestion = questionNumber;
        
        // 카운터 업데이트
        const counter = document.getElementById('quizCounter');
        if (counter) counter.textContent = `${questionNumber} / ${this.quizState.totalQuestions}`;
        
        // 버튼 상태 업데이트
        const prevBtn = document.getElementById('prevQuiz');
        const nextBtn = document.getElementById('nextQuiz');
        
        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        if (nextBtn) {
            nextBtn.disabled = !this.quizState.answers[questionNumber];
            nextBtn.textContent = questionNumber === this.quizState.totalQuestions ? '결과 보기' : '다음';
        }
    }

    showQuizSummary() {
        // 퀴즈 질문들 숨기기
        const questions = document.querySelectorAll('.quiz-question');
        questions.forEach(q => q.style.display = 'none');
        
        const navigation = document.querySelector('.quiz-navigation');
        if (navigation) navigation.style.display = 'none';
        
        // 결과 표시
        const summary = document.getElementById('quizSummary');
        if (summary) {
            summary.style.display = 'block';
            
            const stats = document.getElementById('summaryStats');
            if (stats) {
                const percentage = Math.round((this.quizState.score / this.quizState.totalQuestions) * 100);
                stats.innerHTML = `점수: ${this.quizState.score}/${this.quizState.totalQuestions} (${percentage}%)`;
                
                if (percentage >= 80) {
                    stats.style.color = 'var(--accent-green)';
                } else if (percentage >= 60) {
                    stats.style.color = 'var(--accent-orange)';
                } else {
                    stats.style.color = 'var(--accent-red)';
                }
            }
        }
    }
}

// 문서 로드 완료 시 프레젠테이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PresentationController();
    
    // 전역 접근을 위해 window 객체에 저장
    window.presentation = presentation;
    
    // 초기 애니메이션
    const titleIcon = document.querySelector('.title-icon');
    if (titleIcon) {
        titleIcon.style.animation = 'pulse 2s infinite';
    }
    
    // 로딩 완료 후 첫 번째 슬라이드 페이드인
    setTimeout(() => {
        const firstSlide = document.getElementById('slide-1');
        if (firstSlide) {
            firstSlide.style.animation = 'fadeIn 1s ease';
        }
    }, 100);
});

// 터치 제스처 지원 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // 오른쪽 스와이프 - 이전 슬라이드
            if (window.presentation) window.presentation.previousSlide();
        } else {
            // 왼쪽 스와이프 - 다음 슬라이드
            if (window.presentation) window.presentation.nextSlide();
        }
    }
}

// 유틸리티 함수들
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 윈도우 리사이즈 처리
window.addEventListener('resize', debounce(() => {
    // 반응형 조정이 필요한 경우 여기에 추가
    if (window.presentation) {
        window.presentation.updateProgress();
    }
}, 250));

// 키보드 단축키 도움말
document.addEventListener('keydown', (e) => {
    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    const helpText = `
키보드 단축키:
← → : 슬라이드 이동
Home : 첫 번째 슬라이드
End : 마지막 슬라이드
? : 도움말 (이 메시지)
    `;
    
    alert(helpText);
}

// 에러 처리
window.addEventListener('error', (e) => {
    console.error('Presentation Error:', e.error);
});

// 페이지 언로드 시 정리
window.addEventListener('beforeunload', () => {
    if (window.presentation) {
        window.presentation.clearAnimations();
    }
}); 