<template>
  <div class="recommend-contain">
    <div class="recommend-top">
      <img
        src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png"
        alt=""
      />
      <span>精品推荐</span>
    </div>
    <div class="recommend-content">
      <a href="#">比熊测试结构</a>
      <a href="#">比熊</a>
      <a href="#">比熊发你的设计费</a>
      <a href="#">比熊</a>
      <a href="#">比熊</a>
      <a href="#">比熊</a>
      <a href="#">比熊</a>
      <a href="#">比熊萨芬</a>
      <a href="#">比熊</a>
      <a href="#">按附件是否</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend"
};
</script>

<style scoped lang="less">
.recommend-contain {
  .recommend-top {
    padding: 5px 15px;
    background-color: #fbfbfd;
    display: flex;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .recommend-content {
    padding: 12px 23px;
    background-color: #f3f4f5;
    display: flex;
    flex-wrap: wrap;
    a {
      padding: 3px 10px;
      background-color: #fbfbfd;
      border-radius: 15px;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
}
</style>
