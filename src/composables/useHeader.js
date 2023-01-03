import {cartStore} from "../store/cart.js";
import {ref,watch} from "vue";
import {useRoute} from 'vue-router'
export default ()=>{
    const tab=ref(null)
    const route=useRoute()
    const store=cartStore()
    watch(
        ()=>route.path,
        ()=>{
            tab.value=route.name.includes('home') ? 'one' :route.name.includes('task') ? 'two':route.name.includes('product') ? 'three' : 'four'
        }
    )

    return {tab,route,store}
}