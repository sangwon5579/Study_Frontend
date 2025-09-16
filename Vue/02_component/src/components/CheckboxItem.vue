<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="checked">{{no}} - {{ name }} -->
            <input type="checkbox" :checked="student.checked"
            @change="$emit('item-change', {no: student.no, checked: $event.target.checked})">{{student.no}} - {{ student.name }}
        </label>
    </li>
</template>

<script>
import Student from '@/Student';

    export default {
        name: 'CheckboxItem',
        //props 옵션으로 전달받을 속성을 정의
        // props: ['no', 'name', 'checked'

        //속성의 유효성 검증
        // props: {
        //     no: String,
        //     name: {
        //         validator(value){
        //             // name이 문자열이면서 두글자 이상인지 체크
        //             return typeof(vlaue) !== 'string' ? false : value/length >= 2 ? true : false;
        //         }
        //     },
        //     checked: {
        //         type: Boolean,
        //         required: false,
        //         default: false
        //     }
        // }

        props: {
            student: Student    
        }
        ,
        //이벤트저으이 & 이벤트 유효성 체크
        emits: ['item-change'],
        // emits: {
        //     'item-change': (event) => {
        //         return typeof(event.no) !== 'string' ? false: true;
        //     }
        // },
        created(){
            //props에 등록된 속성을 변경하려고 허면 에러가 발생
            // this.checked = false;
            //객체로 전달받으면 갹체의 내부 속성을 변경할 수 있지만 변경하지 않도록 해야한다.
            // this.student.checked = true;
        }
    }
</script>

<style lang="scss" scoped>

</style>