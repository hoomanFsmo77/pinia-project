import {ref} from "vue";
import {taskStore} from "../store/tasks.js";
export default (props)=>{
    const store=taskStore()
    const loading=ref(false)
    const deleteTask = async () => {
        loading.value=true
        await store.deleteAction({id:props.task.id,loading:loading})
    }
    return {store,loading,deleteTask}
}