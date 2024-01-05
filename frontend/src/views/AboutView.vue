<script lang="ts">
const teaList = [
  { name: '홍차', price: 3000 },
  { name: '녹차', price: 3500 },
  { name: '루이보스차', price: 4000 },
  { name: '캐모마일차', price: 5000 }
]
// new Vue({
//   el: '#app',
// })
export default {
  name: 'AboutView',
  el: '#app',
  data() {
    return {
      title: '~',
      myTea: teaList,
      myText: 'hello',
      myNumber: 0,
      myNumberFunc: (num: number) => 100 + num,
      isClick: false,
      myArray: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    }
  },
  methods: {
    clickHandler() {
      // console.log('click')
      this.isClick = !this.isClick
    },
    showAlert() {
      alert('shift + enter')
    },
    sortData(list: string[]) {
      return list.sort((a, b) => (a.length < b.length ? -1 : 1))
    }
  }
}
</script>
<template>
  <main>
    <div @click="clickHandler">About View</div>
    <input v-model="title" type="text" />
  </main>
  <div id="app" v-bind:style="{ backgroundColor: 'red' }">
    <!-- 모든 데이터 -->
    {{ $data }}
  </div>
  <input v-model.lazy="myText" v-on:keyup.enter.shift="showAlert" />
  <p>입력 후 표시 {{ myText }}</p>

  <input v-model.number="myNumber" />
  <p>100 더해서 표시 {{ 100 + myNumber }}</p>
  <p>100 더해서 표시 {{ myNumberFunc(myNumber) }}</p>
  <hr />
  <p v-if="isClick">IS CLICKED!!!!!</p>
  <p v-else>IS NOT CLICKED!!!!!</p>
  <hr />
  <p v-for="tea in myTea" :key="tea.name">{{ tea.name }} - {{ tea.price }}</p>
  <hr />
  <ul>
    <li v-for="item in myArray">{{ item }}</li>
  </ul>
  <button @click="sortData(myArray)">소트</button>
</template>

<style></style>