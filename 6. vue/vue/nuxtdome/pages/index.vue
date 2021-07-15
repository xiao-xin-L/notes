<template>
  <div>
    <Tutorial/>
    <myNuxt/>
    <NuxtLogo/>
  </div>
</template>

<script>
  export default {
    middleware(ctx) {
      console.log("pages middleware");
    },
    
    
  }
</script>
