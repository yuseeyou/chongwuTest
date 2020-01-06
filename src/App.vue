<template>
  <div id="app">
   <router-view></router-view>
      <van-tabbar route active-color="#00b894">
          <van-tabbar-item replace to="/home"><p class="iconfont">&#xe68e;</p>精选</van-tabbar-item>
          <van-tabbar-item replace to="/sort"><p class="iconfont">&#xe502;</p>分类</van-tabbar-item>
          <van-tabbar-item replace to="/book"><p class="iconfont">&#xe654;</p>小萌书</van-tabbar-item>
          <van-tabbar-item replace to="/cart"><p class="iconfont">&#xe501;</p>购物车</van-tabbar-item>
          <van-tabbar-item replace to="/user"><p class="iconfont">&#xe650;</p>我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style lang="less" scoped>
    @import "./assets/iconfont/iconfont.css";
    p.iconfont{
        text-align: center;
        font-size: 22px;
        padding-bottom: 5px;
    }
</style>