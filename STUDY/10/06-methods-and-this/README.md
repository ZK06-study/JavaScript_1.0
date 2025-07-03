# 6번 슬라이드: 메소드와 this 키워드 - 완전 정복

## 📁 폴더 구성

```
06-methods-and-this/
├── README.md              # 📖 이 파일 (학습 가이드)
├── 01-개념설명.md          # 🎓 기본 개념과 이론
├── 02-간단한문제.md         # 📝 기본 문제 (개념 숙지용)
└── 03-심화문제.md          # 🚀 응용 문제 (실무 활용)
```

## 🎯 학습 목표

이 폴더의 자료를 통해 다음을 완벽하게 마스터할 수 있습니다:

✅ **메소드의 정의와 활용법**
- 객체 내 함수의 정의와 호출
- ES6 메소드 단축 문법

✅ **this 키워드의 동작 원리**
- this가 가리키는 객체 이해
- 호출 방식에 따른 this 바인딩

✅ **메소드 체이닝 패턴**
- `return this`를 활용한 연쇄 호출
- 실무에서 자주 사용되는 패턴

✅ **this 바인딩 문제 해결**
- 메소드 분리 시 발생하는 문제
- bind(), 화살표 함수 활용법

## 📚 권장 학습 순서

### 1단계: 기본 개념 이해 (30분)
📖 **`01-개념설명.md`** 읽기
- 메소드와 this의 기본 개념 파악
- 코드 예제를 직접 실행해보기
- 메소드 체이닝 동작 원리 이해

### 2단계: 문제 풀이로 개념 확인 (45분)
📝 **`02-간단한문제.md`** 풀이
- 문제 1-5: 기본 메소드 작성과 this 활용
- 연습 미션: playlist 객체 구현
- 체크포인트로 이해도 점검

### 3단계: 실무 응용 연습 (90분)
🚀 **`03-심화문제.md`** 도전
- 쇼핑카트 시스템 구현
- 게임 캐릭터 시스템 구현  
- 이벤트 기반 옵저버 시스템 구현

## 🎨 실습 방법

### 브라우저 콘솔 활용
```javascript
// 1. F12로 개발자 도구 열기
// 2. Console 탭에서 코드 복사하여 실행
// 3. 결과 확인하고 변형해보기

const person = {
    name: "김철수",
    introduce() {
        console.log(`안녕하세요! 저는 ${this.name}입니다.`);
    }
};

person.introduce(); // 실행해보세요!
```

### VS Code에서 Node.js 실행
```bash
# 터미널에서 실행
node
# 또는 파일로 저장 후
node filename.js
```

## 💡 핵심 포인트 요약

### 🔑 메소드 정의
```javascript
// 기본 방법
const obj = {
    method: function() { /* ... */ }
};

// ES6 단축 문법 (권장)
const obj = {
    method() { /* ... */ }
};
```

### 🔑 this 키워드
```javascript
const obj = {
    name: "테스트",
    getName() {
        return this.name; // this는 obj를 가리킴
    }
};
```

### 🔑 메소드 체이닝
```javascript
const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this; // 핵심: 자기 자신을 반환
    },
    multiply(n) {
        this.value *= n;
        return this;
    }
};

// 체이닝 사용
calculator.add(5).multiply(2); // value = 10
```

### 🔑 this 바인딩 주의사항
```javascript
const obj = {
    name: "테스트",
    getName() { return this.name; }
};

const fn = obj.getName;
fn(); // undefined! (this가 obj가 아님)

// 해결 방법
const fn2 = obj.getName.bind(obj);
fn2(); // "테스트"
```

## ⚡ 자주 하는 실수

### ❌ 틀린 예시
```javascript
const counter = {
    value: 0,
    increment() {
        this.value++;
        // return을 안 함!
    }
};

counter.increment().increment(); // ❌ 에러!
```

### ✅ 올바른 예시
```javascript
const counter = {
    value: 0,
    increment() {
        this.value++;
        return this; // ✅ 체이닝 가능
    }
};

counter.increment().increment(); // ✅ 정상 동작
```

## 🎮 재미있는 연습 문제

### 미니 게임: 숫자 맞추기
```javascript
const guessGame = {
    target: Math.floor(Math.random() * 100) + 1,
    attempts: 0,
    
    guess(number) {
        this.attempts++;
        if (number === this.target) {
            console.log(`🎉 정답! ${this.attempts}번 만에 맞췄습니다!`);
        } else if (number < this.target) {
            console.log("⬆️ 더 큰 수를 입력해보세요!");
        } else {
            console.log("⬇️ 더 작은 수를 입력해보세요!");
        }
        return this;
    },
    
    reset() {
        this.target = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        console.log("🔄 게임이 리셋되었습니다!");
        return this;
    }
};

// 플레이해보세요!
guessGame.guess(50).guess(75).guess(60);
```

## 🔗 관련 개념 연결

### 이전에 배운 것
- **객체 기본 개념** (슬라이드 3-4)
- **속성 접근 방법** (슬라이드 5)

### 다음에 배울 것
- **프로토타입 체인** (슬라이드 8)
- **생성자 함수** (슬라이드 9)

## 🏆 학습 완료 체크리스트

- [ ] 메소드와 일반 함수의 차이점을 설명할 수 있다
- [ ] this 키워드가 가리키는 객체를 정확히 알 수 있다
- [ ] `return this`의 역할과 메소드 체이닝을 구현할 수 있다
- [ ] this 바인딩 문제를 인식하고 해결할 수 있다
- [ ] 간단한 문제들을 모두 풀 수 있다
- [ ] 심화 문제 중 최소 1개를 완전히 구현할 수 있다

## 💬 질문이 있다면?

### 자주 묻는 질문 (FAQ)

**Q: 화살표 함수를 메소드로 사용하면 안 되나요?**
A: 화살표 함수는 자신만의 this를 가지지 않아서 메소드로 부적합합니다.

**Q: 메소드 체이닝이 항상 좋은 패턴인가요?**
A: 적절히 사용하면 좋지만, 과도하게 사용하면 디버깅이 어려워질 수 있습니다.

**Q: 실무에서 이런 패턴을 언제 사용하나요?**
A: jQuery, lodash, D3.js 등 많은 라이브러리에서 사용합니다. React의 setState도 비슷한 패턴입니다.

---

🎉 **모든 내용을 마스터했다면 다음 슬라이드로 넘어가세요!**

다음은 **"객체와 참조"** (슬라이드 7)에서 더 깊이 있는 객체의 특성을 배워보겠습니다. 