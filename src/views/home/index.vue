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
    <swipe :images="images" class="main-swipe" />
    <Meuns />
    <new-year />
    <new-user />
    <recommend :url="require('@/assets/recommend/store.gif')">
      <div class="store">
        <div class="store-left">
          <a href=""><img src="@/assets/recommend/left1.png" alt=""/></a>
          <a href=""><img src="@/assets/recommend/left2.png" alt=""/></a>
        </div>
        <div class="store-right">
          <a href=""><img src="@/assets/recommend/right1.png" alt=""/></a>
          <a href=""><img src="@/assets/recommend/right2.png" alt=""/></a>
        </div>
      </div>
    </recommend>
    <recommend :url="require('@/assets/recommend/hot.gif')">
      <div class="hot">
        <swipe-local :images="hotImages" />
      </div>
    </recommend>
    <recommend :url="require('@/assets/recommend/new.gif')">
      <div class="hot">
        <swipe-local :images="newImages" />
      </div>
    </recommend>
    <goods />
    <under-line />
    <tar-bar />
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import Swipe from "@/components/Swipe";
import SwipeLocal from "@/components/SwipeLocal";
import Meuns from "./meuns";
import Search from "./serach";
import NewYear from "./newYear";
import NewUser from "./newUser";
import Recommend from "./recommend";
import Goods from "@/components/goods";
import UnderLine from "@/components/underLine";
import {
  HomeMenus,
  swipeImages,
  hotImages,
  newImages
} from "@/constants/index";

export default {
  name: "home",
  components: {
    Swipe,
    TarBar,
    Search,
    Meuns,
    NewYear,
    NewUser,
    Recommend,
    SwipeLocal,
    Goods,
    UnderLine
  },
  data() {
    return {
      active: 0,
      images: swipeImages,
      menus: HomeMenus,
      topStyle1: true, // 顶部两种样式之一
      topStyle2: false, // 顶部两种样式之一
      hotImages: hotImages,
      newImages: newImages
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
  padding-bottom: 53px;
  // 公共swipe样式
  .swipe-contain {
    width: 100%;
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
  // 首页主swipe样式
  .main-swipe {
    .van-swipe__indicators {
      bottom: 35px;
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
  .store {
    a,
    img {
      display: flex;
      width: 100%;
    }
    display: flex;
    .store-left,
    .store-right {
      flex: 1;
    }
  }
}
</style>
