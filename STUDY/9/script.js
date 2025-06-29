// 제어 구문 프레젠테이션 컨트롤러
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
    switch(this.currentSlide) {
      case 3:
        this.createConditionalFlowchart();
        break;
      case 4:
        this.createDiceGameDemo();
        break;
      case 6:
        this.createMultiConditionFlow();
        break;
      case 8:
        this.createBreakFlowDemo();
        break;
      case 10:
        this.createWhileExecutionDemo();
        break;
      case 12:
        this.createBreakContinueDemo();
        break;
    }
  }
  
  // 슬라이드 3: 조건문 흐름도
  createConditionalFlowchart() {
    const container = document.getElementById('conditional-flowchart');
    if (!container) {
      console.warn('conditional-flowchart container not found');
      return;
    }
    
    container.innerHTML = '';
    
    const flowchart = document.createElement('div');
    flowchart.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      font-family: 'Pretendard', sans-serif;
    `;
    
    // 조건 박스
    const conditionBox = this.createFlowElement('조건', '#58a6ff', 'diamond');
    
    // 참/거짓 경로
    const trueBox = this.createFlowElement('참일 때 실행', '#3fb950', 'rectangle');
    const falseBox = this.createFlowElement('거짓일 때 실행', '#ff7b72', 'rectangle');
    
    // 연결 화살표와 함께 배치
    const pathContainer = document.createElement('div');
    pathContainer.style.cssText = `
      display: flex;
      gap: 60px;
      align-items: center;
    `;
    
    const trueContainer = document.createElement('div');
    trueContainer.style.textAlign = 'center';
    trueContainer.innerHTML = `
      <div style="color: #3fb950; font-weight: bold; margin-bottom: 10px;">✓ TRUE</div>
    `;
    trueContainer.appendChild(trueBox);
    
    const falseContainer = document.createElement('div');
    falseContainer.style.textAlign = 'center';
    falseContainer.innerHTML = `
      <div style="color: #ff7b72; font-weight: bold; margin-bottom: 10px;">✗ FALSE</div>
    `;
    falseContainer.appendChild(falseBox);
    
    pathContainer.appendChild(trueContainer);
    pathContainer.appendChild(falseContainer);
    
    flowchart.appendChild(conditionBox);
    flowchart.appendChild(pathContainer);
    
    container.appendChild(flowchart);
    
    // 애니메이션 효과
    this.animateFlowchart([conditionBox, trueBox, falseBox]);
  }
  
  // 슬라이드 4: 주사위 게임 데모
  createDiceGameDemo() {
    const container = document.getElementById('dice-game-demo');
    if (!container) {
      console.warn('dice-game-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="margin-bottom: 20px;">
          <button id="roll-dice-btn" style="
            background: var(--accent-blue);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Pretendard', sans-serif;
            transition: all 0.3s ease;
          ">🎲 주사위 굴리기</button>
        </div>
        <div id="dice-result" style="
          font-size: 48px;
          margin: 20px 0;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">?</div>
        <div id="game-message" style="
          font-size: 18px;
          color: var(--text-secondary);
          min-height: 30px;
        "></div>
      </div>
    `;
    
    const rollBtn = document.getElementById('roll-dice-btn');
    const resultDiv = document.getElementById('dice-result');
    const messageDiv = document.getElementById('game-message');
    
    if (rollBtn && resultDiv && messageDiv) {
      const self = this; // this 컨텍스트 저장
      rollBtn.addEventListener('click', () => {
        // 주사위 굴리는 애니메이션
        let animationCount = 0;
        const rollAnimation = self.setAnimationInterval(() => {
          resultDiv.textContent = Math.ceil(Math.random() * 6);
          animationCount++;
          
          if (animationCount > 10) {
            clearInterval(rollAnimation);
            
            // 최종 결과
            const finalResult = Math.ceil(Math.random() * 6);
            resultDiv.textContent = finalResult;
            
            // 게임 로직
            if (finalResult >= 4) {
              messageDiv.innerHTML = '<span style="color: var(--accent-green);">🎉 당신이 이겼습니다!</span>';
            } else {
              messageDiv.innerHTML = '<span style="color: var(--warning);">😢 당신이 졌습니다.</span>';
            }
          }
        }, 100);
      });
    }
  }
  
  // 슬라이드 6: 다중 조건문 흐름
  createMultiConditionFlow() {
    const container = document.getElementById('multi-condition-flow');
    if (!container) {
      console.warn('multi-condition-flow container not found');
      return;
    }
    
    container.innerHTML = '';
    
    const flowContainer = document.createElement('div');
    flowContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-family: 'Pretendard', sans-serif;
    `;
    
    // 조건들을 순서대로 표시
    const conditions = [
      { text: 'result >= 5?', trueText: '승리!', falseNext: true },
      { text: 'result >= 3?', trueText: '무승부', falseNext: true },
      { text: '패배', trueText: '', falseNext: false }
    ];
    
    conditions.forEach((condition, index) => {
      const conditionRow = document.createElement('div');
      conditionRow.style.cssText = `
        display: flex;
        align-items: center;
        gap: 20px;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
      `;
      
      if (index < 2) {
        const conditionBox = this.createFlowElement(condition.text, '#58a6ff', 'diamond');
        const arrow = document.createElement('div');
        arrow.textContent = '→';
        arrow.style.cssText = 'font-size: 24px; color: var(--accent-green);';
        const resultBox = this.createFlowElement(condition.trueText, '#3fb950', 'rectangle');
        
        conditionRow.appendChild(conditionBox);
        conditionRow.appendChild(arrow);
        conditionRow.appendChild(resultBox);
      } else {
        const resultBox = this.createFlowElement(condition.text, '#ff7b72', 'rectangle');
        conditionRow.appendChild(resultBox);
      }
      
      flowContainer.appendChild(conditionRow);
      
      // 순차적 애니메이션
      const self = this;
      self.setAnimationTimeout(() => {
        conditionRow.style.opacity = '1';
        conditionRow.style.transform = 'translateY(0)';
      }, index * 500);
    });
    
    container.appendChild(flowContainer);
  }
  
  // 슬라이드 8: break 흐름 데모
  createBreakFlowDemo() {
    const container = document.getElementById('break-flow-demo');
    if (!container) {
      console.warn('break-flow-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap; justify-content: center;">
        <div style="text-align: center;">
          <h4 style="color: var(--warning); margin-bottom: 15px;">break 없음</h4>
          <div id="without-break-flow" style="display: flex; flex-direction: column; gap: 10px;"></div>
        </div>
        <div style="font-size: 24px; color: var(--accent-blue);">VS</div>
        <div style="text-align: center;">
          <h4 style="color: var(--accent-green); margin-bottom: 15px;">break 있음</h4>
          <div id="with-break-flow" style="display: flex; flex-direction: column; gap: 10px;"></div>
        </div>
      </div>
    `;
    
    const withoutBreakFlow = document.getElementById('without-break-flow');
    const withBreakFlow = document.getElementById('with-break-flow');
    
    // break 없는 경우의 흐름
    const withoutBreakSteps = [
      { text: 'case "blue"', active: true },
      { text: 'result = "파랑색"', active: true },
      { text: '⚠️ break 없음!', active: true },
      { text: 'case "purple"', active: true },
      { text: 'result = "보라색"', active: true },
      { text: 'break', active: false }
    ];
    
    // break 있는 경우의 흐름
    const withBreakSteps = [
      { text: 'case "blue"', active: true },
      { text: 'result = "파랑색"', active: true },
      { text: '✓ break', active: true },
      { text: 'case "purple"', active: false },
      { text: 'result = "보라색"', active: false },
      { text: 'break', active: false }
    ];
    
    // 단계별 애니메이션
    withoutBreakSteps.forEach((step, index) => {
      const stepElement = this.createStepElement(step.text, step.active, index < 3);
      withoutBreakFlow.appendChild(stepElement);
    });
    
    withBreakSteps.forEach((step, index) => {
      const stepElement = this.createStepElement(step.text, step.active, index < 3);
      withBreakFlow.appendChild(stepElement);
    });
  }
  
  // 슬라이드 10: while 실행 데모
  createWhileExecutionDemo() {
    const container = document.getElementById('while-execution');
    if (!container) {
      console.warn('while-execution container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <button id="start-while-demo" style="
            background: var(--accent-green);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Pretendard', sans-serif;
          ">while 루프 시작</button>
        </div>
        <div style="display: flex; gap: 30px; justify-content: center; align-items: center; flex-wrap: wrap;">
          <div style="text-align: center;">
            <div style="color: var(--accent-blue); margin-bottom: 10px;">변수 i</div>
            <div id="variable-i" style="
              font-size: 48px;
              font-family: 'JetBrains Mono', monospace;
              color: var(--accent-blue);
              background: var(--bg-tertiary);
              padding: 20px;
              border-radius: 8px;
              min-width: 80px;
            ">0</div>
          </div>
          <div style="text-align: center;">
            <div style="color: var(--accent-purple); margin-bottom: 10px;">조건: i < 5</div>
            <div id="condition-result" style="
              font-size: 24px;
              color: var(--accent-green);
              background: var(--bg-tertiary);
              padding: 15px;
              border-radius: 8px;
              min-width: 100px;
            ">true</div>
          </div>
          <div style="text-align: center;">
            <div style="color: var(--accent-orange); margin-bottom: 10px;">출력</div>
            <div id="output-log" style="
              background: var(--bg-dark);
              border: 1px solid var(--border-color);
              border-radius: 8px;
              padding: 15px;
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              min-width: 200px;
              max-height: 120px;
              overflow-y: auto;
              text-align: left;
            "></div>
          </div>
        </div>
      </div>
    `;
    
    const startBtn = document.getElementById('start-while-demo');
    const variableDiv = document.getElementById('variable-i');
    const conditionDiv = document.getElementById('condition-result');
    const outputDiv = document.getElementById('output-log');
    
    if (startBtn && variableDiv && conditionDiv && outputDiv) {
      const self = this; // this 컨텍스트 저장
      startBtn.addEventListener('click', () => {
        let i = 0;
        variableDiv.textContent = i;
        conditionDiv.textContent = 'true';
        outputDiv.textContent = '';
        
        const executeStep = () => {
          if (i < 5) {
            // 출력 추가
            outputDiv.textContent += `현재 i의 값: ${i}\n`;
            outputDiv.scrollTop = outputDiv.scrollHeight;
            
            // i 증가
            i++;
            
            self.setAnimationTimeout(() => {
              variableDiv.textContent = i;
              
              // 조건 확인
              if (i < 5) {
                conditionDiv.textContent = 'true';
                conditionDiv.style.color = 'var(--accent-green)';
                self.setAnimationTimeout(executeStep, 800);
              } else {
                conditionDiv.textContent = 'false';
                conditionDiv.style.color = 'var(--warning)';
                self.setAnimationTimeout(() => {
                  outputDiv.textContent += '루프가 종료되었습니다.';
                  outputDiv.scrollTop = outputDiv.scrollHeight;
                }, 500);
              }
            }, 500);
          }
        };
        
        self.setAnimationTimeout(executeStep, 500);
      });
    }
  }
  
  // 슬라이드 12: break와 continue 데모
  createBreakContinueDemo() {
    const container = document.getElementById('break-continue-demo');
    if (!container) {
      console.warn('break-continue-demo container not found');
      return;
    }
    
    container.innerHTML = `
      <div style="display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <h4 style="color: var(--warning); margin-bottom: 15px;">🛑 break 예제</h4>
          <button id="break-demo-btn" style="
            background: var(--warning);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 15px;
          ">퀴즈 시작</button>
          <div id="break-demo-result" style="
            background: var(--bg-dark);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            min-width: 250px;
            min-height: 100px;
            text-align: left;
          "></div>
        </div>
        
        <div style="text-align: center;">
          <h4 style="color: var(--accent-blue); margin-bottom: 15px;">⏭️ continue 예제</h4>
          <button id="continue-demo-btn" style="
            background: var(--accent-blue);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 15px;
          ">7의 배수 찾기</button>
          <div id="continue-demo-result" style="
            background: var(--bg-dark);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            min-width: 250px;
            min-height: 100px;
            text-align: left;
            overflow-y: auto;
          "></div>
        </div>
      </div>
    `;
    
    const breakBtn = document.getElementById('break-demo-btn');
    const continueBtn = document.getElementById('continue-demo-btn');
    const breakResult = document.getElementById('break-demo-result');
    const continueResult = document.getElementById('continue-demo-result');
    
    // break 데모
    if (breakBtn && breakResult) {
      const self = this; // this 컨텍스트 저장
      breakBtn.addEventListener('click', () => {
      breakResult.textContent = '';
      let attempts = 0;
      const maxAttempts = 5;
      
      const simulateQuiz = () => {
        attempts++;
        const answers = ['빨강', '초록', '파랑', '노랑', '초록'];
        const currentAnswer = answers[attempts - 1];
        
        breakResult.textContent += `시도 ${attempts}: "${currentAnswer}"\n`;
        
        if (currentAnswer === '초록') {
          breakResult.textContent += '정답입니다! 🎉\n';
          breakResult.textContent += 'break 실행 - 루프 종료\n';
          return;
        } else {
          breakResult.textContent += '틀렸습니다!\n';
          
          if (attempts < maxAttempts) {
            self.setAnimationTimeout(simulateQuiz, 1000);
          }
        }
      };
      
      breakResult.textContent = '퀴즈: 빨강의 보색은?\n\n';
      self.setAnimationTimeout(simulateQuiz, 500);
      });
    }
    
    // continue 데모
    if (continueBtn && continueResult) {
      const self = this; // this 컨텍스트 저장
      continueBtn.addEventListener('click', () => {
      continueResult.textContent = '';
      let i = 1;
      
      const findMultiples = () => {
        if (i > 30) {
          continueResult.textContent += '\n루프 완료!';
          return;
        }
        
        continueResult.textContent += `i = ${i}: `;
        
        if (i % 7 !== 0) {
          continueResult.textContent += 'continue (건너뛰기)\n';
        } else {
          continueResult.textContent += `${i}는 7의 배수! ✓\n`;
        }
        
        continueResult.scrollTop = continueResult.scrollHeight;
        i++;
        
        self.setAnimationTimeout(findMultiples, 300);
      };
      
      continueResult.textContent = '7의 배수 찾기 (1-30)\n\n';
      self.setAnimationTimeout(findMultiples, 500);
      });
    }
  }
  
  // 유틸리티 메서드들
  createFlowElement(text, color, shape) {
    const element = document.createElement('div');
    
    const baseStyle = `
      padding: 15px 25px;
      color: white;
      font-weight: 600;
      text-align: center;
      min-width: 120px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    `;
    
    if (shape === 'diamond') {
      element.style.cssText = baseStyle + `
        background: ${color};
        transform: rotate(45deg);
        position: relative;
      `;
      
      const textDiv = document.createElement('div');
      textDiv.style.cssText = 'transform: rotate(-45deg); white-space: nowrap;';
      textDiv.textContent = text;
      element.appendChild(textDiv);
    } else {
      element.style.cssText = baseStyle + `
        background: ${color};
        border-radius: 8px;
      `;
      element.textContent = text;
    }
    
    this.activeAnimations.push(element);
    return element;
  }
  
  createStepElement(text, isActive, isExecuted) {
    const element = document.createElement('div');
    
    let backgroundColor = 'var(--bg-tertiary)';
    let borderColor = 'var(--border-color)';
    let textColor = 'var(--text-secondary)';
    
    if (isExecuted) {
      backgroundColor = isActive ? 'rgba(63, 185, 80, 0.2)' : 'rgba(248, 81, 73, 0.2)';
      borderColor = isActive ? 'var(--accent-green)' : 'var(--warning)';
      textColor = isActive ? 'var(--accent-green)' : 'var(--warning)';
    }
    
    element.style.cssText = `
      padding: 8px 12px;
      background: ${backgroundColor};
      border: 1px solid ${borderColor};
      border-radius: 6px;
      color: ${textColor};
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      opacity: ${isActive ? '1' : '0.5'};
      text-align: center;
      min-width: 150px;
    `;
    
    element.textContent = text;
    return element;
  }
  
  animateFlowchart(elements) {
    const self = this;
    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform += ' scale(0.8)';
      
      self.setAnimationTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = element.style.transform.replace('scale(0.8)', 'scale(1)');
      }, index * 300);
    });
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