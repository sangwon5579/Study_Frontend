//1.이벤트 헨들러 등록
//1)인라인 방식
function eventTest(event){
    //기본적으로 이벤트 객체 받아올 수 없다.
    // alert('버튼 클릭');
    console.log(event);
    //윈도우 객체를 사용해서 최근 발생한 이벤트 정보에 대한 객체를 얻어올 수 있다.
    console.log(window.event);
}

//2) 프로퍼티 방식
let btn1 = document.getElementById('btn1');

btn1.onclick = function(event){
    // alert('버튼 클릭!')
    console.log(event);
    console.log(event.target);
    console.log(this);
};

btn1.onclick = (event) => {
    // alert('버튼 클릭!')
    console.log(event);
    console.log(event.target);
    console.log(this);

    //이벤트 헨들러 제거
    btn1.onclick = null;
};

//메소드 방식
let btn2 = document.getElementById('btn2');

// btn2.addEventListener('click', function(event){
//     console.log(event);
//     console.log(event.target);
//     console.log(this);
//     console.log('--------------------------');
// });

// btn2.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(this);
// });

const handler = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(this);
};

btn2.addEventListener('click', handler);
btn2.removeEventListener('click', handler);

// 2. 태그별 기본 이벤트
// 1) 기본 이벤트 제거 1
function eventTest2(){
    if(!confirm('네이버로 이동?')){
        return false;
    }

}

//2) 기본 이벤트 제거 2
// let btnSubmit = document.getElementById('btnSubmit');
// btnSubmit.onclick = () => {
//     let password = document.getElementById('password');
//     let confirmPassword = document.getElementById('confirmPassword');
//     if(password.value === ''){
//         alert('비밀번호를 입력하시오.');
//         return false;
//     }
//     if(password.value !== confirmPassword.value){
//         alert('비밀번호가 일치하지 않습니다.');

//         confirmPassword.value = '';
//         confirmPassword.focus();
//         return false;
//     }

// };

btnSubmit.addEventListener('click', () => {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    if(password.value === ''){
        alert('비밀번호를 입력하시오.');

        //메소드 방식에서는 아래와 같이 기본 동작을 제거해야 한다.
        event.preventDefault();
        
    }
    if(password.value !== confirmPassword.value){
        alert('비밀번호가 일치하지 않습니다.');

        confirmPassword.value = '';
        confirmPassword.focus();
        //메소드 방식에서는 아래와 같이 기본 동작을 제거해야 한다.
        event.preventDefault();
        
    }
});

btnSubmit2.addEventListener('clock', (event) => {
    let userId = document.getElementById('userId').value;
    let reqExp = /^[a-zA-Z0-9]{5,12)$/;
    if(!reqExp.test(userId)){
        alert('아이디 다시 입력');
        event.preventDefault();
    }
    
});