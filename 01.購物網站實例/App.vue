<template>
  <div class="app">
    <XtxShortCut></XtxShortCut>
    <XtxHeaderNav></XtxHeaderNav>
    <XtxBanner></XtxBanner>
    <XtxNewGoods></XtxNewGoods>
    <XtxHotBrand></XtxHotBrand>
    <XtxTopic></XtxTopic>
    <XtxFooter></XtxFooter>
  </div>
</template>

<script>
import XtxShortCut from './components/XtxShortCut.vue'
import XtxHeaderNav from './components/XtxHeaderNav.vue'
import XtxBanner from './components/XtxBanner.vue'
import XtxNewGoods from './components/NewGoods/XtxNewGoods.vue'
import XtxHotBrand from './components/HotBrand/XtxHotBrand.vue'
import XtxTopic from './components/Topic/XtxTopic.vue'
import XtxFooter from './components/XtxFooter.vue'
export default {
  components:{
    XtxShortCut,
    XtxHeaderNav,
    XtxBanner,
    XtxNewGoods,
    XtxHotBrand,
    XtxTopic,
    XtxFooter,
  }
}
</script>

<style>

</style>