<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CssView.vue',
  el: '#app',
  props: {
    msg: String
  },
  template: '<p>안녕은 영어로 {{msg}}}</p>',
  created() {
    if (this.msg === undefined) {
      this.msg = 'hello'
    }
  },
  data() {
    return {
      isOK: false,
      dataArray: ['벚꽂', '산수유', '진달래', '개나리', '무궁화'],
      addItem: ''
    }
  },
  methods: {
    addList() {
      this.dataArray.push(this.addItem)
      this.addItem = ''
    },
    removeList() {
      const lastIndex = this.dataArray.length - 1
      this.dataArray.splice(lastIndex, 1)
    }
  }
})
</script>

<template>
  <div id="app">
    <!--    <label><input v-model="isOK" type="checkbox" />변경</label>-->
    <!--    <transition>-->
    <!--      <p v-if="isOK">표시/비표시의 애니메이션</p>-->
    <!--    </transition>-->
    <transition-group>
      <li v-for="item in dataArray" v-bind:key="item">{{ item }}</li>
    </transition-group>
    <label><input v-model="addItem" placeholder="추가할 리스트" /></label>
    <button @click="addList">추가</button>
    <button @click="removeList">맨 뒤 1개 삭제</button>
  </div>
</template>

<style scoped>
/* 나타나고 있을 때와 사라지고 있을 때 0.5초 */
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}

/* 나타나기 전의 상태와 사라진 후의 상태는 투명도 0, 오른쪽으로 50 이동 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
  /* transform: translateY(20px); */
}
</style>