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
        <RouterLink to="/css">Animation</RouterLink>
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
  height: 800px;
  overflow: scroll;
  border: 1px solid red;
  margin: 10px;
  padding: 10px;

  ::selection {
    /* 드래그 스타일 */
    background: red;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>