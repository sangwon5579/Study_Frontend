window.onload = () =>{
    // 1. 스프레드 연산자
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () =>{
        let div1 = document.getElementById('div1');
        //1. 배열 병합
        let array1 = ['포도', '사과','딸기'];
        let array2 = ['수박', '바나나', '복숭아', '키워'];
        // let newArray = array1.concat(array2);
        let newArray = [ ... array1, ... array2];

        console.log(array1);
        console.log(array2);
        console.log(newArray);

        div1.innerHTML = "<h4>배열 병합</h4>";
        div1.innerHTML += `array1: [${array1}]<br>`;
        div1.innerHTML += `array2: [${array2}]<br>`;
        div1.innerHTML += `newArray: [${newArray}]<br>`;

        //2. 배열 복사
        let array = ['포도', '사과', '딸기'];
        let arrayCopy =[...array, '망고'];

        div1.innerHTML += "<h4>배열 복사</h4>";
        div1.innerHTML += `array: [${array}]<br>`;
        div1.innerHTML += `arrayCopy: [${arrayCopy}]<br>`;

        //3. 객체 복사
        let user = {name:'홍길동',age: 33, age:40};
        //객체를 복사하고 새로운 프로퍼티를 추가
        // let userCopy ={...user, major: '체육학과'};
        //객체를 복사하고 기존 프로퍼티를 수정
        let userCopy ={...user, age:40};

        console.log(user);
        console.log(userCopy)

        div1.innerHTML += "<h4>객체 복사</h4>";
        div1.innerHTML += `user.name: ${user.name}, user.age: ${user.age}<br>`;
        div1.innerHTML += `userCopy.name: ${userCopy.name}, userCopy.age: ${userCopy.age}<br>`;
    

    });

    
     //2. 구조 분해 할당
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        let div2 = document.getElementById('div2');
        // 1. 배열의 구조 분해 할당
        let array = [10, 20, 30];     
        // let x = array[0];
        // let y = array[1];
        // let z = array[2];       
        let [x, y, z] = array;
        div2.innerHTML = '<h4>배열의 구조 분해 할당</h4>';
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `x: ${x}, y: ${y}, z: ${z}<br>`

        // 2. 객체의 구조 분해 할당
        let user = { name: '홍길동', age: 33};
        
        // let name = user.name;
        // let age = user.age;
        let {name, age} = user;
        
        // let n = user.name;
        // let a = user.age;
        let {name:n, age:a} = user;

        div2.innerHTML += '<h4>객채의 구조 분해 할당</h4>';
        div2.innerHTML += `name: ${name}, age: ${age}<br>`;
        div2.innerHTML += `n: ${n}, a: ${a}<br>`;

        // 3. 함수의 매개 변수로 활용
        // userPrint(user);
        // userPrint(user.name, user.age)
        userPrint(user);
    });
    // function userPrint(user){
    // function userPrint(name, age, address='none'){
function userPrint({name, age, address='none'}){
        // let name = user.name;
        // let age = user.age;
        // let address = user.address;
        let div2 = document.getElementById('div2');
        div2.innerHTML += '<h4>함수의 매개변수로 활용</h4>';
        div2.innerHTML += `name: ${name}, age: ${age}, address: ${address}<br>`
    }
};