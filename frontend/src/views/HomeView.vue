<script lang="ts">
import { reactive } from 'vue'
import instance from '../apis'

export default {
  name: 'HomeView',
  data() {
    const state = reactive({
      data: []
    })

    // instance.get('/api/memos').then((res: any) => {
    //   state.data = res.data
    // })

    const onClick = () => {}

    const onChange = (e: any) => {
      console.log(e.target.value)
    }

    return {
      state,
      products: [
        { name: '역삼동 원룸', price: 70, counts: 0 },
        { name: '천호동 원룸', price: 60, counts: 0 },
        { name: '마포구 원룸', price: 50, counts: 0 }
      ],
      onClick,
      onChange
    }
  },
  methods: {
    increase(idx: number) {
      this.products[idx].counts++
    }
  }
}
</script>

<template>
  <!--  <div>-->
  <!--    <input @change="onChange" />-->
  <!--    <button @click="onClick">추가</button>-->
  <!--  </div>-->
  <ul>
    <!--    <li v-for="(item, idx) in state.data" :key="idx">-->
    <!--      {{ item }}-->
    <!--    </li>-->
    <li
      v-for="(item, idx) in products"
      :key="idx"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <h4>{{ item.name }}</h4>
      <p style="background: aquamarine; padding: 3px; border-radius: 10%">{{ item.price }}만원</p>
      <button @click="() => increase(idx)">허위매물 신고하기</button>
      <span>신고 수 {{ item.counts }}</span>
    </li>
  </ul>
</template>