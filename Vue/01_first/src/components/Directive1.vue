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
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Directive1',
        data() {
            return{
                title: '<i>1. 기본 디렉티브</i>',
                imgPath: 'https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa85d0594017900001.jpg',
                name: '홍길동',
                age: 24
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>