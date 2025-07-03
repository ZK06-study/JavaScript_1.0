class PresentationController {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.slides = Array.from(this.container.querySelectorAll('.slide'));
        this.navPrev = document.getElementById('prev-btn');
        this.navNext = document.getElementById('next-btn');
        this.counter = document.getElementById('slide-counter');
        this.progressBar = document.querySelector('.progress-bar');
        
        this.totalSlides = this.slides.length;
        this.currentSlideIndex = 0;
        this.activeTimers = [];
        this.eventHandlers = {};

        this.init();
    }

    init() {
        this.navPrev.addEventListener('click', () => this.prev());
        this.navNext.addEventListener('click', () => this.next());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') this.next();
            else if (e.key === 'ArrowLeft') this.prev();
        });

        this.updateView();
    }

    goTo(index) {
        if (index < 0 || index >= this.totalSlides) return;
        
        this.cleanupPreviousSlide();
        this.currentSlideIndex = index;
        this.updateView();
        this.runCurrentSlideAnimations();
    }

    next() { this.goTo(this.currentSlideIndex + 1); }
    prev() { this.goTo(this.currentSlideIndex - 1); }

    updateView() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlideIndex);
        });
        
        this.counter.textContent = `${this.currentSlideIndex + 1} / ${this.totalSlides}`;
        const progress = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    runCurrentSlideAnimations() {
        const slideId = this.slides[this.currentSlideIndex].dataset.slideId;
        switch (slideId) {
            case '4': this.setupTruthyChecker(); break;
            case '6': this.setupShortCircuitDemo(); break;
        }
    }
    
    cleanupPreviousSlide() {
        this.activeTimers.forEach(clearTimeout);
        this.activeTimers = [];

        const slideId = this.slides[this.currentSlideIndex].dataset.slideId;
        switch (slideId) {
            case '4': this.resetTruthyChecker(); break;
            case '6': this.resetShortCircuitDemo(); break;
        }
    }

    // --- Truthy/Falsy Checker (Slide 5 / data-slide-id="4") ---
    setupTruthyChecker() {
        const input = document.getElementById('truthy-input');
        const checkBtn = document.getElementById('truthy-check-btn');
        const presetBtns = document.querySelectorAll('#truthy-checker .preset-btn');
        
        this.eventHandlers.truthyCheck = () => this.checkTruthy(input.value);
        this.eventHandlers.truthyPreset = (e) => {
            input.value = e.target.textContent;
            this.checkTruthy(e.target.textContent);
        };
        this.eventHandlers.truthyEnter = (e) => {
            if (e.key === 'Enter') this.checkTruthy(input.value);
        };

        checkBtn.addEventListener('click', this.eventHandlers.truthyCheck);
        input.addEventListener('keydown', this.eventHandlers.truthyEnter);
        presetBtns.forEach(btn => btn.addEventListener('click', this.eventHandlers.truthyPreset));
    }
    
    checkTruthy(value) {
        const output = document.getElementById('truthy-output');
        let result, valForEval;
        
        // Convert string representations to actual values for evaluation
        switch (value) {
            case '0': valForEval = 0; break;
            case 'false': valForEval = false; break;
            case 'null': valForEval = null; break;
            case 'undefined': valForEval = undefined; break;
            case '""': valForEval = ""; break;
            case '[]': valForEval = []; break;
            case '{}': valForEval = {}; break;
            default: valForEval = value;
        }
        
        if (valForEval) {
            result = `<span class="truthy">TRUTHY</span>`;
        } else {
            result = `<span class="falsy">FALSY</span>`;
        }
        output.innerHTML = `[ <span class="value-str">${value}</span> ] &rArr; ${result}`;
    }

    resetTruthyChecker() {
        const input = document.getElementById('truthy-input');
        const checkBtn = document.getElementById('truthy-check-btn');
        const presetBtns = document.querySelectorAll('#truthy-checker .preset-btn');
        const output = document.getElementById('truthy-output');

        if(checkBtn) checkBtn.removeEventListener('click', this.eventHandlers.truthyCheck);
        if(input) input.removeEventListener('keydown', this.eventHandlers.truthyEnter);
        presetBtns.forEach(btn => btn.removeEventListener('click', this.eventHandlers.truthyPreset));
        
        if(output) output.innerHTML = `<p>결과가 여기에 표시됩니다.</p>`;
        if(input) input.value = '';
    }

    // --- Short Circuit Demo (Slide 7 / data-slide-id="6") ---
    setupShortCircuitDemo() {
        const exprBtns = document.querySelectorAll('#sc-demo .sc-btn');
        this.eventHandlers.scDemo = (e) => this.runShortCircuitSim(e.target.dataset.expr);
        exprBtns.forEach(btn => btn.addEventListener('click', this.eventHandlers.scDemo));
    }

    runShortCircuitSim(expr) {
        this.resetShortCircuitDemoVisuals();
        const [leftStr, op, rightStr] = expr.split(' ');
        const leftVal = eval(leftStr);
        const rightVal = eval(rightStr);

        const leftBox = document.getElementById('sc-left');
        const rightBox = document.getElementById('sc-right');
        const opBox = document.getElementById('sc-operator');
        const resultBox = document.getElementById('sc-final-result');

        leftBox.textContent = leftStr;
        rightBox.textContent = rightStr;
        opBox.textContent = op;

        let finalResult, finalResultStr;

        const animate = (isLeftEvaluated, isRightEvaluated, result, resultStr) => {
            if (isLeftEvaluated) leftBox.classList.add('evaluated');
            if (isRightEvaluated) rightBox.classList.add('evaluated');
            else rightBox.classList.add('skipped');

            resultBox.textContent = resultStr;
            if (result) resultBox.classList.add('truthy');
            else resultBox.classList.add('falsy');
        };

        this.activeTimers.push(setTimeout(() => {
            if (op === '&&') {
                if (!leftVal) {
                    finalResult = leftVal;
                    finalResultStr = leftStr;
                    animate(true, false, finalResult, finalResultStr);
                } else {
                    finalResult = rightVal;
                    finalResultStr = rightStr;
                    animate(true, true, finalResult, finalResultStr);
                }
            } else if (op === '||') {
                if (leftVal) {
                    finalResult = leftVal;
                    finalResultStr = leftStr;
                    animate(true, false, finalResult, finalResultStr);
                } else {
                    finalResult = rightVal;
                    finalResultStr = rightStr;
                    animate(true, true, finalResult, finalResultStr);
                }
            }
        }, 300));
    }

    resetShortCircuitDemo() {
        const exprBtns = document.querySelectorAll('#sc-demo .sc-btn');
        if(exprBtns.length > 0) {
            exprBtns.forEach(btn => btn.removeEventListener('click', this.eventHandlers.scDemo));
        }
        this.resetShortCircuitDemoVisuals();
    }

    resetShortCircuitDemoVisuals() {
        const leftBox = document.getElementById('sc-left');
        const rightBox = document.getElementById('sc-right');
        const opBox = document.getElementById('sc-operator');
        const resultBox = document.getElementById('sc-final-result');

        if(leftBox) {
            leftBox.textContent = 'A';
            leftBox.className = 'sc-box';
        }
        if(rightBox) {
            rightBox.textContent = 'B';
            rightBox.className = 'sc-box';
        }
        if(opBox) opBox.textContent = '';
        if(resultBox) {
            resultBox.textContent = '결과';
            resultBox.className = 'sc-result';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PresentationController('#presentation-container');
}); 