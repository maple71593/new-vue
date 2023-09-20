<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
export default {
  // mounted(){
  //   this.$refs.inp.focus()
  // }

  // 局部註冊指令
  directives:{
    // 指令名:指令配置項
    focus:{
      inserted(el){
        el.focus()
      }
    }
  }

  }

</script>

<style>

</style>