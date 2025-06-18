/**
 * Enhanced Live Code Runner for Tutoring Environment
 * Real-time JavaScript execution with enhanced features for teaching
 */

class LiveCodeRunner {
    constructor() {
        this.liveCodingPanel = null;
        this.liveCodeInput = null;
        this.liveOutputContent = null;
        this.isLivePanelOpen = false;
        
        // Live execution state
        this.autoRun = true;
        this.debounceTimer = null;
        this.debounceDelay = 1000; // 1 second
        this.executionHistory = [];
        this.maxHistoryLength = 100;
        
        // Teaching features
        this.stepByStepMode = false;
        this.visualizations = [];
        this.annotations = [];
        
        this.init();
    }

    /**
     * Initialize live code runner
     */
    init() {
        this.setupDOM();
        this.setupEventListeners();
        this.setupConsoleCapture();
    }

    /**
     * Setup DOM references
     */
    setupDOM() {
        this.liveCodingPanel = document.getElementById('live-coding-panel');
        this.liveCodeInput = document.getElementById('live-code-input');
        this.liveOutputContent = document.getElementById('live-output-content');
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Live coding toggle
        const liveCodingToggle = document.querySelector('.live-code-toggle');
        if (liveCodingToggle) {
            liveCodingToggle.addEventListener('click', () => this.toggleLivePanel());
        }

        // Close panel
        const closeLivePanel = document.getElementById('close-live-panel');
        if (closeLivePanel) {
            closeLivePanel.addEventListener('click', () => this.toggleLivePanel());
        }

        // Run live code
        const runLiveCode = document.getElementById('run-live-code');
        if (runLiveCode) {
            runLiveCode.addEventListener('click', () => this.runLiveCode());
        }

        // Clear live code
        const clearLiveCode = document.getElementById('clear-live-code');
        if (clearLiveCode) {
            clearLiveCode.addEventListener('click', () => this.clearLiveCode());
        }

        // Clear live output
        const clearLiveOutput = document.getElementById('clear-live-output');
        if (clearLiveOutput) {
            clearLiveOutput.addEventListener('click', () => this.clearLiveOutput());
        }

        // Format code
        const formatLiveCode = document.getElementById('format-live-code');
        if (formatLiveCode) {
            formatLiveCode.addEventListener('click', () => this.formatCode());
        }

        // Font size change
        const editorFontSize = document.getElementById('editor-font-size');
        if (editorFontSize) {
            editorFontSize.addEventListener('change', (e) => this.changeFontSize(e.target.value));
        }

        // Live code input events
        if (this.liveCodeInput) {
            // Auto-run on input change
            this.liveCodeInput.addEventListener('input', () => {
                if (this.autoRun) {
                    this.debouncedExecution();
                }
            });

            // Keyboard shortcuts
            this.liveCodeInput.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                    e.preventDefault();
                    this.runLiveCode();
                }
                
                if (e.ctrlKey && e.key === 'l') {
                    e.preventDefault();
                    this.clearLiveOutput();
                }
                
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.insertTab();
                }

                // Auto-close brackets
                if (['(', '[', '{', '"', "'"].includes(e.key)) {
                    this.handleAutoClose(e);
                }
            });

            // Syntax highlighting simulation
            this.liveCodeInput.addEventListener('blur', () => {
                this.applySyntaxHighlighting();
            });
        }
    }

    /**
     * Setup console capture for live execution
     */
    setupConsoleCapture() {
        this.capturedOutput = [];
        this.originalConsole = {
            log: console.log,
            error: console.error,
            warn: console.warn,
            info: console.info,
            clear: console.clear
        };
    }

    /**
     * Toggle live coding panel
     */
    toggleLivePanel() {
        if (!this.liveCodingPanel) return;

        this.isLivePanelOpen = !this.isLivePanelOpen;
        
        if (this.isLivePanelOpen) {
            this.liveCodingPanel.classList.add('active');
            document.querySelector('.live-code-toggle')?.classList.add('active');
            
            // Focus on input
            setTimeout(() => {
                if (this.liveCodeInput) {
                    this.liveCodeInput.focus();
                }
            }, 300);
        } else {
            this.liveCodingPanel.classList.remove('active');
            document.querySelector('.live-code-toggle')?.classList.remove('active');
        }
    }

    /**
     * Run live code
     */
    runLiveCode() {
        if (!this.liveCodeInput || !this.liveOutputContent) return;

        const code = this.liveCodeInput.value.trim();
        if (!code) {
            this.showLiveOutput('코드를 입력해주세요.', 'info');
            return;
        }

        // Add to history
        this.addToExecutionHistory(code);

        try {
            // Clear previous output
            this.clearCapturedOutput();

            // Validate code
            const validation = this.validateCodeSafety(code);
            if (!validation.safe) {
                this.showLiveOutput(`⚠️ ${validation.reason}`, 'warning');
                return;
            }

            // Start console capture
            this.startConsoleCapture();

            // Execute code
            const result = this.executeCodeSafely(code);

            // Stop console capture
            this.stopConsoleCapture();

            // Display results
            this.displayLiveResults(result);

            // Update execution counter
            this.updateExecutionCounter();

        } catch (error) {
            this.stopConsoleCapture();
            this.showLiveOutput(`❌ 실행 오류: ${error.message}`, 'error');
        }
    }

    /**
     * Debounced execution for auto-run
     */
    debouncedExecution() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.runLiveCode();
        }, this.debounceDelay);
    }

    /**
     * Execute code safely with enhanced error handling
     */
    executeCodeSafely(code) {
        // Create safe execution environment
        const safeGlobals = this.createSafeGlobals();
        
        try {
            // Enhanced function creation with better error handling
            const func = new Function(
                ...Object.keys(safeGlobals),
                `
                "use strict";
                try {
                    ${code}
                } catch (error) {
                    console.error('실행 중 오류:', error.message);
                    return { error: error.message, line: error.lineNumber };
                }
                `
            );
            
            const result = func(...Object.values(safeGlobals));
            return result;
        } catch (error) {
            throw new Error(`구문 오류: ${error.message}`);
        }
    }

    /**
     * Create safe globals with teaching-friendly APIs
     */
    createSafeGlobals() {
        const safeGlobals = {
            // Safe console
            console: {
                log: (...args) => this.captureConsoleOutput('log', args),
                error: (...args) => this.captureConsoleOutput('error', args),
                warn: (...args) => this.captureConsoleOutput('warn', args),
                info: (...args) => this.captureConsoleOutput('info', args),
                clear: () => this.clearLiveOutput(),
                table: (data) => this.captureTableOutput(data),
                time: (label) => this.captureTimeStart(label),
                timeEnd: (label) => this.captureTimeEnd(label)
            },
            
            // Math object
            Math: Math,
            
            // Date object
            Date: Date,
            
            // Array methods
            Array: Array,
            
            // Object methods
            Object: Object,
            
            // String methods
            String: String,
            
            // Number methods
            Number: Number,
            
            // JSON
            JSON: JSON,
            
            // Teaching helpers
            explain: (concept) => this.explainConcept(concept),
            visualize: (data, type = 'auto') => this.visualizeData(data, type),
            step: (description) => this.addStepAnnotation(description),
            
            // Safe setTimeout (limited)
            setTimeout: (fn, delay) => {
                if (delay > 100 && delay < 5000) {
                    return setTimeout(fn, delay);
                }
                throw new Error('setTimeout delay must be between 100-5000ms');
            }
        };
        
        return safeGlobals;
    }

    /**
     * Validate code safety with teaching context
     */
    validateCodeSafety(code) {
        // Enhanced validation for teaching environment
        const dangerousPatterns = [
            { pattern: /while\s*\(\s*true\s*\)/, message: '무한 루프는 브라우저를 멈출 수 있습니다' },
            { pattern: /for\s*\(\s*;\s*;\s*\)/, message: '무한 for 루프는 허용되지 않습니다' },
            { pattern: /document\./, message: 'DOM 조작은 라이브 코딩에서 제한됩니다' },
            { pattern: /window\./, message: 'window 객체 접근은 보안상 제한됩니다' },
            { pattern: /eval\s*\(/, message: 'eval() 함수는 보안상 사용할 수 없습니다' },
            { pattern: /new\s+Function/, message: 'Function 생성자는 제한됩니다' },
            { pattern: /import\s+/, message: 'import 문은 라이브 환경에서 지원되지 않습니다' },
            { pattern: /require\s*\(/, message: 'require()는 브라우저 환경에서 사용할 수 없습니다' }
        ];

        for (const { pattern, message } of dangerousPatterns) {
            if (pattern.test(code)) {
                return { safe: false, reason: message };
            }
        }

        // Check for very long loops
        const loopMatches = code.match(/for\s*\([^)]*\)\s*{[^}]*}/g);
        if (loopMatches) {
            for (const loop of loopMatches) {
                if (this.detectPotentialInfiniteLoop(loop)) {
                    return { safe: false, reason: '잠재적으로 긴 루프가 감지되었습니다' };
                }
            }
        }

        return { safe: true };
    }

    /**
     * Detect potential infinite loops
     */
    detectPotentialInfiniteLoop(loopCode) {
        // Simple heuristic: look for loops without clear incrementing
        const hasIncrement = /(\+\+|\-\-|[\+\-\*\/]\=)/.test(loopCode);
        const hasBreak = /break/.test(loopCode);
        const hasReturn = /return/.test(loopCode);
        
        return !hasIncrement && !hasBreak && !hasReturn;
    }

    /**
     * Capture console output with formatting
     */
    captureConsoleOutput(type, args) {
        const output = args.map(arg => this.formatOutputValue(arg)).join(' ');
        const timestamp = new Date().toLocaleTimeString();
        
        this.capturedOutput.push({ 
            type, 
            output, 
            timestamp,
            formatted: this.formatConsoleOutput(type, output, timestamp)
        });
    }

    /**
     * Format console output with colors and icons
     */
    formatConsoleOutput(type, output, timestamp) {
        const icons = {
            log: '📝',
            error: '❌',
            warn: '⚠️',
            info: 'ℹ️'
        };
        
        const colors = {
            log: '#333',
            error: '#dc2626',
            warn: '#f59e0b',
            info: '#3b82f6'
        };
        
        return `<div class="console-line console-${type}" style="color: ${colors[type]}">
            <span class="console-icon">${icons[type]}</span>
            <span class="console-time">[${timestamp}]</span>
            <span class="console-content">${output}</span>
        </div>`;
    }

    /**
     * Format output values for display
     */
    formatOutputValue(value) {
        if (value === null) return '<span class="null-value">null</span>';
        if (value === undefined) return '<span class="undefined-value">undefined</span>';
        if (typeof value === 'string') return `<span class="string-value">"${value}"</span>`;
        if (typeof value === 'number') return `<span class="number-value">${value}</span>`;
        if (typeof value === 'boolean') return `<span class="boolean-value">${value}</span>`;
        if (typeof value === 'function') return `<span class="function-value">[Function: ${value.name || 'anonymous'}]</span>`;
        if (typeof value === 'object') {
            try {
                return `<span class="object-value">${JSON.stringify(value, null, 2)}</span>`;
            } catch (e) {
                return `<span class="object-value">[Object]</span>`;
            }
        }
        return String(value);
    }

    /**
     * Display live execution results
     */
    displayLiveResults(result) {
        let output = '';

        // Show console output
        if (this.capturedOutput.length > 0) {
            this.capturedOutput.forEach(item => {
                output += item.formatted;
            });
        }

        // Show return value if any
        if (result !== undefined && result !== null) {
            output += `<div class="console-line console-return">
                <span class="console-icon">↩️</span>
                <span class="console-content">반환값: ${this.formatOutputValue(result)}</span>
            </div>`;
        }

        // Show execution time
        const executionTime = Date.now() - this.executionStartTime;
        output += `<div class="console-line console-meta">
            <span class="console-icon">⏱️</span>
            <span class="console-content">실행 시간: ${executionTime}ms</span>
        </div>`;

        if (!output) {
            output = '<div class="output-placeholder">실행 완료 (출력 없음)</div>';
        }

        this.showLiveOutput(output, 'success', true);
    }

    /**
     * Show output in live panel
     */
    showLiveOutput(content, type = 'info', isHTML = false) {
        if (!this.liveOutputContent) return;

        const timestamp = new Date().toLocaleTimeString();
        const outputDiv = document.createElement('div');
        outputDiv.className = `output-entry output-${type}`;
        
        if (isHTML) {
            outputDiv.innerHTML = content;
        } else {
            outputDiv.innerHTML = `
                <div class="console-line">
                    <span class="console-time">[${timestamp}]</span>
                    <span class="console-content">${content}</span>
                </div>
            `;
        }

        // Remove placeholder if exists
        const placeholder = this.liveOutputContent.querySelector('.output-placeholder');
        if (placeholder) {
            placeholder.remove();
        }

        this.liveOutputContent.appendChild(outputDiv);
        this.liveOutputContent.scrollTop = this.liveOutputContent.scrollHeight;
    }

    /**
     * Clear live output
     */
    clearLiveOutput() {
        if (this.liveOutputContent) {
            this.liveOutputContent.innerHTML = '<div class="output-placeholder">코드를 실행하면 여기에 결과가 나타납니다.</div>';
        }
    }

    /**
     * Clear live code
     */
    clearLiveCode() {
        if (this.liveCodeInput) {
            this.liveCodeInput.value = '';
            this.liveCodeInput.focus();
        }
        this.clearLiveOutput();
    }

    /**
     * Format code with basic formatting
     */
    formatCode() {
        if (!this.liveCodeInput) return;

        const code = this.liveCodeInput.value;
        try {
            // Basic JavaScript formatting
            const formatted = this.basicJSFormat(code);
            this.liveCodeInput.value = formatted;
        } catch (error) {
            this.showLiveOutput('코드 포맷팅 중 오류가 발생했습니다.', 'warning');
        }
    }

    /**
     * Basic JavaScript formatting
     */
    basicJSFormat(code) {
        // Very basic formatting - add proper indentation
        let formatted = code;
        let indentLevel = 0;
        const lines = formatted.split('\n');
        
        const formattedLines = lines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            
            // Decrease indent for closing braces
            if (trimmed.startsWith('}')) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            
            const indented = '  '.repeat(indentLevel) + trimmed;
            
            // Increase indent for opening braces
            if (trimmed.endsWith('{')) {
                indentLevel++;
            }
            
            return indented;
        });
        
        return formattedLines.join('\n');
    }

    /**
     * Change font size
     */
    changeFontSize(size) {
        if (this.liveCodeInput) {
            this.liveCodeInput.style.fontSize = size + 'px';
        }
    }

    /**
     * Insert tab character
     */
    insertTab() {
        if (!this.liveCodeInput) return;

        const start = this.liveCodeInput.selectionStart;
        const end = this.liveCodeInput.selectionEnd;
        const value = this.liveCodeInput.value;

        this.liveCodeInput.value = value.substring(0, start) + '  ' + value.substring(end);
        this.liveCodeInput.selectionStart = this.liveCodeInput.selectionEnd = start + 2;
    }

    /**
     * Handle auto-close brackets
     */
    handleAutoClose(event) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
            '"': '"',
            "'": "'"
        };

        const char = event.key;
        if (!pairs[char] || !this.liveCodeInput) return;

        event.preventDefault();
        
        const start = this.liveCodeInput.selectionStart;
        const end = this.liveCodeInput.selectionEnd;
        const value = this.liveCodeInput.value;
        
        const newValue = value.substring(0, start) + char + pairs[char] + value.substring(end);
        this.liveCodeInput.value = newValue;
        this.liveCodeInput.selectionStart = this.liveCodeInput.selectionEnd = start + 1;
    }

    /**
     * Add execution to history
     */
    addToExecutionHistory(code) {
        this.executionHistory.unshift({
            code,
            timestamp: Date.now(),
            formatted: new Date().toLocaleString()
        });

        if (this.executionHistory.length > this.maxHistoryLength) {
            this.executionHistory.pop();
        }
    }

    /**
     * Teaching helper: Explain concept
     */
    explainConcept(concept) {
        const explanations = {
            'variable': '변수는 데이터를 저장하는 컨테이너입니다.',
            'function': '함수는 재사용 가능한 코드 블록입니다.',
            'loop': '반복문은 같은 코드를 여러 번 실행합니다.',
            'array': '배열은 여러 값을 순서대로 저장하는 자료구조입니다.',
            'object': '객체는 키-값 쌍으로 데이터를 저장합니다.'
        };

        const explanation = explanations[concept.toLowerCase()] || `'${concept}'에 대한 설명을 찾을 수 없습니다.`;
        this.captureConsoleOutput('info', [`💡 ${explanation}`]);
        return explanation;
    }

    /**
     * Teaching helper: Visualize data
     */
    visualizeData(data, type) {
        if (Array.isArray(data)) {
            this.captureConsoleOutput('info', [`📊 배열 시각화: [${data.join(', ')}] (길이: ${data.length})`]);
        } else if (typeof data === 'object' && data !== null) {
            this.captureConsoleOutput('info', [`📊 객체 시각화: ${Object.keys(data).length}개의 속성`]);
            Object.entries(data).forEach(([key, value]) => {
                this.captureConsoleOutput('info', [`  ${key}: ${value}`]);
            });
        } else {
            this.captureConsoleOutput('info', [`📊 값: ${data} (타입: ${typeof data})`]);
        }
    }

    /**
     * Start/stop console capture
     */
    startConsoleCapture() {
        this.executionStartTime = Date.now();
        this.clearCapturedOutput();
    }

    stopConsoleCapture() {
        // Could restore original console here if needed
    }

    clearCapturedOutput() {
        this.capturedOutput = [];
    }

    /**
     * Get live coding state
     */
    getState() {
        return {
            isPanelOpen: this.isLivePanelOpen,
            autoRun: this.autoRun,
            executionHistory: this.executionHistory.slice(0, 10), // Last 10 executions
            currentCode: this.liveCodeInput?.value || ''
        };
    }

    /**
     * Load example code
     */
    loadExample(code) {
        if (this.liveCodeInput) {
            this.liveCodeInput.value = code;
            if (this.autoRun) {
                this.debouncedExecution();
            }
        }
    }

    /**
     * Toggle auto-run
     */
    toggleAutoRun() {
        this.autoRun = !this.autoRun;
        // Could update UI to reflect state
    }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LiveCodeRunner;
} else {
    window.LiveCodeRunner = LiveCodeRunner;
}