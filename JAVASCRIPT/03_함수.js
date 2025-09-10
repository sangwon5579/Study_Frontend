//함수
//1. 함수 선언
//1) 함수
function funcTest(){
    console.log('함수 호출');
    // return 30;
    document.getElementById('p1').innerHTML = '함수 실행';
}

//2) 익명 함수
let btn1 = document.getElementById('btn1');

// btn1.onclick = function(){
//     document.getElementById('p2').innerHTML = '익명 함수 실행';
// };

btn1.addEventListener('click', functin(){
    document.getElementById('p2').innerHTML = '익명 함수 실행';
})

// 참고
//함수 선언과 동시에 즉시 실행되는 함수로 한번만 호출되며 다시 호출할 수 없더
(
    function(){
        document.getElementById('p2').innerHTML =`${a} + ${a+b}`
    }
)

//3) 화살표 함수
//  3-1) 매개변수 처리
//      - 매개 변수가 없을 때 : ()=> { ... }
//      - 매개 변수가 하나일 때 : a => { ... }
//      - 매개 변수가 두개 이상일 때 : (a, b, ...) => { ... }