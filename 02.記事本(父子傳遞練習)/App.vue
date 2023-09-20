<template>
  <section id="app">
    <AddListVue @Add="Add"></AddListVue>
    <NewListVue @del='del' :list='list'></NewListVue> 
    <AllDelVue @DelData='DelData' :list='list'></AllDelVue>
  </section>
</template>

<script>
import AddListVue from './components/AddList.vue'
import AllDelVue from './components/AllDel.vue'
import NewListVue from './components/NewList.vue'
export default {
  data () {
    return {
      list:[
        {id:1 ,name:'唱歌'},
        {id:2 ,name:'跳舞'},
        {id:3 ,name:'跑步'},
        {id:4 ,name:'喝茶'},
        {id:5 ,name:'散步'},
      ]
    }
  },
  methods:{
    Add(todoname){
      this.list.unshift({
        id:+new Date(),
        name:todoname
      })
    },
    DelData(){
      this.list = []
    },
    del(id){
      this.list = this.list.filter(index => index.id !== id) 
    }
  },
  components:{
    AddListVue,
    AllDelVue,
    NewListVue
  }
}
</script>

<style>

</style>
