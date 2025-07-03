통합 프론트엔드 디자인 가이드라인: 인터랙티브 웹 프레젠테이션

핵심 원칙

단일 html 코드로 작성하기

가독성 (Readability): 코드와 콘텐츠를 명확하고 쉽게 이해할 수 있도록 작성합니다.

예측 가능성 (Predictability): 코드의 이름, 파라미터, 컨텍스트만으로 그 동작을 예측할 수 있도록 합니다.

응집도 (Cohesion): 관련된 코드를 함께 배치하고, 모듈이 명확한 단일 목적을 갖도록 설계합니다.

결합도 (Coupling): 코드베이스의 여러 부분 간의 의존성을 최소화하여 유지보수성을 높입니다.

개념 설명 부분에서 꼭 코드 사용 예시 혹은 예제 내용도 포함하기

1. 가독성 (Readability)

코드와 콘텐츠의 명확성을 높여 학습자가 내용에 쉽게 집중하고, 개발자가 코드를 쉽게 이해하도록 합니다.



Rule: 콘텐츠, 스타일, 로직의 명확한 분리

Reasoning:



관심사를 분리하여 각 파일의 역할을 명확히 합니다. (index.html은 구조, styles.css는 디자인, script.js는 동작)

코드의 인지 부하를 줄이고, 특정 부분을 수정해야 할 때 탐색 시간을 단축시켜 유지보수성을 크게 향상시킵니다.

Recommended Pattern:

index.html (구조와 콘텐츠만 포함)



<!DOCTYPE html>

<html lang="ko">

<head>

    <!-- ... meta tags ... -->

    <title>Interactive Presentation</title>

    <!-- CSS와 외부 라이브러리 연결 -->

    <link rel="stylesheet" href="styles.css">

    <link rel="stylesheet" href="<https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css>">

</head>

<body>

    <div id="presentation-container">

        <section class="slide" data-slide-id="0">

            <h1>프레젠테이션 제목</h1>

        </section>

        <section class="slide" data-slide-id="1">

            <h2>학습 목표</h2>

            <!-- ... content ... -->

        </section>

        <!-- ... more slides ... -->

    </div>

    <!-- 스크립트는 body 끝에서 연결 -->

    <script src="script.js"></script>

</body>

</html>

styles.css와 script.js는 각각의 파일에 모든 관련 코드를 포함합니다.



Rule: 매직 넘버 대신 이름 있는 상수를 사용

Reasoning:



설명 없는 값(매직 넘버/컬러)에 의미를 부여하여 명확성을 높입니다.

디자인 시스템(색상, 폰트 크기, 간격 등)을 CSS 변수로 정의하면 일관성 유지와 전체 테마 변경이 용이합니다.

Recommended Pattern (styles.css):

:root {

    /* Color Palette (Dark Mode) */

    --bg-dark: #121212;

    --bg-card: #1E1E1E;

    --text-primary: #E0E0E0;

    --text-secondary: #B0B0B0;

    --accent-blue: #2979FF;

    --border-color: #333333;



    /* Typography */

    --font-main: 'Pretendard', sans-serif;

    --font-code: 'JetBrains Mono', monospace;



    /* Transitions */

    --transition-speed: 300ms;

}



body {

    background-color: var(--bg-dark);

    color: var(--text-primary);

    font-family: var(--font-main);

}



.card {

    background-color: var(--bg-card);

    transition: transform var(--transition-speed) ease;

}

Rule: 가독성 높은 타이포그래피 시스템 구축

Reasoning:



콘텐츠의 위계질서를 명확히 하여 학습자의 정보 습득을 돕습니다.

본문과 코드의 글꼴을 구분하면, 기술적인 내용을 다룰 때 가독성이 크게 향상됩니다.

Recommended Pattern (styles.css):

/* 본문 텍스트 */

body, h1, h2, h3, p, li {

    font-family: var(--font-main);

}



/* 코드 블록 및 인라인 코드 */

pre, code {

    font-family: var(--font-code);

    background-color: #282c34; /* 코드 블록 배경색 */

    padding: 0.2em 0.4em;

    border-radius: 4px;

}

Rule: 아이콘을 통한 의미 명료화

Reasoning:



텍스트만으로는 전달하기 어려운 뉘앙스나 핵심 포인트를 시각적 아이콘으로 강조하여 직관적인 이해를 돕습니다.

시선이 자연스럽게 중요한 요소로 유도되어 학습 효율을 높입니다.

Recommended Pattern (index.html):

<!-- 슬라이드 제목에 아이콘 사용 -->

<h2><i class="fas fa-bullseye"></i> 학습 목표</h2>



<ul>

    <!-- 핵심 항목에 아이콘 사용 -->

    <li><i class="fa-solid fa-lightbulb"></i> 핵심 개념 A 이해하기</li>

    <li><i class="fa-solid fa-gears"></i> 작동 원리 B 시각화하기</li>

</ul>

2. 예측 가능성 (Predictability)

코드와 콘텐츠의 동작 및 흐름을 사용자와 개발자 모두 쉽게 예측할 수 있도록 합니다.



Rule: 프레젠테이션 상태와 동작을 클래스로 캡슐화

Reasoning:



프레젠테이션의 모든 상태(현재 슬라이드 번호 등)와 행위(next, prev, cleanup)를 하나의 PresentationController 클래스에 캡슐화하여 코드의 동작을 예측 가능하게 만듭니다.

슬라이드를 벗어날 때 실행 중인 애니메이션(setTimeout 등)을 cleanup 메소드에서 명확히 제거함으로써, 한 슬라이드의 동작이 다른 슬라이드에 영향을 미치는 예측 불가능한 부작용을 원천 차단합니다.

Recommended Pattern (script.js):

class PresentationController {

    constructor(selector) {

        this.container = document.querySelector(selector);

        this.slides = Array.from(this.container.children);

        this.currentSlideIndex = 0;

        this.activeTimers = []; // 실행 중인 타이머 관리



        this.init();

    }



    init() {

        this.updateSlideVisibility();

        // 키보드 이벤트 리스너 등 초기 설정

    }



    goTo(index) {

        if (index < 0 || index >= this.slides.length) return;



        this.clearAnimations(); // 이전 슬라이드 애니메이션 정리

        this.currentSlideIndex = index;

        this.updateSlideVisibility();

        this.runSlideAnimations(this.currentSlideIndex); // 새 슬라이드 애니메이션 실행

    }



    next() { this.goTo(this.currentSlideIndex + 1); }

    prev() { this.goTo(this.currentSlideIndex - 1); }



    updateSlideVisibility() {

        this.slides.forEach((slide, index) => {

            slide.classList.toggle('active', index === this.currentSlideIndex);

        });

    }



    // 모든 타이머(setTimeout, setInterval)를 정리

    clearAnimations() {

        this.activeTimers.forEach(timerId => clearTimeout(timerId));

        this.activeTimers = [];

        // 동적으로 생성된 SVG/DOM 요소 제거 로직 추가

    }



    // 현재 슬라이드에 필요한 애니메이션 실행

    runSlideAnimations(index) {

        const slideId = this.slides[index].dataset.slideId;

        if (slideId === 'convolution-demo') {

            this.createConvolutionAnimation();

        }

    }



    // 예시: 합성곱 애니메이션 생성

    createConvolutionAnimation() {

        // ... 동적 SVG/DOM 생성 로직 ...

        const timer = setTimeout(() => { /* ... */ }, 500);

        this.activeTimers.push(timer); // 타이머 ID 저장

    }

}



document.addEventListener('DOMContentLoaded', () => {

    new PresentationController('#presentation-container');

});

Rule: 교육학적 흐름에 기반한 콘텐츠 구성

Reasoning:



'문제 제기 → 해결책 제시 → 심층 분석 → 정리'와 같은 논리적이고 예측 가능한 구조는 학습자가 다음에 나올 내용을 기대하게 만들어 학습 몰입도를 높입니다.

예측 가능한 흐름은 학습자가 지식을 체계적으로 쌓아나가는 데 도움을 줍니다. 필요하다면 슬라이드를 추가/삭제/재배치하여 흐름을 강화합니다.

Recommended Pattern (슬라이드 순서 기획):

Slide 1: 문제 제기 - "기존의 심층 신경망은 왜 깊어질수록 성능이 저하될까요?"

Slide 2: 해결책 제시 - "ResNet은 '스킵 연결(Skip Connection)'로 이 문제를 해결합니다."

Slide 3: 개념 시각화 (Before) - 스킵 연결이 없을 때의 정보 흐름 (흐릿해지는 효과).

Slide 4: 개념 시각화 (After) - 스킵 연결이 있을 때의 정보 흐름 (선명한 데이터가 전달되는 SVG 애니메이션). (Before & After 비교 슬라이드 추가)

Slide 5: 심층 분석 - 스킵 연결의 수학적 원리 및 코드 예시.

Slide 6: 정리 및 확인 - 핵심 내용 요약 및 퀴즈.

3. 응집도 (Cohesion)

관련된 코드와 리소스를 함께 묶어 관리의 효율성을 높이고, 각 모듈이 하나의 명확한 책임을 갖도록 합니다.



Rule: UI 요소를 재사용 가능한 컴포넌트 단위로 설계

Reasoning:



관련된 HTML 구조와 CSS 스타일을 하나의 '컴포넌트' 개념(예: .card, .progress-bar)으로 묶어 응집도를 높입니다.

일관된 디자인을 적용하기 쉽고, 컴포넌트 단위의 수정이 전체 시스템에 쉽게 반영됩니다.

Recommended Pattern (styles.css):

/* Card Component: 관련된 스타일을 한 곳에 모음 */

.card {

    background-color: var(--bg-card);

    border: 1px solid var(--border-color);

    border-radius: 12px;

    padding: 24px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;

}



.card:hover {

    transform: translateY(-4px);

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

}



/* Progress Bar Component */

.progress-bar {

    position: fixed;

    top: 0;

    left: 0;

    height: 4px;

    background-color: var(--accent-blue);

    width: 0%; /* JS로 제어 */

    transition: width var(--transition-speed) ease-out;

}

Rule: 개념 시각화 로직의 높은 응집도 유지

Reasoning:



복잡한 시각화 애니메이션(예: 합성곱)을 구현할 때, 관련된 DOM/SVG 생성, 스타일링, 애니메이션 제어 로직을 script.js 내의 특정 함수(예: createConvolutionAnimation) 안에 모두 모아 응집도를 극대화합니다.

HTML에는 단순히 시각화가 표시될 빈 컨테이너(<div>)만 남겨두어, 구조와 동작을 분리하고 애니메이션 로직을 한 곳에서 관리할 수 있게 합니다.

Recommended Pattern:

index.html (단순한 플레이스홀더)



<section class="slide" data-slide-id="convolution-demo">

    <h2>합성곱(Convolution) 동작 원리</h2>

    <div id="convolution-visualizer"></div> <!-- 애니메이션이 그려질 영역 -->

</section>

script.js (응집된 애니메이션 로직)



// PresentationController 클래스 내부에 포함될 수 있음

createConvolutionAnimation() {

    const visualizer = document.getElementById('convolution-visualizer');

    visualizer.innerHTML = ''; // 이전 내용 초기화



    // 입력 그리드, 필터, 출력 그리드 등 모든 요소를 JS로 생성

    const inputGrid = this.createGrid('input');

    const filter = this.createFilter();

    const outputGrid = this.createGrid('output');



    visualizer.append(inputGrid, filter, outputGrid);



    // 필터 이동 및 계산 과정을 순차적으로 보여주는 애니메이션 로직

    // 모든 로직이 이 함수 내에서 완결됨

    let step = 0;

    const animateStep = () => {

        if (step > 8) return;

        // ... 필터 위치 업데이트, 출력 값 계산 및 표시 ...

        const timer = setTimeout(animateStep, 1000);

        this.activeTimers.push(timer); // 타이머 관리

        step++;

    };

    animateStep();

}

4. 결합도 (Coupling)

코드의 각 부분이 서로에게 미치는 영향을 최소화하여, 한 부분의 변경이 다른 부분에 예기치 않은 문제를 일으키지 않도록 합니다.



Rule: CSS 전환을 활용한 상태와 표현의 분리

Reasoning:



JavaScript는 '상태'(예: .is-active 클래스 추가/제거)만 제어하고, 실제 시각적 변화(애니메이션)는 CSS(transition, transform, opacity)가 담당하도록 역할을 분리합니다.

이를 통해 JavaScript 로직과 CSS 스타일링 간의 결합도를 낮추고, 애니메이션의 성능과 유지보수성을 향상시킵니다.

Recommended Pattern:

styles.css (표현 정의)



.slide {

    position: absolute;

    width: 100%;

    height: 100%;

    opacity: 0;

    transform: translateY(20px);

    transition: opacity var(--transition-speed) ease-in-out,

                transform var(--transition-speed) ease-in-out;

    pointer-events: none; /* 비활성 슬라이드는 클릭 방지 */

}



.slide.active {

    opacity: 1;

    transform: translateY(0);

    pointer-events: auto; /* 활성 슬라이드는 상호작용 가능 */

}

script.js (상태 제어)



// PresentationController.updateSlideVisibility() 메소드 내부

updateSlideVisibility() {

    this.slides.forEach((slide, index) => {

        // JS는 클래스를 토글하는 책임만 짐

        slide.classList.toggle('active', index === this.currentSlideIndex);

    });

}

Rule: 동적 콘텐츠 생성을 통한 HTML과 로직의 결합도 최소화

Reasoning:



복잡한 애니메이션(예: ResNet의 스킵 연결 경로)의 SVG 코드를 HTML에 하드코딩하지 않고, JavaScript로 동적으로 생성하여 주입합니다.

이를 통해 index.html은 콘텐츠의 의미적 구조에만 집중할 수 있게 되며, 복잡한 시각적 표현 로직으로부터 완전히 분리(decoupled)됩니다. HTML 파일은 간결해지고, 애니메이션 로직은 script.js에서 독립적으로 수정 및 관리가 가능해집니다.

Recommended Pattern:

index.html (최소한의 구조)



<section class="slide" data-slide-id="resnet-demo">

    <h2>ResNet의 스킵 연결</h2>

    <div id="resnet-visualizer-container">

        <!-- SVG 경로는 JS가 동적으로 생성 -->

    </div>

</section>

script.js (동적 SVG 생성 로직)



createResNetAnimation() {

    const container = document.getElementById('resnet-visualizer-container');

    container.innerHTML = '';



    const svgNS = "<http://www.w3.org/2000/svg>";

    const svg = document.createElementNS(svgNS, "svg");

    svg.setAttribute("viewBox", "0 0 400 200");



    // 기본 경로

    const mainPath = document.createElementNS(svgNS, "path");

    mainPath.setAttribute("d", "M 50 100 H 350");

    mainPath.setAttribute("class", "path-main");



    // 스킵 연결 경로 (곡선)

    const skipPath = document.createElementNS(svgNS, "path");

    skipPath.setAttribute("d", "M 50 100 Q 200 20, 350 100");

    skipPath.setAttribute("class", "path-skip");



    // stroke-dashoffset 애니메이션을 위해 속성 설정

    const length = skipPath.getTotalLength();

    skipPath.style.strokeDasharray = length;

    skipPath.style.strokeDashoffset = length;



    svg.append(mainPath, skipPath);

    container.append(svg);



    // 슬라이드 활성화 시 애니메이션 실행

    setTimeout(() => {

        skipPath.style.transition = 'stroke-dashoffset 2s ease-in-out';

        skipPath.style.strokeDashoffset = '0';

    }, 500);

} 