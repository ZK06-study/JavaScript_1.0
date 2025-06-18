document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize
    const slides = Array.from(document.querySelectorAll('.slide'));
    const toc = document.getElementById('toc');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressIndicator = document.getElementById('progress-indicator');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    let currentSlideIndex = 0;

    // 2. Build Table of Contents
    slides.forEach((slide, index) => {
        const title = slide.querySelector('h1')?.textContent || `슬라이드 ${index + 1}`;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${slide.id}`;
        a.textContent = title;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(index);
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
        li.appendChild(a);
        toc.appendChild(li);
    });
    
    const tocLinks = Array.from(toc.querySelectorAll('a'));

    // 3. Core function to show a slide
    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;

        // Hide current slide
        const currentSlide = slides[currentSlideIndex];
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }
        tocLinks[currentSlideIndex]?.classList.remove('active');

        // Show new slide
        currentSlideIndex = index;
        const newSlide = slides[currentSlideIndex];
        newSlide.classList.add('active');
        tocLinks[currentSlideIndex]?.classList.add('active');

        // Update URL hash
        window.location.hash = newSlide.id;

        updateControls();
        updateProgressBar();
    }

    // 4. Update UI elements
    function updateControls() {
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === slides.length - 1;
    }

    function updateProgressBar() {
        const progress = ((currentSlideIndex + 1) / slides.length) * 100;
        progressIndicator.style.width = `${progress}%`;
    }

    // 5. Event Listeners
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlideIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlideIndex - 1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            showSlide(currentSlideIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            showSlide(currentSlideIndex - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            showSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            showSlide(slides.length - 1);
        }
    });
    
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        const index = slides.findIndex(slide => slide.id === hash);
        if (index !== -1 && index !== currentSlideIndex) {
            showSlide(index);
        }
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar if clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // 6. Initial Load
    function initialize() {
        const hash = window.location.hash.substring(1);
        const initialIndex = slides.findIndex(slide => slide.id === hash);
        showSlide(initialIndex !== -1 ? initialIndex : 0);
        hljs.highlightAll();
        
        // 키보드 단축키 안내 추가
        addKeyboardShortcutGuide();
    }

    function addKeyboardShortcutGuide() {
        const shortcutGuide = document.createElement('div');
        shortcutGuide.style.marginTop = '2rem';
        shortcutGuide.style.padding = '1rem';
        shortcutGuide.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
        shortcutGuide.style.borderRadius = '8px';
        shortcutGuide.style.fontSize = '0.85rem';
        shortcutGuide.innerHTML = `
            <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">키보드 단축키</h4>
            <div style="line-height: 1.4;">
                <div>← → : 슬라이드 이동</div>
                <div>Space : 다음 슬라이드</div>
                <div>Home : 첫 슬라이드</div>
                <div>End : 마지막 슬라이드</div>
            </div>
        `;
        sidebar.appendChild(shortcutGuide);
    }

    initialize();
}); 