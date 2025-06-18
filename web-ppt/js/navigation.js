/**
 * Navigation System for JavaScript Learning PPT
 * Handles slide navigation, chapter switching, and user interactions
 */

class NavigationController {
    constructor(parser) {
        this.parser = parser;
        this.currentChapter = 1;
        this.currentSlide = 0;
        this.history = [];
        this.maxHistoryLength = 50;
        
        // DOM elements
        this.slideContainer = null;
        this.chapterList = null;
        this.progressBar = null;
        this.slideNumber = null;
        this.slideTitle = null;
        this.currentChapterSpan = null;
        this.chapterTitleSpan = null;
        this.prevButton = null;
        this.nextButton = null;
        
        // State
        this.isTransitioning = false;
        this.autoAdvanceTimer = null;
        this.keyboardEnabled = true;
        
        this.init();
    }

    /**
     * Initialize navigation system
     */
    init() {
        this.setupDOMReferences();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        this.renderChapterNavigation();
        this.loadInitialSlide();
    }

    /**
     * Setup DOM element references
     */
    setupDOMReferences() {
        this.slideContainer = document.getElementById('slide-content');
        this.chapterList = document.querySelector('.chapter-list');
        this.progressBar = document.querySelector('.progress-fill');
        this.slideNumber = document.querySelector('.slide-number');
        this.slideTitle = document.querySelector('.slide-title');
        this.currentChapterSpan = document.querySelector('.current-chapter');
        this.chapterTitleSpan = document.querySelector('.chapter-title');
        this.prevButton = document.getElementById('prev-slide');
        this.nextButton = document.getElementById('next-slide');
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Navigation buttons
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.nextSlide());
        }

        // Swipe gestures for mobile
        this.setupSwipeGestures();

        // URL hash change for deep linking
        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // Browser back/forward
        window.addEventListener('popstate', (e) => this.handlePopState(e));
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (!this.keyboardEnabled || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            switch (e.key) {
                case 'ArrowRight':
                case ' ':
                case 'PageDown':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                    
                case 'ArrowLeft':
                case 'PageUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1, 0);
                    break;
                    
                case 'End':
                    e.preventDefault();
                    this.goToLastSlide();
                    break;
                    
                case 'Escape':
                    e.preventDefault();
                    this.exitFullscreen();
                    break;
                    
                case 'f':
                case 'F11':
                    if (e.key === 'f' || e.key === 'F11') {
                        e.preventDefault();
                        this.toggleFullscreen();
                    }
                    break;
                    
                case 'g':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.showGoToDialog();
                    }
                    break;
            }
        });
    }

    /**
     * Setup swipe gestures for mobile devices
     */
    setupSwipeGestures() {
        let startX = 0;
        let startY = 0;
        let threshold = 50;

        this.slideContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.slideContainer.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            let endX = e.changedTouches[0].clientX;
            let endY = e.changedTouches[0].clientY;
            
            let diffX = startX - endX;
            let diffY = startY - endY;

            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.previousSlide();
                }
            }

            startX = 0;
            startY = 0;
        });
    }

    /**
     * Render chapter navigation in sidebar
     */
    renderChapterNavigation() {
        if (!this.chapterList) return;

        const chapters = this.parser.getChaptersMetadata();
        this.chapterList.innerHTML = '';

        chapters.forEach(chapter => {
            const listItem = document.createElement('li');
            listItem.className = 'chapter-item';

            const link = document.createElement('a');
            link.href = `#chapter-${chapter.id}`;
            link.className = 'chapter-link';
            link.dataset.chapterId = chapter.id;
            
            if (chapter.id === this.currentChapter) {
                link.classList.add('active');
            }

            link.innerHTML = `
                <span class="chapter-number">${chapter.id}</span>
                <span class="chapter-text">
                    <span class="chapter-icon">${chapter.icon}</span>
                    ${chapter.title}
                </span>
            `;

            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToSlide(chapter.id, 0);
            });

            listItem.appendChild(link);
            this.chapterList.appendChild(listItem);
        });
    }

    /**
     * Load initial slide based on URL hash or default
     */
    loadInitialSlide() {
        const hash = window.location.hash;
        if (hash) {
            this.parseHashAndNavigate(hash);
        } else {
            this.goToSlide(1, 0);
        }
    }

    /**
     * Navigate to specific slide
     */
    async goToSlide(chapterId, slideIndex, addToHistory = true) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;

        try {
            const slide = this.parser.getSlide(chapterId, slideIndex);
            if (!slide) {
                console.error(`Slide not found: Chapter ${chapterId}, Slide ${slideIndex}`);
                this.isTransitioning = false;
                return;
            }

            // Add to history
            if (addToHistory) {
                this.addToHistory(this.currentChapter, this.currentSlide);
            }

            // Update current position
            const prevChapter = this.currentChapter;
            this.currentChapter = chapterId;
            this.currentSlide = slideIndex;

            // Update URL
            this.updateURL();

            // Render slide with transition
            await this.renderSlide(slide);

            // Update navigation UI
            this.updateNavigationUI(slide);
            
            // Update chapter navigation if chapter changed
            if (prevChapter !== chapterId) {
                this.updateChapterNavigation();
            }

            // Update progress
            this.updateProgress();

        } catch (error) {
            console.error('Error navigating to slide:', error);
        } finally {
            this.isTransitioning = false;
        }
    }

    /**
     * Render slide content with transition animation
     */
    async renderSlide(slide) {
        if (!this.slideContainer) return;

        // Add exit animation
        this.slideContainer.classList.add('slide-exit');
        
        // Wait for exit animation
        await new Promise(resolve => setTimeout(resolve, 200));

        // Update content
        this.slideContainer.innerHTML = `
            <div class="slide-header">
                <h2 class="slide-title">${slide.title}</h2>
                <span class="slide-number">${this.currentChapter} - ${this.currentSlide + 1} / ${slide.totalSlides}</span>
            </div>
            <div class="slide-content">
                ${slide.content}
            </div>
        `;

        // Add execute buttons to code blocks
        this.addCodeExecuteButtons();

        // Remove exit class and add enter animation
        this.slideContainer.classList.remove('slide-exit');
        this.slideContainer.classList.add('slide-enter');
        
        // Trigger reflow and start enter animation
        this.slideContainer.offsetHeight;
        this.slideContainer.classList.add('slide-enter-active');
        
        // Wait for enter animation
        await new Promise(resolve => setTimeout(resolve, 400));
        
        // Clean up classes
        this.slideContainer.classList.remove('slide-enter', 'slide-enter-active');

        // Highlight code if Prism is available
        if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(this.slideContainer);
        }
    }

    /**
     * Add execute buttons to JavaScript code blocks
     */
    addCodeExecuteButtons() {
        const codeBlocks = this.slideContainer.querySelectorAll('pre code.language-js, pre code.language-javascript');
        
        codeBlocks.forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            if (pre.querySelector('.code-execute-btn')) return; // Already has button

            const executeBtn = document.createElement('button');
            executeBtn.className = 'code-execute-btn';
            executeBtn.textContent = '실행';
            executeBtn.title = '이 코드를 실행해보세요';
            
            executeBtn.addEventListener('click', () => {
                const code = codeBlock.textContent;
                if (window.codeRunner) {
                    window.codeRunner.executeCode(code);
                }
            });

            pre.style.position = 'relative';
            pre.appendChild(executeBtn);
        });
    }

    /**
     * Update navigation UI elements
     */
    updateNavigationUI(slide) {
        // Update slide title in header
        if (this.slideTitle) {
            this.slideTitle.textContent = slide.title;
        }

        // Update footer info
        if (this.currentChapterSpan) {
            this.currentChapterSpan.textContent = `Chapter ${slide.chapterId}`;
        }
        
        if (this.chapterTitleSpan) {
            this.chapterTitleSpan.textContent = slide.chapterTitle;
        }

        // Update button states
        this.updateButtonStates();
    }

    /**
     * Update navigation button states
     */
    updateButtonStates() {
        const hasPrev = this.parser.getPreviousSlide(this.currentChapter, this.currentSlide) !== null;
        const hasNext = this.parser.getNextSlide(this.currentChapter, this.currentSlide) !== null;

        if (this.prevButton) {
            this.prevButton.disabled = !hasPrev;
            this.prevButton.style.opacity = hasPrev ? '1' : '0.5';
        }

        if (this.nextButton) {
            this.nextButton.disabled = !hasNext;
            this.nextButton.style.opacity = hasNext ? '1' : '0.5';
        }
    }

    /**
     * Update chapter navigation highlighting
     */
    updateChapterNavigation() {
        const links = this.chapterList?.querySelectorAll('.chapter-link');
        if (!links) return;

        links.forEach(link => {
            const chapterId = parseInt(link.dataset.chapterId);
            if (chapterId === this.currentChapter) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        if (!this.progressBar) return;

        const totalSlides = this.parser.getProgress().totalSlides;
        let currentPosition = 0;

        // Calculate current position
        for (let i = 1; i < this.currentChapter; i++) {
            const chapter = this.parser.getChapter(i);
            if (chapter && chapter.slides) {
                currentPosition += chapter.slides.length;
            }
        }
        currentPosition += this.currentSlide + 1;

        const progressPercent = (currentPosition / totalSlides) * 100;
        this.progressBar.style.width = `${progressPercent}%`;
    }

    /**
     * Navigate to next slide
     */
    nextSlide() {
        const next = this.parser.getNextSlide(this.currentChapter, this.currentSlide);
        if (next) {
            this.goToSlide(next.chapterId, next.slideIndex);
        }
    }

    /**
     * Navigate to previous slide
     */
    previousSlide() {
        const prev = this.parser.getPreviousSlide(this.currentChapter, this.currentSlide);
        if (prev) {
            this.goToSlide(prev.chapterId, prev.slideIndex);
        }
    }

    /**
     * Go to last slide
     */
    goToLastSlide() {
        const lastChapter = this.parser.chapters[this.parser.chapters.length - 1];
        if (lastChapter && lastChapter.slides) {
            this.goToSlide(lastChapter.id, lastChapter.slides.length - 1);
        }
    }

    /**
     * Add navigation state to history
     */
    addToHistory(chapterId, slideIndex) {
        this.history.push({ chapterId, slideIndex, timestamp: Date.now() });
        
        if (this.history.length > this.maxHistoryLength) {
            this.history.shift();
        }
    }

    /**
     * Update browser URL
     */
    updateURL() {
        const hash = `#chapter-${this.currentChapter}-slide-${this.currentSlide}`;
        if (window.location.hash !== hash) {
            history.replaceState(
                { chapterId: this.currentChapter, slideIndex: this.currentSlide },
                '',
                hash
            );
        }
    }

    /**
     * Handle URL hash changes
     */
    handleHashChange() {
        const hash = window.location.hash;
        if (hash) {
            this.parseHashAndNavigate(hash);
        }
    }

    /**
     * Parse URL hash and navigate
     */
    parseHashAndNavigate(hash) {
        const match = hash.match(/#chapter-(\d+)(-slide-(\d+))?/);
        if (match) {
            const chapterId = parseInt(match[1]);
            const slideIndex = match[3] ? parseInt(match[3]) : 0;
            
            if (chapterId !== this.currentChapter || slideIndex !== this.currentSlide) {
                this.goToSlide(chapterId, slideIndex, false);
            }
        }
    }

    /**
     * Handle browser back/forward navigation
     */
    handlePopState(e) {
        if (e.state) {
            this.goToSlide(e.state.chapterId, e.state.slideIndex, false);
        }
    }

    /**
     * Toggle fullscreen mode
     */
    toggleFullscreen() {
        if (document.fullscreenElement) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }

    /**
     * Enter fullscreen mode
     */
    enterFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        
        document.body.classList.add('fullscreen');
    }

    /**
     * Exit fullscreen mode
     */
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        document.body.classList.remove('fullscreen');
    }

    /**
     * Show go to slide dialog
     */
    showGoToDialog() {
        const input = prompt('이동할 챕터와 슬라이드를 입력하세요 (예: 5-2):', `${this.currentChapter}-${this.currentSlide + 1}`);
        if (input) {
            const match = input.match(/(\d+)-(\d+)/);
            if (match) {
                const chapterId = parseInt(match[1]);
                const slideIndex = parseInt(match[2]) - 1; // Convert to 0-based index
                this.goToSlide(chapterId, slideIndex);
            }
        }
    }

    /**
     * Search functionality
     */
    search(query) {
        const results = this.parser.search(query);
        return results;
    }

    /**
     * Get current navigation state
     */
    getCurrentState() {
        return {
            chapterId: this.currentChapter,
            slideIndex: this.currentSlide,
            isTransitioning: this.isTransitioning
        };
    }

    /**
     * Enable/disable keyboard navigation
     */
    setKeyboardEnabled(enabled) {
        this.keyboardEnabled = enabled;
    }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationController;
} else {
    window.NavigationController = NavigationController;
}