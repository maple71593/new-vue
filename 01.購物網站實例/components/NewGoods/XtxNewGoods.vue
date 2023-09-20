<template>
  <!-- 新鮮好物 -->
    <div class="goods wrapper">
      <div class="title">
        <div class="left">
          <h3>新鮮好物</h3>
          <p>新鮮出爐 品質靠譜</p>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="bd">
        <ul>
          <BaseGoodsItem v-for="(item,index) in 4" :key="index"></BaseGoodsItem>
        </ul>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    /* 新鲜好物 */
.goods .bd ul {
  display: flex;
  justify-content: space-between;
}

</style>