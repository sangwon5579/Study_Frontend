<template>
    <div>
        <!-- <h3>{{ title }}</h3> -->
        <!-- <h3 v-text="title"></h3> -->
        <h3 v-html="title"></h3>
        <!-- <img v-bind:src="imgPath"> -->
        <img width= "300px" :src ="imgPath">
        <br></br>

        <form onsubmit="return false;">
            <label for="userName">이름:</label>
            <!-- <input type="text" name="userName" id="userName" v-model="name"> -->
            <input type="text" name="userName" id="userName" v-model.lazy.trim="name">

            <br></br>

            <label for="userAge">나이 : </label>
            <input type="text" name="userAge" id="userAge" v-model.number="age">

            <br><br>
            <label><input type="radio" name="gender" value="M" v-model="gender">남자</label>
            <label><input type="radio" name="gender" value="F" v-model="gender">여자</label>
            
            <br><br>
            <labe><input type="checkbox" name="hobby" value="음악" v-model="hobbies">음악</input></labe>
            <labe><input type="checkbox" name="hobby" value="운동" v-model="hobbies">운동</input></labe>
            <labe><input type="checkbox" name="hobby" value="독서" v-model="hobbies">독서</input></labe>
            <labe><input type="checkbox" name="hobby" value="영화" v-model="hobbies">영화</input></labe>
        
            <br><br>
            <label>
                <input type="checkbox" v-model="agree" true-value="Y" false-value="N" >위 내용에 동의합니다.</input>
            </label>

            <br><br>

            <select v-model="contry">
                <option value="">국가를 선택해 주세요.</option>
                <option value="한국">한국</option>
                <option value="미국">미국</option>
                <option value="중국">중국</option>
                <option value="일본">일본</option>
                <option value="프랑스">프랑스</option>

            </select>
        </form>
    </div>
</template>

<script>
// export를 통해 외부에 노출시킨다.
    export default {
        name: 'Directive1',
        data() {
            return{
                title: '<i>1. 기본 디렉티브</i>',
                imgPath: 'https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa85d0594017900001.jpg',
                name: '홍길동',
                age: 24,
                gender: 'M',
                hobbies: ['음악'],
                agree: 'N',
                contry: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>