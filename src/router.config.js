import {createRouter,createWebHashHistory} from "vue-router";

const Home =()=>import('./pages/Home.vue')
const Product=()=>import('./pages/Product.vue')
const Task=()=>import('./pages/Task.vue')
const cart=()=>import('./pages/Cart.vue')

const routes=[
    {
        name:'home',
        path:'',
        component:Home
    },
    {
        name:'task',
        path:'/task',
        component:Task
    },
    {
        name:'product',
        path:'/product',
        component:Product
    },{
        name:'cart',
        path:'/cart',
        component:cart
    },
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router