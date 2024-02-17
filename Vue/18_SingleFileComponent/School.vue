<template>
  <div>
    <h1 class="demo">欢迎来到{{name}}大学学习</h1>
  </div>
</template>

<script>
export default {
  name:'School',
  data(){
    return {
      name:'西华'
    }
  }
}
</script>

<style>
  .demo{
    color:'hotpink'
  }
</style>