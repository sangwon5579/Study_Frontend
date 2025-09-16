<template>
  <div>
    <h2>컴포넌트(Component)</h2>

    <h3>1. 속성(Props) & 이벤트 발신</h3>

    <ul>
      <!-- 
      속성을 전달하는 방법은 v-bind 디렉티브를 사용한다. 
      <CheckboxItem v-for="student in students" :key="student.no"
      :no="student.no" :name="student.name" :checked="student.checked"/>
      -->
      <CheckboxItem v-for="student in students" :key="student.no" :student="student"
          @item-change="itemChange"/>
    </ul>

    <h2>2. 슬롯(Slot)</h2>
    <p>
      부모 컴포넌트에서 자식 컴포넌트로 템플릿을 전달하는 방법을 제공한다.
    </p>

    <ul>
      <!-- <SlotItem v-for="item in slotItems" :key="item.id" 
          :id="item.id" :checked="item.checked" @slot-change="slotChange"> -->
        <!-- 자식 컴포넌트의 <slot></slot> 영역에 출력된다. -->
        <!-- <span v-if="item.checked" v-text="item.label"></span>
        <span v-else v-text="item.label" style="color: gray"></span> -->
      <!-- </SlotItem> -->
      

      <!-- 명명된 슬롯 테스트 -->
      <SlotItem v-for="item in slotItems" :key="item.id" 
          :id="item.id" :checked="item.checked" @slot-change="slotChange">
          <!-- 어떤 슬롯애 랜더링할 템플릿인지 이름으로 지정 -->
          <template v-slot:icon>
            <span v-if="item.checked" class="material-symbols-outlined">check</span>
            <span v-else class="material-symbols-outlined">close</span>
          </template>
          <!-- <template v-slot:label> -->
          <template v-slot:default>
            <span v-if="item.checked" v-text="item.label"></span>
            <span v-else v-text="item.label" style="color: gray"></span> 
          </template>
        
      </SlotItem> 
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem.vue';
  import SlotItem from './components/SlotItem.vue';
  import Student from './Student';
  
  export default {
    name: 'App',
    components: {
      CheckboxItem,
      SlotItem
    },
    data() {
      return {
        students: [
          // {no: 'S001', name: '홍길동', checked: true},
          // {no: 'S002', name: '이몽룡', checked: false},
          // {no: 'S003', name: '성춘향', checked: false},
          // {no: 'S004', name: '김철수', checked: false},
          // {no: 'S005', name: '김영희', checked: false}
          new Student('S001', '홍길동', true),
          new Student('S002', '이몽룡', false),
          new Student('S003', '성춘향', false),
          new Student('S004', '김철수', false),
          new Student('S005', '김영희', false)
        ],
        slotItems: [
          {id: 'V', checked: true, label: 'Vue'},
          {id: 'A', checked: false, label: 'Angular'},
          {id: 'R', checked: false, label: 'React'}
        ]
      }
    },
    methods: {
      itemChange(data) {
        console.log(data);

        const student = this.students.find(student => student.no === data.no);

        student.checked = data.checked;
      },
      slotChange(data) {
        console.log(data);
        
        const slotItem = this.slotItems.find(slotItem => slotItem.id === data.id);

        slotItem.checked = data.checked
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  .material-symbols-outlined{
    font-size: 14px
  }
</style>