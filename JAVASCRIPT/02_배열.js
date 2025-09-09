window.onload = function(){
    let btn1 = document.getElementById('btn1');

    // btn1.onclick = function(){
    //     alert('버튼 클릭');
    // };

    //1. 배열 선언 및 초기화
    btn1.addEventListener('click', function () {
        let array1 = [];
        let array2 = new Array();
        let array3 = new Array(3);
        let array4 = ['red', 'blue', 'green', 'yellow'];
        let array5 = new Array('red', 'blue', 'green', 'yellow')
        let array6 = Array.of('red', 'blue', 'green', 'yellow');
        let div1 = document.getElementById('div1');
        console.log(array1, array2, array3);
        console.log(array4, array5, array6);

        array1[0] = '사과';
        array1[1] = '포도';
        array1[2] = '딸기';
        console.log(array1);

        div1.innerHTML = '<h4>array1 출력</h4>'
        for(const value of array1){
            div1.innerHTML+= `${value}`;
        }

        array2[0] = 'honggildong';
        array2[1] = 33;
        array2[2] = false;
        array2[3] = {};
        array2[4] = [1, 2, 3, 4];
        array2[5] = function(){};

        console.log(array2);
        div1.innerHTML += '<h4>array2 출력</h4>'
        for(const i in array2){
            div1.innerHTML += `value: ${array2[i]}, type: ${typepf (array2[i])}<br>`;
        }
    });


    //2. 배열의 메소드
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){
        let div2 = document.getElementById('div2');

        // 1) indexof()
        let array = ['귤', '사과', '자몽', '망고'];
        div2.innerHTML = `array [${array}]<br>`;
        div2.innerHTML += `indexOf('귤'): ${array.indexOf('귤')}<br>`
        div2.innerHTML += `indexOf('수박'): ${array.indexOf('수박')}<br>`

        // 2) concat()
        let array1 = ['귤', '사과', '자몽', '망고'];
        let array2 = ['바나나', '오렌지', '딸기', '키위'];
        div2.innerHTML=`array1: [${array1}]<br>`
        div2.innerHTML+=`array2: [${array2}]<br>`
        div2.innerHTML += `array1.concat(array2) : [${array1.concat(array2)}]<br>`;
        div2.innerHTML += `array2.concat(array1) : [${array2.concat(array1)}]<br>`;
        //원본 배열에는 영향 X
        div2.innerHTML+=`array1: [${array1}]<br>`
        div2.innerHTML+=`array2: [${array2}]<br>`

        // 3) sort()
        let array3 = ['APple', 'Cherry', 'apple', 'Banana'];
        let array4 = [10, 400, 5000,20,70000, 123, 3000000];
        div2.innerHTML = `array3: [${array3}]<br>`;
        div2.innerHTML += `array4: [${array4}]<br>`;
        div2.innerHTML += `array3.sort(): [${array3.sort()}]<br>`;
        div2.innerHTML += `array4.sort(): [${array4.sort()}]<br>`;
        //원본 배열에 영향을 준다
        div2.innerHTML += `array3: [${array3}]<br>`;
        div2.innerHTML += `array4: [${array4}]<br>`;

        //sort() 메소드에 콜백 함수를 매개값으로 전달해서 정렬 기준을 젼경할 수 있다.
        //  - 비교하는 값이 같으면 0을 반환
        //  - 첫번째 값이 크면 양수 반환
        //  - 두번쨰 값이 크면 음수 반환
        array4.sort(function (left, right){
            console.log(left, typeof(left));
            console.log(right, typeof(right));
            return left - right
        });
        div2.innerHTML += `array4: [${array4}]<br>`;

        //화살표 함수
        array4.sort((left, right) =>{
            return right - left
        });
        div2.innerHTML += `array4: [${array4}]<br>`;


        // 4) reverse()
        let array5 = ['APple', 'Cherry', 'apple', 'Banana'];
        div2.innerHTML = `array5 : [${array5}]<br>`;
        //원본 배열에 영향을 준다
        div2.innerHTML += `array5.reverse(): [${array5.reverse()}]<br>`;
        div2.innerHTML += `array5 : [${array5}]<br>`

        // 5) push() / pop()
        let array6 = ['포도', '사과', '딸기'];
        div2.innerHTML = `array6 : [${array6}]<br>`;
        div2.innerHTML += `array6.push('참외'): [${array6.push('참외')}]<br>`;
        div2.innerHTML += `array6 : [${array6}]<br>`;
        div2.innerHTML += `array6.pop(): [${array6.pop()}]<br>`

        // 6) unshift/shift
        let array7 = ['포도', '사과', '딸기'];
        div2.innerHTML = `array7 : [${array7}]<br>`;
        div2.innerHTML += `array7.unshift('참외'): [${array7.unshift('참외')}]<br>`;
        div2.innerHTML += `array7 : [${array7}]<br>`;
        div2.innerHTML += `array7.shift(): [${array7.shift()}]<br>`;
        div2.innerHTML += `array7 : [${array7}]<br>`;

        // 7) slice(), splice()
        let array8 = ['포도', '사과', '딸기'];
        div2.innerHTML = `array8 : [${array8}]<br>`;
        div2.innerHTML += `array8.slice(2) : [${array8.slice(2)}]<br>`;
        div2.innerHTML += `array8 : [${array8}]<br>`;
        // div2.innerHTML += `array8.splice(2) : [${array8.splice(2, 2)}]<br>`
        div2.innerHTML += `array8.splice(2) : [${array8.splice(1, 2, '파인애플')}]<br>`
        div2.innerHTML += `array8 : [${array8}]<br>`;

        // 8) toString(), join()
        let array9 = ['포도', '사과', '배', '수박'];
        div2.innerHTML = `array9: [${array9}]<br>`
        div2.innerHTML += `array9.toString(): [${array9.toString()}]<br>`
        div2.innerHTML += `array9.join(): [${array9.join()}]<br>`
        div2.innerHTML += `array9.join('|'): [${array9.join('|')}]<br>`

        // 9) forEach()
        //  - 배열의 요소를 한번씩 순회하면서 반복하는 메소드
        let array10 = ['포도', '사과', '배', '수박'];
        div2.innerHTML = `array10: [${array10}]<br>`;
        // array10.forEach(function(value, index, arr){
        //     div2.innerHTML += `value: ${value}, index: ${index}<br>`;
        // div2.innerHTML += `array10: [${array10}]<br>`;
        // };

        // array10.forEach((value, index) => {
        //     div2.innerHTML += `value: ${value}, index: ${index}<br>`});

            
        //10)reduce()
        //  - 배열의 각 요소에 대해 콜백 함수의 실행값을 누적하여 하나의 결과값을 반환한다
        let array11 = [3, 5, 7, 9];
        let result = array11.reduce(function (left, right){
            return left*right;
        }, 10);

        div2.innerHTML += `result: ${result}<br>`;

        // 11) filter()
        //  - 배열에서 특정 조건을 만족하는 요소들만 새로운 배열로 생성한다
        let array12 = [1, 2, 3, 4, 5, 6];
        let newArray = array12.filter(function(value, index, arr){
            return value%2 == 0;
        });
        div2.innerHTML = `array12: [${array12}]<br>`;
        div2.innerHTML += `newArray: [${newArray}]<br>`;

        
    });
};

