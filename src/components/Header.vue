<template>
  <v-card rounded="0">
    <v-tabs
        v-model="tab"
        bg-color="primary"
    >
      <div class="d-flex justify-space-between align-center w-100 flex-row">
        <div>
          <router-link :to="{name:'home'}">
            <v-tab value="one">
              Home
            </v-tab>
          </router-link>
          <router-link :to="{name:'task'}">
            <v-tab value="two">
              Tasks
            </v-tab>
          </router-link>
          <router-link :to="{name:'product'}">
            <v-tab value="three">
              product
            </v-tab>
          </router-link>
        </div>
        <router-link :to="{name:'cart'}">
          <v-tab value="four">
            <v-badge :content="store.cartLength">
              <v-icon icon="mdi-basket" size="x-large"></v-icon>
            </v-badge>
          </v-tab>
        </router-link>

      </div>
    </v-tabs>
  </v-card>
</template>

<script setup>
import useHeader from "../composables/useHeader.js";
const {store,tab}=useHeader()

</script>

<style scoped>
a{
  color: #fff!important;
}
</style>