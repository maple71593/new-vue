<template>
      <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{list.length}} </strong></span>
      <!-- 清空 -->
      <button @click="AllDel" class="clear-completed">
        清空任務
      </button>
    </footer>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    props:{
        list:Array
    },
    methods:{
        AllDel(){
            this.$emit('DelData',)
        }
    }
}
</script>

<style>

</style>