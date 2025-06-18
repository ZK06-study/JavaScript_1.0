/**
 * Tutor Features for JavaScript Learning PPT
 * Interactive examples, quizzes, notes, and bookmarks for teaching
 */

class TutorFeatures {
    constructor(parser, navigation) {
        this.parser = parser;
        this.navigation = navigation;
        
        // Feature states
        this.notes = JSON.parse(localStorage.getItem('js-tutor-notes') || '[]');
        this.bookmarks = JSON.parse(localStorage.getItem('js-tutor-bookmarks') || '[]');
        this.quizzes = this.loadQuizzes();
        
        // UI elements
        this.notesPanel = null;
        this.bookmarksPanel = null;
        this.quizModal = null;
        
        this.init();
    }

    /**
     * Initialize tutor features
     */
    init() {
        this.setupDOM();
        this.setupEventListeners();
        this.loadNotes();
        this.loadBookmarks();
    }

    /**
     * Setup DOM references
     */
    setupDOM() {
        this.notesPanel = document.getElementById('notes-panel');
        this.bookmarksPanel = document.getElementById('bookmarks-panel');
        this.quizModal = document.getElementById('quiz-modal');
        this.savedNotesContainer = document.getElementById('saved-notes');
        this.bookmarksListContainer = document.getElementById('bookmarks-list');
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Notes toggle
        const notesToggle = document.querySelector('.notes-toggle');
        if (notesToggle) {
            notesToggle.addEventListener('click', () => this.toggleNotesPanel());
        }

        // Bookmarks toggle
        const bookmarkToggle = document.querySelector('.bookmark-toggle');
        if (bookmarkToggle) {
            bookmarkToggle.addEventListener('click', () => this.toggleBookmarksPanel());
        }

        // Quiz button
        const quizBtn = document.getElementById('quick-quiz');
        if (quizBtn) {
            quizBtn.addEventListener('click', () => this.showQuiz());
        }

        // Try example button
        const tryExampleBtn = document.getElementById('try-example');
        if (tryExampleBtn) {
            tryExampleBtn.addEventListener('click', () => this.tryCurrentExample());
        }

        // Notes management
        this.setupNotesEventListeners();
        
        // Bookmarks management
        this.setupBookmarksEventListeners();
        
        // Quiz management
        this.setupQuizEventListeners();

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch (e.key.toLowerCase()) {
                case 'n':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.toggleNotesPanel();
                    }
                    break;
                case 'b':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.toggleBookmarksPanel();
                    }
                    break;
                case 'q':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.showQuiz();
                    }
                    break;
                case 's':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.saveCurrentNote();
                    }
                    break;
            }
        });
    }

    /**
     * Setup notes event listeners
     */
    setupNotesEventListeners() {
        // Close notes panel
        const closeNotesPanel = document.getElementById('close-notes-panel');
        if (closeNotesPanel) {
            closeNotesPanel.addEventListener('click', () => this.toggleNotesPanel());
        }

        // Save note
        const saveNote = document.getElementById('save-note');
        if (saveNote) {
            saveNote.addEventListener('click', () => this.saveCurrentNote());
        }

        // Auto-save on typing
        const notesTextarea = document.getElementById('notes-textarea');
        if (notesTextarea) {
            let saveTimer;
            notesTextarea.addEventListener('input', () => {
                clearTimeout(saveTimer);
                saveTimer = setTimeout(() => this.autoSaveNote(), 2000);
            });
        }
    }

    /**
     * Setup bookmarks event listeners
     */
    setupBookmarksEventListeners() {
        // Close bookmarks panel
        const closeBookmarksPanel = document.getElementById('close-bookmarks-panel');
        if (closeBookmarksPanel) {
            closeBookmarksPanel.addEventListener('click', () => this.toggleBookmarksPanel());
        }

        // Add bookmark
        const addBookmark = document.getElementById('add-bookmark');
        if (addBookmark) {
            addBookmark.addEventListener('click', () => this.addCurrentSlideBookmark());
        }

        // Clear bookmarks
        const clearBookmarks = document.getElementById('clear-bookmarks');
        if (clearBookmarks) {
            clearBookmarks.addEventListener('click', () => this.clearAllBookmarks());
        }
    }

    /**
     * Setup quiz event listeners
     */
    setupQuizEventListeners() {
        // Close quiz modal
        const closeQuizModal = this.quizModal?.querySelector('.modal-close');
        if (closeQuizModal) {
            closeQuizModal.addEventListener('click', () => this.closeQuiz());
        }

        // Close on outside click
        if (this.quizModal) {
            this.quizModal.addEventListener('click', (e) => {
                if (e.target === this.quizModal) {
                    this.closeQuiz();
                }
            });
        }
    }

    /**
     * Toggle notes panel
     */
    toggleNotesPanel() {
        if (!this.notesPanel) return;

        const isActive = this.notesPanel.classList.toggle('active');
        document.querySelector('.notes-toggle')?.classList.toggle('active', isActive);

        if (isActive) {
            // Focus on notes textarea
            setTimeout(() => {
                document.getElementById('notes-textarea')?.focus();
            }, 300);
            
            // Close other panels
            this.closeBookmarksPanel();
        }
    }

    /**
     * Toggle bookmarks panel
     */
    toggleBookmarksPanel() {
        if (!this.bookmarksPanel) return;

        const isActive = this.bookmarksPanel.classList.toggle('active');
        document.querySelector('.bookmark-toggle')?.classList.toggle('active', isActive);

        if (isActive) {
            // Close other panels
            this.closeNotesPanel();
        }
    }

    /**
     * Close notes panel
     */
    closeNotesPanel() {
        this.notesPanel?.classList.remove('active');
        document.querySelector('.notes-toggle')?.classList.remove('active');
    }

    /**
     * Close bookmarks panel
     */
    closeBookmarksPanel() {
        this.bookmarksPanel?.classList.remove('active');
        document.querySelector('.bookmark-toggle')?.classList.remove('active');
    }

    /**
     * Save current note
     */
    saveCurrentNote() {
        const titleInput = document.getElementById('note-title');
        const textareaInput = document.getElementById('notes-textarea');
        
        if (!titleInput || !textareaInput) return;

        const title = titleInput.value.trim() || `메모 ${new Date().toLocaleString()}`;
        const content = textareaInput.value.trim();

        if (!content) {
            this.showToast('메모 내용을 입력해주세요.', 'warning');
            return;
        }

        const note = {
            id: Date.now(),
            title,
            content,
            chapterId: this.navigation.currentChapter,
            slideIndex: this.navigation.currentSlide,
            timestamp: new Date().toISOString(),
            formatted: new Date().toLocaleString()
        };

        this.notes.unshift(note);
        this.saveNotes();
        this.renderNotes();
        
        // Clear inputs
        titleInput.value = '';
        textareaInput.value = '';
        
        this.showToast('메모가 저장되었습니다.', 'success');
    }

    /**
     * Auto-save note (draft)
     */
    autoSaveNote() {
        const textareaInput = document.getElementById('notes-textarea');
        if (!textareaInput) return;

        const content = textareaInput.value.trim();
        if (content) {
            localStorage.setItem('js-tutor-draft-note', content);
        }
    }

    /**
     * Load and render notes
     */
    loadNotes() {
        this.renderNotes();
        
        // Load draft note
        const draftNote = localStorage.getItem('js-tutor-draft-note');
        if (draftNote) {
            const textareaInput = document.getElementById('notes-textarea');
            if (textareaInput && !textareaInput.value) {
                textareaInput.value = draftNote;
            }
        }
    }

    /**
     * Render notes in the panel
     */
    renderNotes() {
        if (!this.savedNotesContainer) return;

        this.savedNotesContainer.innerHTML = '';

        if (this.notes.length === 0) {
            this.savedNotesContainer.innerHTML = '<p class="no-notes">저장된 메모가 없습니다.</p>';
            return;
        }

        this.notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note-item';
            noteElement.innerHTML = `
                <div class="note-item-title">${note.title}</div>
                <div class="note-item-preview">${note.content.substring(0, 100)}${note.content.length > 100 ? '...' : ''}</div>
                <div class="note-item-meta">
                    <span>Chapter ${note.chapterId} - Slide ${note.slideIndex + 1}</span>
                    <span>${note.formatted}</span>
                </div>
            `;

            noteElement.addEventListener('click', () => {
                this.loadNote(note);
            });

            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'note-delete-btn';
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.title = '메모 삭제';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteNote(note.id);
            });
            noteElement.appendChild(deleteBtn);

            this.savedNotesContainer.appendChild(noteElement);
        });
    }

    /**
     * Load note into editor
     */
    loadNote(note) {
        const titleInput = document.getElementById('note-title');
        const textareaInput = document.getElementById('notes-textarea');

        if (titleInput) titleInput.value = note.title;
        if (textareaInput) textareaInput.value = note.content;

        // Navigate to the slide if different
        if (note.chapterId !== this.navigation.currentChapter || 
            note.slideIndex !== this.navigation.currentSlide) {
            if (confirm('이 메모가 작성된 슬라이드로 이동하시겠습니까?')) {
                this.navigation.goToSlide(note.chapterId, note.slideIndex);
            }
        }
    }

    /**
     * Delete note
     */
    deleteNote(noteId) {
        if (confirm('이 메모를 삭제하시겠습니까?')) {
            this.notes = this.notes.filter(note => note.id !== noteId);
            this.saveNotes();
            this.renderNotes();
            this.showToast('메모가 삭제되었습니다.', 'info');
        }
    }

    /**
     * Save notes to localStorage
     */
    saveNotes() {
        localStorage.setItem('js-tutor-notes', JSON.stringify(this.notes));
    }

    /**
     * Add current slide to bookmarks
     */
    addCurrentSlideBookmark() {
        const currentState = this.navigation.getCurrentState();
        const slide = this.parser.getSlide(currentState.chapterId, currentState.slideIndex);
        
        if (!slide) return;

        // Check if already bookmarked
        const existingBookmark = this.bookmarks.find(b => 
            b.chapterId === currentState.chapterId && 
            b.slideIndex === currentState.slideIndex
        );

        if (existingBookmark) {
            this.showToast('이미 북마크된 슬라이드입니다.', 'info');
            return;
        }

        const bookmark = {
            id: Date.now(),
            chapterId: currentState.chapterId,
            slideIndex: currentState.slideIndex,
            title: slide.title,
            chapterTitle: slide.chapterTitle,
            timestamp: new Date().toISOString(),
            formatted: new Date().toLocaleString()
        };

        this.bookmarks.unshift(bookmark);
        this.saveBookmarks();
        this.renderBookmarks();
        
        this.showToast('북마크가 추가되었습니다.', 'success');
    }

    /**
     * Load and render bookmarks
     */
    loadBookmarks() {
        this.renderBookmarks();
    }

    /**
     * Render bookmarks in the panel
     */
    renderBookmarks() {
        if (!this.bookmarksListContainer) return;

        this.bookmarksListContainer.innerHTML = '';

        if (this.bookmarks.length === 0) {
            this.bookmarksListContainer.innerHTML = '<p class="no-bookmarks">저장된 북마크가 없습니다.</p>';
            return;
        }

        this.bookmarks.forEach(bookmark => {
            const bookmarkElement = document.createElement('div');
            bookmarkElement.className = 'bookmark-item';
            bookmarkElement.innerHTML = `
                <div class="bookmark-title">${bookmark.title}</div>
                <div class="bookmark-chapter">${bookmark.chapterTitle} - Chapter ${bookmark.chapterId}</div>
                <div class="bookmark-time">${bookmark.formatted}</div>
            `;

            bookmarkElement.addEventListener('click', () => {
                this.navigation.goToSlide(bookmark.chapterId, bookmark.slideIndex);
                this.closeBookmarksPanel();
            });

            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'bookmark-delete-btn';
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.title = '북마크 삭제';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteBookmark(bookmark.id);
            });
            bookmarkElement.appendChild(deleteBtn);

            this.bookmarksListContainer.appendChild(bookmarkElement);
        });
    }

    /**
     * Delete bookmark
     */
    deleteBookmark(bookmarkId) {
        this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== bookmarkId);
        this.saveBookmarks();
        this.renderBookmarks();
        this.showToast('북마크가 삭제되었습니다.', 'info');
    }

    /**
     * Clear all bookmarks
     */
    clearAllBookmarks() {
        if (confirm('모든 북마크를 삭제하시겠습니까?')) {
            this.bookmarks = [];
            this.saveBookmarks();
            this.renderBookmarks();
            this.showToast('모든 북마크가 삭제되었습니다.', 'info');
        }
    }

    /**
     * Save bookmarks to localStorage
     */
    saveBookmarks() {
        localStorage.setItem('js-tutor-bookmarks', JSON.stringify(this.bookmarks));
    }

    /**
     * Show quiz for current chapter
     */
    showQuiz() {
        const currentChapter = this.navigation.currentChapter;
        const quiz = this.quizzes[currentChapter];

        if (!quiz) {
            this.showToast('이 챕터에는 퀴즈가 없습니다.', 'info');
            return;
        }

        this.renderQuiz(quiz);
        this.quizModal?.classList.add('active');
    }

    /**
     * Render quiz in modal
     */
    renderQuiz(quiz) {
        const quizContent = document.getElementById('quiz-content');
        if (!quizContent) return;

        quizContent.innerHTML = `
            <div class="quiz-header">
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            </div>
            <div class="quiz-questions">
                ${quiz.questions.map((q, index) => this.renderQuizQuestion(q, index)).join('')}
            </div>
            <div class="quiz-footer">
                <button class="btn btn-primary" id="submit-quiz">답안 제출</button>
                <button class="btn btn-secondary" id="reset-quiz">다시 풀기</button>
            </div>
        `;

        // Setup quiz event listeners
        document.getElementById('submit-quiz')?.addEventListener('click', () => {
            this.submitQuiz(quiz);
        });

        document.getElementById('reset-quiz')?.addEventListener('click', () => {
            this.renderQuiz(quiz);
        });
    }

    /**
     * Render individual quiz question
     */
    renderQuizQuestion(question, index) {
        return `
            <div class="quiz-question" data-question="${index}">
                <h4>Q${index + 1}. ${question.question}</h4>
                <div class="quiz-options">
                    ${question.options.map((option, optIndex) => `
                        <label class="quiz-option" data-option="${optIndex}">
                            <input type="radio" name="q${index}" value="${optIndex}">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Submit quiz and show results
     */
    submitQuiz(quiz) {
        const questions = document.querySelectorAll('.quiz-question');
        const results = [];
        let score = 0;

        questions.forEach((questionEl, index) => {
            const selectedOption = questionEl.querySelector('input[type="radio"]:checked');
            const selectedValue = selectedOption ? parseInt(selectedOption.value) : -1;
            const correct = selectedValue === quiz.questions[index].correct;
            
            if (correct) score++;

            results.push({
                question: index,
                selected: selectedValue,
                correct: quiz.questions[index].correct,
                isCorrect: correct
            });

            // Show visual feedback
            const options = questionEl.querySelectorAll('.quiz-option');
            options.forEach((option, optIndex) => {
                const input = option.querySelector('input');
                if (optIndex === quiz.questions[index].correct) {
                    option.classList.add('correct');
                } else if (optIndex === selectedValue && !correct) {
                    option.classList.add('incorrect');
                }
                input.disabled = true;
            });
        });

        // Show results
        const percentage = Math.round((score / quiz.questions.length) * 100);
        const resultDiv = document.createElement('div');
        resultDiv.className = `quiz-result ${percentage >= 70 ? 'correct' : 'incorrect'}`;
        resultDiv.innerHTML = `
            <h4>퀴즈 결과</h4>
            <p>점수: ${score}/${quiz.questions.length} (${percentage}%)</p>
            <p>${percentage >= 70 ? '🎉 훌륭합니다!' : '📚 조금 더 공부해보세요!'}</p>
            ${quiz.questions.map((q, i) => `
                <div class="question-result">
                    <strong>Q${i + 1}:</strong> ${results[i].isCorrect ? '✅' : '❌'}
                    ${!results[i].isCorrect ? `<br><small>정답: ${q.options[q.correct]}</small>` : ''}
                </div>
            `).join('')}
        `;

        document.querySelector('.quiz-footer')?.appendChild(resultDiv);
        document.getElementById('submit-quiz').style.display = 'none';
    }

    /**
     * Close quiz modal
     */
    closeQuiz() {
        this.quizModal?.classList.remove('active');
    }

    /**
     * Try current example
     */
    tryCurrentExample() {
        const currentState = this.navigation.getCurrentState();
        const slide = this.parser.getSlide(currentState.chapterId, currentState.slideIndex);
        
        if (!slide || !slide.codeBlocks || slide.codeBlocks.length === 0) {
            this.showToast('이 슬라이드에는 실행 가능한 코드가 없습니다.', 'info');
            return;
        }

        // Find the first executable code block
        const executableCode = slide.codeBlocks.find(block => block.executable);
        if (!executableCode) {
            this.showToast('이 슬라이드에는 실행 가능한 JavaScript 코드가 없습니다.', 'info');
            return;
        }

        // Open live coding panel and load code
        if (window.liveCodeRunner) {
            window.liveCodeRunner.toggleLivePanel();
            setTimeout(() => {
                window.liveCodeRunner.loadExample(executableCode.code);
            }, 300);
        }
    }

    /**
     * Load quiz data
     */
    loadQuizzes() {
        return {
            1: {
                title: "JavaScript 기초 퀴즈",
                description: "JavaScript의 기본 개념을 확인해보세요.",
                questions: [
                    {
                        question: "JavaScript에서 변수를 선언하는 키워드가 아닌 것은?",
                        options: ["let", "const", "var", "define"],
                        correct: 3
                    },
                    {
                        question: "JavaScript는 어떤 언어인가요?",
                        options: ["컴파일 언어", "인터프리터 언어", "어셈블리 언어", "기계어"],
                        correct: 1
                    }
                ]
            },
            3: {
                title: "변수와 타입 퀴즈",
                description: "변수 선언과 데이터 타입에 대한 이해를 확인해보세요.",
                questions: [
                    {
                        question: "const로 선언한 변수의 특징은?",
                        options: ["재할당 가능", "재할당 불가능", "블록 스코프 없음", "호이스팅 없음"],
                        correct: 1
                    },
                    {
                        question: "typeof null의 결과는?",
                        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
                        correct: 2
                    }
                ]
            },
            6: {
                title: "Boolean과 논리 연산 퀴즈",
                description: "Boolean 타입과 논리 연산에 대한 이해를 확인해보세요.",
                questions: [
                    {
                        question: "다음 중 falsy 값이 아닌 것은?",
                        options: ["0", "''", "[]", "null"],
                        correct: 2
                    },
                    {
                        question: "true && false의 결과는?",
                        options: ["true", "false", "undefined", "error"],
                        correct: 1
                    }
                ]
            },
            8: {
                title: "함수 퀴즈",
                description: "함수의 기본 개념과 스코프에 대한 이해를 확인해보세요.",
                questions: [
                    {
                        question: "함수 내부에서 정의된 변수는?",
                        options: ["전역에서 접근 가능", "함수 내부에서만 접근 가능", "항상 undefined", "에러 발생"],
                        correct: 1
                    },
                    {
                        question: "JavaScript에서 함수는?",
                        options: ["값이 아니다", "값이다", "객체가 아니다", "호출할 수 없다"],
                        correct: 1
                    }
                ]
            }
        };
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Hide toast
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    /**
     * Export tutor data
     */
    exportData() {
        return {
            notes: this.notes,
            bookmarks: this.bookmarks,
            exportedAt: new Date().toISOString()
        };
    }

    /**
     * Import tutor data
     */
    importData(data) {
        if (data.notes) {
            this.notes = data.notes;
            this.saveNotes();
            this.renderNotes();
        }
        
        if (data.bookmarks) {
            this.bookmarks = data.bookmarks;
            this.saveBookmarks();
            this.renderBookmarks();
        }
        
        this.showToast('데이터가 성공적으로 가져와졌습니다.', 'success');
    }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TutorFeatures;
} else {
    window.TutorFeatures = TutorFeatures;
}