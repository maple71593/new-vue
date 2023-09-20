<template>
  <div>
    <select :value='selectId' @change="change">
      <option value="101">台北</option>
      <option value="102">桃園</option>
      <option value="103">新竹</option>
      <option value="104">苗栗</option>
      <option value="105">台中</option>
      <option value="106">彰化</option>
      <option value="107">雲林</option>
      <option value="108">嘉義</option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    selectId:String
  },
  methods:{
    change(e){
      // console.log(e.target.value);
      this.$emit('change',e.target.value)
    }
  }
  
}
</script>

<style>
</style>