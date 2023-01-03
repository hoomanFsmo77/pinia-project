<template>
  <v-container v-if="cartSt.cartLength===0">
    <v-row class="justify-center pt-10">
      <v-col cols="5" class="text-center">
        <v-icon class="text-lg" icon="mdi-basket" size="x-large"></v-icon>
        <h1 class="mb-5">Cart is Empty</h1>
        <router-link :to="{name:'product'}">
          <v-btn
              variant="outlined"
              color="info"
          >
            Products
          </v-btn>
        </router-link>

      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col cols="12">
        <v-table >
          <thead>
          <tr>
            <th class="text-left">
              Product
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left">
              Subtotal
            </th>
            <th class="text-left">
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in cart" :key="item.id">
            <Show :item="item"/>
          </tr>
          <hr class="v-divider">
          <tr>
            <td>
              <v-btn @click="clearCart" color="black">
                Clear Card
              </v-btn>
            </td>
            <td colspan="3" class="text-right">
              <span class="text-1">Total:{{finalPrice}}$</span>
            </td>
            <td>
              <v-btn color="green">
                Checkout
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Show from '../components/product/Show.vue'
import useCart from "../composables/useCart.js";
const {cartSt,cart,clearCart,finalPrice}=useCart()
</script>

<style lang="scss" >
.text-lg{
  font-size: 7rem!important;
}

th{
  font-size: 1rem!important;
}
.text-1{
  font-size: 1.1rem;
}
</style>