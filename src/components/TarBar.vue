<template>
    <div class="tab-bar-contain">
        <van-tabbar route active-color="#00b894">
            <van-tabbar-item to="/home"><p class="iconfont">&#xe68e;</p>精选</van-tabbar-item>
            <van-tabbar-item to="/sort"><p class="iconfont">&#xe502;</p>分类</van-tabbar-item>
            <van-tabbar-item to="/book"><p class="iconfont">&#xe654;</p>小萌书</van-tabbar-item>
            <van-tabbar-item to="/cart"><p class="iconfont">&#xe501;</p>购物车</van-tabbar-item>
            <van-tabbar-item to="/user"><p class="iconfont">&#xe650;</p>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "TarBar"
    }
</script>

<style scoped lang="less">
    @import "../assets/iconfont/iconfont.css";
    .tab-bar-contain{
        .iconfont{
            text-align: center;
            font-size: 22px;
            padding-bottom: 5px;
        }
    }
</style>