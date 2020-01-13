<template>
  <div class="sort-contain">
    <div class="sort-nav">
      <span class="title">分类</span>
      <span class="iconfont">&#xe621;</span>
    </div>
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <div class="select-contain">
          <p class="select-title">{{ items[activeIndex].text }}</p>
          <div class="select-content">
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg?x-oss-process=style/fill&$1=300&$2=300"
                />
                <p>体内驱虫</p>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300"
                />
                <p>体内驱虫</p>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300"
                />
                <p>体内驱虫</p>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg?x-oss-process=style/fill&$1=300&$2=300"
                />
                <p>体内驱虫</p>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </template>
    </van-tree-select>
    <tar-bar></tar-bar>
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import { sortItem } from "@/constants/index";

export default {
  name: "index",
  components: {
    TarBar
  },
  data() {
    return {
      activeIndex: 0,
      items: sortItem
    };
  }
};
</script>

<style lang="less">
.sort-contain {
  height: 100vh;
  padding-bottom: 53px;
  box-sizing: border-box;
  .sort-nav {
    position: relative;
    width: 100%;
    height: 40px;
    border-bottom: 5px solid #f3f4f5;
    display: flex;
    justify-content: center;
    align-items: center;
    span:first-child {
      font-size: 15px;
      color: #333;
    }
    span:last-child {
      position: absolute;
      right: 10px;
      font-size: 18px;
    }
  }
  .van-sidebar {
    .van-sidebar-item--select {
      border-color: #00b894;
      color: #00b894;
      &:hover {
        color: #00b894;
        border-color: #00b894;
      }
    }
  }
  .van-tree-select__nav {
    -webkit-box-flex: initial;
    -webkit-flex: initial;
    flex: initial;
  }
  .select-contain {
    padding: 10px;
    .select-title {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
