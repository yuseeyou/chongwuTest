<template>
  <div class="nav-bar-contain">
    <div class="nav-top">
      <div class="arrow">
        <span class="arrow-span" @click="toBack"></span>
      </div>
      <span class="title">
        <slot>默认标题 </slot>
      </span>
      <span class="iconfont down" @click="toggleDown">&#xe64b;</span>
    </div>
    <transition
      enter-active-class="animated bounceInDown"
      leave-active-class="animated fadeOut"
      :druation="{ enter: 200, leave: 100 }"
    >
      <div class="nav-bottom" v-show="toggleFlag">
        <div class="content-item">
          <a href="/home">
            <span class="iconfont">&#xe60d;</span>
            <span class="text">首页</span>
          </a>
        </div>
        <div class="content-item">
          <a href="/sort">
            <span class="iconfont">&#xe501;</span>
            <span class="text">商品分类</span>
          </a>
        </div>
        <div class="content-item">
          <a href="/cart">
            <span class="iconfont">&#xe622;</span>
            <span class="text">购物车</span></a
          >
        </div>
        <div class="content-item">
          <a href="/user">
            <span class="iconfont">&#xe684;</span>
            <span class="text">我的</span></a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "@/styles/animate.css";
export default {
  name: "index",
  data() {
    return {
      toggleFlag: false
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    toggleDown() {
      this.toggleFlag = !this.toggleFlag;
    }
  }
};
</script>

<style scoped lang="less">
.nav-bar-contain {
  background-color: #fff;
  .nav-top {
    height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    .arrow {
      flex: 1;
      text-align: center;
      padding-left: 10px;
      .arrow-span {
        display: block;
        width: 13px;
        height: 13px;
        border-left: 1px solid #000;
        border-top: 1px solid #000;
        transform: rotateZ(-45deg);
      }
    }
    .title {
      flex: 3;
      font-size: 18px;
      color: #333;
    }
    .down {
      flex: 1;
      text-align: right;
      font-size: 20px;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }
  .nav-bottom {
    display: flex;
    align-items: center;
    transition: 1s linear;
    .content-item {
      a {
        display: block;
      }
      flex: 1;
      text-align: center;
      span {
        display: block;
        &.iconfont {
          font-size: 24px;
          color: #666;
        }
      }
    }
  }
}
</style>
