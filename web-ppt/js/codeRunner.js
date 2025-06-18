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
        
        if (!this.modal) {
            console.warn('Code modal not found in DOM');
            return;
        }
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
    runCode() {
        if (!this.codeInput || !this.outputResult) return;
        
        const code = this.codeInput.value.trim();
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
            if (!validation.safe) {
                this.showOutput(`보안상 실행할 수 없는 코드입니다: ${validation.reason}`, 'error');
                return;
            }

            // Setup console capture
            this.startConsoleCapture();
            
            // Execute code with timeout
            const result = this.executeWithTimeout(code, this.maxExecutionTime);
            
            // Stop console capture
            this.stopConsoleCapture();
            
            // Show results
            this.displayExecutionResult(result);
            
        } catch (error) {
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
        // Create a safe execution environment
        const safeGlobals = {};
        this.allowedGlobals.forEach(global => {
            if (typeof window[global] !== 'undefined') {
                safeGlobals[global] = window[global];
            }
        });

        // Add safe console
        safeGlobals.console = {
            log: (...args) => this.captureConsoleOutput('log', args),
            error: (...args) => this.captureConsoleOutput('error', args),
            warn: (...args) => this.captureConsoleOutput('warn', args),
            info: (...args) => this.captureConsoleOutput('info', args)
        };

        // Create function with limited scope
        try {
            const func = new Function(
                ...Object.keys(safeGlobals),
                `"use strict"; ${code}`
            );
            
            const result = func(...Object.values(safeGlobals));
            return result;
        } catch (error) {
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
        this.capturedOutput.push({ type, output, timestamp: Date.now() });
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
     * Display execution result
     */
    displayExecutionResult(result) {
        let output = '';

        // Show console output
        if (this.capturedOutput.length > 0) {
            output += '콘솔 출력:\n';
            this.capturedOutput.forEach(item => {
                const prefix = item.type === 'error' ? '❌ ' : 
                              item.type === 'warn' ? '⚠️ ' : 
                              item.type === 'info' ? 'ℹ️ ' : '📝 ';
                output += `${prefix}${item.output}\n`;
            });
            output += '\n';
        }

        // Show return value
        if (result !== undefined) {
            output += `반환값: ${this.formatOutput(result)}`;
        } else if (this.capturedOutput.length === 0) {
            output += '실행 완료 (출력 없음)';
        }

        this.showOutput(output.trim() || '실행 완료', 'success');
    }

    /**
     * Show output in the result area
     */
    showOutput(text, type = 'info') {
        if (!this.outputResult) return;
        
        this.outputResult.textContent = text;
        this.outputResult.className = `output-${type}`;
        
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