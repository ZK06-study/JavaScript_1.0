/**
 * JavaScript null & undefined 프레젠테이션
 * @ppt-design.mdc 규칙에 따른 교육용 웹 프레젠테이션
 */

class NullUndefinedPresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 13;
        this.animations = new Map();
        
        this.init();
    }

    init() {
        this.setupSlideNavigation();
        this.setupAnimations();
        this.setupInteractiveElements();
        this.setupKeyboardNavigation();
        this.updateProgress();
        this.setupSlideDots();
    }

    // 슬라이드 네비게이션 설정
    setupSlideNavigation() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        prevButton.addEventListener('click', () => this.previousSlide());
        nextButton.addEventListener('click', () => this.nextSlide());

        this.updateNavigationButtons();
    }

    // 애니메이션 설정
    setupAnimations() {
        // 혼란 애니메이션 (슬라이드 3)
        this.animations.set('confusion', () => this.showConfusionAnimation());
        
        // 비교 애니메이션 (슬라이드 6)
        this.animations.set('comparison', () => this.showComparisonAnimation());
        
        // 동등성 비교 애니메이션 (슬라이드 8)
        this.animations.set('equality', () => this.showEqualityAnimation());
        
        // null check 애니메이션 (슬라이드 9)
        this.animations.set('nullcheck', () => this.showNullCheckAnimation());
    }

    // 인터랙티브 요소 설정
    setupInteractiveElements() {
        // 답 보기 버튼들
        const answerButtons = document.querySelectorAll('.show-answer-btn');
        answerButtons.forEach(button => {
            button.addEventListener('click', (e) => this.toggleAnswer(e.target));
        });

        // 체크리스트 항목들
        const checklistItems = document.querySelectorAll('.checklist-item input');
        checklistItems.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updateChecklistProgress());
        });
    }

    // 키보드 네비게이션 설정
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
            }
        });
    }

    // 슬라이드 점 네비게이션 설정
    setupSlideDots() {
        const dotsContainer = document.getElementById('slideDots');
        dotsContainer.innerHTML = '';
        
        for (let i = 1; i <= this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = `slide-dot ${i === 1 ? 'active' : ''}`;
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // 다음 슬라이드로 이동
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    // 이전 슬라이드로 이동
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    // 특정 슬라이드로 이동
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;

        // 현재 슬라이드 비활성화
        const currentSlideElement = document.querySelector(`.slide[data-slide="${this.currentSlide}"]`);
        if (currentSlideElement) {
            currentSlideElement.classList.remove('active');
        }

        // 새 슬라이드 활성화
        this.currentSlide = slideNumber;
        const newSlideElement = document.querySelector(`.slide[data-slide="${this.currentSlide}"]`);
        if (newSlideElement) {
            newSlideElement.classList.add('active');
        }

        this.updateProgress();
        this.updateNavigationButtons();
        this.updateSlideDots();
        this.triggerSlideAnimation();
    }

    // 진행률 업데이트
    updateProgress() {
        const progressBar = document.getElementById('progressBar');
        const currentSlideElement = document.getElementById('currentSlide');
        
        const progress = (this.currentSlide / this.totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
        currentSlideElement.textContent = this.currentSlide;
    }

    // 네비게이션 버튼 상태 업데이트
    updateNavigationButtons() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        prevButton.disabled = this.currentSlide === 1;
        nextButton.disabled = this.currentSlide === this.totalSlides;
    }

    // 슬라이드 점 상태 업데이트
    updateSlideDots() {
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 === this.currentSlide);
        });
    }

    // 슬라이드별 애니메이션 트리거
    triggerSlideAnimation() {
        setTimeout(() => {
            switch(this.currentSlide) {
                case 3:
                    this.animations.get('confusion')();
                    break;
                case 6:
                    this.animations.get('comparison')();
                    break;
                case 8:
                    this.animations.get('equality')();
                    break;
                case 9:
                    this.animations.get('nullcheck')();
                    break;
            }
        }, 300);
    }

    // 혼란 애니메이션 (슬라이드 3)
    showConfusionAnimation() {
        const confusionDemo = document.getElementById('confusionDemo');
        if (!confusionDemo) return;

        confusionDemo.innerHTML = `
            <div class="confusion-bubble">
                <div class="question-mark">?</div>
                <div class="confusion-text">
                    <span class="undefined-text">undefined</span>
                    <span class="vs-text">vs</span>
                    <span class="null-text">null</span>
                </div>
            </div>
        `;

        const bubble = confusionDemo.querySelector('.confusion-bubble');
        bubble.classList.add('animate-bounce');

        setTimeout(() => {
            const questionMark = confusionDemo.querySelector('.question-mark');
            questionMark.classList.add('animate-spin');
        }, 500);
    }

    // 비교 애니메이션 (슬라이드 6)
    showComparisonAnimation() {
        const comparisonDemo = document.getElementById('comparisonDemo');
        if (!comparisonDemo) return;

        comparisonDemo.innerHTML = `
            <div class="comparison-flow">
                <div class="flow-step" data-step="1">
                    <i class="fas fa-code"></i>
                    <span>코드 작성</span>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step" data-step="2">
                    <i class="fas fa-cogs"></i>
                    <span>JavaScript 엔진</span>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step" data-step="3">
                    <i class="fas fa-ghost"></i>
                    <span>undefined 할당</span>
                </div>
            </div>
            <div class="comparison-vs">
                <div class="vs-divider">VS</div>
            </div>
            <div class="comparison-flow">
                <div class="flow-step" data-step="1">
                    <i class="fas fa-user"></i>
                    <span>개발자 의도</span>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step" data-step="2">
                    <i class="fas fa-hand-pointer"></i>
                    <span>명시적 할당</span>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step" data-step="3">
                    <i class="fas fa-times-circle"></i>
                    <span>null 할당</span>
                </div>
            </div>
        `;

        // 순차적 애니메이션
        const steps = comparisonDemo.querySelectorAll('.flow-step');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('animate-slideIn');
            }, index * 200);
        });
    }

    // 동등성 비교 애니메이션 (슬라이드 8)
    showEqualityAnimation() {
        const equalityDemo = document.getElementById('equalityDemo');
        if (!equalityDemo) return;

        equalityDemo.innerHTML = `
            <div class="equality-visual">
                <div class="comparison-bubble">
                    <span class="value">null</span>
                    <span class="operator" id="operator">==</span>
                    <span class="value">undefined</span>
                    <span class="result" id="result">?</span>
                </div>
                <div class="explanation-text" id="explanationText">
                    타입 변환이 일어납니다...
                </div>
            </div>
        `;

        // 애니메이션 시퀀스
        setTimeout(() => {
            document.getElementById('result').textContent = 'true';
            document.getElementById('result').classList.add('animate-highlight');
            document.getElementById('explanationText').textContent = 'null과 undefined는 서로 같다고 판단됩니다!';
        }, 1000);

        setTimeout(() => {
            document.getElementById('operator').textContent = '===';
            document.getElementById('result').textContent = 'false';
            document.getElementById('result').classList.remove('animate-highlight');
            document.getElementById('result').classList.add('animate-highlight-red');
            document.getElementById('explanationText').textContent = '엄격한 비교에서는 다른 타입으로 인해 false입니다.';
        }, 3000);
    }

    // null check 애니메이션 (슬라이드 9)
    showNullCheckAnimation() {
        const nullcheckDemo = document.getElementById('nullcheckDemo');
        if (!nullcheckDemo) return;

        nullcheckDemo.innerHTML = `
            <div class="flowchart">
                <div class="flowchart-step start">
                    <div class="step-content">
                        <i class="fas fa-play"></i>
                        <span>값 확인 시작</span>
                    </div>
                </div>
                <div class="flowchart-arrow">↓</div>
                <div class="flowchart-step decision">
                    <div class="step-content">
                        <i class="fas fa-question"></i>
                        <span>value != null</span>
                    </div>
                </div>
                <div class="flowchart-branches">
                    <div class="branch-left">
                        <div class="branch-label">false</div>
                        <div class="flowchart-step result">
                            <i class="fas fa-times"></i>
                            <span>null 또는 undefined</span>
                        </div>
                    </div>
                    <div class="branch-right">
                        <div class="branch-label">true</div>
                        <div class="flowchart-step result">
                            <i class="fas fa-check"></i>
                            <span>유효한 값</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 순차적 하이라이트
        const steps = nullcheckDemo.querySelectorAll('.flowchart-step');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('highlight');
                if (index > 0) {
                    steps[index - 1].classList.remove('highlight');
                }
            }, index * 800);
        });
    }

    // 답 보기/숨기기 토글
    toggleAnswer(button) {
        const answerSection = button.nextElementSibling;
        const isVisible = answerSection.style.display !== 'none';
        
        if (isVisible) {
            answerSection.style.display = 'none';
            button.textContent = '답 확인하기';
        } else {
            answerSection.style.display = 'block';
            button.textContent = '답 숨기기';
            answerSection.classList.add('animate-fadeIn');
        }
    }

    // 체크리스트 진행률 업데이트
    updateChecklistProgress() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        const checkedCount = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
        const progress = (checkedCount / checkboxes.length) * 100;

        // 진행률 표시 업데이트 (필요시 추가)
        if (progress === 100) {
            this.showCompletionMessage();
        }
    }

    // 완료 메시지 표시
    showCompletionMessage() {
        const finalMessage = document.querySelector('.final-message .card');
        if (finalMessage) {
            finalMessage.classList.add('animate-celebration');
            
            // 축하 효과
            setTimeout(() => {
                this.createConfetti();
            }, 500);
        }
    }

    // 컨페티 효과
    createConfetti() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = ['#667eea', '#764ba2', '#f093fb', '#f5576c'][Math.floor(Math.random() * 4)];
                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 100);
        }
    }
}

// DOM 로드 완료 후 프레젠테이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    new NullUndefinedPresentation();
});

// 유틸리티 함수들
class PresentationUtils {
    // 코드 하이라이팅 효과
    static highlightCode(element) {
        const lines = element.querySelectorAll('pre code');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('highlight-line');
            }, index * 200);
        });
    }

    // 타이핑 효과
    static typewriterEffect(element, text, speed = 50) {
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i > text.length - 1) {
                clearInterval(timer);
            }
        }, speed);
    }

    // 카운트업 애니메이션
    static countUp(element, target, duration = 1000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            
            if (current >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    }
}

// 반응형 처리
class ResponsiveHandler {
    constructor() {
        this.init();
    }

    init() {
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        const isMobile = window.innerWidth <= 768;
        const slides = document.querySelectorAll('.slide');
        
        slides.forEach(slide => {
            if (isMobile) {
                slide.classList.add('mobile-layout');
            } else {
                slide.classList.remove('mobile-layout');
            }
        });
    }
}

// 반응형 핸들러 초기화
document.addEventListener('DOMContentLoaded', () => {
    new ResponsiveHandler();
}); 