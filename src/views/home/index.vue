<template>
  <div class="home-contain">
    <div :class="{ 'top-contain': true, topStyle1, topStyle2 }">
      <search />
      <van-tabs v-model="active" scrollspy :border="false">
        <van-tab
          v-for="item in menus"
          :title="item"
          :class="{ special: true }"
        />
      </van-tabs>
    </div>
    <swipe :images="images" />
    <tar-bar />
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import Swipe from "@/components/Swipe";
import Search from "./serach";
import { HomeMenus, swipeImages } from "@/constants/index";

export default {
  name: "home",
  components: {
    Swipe,
    TarBar,
    Search
  },
  data() {
    return {
      active: 0,
      images: swipeImages,
      menus: HomeMenus,
      topStyle1: true, // 顶部两种样式之一
      topStyle2: false // 顶部两种样式之一
    };
  },
  mounted() {
    // 监听首页滚动
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.topStyle1 = false;
        this.topStyle2 = true;
      } else {
        this.topStyle1 = true;
        this.topStyle2 = false;
      }
    }
  }
};
</script>

<style lang="less">
.home-contain {
  .swipe-contain {
    width: 100%;
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
  .top-contain {
    padding-top: 25px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .van-tabs__line {
    display: none;
  }
  .van-tab:first-child {
    .van-tab__text {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .topStyle1 {
    .van-tabs__nav {
      background-color: transparent;
      .van-tab__text {
        color: #fff;
      }
    }
  }
  .topStyle2 {
    background-color: #fff;
    box-shadow: -2px 0 24px 0 rgba(0, 0, 0, 0.1);
    .van-tabs__nav {
      .van-tab__text {
        color: #000;
      }
    }
  }
}
</style>
