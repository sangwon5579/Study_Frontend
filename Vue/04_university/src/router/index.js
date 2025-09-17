import NotFound from '@/views/common/NotFound.vue'
import AddDepartment from '@/views/department/AddDepartment.vue'
import DepartmentDetail from '@/views/department/DepartmentDetail.vue'
import Departments from '@/views/department/Departments.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

// router 객체를 생성하기 위해서는 vue-router에서 제공하는 createRouter 함수를 사용한다.
const router = createRouter({
  //라우터가 사용할 라우팅 모드 지정*HTMK 5모드)
  history: createWebHistory(import.meta.env.BASE_URL),
  //요청 경로에 따라 랜더링할 컴포넌트를 배열로 지정한다.
  routes: [
    { name: 'home', path: '/', component: Home},
    { name: 'departments', path: '/', component: Departments},
    //동적 라우트는 일정한 패턴의 URI 경로를 하나의 라우트에 연결하는 방법이다.
    { name: 'departments/no', path: '/departments/:no', component: DepartmentDetail},
    { name: 'departments/add', path: '/departments/add', component: AddDepartment},
    //404 라우트 
    { name: 'notfound', path: '/:paths(.*)*', component: NotFound},
  ],
})

export default router
