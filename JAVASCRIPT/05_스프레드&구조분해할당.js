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
        let user = {name:'홍길동',age: 33};
        //객체를 복사하고 새로운 프로퍼티를 추가
        // let userCopy ={...user, major: '체육학과'};
        //객체를 복사하고 기존 프로퍼티를 수정
        let userCopy ={...user, age:40};

        console.log(user);
        console.log(userCopy)

        div1.innerHTML += "<h4>객체 복사</h4>";
        div1.innerHTML += `user.name: ${user.name}, user.age: ${user.age}<br>`;
        div1.innerHTML += `userCopy.name: ${userCopy.name}, userCopy.age: ${userCopy.age}<br>`;
    

    })
}