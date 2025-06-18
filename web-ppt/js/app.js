/**
 * Main Application Controller
 * Orchestrates all components of the JavaScript Learning PPT
 */

class JavaScriptLearningApp {
    constructor() {
        this.parser = null;
        this.navigation = null;
        this.codeRunner = null;
        this.theme = 'light';
        this.isInitialized = false;
        this.settings = {
            autoAdvance: false,
            autoAdvanceInterval: 5000,
            theme: 'light',
            fontSize: 'medium',
            codeHighlight: true
        };
        
        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            this.showLoadingState();
            
            // Load settings from localStorage
            this.loadSettings();
            
            // Apply initial theme
            this.applyTheme(this.settings.theme);
            
            // Initialize parser
            this.parser = new MarkdownParser();
            const parserInitialized = await this.parser.init();
            
            if (!parserInitialized) {
                throw new Error('Failed to initialize markdown parser');
            }
            
            // Initialize navigation
            this.navigation = new NavigationController(this.parser);
            
            // Initialize code runner
            this.codeRunner = new CodeRunner();
            window.codeRunner = this.codeRunner; // Make globally available
            
            // Setup UI event listeners
            this.setupUIEventListeners();
            
            // Hide loading state
            this.hideLoadingState();
            
            this.isInitialized = true;
            
            console.log('JavaScript Learning PPT initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize application:', error);
            this.showErrorState(error.message);
        }
    }

    /**
     * Show loading state
     */
    showLoadingState() {
        const slideContent = document.querySelector('#slide-content .slide-content');
        if (slideContent) {
            slideContent.innerHTML = `
                <div class="loading-message">
                    <div class="spinner"></div>
                    <p>JavaScript 학습 가이드를 불러오는 중...</p>
                    <small>잠시만 기다려주세요.</small>
                </div>
            `;
        }
    }

    /**
     * Hide loading state
     */
    hideLoadingState() {
        // Loading will be hidden when first slide is loaded
    }

    /**
     * Show error state
     */
    showErrorState(message) {
        const slideContent = document.querySelector('#slide-content .slide-content');
        if (slideContent) {
            slideContent.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ 오류가 발생했습니다</h3>
                    <p>${message}</p>
                    <button class="btn btn-primary" onclick="location.reload()">다시 시도</button>
                </div>
            `;
        }
    }

    /**
     * Setup UI event listeners
     */
    setupUIEventListeners() {
        // Theme toggle
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Fullscreen toggle
        const fullscreenToggle = document.querySelector('.fullscreen-toggle');
        if (fullscreenToggle) {
            fullscreenToggle.addEventListener('click', () => this.toggleFullscreen());
        }

        // Settings menu (if implemented)
        this.setupSettingsMenu();

        // Search functionality
        this.setupSearchFunctionality();

        // Keyboard shortcuts help
        this.setupHelpDialog();

        // Auto-advance functionality
        this.setupAutoAdvance();

        // Window resize handler
        window.addEventListener('resize', () => this.handleResize());

        // Page visibility change (pause auto-advance when tab is not visible)
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());

        // Prevent context menu on presentation mode
        document.addEventListener('contextmenu', (e) => {
            if (document.body.classList.contains('fullscreen')) {
                e.preventDefault();
            }
        });
    }

    /**
     * Toggle theme between light and dark
     */
    toggleTheme() {
        const themes = ['light', 'dark', 'blue', 'green', 'purple'];
        const currentIndex = themes.indexOf(this.settings.theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        
        this.applyTheme(newTheme);
        this.settings.theme = newTheme;
        this.saveSettings();
    }

    /**
     * Apply theme to the application
     */
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        
        // Update theme toggle icon
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const icons = {
                light: '🌙',
                dark: '☀️',
                blue: '🌊',
                green: '🌱',
                purple: '🟣'
            };
            themeToggle.textContent = icons[theme] || '🌙';
        }
    }

    /**
     * Toggle fullscreen mode
     */
    toggleFullscreen() {
        if (this.navigation) {
            this.navigation.toggleFullscreen();
        }
    }

    /**
     * Setup settings menu
     */
    setupSettingsMenu() {
        // Create settings menu if it doesn't exist
        let settingsMenu = document.querySelector('.settings-menu');
        if (!settingsMenu) {
            settingsMenu = this.createSettingsMenu();
        }

        // Settings button click handler
        const settingsBtn = document.querySelector('.settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.toggleSettingsMenu());
        }
    }

    /**
     * Create settings menu
     */
    createSettingsMenu() {
        const menu = document.createElement('div');
        menu.className = 'settings-menu';
        menu.innerHTML = `
            <div class="settings-content">
                <h3>설정</h3>
                
                <div class="setting-group">
                    <label>테마</label>
                    <select id="theme-select">
                        <option value="light">라이트</option>
                        <option value="dark">다크</option>
                        <option value="blue">블루</option>
                        <option value="green">그린</option>
                        <option value="purple">퍼플</option>
                    </select>
                </div>
                
                <div class="setting-group">
                    <label>글꼴 크기</label>
                    <select id="font-size-select">
                        <option value="small">작게</option>
                        <option value="medium">보통</option>
                        <option value="large">크게</option>
                    </select>
                </div>
                
                <div class="setting-group">
                    <label>
                        <input type="checkbox" id="auto-advance-checkbox">
                        자동 진행
                    </label>
                </div>
                
                <div class="setting-group">
                    <label>
                        <input type="checkbox" id="code-highlight-checkbox">
                        코드 하이라이팅
                    </label>
                </div>
                
                <div class="settings-actions">
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.parentElement.style.display='none'">닫기</button>
                    <button class="btn btn-primary" id="reset-settings">기본값으로 초기화</button>
                </div>
            </div>
        `;

        document.body.appendChild(menu);
        this.bindSettingsEvents(menu);
        return menu;
    }

    /**
     * Bind settings menu events
     */
    bindSettingsEvents(menu) {
        const themeSelect = menu.querySelector('#theme-select');
        const fontSizeSelect = menu.querySelector('#font-size-select');
        const autoAdvanceCheck = menu.querySelector('#auto-advance-checkbox');
        const codeHighlightCheck = menu.querySelector('#code-highlight-checkbox');
        const resetBtn = menu.querySelector('#reset-settings');

        // Set initial values
        themeSelect.value = this.settings.theme;
        fontSizeSelect.value = this.settings.fontSize;
        autoAdvanceCheck.checked = this.settings.autoAdvance;
        codeHighlightCheck.checked = this.settings.codeHighlight;

        // Event listeners
        themeSelect.addEventListener('change', (e) => {
            this.applyTheme(e.target.value);
            this.settings.theme = e.target.value;
            this.saveSettings();
        });

        fontSizeSelect.addEventListener('change', (e) => {
            this.applyFontSize(e.target.value);
            this.settings.fontSize = e.target.value;
            this.saveSettings();
        });

        autoAdvanceCheck.addEventListener('change', (e) => {
            this.settings.autoAdvance = e.target.checked;
            this.saveSettings();
            if (e.target.checked) {
                this.startAutoAdvance();
            } else {
                this.stopAutoAdvance();
            }
        });

        codeHighlightCheck.addEventListener('change', (e) => {
            this.settings.codeHighlight = e.target.checked;
            this.saveSettings();
            this.toggleCodeHighlighting(e.target.checked);
        });

        resetBtn.addEventListener('click', () => {
            this.resetSettings();
            this.bindSettingsEvents(menu); // Rebind with new values
        });
    }

    /**
     * Apply font size setting
     */
    applyFontSize(size) {
        document.documentElement.className = document.documentElement.className
            .replace(/font-size-\w+/g, '');
        document.documentElement.classList.add(`font-size-${size}`);
    }

    /**
     * Toggle code highlighting
     */
    toggleCodeHighlighting(enabled) {
        if (enabled && typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
        
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            if (enabled) {
                block.classList.add('language-javascript');
            } else {
                block.className = '';
            }
        });
    }

    /**
     * Setup search functionality
     */
    setupSearchFunctionality() {
        // Search shortcut (Ctrl+F)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                this.showSearchDialog();
            }
        });
    }

    /**
     * Show search dialog
     */
    showSearchDialog() {
        const query = prompt('검색할 내용을 입력하세요:');
        if (query && this.parser) {
            const results = this.parser.search(query);
            this.showSearchResults(results);
        }
    }

    /**
     * Show search results
     */
    showSearchResults(results) {
        if (results.length === 0) {
            alert('검색 결과가 없습니다.');
            return;
        }

        const resultList = results.slice(0, 10).map((result, index) => 
            `${index + 1}. ${result.chapterTitle} - ${result.slideTitle}`
        ).join('\n');

        const choice = prompt(`검색 결과 (${results.length}개):\n\n${resultList}\n\n이동할 번호를 입력하세요 (1-${Math.min(10, results.length)}):`);
        
        if (choice) {
            const index = parseInt(choice) - 1;
            if (index >= 0 && index < results.length) {
                const result = results[index];
                if (this.navigation) {
                    this.navigation.goToSlide(result.chapterId, result.slideIndex);
                }
            }
        }
    }

    /**
     * Setup help dialog
     */
    setupHelpDialog() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F1' || (e.key === '?' && e.shiftKey)) {
                e.preventDefault();
                this.showHelpDialog();
            }
        });
    }

    /**
     * Show help dialog
     */
    showHelpDialog() {
        const helpContent = `
JavaScript 학습 PPT 키보드 단축키:

네비게이션:
• 다음 슬라이드: 스페이스바, 방향키(→), Page Down
• 이전 슬라이드: 방향키(←), Page Up
• 첫 슬라이드: Home
• 마지막 슬라이드: End
• 슬라이드 이동: Ctrl+G

기능:
• 전체화면: F (또는 F11)
• 검색: Ctrl+F
• 테마 변경: T
• 도움말: F1 또는 Shift+?
• 전체화면 종료: Esc

터치/마우스:
• 슬라이드 스와이프로 이동 (모바일)
• 좌우 화살표 버튼 클릭
• 사이드바에서 챕터 선택
        `;

        alert(helpContent);
    }

    /**
     * Setup auto-advance functionality
     */
    setupAutoAdvance() {
        this.autoAdvanceTimer = null;
        
        if (this.settings.autoAdvance) {
            this.startAutoAdvance();
        }
    }

    /**
     * Start auto-advance
     */
    startAutoAdvance() {
        this.stopAutoAdvance(); // Clear any existing timer
        
        this.autoAdvanceTimer = setInterval(() => {
            if (this.navigation && !document.hidden) {
                const next = this.parser.getNextSlide(
                    this.navigation.currentChapter, 
                    this.navigation.currentSlide
                );
                if (next) {
                    this.navigation.goToSlide(next.chapterId, next.slideIndex);
                } else {
                    this.stopAutoAdvance(); // Stop at last slide
                }
            }
        }, this.settings.autoAdvanceInterval);
    }

    /**
     * Stop auto-advance
     */
    stopAutoAdvance() {
        if (this.autoAdvanceTimer) {
            clearInterval(this.autoAdvanceTimer);
            this.autoAdvanceTimer = null;
        }
    }

    /**
     * Handle window resize
     */
    handleResize() {
        // Recalculate layout if needed
        if (this.navigation && document.body.classList.contains('fullscreen')) {
            // Adjust fullscreen layout
        }
    }

    /**
     * Handle page visibility change
     */
    handleVisibilityChange() {
        if (document.hidden) {
            this.stopAutoAdvance();
        } else if (this.settings.autoAdvance) {
            this.startAutoAdvance();
        }
    }

    /**
     * Load settings from localStorage
     */
    loadSettings() {
        try {
            const saved = localStorage.getItem('jsLearningPPT_settings');
            if (saved) {
                this.settings = { ...this.settings, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.warn('Failed to load settings:', error);
        }
    }

    /**
     * Save settings to localStorage
     */
    saveSettings() {
        try {
            localStorage.setItem('jsLearningPPT_settings', JSON.stringify(this.settings));
        } catch (error) {
            console.warn('Failed to save settings:', error);
        }
    }

    /**
     * Reset settings to default
     */
    resetSettings() {
        this.settings = {
            autoAdvance: false,
            autoAdvanceInterval: 5000,
            theme: 'light',
            fontSize: 'medium',
            codeHighlight: true
        };
        
        this.applyTheme(this.settings.theme);
        this.applyFontSize(this.settings.fontSize);
        this.toggleCodeHighlighting(this.settings.codeHighlight);
        this.saveSettings();
        
        if (this.settings.autoAdvance) {
            this.startAutoAdvance();
        } else {
            this.stopAutoAdvance();
        }
    }

    /**
     * Get application state
     */
    getState() {
        return {
            isInitialized: this.isInitialized,
            currentSlide: this.navigation ? this.navigation.getCurrentState() : null,
            settings: this.settings,
            theme: this.theme
        };
    }

    /**
     * Export presentation data
     */
    exportData() {
        if (!this.parser) return null;
        
        return {
            chapters: this.parser.getChaptersMetadata(),
            progress: this.parser.getProgress(),
            currentState: this.getState(),
            exportedAt: new Date().toISOString()
        };
    }

    /**
     * Print presentation
     */
    print() {
        window.print();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JavaScriptLearningApp();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JavaScriptLearningApp;
}