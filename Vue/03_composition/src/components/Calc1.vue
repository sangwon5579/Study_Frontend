<template>
    <div>
        <label for="num1">첫 번째 수 : </label>
        <input type="text" id="num1" v-model.number="num1">

        <br><br>

        <label for="num1">두 번째 수 : </label>
        <input type="text" id="num1" v-model.number="num2"></input>

        <br></br>
        <button>계산하기</button>
        <br></br>
        <p>
            결과 : {{ result }}
        </p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const num1 = ref(10);
        const num2 = ref(20);
        const result = ref(30);

        return {
            num1,
            num2,
            result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>