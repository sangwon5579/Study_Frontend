window.onload = () => {
    // 1. 노드 검색
    // 1) id로 조회
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
    
        div1.style.backgroundColor = 'red';
        div1.style.color = 'white';
        div1.innerText = '색상이 변경되었습니다.';
    });

    // 2) 태그명으로 검색
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let red = 0;
        let green = 0;
        let blue = 0;
        let elements = document.getElementsByTagName('li');

        console.log(elements);
        
        for (const item of elements) {
            red = parseInt(Math.random() * 255) + 1;
            green = parseInt(Math.random() * 255) + 1;
            blue = parseInt(Math.random() * 255) + 1;

            item.style.background = `rgb(${red}, ${green}, ${blue})`;
            item.style.color = 'white';
        }
    });

    // 3) name으로 검색
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let checkedItems = '';
        let elements = document.getElementsByName('hobby');

        console.log(elements);

        elements.forEach(element => {
            // console.log(element.value);
            // console.log(element.checked);

            if (element.checked) {
                checkedItems += `${element.value}<br>`;
            }
        })
        
        document.getElementById('div3').innerHTML = checkedItems;
    });

    // 4) class로 검색
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let elements = document.getElementsByClassName('area');

        console.log(elements);

        for (const element of elements) {
            element.style.backgroundColor = 'orangered';
        }
    });

    // 5) CSS 선택자 검색
    let btn5 = document.getElementById('btn5');
    
    btn5.addEventListener('click', () => {
        let div3 = document.querySelector('#div3');
        let elements = document.querySelectorAll('.area');

        console.log(div3);
        console.log(elements);

        document.querySelectorAll('input[type=checkbox]')
                .forEach(element => {
                    if (element.checked) {
                        element.style.width = '20px';
                        element.style.height = '20px';
                    } else {
                        element.style.width = '13px';
                        element.style.height = '13px';
                    }
                });
    });

    // 2. 노드 생성
    // 1) 텍스트 노드가 있는 요소 노드 생성
    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', () => {
        // 요소 노드 생성
        let title = document.createElement('h5');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요.');

        // 요소 노드 하위에 텍스트 노드를 추가
        title.appendChild(textNode);

        console.log(title);
        console.log(textNode);

        document.getElementById('div6').appendChild(title);
        // document.getElementById('div6').innerHTML = '<h5>안녕하세요.</h5>';
    });

    // 2) 텍스트 노드가 없는 요소 노드 생성
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', () => {
        // 요소 노드 생성
        let img = document.createElement('img');

        // 속성 지정
        img.setAttribute('src', '../resources/images/파이리.jpeg');
        img.setAttribute('width', '200px');
        img.setAttribute('height', '250px');

        console.log(img);

        document.getElementById('div7').appendChild(img);
        // document.getElementById('div7').innerHTML = '<img src="../resources/images/파이리.jpeg" width="200px" height="250px">';
    });

    // 3. 노드 삭제
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click', () => {
        let div8 = document.getElementById('div8');

        // div8.remove();

        document.body.removeChild(div8);
    });
};