// 함수 프레젠테이션 컨트롤러
class PresentationController {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 12;
    this.slides = document.querySelectorAll('.slide');
    this.progressBar = document.getElementById('progress-bar');
    this.currentSlideDisplay = document.getElementById('current-slide');
    this.totalSlidesDisplay = document.getElementById('total-slides');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    
    // 애니메이션 관리
    this.activeAnimations = [];
    this.animationTimeouts = [];
    this.animationIntervals = [];
    
    this.init();
  }
  
  init() {
    console.log('PresentationController initialized');
    console.log('Total slides:', this.slides.length);
    
    this.updateDisplay();
    this.bindEvents();
    this.initializeVisualizations();
    this.initializeSlideAnimations();
    
    // 코드 하이라이팅 초기화
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }
  
  bindEvents() {
    // 네비게이션 버튼 (null 체크 추가)
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }
    
    // 키보드 네비게이션
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
    
    // 터치 제스처 (모바일)
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      if (!startX || !startY) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // 수평 스와이프가 수직 스와이프보다 클 때만 처리
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.previousSlide();
        }
      }
      
      startX = 0;
      startY = 0;
    }, { passive: true });
  }
  
  goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > this.totalSlides) return;
    
    // 이전 슬라이드의 애니메이션 정리
    this.clearAnimations();
    
    // 현재 활성 슬라이드 제거
    this.slides.forEach(slide => slide.classList.remove('active'));
    
    // 새 슬라이드 활성화
    this.currentSlide = slideNumber;
    this.slides[this.currentSlide - 1].classList.add('active');
    
    this.updateDisplay();
    this.initializeSlideAnimations();
  }
  
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
  
  updateDisplay() {
    // 진행률 업데이트
    const progress = (this.currentSlide / this.totalSlides) * 100;
    if (this.progressBar) {
      this.progressBar.style.width = `${progress}%`;
    }
    
    // 슬라이드 카운터 업데이트
    if (this.currentSlideDisplay) {
      this.currentSlideDisplay.textContent = this.currentSlide;
    }
    if (this.totalSlidesDisplay) {
      this.totalSlidesDisplay.textContent = this.totalSlides;
    }
    
    // 네비게이션 버튼 상태 업데이트
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentSlide === 1;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
  }
  
  clearAnimations() {
    // 모든 setTimeout 정리
    this.animationTimeouts.forEach(id => clearTimeout(id));
    this.animationTimeouts = [];
    
    // 모든 setInterval 정리
    this.animationIntervals.forEach(id => clearInterval(id));
    this.animationIntervals = [];
    
    // CSS 애니메이션 정리
    this.activeAnimations.forEach(element => {
      if (element && element.style) {
        element.style.animation = '';
        element.style.transform = '';
        element.style.opacity = '';
      }
    });
    this.activeAnimations = [];
  }
  
  initializeVisualizations() {
    // 각 슬라이드별 시각화 초기화는 필요할 때 동적으로 생성
  }
  
  initializeSlideAnimations() {
    console.log('Initializing animations for slide:', this.currentSlide);
    switch(this.currentSlide) {
      case 3:
        this.createFunctionAnatomyDemo();
        break;
      case 4:
        this.createExecutionFlowDemo();
        break;
      case 5:
        this.createParameterIndependenceDemo();
        break;
      case 6:
        this.createReturnFlowDemo();
        break;
      case 7:
        this.createScopeDemo();
        break;
      case 8:
        this.createScopeChainDemo();
        break;
      case 9:
        this.createShadowingDemo();
        break;
      case 10:
        this.createLexicalScopingDemo();
        break;
      case 11:
        this.createFirstClassDemo();
        break;
      case 12:
        this.createArrowFunctionDemo();
        break;
    }
  }
  
  // 슬라이드 3: 함수 구조 분석
  createFunctionAnatomyDemo() {
    const container = document.getElementById('function-anatomy-demo');
    if (!container) {
      console.warn('function-anatomy-demo container not found');
      return;
    }
    
    container.innerHTML = '';
    
    const demoContainer = document.createElement('div');
    demoContainer.style.cssText = `
      text-align: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      line-height: 1.8;
      background: var(--bg-code);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 30px;
      position: relative;
    `;
    
    // 함수 코드 예제
    const codeLines = [
      { text: 'function', color: 'var(--function-blue)', label: 'keyword' },
      { text: ' add', color: 'var(--accent-primary)', label: 'name' },
      { text: '(', color: 'var(--text-primary)', label: 'syntax' },
      { text: 'x, y', color: 'var(--parameter-green)', label: 'parameters' },
      { text: ') {', color: 'var(--text-primary)', label: 'syntax' },
      { text: '  const result = x + y;', color: 'var(--text-secondary)', label: 'body' },
      { text: '  return', color: 'var(--function-blue)', label: 'keyword' },
      { text: ' result', color: 'var(--return-orange)', label: 'return' },
      { text: ';', color: 'var(--text-primary)', label: 'syntax' },
      { text: '}', color: 'var(--text-primary)', label: 'syntax' }
    ];
    
    const codeDiv = document.createElement('div');
    codeDiv.style.cssText = 'position: relative; display: inline-block;';
    
    codeLines.forEach((line, index) => {
      const lineElement = document.createElement('span');
      lineElement.textContent = line.text;
      lineElement.style.cssText = `
        color: ${line.color};
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
        display: inline-block;
      `;
      lineElement.setAttribute('data-label', line.label);
      
      if (line.text.includes('\n') || line.text.includes('  ')) {
        lineElement.style.display = 'block';
      }
      
      codeDiv.appendChild(lineElement);
      
      // 순차적 애니메이션
      const self = this;
      self.setAnimationTimeout(() => {
        lineElement.style.opacity = '1';
        lineElement.style.transform = 'translateY(0)';
      }, index * 200);
    });
    
    demoContainer.appendChild(codeDiv);
    container.appendChild(demoContainer);
    
    // 설명 레이블 추가
    const self = this;
    self.setAnimationTimeout(() => {
      this.addFunctionLabels(demoContainer);
    }, codeLines.length * 200 + 500);
  }
  
  addFunctionLabels(container) {
    const labels = [
      { selector: '[data-label="name"]', text: '함수 이름', position: 'top' },
      { selector: '[data-label="parameters"]', text: '매개변수', position: 'top' },
      { selector: '[data-label="body"]', text: '함수 본문', position: 'right' },
      { selector: '[data-label="return"]', text: '반환값', position: 'bottom' }
    ];
    
    labels.forEach((label, index) => {
      const targetElement = container.querySelector(label.selector);
      if (targetElement) {
        const labelElement = document.createElement('div');
        labelElement.style.cssText = `
          position: absolute;
          background: var(--accent-primary);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          z-index: 10;
          pointer-events: none;
        `;
        labelElement.textContent = label.text;
        
        // 위치 설정
        const rect = targetElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        if (label.position === 'top') {
          labelElement.style.top = '-30px';
          labelElement.style.left = '50%';
          labelElement.style.transform = 'translateX(-50%) scale(0.8)';
        }
        
        targetElement.style.position = 'relative';
        targetElement.appendChild(labelElement);
        
        // 애니메이션
        const self = this;
        self.setAnimationTimeout(() => {
          labelElement.style.opacity = '1';
          labelElement.style.transform = labelElement.style.transform.replace('scale(0.8)', 'scale(1)');
        }, index * 300);
      }
    });
  }
  
  // 슬라이드 4: 실행 흐름 시뮬레이터
  createExecutionFlowDemo() {
    const container = document.getElementById('execution-simulator');
    if (!container) {
      console.warn('execution-simulator container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="start-execution" style="
            background: var(--accent-primary);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Pretendard', sans-serif;
          ">함수 실행 시뮬레이션</button>
        </div>
        <div style="display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;">
          <div style="text-align: center;">
            <h4 style="color: var(--function-blue); margin-bottom: 15px;">코드 실행</h4>
            <div id="execution-steps" style="
              background: var(--bg-code);
              border: 1px solid var(--border-color);
              border-radius: 8px;
              padding: 20px;
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              min-width: 300px;
              min-height: 150px;
              text-align: left;
            "></div>
          </div>
          <div style="text-align: center;">
            <h4 style="color: var(--parameter-green); margin-bottom: 15px;">변수 상태</h4>
            <div id="variable-state" style="
              background: var(--bg-tertiary);
              border: 1px solid var(--border-color);
              border-radius: 8px;
              padding: 20px;
              min-width: 200px;
              min-height: 150px;
            "></div>
          </div>
        </div>
      </div>
    `;
    
    const startBtn = document.getElementById('start-execution');
    const stepsDiv = document.getElementById('execution-steps');
    const variableDiv = document.getElementById('variable-state');
    
    if (startBtn && stepsDiv && variableDiv) {
      const self = this;
      startBtn.addEventListener('click', () => {
        stepsDiv.innerHTML = '';
        variableDiv.innerHTML = '';
        
        const steps = [
          { code: 'function add(x, y) {', variables: {} },
          { code: 'add(3, 5) 호출', variables: { x: 3, y: 5 } },
          { code: 'const result = x + y;', variables: { x: 3, y: 5, result: '계산 중...' } },
          { code: 'result = 3 + 5', variables: { x: 3, y: 5, result: 8 } },
          { code: 'return result;', variables: { x: 3, y: 5, result: 8 } },
          { code: '함수 종료 → 8 반환', variables: { '반환값': 8 } }
        ];
        
        const executeStep = (index) => {
          if (index >= steps.length) return;
          
          const step = steps[index];
          
          // 코드 단계 표시
          const stepElement = document.createElement('div');
          stepElement.style.cssText = `
            padding: 8px;
            margin: 4px 0;
            border-left: 3px solid var(--accent-primary);
            background: rgba(88, 166, 255, 0.1);
            color: var(--text-primary);
          `;
          stepElement.textContent = `${index + 1}. ${step.code}`;
          stepsDiv.appendChild(stepElement);
          
          // 변수 상태 업데이트
          variableDiv.innerHTML = '';
          Object.entries(step.variables).forEach(([key, value]) => {
            const varElement = document.createElement('div');
            varElement.style.cssText = `
              display: flex;
              justify-content: space-between;
              padding: 8px;
              margin: 4px 0;
              background: var(--bg-dark);
              border-radius: 4px;
              border: 1px solid var(--border-color);
            `;
            varElement.innerHTML = `
              <span style="color: var(--parameter-green);">${key}:</span>
              <span style="color: var(--return-orange);">${value}</span>
            `;
            variableDiv.appendChild(varElement);
          });
          
          // 다음 단계 실행
          self.setAnimationTimeout(() => executeStep(index + 1), 1500);
        };
        
        executeStep(0);
      });
    }
  }
  
  // 슬라이드 5: 매개변수 독립성 데모
  createParameterIndependenceDemo() {
    const container = document.getElementById('parameter-independence-demo');
    if (!container) {
      console.warn('parameter-independence-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="test-independence" style="
            background: var(--parameter-green);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">매개변수 독립성 테스트</button>
        </div>
        <div style="display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;">
          <div style="text-align: center;">
            <h4 style="color: var(--accent-primary); margin-bottom: 15px;">함수 외부</h4>
            <div id="outside-variables" style="
              background: var(--bg-tertiary);
              border: 2px solid var(--accent-primary);
              border-radius: 8px;
              padding: 20px;
              min-width: 150px;
              min-height: 100px;
            "></div>
          </div>
          <div style="font-size: 24px; color: var(--text-secondary); display: flex; align-items: center;">⚡</div>
          <div style="text-align: center;">
            <h4 style="color: var(--parameter-green); margin-bottom: 15px;">함수 내부</h4>
            <div id="inside-variables" style="
              background: var(--bg-tertiary);
              border: 2px solid var(--parameter-green);
              border-radius: 8px;
              padding: 20px;
              min-width: 150px;
              min-height: 100px;
            "></div>
          </div>
        </div>
      </div>
    `;
    
    const testBtn = document.getElementById('test-independence');
    const outsideDiv = document.getElementById('outside-variables');
    const insideDiv = document.getElementById('inside-variables');
    
    if (testBtn && outsideDiv && insideDiv) {
      const self = this;
      testBtn.addEventListener('click', () => {
        // 초기 상태
        outsideDiv.innerHTML = '<div style="color: var(--accent-primary);">변수 y = 10</div>';
        insideDiv.innerHTML = '<div style="color: var(--parameter-green);">매개변수 x = ?</div>';
        
        self.setAnimationTimeout(() => {
          insideDiv.innerHTML = `
            <div style="color: var(--parameter-green);">매개변수 x = 10</div>
            <div style="color: var(--text-secondary); font-size: 12px; margin-top: 5px;">y 값이 복사됨</div>
          `;
        }, 1000);
        
        self.setAnimationTimeout(() => {
          insideDiv.innerHTML = `
            <div style="color: var(--parameter-green);">매개변수 x = 20</div>
            <div style="color: var(--warning); font-size: 12px; margin-top: 5px;">x 값을 변경!</div>
          `;
        }, 2500);
        
        self.setAnimationTimeout(() => {
          outsideDiv.innerHTML = `
            <div style="color: var(--accent-primary);">변수 y = 10</div>
            <div style="color: var(--accent-green); font-size: 12px; margin-top: 5px;">✓ 변경되지 않음!</div>
          `;
          insideDiv.innerHTML = `
            <div style="color: var(--parameter-green);">매개변수 x = 20</div>
            <div style="color: var(--text-secondary); font-size: 12px; margin-top: 5px;">독립적인 변수</div>
          `;
        }, 4000);
      });
    }
  }
  
  // 슬라이드 6: return 동작 시각화
  createReturnFlowDemo() {
    const container = document.getElementById('return-flow-demo');
    if (!container) {
      console.warn('return-flow-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="demo-return" style="
            background: var(--return-orange);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">return 동작 보기</button>
        </div>
        <div id="return-visualization" style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          min-height: 200px;
        "></div>
      </div>
    `;
    
    const demoBtn = document.getElementById('demo-return');
    const vizDiv = document.getElementById('return-visualization');
    
    if (demoBtn && vizDiv) {
      const self = this;
      demoBtn.addEventListener('click', () => {
        vizDiv.innerHTML = '';
        
        const codeLines = [
          'function calculate() {',
          '  const a = 5;',
          '  const b = 3;',
          '  return a * b;',
          '  console.log("실행되지 않음");',
          '}'
        ];
        
        const executeAnimation = (index) => {
          if (index >= codeLines.length) {
            // 결과 표시
            self.setAnimationTimeout(() => {
              const resultDiv = document.createElement('div');
              resultDiv.style.cssText = `
                padding: 15px 30px;
                background: var(--return-orange);
                color: white;
                border-radius: 8px;
                font-size: 18px;
                font-weight: bold;
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.5s ease;
              `;
              resultDiv.textContent = '반환값: 15';
              vizDiv.appendChild(resultDiv);
              
              self.setAnimationTimeout(() => {
                resultDiv.style.opacity = '1';
                resultDiv.style.transform = 'scale(1)';
              }, 100);
            }, 500);
            return;
          }
          
          const lineDiv = document.createElement('div');
          lineDiv.style.cssText = `
            padding: 8px 16px;
            margin: 4px 0;
            font-family: 'JetBrains Mono', monospace;
            border-radius: 4px;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.5s ease;
          `;
          
          if (index === 3) {
            // return 라인 강조
            lineDiv.style.cssText += `
              background: rgba(251, 146, 60, 0.2);
              border: 2px solid var(--return-orange);
              color: var(--return-orange);
              font-weight: bold;
            `;
          } else if (index === 4) {
            // 실행되지 않는 라인
            lineDiv.style.cssText += `
              background: rgba(239, 68, 68, 0.1);
              color: var(--text-muted);
              text-decoration: line-through;
            `;
          } else {
            lineDiv.style.cssText += `
              background: var(--bg-tertiary);
              color: var(--text-primary);
            `;
          }
          
          lineDiv.textContent = codeLines[index];
          vizDiv.appendChild(lineDiv);
          
          self.setAnimationTimeout(() => {
            lineDiv.style.opacity = '1';
            lineDiv.style.transform = 'translateX(0)';
            
            if (index === 3) {
              // return에서 멈춤
              self.setAnimationTimeout(() => executeAnimation(index + 1), 1500);
            } else {
              self.setAnimationTimeout(() => executeAnimation(index + 1), 800);
            }
          }, 100);
        };
        
        executeAnimation(0);
      });
    }
    
    // 6번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-return-behavior');
    const outputDiv = document.getElementById('return-demo-output');
    
    if (additionalBtn && outputDiv) {
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const steps = [
          '함수 호출: testReturn()',
          '실행: console.log("시작");',
          '실행: return "결과값";',
          '함수 종료 (아래 코드 실행 안됨)',
          '실행되지 않음: console.log("종료");',
          '반환값: "결과값"'
        ];
        
        let currentStep = 0;
        const showStep = () => {
          if (currentStep < steps.length) {
            const stepDiv = document.createElement('div');
            stepDiv.style.cssText = `
              margin: 5px 0;
              padding: 5px;
              ${currentStep === 2 ? 'color: var(--return-orange); font-weight: bold;' : ''}
              ${currentStep === 4 ? 'color: var(--text-muted); text-decoration: line-through;' : ''}
            `;
            stepDiv.textContent = `${currentStep + 1}. ${steps[currentStep]}`;
            outputDiv.appendChild(stepDiv);
            currentStep++;
            
            self.setAnimationTimeout(showStep, 1000);
          }
        };
        
        showStep();
      });
    }
  }
  
  // 슬라이드 7: 스코프 시각화
  createScopeDemo() {
    const container = document.getElementById('scope-demo');
    if (!container) {
      console.warn('scope-demo container not found');
      return;
    }
    
    container.innerHTML = '';
    
    const scopeContainer = document.createElement('div');
    scopeContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    `;
    
    // 전역 스코프
    const globalScope = this.createScopeBox('전역 스코프', 'var(--bg-dark)', [
      'const globalVar = "전역 변수"'
    ]);
    
    // 함수 스코프
    const functionScope = this.createScopeBox('함수 스코프', 'var(--function-blue)', [
      'function add(x, y) {',
      '  const result = x + y;',
      '  return result;',
      '}'
    ]);
    
    // 접근 불가 영역
    const inaccessible = this.createScopeBox('함수 외부', 'var(--warning)', [
      'console.log(x); // ❌ 에러!',
      'console.log(result); // ❌ 에러!'
    ]);
    
    scopeContainer.appendChild(globalScope);
    scopeContainer.appendChild(functionScope);
    scopeContainer.appendChild(inaccessible);
    
    container.appendChild(scopeContainer);
    
    // 순차적 애니메이션
    [globalScope, functionScope, inaccessible].forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      
      const self = this;
      self.setAnimationTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 600);
    });
  }
  
  // 슬라이드 8: 스코프 연쇄 시각화
  createScopeChainDemo() {
    const container = document.getElementById('scope-chain-demo');
    if (!container) {
      console.warn('scope-chain-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="trace-variable" style="
            background: var(--scope-purple);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">변수 찾기 과정 추적</button>
        </div>
        <div id="scope-chain-visualization" style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          min-height: 300px;
        "></div>
      </div>
    `;
    
    const traceBtn = document.getElementById('trace-variable');
    const vizDiv = document.getElementById('scope-chain-visualization');
    
    if (traceBtn && vizDiv) {
      const self = this;
      traceBtn.addEventListener('click', () => {
        vizDiv.innerHTML = '';
        
        // 중첩된 스코프 구조
        const scopes = [
          { name: '전역 스코프', vars: ['const five = 5'], level: 0 },
          { name: 'add5 함수 스코프', vars: ['function add5(x) {', '  // x 매개변수'], level: 1 },
          { name: 'add 함수 스코프', vars: ['  function add(y) {', '    return x + y + five;', '  }'], level: 2 }
        ];
        
        // 스코프 박스들 생성
        scopes.forEach((scope, index) => {
          const scopeBox = document.createElement('div');
          scopeBox.style.cssText = `
            border: 3px solid var(--scope-purple);
            border-radius: 12px;
            padding: 20px;
            margin: 10px;
            background: rgba(167, 139, 250, ${0.1 + index * 0.05});
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.5s ease;
            min-width: 300px;
          `;
          
          const scopeTitle = document.createElement('h4');
          scopeTitle.textContent = scope.name;
          scopeTitle.style.cssText = `
            color: var(--scope-purple);
            margin-bottom: 10px;
            font-size: 16px;
          `;
          
          const varsDiv = document.createElement('div');
          varsDiv.style.cssText = `
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            color: var(--text-primary);
          `;
          
          scope.vars.forEach(varText => {
            const varElement = document.createElement('div');
            varElement.textContent = varText;
            varElement.style.marginBottom = '5px';
            varsDiv.appendChild(varElement);
          });
          
          scopeBox.appendChild(scopeTitle);
          scopeBox.appendChild(varsDiv);
          vizDiv.appendChild(scopeBox);
          
          // 애니메이션
          self.setAnimationTimeout(() => {
            scopeBox.style.opacity = '1';
            scopeBox.style.transform = 'scale(1)';
          }, index * 500);
        });
        
        // 변수 찾기 시뮬레이션
        self.setAnimationTimeout(() => {
          const searchDiv = document.createElement('div');
          searchDiv.style.cssText = `
            padding: 15px;
            background: var(--accent-info);
            color: white;
            border-radius: 8px;
            margin-top: 20px;
            font-weight: bold;
          `;
          searchDiv.textContent = '변수 "five" 찾기: 내부 → 상위 → 전역 스코프에서 발견! ✓';
          vizDiv.appendChild(searchDiv);
        }, scopes.length * 500 + 1000);
      });
    }
    
    // 8번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-scope-chain');
    const outputDiv = document.getElementById('scope-chain-output');
    
    if (additionalBtn && outputDiv) {
      const self = this;
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const steps = [
          '변수 "five" 찾기 시작...',
          '1단계: add 함수 스코프에서 검색 → 없음',
          '2단계: add5 함수 스코프에서 검색 → 없음',
          '3단계: 전역 스코프에서 검색 → 발견!',
          'const five = 5를 찾아서 사용',
          '스코프 연쇄 완료 ✓'
        ];
        
        let currentStep = 0;
        const showStep = () => {
          if (currentStep < steps.length) {
            const stepDiv = document.createElement('div');
            stepDiv.style.cssText = `
              margin: 8px 0;
              padding: 8px;
              ${currentStep === 3 ? 'color: var(--accent-success); font-weight: bold;' : ''}
              ${currentStep === 5 ? 'color: var(--accent-primary); font-weight: bold;' : ''}
            `;
            stepDiv.textContent = steps[currentStep];
            outputDiv.appendChild(stepDiv);
            currentStep++;
            
            self.setAnimationTimeout(showStep, 1200);
          }
        };
        
        showStep();
      });
    }
  }
  
  // 슬라이드 9: 변수 가리기 데모
  createShadowingDemo() {
    const container = document.getElementById('shadowing-demo');
    if (!container) {
      console.warn('shadowing-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="demo-shadowing" style="
            background: var(--warning);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">변수 가리기 확인</button>
        </div>
        <div id="shadowing-visualization" style="
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
          min-height: 200px;
        "></div>
      </div>
    `;
    
    const demoBtn = document.getElementById('demo-shadowing');
    const vizDiv = document.getElementById('shadowing-visualization');
    
    if (demoBtn && vizDiv) {
      const self = this;
      demoBtn.addEventListener('click', () => {
        vizDiv.innerHTML = '';
        
        // 각 스코프별 변수 상태
        const scopes = [
          { name: '전역', variable: 'x = 3', visible: true, color: 'var(--accent-primary)' },
          { name: '함수 add5', variable: 'x = 10 (매개변수)', visible: true, color: 'var(--parameter-green)' },
          { name: '함수 add', variable: 'x = 5 (매개변수)', visible: true, color: 'var(--return-orange)' }
        ];
        
        scopes.forEach((scope, index) => {
          const scopeDiv = document.createElement('div');
          scopeDiv.style.cssText = `
            border: 2px solid ${scope.color};
            border-radius: 8px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            min-width: 180px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
          `;
          
          const nameDiv = document.createElement('div');
          nameDiv.style.cssText = `
            color: ${scope.color};
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 16px;
          `;
          nameDiv.textContent = scope.name + ' 스코프';
          
          const varDiv = document.createElement('div');
          varDiv.style.cssText = `
            font-family: 'JetBrains Mono', monospace;
            color: var(--text-primary);
            margin-bottom: 10px;
          `;
          varDiv.textContent = scope.variable;
          
          const statusDiv = document.createElement('div');
          statusDiv.style.cssText = `
            font-size: 12px;
            color: ${index === 0 ? 'var(--text-muted)' : scope.color};
          `;
          statusDiv.textContent = index === 0 ? '가려짐 😴' : '사용됨 ✓';
          
          scopeDiv.appendChild(nameDiv);
          scopeDiv.appendChild(varDiv);
          scopeDiv.appendChild(statusDiv);
          vizDiv.appendChild(scopeDiv);
          
          // 애니메이션
          self.setAnimationTimeout(() => {
            scopeDiv.style.opacity = '1';
            scopeDiv.style.transform = 'translateY(0)';
          }, index * 400);
        });
      });
    }
    
    // 9번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-shadowing');
    const outputDiv = document.getElementById('shadowing-output');
    
    if (additionalBtn && outputDiv) {
      const self = this;
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const steps = [
          'const x = 3; // 전역 스코프에 x 선언',
          'function add5(x) { // 매개변수 x가 전역 x를 가림',
          '  function add(x, y) { // 매개변수 x가 상위 x를 가림',
          '    return x + y; // 가장 가까운 x (add 함수의 x) 사용',
          '  }',
          '  return add(x, 5); // add5 함수의 x 사용',
          '}',
          'add5(10); // 결과: 15 (10 + 5)'
        ];
        
        let currentStep = 0;
        const showStep = () => {
          if (currentStep < steps.length) {
            const stepDiv = document.createElement('div');
            stepDiv.style.cssText = `
              margin: 5px 0;
              padding: 5px;
              font-family: 'JetBrains Mono', monospace;
              ${currentStep === 1 || currentStep === 2 ? 'color: var(--warning); font-weight: bold;' : ''}
              ${currentStep === 7 ? 'color: var(--accent-success); font-weight: bold;' : ''}
            `;
            stepDiv.textContent = steps[currentStep];
            outputDiv.appendChild(stepDiv);
            currentStep++;
            
            self.setAnimationTimeout(showStep, 800);
          }
        };
        
        showStep();
      });
    }
  }
  
  // 슬라이드 10: 어휘적 스코핑 데모
  createLexicalScopingDemo() {
    const container = document.getElementById('lexical-scoping-demo');
    if (!container) {
      console.warn('lexical-scoping-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="demo-lexical" style="
            background: var(--accent-info);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">어휘적 스코핑 확인</button>
        </div>
        <div id="lexical-visualization" style="
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          min-height: 250px;
        "></div>
      </div>
    `;
    
    const demoBtn = document.getElementById('demo-lexical');
    const vizDiv = document.getElementById('lexical-visualization');
    
    if (demoBtn && vizDiv) {
      const self = this;
      demoBtn.addEventListener('click', () => {
        vizDiv.innerHTML = '';
        
        // 올바른 예제와 잘못된 예제 비교
        const examples = [
          {
            title: '❌ 잘못된 이해',
            code: [
              'function outer() {',
              '  const secret = "비밀";',
              '  return inner();',
              '}',
              '',
              'function inner() {',
              '  return secret; // 에러!',
              '}'
            ],
            result: 'ReferenceError',
            color: 'var(--warning)'
          },
          {
            title: '✅ 올바른 방법',
            code: [
              'function outer() {',
              '  const secret = "비밀";',
              '  function inner() {',
              '    return secret; // 접근 가능!',
              '  }',
              '  return inner();',
              '}'
            ],
            result: '"비밀"',
            color: 'var(--accent-green)'
          }
        ];
        
        examples.forEach((example, index) => {
          const exampleDiv = document.createElement('div');
          exampleDiv.style.cssText = `
            border: 2px solid ${example.color};
            border-radius: 12px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.02);
            min-width: 300px;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.5s ease;
          `;
          
          const titleDiv = document.createElement('div');
          titleDiv.style.cssText = `
            color: ${example.color};
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 16px;
          `;
          titleDiv.textContent = example.title;
          
          const codeDiv = document.createElement('div');
          codeDiv.style.cssText = `
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            background: var(--bg-code);
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 10px;
            text-align: left;
            line-height: 1.5;
          `;
          codeDiv.textContent = example.code.join('\n');
          
          const resultDiv = document.createElement('div');
          resultDiv.style.cssText = `
            color: ${example.color};
            font-weight: bold;
            font-size: 14px;
          `;
          resultDiv.textContent = `결과: ${example.result}`;
          
          exampleDiv.appendChild(titleDiv);
          exampleDiv.appendChild(codeDiv);
          exampleDiv.appendChild(resultDiv);
          vizDiv.appendChild(exampleDiv);
          
          // 애니메이션
          self.setAnimationTimeout(() => {
            exampleDiv.style.opacity = '1';
            exampleDiv.style.transform = 'scale(1)';
          }, index * 600);
        });
      });
    }
    
    // 10번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-lexical');
    const outputDiv = document.getElementById('lexical-output');
    
    if (additionalBtn && outputDiv) {
      const self = this;
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const explanation = [
          '어휘적 스코핑 규칙:',
          '',
          '✅ 함수가 정의된 위치에 따라 스코프 결정',
          '❌ 함수가 호출되는 위치는 상관없음',
          '',
          '예시 분석:',
          '- inner()가 outer() 안에서 호출되어도',
          '- inner() 함수는 outer() 스코프에 접근 불가',
          '- 함수 정의 위치가 다르기 때문',
          '',
          '올바른 방법:',
          '- inner()를 outer() 안에서 정의',
          '- 중첩 함수가 되어 상위 스코프 접근 가능'
        ];
        
        explanation.forEach((line, index) => {
          const lineDiv = document.createElement('div');
          lineDiv.style.cssText = `
            margin: 3px 0;
            padding: 2px;
            ${line.startsWith('✅') ? 'color: var(--accent-success); font-weight: bold;' : ''}
            ${line.startsWith('❌') ? 'color: var(--warning); font-weight: bold;' : ''}
            ${line.startsWith('예시') || line.startsWith('올바른') ? 'color: var(--accent-primary); font-weight: bold; margin-top: 10px;' : ''}
          `;
          lineDiv.textContent = line;
          outputDiv.appendChild(lineDiv);
        });
      });
    }
  }
  
  // 슬라이드 11: 1급 함수 데모
  createFirstClassDemo() {
    const container = document.getElementById('first-class-demo');
    if (!container) {
      console.warn('first-class-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="demo-first-class" style="
            background: var(--accent-success);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">1급 함수 기능 체험</button>
        </div>
        <div id="first-class-examples" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        "></div>
      </div>
    `;
    
    const demoBtn = document.getElementById('demo-first-class');
    const examplesDiv = document.getElementById('first-class-examples');
    
    if (demoBtn && examplesDiv) {
      const self = this;
      demoBtn.addEventListener('click', () => {
        examplesDiv.innerHTML = '';
        
        const features = [
          {
            title: '변수에 할당',
            code: 'const myFunc = function() {\n  return "Hello!";\n};',
            demo: 'myFunc() → "Hello!"'
          },
          {
            title: '인수로 전달',
            code: '[1,2,3].map(function(x) {\n  return x * 2;\n});',
            demo: 'map 함수의 인수로 전달'
          },
          {
            title: '반환값으로 사용',
            code: 'function create() {\n  return function() {\n    return "Created!";\n  };\n}',
            demo: 'create()() → "Created!"'
          },
          {
            title: '객체 속성으로 저장',
            code: 'const obj = {\n  method: function() {\n    return "Method!";\n  }\n};',
            demo: 'obj.method() → "Method!"'
          }
        ];
        
        features.forEach((feature, index) => {
          const featureDiv = document.createElement('div');
          featureDiv.style.cssText = `
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 15px;
            background: var(--bg-tertiary);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
          `;
          
          const titleDiv = document.createElement('div');
          titleDiv.style.cssText = `
            color: var(--accent-success);
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 14px;
          `;
          titleDiv.textContent = feature.title;
          
          const codeDiv = document.createElement('div');
          codeDiv.style.cssText = `
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            background: var(--bg-code);
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 8px;
            text-align: left;
            line-height: 1.4;
            white-space: pre-line;
          `;
          codeDiv.textContent = feature.code;
          
          const demoDiv = document.createElement('div');
          demoDiv.style.cssText = `
            color: var(--return-orange);
            font-size: 12px;
            font-weight: bold;
          `;
          demoDiv.textContent = feature.demo;
          
          featureDiv.appendChild(titleDiv);
          featureDiv.appendChild(codeDiv);
          featureDiv.appendChild(demoDiv);
          examplesDiv.appendChild(featureDiv);
          
          // 애니메이션
          self.setAnimationTimeout(() => {
            featureDiv.style.opacity = '1';
            featureDiv.style.transform = 'translateY(0)';
          }, index * 300);
        });
      });
    }
    
    // 11번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-first-class');
    const outputDiv = document.getElementById('first-class-output');
    
    if (additionalBtn && outputDiv) {
      const self = this;
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const examples = [
          '1급 함수 예제들:',
          '',
          '// 변수 할당',
          'const greet = function(name) { return "Hello " + name; };',
          'console.log(greet("World")); // "Hello World"',
          '',
          '// 배열에 저장',
          'const operations = [add, subtract, multiply];',
          'operations[0](5, 3); // add(5, 3) 실행',
          '',
          '// 고차 함수 (함수를 반환하는 함수)',
          'function multiplier(factor) {',
          '  return function(number) {',
          '    return number * factor;',
          '  };',
          '}',
          'const double = multiplier(2);',
          'double(5); // 10'
        ];
        
        examples.forEach((line, index) => {
          const lineDiv = document.createElement('div');
          lineDiv.style.cssText = `
            margin: 2px 0;
            font-family: ${line.startsWith('//') || line.includes('function') || line.includes('const') ? "'JetBrains Mono', monospace" : "inherit"};
            font-size: ${line.startsWith('//') || line.includes('function') || line.includes('const') ? '12px' : '14px'};
            color: ${line.startsWith('1급') ? 'var(--accent-primary)' : 'var(--text-primary)'};
            font-weight: ${line.startsWith('1급') ? 'bold' : 'normal'};
          `;
          lineDiv.textContent = line;
          outputDiv.appendChild(lineDiv);
        });
      });
    }
  }
  
  // 슬라이드 12: 화살표 함수 데모
  createArrowFunctionDemo() {
    const container = document.getElementById('arrow-function-demo');
    if (!container) {
      console.warn('arrow-function-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="demo-arrow" style="
            background: var(--accent-primary);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">화살표 함수 변환 보기</button>
        </div>
        <div id="arrow-transformations" style="
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        "></div>
      </div>
    `;
    
    const demoBtn = document.getElementById('demo-arrow');
    const transformDiv = document.getElementById('arrow-transformations');
    
    if (demoBtn && transformDiv) {
      const self = this;
      demoBtn.addEventListener('click', () => {
        transformDiv.innerHTML = '';
        
        const transformations = [
          {
            traditional: 'function add(x, y) {\n  return x + y;\n}',
            arrow: 'const add = (x, y) => x + y;',
            note: '간단한 반환식'
          },
          {
            traditional: 'function square(x) {\n  return x * x;\n}',
            arrow: 'const square = x => x * x;',
            note: '매개변수 하나일 때 괄호 생략'
          },
          {
            traditional: 'function greet() {\n  return "Hello!";\n}',
            arrow: 'const greet = () => "Hello!";',
            note: '매개변수 없을 때'
          },
          {
            traditional: '[1,2,3].filter(function(x) {\n  return x > 1;\n});',
            arrow: '[1,2,3].filter(x => x > 1);',
            note: '배열 메서드에서 활용'
          }
        ];
        
        transformations.forEach((transform, index) => {
          const transformContainer = document.createElement('div');
          transformContainer.style.cssText = `
            display: flex;
            gap: 30px;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.6s ease;
          `;
          
          const traditionalDiv = document.createElement('div');
          traditionalDiv.style.cssText = `
            border: 2px solid var(--text-secondary);
            border-radius: 8px;
            padding: 15px;
            background: var(--bg-tertiary);
            min-width: 250px;
          `;
          traditionalDiv.innerHTML = `
            <div style="color: var(--text-secondary); font-size: 14px; margin-bottom: 8px;">전통적인 함수</div>
            <pre style="font-family: 'JetBrains Mono', monospace; font-size: 12px; margin: 0; line-height: 1.4;">${transform.traditional}</pre>
          `;
          
          const arrowIcon = document.createElement('div');
          arrowIcon.style.cssText = `
            font-size: 24px;
            color: var(--accent-primary);
            font-weight: bold;
          `;
          arrowIcon.textContent = '→';
          
          const arrowDiv = document.createElement('div');
          arrowDiv.style.cssText = `
            border: 2px solid var(--accent-primary);
            border-radius: 8px;
            padding: 15px;
            background: rgba(88, 166, 255, 0.1);
            min-width: 250px;
          `;
          arrowDiv.innerHTML = `
            <div style="color: var(--accent-primary); font-size: 14px; margin-bottom: 8px;">화살표 함수</div>
            <pre style="font-family: 'JetBrains Mono', monospace; font-size: 12px; margin: 0; line-height: 1.4;">${transform.arrow}</pre>
            <div style="color: var(--accent-success); font-size: 11px; margin-top: 8px;">💡 ${transform.note}</div>
          `;
          
          transformContainer.appendChild(traditionalDiv);
          transformContainer.appendChild(arrowIcon);
          transformContainer.appendChild(arrowDiv);
          transformDiv.appendChild(transformContainer);
          
          // 애니메이션
          self.setAnimationTimeout(() => {
            transformContainer.style.opacity = '1';
            transformContainer.style.transform = 'translateX(0)';
          }, index * 700);
        });
      });
    }
    
    // 12번 슬라이드의 추가 인터랙션 버튼
    const additionalBtn = document.getElementById('demo-arrow');
    const outputDiv = document.getElementById('arrow-output');
    
    if (additionalBtn && outputDiv) {
      const self = this;
      additionalBtn.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        
        const examples = [
          '화살표 함수 변환 규칙:',
          '',
          '1. 기본 형태:',
          'function(x, y) { return x + y; }',
          '↓',
          '(x, y) => x + y',
          '',
          '2. 매개변수가 하나일 때:',
          'function(x) { return x * 2; }',
          '↓',
          'x => x * 2  // 괄호 생략 가능',
          '',
          '3. 매개변수가 없을 때:',
          'function() { return "hello"; }',
          '↓',
          '() => "hello"  // 빈 괄호 필요',
          '',
          '4. 블록 구문이 필요할 때:',
          '(x, y) => {',
          '  const result = x + y;',
          '  return result;',
          '}'
        ];
        
        examples.forEach((line, index) => {
          const lineDiv = document.createElement('div');
          lineDiv.style.cssText = `
            margin: 2px 0;
            font-family: ${line.includes('function') || line.includes('=>') || line.includes('const') ? "'JetBrains Mono', monospace" : "inherit"};
            font-size: ${line.includes('function') || line.includes('=>') || line.includes('const') ? '12px' : '14px'};
            color: ${line.startsWith('화살표') || line.match(/^\d\./) ? 'var(--accent-primary)' : 'var(--text-primary)'};
            font-weight: ${line.startsWith('화살표') || line.match(/^\d\./) ? 'bold' : 'normal'};
            text-align: ${line === '↓' ? 'center' : 'left'};
            color: ${line === '↓' ? 'var(--accent-success)' : ''};
            font-size: ${line === '↓' ? '18px' : ''};
          `;
          lineDiv.textContent = line;
          outputDiv.appendChild(lineDiv);
        });
      });
    }
  }
  
  // 유틸리티 메서드들
  createScopeBox(title, borderColor, content) {
    const box = document.createElement('div');
    box.style.cssText = `
      border: 3px solid ${borderColor};
      border-radius: 12px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.02);
      min-width: 250px;
      transition: all 0.5s ease;
    `;
    
    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = `
      color: ${borderColor};
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      text-align: center;
    `;
    titleDiv.textContent = title;
    
    const contentDiv = document.createElement('div');
    contentDiv.style.cssText = `
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-primary);
      text-align: left;
      line-height: 1.4;
    `;
    
    content.forEach(line => {
      const lineDiv = document.createElement('div');
      lineDiv.textContent = line;
      lineDiv.style.marginBottom = '4px';
      contentDiv.appendChild(lineDiv);
    });
    
    box.appendChild(titleDiv);
    box.appendChild(contentDiv);
    
    this.activeAnimations.push(box);
    return box;
  }
  
  setAnimationTimeout(callback, delay) {
    const id = setTimeout(callback, delay);
    this.animationTimeouts.push(id);
    return id;
  }
  
  setAnimationInterval(callback, interval) {
    const id = setInterval(callback, interval);
    this.animationIntervals.push(id);
    return id;
  }
}

// DOM 로드 완료 시 프레젠테이션 초기화
document.addEventListener('DOMContentLoaded', () => {
  new PresentationController();
});