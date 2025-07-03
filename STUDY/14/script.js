class PresentationController {
    constructor(selector) {
        this.container = document.querySelector(selector);
        if (!this.container) {
            console.error(`Presentation container with selector "${selector}" not found.`);
            return;
        }
        this.slides = Array.from(this.container.children);
        this.progressBar = document.querySelector('.progress-bar');
        this.currentSlideIndex = 0;
        this.activeTimers = [];

        this.init();
    }

    init() {
        this.updateSlideVisibility();
        this.updateProgressBar();
        this.runSlideAnimations();
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
        });

        // Add quiz button listeners
        document.querySelectorAll('.reveal-btn').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.previousElementSibling;
                if (answer) {
                    answer.style.display = 'block';
                    button.style.display = 'none';
                }
            });
        });
        
        // Initialize syntax highlighting
        hljs.highlightAll();
    }

    goTo(index) {
        if (index < 0 || index >= this.slides.length) {
            return;
        }

        this.clearAnimations();
        this.currentSlideIndex = index;
        this.updateSlideVisibility();
        this.updateProgressBar();
        this.runSlideAnimations();
    }

    next() {
        this.goTo(this.currentSlideIndex + 1);
    }

    prev() {
        this.goTo(this.currentSlideIndex - 1);
    }

    updateSlideVisibility() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlideIndex);
        });
    }

    updateProgressBar() {
        if (this.progressBar) {
            const percentage = ((this.currentSlideIndex + 1) / this.slides.length) * 100;
            this.progressBar.style.width = `${percentage}%`;
        }
    }

    clearAnimations() {
        this.activeTimers.forEach(timerId => clearTimeout(timerId));
        this.activeTimers = [];
        
        // Clear any dynamically created content for animations
        const visualizerContainer = document.getElementById('prototype-visualizer-container');
        if (visualizerContainer) {
            visualizerContainer.innerHTML = '';
        }
    }

    runSlideAnimations() {
        const currentSlide = this.slides[this.currentSlideIndex];
        const slideId = currentSlide.dataset.slideId;

        if (slideId === 'prototype-demo') {
            this.createPrototypeChainVisualizer();
        }
    }
    
    createPrototypeChainVisualizer() {
        const container = document.getElementById('prototype-visualizer-container');
        if (!container) return;

        container.innerHTML = `
            <div class="proto-object">
                <div class="proto-object-title">myDog</div>
                <div class="proto-property">name: 'Buddy'</div>
                <div class="proto-property">breed: 'Golden Retriever'</div>
                <div class="proto-link">[[Prototype]]</div>
            </div>
            <div class="arrow">&rarr;</div>
            <div class="proto-object">
                <div class="proto-object-title">Dog.prototype</div>
                <div class="proto-property">bark()</div>
                <div class="proto-link">[[Prototype]]</div>
            </div>
            <div class="arrow">&rarr;</div>
            <div class="proto-object">
                <div class="proto-object-title">Animal.prototype</div>
                <div class="proto-property">speak()</div>
                <div class="proto-link">[[Prototype]]</div>
            </div>
        `;
        
        // Simple animation for appearance
        const elements = container.querySelectorAll('.proto-object, .arrow');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            const timer = setTimeout(() => {
                el.style.transition = 'opacity 300ms ease, transform 300ms ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
            this.activeTimers.push(timer);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PresentationController('#presentation-container');
}); 