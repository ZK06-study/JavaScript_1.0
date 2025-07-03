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

        this.init();
    }

    init() {
        this.navPrev.addEventListener('click', () => this.prev());
        this.navNext.addEventListener('click', () => this.next());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
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

    next() {
        this.goTo(this.currentSlideIndex + 1);
    }

    prev() {
        this.goTo(this.currentSlideIndex - 1);
    }

    updateView() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlideIndex);
        });
        
        this.counter.textContent = `${this.currentSlideIndex + 1} / ${this.totalSlides}`;
        
        const progress = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    runCurrentSlideAnimations() {
        const currentSlide = this.slides[this.currentSlideIndex];
        const slideId = currentSlide.dataset.slideId;

        // Slide-specific animations
        switch (slideId) {
            case '4': // Hoisting Demo
                this.setupHoistingDemo();
                break;
            case '6': // Reference Demo
                this.setupReferenceDemo();
                break;
        }
    }
    
    cleanupPreviousSlide() {
        // Clear any running timers
        this.activeTimers.forEach(clearTimeout);
        this.activeTimers = [];

        // Reset specific interactive elements to their initial state
        const prevSlide = this.slides[this.currentSlideIndex];
        const slideId = prevSlide.dataset.slideId;

        switch (slideId) {
            case '4':
                this.resetHoistingDemo();
                break;
            case '6': 
                this.resetReferenceDemo();
                break;
        }
    }

    // --- Hoisting Demo (Slide 5 / data-slide-id="4") ---
    setupHoistingDemo() {
        const demoContainer = document.getElementById('hoisting-demo');
        const output = document.getElementById('hoisting-output');

        this.hoistingClickHandler = (e) => {
            if (!e.target.matches('.demo-btn')) return;

            output.innerHTML = '';
            const type = e.target.dataset.type;

            if (type === 'declaration') {
                output.innerHTML = `<p class="success">> Hi! 선언문은 호이스팅돼요.</p>`;
            } else if (type === 'expression') {
                output.innerHTML = `<p class="error">> Uncaught TypeError: sayBye is not a function</p>`;
            }
        };

        demoContainer.addEventListener('click', this.hoistingClickHandler);
    }

    resetHoistingDemo() {
        const demoContainer = document.getElementById('hoisting-demo');
        if (demoContainer && this.hoistingClickHandler) {
            demoContainer.removeEventListener('click', this.hoistingClickHandler);
        }
        const output = document.getElementById('hoisting-output');
        if (output) {
            output.innerHTML = `<p>실행 결과가 여기에 표시됩니다.</p>`;
        }
    }

    // --- Pass by Reference Demo (Slide 7 / data-slide-id="6") ---
    setupReferenceDemo() {
        const btn = document.getElementById('reference-btn');
        this.referenceClickHandler = () => this.runReferenceAnimation();
        btn.addEventListener('click', this.referenceClickHandler);
        // Draw initial static arrow
        this.runReferenceAnimation(true);
    }
    
    getElementCenter(elem) {
        if (!elem) return { x: 0, y: 0 };
        const visArea = document.getElementById('reference-demo').querySelector('.visualization-area');
        const visRect = visArea.getBoundingClientRect();
        const elemRect = elem.getBoundingClientRect();
        
        // Calculate center position relative to the visualization area
        const x = (elemRect.left - visRect.left) + elemRect.width / 2;
        const y = (elemRect.top - visRect.top) + elemRect.height / 2;
        return { x, y };
    }

    runReferenceAnimation(isInitial = false) {
        this.resetReferenceDemoVisuals();
    
        const svg = document.getElementById('reference-svg');
        const objectBox = document.getElementById('object-box');
        const paramBox = document.getElementById('param-box');
        const variableBox = document.getElementById('variable-box');
        const lineChangeName = document.getElementById('line-change-name');
        const linePName = document.getElementById('line-p-name');
    
        if (!svg || !objectBox || !paramBox || !variableBox || !lineChangeName || !linePName) return;
    
        const accentBlue = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue').trim();
        const accentGreen = getComputedStyle(document.documentElement).getPropertyValue('--accent-green').trim();
    
        svg.innerHTML = `
            <defs>
                <marker id="arrow-person" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="${accentBlue}" />
                </marker>
                <marker id="arrow-p" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="${accentGreen}" />
                </marker>
            </defs>
            <path id="person-arrow" stroke="${accentBlue}" marker-end="url(#arrow-person)"></path>
            <path id="p-arrow" stroke="${accentGreen}" marker-end="url(#arrow-p)" opacity="0"></path>
        `;
    
        const personArrow = document.getElementById('person-arrow');
        const pArrow = document.getElementById('p-arrow');
    
        const personPos = this.getElementCenter(variableBox);
        const objectPos = this.getElementCenter(objectBox);
        const pPos = this.getElementCenter(paramBox);
    
        personArrow.setAttribute('d', `M ${personPos.x + 20} ${personPos.y} L ${objectPos.x - 90} ${objectPos.y}`);
        pArrow.setAttribute('d', `M ${pPos.x + 20} ${pPos.y} L ${objectPos.x - 90} ${objectPos.y}`);

        const animatePath = (path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            setTimeout(() => {
                path.style.strokeDashoffset = 0;
            }, 100);
        };

        if (isInitial) {
             animatePath(personArrow);
             return;
        }

        const highlightCode = (elem, duration) => {
            if(!elem) return;
            elem.classList.add('highlight-code');
            const timer = setTimeout(() => elem.classList.remove('highlight-code'), duration);
            this.activeTimers.push(timer);
        };
    
        const sequence = [
            { func: () => animatePath(personArrow), delay: 0 },
            { func: () => highlightCode(lineChangeName, 1800), delay: 1000 },
            { func: () => paramBox.classList.add('visible'), delay: 500 },
            { func: () => { pArrow.style.opacity = 1; animatePath(pArrow); }, delay: 100 },
            { func: () => highlightCode(linePName, 1300), delay: 1200 },
            { func: () => {
                objectBox.style.borderColor = 'var(--accent-red)';
                objectBox.style.transform = 'translateY(-50%) scale(1.05)';
                objectBox.innerHTML = `<span class="mem-addr">0x123</span><pre><code>{ name: '<span class="error">Lee</span>' }</code></pre>`;
            }, delay: 500 },
            { func: () => objectBox.style.transform = 'translateY(-50%) scale(1)', delay: 300 }
        ];
    
        let cumulativeDelay = 0;
        sequence.forEach(step => {
            cumulativeDelay += step.delay;
            this.activeTimers.push(setTimeout(step.func, cumulativeDelay));
        });
    }
    
    resetReferenceDemoVisuals() {
        const svg = document.getElementById('reference-svg');
        if (svg) svg.innerHTML = '';
    
        const objectBox = document.getElementById('object-box');
        if (objectBox) {
            objectBox.style.borderColor = 'var(--border-color)';
            objectBox.style.transform = 'translateY(-50%) scale(1)';
            objectBox.innerHTML = `<span class="mem-addr">0x123</span><pre><code>{ name: 'Kim' }</code></pre>`;
        }
    
        const paramBox = document.getElementById('param-box');
        if (paramBox) paramBox.classList.remove('visible');
    
        const lineChangeName = document.getElementById('line-change-name');
        if (lineChangeName) lineChangeName.classList.remove('highlight-code');
        
        const linePName = document.getElementById('line-p-name');
        if (linePName) linePName.classList.remove('highlight-code');
    }

    resetReferenceDemo() {
        const btn = document.getElementById('reference-btn');
        if (btn && this.referenceClickHandler) {
            btn.removeEventListener('click', this.referenceClickHandler);
        }
        this.activeTimers.forEach(clearTimeout);
        this.activeTimers = [];
        this.resetReferenceDemoVisuals();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PresentationController('#presentation-container');
}); 