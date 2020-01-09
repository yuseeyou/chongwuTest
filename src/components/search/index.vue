<template>
  <div class="search-main-contain">
    <div class="search-top">
      <div class="left" @click="backTo"><span></span></div>
      <div class="center">
        <van-search placeholder="搜索你喜欢的宝贝" v-model="searchValue" />
      </div>
      <div class="right">
        <a href="javascript:;">搜索</a>
      </div>
    </div>
    <recommend />
    <recent-search />
    <tar-bar />
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import Recommend from "./recommend";
import RecentSearch from "./recentSearch";
export default {
  name: "index",
  components: {
    RecentSearch,
    Recommend,
    TarBar
  },
  data() {
    return {
      searchValue: ""
    };
  },
  mounted() {},
  methods: {
    backTo() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
.search-main-contain {
  height: 100vh;
  background-color: #f3f4f5;
  .search-top {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      width: 30px;
      height: 54px;
      padding-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: block;
        width: 16px;
        height: 16px;
        transform: rotateZ(45deg);
        border-left: 1px solid #999;
        border-bottom: 1px solid #999;
      }
    }
    .center {
      flex: 1;
    }
    .right {
      a {
        padding-right: 10px;
        color: #333;
      }
    }
  }
}
</style>
