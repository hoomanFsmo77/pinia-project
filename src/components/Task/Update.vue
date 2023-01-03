<template>
  <div>
    <v-icon @click="updateTodo(task.id,task.completed)" v-if="!task.completed" icon="mdi-check"></v-icon>
    <v-icon @click="updateTodo(task.id,task.completed)" v-else icon="mdi-check-all"></v-icon>
    <Preloader  :loading="loading"  right="5px" bottom="-9px" o-width="25px" o-height="25px" i-width="5px" i-height="40px"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Preloader from "../preloader.vue";
import {taskStore} from "../../store/tasks.js";
let props=defineProps(['task'])
const store=taskStore()
const loading=ref(false)
const updateTodo = (id,completed) => {
  loading.value=true
  store.updateAction({id,completed,loading})
}

</script>

<style scoped>

</style>