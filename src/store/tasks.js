import {defineStore} from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const taskStore=defineStore('task',{
    state:()=>{
        return{
            tasks:[],
            fetchFlag:false,
            createFlag:false,
        }
    },
    actions:{
        async taskAction(){
            try {
                let tasks=await axios.get('https://jsonplaceholder.typicode.com/todos')
                this.tasks=tasks.data
                this.fetchFlag=true
            }catch (e) {
                this.fetchFlag=false
                await Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            }
        },
        async updateAction(payload){
            try {
                let updateTask=await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.id}`,{
                    completed:!payload.completed
                })
                this.tasks.filter(task=>task.id===updateTask.data.id)[0].completed=updateTask.data.completed
                payload.loading.value=false
                await Swal.fire({
                    title: "Task Updated",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });

            }catch (e) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            }
        },
        async deleteAction(payload){
            try {
                let deleteTask=await axios.delete(`https://jsonplaceholder.typicode.com/todos/${payload.id}`)
                payload.loading.value=false
                this.tasks.splice(this.tasks.findIndex(task=>task.id===payload.id),1)
                await Swal.fire({
                    title: "Task Deleted",
                    icon: "warning",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
            }catch (e) {
                payload.loading.value=false
                await Swal.fire({
                    title: "Something went wrong!",
                    icon: "error",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
            }
        },
        async filterAction(payload){
            this.fetchFlag=false
            try {
                let filter=await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${payload}`)
                this.tasks=filter.data
                this.fetchFlag=true
            }catch (e) {
                this.fetchFlag=false
            }

        },
        async createAction(payload){
            this.createFlag=true
            try {
                let create=await axios.post('https://jsonplaceholder.typicode.com/todos',{
                    title:payload.title.value,
                    completed:payload.completed.value
                })
                this.tasks.unshift({
                    id:create.data.id,
                    title:create.data.title,
                    completed:create.data.completed
                })
                this.createFlag=false
                await Swal.fire({
                    icon: 'success',
                    title: 'Task Added!',
                })
                payload.title.value=''
                payload.completed.value=''

            }catch (e) {
                this.createFlag=false
                await Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There is a problem, please try again',
                })
            }
        }
    }
})