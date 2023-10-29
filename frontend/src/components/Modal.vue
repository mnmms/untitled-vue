<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  data() {
    return {
      isOpen: false
    }
  }
})
</script>

<template class="modal-container">
  <div class="black-bg">
    <div class="white-bg">
      <h4>title</h4>
      <p>description</p>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  width: 100%;
  height: 100%;
  position: absolute;
}

.black-bg {
  background: #222222;
}

.white-bg {
  background: rgba(255, 255, 255, 0.5);
}
</style>