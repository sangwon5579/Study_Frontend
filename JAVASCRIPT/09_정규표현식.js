window.onload = () =>{
    //1.정규 표현식 객체 생성
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
        let str1 = 'javascript jqueryscript axios';
        let str2 = 'java jquery axios';
        //리터럴을 이용한 정규 표현식 객체 생성
        let regExp1 = /script/;
        //생성자 함수를 이용한 정규 표현식 객체 생성
        let regExp2 = new RegExp('script');
        let div1 = document.getElementById('div1');

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp);

        //RegExp 객체에서 제공하는 메소드
        //1. test('문자열')
        //  - 매개값으로 전달되는 문자열에서 정규 표현식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        div1.innerHTML = `regExp1.test(str1): ${regExp1.test(str1)}<br>`;
        div1.innerHTML += `regExp1.test(str2): ${regExp1.test(str2)}<br><br>`;

        //2. exec('문자열')
        //  - 매개값으로 전달되는 문자열에서 정규 표현식 패턴을 만족하는 값을 리턴한다.
        div1.innerHTML += `regExp1.exec(str1): ${regExp1.exec(str1)}<br>`;
        div1.innerHTML += `regExp1.exec(str2): ${regExp1.exec(str2)}<br><br>`;

        //문자열에서 정규 표현식 객체를 이용하는 메소드
        //1. match(정규표현식)
        //  - 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 리턴한다.
        div1.innerHTML += `str1.match(regExp1): ${str1.match(regExp1)}<br>`;
        div1.innerHTML += `str2.match(regExp1): ${str2.match(regExp1)}<br><br>`;

        //2. search(정규 표현식)
        //  - 매개값으로 전달되는 정규 표현식 패턴을 만족하는 부분의 시작 인덱스를 리턴한다.
        div1.innerHTML += `str1.search(regExp1): ${str1.search(regExp1)}<br>`;
        div1.innerHTML += `str2.search(regExp1): ${str2.search(regExp1)}<br><br>`;

        //3. split(정규 표현식)
        //  - 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 구분자로 사용하여 배열을 생성하고 리턴한다.
        div1.innerHTML += `str1.split(regExp1): ${str1.split(regExp1)}<br>`;
        div1.innerHTML += `str2.split(regExp1): ${str2.split(regExp1)}<br><br>`;

        console.log(str1.split(regExp1));
        console.log(str2.split(regExp1));

        //4. replace(정규 표현식, '변경할 값)
        //  - 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 '변경할 값'으로 변경한다.
        div1.innerHTML += `str1.replace(regExp1, '스크립트'): ${str1.replace(regExp1, '스크립트')}<br>`;
        div1.innerHTML += `str1.replaceAll(/script/g, '스크립트'): ${str1.replaceAll(/script/g, '스크립트')}<br>`;
        div1.innerHTML += `str2.replace(regExp1, '스크립트'): ${str2.replace(regExp1, '스크립트')}<br><br>`;


    });

    //2. 플래그 문자
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        let str = 'JAvaScript jQuery axios';
        let div2 = document.getElementById('div2');

        // replace()에서 '$&'는 패턴을 만족하는 문자열을 의미한다.
        div2.innerHTML = `/a/: ${str.replace(/a/, '($&)')}<br>`;
        // i:대소문자를 구분하지 않고 비교를 수행한다.
        div2.innerHTML += `/a/i: ${str.replace(/a/i, '($&)')}<br>`;
        // g: 전역으로 비교를 수행한다.
        div2.innerHTML += `/a/g: ${str.replace(/a/g, '($&)')}<br>`;
        // 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수 있다.
        div2.innerHTML += `/a/ig: ${str.replace(/a/ig, '($&)')}<br>`;
        div2.innerHTML += `/a/gi: ${str.replace(/a/gi, '($&)')}<br>`;
    });

    //3. 정규 표현식 패턴
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () =>{
        let str = 'a aa aaa aaaa';
        let div3 = document.getElementById('div3');

        //반복 검색
        //{m, n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
        div3.innerHTML = `/a{1,2}/g: ${str.replace(/a{1,2}/g, '($&)')}<br>`;
        //{3,3}은 앞선 패턴이 최소 3번 최대 3번 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{3}/g: ${str.replace(/a{3}/g, '($&)')}<br>`;
        //앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{2,}/g: ${str.replace(/a{2,}/g, '($&)')}<br>`;
        //+는 앞선 패턴이 최소 1번 이상 반복되는 문자열을 의미한다. {1,}
        div3.innerHTML += `/a+/g: ${str.replace(/a+/g, '($&)')}<br>`;
        //?는 앞선 패턴이 최대 1번 반복되는 문자열을 의미한다. {0,1}
        div3.innerHTML += `/a?/g: ${str.replace(/a?/g, '($&)')}<br>`;
        //*은 앞선 패턴이 최소 0번 이상 반복되는 문자열을 의미한다 {0,}
        div3.innerHTML += `/a*/g: ${str.replace(/a*/g, '($&)')}<br>`;

        //문자열의 앞, 뒤 구분
        str = 'Javascript\njQuery\nShellscript\nAxios\nAjax';

        //^은 문자열의 시작을 의미한다. 
        div3.innerHTML += `/^j/gm: ${str.replace(/^j/gm, '($&)')}<br>`;
        div3.innerHTML += `/^j/igm: ${str.replace(/^j/igm, '($&)')}<br>`;
        //$는 문자열의 마지막을 의미한다.
        div3.innerHTML += `/ipt$/igm: ${str.replace(/ipt$/igm, '($&)')}<br><br>`;

        //OR 검색
        str = '123 Javas^cript jQue^ry Axios';

        // [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
        div3.innerHTML += `/[aj]/ig: ${str.replace(/[aj]/ig, '($&)')}<br>`;
        // [...] 내의 ^는 not의 의미를 가진다.
        div3.innerHTML += `/[^aj]/ig: ${str.replace(/[^aj]/ig, '($&)')}<br>`;
        // ^을 not이 아닌 문자로 검색하고 싶다면 아래와 같이 작성한다.
        div3.innerHTML += `/[\\^aj]/ig: ${str.replace(/[\^aj]/ig, '($&)')}<br>`;
        div3.innerHTML += `/[aj^]/ig: ${str.replace(/[aj^]/ig, '($&)')}<br>`;
        // [...] 내의 -는 범위 지정을 의미한다.
        div3.innerHTML += `/[a-z]/g: ${str.replace(/[a-z]/g, '($&)')}<br>`;
        div3.innerHTML += `/[A-Z]/g: ${str.replace(/[A-Z]/g, '($&)')}<br>`;
        div3.innerHTML += `/[0-9]/g: ${str.replace(/[0-9]/g, '($&)')}<br>`;
        div3.innerHTML += `/[A-Z0-9]/g: ${str.replace(/[A-Z0-9]/g, '($&)')}<br><br>`;

        // 문자 클래스
        // 임의의 문자열 검색
        //  - .은 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.
        div3.innerHTML += `/..../g: ${str.replace(/..../g, '($&)')}<br>`;

        str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\t나\t다';

        // \d는 숫자를 의미한다. ([0-9])
        div3.innerHTML += `/\\d/g: ${str.replace(/\d/g, '($&)')}<br>`;
        // \D는 숫자가 아닌 문자를 의미한다. ([^0-9])
        div3.innerHTML += `/\\D/g: ${str.replace(/\D/g, '($&)')}<br>`;
        // \w는 알파벳, 숫자, 언더바(_)를 의미한다. ([a-zA-Z0-9_])
        div3.innerHTML += `/\\w/g: ${str.replace(/\w/g, '($&)')}<br>`;
        // \W는 알파벳, 숫자, 언더바(_)가 아닌 문자를 의미한다. ([^a-zA-Z0-9_])
        div3.innerHTML += `/\\W/g: ${str.replace(/\W/g, '($&)')}<br>`;
        // \s는 공백 문자를 의미한다. ([ \n\t])
        div3.innerHTML += `/\\s/g: ${str.replace(/\s/g, '($&)')}<br>`;
        // \S는 공백 문자가 아닌 문자를 의미한다. ([^ \n\t])
        div3.innerHTML += `/\\S/g: ${str.replace(/\S/g, '($&)')}<br>`;
    });
};