// 프레젠테이션 컨트롤러 클래스
class PresentationController {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.progressBar = document.querySelector('.progress-bar');
        this.currentSlideElement = document.querySelector('#currentSlide');
        this.totalSlidesElement = document.querySelector('#totalSlides');
        this.dotContainer = document.querySelector('#slideDots');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createSlideDots();
        this.updateSlide();
        this.initializeAnimations();
    }
    
    setupEventListeners() {
        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
            }
        });

        // 버튼 네비게이션 - 수정된 선택자
        document.querySelector('#prevButton')?.addEventListener('click', () => this.prevSlide());
        document.querySelector('#nextButton')?.addEventListener('click', () => this.nextSlide());

        // 스크롤 네비게이션 제거 - 주석 처리
        // let wheelTimeout;
        // document.addEventListener('wheel', (e) => {
        //     clearTimeout(wheelTimeout);
        //     wheelTimeout = setTimeout(() => {
        //         if (e.deltaY > 0) {
        //             this.nextSlide();
        //         } else {
        //             this.prevSlide();
        //         }
        //     }, 100);
        // });
    }
    
    createSlideDots() {
        if (!this.dotContainer) return;
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotContainer.appendChild(dot);
        }
    }
    
    updateSlide() {
        // 슬라이드 표시/숨김
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // 진행률 바 업데이트 - 정확한 계산
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;

        // 슬라이드 카운터 업데이트 - 수정된 로직
        if (this.currentSlideElement) {
            this.currentSlideElement.textContent = this.currentSlide + 1;
        }
        if (this.totalSlidesElement) {
            this.totalSlidesElement.textContent = this.totalSlides;
        }

        // 점 업데이트
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // 버튼 상태 업데이트 - 수정된 선택자
        const prevButton = document.querySelector('#prevButton');
        const nextButton = document.querySelector('#nextButton');
        
        if (prevButton) prevButton.disabled = this.currentSlide === 0;
        if (nextButton) nextButton.disabled = this.currentSlide === this.totalSlides - 1;

        // 슬라이드별 애니메이션 실행
        this.runSlideAnimations();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.updateSlide();
        }
    }
    
    initializeAnimations() {
        // 인터섹션 옵저버로 애니메이션 트리거
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, .code-block, .highlight-box').forEach(el => {
            observer.observe(el);
        });
    }
    
    runSlideAnimations() {
        const currentSlideElement = this.slides[this.currentSlide];
        
        // 모든 애니메이션 초기화
        currentSlideElement.querySelectorAll('.animate, .card, .escape-preview, .comparison-item').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // reflow 강제 실행
            el.style.animation = null;
        });

        // 지연 후 애니메이션 실행
        setTimeout(() => {
            // 카드 애니메이션
            currentSlideElement.querySelectorAll('.card').forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = 'cardSlideIn 0.6s ease forwards';
                }, index * 100);
            });

            // 이스케이프 미리보기 애니메이션
            currentSlideElement.querySelectorAll('.escape-preview').forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = 'fadeInUp 0.5s ease forwards';
                }, index * 100);
            });

            // 비교 항목 애니메이션
            currentSlideElement.querySelectorAll('.comparison-item').forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = 'slideInUp 0.6s ease forwards';
                }, index * 150);
            });

            // 슬라이드별 특수 애니메이션
            this.runSpecialAnimations();
        }, 100);
    }
    
    runSpecialAnimations() {
        switch(this.currentSlide) {
            case 5: // 이스케이프 시퀀스 슬라이드
                this.animateEscapeSequences();
                break;
            case 7: // 템플릿 리터럴 슬라이드 - 슬라이드 번호 수정
                this.animateTemplateLiteral();
                break;
            case 9: // 문자열 연산자 슬라이드
                this.animateStringOperators();
                break;
            case 11: // 검색 메소드 슬라이드
                this.animateSearchMethods();
                break;
            case 12: // 추출 메소드 슬라이드
                this.animateExtractionMethods();
                break;
            case 14: // split, join 메소드 슬라이드
                this.animateSplitJoin();
                break;
            case 15: // 실습 문제 슬라이드
                this.initializePractice();
                break;
        }
    }
    
    animateTemplateLiteral() {
        const container = document.querySelector('#templateDemo'); // 수정된 ID
        if (!container) return;

        container.innerHTML = '';
        
        const steps = [
            { code: 'const name = "김철수";', explanation: '변수 선언' },
            { code: 'const age = 25;', explanation: '변수 선언' },
            { code: '`안녕하세요, ${name}님!`', explanation: '템플릿 리터럴 사용' },
            { code: '"안녕하세요, 김철수님!"', explanation: '결과 출력' }
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                const stepElement = document.createElement('div');
                stepElement.className = 'animation-step fade-in';
                stepElement.innerHTML = `
                    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 0.5rem 0;">
                        <code style="color: var(--accent-green); font-size: 1.1rem;">${step.code}</code>
                        <div style="color: var(--text-secondary); margin-top: 0.5rem; font-size: 0.9rem;">${step.explanation}</div>
                    </div>
                `;
                container.appendChild(stepElement);
            }, index * 1000);
        });
    }
    
    animateSearchMethods() {
        const container = document.querySelector('#searchString');
        if (!container) return;

        const text = "Hello JavaScript";
        container.innerHTML = '';
        
        // 문자열을 개별 문자로 분해하여 표시
        text.split('').forEach((char, index) => {
            const charElement = document.createElement('span');
            charElement.className = 'string-char';
            charElement.textContent = char;
            charElement.style.setProperty('--index', index);
            
            // 인덱스 번호 추가
            const indexElement = document.createElement('div');
            indexElement.className = 'string-index';
            indexElement.textContent = index;
            
            const wrapper = document.createElement('div');
            wrapper.style.display = 'inline-block';
            wrapper.style.textAlign = 'center';
            wrapper.appendChild(charElement);
            wrapper.appendChild(indexElement);
            
            container.appendChild(wrapper);
        });
    }
    
    animateExtractionMethods() {
        const container = document.querySelector('#extractString');
        if (!container) return;

        const text = "JavaScript";
        container.innerHTML = '';
        
        // 문자열을 개별 문자로 분해하여 표시
        text.split('').forEach((char, index) => {
            const charElement = document.createElement('span');
            charElement.className = 'string-char';
            charElement.textContent = char;
            charElement.style.setProperty('--index', index);
            
            // 인덱스 번호 추가
            const indexElement = document.createElement('div');
            indexElement.className = 'string-index';
            indexElement.textContent = index;
            
            const wrapper = document.createElement('div');
            wrapper.style.display = 'inline-block';
            wrapper.style.textAlign = 'center';
            wrapper.appendChild(charElement);
            wrapper.appendChild(indexElement);
            
            container.appendChild(wrapper);
        });
    }
    
    animateSplitJoin() {
        const splitContainer = document.querySelector('#splitDemo');
        const joinContainer = document.querySelector('#joinDemo');
        
        if (splitContainer) {
            splitContainer.innerHTML = '';
            
            // Split 애니메이션
            const splitDemo = document.createElement('div');
            splitDemo.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <code style="color: var(--accent-blue);">"apple,banana,orange".split(",")</code>
                    </div>
                    <div style="font-size: 2rem; margin: 1rem 0;">↓</div>
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px;">
                        <code style="color: var(--accent-green);">["apple", "banana", "orange"]</code>
                    </div>
                </div>
            `;
            splitContainer.appendChild(splitDemo);
        }
        
        if (joinContainer) {
            joinContainer.innerHTML = '';
            
            // Join 애니메이션
            const joinDemo = document.createElement('div');
            joinDemo.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <code style="color: var(--accent-blue);">["apple", "banana", "orange"].join(" - ")</code>
                    </div>
                    <div style="font-size: 2rem; margin: 1rem 0;">↓</div>
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px;">
                        <code style="color: var(--accent-green);">"apple - banana - orange"</code>
                    </div>
                </div>
            `;
            joinContainer.appendChild(joinDemo);
        }
    }
    
    initializePractice() {
        const container = document.querySelector('#practiceDemo'); // 수정된 ID (존재한다면)
        if (!container) {
            // 실습 문제 슬라이드에 직접 기능 추가
            const practiceSlide = this.slides[this.currentSlide];
            const showAnswerBtns = practiceSlide.querySelectorAll('.show-answer-btn');
            
            showAnswerBtns.forEach(btn => {
                if (!btn.hasEventListener) {
                    btn.addEventListener('click', (e) => {
                        const card = e.target.closest('.problem-card');
                        if (card) {
                            const answer = card.querySelector('.answer-section');
                            if (answer) {
                                answer.style.display = 'block';
                                e.target.style.display = 'none';
                            }
                        }
                    });
                    btn.hasEventListener = true;
                }
            });
        }
    }

    // 새로운 애니메이션 메서드들
    animateEscapeSequences() {
        const tableRows = document.querySelectorAll('.table-row');
        tableRows.forEach((row, index) => {
            setTimeout(() => {
                row.style.animation = 'slideInUp 0.5s ease forwards';
            }, index * 200);
        });
    }

    animateStringOperators() {
        // 문자열 연결 애니메이션
        const concatStep = document.querySelector('.concat-step');
        const concatArrow = document.querySelector('.concat-arrow');
        const concatResult = document.querySelector('.concat-result');

        if (concatStep) {
            setTimeout(() => {
                concatStep.style.animation = 'fadeInUp 0.8s ease forwards';
            }, 500);
        }

        if (concatArrow) {
            setTimeout(() => {
                concatArrow.style.animation = 'bounce 1s ease-in-out infinite';
            }, 1000);
        }

        if (concatResult) {
            setTimeout(() => {
                concatResult.style.animation = 'fadeInScale 1s ease forwards';
            }, 1500);
        }
    }
}

// 프레젠테이션 시작
document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
    
    // 시작 메시지
    console.log('🎯 JavaScript 문자열 타입 학습을 시작합니다!');
    console.log('💡 네비게이션: 화살표 키, 스페이스바, 마우스 휠, 버튼 클릭');
    console.log('🎮 슬라이드를 넘겨가며 학습해보세요!');
});

// 추가 유틸리티 함수들
function highlightCode(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('highlighted');
        setTimeout(() => {
            element.classList.remove('highlighted');
        }, 2000);
    }, delay);
}

function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// CSS 애니메이션 완료 감지
function onAnimationEnd(element, callback) {
    element.addEventListener('animationend', callback, { once: true });
} 