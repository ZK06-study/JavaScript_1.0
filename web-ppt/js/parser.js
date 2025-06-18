/**
 * Markdown Parser and Content Manager
 * Handles parsing of markdown files and conversion to slide data
 */

class MarkdownParser {
    constructor() {
        this.chapters = [];
        this.currentSlideIndex = 0;
        this.baseUrl = '../docs/';
        
        // Chapter metadata
        this.chapterMetadata = [
            { id: 1, file: '01-tutorial.md', title: '튜토리얼', icon: '📚' },
            { id: 2, file: '02-javascript-intro.md', title: 'JavaScript 소개', icon: '🌟' },
            { id: 3, file: '03-value-variable-type.md', title: '값, 변수, 타입', icon: '🔢' },
            { id: 4, file: '04-number-type.md', title: 'Number 타입', icon: '🔢' },
            { id: 5, file: '05-string-type.md', title: 'String 타입', icon: '📝' },
            { id: 6, file: '06-boolean-type.md', title: 'Boolean 타입', icon: '✅' },
            { id: 7, file: '07-null-undefined.md', title: 'null과 undefined', icon: '❓' },
            { id: 8, file: '08-function.md', title: '함수', icon: '⚡' },
            { id: 9, file: '09-control-statement.md', title: '제어 구문', icon: '🔄' },
            { id: 10, file: '10-object.md', title: '객체', icon: '📦' },
            { id: 11, file: '11-array.md', title: '배열', icon: '📋' },
            { id: 12, file: '12-value-in-depth.md', title: '값 심화', icon: '🔍' },
            { id: 13, file: '13-function-in-depth.md', title: '함수 심화', icon: '⚡' },
            { id: 14, file: '14-object-in-depth.md', title: '객체 심화', icon: '📦' },
            { id: 15, file: '15-operator-in-depth.md', title: '연산자 심화', icon: '➕' },
            { id: 16, file: '16-builtins.md', title: '내장 객체', icon: '🏗️' },
            { id: 17, file: '17-fp.md', title: '함수형 프로그래밍', icon: '🔧' },
            { id: 18, file: '18-iteration.md', title: '반복', icon: '🔄' },
            { id: 19, file: '19-class.md', title: '클래스', icon: '🏛️' },
            { id: 20, file: '20-data-structures.md', title: '자료구조', icon: '🏗️' },
            { id: 21, file: '21-async.md', title: '비동기 프로그래밍', icon: '⏳' },
            { id: 22, file: '22-exception.md', title: '예외 처리', icon: '⚠️' },
            { id: 23, file: '23-module.md', title: '모듈', icon: '📦' },
            { id: 24, file: '24-misc.md', title: '기타', icon: '🔧' }
        ];
    }

    /**
     * Initialize the parser and load all chapters
     */
    async init() {
        try {
            await this.loadAllChapters();
            this.setupEventListeners();
            return true;
        } catch (error) {
            console.error('Failed to initialize parser:', error);
            return false;
        }
    }

    /**
     * Load all chapter files and parse them
     */
    async loadAllChapters() {
        const loadPromises = this.chapterMetadata.map(async (meta) => {
            try {
                const content = await this.loadMarkdownFile(meta.file);
                const slides = this.parseMarkdownToSlides(content, meta);
                return {
                    ...meta,
                    content,
                    slides,
                    loaded: true
                };
            } catch (error) {
                console.error(`Failed to load chapter ${meta.id}:`, error);
                return {
                    ...meta,
                    content: `# ${meta.title}\n\n챕터를 불러올 수 없습니다.`,
                    slides: [{
                        title: meta.title,
                        content: '<p>챕터를 불러올 수 없습니다.</p>',
                        type: 'error'
                    }],
                    loaded: false
                };
            }
        });

        this.chapters = await Promise.all(loadPromises);
    }

    /**
     * Load a markdown file from the docs directory
     */
    async loadMarkdownFile(filename) {
        try {
            const response = await fetch(`${this.baseUrl}${filename}`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return await response.text();
        } catch (error) {
            // Fallback for local development
            console.warn(`Failed to fetch ${filename}, using fallback content`);
            return await this.getFallbackContent(filename);
        }
    }

    /**
     * Get fallback content when file loading fails
     */
    async getFallbackContent(filename) {
        const chapterNum = filename.split('-')[0];
        const meta = this.chapterMetadata.find(m => m.file === filename);
        
        return `# ${meta?.title || 'Chapter ' + chapterNum}

이 챕터의 내용을 불러올 수 없습니다.

## 내용 요청

브라우저에서 직접 파일을 읽을 때는 보안상의 이유로 제한이 있을 수 있습니다.

### 해결 방법

1. 웹 서버를 통해 파일을 제공하세요
2. 또는 슬라이드 데이터를 JSON 형태로 미리 생성하세요

\`\`\`javascript
// 예시 코드
console.log("JavaScript 학습을 계속하세요!");
\`\`\`
`;
    }

    /**
     * Parse markdown content into slides
     */
    parseMarkdownToSlides(markdown, metadata) {
        // Split by major headings (# or ##)
        const sections = this.splitIntoSections(markdown);
        const slides = [];

        sections.forEach((section, index) => {
            const slide = this.createSlideFromSection(section, index, metadata);
            if (slide) {
                slides.push(slide);
            }
        });

        return slides.length > 0 ? slides : [{
            title: metadata.title,
            content: this.parseMarkdownToHTML(markdown),
            type: 'content',
            chapterId: metadata.id,
            slideIndex: 0
        }];
    }

    /**
     * Split markdown into sections based on headings
     */
    splitIntoSections(markdown) {
        const lines = markdown.split('\n');
        const sections = [];
        let currentSection = [];
        
        lines.forEach(line => {
            if (line.match(/^#{1,2}\s+/) && currentSection.length > 0) {
                sections.push(currentSection.join('\n'));
                currentSection = [line];
            } else {
                currentSection.push(line);
            }
        });
        
        if (currentSection.length > 0) {
            sections.push(currentSection.join('\n'));
        }
        
        return sections;
    }

    /**
     * Create a slide object from a markdown section
     */
    createSlideFromSection(section, index, metadata) {
        const lines = section.trim().split('\n');
        if (lines.length === 0) return null;

        const firstLine = lines[0];
        let title = metadata.title;
        let content = section;

        // Extract title from heading
        const headingMatch = firstLine.match(/^#{1,6}\s+(.+)$/);
        if (headingMatch) {
            title = headingMatch[1];
            // Remove the heading from content for cleaner slides
            content = lines.slice(1).join('\n').trim();
        }

        return {
            title: title,
            content: this.parseMarkdownToHTML(content),
            type: this.detectSlideType(content),
            chapterId: metadata.id,
            slideIndex: index,
            codeBlocks: this.extractCodeBlocks(content)
        };
    }

    /**
     * Detect the type of slide based on content
     */
    detectSlideType(content) {
        if (content.includes('```')) return 'code';
        if (content.includes('> ')) return 'quote';
        if (content.match(/^\s*[-*+]\s/m)) return 'list';
        if (content.match(/^\s*\d+\.\s/m)) return 'numbered-list';
        return 'content';
    }

    /**
     * Extract code blocks from markdown content
     */
    extractCodeBlocks(content) {
        const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
        const codeBlocks = [];
        let match;

        while ((match = codeBlockRegex.exec(content)) !== null) {
            codeBlocks.push({
                language: match[1] || 'javascript',
                code: match[2].trim(),
                executable: !match[1] || match[1] === 'js' || match[1] === 'javascript'
            });
        }

        return codeBlocks;
    }

    /**
     * Parse markdown to HTML using marked.js
     */
    parseMarkdownToHTML(markdown) {
        if (typeof marked === 'undefined') {
            // Fallback if marked.js is not available
            return this.simpleMarkdownParse(markdown);
        }

        // Configure marked options
        marked.setOptions({
            highlight: (code, lang) => {
                if (typeof Prism !== 'undefined' && lang && Prism.languages[lang]) {
                    return Prism.highlight(code, Prism.languages[lang], lang);
                }
                return code;
            },
            gfm: true,
            breaks: true
        });

        return marked.parse(markdown);
    }

    /**
     * Simple markdown parser fallback
     */
    simpleMarkdownParse(markdown) {
        return markdown
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/`([^`]+)`/gim, '<code>$1</code>')
            .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>')
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(.+)$/gim, '<p>$1</p>');
    }

    /**
     * Get chapter by ID
     */
    getChapter(chapterId) {
        return this.chapters.find(chapter => chapter.id === chapterId);
    }

    /**
     * Get slide by chapter and slide index
     */
    getSlide(chapterId, slideIndex = 0) {
        const chapter = this.getChapter(chapterId);
        if (!chapter || !chapter.slides) return null;
        
        const slide = chapter.slides[slideIndex];
        if (!slide) return null;

        return {
            ...slide,
            chapterTitle: chapter.title,
            chapterIcon: chapter.icon,
            totalSlides: chapter.slides.length,
            chapterProgress: ((slideIndex + 1) / chapter.slides.length) * 100
        };
    }

    /**
     * Get all chapters metadata for navigation
     */
    getChaptersMetadata() {
        return this.chapters.map(chapter => ({
            id: chapter.id,
            title: chapter.title,
            icon: chapter.icon,
            loaded: chapter.loaded,
            slideCount: chapter.slides ? chapter.slides.length : 0
        }));
    }

    /**
     * Get next slide
     */
    getNextSlide(currentChapter, currentSlide) {
        const chapter = this.getChapter(currentChapter);
        if (!chapter) return null;

        // Check if there's a next slide in current chapter
        if (currentSlide + 1 < chapter.slides.length) {
            return {
                chapterId: currentChapter,
                slideIndex: currentSlide + 1
            };
        }

        // Move to next chapter
        const nextChapter = this.chapters.find(c => c.id === currentChapter + 1);
        if (nextChapter) {
            return {
                chapterId: nextChapter.id,
                slideIndex: 0
            };
        }

        return null; // Last slide
    }

    /**
     * Get previous slide
     */
    getPreviousSlide(currentChapter, currentSlide) {
        // Check if there's a previous slide in current chapter
        if (currentSlide > 0) {
            return {
                chapterId: currentChapter,
                slideIndex: currentSlide - 1
            };
        }

        // Move to previous chapter's last slide
        const prevChapter = this.chapters.find(c => c.id === currentChapter - 1);
        if (prevChapter && prevChapter.slides) {
            return {
                chapterId: prevChapter.id,
                slideIndex: prevChapter.slides.length - 1
            };
        }

        return null; // First slide
    }

    /**
     * Search through all content
     */
    search(query) {
        const results = [];
        const lowercaseQuery = query.toLowerCase();

        this.chapters.forEach(chapter => {
            if (!chapter.slides) return;

            chapter.slides.forEach((slide, slideIndex) => {
                const titleMatch = slide.title.toLowerCase().includes(lowercaseQuery);
                const contentMatch = slide.content.toLowerCase().includes(lowercaseQuery);
                
                if (titleMatch || contentMatch) {
                    results.push({
                        chapterId: chapter.id,
                        slideIndex: slideIndex,
                        chapterTitle: chapter.title,
                        slideTitle: slide.title,
                        relevance: titleMatch ? 1 : 0.5 // Title matches are more relevant
                    });
                }
            });
        });

        return results.sort((a, b) => b.relevance - a.relevance);
    }

    /**
     * Get learning progress
     */
    getProgress() {
        const totalSlides = this.chapters.reduce((total, chapter) => {
            return total + (chapter.slides ? chapter.slides.length : 0);
        }, 0);

        return {
            totalChapters: this.chapters.length,
            totalSlides: totalSlides,
            loadedChapters: this.chapters.filter(c => c.loaded).length
        };
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Add any global event listeners for the parser
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F' && e.ctrlKey) {
                e.preventDefault();
                this.showSearchDialog();
            }
        });
    }

    /**
     * Show search dialog
     */
    showSearchDialog() {
        // This would be implemented in conjunction with the navigation system
        console.log('Search dialog triggered');
    }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarkdownParser;
} else {
    window.MarkdownParser = MarkdownParser;
}