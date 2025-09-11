window.onload = () => {
    // 2. 프로퍼티
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let product = {
            pName : '아이폰 15 프로',
            price : 100000,
            0 : '배열 흉내',
            brand : '삼성',
            brand : '애플',  //마지막에 선언된 프로퍼티로 덮어쓴다
            spec : ['OLED', '10 Inch', '티타늄']
            
        };
        let div1 = document.getElementById('div1');

        console.log(product);

        //객체의 프로퍼티에 접근하는 방법
        div1.innerHTML = '<h4>대괄호([])를 사용한 접근</h4>';
        div1.innerHTML += `product['pName'] : ${product['pName']}<br>`;
        div1.innerHTML += `product['price'] : ${product['price']}<br>`;
        div1.innerHTML += `product['0'] : ${product['0']}<br>`;
        div1.innerHTML += `product[0] : ${product[0]}<br>`;
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`;
        div1.innerHTML += `product['spec'] : ${product['spec']}<br>`;

        div1.innerHTML += '<h4>마침표(.)를 사용한 접근</h4>';
        div1.innerHTML += `product.pName : ${product.pName}<br>`;
        div1.innerHTML += `product.price : ${product.price}<br>`;
        // div1.innerHTML += `product.0 : ${product.0}<br>`;
        div1.innerHTML += `product.brand : ${product.brand}<br>`;
        div1.innerHTML += `product.spec : ${product.spec}<br>`;

    });

    //3.메소드
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () =>{
        let dog = {
            name: '백구',
            kind: '진돗개',
            eat: function(food){
                this.name
                return `${this.name}이(가) ${food}을(를) 먹는다`;
            }
        }
        document.getElementById('div2').innerHTML = dog.eat('음식');
    });

    //4. 객체의 프로퍼티, 메소드 추가
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () =>{
        let student = {};
        let div3 = document.getElementById('div3');

        //프로퍼티 추가
        student.name = '홍길동';
        student['age'] = 33;

        //메소드 추가
        student.whoAreYou = function(){
            return `저는 ${this.name}, ${this.age} `
        };
        console.log(student);

        div3.innerHTML= student.whoAreYou();

        // in은 프로퍼티, 메소드가 존재하는지 확인하는 연산자이다.
        console.log('age' in student);
        console.log('whoAreYou' in student);

        //프로퍼티, 메소드를 지우는 연산자
        console.log(delete student.name);
        console.log(delete student['age']);
        console.log(delete student.whoAreYou);

        console.log(student);
    });


    //5. 객체 배열
    let btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', () =>{
        //배열의 선언 및 초기화
        let students = [
            {name: '김영희', eng: 85, math:85},
            {name: '홍길동', eng: 75, math:80},
            {name: '이몽룡', eng: 90, math:90}
        ];

        //배열에 요소를 추가
        students.push({name: '임꺽정', eng: 90, math:90});

        // 배열에 담겨있는 모든 객체에 메소드를 추가
        students.forEach((student) => {
            student.getSum = function () {
                return this.eng + this.math;
            }

            student.getAvg = function () {
                return this.getSum() / 2;
            }
        });

        console.log(students);

        div4.innerHTML = '';

        // 모든 학생의 정보가 담긴 배열을 출력 (이름, 영어 점수, 수학 점수, 총합, 평균)
        students.forEach(student => 
            div4.innerHTML += 
                `
                이름: ${student.name}, 
                영어 점수: ${student.eng}, 
                수학 점수: ${student.math}, 
                총합: ${student.getSum()}, 
                평균: ${student.getAvg()}<br>
                `
        );
    });

    // 6. 생성자 함수
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let students = [
            new Student('김영희', 85, 85),
            new Student('홍길동', 75, 80),
            new Student('이몽룡', 90, 90)
        ];
        let div5 = document.getElementById('div5');

        students.push(new Student('임꺽정', 70, 70));
        students.push(new Student('성춘향', 80, 80));

        console.log(students);

        div5.innerHTML = '';

        students.forEach(student => 
            div5.innerHTML += 
                `
                이름: ${student.name}, 
                영어 점수: ${student.eng}, 
                수학 점수: ${student.math}, 
                총합: ${student.getSum()}, 
                평균: ${student.getAvg()}<br>
                `
        );
    });

    function Student(name, eng, math) {
        // 프로퍼티 정의
        this.name = name;
        this.eng = eng;
        this.math = math

        // 메소드 정의
        // this.getSum = function () {
        //     return this.eng + this.math;
        // }

        // this.getAvg = function () {
        //     return this.getSum() / 2;
        // }
    }

    // 프로토타입(prototype)
    // 프로토타입 객체는 어떤 객체의 상위 객체의 역할을 하는 객체이다.
    // 프로토타입 객체는 생성자 함수와 연결되어 있으며 공유 프로퍼티와 메소드를 제공한다.
    Student.prototype.getSum = function () {
        return this.eng + this.math;
    };

    Student.prototype.getAvg = function () {
        return this.getSum() / 2;
    };

    // ES6 이후에는 Class 기반으로 객체 생성이 가능하다.
    // class Student {
    //     constructor(name, eng, math) {
    //         this.name = name;
    //         this.eng = eng;
    //         this.math = math;
    //     }

    //     getSum() {
    //         return this.eng + this.math;
    //     }

    //     getAvg() {
    //         return this.getSum() / 2;
    //     }
    // }

    // 7. 캡슐화
    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', () => {
        let user = new User('홍길동', 35);

        console.log(user);
        console.log(user.whoAreYou());

        document.getElementById('div6').innerHTML = user.whoAreYou();
    });

    function User(n, a) {
        let name = n;
        let age = a;

        this.whoAreYou = function() {
            return `이름 : ${name}, 나이 : ${age}`;
        }
    }

    // 클로저 기반의 캡슐화에서 프로토타입으로 메소드를 추출하면 에러가 발생한다.
    // User.prototype.whoAreYou = function() {
    //     return `이름 : ${name}, 나이 : ${age}`;
    // }

    // 8. 내장 객체
    // 1) Data 객체
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', () => {
        let div7 = document.getElementById('div7');

        // Date 객체를 생성하는 방법
        let now = new Date();
        let date1 = new Date('2025-09-10');
        let date2 = new Date('2025-09-10T20:30:59');
        let date3 = new Date(2025, 8, 10, 12, 45, 20); // 월은 0부터 시작
        let date4 = new Date(1757488961408);

        div7.innerHTML = '<h4>Date 객체</h4>';
        div7.innerHTML += `now: ${now}<br>`;
        div7.innerHTML += `date1: ${date1}<br>`;
        div7.innerHTML += `date2: ${date2}<br>`;
        div7.innerHTML += `date3: ${date3}<br>`;
        div7.innerHTML += `date4: ${date4}<br><br>`;

        // Date 객체의 메소드 호출
        div7.innerHTML += `now.getFullYear(): ${now.getFullYear()}<br>`;
        div7.innerHTML += `now.getMonth(): ${now.getMonth() + 1}<br>`; // 월은 0부터 시작
        div7.innerHTML += `now.getDate(): ${now.getDate()}<br>`;
        div7.innerHTML += `now.getDay(): ${now.getDay()}<br>`; // 0: 일요일, ..., 6: 토요일
        div7.innerHTML += `now.getHours(): ${now.getHours()}<br>`;
        div7.innerHTML += `now.getMinutes(): ${now.getMinutes()}<br>`;
        div7.innerHTML += `now.getSeconds(): ${now.getSeconds()}<br>`;
        div7.innerHTML += `now.getMilliseconds(): ${now.getMilliseconds()}<br>`;
        // 1970년 1월 1일 00시를 기분으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
        div7.innerHTML += `now.getTime(): ${now.getTime()}<br>`;
        div7.innerHTML += `now.toDateString(): ${now.toDateString()}<br>`;
        div7.innerHTML += `now.toTimeString(): ${now.toTimeString()}<br>`;
        div7.innerHTML += `now.toUTCString(): ${now.toUTCString()}<br>`;
        div7.innerHTML += `now.toISOString(): ${now.toISOString()}<br>`;
        div7.innerHTML += `now.toLocaleString(): ${now.toLocaleString()}<br>`;
        div7.innerHTML += `now.toLocaleDateString(): ${now.toLocaleDateString()}<br>`;
        div7.innerHTML += `now.toLocaleTimeString(): ${now.toLocaleTimeString()}<br>`;
    });

    // 2) JSON 객체
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click', () => {
        let user = {
            no: 1,
            name: '홍길동',
            age: 35
        };

        // JSON.stringify()
        //  - 자바스크립트 객체를 JSON 문자열로 변환하는 메소드이다.
        let jsonString = JSON.stringify(user);

        console.log(jsonString);

        // JSON.parse()
        //  - JSON 문자열을 자바스크립트 객체로 변환하는 메소드이다.
        let parseUser = JSON.parse('{"no":1,"name":"홍길동","age":35}');

        console.log(parseUser);
        
        document.getElementById('div8').innerHTML = `${jsonString}<br>`;
        document.getElementById('div8').innerHTML += `${parseUser}<br>`;
    });
};