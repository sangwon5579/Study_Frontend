// HTML 태그(요소)에 접근(아이디로 접근)
// document.getElementById("heading").style.color = 'blue';

//1. 변수
//1) 변수 선언
// 전역 변수
var str1 = 'var 전역 변수';
let str2 = 'let 전역 변수';
const str3 = 'const 전역 변수';


//자바 스크립트에서 페이지가 모두 로드되면 실행될 함수를 구현할 때 사용한다
window.onload = function(){
    // document.getElementById("heading").style.color = 'blue';
    var str4 = 'var 지역 변수';
    let str5 = 'let 지역 변수';
    const str6 = 'const 지역 변수';

    //전역 변수와 동일한 이름의 지역 변수 선언
    let str2 = 'let 지역 변수';

    console.log(str1);
    //함수 내부에서 지역 변수가 우선권을 가진다
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log('=======================')

    //var, let, comst 차이점
    // 1) 중복 선언
    //  - var 키워드로 선언된 변수는 중복 선언이 가능하다
    var num1 = 10;
    console.log(num1);
    var num1 = 20;
    console.log(num1);

    // - let, const 키워드로 선언된 변수는 중복 선언이 불가능
    let num2 = 10;
    console.log(num2);
    // let num2 = 20;
    // console.log(num2);

    const num3 = 20;    //선언과 동시에 초기화 해야한다
    //num3 = 30;  //상수는 값의 재할당이 불가능
    console.log(num3);
    // const num3 = 10;
    // console.log(num3);

    console.log('=======================')
    //2) 유효 범위 (스코프)
    //  - 함수에서 var 키워드로 선언된 변수는 함수 유효 범위 가진다 
    //  - 함수에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 가진다
    if(true){
        var num4 = 40;
        let num5 = 50;
        const num6 = 60;

        console.log(num4);
        console.log(num5);
        console.log(num6);
    }
    console.log(num4);
    // console.log(num5);
    // console.log(num6);
    console.log('=======================')

    //3) 호이스팅 동작 방식
    //  - var 키워드로 선언한 변수는 변수 호이스팅으로 인해 undefined가 출력된다.
    console.log(num7);
    var num7 = 70;
    console.log(num7);

    //  - letm const 키워드로 선언된 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    // console.log(num8);
    let num8 = 80;
    console.log(num8);

    // console.log(num9);
    const num9 = 90;
    console.log(num9);

    console.log('=======================')
    // 4) 전역 변수 동작 방식
    //  - var 키워드로 선언한 전역 변수는 window 객체 내부에 포함된다
    //  - let, const 키워드를 선언한 전역 변수는 window 객체 내부에 포함되지 않는다.
    console.log(window.str1);
    console.log(window.str2);
    console.log(window.str3);




};


//2)자료형
function typeTest(){
    let name = '홍길동';
    let age = 24;
    let height = 180.1;
    let check = false;
    let hobbies = ['축구', '농구', '야구'];
    let user = {
        'id': 'hong123',
        'name': '홍길동',
        'age': 34,
        'height': 175.4,
        'hobbies': ['축구', '농구', '야구'],
        'add': function(x, y){
            return x+y;
        }
    };
    let addFunc = function(x, y) {
        return x+y;
    };
    let div1 = document.getElementById('div1');

    console.log(addFunc(10, 15));
    console.log(user.add(100,200));

    div1.innerHTML = '<h4>안녕하세요.</h4>'

    //typeof 연산자는 값의 자료형을 확인하는 연산자이다.
    // div1.innerHTML += 'name: ' + name + ', type: ' + typeof(name) +'<br>';
    div1.innerHTML += `name: ${name}, type: ${typeof(name)}<br>`;
    div1.innerHTML += `name: ${age}, type: ${typeof(age)}<br>`;
    div1.innerHTML += `name: ${height}, type: ${typeof(height)}<br>`;
    div1.innerHTML += `name: ${check}, type: ${typeof(check)}<br>`;
    div1.innerHTML += `name: ${hobbies}, type: ${typeof(hobbies)}<br>`;
    div1.innerHTML += `name: ${user}, type: ${typeof(user)}<br>`;
    div1.innerHTML += `name: ${user}, type: ${typeof(user)}<br>`;
    div1.innerHTML += `name: ${addFunc}, type: ${typeof(addFunc)}<br>`;
}

//3)데이터 형 변환
function castingTest(){
    let div2 = document.getElementById('div2');
    div2.innerHTML = '<h4>데이터 형 변환</h4>';

    //1) 문자열과 숫자의 산술 연산
    div2.innerHTML += `7 + 7 = ${7 + 7}<br>`;
    div2.innerHTML += `'7' + 7 = ${'7' + 7}<br>`;
    div2.innerHTML += `'7' * 7 = ${'7' * 7}<br>`;
    div2.innerHTML += `'7' - 7 = ${'7' - 7}<br>`;
    div2.innerHTML += `'7' / 3 = ${'7' / 3}<br>`;
    div2.innerHTML += `7 / 'a' = ${7 / 'a'}<br>`;
    
    //2) 문자열 -> 숫자
    div2.innerHTML += `${Number('5')}, type: ${typeof Number('5')}<br>`;
    div2.innerHTML += `${parseInt('5')}, type: ${typeof parseInt('5')}<br>`;
    div2.innerHTML += `${parseFloat('5.8')}, type: ${typeof parseFloat('5.8')}<br>`;

    //3) 숫자 -> 문자열
    div2.innerHTML += `${String(32)}, type: ${typeof String(32)}<br>`
    div2.innerHTML += `${32 + ''}, type: ${typeof 32 + ''}<br>`

    
}

//2. 연산자
function opTest(){
    let div3 = document.getElementById('div3');

    div3.innerHTML = '<h4>==연산자 테스트</h4>';
    div3.innerHTML += `5 == 5: ${5 == 5}<br>`
    div3.innerHTML += `'5' == 5: ${'5' == 5}<br>`

    div3.innerHTML = '<h4>===연산자 테스트</h4>';
    div3.innerHTML += `5 === 5: ${5 === 5}<br>`
    div3.innerHTML += `'5' === 5: ${'5' === 5}<br>`


    div3.innerHTML = '<h4>!=연산자 테스트</h4>';
    div3.innerHTML += `5 != 6: ${5 != 6}<br>`
    div3.innerHTML += `'5' != 6: ${'5' != 6}<br>`
    
    div3.innerHTML = '<h4>!==연산자 테스트</h4>';
    div3.innerHTML += `5 !== 6: ${5 !== 6}<br>`
    div3.innerHTML += `'5' !== 6: ${'5' !== 6}<br>`
}

//3. 제어문
function forTest(){
    let array=[10,9,8,7,6,5,4,3,2,1];
    let user ={
        name:'홍길동',
        age:'24',
        height:178.8
    };
    let div4 = document.getElementById('div4');

    div4.innerHTML = '<h4>배열 출력</h4>'

    //for 구문
    // for(let i = 0; i<array.length; i++){
    //     div4.innerHTML += `${array[i]} `;
    // }

    //for in 구문
    //  - 배열을 반복하는 경우 i 변수에 array의 insex값을 순서대로 담아서 반복한다
    // for(const i in array){
    //     div4.innerHTML += `${array[i]} `;
    // }

    //for of 구문
    //  -배열을 반복하는 경우 value 변수에 array의 value 값을 순서대로 담아서 반복한다.
    for (const value of array){
        div4.innerHTML += `${value}`;
    }
    div4.innerHTML='<h4>객체 출력</h4>';

    // for in 구문
    //   - 객체를 반복하는 경우 key 변수에 user의 프로퍼티명을 순서대로 담아서 반복한다. 
    for (const key in user) {
        // console.log(user['name'], user['age'], user['height']);
        // console.log(user[key]);
        div4.innerHTML += `key: ${key}, type: ${typeof key}, value: ${user[key]}<br>`;
    }

    // for of 구문
    //   - 객체의 경우 for of 구문을 사용할 수 없다.
    // for (const value of user) {
    //     console.log(value);
    // }
}