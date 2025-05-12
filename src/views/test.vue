<template>
  <div class="large_header">
    <i class="iconfont icon-fengche"></i>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const rootEl = ref(document.documentElement)
onMounted(async() => {
  console.log(rootEl.value.scrollTop)
})
</script>

<!-- <script>
export default {
  async mounted() {
    this.el = document.documentElement
    console.log(this.el)
  }
}
</script> -->