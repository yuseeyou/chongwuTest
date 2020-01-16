<template>
  <div class="back-top-contain">
    <span class="iconfont" @click="backTop" v-show="btnFlag">&#xeaa6;</span>
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {
      btnFlag: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      that.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.btnFlag = that.scrollTop > 800;
    }
  }
};
</script>

<style scoped lang="less">
.back-top-contain {
  display: inline-block;
  position: fixed;
  right: 20px;
  bottom: 60px;
  .iconfont {
    font-size: 25px;
    color: #969696;
  }
}
</style>
