<template>
  <v-row>
    <v-col cols="6">
      <div class="d-flex flex-row align-center">
        <v-form
            class="w-100"
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <div class="d-flex flex-row align-center">
            <v-text-field
                :rules="searchRules"
                v-model="title"
                label="Create Tasks:" variant="underlined"
            ></v-text-field>
          </div>
        </v-form>


        <v-btn :loading="createFlag" @click="createTask" color="primary" class="ml-1" >
          Create
        </v-btn>
      </div>
      <v-checkbox v-model="completed" label="Completed"></v-checkbox>
    </v-col>
  </v-row>
</template>

<script setup>
import useCreateTask from "../../composables/useCreateTask.js";
const {title,completed,createFlag,valid,form,createTask,searchRules}=useCreateTask()
</script>

<style scoped>

</style>