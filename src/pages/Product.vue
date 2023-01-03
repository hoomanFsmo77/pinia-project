<template>
  <v-container class="pt-10">
    <v-row>
      <v-col v-for="product in products" cols="3">
        <v-card>
          <v-img
              cover
              height="250"
              :src="product.img"
          ></v-img>
          <v-card-item>
            <v-card-title>
              {{product.title}}
            </v-card-title>
            <v-card-text class="pl-0">
              {{product.description}}
            </v-card-text>
          </v-card-item>
          <v-card-actions class="d-flex justify-space-between align-center">
            <v-btn
                @click="addToCart(product.id)"
                variant="outlined"
                color="primary"
            >
              Add To Cart
            </v-btn>
            <span>{{product.price}}$</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import useProduct from "../composables/useProduct.js";
const {products,addToCart}=useProduct()
</script>

<style scoped>

</style>