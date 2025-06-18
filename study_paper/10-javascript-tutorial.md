# JavaScript 종합 튜토리얼 학습지

## 1. 학습 로드맵

| 단계 | 주제 | 핵심 개념 | 실습 목표 |
|------|------|-----------|-----------|
| **1단계** | 기본 문법 | 변수, 타입, 연산자 | 계산기 만들기 |
| **2단계** | 제어문 | 조건문, 반복문 | 성적 관리 프로그램 |
| **3단계** | 함수 | 함수 정의, 스코프 | 유틸리티 함수 라이브러리 |
| **4단계** | 객체 | 객체, 메소드, this | 학생 관리 시스템 |
| **5단계** | 배열 | 배열 메소드, 고차함수 | 데이터 처리 프로그램 |
| **6단계** | 종합 실습 | 모든 개념 통합 | 미니 프로젝트 |

## 2. 1단계: 기본 문법 실습

### 변수와 타입 활용

```javascript
// 실습 1: 사용자 정보 관리
let userName = '김철수';
const birthYear = 1990;
let currentYear = 2024;
let isActive = true;

// 나이 계산
let age = currentYear - birthYear;
console.log(`${userName}님의 나이: ${age}세`);

// 타입 확인
console.log(`이름 타입: ${typeof userName}`);
console.log(`나이 타입: ${typeof age}`);
console.log(`활성 상태 타입: ${typeof isActive}`);

// 실습 2: 온도 변환기
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempC = 25;
let tempF = celsiusToFahrenheit(tempC);
console.log(`${tempC}°C = ${tempF.toFixed(1)}°F`);

// 실습 3: 문자열 처리
let email = '  KIM.CHULSU@EXAMPLE.COM  ';
let cleanEmail = email.trim().toLowerCase();
let [localPart, domain] = cleanEmail.split('@');

console.log(`정리된 이메일: ${cleanEmail}`);
console.log(`사용자명: ${localPart}`);
console.log(`도메인: ${domain}`);
```

### 연산자 활용

```javascript
// 실습 4: 간단한 계산기
function calculator(num1, operator, num2) {
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : '0으로 나눌 수 없습니다';
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            result = '지원하지 않는 연산자입니다';
    }
    
    return result;
}

// 계산기 테스트
console.log(calculator(10, '+', 5));  // 15
console.log(calculator(10, '/', 3));  // 3.333...
console.log(calculator(2, '**', 3));  // 8
```

## 3. 2단계: 제어문 실습

### 조건문 활용

```javascript
// 실습 5: 성적 처리 시스템
function getGrade(score) {
    if (score < 0 || score > 100) {
        return '잘못된 점수입니다';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function getGradeMessage(score) {
    let grade = getGrade(score);
    let message = grade === 'F' ? '재시험이 필요합니다' : '통과입니다';
    return `점수: ${score}, 학점: ${grade}, ${message}`;
}

// 성적 테스트
let scores = [95, 82, 76, 65, 45];
scores.forEach(score => {
    console.log(getGradeMessage(score));
});
```

### 반복문 활용

```javascript
// 실습 6: 구구단과 수학 연산
function printMultiplicationTable(start = 2, end = 9) {
    for (let i = start; i <= end; i++) {
        console.log(`=== ${i}단 ===`);
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} × ${j} = ${i * j}`);
        }
        console.log('');
    }
}

// 실습 7: 소수 찾기
function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(max) {
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(`100 이하의 소수:`, findPrimes(100));

// 실습 8: 패턴 출력
function printPattern(height) {
    // 별 피라미드
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printPattern(5);
```

## 4. 3단계: 함수 실습

### 함수 정의와 활용

```javascript
// 실습 9: 유틸리티 함수 라이브러리
const MathUtils = {
    // 최대공약수
    gcd: function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    },
    
    // 최소공배수
    lcm: function(a, b) {
        return (a * b) / this.gcd(a, b);
    },
    
    // 팩토리얼
    factorial: function(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    },
    
    // 피보나치 수열
    fibonacci: function(n) {
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }
};

// 문자열 유틸리티
const StringUtils = {
    // 첫 글자 대문자
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    
    // 카멜케이스 변환
    toCamelCase: function(str) {
        return str.toLowerCase()
                 .split(/[-_\s]+/)
                 .map((word, index) => 
                     index === 0 ? word : this.capitalize(word)
                 )
                 .join('');
    },
    
    // 문자열 뒤집기
    reverse: str => str.split('').reverse().join(''),
    
    // 팰린드롬 확인
    isPalindrome: function(str) {
        let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === this.reverse(cleaned);
    }
};

// 함수 테스트
console.log(MathUtils.gcd(48, 18));     // 6
console.log(MathUtils.factorial(5));    // 120
console.log(StringUtils.toCamelCase('hello-world-test')); // 'helloWorldTest'
console.log(StringUtils.isPalindrome('A man a plan a canal Panama')); // true
```

### 클로저와 고차함수

```javascript
// 실습 10: 카운터 팩토리
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = initialValue
    };
}

let counter1 = createCounter(10);
let counter2 = createCounter();

console.log(counter1.increment()); // 11
console.log(counter2.increment()); // 1

// 실습 11: 함수 조합
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}

const addOne = x => x + 1;
const multiplyTwo = x => x * 2;
const square = x => x * x;

const composedFunction = compose(square, multiplyTwo, addOne);
console.log(composedFunction(3)); // ((3 + 1) * 2)² = 64
```

## 5. 4단계: 객체 실습

### 객체 모델링

```javascript
// 실습 12: 학생 관리 시스템
class Student {
    constructor(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.subjects = new Map();
    }
    
    addSubject(subject, score) {
        this.subjects.set(subject, score);
    }
    
    getAverage() {
        if (this.subjects.size === 0) return 0;
        let total = Array.from(this.subjects.values())
                         .reduce((sum, score) => sum + score, 0);
        return total / this.subjects.size;
    }
    
    getGradeByAverage() {
        let avg = this.getAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        return 'F';
    }
    
    toString() {
        return `${this.name} (${this.studentId}) - ${this.grade}학년, 평균: ${this.getAverage().toFixed(1)}`;
    }
}

// 교실 관리
class Classroom {
    constructor(className) {
        this.className = className;
        this.students = [];
    }
    
    addStudent(student) {
        this.students.push(student);
    }
    
    removeStudent(studentId) {
        this.students = this.students.filter(s => s.studentId !== studentId);
    }
    
    findStudent(studentId) {
        return this.students.find(s => s.studentId === studentId);
    }
    
    getClassAverage() {
        if (this.students.length === 0) return 0;
        let total = this.students.reduce((sum, student) => sum + student.getAverage(), 0);
        return total / this.students.length;
    }
    
    getTopStudents(count = 3) {
        return this.students
                  .sort((a, b) => b.getAverage() - a.getAverage())
                  .slice(0, count);
    }
}

// 시스템 테스트
let classroom = new Classroom('3-A');

let students = [
    new Student('김철수', 'S001', 3),
    new Student('이영희', 'S002', 3),
    new Student('박민수', 'S003', 3)
];

students.forEach(student => {
    student.addSubject('수학', Math.floor(Math.random() * 41) + 60);
    student.addSubject('영어', Math.floor(Math.random() * 41) + 60);
    student.addSubject('과학', Math.floor(Math.random() * 41) + 60);
    classroom.addStudent(student);
});

console.log(`${classroom.className} 반 평균: ${classroom.getClassAverage().toFixed(1)}`);
console.log('상위 학생들:');
classroom.getTopStudents().forEach((student, index) => {
    console.log(`${index + 1}. ${student.toString()}`);
});
```

## 6. 5단계: 배열 실습

### 데이터 처리

```javascript
// 실습 13: 판매 데이터 분석
let salesData = [
    {product: '노트북', category: '전자제품', price: 1200000, quantity: 15, date: '2024-01-15'},
    {product: '마우스', category: '전자제품', price: 25000, quantity: 50, date: '2024-01-16'},
    {product: '책상', category: '가구', price: 150000, quantity: 8, date: '2024-01-17'},
    {product: '의자', category: '가구', price: 80000, quantity: 12, date: '2024-01-18'},
    {product: '키보드', category: '전자제품', price: 75000, quantity: 30, date: '2024-01-19'}
];

class SalesAnalyzer {
    constructor(data) {
        this.data = data;
    }
    
    // 총 매출 계산
    getTotalRevenue() {
        return this.data.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    // 카테고리별 매출
    getRevenueByCategory() {
        return this.data.reduce((acc, item) => {
            let revenue = item.price * item.quantity;
            acc[item.category] = (acc[item.category] || 0) + revenue;
            return acc;
        }, {});
    }
    
    // 베스트셀러 상품 (매출 기준)
    getBestSellers(count = 3) {
        return this.data
                  .map(item => ({
                      ...item,
                      revenue: item.price * item.quantity
                  }))
                  .sort((a, b) => b.revenue - a.revenue)
                  .slice(0, count);
    }
    
    // 가격대별 상품 분류
    getProductsByPriceRange() {
        return {
            '저가': this.data.filter(item => item.price < 50000),
            '중가': this.data.filter(item => item.price >= 50000 && item.price < 200000),
            '고가': this.data.filter(item => item.price >= 200000)
        };
    }
    
    // 월별 매출 (간단 버전)
    getMonthlyRevenue() {
        return this.data.reduce((acc, item) => {
            let month = item.date.substring(0, 7); // YYYY-MM
            let revenue = item.price * item.quantity;
            acc[month] = (acc[month] || 0) + revenue;
            return acc;
        }, {});
    }
}

let analyzer = new SalesAnalyzer(salesData);

console.log('=== 판매 데이터 분석 ===');
console.log(`총 매출: ${analyzer.getTotalRevenue().toLocaleString()}원`);
console.log('카테고리별 매출:', analyzer.getRevenueByCategory());
console.log('베스트셀러 상품:', analyzer.getBestSellers());
```

### 고급 배열 처리

```javascript
// 실습 14: 복잡한 데이터 변환
let employees = [
    {id: 1, name: '김철수', department: 'IT', salary: 5000, joinDate: '2020-01-15', skills: ['JavaScript', 'Python']},
    {id: 2, name: '이영희', department: 'HR', salary: 4500, joinDate: '2019-03-20', skills: ['Communication', 'Management']},
    {id: 3, name: '박민수', department: 'IT', salary: 5500, joinDate: '2021-06-10', skills: ['Java', 'React', 'Node.js']},
    {id: 4, name: '최지영', department: 'Marketing', salary: 4800, joinDate: '2022-02-28', skills: ['SEO', 'Analytics']}
];

class EmployeeManager {
    constructor(employees) {
        this.employees = employees;
    }
    
    // 부서별 평균 연봉
    getAverageSalaryByDepartment() {
        let grouped = this.employees.reduce((acc, emp) => {
            if (!acc[emp.department]) {
                acc[emp.department] = [];
            }
            acc[emp.department].push(emp.salary);
            return acc;
        }, {});
        
        return Object.entries(grouped).reduce((acc, [dept, salaries]) => {
            acc[dept] = salaries.reduce((sum, sal) => sum + sal, 0) / salaries.length;
            return acc;
        }, {});
    }
    
    // 스킬별 직원 수
    getEmployeeCountBySkill() {
        return this.employees
                  .flatMap(emp => emp.skills)
                  .reduce((acc, skill) => {
                      acc[skill] = (acc[skill] || 0) + 1;
                      return acc;
                  }, {});
    }
    
    // 경력 계산 (년수)
    addExperienceYears() {
        return this.employees.map(emp => ({
            ...emp,
            experienceYears: new Date().getFullYear() - new Date(emp.joinDate).getFullYear()
        }));
    }
    
    // 조건부 필터링 및 정렬
    searchEmployees(criteria) {
        return this.employees.filter(emp => {
            let matches = true;
            
            if (criteria.department) {
                matches = matches && emp.department === criteria.department;
            }
            
            if (criteria.minSalary) {
                matches = matches && emp.salary >= criteria.minSalary;
            }
            
            if (criteria.skills) {
                matches = matches && criteria.skills.some(skill => emp.skills.includes(skill));
            }
            
            return matches;
        }).sort((a, b) => {
            if (criteria.sortBy === 'salary') {
                return criteria.order === 'desc' ? b.salary - a.salary : a.salary - b.salary;
            }
            return 0;
        });
    }
}

let empManager = new EmployeeManager(employees);

console.log('=== 직원 데이터 분석 ===');
console.log('부서별 평균 연봉:', empManager.getAverageSalaryByDepartment());
console.log('스킬별 직원 수:', empManager.getEmployeeCountBySkill());

let itEmployees = empManager.searchEmployees({
    department: 'IT',
    minSalary: 5000,
    sortBy: 'salary',
    order: 'desc'
});
console.log('IT 부서 고연봉자:', itEmployees);
```

## 7. 6단계: 종합 실습 프로젝트

### 미니 도서관 관리 시스템

```javascript
// 실습 15: 도서관 관리 시스템
class Book {
    constructor(isbn, title, author, category, publishYear) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.category = category;
        this.publishYear = publishYear;
        this.isAvailable = true;
        this.borrowHistory = [];
    }
    
    borrow(memberName) {
        if (!this.isAvailable) {
            throw new Error('이 책은 현재 대출 중입니다.');
        }
        
        this.isAvailable = false;
        this.borrowHistory.push({
            memberName,
            borrowDate: new Date(),
            returnDate: null
        });
    }
    
    return() {
        if (this.isAvailable) {
            throw new Error('이 책은 이미 반납되었습니다.');
        }
        
        this.isAvailable = true;
        let lastBorrow = this.borrowHistory[this.borrowHistory.length - 1];
        lastBorrow.returnDate = new Date();
    }
}

class Member {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
        this.borrowHistory = [];
    }
    
    borrowBook(book) {
        book.borrow(this.name);
        this.borrowedBooks.push(book);
        this.borrowHistory.push({
            book: book,
            borrowDate: new Date()
        });
    }
    
    returnBook(isbn) {
        let bookIndex = this.borrowedBooks.findIndex(book => book.isbn === isbn);
        if (bookIndex === -1) {
            throw new Error('대출하지 않은 책입니다.');
        }
        
        let book = this.borrowedBooks[bookIndex];
        book.return();
        this.borrowedBooks.splice(bookIndex, 1);
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = new Map();
        this.members = new Map();
    }
    
    addBook(book) {
        this.books.set(book.isbn, book);
    }
    
    addMember(member) {
        this.members.set(member.id, member);
    }
    
    searchBooks(query) {
        let results = [];
        for (let book of this.books.values()) {
            if (book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                book.category.toLowerCase().includes(query.toLowerCase())) {
                results.push(book);
            }
        }
        return results;
    }
    
    getPopularBooks(limit = 5) {
        return Array.from(this.books.values())
                   .sort((a, b) => b.borrowHistory.length - a.borrowHistory.length)
                   .slice(0, limit);
    }
    
    getBooksByCategory() {
        let categories = {};
        for (let book of this.books.values()) {
            if (!categories[book.category]) {
                categories[book.category] = [];
            }
            categories[book.category].push(book);
        }
        return categories;
    }
    
    getMemberStatistics() {
        let stats = {
            totalMembers: this.members.size,
            activeBorrowers: 0,
            totalBooksOut: 0
        };
        
        for (let member of this.members.values()) {
            if (member.borrowedBooks.length > 0) {
                stats.activeBorrowers++;
                stats.totalBooksOut += member.borrowedBooks.length;
            }
        }
        
        return stats;
    }
}

// 시스템 구축 및 테스트
let library = new Library('시립 도서관');

// 책 추가
let books = [
    new Book('978-1', 'JavaScript 완벽 가이드', '데이비드 플래니건', '프로그래밍', 2020),
    new Book('978-2', '클린 코드', '로버트 마틴', '프로그래밍', 2008),
    new Book('978-3', '1984', '조지 오웰', '소설', 1949),
    new Book('978-4', '해리포터', 'J.K. 롤링', '소설', 1997),
    new Book('978-5', '코스모스', '칼 세이건', '과학', 1980)
];

books.forEach(book => library.addBook(book));

// 회원 추가
let members = [
    new Member('M001', '김철수', 'kim@example.com'),
    new Member('M002', '이영희', 'lee@example.com'),
    new Member('M003', '박민수', 'park@example.com')
];

members.forEach(member => library.addMember(member));

// 대출/반납 시뮬레이션
try {
    let member1 = library.members.get('M001');
    let book1 = library.books.get('978-1');
    
    member1.borrowBook(book1);
    console.log(`${member1.name}님이 "${book1.title}"을 대출했습니다.`);
    
    // 검색 기능 테스트
    let searchResults = library.searchBooks('JavaScript');
    console.log('JavaScript 검색 결과:', searchResults.map(b => b.title));
    
    // 통계 출력
    console.log('도서관 통계:', library.getMemberStatistics());
    
} catch (error) {
    console.error('오류:', error.message);
}
```

## 8. 실습 과제

### 과제 1: 개인 가계부 프로그램
```javascript
// TODO: 다음 기능을 구현하세요
// - 수입/지출 기록 추가
// - 카테고리별 지출 분석
// - 월별 수지 계산
// - 예산 설정 및 초과 알림
```

### 과제 2: 간단한 게임
```javascript
// TODO: 숫자 맞추기 게임을 구현하세요
// - 1~100 사이 랜덤 숫자 생성
// - 사용자 입력 받기
// - 힌트 제공 (높다/낮다)
// - 시도 횟수 기록
```

### 과제 3: 학습 일지 관리자
```javascript
// TODO: 개인 학습 기록 시스템을 구현하세요
// - 날짜별 학습 내용 기록
// - 학습 시간 측정
// - 주간/월간 통계
// - 목표 설정 및 달성률 계산
```

## 9. 최종 체크리스트

### 기본 문법
- [ ] 변수 선언 (let, const, var)
- [ ] 데이터 타입 (number, string, boolean, object, array)
- [ ] 연산자 (산술, 비교, 논리)
- [ ] 타입 변환 (명시적, 묵시적)

### 제어 구조
- [ ] 조건문 (if, switch, 삼항 연산자)
- [ ] 반복문 (for, while, do-while)
- [ ] 반복문 제어 (break, continue)

### 함수
- [ ] 함수 선언 방법 (선언문, 표현식, 화살표)
- [ ] 매개변수와 인수
- [ ] 반환값
- [ ] 스코프와 클로저
- [ ] 고차 함수

### 객체
- [ ] 객체 생성 및 프로퍼티 접근
- [ ] 메소드와 this
- [ ] 구조 분해 할당
- [ ] 객체 복사 (얕은 복사, 깊은 복사)

### 배열
- [ ] 배열 생성 및 요소 접근
- [ ] 배열 메소드 (push, pop, splice 등)
- [ ] 고차 함수 (map, filter, reduce)
- [ ] 배열 순회 (forEach, for...of)

### 종합 활용
- [ ] 실제 문제 해결에 JavaScript 적용
- [ ] 코드 구조화 및 모듈화
- [ ] 에러 처리
- [ ] 성능 고려사항

## 10. 다음 학습 단계

| 주제 | 설명 | 우선순위 |
|------|------|----------|
| **DOM 조작** | 웹 페이지 상호작용 | 높음 |
| **이벤트 처리** | 사용자 입력 처리 | 높음 |
| **비동기 프로그래밍** | Promise, async/await | 중간 |
| **ES6+ 기능** | 최신 JavaScript 문법 | 중간 |
| **웹 API** | fetch, localStorage 등 | 중간 |
| **프레임워크** | React, Vue.js 등 | 낮음 |

축하합니다! JavaScript 기본기를 모두 익히셨습니다. 이제 실제 웹 개발 프로젝트를 시작할 준비가 되었습니다. 