<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <hr />
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>

<style scoped></style>