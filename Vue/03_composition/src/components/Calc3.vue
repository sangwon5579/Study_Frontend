<template>
    <div>
        <label for="number">숫자 : </label>
        <!-- <input type="text" id="number" v-model.number="number"> -->
        <input type="text" id="number" v-model.number="state.number">

        <p>
            <!-- 결과 : {{ result }} -->
            결과 : {{ state.result }}
        </p>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
    setup () {
        // const number = ref(0);
        // const result = ref(0);
        const state = reactive({number: 0 , result: 0});

        // watch(number, (newValue, oldValue) => {
        //     console.log(`${oldValue} => ${newValue}`);

        //     result.value = newValue * newValue;
        // });

        // 감시 대상이 반응성을 가진 데이터가 아니기 때문에 경고가 발생한다.
        // watch(state.number, (newValue, oldValue) => {
        // 감시 대상을 명확하게 지정해야 한다.
        watch(() => state.number, (newValue, oldValue) => {
            console.log(`${oldValue} => ${newValue}`);

            state.result = newValue * newValue;
        });

        // return { number, result };
        return { state };
    }
}
</script>

<style lang="scss" scoped>

</style>