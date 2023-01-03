<template>
  <v-row v-if="fetchFlag" >
    <v-col cols="4" v-for="task in tasks">
      <v-card :class="{'bg-brown-lighten-5 ':task.completed}">
        <template  v-slot:text>
          <div class="d-flex flex-row justify-space-between align-center">
            <span :class="{'text-decoration-line-through':task.completed}">{{task.title}}</span>
            <div class="d-flex">
              <Update :task="task"/>
              <Delete :task="task"/>
            </div>
          </div>
        </template>
      </v-card>
    </v-col>

  </v-row>

</template>
<script setup>
import {computed,onMounted} from "vue";
import Update from "./Update.vue";
import Delete from './Delete.vue'
import {taskStore} from "../../store/tasks.js";
/////////////////////////////////////
const store=taskStore()
const tasks=computed(()=>store.tasks)
const fetchFlag=computed(()=>store.fetchFlag)


onMounted(()=>{
  store.taskAction()
})



</script>

<style scoped>

</style>