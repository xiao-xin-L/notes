<template>
  <div>
    {{msg}}
    
    <div>
      <nuxt-link to="/category/goods">goods</nuxt-link>
      <nuxt-link to="/category/id">id</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: "_category.vue",
    data(){
      return {
        msg: "这是动态路由组件--category"
      }
    }
  }
</script>

<style scoped>

</style>