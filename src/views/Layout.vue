<template>
  <div class="h5-wrapper">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class="tabbar">
      <router-link to="/Article">面经</router-link>
      <router-link to="/Collect">收藏</router-link>
      <router-link to="/Like">喜欢</router-link>
      <router-link to="/User">我的</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LayoutPage",
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
    a.router-link-active{
      background-color: #333;
      color: rgb(154, 237, 154);
    }
  }
}
</style>