<template>
  <header class="header">
      <h1>小黑记事本</h1>
      <input @keyup.enter="Add" v-model="todoname" placeholder="請輸入任務" class="new-todo" />
      <button @click="Add" class="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data(){
        return {
            todoname:[]
        }
    },
    props:{
        list:Array
    },
    methods:{
        Add(){
            if(this.todoname === [] || this.todoname === Number){
                alert('不能喔')
                return
            }
            this.$emit('Add',this.todoname)
            this.todoname=''
        }
    }
}
</script>

<style>

</style>