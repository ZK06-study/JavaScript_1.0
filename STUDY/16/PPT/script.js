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
            case '4': this.setupStringAnalyzer(); break;
            case '7': this.setupDDayCounter(); break;
        }
    }
    
    cleanupPreviousSlide() {
        this.activeTimers.forEach(clearTimeout);
        this.activeTimers = [];

        const slideId = this.slides[this.currentSlideIndex].dataset.slideId;
        if (!this.slides[this.currentSlideIndex]) return;

        switch (slideId) {
            case '4': this.resetStringAnalyzer(); break;
            case '7': this.resetDDayCounter(); break;
        }
    }

    // --- String Analyzer (Slide 5 / data-slide-id="4") ---
    setupStringAnalyzer() {
        const input = document.getElementById('string-input');
        const analyzeBtn = document.getElementById('string-analyze-btn');
        
        this.eventHandlers.analyzeString = () => this.analyzeString(input.value);
        this.eventHandlers.analyzeStringEnter = (e) => {
            if (e.key === 'Enter') this.analyzeString(input.value);
        };

        analyzeBtn.addEventListener('click', this.eventHandlers.analyzeString);
        input.addEventListener('keydown', this.eventHandlers.analyzeStringEnter);
    }
    
    analyzeString(str) {
        const output = document.getElementById('string-output');
        if (!str) {
            output.innerHTML = `<p>분석할 문자열을 입력해주세요.</p>`;
            return;
        }

        const createOutputItem = (title, value) => `
            <div class="output-item">
                <div class="output-item-title">${title}</div>
                <div class="output-item-value">${value}</div>
            </div>
        `;

        const length = str.length;
        const upperCase = str.toUpperCase();
        const trimmed = str.trim();
        const firstWord = str.trim().split(' ')[0];
        const hasJs = str.toLowerCase().includes('javascript');

        output.innerHTML = 
            createOutputItem('문자열 길이 (length)', length) +
            createOutputItem('대문자로 (toUpperCase)', upperCase) +
            createOutputItem('앞/뒤 공백 제거 (trim)', `'${trimmed}'`) +
            createOutputItem('첫 단어 (split)', firstWord) +
            createOutputItem("'javascript' 포함 여부 (includes)", hasJs ? '✅ 포함' : '❌ 미포함');
    }

    resetStringAnalyzer() {
        const input = document.getElementById('string-input');
        const analyzeBtn = document.getElementById('string-analyze-btn');
        const output = document.getElementById('string-output');

        if(analyzeBtn) analyzeBtn.removeEventListener('click', this.eventHandlers.analyzeString);
        if(input) input.removeEventListener('keydown', this.eventHandlers.analyzeStringEnter);
        
        if(output) output.innerHTML = `<p>분석 결과가 여기에 표시됩니다.</p>`;
        if(input) input.value = '';
    }

    // --- D-Day Counter (Slide 8 / data-slide-id="7") ---
    setupDDayCounter() {
        const dateInput = document.getElementById('dday-input');
        
        this.eventHandlers.ddayChange = () => this.calculateDDay(dateInput.value);
        
        dateInput.addEventListener('change', this.eventHandlers.ddayChange);
        
        // Set default to today for better UX
        if(!dateInput.value) {
           const today = new Date();
           today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
           dateInput.valueAsDate = today;
           this.calculateDDay(dateInput.value);
        }
    }
    
    calculateDDay(targetDateStr) {
        const output = document.getElementById('dday-output');
        if (!targetDateStr) {
            output.innerHTML = `<p>날짜를 선택해주세요.</p>`;
            return;
        }

        const targetDate = new Date(targetDateStr);
        const today = new Date();
        
        // Reset time part for accurate day counting
        targetDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        
        const diffTime = targetDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            output.innerHTML = `오늘은 <strong>D-Day</strong> 입니다! 🎉`;
        } else if (diffDays > 0) {
            output.innerHTML = `목표일까지 <span>${diffDays}</span>일 남았습니다!`;
        } else {
            output.innerHTML = `목표일로부터 <span>${Math.abs(diffDays)}</span>일 지났습니다.`;
        }
    }

    resetDDayCounter() {
        const dateInput = document.getElementById('dday-input');
        const output = document.getElementById('dday-output');

        if (dateInput) {
            dateInput.removeEventListener('change', this.eventHandlers.ddayChange);
        }
        if (output) {
            output.innerHTML = `<p>날짜를 선택해주세요.</p>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PresentationController('#presentation-container');
}); 