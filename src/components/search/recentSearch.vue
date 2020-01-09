<template>
  <div class="recent-search-contain">
    <div class="recent-top">
      <img
        src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png"
        alt=""
      />
      <span>最近搜索</span>
    </div>
    <div class="recent-content">
      <div class="recent-item-contain">
        <a href="javascript:;" class="recent-item">宠物狗粮</a>
        <a href="javascript:;" class="recent-item">宠物狗粮</a>
        <a href="javascript:;" class="recent-item">宠物狗粮</a>
      </div>
      <div class="clear-search">清空搜索历史</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recentSearch"
};
</script>

<style scoped lang="less">
.recent-search-contain {
  .recent-top {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    background-color: #fbfbfd;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .recent-content {
    .clear-search {
      width: 60%;
      margin: 40px auto 60px;
      line-height: 40px;
      font-size: 15px;
      border: 1px solid #777;
      text-align: center;
      border-radius: 5px;
    }
    .recent-item-contain {
      padding-left: 20px;
      background-color: #ffffff;
      .recent-item {
        display: block;
        height: 41px;
        line-height: 41px;
        color: #333333;
        border-bottom: 1px solid #d7d7d7;
        font-size: 12px;
      }
      .recent-item:last-child {
        border: none;
      }
    }
  }
}
</style>
