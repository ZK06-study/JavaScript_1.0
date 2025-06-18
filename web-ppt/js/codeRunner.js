/**
 * Code Runner for JavaScript Learning PPT
 * Handles execution of JavaScript code examples with safety measures
 */

class CodeRunner {
    constructor() {
        this.modal = null;
        this.codeInput = null;
        this.outputResult = null;
        this.isModalOpen = false;
        this.executionHistory = [];
        this.maxHistoryLength = 50;
        
        // Safety settings
        this.maxExecutionTime = 5000; // 5 seconds
        this.allowedGlobals = ['console', 'Math', 'Date', 'Array', 'Object', 'String', 'Number', 'Boolean'];
        this.blockedKeywords = ['import', 'require', 'eval', 'Function', 'setTimeout', 'setInterval'];
        
        this.init();
    }

    /**
     * Initialize code runner
     */
    init() {
        this.setupModal();
        this.setupEventListeners();
        this.setupConsoleCapture();
    }

    /**
     * Setup code execution modal
     */
    setupModal() {
        this.modal = document.getElementById('code-modal');
        this.codeInput = document.getElementById('code-input');
        this.outputResult = document.getElementById('output-result');
        this.returnResult = document.getElementById('return-result');
        this.errorResult = document.getElementById('error-result');
        
        if (!this.modal) {
            console.warn('Code modal not found in DOM');
            return;
        }
        
        // Setup tab system
        this.setupTabSystem();
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Run code button
        const runButton = document.getElementById('run-code');
        if (runButton) {
            runButton.addEventListener('click', () => this.runCode());
        }

        // Modal close button
        const closeButton = this.modal?.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.closeModal());
        }

        // Close modal on outside click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Keyboard shortcuts in modal
        if (this.codeInput) {
            this.codeInput.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'Enter') {
                    e.preventDefault();
                    this.runCode();
                }
                
                if (e.key === 'Escape') {
                    this.closeModal();
                }
            });
        }

        // Auto-resize textarea
        if (this.codeInput) {
            this.codeInput.addEventListener('input', () => this.autoResizeTextarea());
        }
        
        // Clear output button
        const clearOutputBtn = document.getElementById('clear-output');
        if (clearOutputBtn) {
            clearOutputBtn.addEventListener('click', () => this.clearAllOutputs());
        }
        
        // Copy output button
        const copyOutputBtn = document.getElementById('copy-output');
        if (copyOutputBtn) {
            copyOutputBtn.addEventListener('click', () => this.copyCurrentOutput());
        }
    }

    /**
     * Setup console capture to redirect console output
     */
    setupConsoleCapture() {
        this.originalConsole = {
            log: console.log,
            error: console.error,
            warn: console.warn,
            info: console.info
        };
        
        this.capturedOutput = [];
    }

    /**
     * Execute JavaScript code from a code block
     */
    executeCode(code) {
        this.openModal();
        if (this.codeInput) {
            this.codeInput.value = code.trim();
            this.autoResizeTextarea();
        }
        
        // Focus on code input for editing
        setTimeout(() => {
            if (this.codeInput) {
                this.codeInput.focus();
                this.codeInput.setSelectionRange(this.codeInput.value.length, this.codeInput.value.length);
            }
        }, 100);
    }

    /**
     * Run the code from the input textarea
     */
    async runCode() {
        console.log('🔍 runCode 시작됨');
        
        if (!this.codeInput || !this.outputResult) {
            console.error('❌ 필수 DOM 요소가 없습니다:', {
                codeInput: !!this.codeInput,
                outputResult: !!this.outputResult
            });
            return;
        }
        
        const code = this.codeInput.value.trim();
        console.log('📝 실행할 코드:', code);
        
        if (!code) {
            this.showOutput('코드를 입력해주세요.', 'error');
            return;
        }

        // Add to history
        this.addToHistory(code);

        // Clear previous output
        this.clearOutput();
        
        try {
            // Validate code safety
            const validation = this.validateCode(code);
            console.log('🔒 코드 검증 결과:', validation);
            
            if (!validation.safe) {
                this.showOutput(`보안상 실행할 수 없는 코드입니다: ${validation.reason}`, 'error');
                return;
            }

            // Setup console capture
            this.startConsoleCapture();
            console.log('🎯 콘솔 캡처 시작됨');
            
            // Execute code with timeout (await the promise)
            const result = await this.executeWithTimeout(code, this.maxExecutionTime);
            console.log('✅ 코드 실행 완료, 결과:', result);
            
            // Stop console capture
            this.stopConsoleCapture();
            console.log('🛑 콘솔 캡처 종료됨, 캡처된 출력:', this.capturedOutput);
            
            // Show results
            this.displayExecutionResult(result);
            
        } catch (error) {
            console.error('❌ 코드 실행 중 오류:', error);
            this.stopConsoleCapture();
            this.showOutput(`실행 오류: ${error.message}`, 'error');
        }
    }

    /**
     * Validate code for safety
     */
    validateCode(code) {
        // Check for blocked keywords
        for (const keyword of this.blockedKeywords) {
            if (code.includes(keyword)) {
                return {
                    safe: false,
                    reason: `'${keyword}' 키워드는 보안상 사용할 수 없습니다.`
                };
            }
        }

        // Check for suspicious patterns
        const suspiciousPatterns = [
            /while\s*\(\s*true\s*\)/,  // Infinite loops
            /for\s*\(\s*;\s*;\s*\)/,   // Infinite for loops
            /document\./,               // DOM manipulation
            /window\./,                 // Window object access
            /location\./,               // Location manipulation
            /fetch\(/,                  // Network requests
            /XMLHttpRequest/,           // AJAX requests
            /localStorage/,             // Local storage access
            /sessionStorage/            // Session storage access
        ];

        for (const pattern of suspiciousPatterns) {
            if (pattern.test(code)) {
                return {
                    safe: false,
                    reason: '잠재적으로 위험한 코드 패턴이 감지되었습니다.'
                };
            }
        }

        return { safe: true };
    }

    /**
     * Execute code with timeout
     */
    executeWithTimeout(code, timeout) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(new Error('코드 실행 시간이 초과되었습니다.'));
            }, timeout);

            try {
                // Create isolated execution context
                const result = this.safeExecute(code);
                clearTimeout(timer);
                resolve(result);
            } catch (error) {
                clearTimeout(timer);
                reject(error);
            }
        });
    }

    /**
     * Safely execute code in isolated context
     */
    safeExecute(code) {
        console.log('🔧 safeExecute 시작, 코드:', code);
        
        // Create a safe execution environment
        const safeGlobals = {};
        this.allowedGlobals.forEach(global => {
            if (typeof window[global] !== 'undefined') {
                safeGlobals[global] = window[global];
            }
        });

        // Add safe console that captures output
        safeGlobals.console = {
            log: (...args) => {
                console.log('📝 console.log 호출됨:', args);
                this.captureConsoleOutput('log', args);
                // Also log to real console for debugging
                this.originalConsole.log('[CodeRunner]', ...args);
            },
            error: (...args) => {
                console.log('❌ console.error 호출됨:', args);
                this.captureConsoleOutput('error', args);
                this.originalConsole.error('[CodeRunner]', ...args);
            },
            warn: (...args) => {
                console.log('⚠️ console.warn 호출됨:', args);
                this.captureConsoleOutput('warn', args);
                this.originalConsole.warn('[CodeRunner]', ...args);
            },
            info: (...args) => {
                console.log('ℹ️ console.info 호출됨:', args);
                this.captureConsoleOutput('info', args);
                this.originalConsole.info('[CodeRunner]', ...args);
            }
        };

        // Create function with limited scope
        try {
            // For expressions like "1 + 1", we need to return the result
            // Check if the code is a single expression (no semicolon at the end or simple expressions)
            const trimmedCode = code.trim();
            let wrappedCode;
            
            // If it's a simple expression without console.log, capture the result
            if (!trimmedCode.includes('console.') && !trimmedCode.includes('return') && 
                !trimmedCode.includes('{') && !trimmedCode.includes('function')) {
                wrappedCode = `
                    try {
                        var __result = (${trimmedCode});
                        if (__result !== undefined) {
                            console.log(__result);
                            return __result;
                        }
                    } catch (error) {
                        console.error('Execution error:', error.message);
                        throw error;
                    }
                `;
            } else {
                wrappedCode = `
                    try {
                        ${code}
                    } catch (error) {
                        console.error('Execution error:', error.message);
                        throw error;
                    }
                `;
            }
            
            console.log('🎯 래핑된 코드:', wrappedCode);
            
            const func = new Function(
                ...Object.keys(safeGlobals),
                wrappedCode
            );
            
            console.log('🔧 함수 생성됨, 실행 시작');
            const result = func(...Object.values(safeGlobals));
            console.log('✅ 함수 실행 완료, 반환값:', result);
            
            return result;
        } catch (error) {
            console.error('❌ safeExecute 오류:', error);
            // Capture error in console output
            this.captureConsoleOutput('error', [error.message]);
            throw error;
        }
    }

    /**
     * Start capturing console output
     */
    startConsoleCapture() {
        this.capturedOutput = [];
    }

    /**
     * Stop capturing console output
     */
    stopConsoleCapture() {
        // Restore original console if needed
    }

    /**
     * Capture console output
     */
    captureConsoleOutput(type, args) {
        const output = args.map(arg => this.formatOutput(arg)).join(' ');
        const capturedItem = { type, output, timestamp: Date.now() };
        
        console.log('📋 캡처된 출력:', capturedItem);
        this.capturedOutput.push(capturedItem);
    }

    /**
     * Format output for display
     */
    formatOutput(value) {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return value;
        if (typeof value === 'function') return value.toString();
        if (typeof value === 'object') {
            try {
                return JSON.stringify(value, null, 2);
            } catch (e) {
                return value.toString();
            }
        }
        return String(value);
    }

    /**
     * Display execution result in appropriate tabs
     */
    displayExecutionResult(result) {
        console.log('Displaying execution result:', {
            result,
            capturedOutput: this.capturedOutput,
            outputElements: {
                outputResult: !!this.outputResult,
                returnResult: !!this.returnResult,
                errorResult: !!this.errorResult
            }
        });
        
        // Clear all tabs first
        this.clearAllOutputs();
        
        // Update Console tab
        if (this.capturedOutput.length > 0) {
            let consoleOutput = '';
            this.capturedOutput.forEach(item => {
                const prefix = item.type === 'error' ? '❌ ' : 
                              item.type === 'warn' ? '⚠️ ' : 
                              item.type === 'info' ? 'ℹ️ ' : '📝 ';
                consoleOutput += `${prefix}${item.output}\n`;
            });
            if (this.outputResult) {
                this.outputResult.textContent = consoleOutput.trim();
                console.log('Console output updated:', consoleOutput.trim());
            }
        } else {
            if (this.outputResult) {
                this.outputResult.textContent = '(콘솔 출력 없음)';
                console.log('No console output captured');
            }
        }
        
        // Update Result tab
        if (this.returnResult) {
            if (result !== undefined) {
                this.returnResult.textContent = this.formatOutput(result);
                console.log('Return result updated:', this.formatOutput(result));
            } else {
                this.returnResult.textContent = '(반환값 없음)';
                console.log('No return value');
            }
        }
        
        // Update Error tab with any caught errors
        const hasErrors = this.capturedOutput.some(item => item.type === 'error');
        if (this.errorResult) {
            if (hasErrors) {
                const errors = this.capturedOutput
                    .filter(item => item.type === 'error')
                    .map(item => item.output)
                    .join('\n');
                this.errorResult.textContent = errors;
                this.switchToTab('errors'); // Auto-switch to errors if there are any
                console.log('Error output updated:', errors);
            } else {
                this.errorResult.textContent = '(오류 없음)';
                console.log('No errors');
            }
        }
        
        // Switch to console tab if there's console output and no errors
        if (this.capturedOutput.length > 0 && !hasErrors) {
            this.switchToTab('console');
        } else if (result !== undefined && !hasErrors) {
            this.switchToTab('result');
        }
    }

    /**
     * Show output in the result area
     */
    showOutput(text, type = 'info') {
        if (!this.outputResult) return;
        
        this.outputResult.textContent = text;
        this.outputResult.className = `output-${type}`;
        
        // Update error tab if it's an error
        if (type === 'error' && this.errorResult) {
            this.errorResult.textContent = text;
            this.switchToTab('errors');
        }
        
        // Scroll to bottom
        this.outputResult.scrollTop = this.outputResult.scrollHeight;
    }

    /**
     * Clear output area
     */
    clearOutput() {
        if (this.outputResult) {
            this.outputResult.textContent = '';
            this.outputResult.className = '';
        }
    }

    /**
     * Setup tab system for output display
     */
    setupTabSystem() {
        const tabButtons = this.modal?.querySelectorAll('.tab-btn');
        if (!tabButtons) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                if (tabName) {
                    this.switchToTab(tabName);
                }
            });
        });
    }

    /**
     * Switch to specific tab
     */
    switchToTab(tabName) {
        if (!this.modal) return;

        // Update tab buttons
        const tabButtons = this.modal.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update tab content
        const tabContents = this.modal.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            if (content.id === `${tabName}-output`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    /**
     * Clear all output areas
     */
    clearAllOutputs() {
        if (this.outputResult) {
            this.outputResult.textContent = '';
        }
        if (this.returnResult) {
            this.returnResult.textContent = '';
        }
        if (this.errorResult) {
            this.errorResult.textContent = '';
        }
    }

    /**
     * Copy current active output to clipboard
     */
    async copyCurrentOutput() {
        const activeTab = this.modal?.querySelector('.tab-btn.active');
        if (!activeTab) return;
        
        const tabName = activeTab.dataset.tab;
        let textToCopy = '';
        
        switch (tabName) {
            case 'console':
                textToCopy = this.outputResult?.textContent || '';
                break;
            case 'result':
                textToCopy = this.returnResult?.textContent || '';
                break;
            case 'errors':
                textToCopy = this.errorResult?.textContent || '';
                break;
        }
        
        if (textToCopy) {
            try {
                await navigator.clipboard.writeText(textToCopy);
                // Show success feedback
                const button = this.modal?.querySelector('#copy-output');
                if (button) {
                    const originalText = button.textContent;
                    button.textContent = '복사됨!';
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 1000);
                }
            } catch (err) {
                console.error('Failed to copy to clipboard:', err);
                // Fallback for browsers that don't support clipboard API
                this.fallbackCopyToClipboard(textToCopy);
            }
        }
    }

    /**
     * Fallback copy method for older browsers
     */
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        
        document.body.removeChild(textArea);
    }

    /**
     * Open the code execution modal
     */
    openModal() {
        if (this.modal) {
            this.modal.classList.add('active');
            this.isModalOpen = true;
            
            // Disable navigation keyboard shortcuts
            if (window.app && window.app.navigation) {
                window.app.navigation.setKeyboardEnabled(false);
            }
        }
    }

    /**
     * Close the code execution modal
     */
    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            this.isModalOpen = false;
            
            // Re-enable navigation keyboard shortcuts
            if (window.app && window.app.navigation) {
                window.app.navigation.setKeyboardEnabled(true);
            }
        }
    }

    /**
     * Auto-resize textarea based on content
     */
    autoResizeTextarea() {
        if (!this.codeInput) return;
        
        this.codeInput.style.height = 'auto';
        this.codeInput.style.height = Math.min(this.codeInput.scrollHeight, 400) + 'px';
    }

    /**
     * Add code to execution history
     */
    addToHistory(code) {
        this.executionHistory.unshift({
            code,
            timestamp: Date.now()
        });
        
        if (this.executionHistory.length > this.maxHistoryLength) {
            this.executionHistory.pop();
        }
    }

    /**
     * Get execution history
     */
    getHistory() {
        return this.executionHistory;
    }

    /**
     * Load code from history
     */
    loadFromHistory(index) {
        if (index >= 0 && index < this.executionHistory.length) {
            const historyItem = this.executionHistory[index];
            if (this.codeInput) {
                this.codeInput.value = historyItem.code;
                this.autoResizeTextarea();
            }
        }
    }

    /**
     * Quick execute inline code
     */
    quickExecute(code) {
        try {
            const validation = this.validateCode(code);
            if (!validation.safe) {
                return { error: validation.reason };
            }

            this.startConsoleCapture();
            const result = this.safeExecute(code);
            this.stopConsoleCapture();

            return {
                success: true,
                result: this.formatOutput(result),
                console: this.capturedOutput
            };
        } catch (error) {
            return { error: error.message };
        }
    }

    /**
     * Create inline code runner for small snippets
     */
    createInlineRunner(codeElement) {
        const container = document.createElement('div');
        container.className = 'inline-code-runner';
        
        const runBtn = document.createElement('button');
        runBtn.className = 'btn btn-small';
        runBtn.textContent = '실행';
        runBtn.onclick = () => {
            const code = codeElement.textContent;
            const result = this.quickExecute(code);
            
            let output = container.querySelector('.inline-output');
            if (!output) {
                output = document.createElement('div');
                output.className = 'inline-output';
                container.appendChild(output);
            }
            
            if (result.error) {
                output.textContent = `❌ ${result.error}`;
                output.className = 'inline-output error';
            } else {
                output.textContent = `✅ ${result.result}`;
                output.className = 'inline-output success';
            }
        };
        
        container.appendChild(runBtn);
        return container;
    }

    /**
     * Export execution history
     */
    exportHistory() {
        return {
            history: this.executionHistory,
            exportedAt: new Date().toISOString()
        };
    }

    /**
     * Clear execution history
     */
    clearHistory() {
        this.executionHistory = [];
    }

    /**
     * Get runner statistics
     */
    getStats() {
        return {
            totalExecutions: this.executionHistory.length,
            isModalOpen: this.isModalOpen,
            maxExecutionTime: this.maxExecutionTime,
            allowedGlobals: this.allowedGlobals,
            blockedKeywords: this.blockedKeywords
        };
    }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeRunner;
} else {
    window.CodeRunner = CodeRunner;
}