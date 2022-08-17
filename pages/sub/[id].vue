<script lang="tsx" setup>
definePageMeta({
  keepalive: true
})
const visible = ref(false)

setTimeout(() => {
  visible.value = true
}, 200)

const start = () => {
  return <div>
    start
  </div>
}

const end = () => {
  console.log(window)
  return <div>
    end
  </div>
}

const temp = () => {
  return <div>
    <hello-world />
    {start()}
    <h1>Level 01/Page 01</h1>
    <input type="text" />
    {end()}
  </div>
}
</script>

<template>
  <temp v-if="visible" />
  <!-- <div v-if="visible">
    <h1>Level 01/Page 01</h1>
    <input type="text" />
  </div> -->
</template>

<style scoped>
</style>
