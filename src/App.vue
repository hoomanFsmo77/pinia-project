<template>
  <Header/>
  <main class="position-relative " >
    <router-view v-slot="{Component}">
      <keep-alive >
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </main>
</template>

<script setup>
/////////// style
import './style/App.scss';
//////////// components
import Header from "./components/Header.vue";



</script>
