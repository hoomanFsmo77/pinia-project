<template>
  <td class="py-5">
    <div class="d-flex  ">
      <img width="100" :src="item.img" alt="">
      <div class="ml-5">
        <h2 class="text-grey-darken-1">{{item.title}}</h2>
        <p class="text-1 text-grey-darken-3 mt-2">{{item.description}}</p>
      </div>
    </div>
  </td>
  <td >
    <span class="text-1">{{item.price}}$</span>
  </td>
  <td>
    <v-btn @click="increase" icon="mdi-plus" size="small" color="primary"></v-btn>
    <span class="mx-3">{{count}}</span>
    <v-btn @click="decrease" icon="mdi-minus" size="small" color="primary"></v-btn>
  </td>
  <td>
    <span class="text-1">{{count * item.price}}$</span>
  </td>
  <td>
    <v-btn @click="deleteProduct" color="red">
      Delete
    </v-btn>
  </td>
</template>

<script setup>
let props=defineProps(['item'])
import useShowProduct from "../../composables/useShowProduct.js";
const {store,count,increase,deleteProduct,decrease}=useShowProduct(props)

</script>

<style scoped>

</style>