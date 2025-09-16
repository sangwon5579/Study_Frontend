<template>
    <li>
        <!-- <input type="checkbox" :checked="checked">{{no}} - {{ name }} -->
        <input type="checkbox" :checked="student.checked">{{student.no}} - {{ student.name }}
    </li>
</template>

<script>
import Student from '@/Student';

    export default {
        name: 'CheckboxItem',
        //props 옵션으로 전달받을 속성을 정의
        // props: ['no', 'name', 'checked']

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
    }
</script>

<style lang="scss" scoped>

</style>