<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import Modal from '@/components/Modal.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<template>
  <Modal />
  <div class="components-container">
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
  </div>
</template>

<style scoped>
.components-container {
  min-width: 500px;
  height: 300px;
  overflow: scroll;
  border: 1px solid #eee;
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>