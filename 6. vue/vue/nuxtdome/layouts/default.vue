<template>
  <div>
    <nuxt name="top"/>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <nuxt-link to="/category">category</nuxt-link>
    <Nuxt/>
  </div>
</template>

<script>
  export default {
    name: "default.vue"
  }
</script>

<style scoped>

</style>