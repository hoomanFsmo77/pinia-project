<template>
  <v-row>
    <v-col cols="2">
      <v-select
          @update:modelValue="applyFilter($event)"
          label="Filter Tasks:"
          :items="[5, 10, 20, 50,199]"
          variant="underlined"
      ></v-select>
    </v-col>
  </v-row>

</template>

<script setup>
import {taskStore} from "../../store/tasks.js";
////////////////
const store=taskStore()
const applyFilter = e => {
  store.filterAction(e)
}


</script>

