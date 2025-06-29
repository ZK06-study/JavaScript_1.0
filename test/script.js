class PresentationController {
    constructor() {
      this.slides = document.querySelectorAll('.slide');
      this.totalSlides = this.slides.length; // 동적으로 슬라이드 개수 계산
      this.currentSlide = 1;
  
      this.progressBar = document.getElementById('progress-bar');
      this.currentSlideDisplay = document.getElementById('current-slide');
      this.totalSlidesDisplay = document.getElementById('total-slides');
      this.prevBtn = document.getElementById('prev-btn');
      this.nextBtn = document.getElementById('next-btn');
      
      this.animationTimeouts = [];
      this.isAnimating = false; // 슬라이드 전환 애니메이션 플래그
  
      this.init();
    }
    
    init() {
      this.updateDisplay();
      this.bindEvents();
      this.goToSlide(1, true); // 초기 슬라이드 설정
    }
    
    bindEvents() {
      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.previousSlide());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
      
      document.addEventListener('keydown', (e) => {
        if(this.isAnimating) return;
        switch(e.key) {
          case 'ArrowLeft': case 'ArrowUp': e.preventDefault(); this.previousSlide(); break;
          case 'ArrowRight': case 'ArrowDown': case ' ': e.preventDefault(); this.nextSlide(); break;
          case 'Home': e.preventDefault(); this.goToSlide(1); break;
          case 'End': e.preventDefault(); this.goToSlide(this.totalSlides); break;
        }
      });
    }
    
    goToSlide(slideNumber, isInitial = false) {
      if (slideNumber < 1 || slideNumber > this.totalSlides || (!isInitial && slideNumber === this.currentSlide)) return;
  
      this.isAnimating = true;
      this.clearSlideAnimations();
      
      const oldSlide = document.querySelector('.slide.active');
      if (oldSlide) oldSlide.classList.remove('active');
      
      this.currentSlide = slideNumber;
      const newSlide = document.querySelector(`.slide[data-slide="${this.currentSlide}"]`);
      if (newSlide) newSlide.classList.add('active');
      
      this.updateDisplay();
      this.initializeSlideAnimations();
  
      setTimeout(() => { this.isAnimating = false; }, 300); // transition 시간과 맞춤
    }
    
    nextSlide() { this.goToSlide(this.currentSlide + 1); }
    previousSlide() { this.goToSlide(this.currentSlide - 1); }
    
    updateDisplay() {
      const progress = ((this.currentSlide -1) / (this.totalSlides-1)) * 100;
      if (this.progressBar) this.progressBar.style.width = `${progress}%`;
      if (this.currentSlideDisplay) this.currentSlideDisplay.textContent = this.currentSlide;
      if (this.totalSlidesDisplay) this.totalSlidesDisplay.textContent = this.totalSlides;
      if (this.prevBtn) this.prevBtn.disabled = this.currentSlide === 1;
      if (this.nextBtn) this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
    
    clearSlideAnimations() {
      this.animationTimeouts.forEach(id => clearTimeout(id));
      this.animationTimeouts = [];
      
      // 데모 컨테이너 초기화
      const demoIds = [
          'function-anatomy-demo', 'execution-simulator', 'parameter-independence-demo', 
          'return-flow-demo', 'scope-demo', 'scope-chain-demo', 'shadowing-demo', 
          'lexical-scoping-demo', 'first-class-demo', 'arrow-function-demo'
      ];
      demoIds.forEach(id => {
          const container = document.getElementById(id);
          if (container) container.innerHTML = '데모를 시작하려면 버튼을 클릭하세요.';
      });
    }
  
    setAnimationTimeout(callback, delay) {
      const id = setTimeout(callback, delay);
      this.animationTimeouts.push(id);
      return id;
    }
  
    // --- 각 슬라이드별 인터랙션 초기화 ---
    initializeSlideAnimations() {
      switch(this.currentSlide) {
        case 3: this.setupFunctionAnatomyDemo(); break;
        case 4: this.setupExecutionFlowDemo(); break;
        case 5: this.setupParameterIndependenceDemo(); break;
        case 6: this.setupReturnFlowDemo(); break;
        case 7: this.setupScopeDemo(); break;
        case 8: this.setupScopeChainDemo(); break;
        case 9: this.setupShadowingDemo(); break;
        case 10: this.setupLexicalScopingDemo(); break;
        case 11: this.setupFirstClassDemo(); break;
        case 12: this.setupArrowFunctionDemo(); break;
      }
    }
  
    // Helper to create a standard demo button
    createDemoButton(text, colorClass = 'accent-primary') {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.cssText = `
          background: var(--${colorClass});
          color: white; border: none; padding: 12px 24px;
          border-radius: 8px; font-size: 16px; cursor: pointer;
          font-family: 'Pretendard', sans-serif;
          margin-bottom: 20px;
      `;
      return btn;
    }
  
    // 각 슬라이드 데모 설정 함수들
    setupFunctionAnatomyDemo() {
      const container = document.getElementById('function-anatomy-demo');
      if (!container) return;
      const btn = this.createDemoButton('구조 분석 시작');
      container.innerHTML = '';
      container.appendChild(btn);
  
      btn.addEventListener('click', () => {
          btn.style.display = 'none';
          // 여기에 원래 createFunctionAnatomyDemo의 시각화 로직을 넣습니다.
          // 간단한 예시로 텍스트만 표시
          container.innerHTML = `<p style="font-size: 24px; color: var(--accent-success);">함수 구조 분석이 시작됩니다!</p>`;
      });
    }
  
    setupExecutionFlowDemo() {
        const container = document.getElementById('execution-simulator');
        if (!container) return;
        const btn = this.createDemoButton('실행 흐름 시뮬레이션');
        container.innerHTML = '';
        container.appendChild(btn);
        
        const vizContainer = document.createElement('div');
        container.appendChild(vizContainer);
  
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            vizContainer.innerHTML = `
                <div style="display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;">
                    <div><h4>코드 실행</h4><div id="exec-steps-div" class="code-output"></div></div>
                    <div><h4>변수 상태</h4><div id="exec-vars-div" class="code-output"></div></div>
                </div>`;
  
            const stepsDiv = document.getElementById('exec-steps-div');
            const varsDiv = document.getElementById('exec-vars-div');
            
            const steps = [
                { code: 'add(3, 5) 호출', vars: { x: 3, y: 5 } },
                { code: 'const result = x + y;', vars: { x: 3, y: 5, result: '계산 중...' } },
                { code: 'result = 8', vars: { x: 3, y: 5, result: 8 } },
                { code: 'return result;', vars: { '반환값': 8 } }
            ];
  
            let stepIndex = 0;
            const executeStep = () => {
                if (stepIndex >= steps.length) return;
                const step = steps[stepIndex];
                stepsDiv.innerHTML += `<div>${step.code}</div>`;
                
                let varsHTML = '';
                for (const [key, value] of Object.entries(step.vars)) {
                    varsHTML += `<div>${key}: ${value}</div>`;
                }
                varsDiv.innerHTML = varsHTML;
  
                stepIndex++;
                this.setAnimationTimeout(executeStep, 1500);
            };
            executeStep();
        });
    }
  
    // 나머지 데모 설정 함수들도 위와 같은 패턴으로 구현합니다.
    setupParameterIndependenceDemo() {
        const container = document.getElementById('parameter-independence-demo');
        if (!container) return;
        const btn = this.createDemoButton('독립성 테스트', 'parameter-green');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--parameter-green);">매개변수는 외부 변수와 독립적입니다!</p>`;
        });
    }
    setupReturnFlowDemo() {
        const container = document.getElementById('return-flow-demo');
        if (!container) return;
        const btn = this.createDemoButton('return 동작 보기', 'return-orange');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--return-orange);">Return을 만나면 함수는 즉시 종료됩니다!</p>`;
        });
    }
    setupScopeDemo() {
        const container = document.getElementById('scope-demo');
        if (!container) return;
        const btn = this.createDemoButton('스코프 시각화', 'scope-purple');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--scope-purple);">스코프는 변수의 유효 범위입니다.</p>`;
        });
    }
    setupScopeChainDemo() {
        const container = document.getElementById('scope-chain-demo');
        if (!container) return;
        const btn = this.createDemoButton('스코프 연쇄 추적', 'scope-purple');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--scope-purple);">내부 -> 외부 순으로 변수를 찾습니다.</p>`;
        });
    }
    setupShadowingDemo() {
        const container = document.getElementById('shadowing-demo');
        if (!container) return;
        const btn = this.createDemoButton('변수 가리기 확인', 'warning');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--warning);">내부 변수가 외부 변수를 가립니다!</p>`;
        });
    }
    setupLexicalScopingDemo() {
        const container = document.getElementById('lexical-scoping-demo');
        if (!container) return;
        const btn = this.createDemoButton('어휘적 스코핑 확인', 'accent-info');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--accent-info);">함수 정의 위치가 스코프를 결정합니다.</p>`;
        });
    }
    setupFirstClassDemo() {
        const container = document.getElementById('first-class-demo');
        if (!container) return;
        const btn = this.createDemoButton('1급 함수 기능 체험', 'accent-success');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--accent-success);">함수는 값처럼 다룰 수 있습니다.</p>`;
        });
    }
    setupArrowFunctionDemo() {
        const container = document.getElementById('arrow-function-demo');
        if (!container) return;
        const btn = this.createDemoButton('화살표 함수 변환 보기');
        container.innerHTML = '';
        container.appendChild(btn);
        btn.addEventListener('click', () => {
            container.innerHTML = `<p style="font-size: 24px; color: var(--accent-primary);">코드가 더 간결해집니다!</p>`;
        });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
  });
  
  // 스타일시트에 code-output 클래스 추가
  const style = document.createElement('style');
  style.textContent = `
  .code-output {
      background: var(--bg-code);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      min-width: 300px;
      min-height: 150px;
      text-align: left;
  }
  `;
  document.head.appendChild(style);