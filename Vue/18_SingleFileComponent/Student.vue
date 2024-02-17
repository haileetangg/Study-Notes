<template>
  <div>
    <h1 class="demo">hello,我是{{name}}</h1>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return {
      name:'hailee'
    }
  }
}
</script>

<style>
  .demo{
    color:'hotpink'
  }
</style>