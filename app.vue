<template>
  <div>
    <div>Post state: {{ resNewDataSuccess }}</div>
    <input type="text" v-model="val">
    <button @click="postData">Post data</button>
    <div>Get Data: {{ resNewData }}</div>
    <button @click="getData">Get data</button>
    <ClientOnly placeholder-tag="span">
      <template #fallback>
        <div>
          loading...123456
        </div>
      </template>
      <div>Hi. Good morning.</div>
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <nav>
      <NuxtLink to="/">index</NuxtLink>
      -----
      <NuxtLink to="/sub/123">sub 123</NuxtLink>
    </nav>
    <!-- <div>{{ component }}</div> -->
  </div>
</template>

<script setup lang="ts">
// import { getComponent } from './getComponent';
// let component = getComponent();
let resNewDataSuccess = ref()
let resNewData = ref()
let val = ref()
const postData = async () => {
  const { data: resDataSuccess } = await useFetch(
    '/api/test',
    {
      headers: {
        Authorization: 'ffffffffff',
      },
      method: 'post',
      body: {
        text: val.value
      }
    }
  )
  resNewDataSuccess = resDataSuccess
}
const getData = async () => {
  const { data: resData } = await useFetch('/api/test')
  resNewData = resData
}
</script>