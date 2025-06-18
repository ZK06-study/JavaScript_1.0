# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a JavaScript educational documentation repository written in Korean. It contains comprehensive tutorial materials covering JavaScript fundamentals from basic concepts to advanced topics, delivered through multiple formats including interactive presentations, detailed documentation, quizzes, and study materials.

## Architecture

### Core Components

1. **Interactive Presentation (`docs/`)** - Main learning interface
   - `index.html` - 25-slide presentation covering basic to advanced JavaScript
   - `script.js` - Navigation logic, slide management, keyboard/touch controls
   - `styles.css` - Dark theme responsive design with syntax highlighting

2. **Documentation (`document/`)** - Detailed learning materials
   - 24 numbered markdown files (01-tutorial.md through 24-misc.md)
   - `javascript-guide.md` - Comprehensive guide combining all topics
   - Progressive curriculum from basics to advanced concepts

3. **Assessment (`quiz/`)** - Interactive learning verification
   - Quizzes for topics 01-11 covering fundamental concepts
   - Multiple choice and code-based questions

4. **Study Materials (`study_paper/`)** - Condensed reference materials
   - Summary documents corresponding to main chapters
   - Quick reference and review materials

### Technology Stack

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (ES2015+)
- **External Dependencies**: highlight.js for syntax highlighting
- **Fonts**: Noto Sans KR (Korean), Fira Code (monospace)
- **Language**: Korean (all content and UI)

## Common Development Tasks

### Running the Interactive Presentation

```bash
# Using Python 3
cd docs
python -m http.server 8000

# Using Node.js
npx serve docs

# Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Adding New Slides to Presentation

1. Add HTML section in `docs/index.html`:
```html
<section class="slide" id="new-topic">
    <div class="slide-content">
        <h1>새로운 주제</h1>
        <!-- Content here -->
    </div>
</section>
```

2. Update table of contents generation in `docs/script.js`
3. Test keyboard navigation (←/→ arrows, space, home/end)
4. Verify mobile touch navigation

### Documentation Standards

Follow the established Korean documentation style:
- Use consistent technical terminology (변수/Variable, 함수/Function, 객체/Object)
- Include executable code examples with comments
- Structure: 학습 목표 → 설명 → 예제 → 핵심 정리
- Difficulty levels: 🟢 기초, 🟡 중급, 🟠 고급
- Use proper emoji conventions for sections (📋 목차, 🎯 목표, 💡 정리)

### Code Style Guidelines

From `.cursor/rules/`:

**JavaScript Code:**
- Use modern ES2015+ syntax
- Include Korean comments explaining concepts
- Provide executable examples with expected output
- Follow functional programming patterns where appropriate

**HTML/CSS:**
- Semantic HTML5 structure
- CSS custom properties for theming
- Mobile-first responsive design
- Dark theme as default

### File Organization

- **`document/`**: Detailed chapter-by-chapter learning materials
- **`docs/`**: Interactive web presentation (main learning interface)  
- **`quiz/`**: Assessment materials for knowledge verification
- **`study_paper/`**: Condensed reference and review materials
- **`.cursor/rules/`**: Development guidelines and project standards

### Browser Compatibility

Target modern browsers supporting:
- ES2015+ JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties
- Touch events for mobile navigation

### Content Guidelines

- All documentation is written in Korean
- Examples use modern JavaScript (ES2015+) syntax
- Code examples include both basic and practical use cases
- Each chapter builds upon previous concepts
- Tutorial format with progressive difficulty
- Interactive presentation serves as primary learning interface
- Documentation provides detailed reference material