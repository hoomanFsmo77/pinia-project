<template>
  <div>
    <v-icon @click="deleteTask" icon="mdi-delete"></v-icon>
    <Preloader  :loading="loading"  right="5px" bottom="-9px" o-width="25px" o-height="25px" i-width="5px" i-height="40px"/>
  </div>
</template>

<script setup>
import Preloader from "../preloader.vue";
import useDeleteTask from "../../composables/useDeleteTask.js";
let props=defineProps(['task'])
const {deleteTask,loading,store}=useDeleteTask(props)

</script>

<style scoped>

</style>