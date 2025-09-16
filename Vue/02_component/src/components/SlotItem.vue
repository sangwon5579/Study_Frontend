<template>
    <li>
        <!-- <label> -->
            <!-- <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('slot-change', {id, checked: $event.target.checked})"> -->

            <!-- <slot></slot> 사이에는 부모 컴포넌트로부터 전달받는 템플릿이 없을 때 보여줄 UI를 작성한다. -->
            <!-- <slot>레이블 없음</slot> -->
        <!-- </label> -->
        
        <label>
            <slot name="icon"></slot>
                <input type="checkbox" :value="id" :checked="checked"
                    @change="$emit('slot-change', {id, checked: $event.target.checked})">

            <!-- <slot name="label">레이블 없음</slot> -->
            <!-- slot의 이름 미지정시 기본적으로 default라는 이름이 부여된 것으로 간주 -->
            <slot>레이블 없음</slot>
        </label>
    </li>
</template>

<script>
    export default {
        name: 'SlotItem',
        props: ['id', 'checked'],
        emits: ['slot-change']
    }
</script>

<style lang="scss" scoped>

</style>