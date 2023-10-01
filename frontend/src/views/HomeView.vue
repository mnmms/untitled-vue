<script lang="ts">
import { reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    const state = reactive({
      data: []
    })

    axios.get(`/api/memos`).then((res: any) => console.log('fe res : ', res.data))

    const onClick = () => {}

    const onChange = (e: any) => {
      console.log(e.target.value)
    }

    return {
      state,
      onClick,
      onChange
    }
  }
}
</script>

<template>
  <div>
    <input @change="onChange" />
    <button @click="onClick">추가</button>
  </div>
  <ul>
    <li v-for="(item, idx) in state.data" :key="idx">
      {{ item }}
    </li>
  </ul>
</template>