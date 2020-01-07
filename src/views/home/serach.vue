<template>
  <div class="search-contain">
    <a href="/search" class="search">
      <span class="iconfont left">&#xe621;</span>
      <span class="center">请输入搜索内容</span>
    </a>
    <span class="iconfont message">&#xe607;</span>
  </div>
</template>

<script>
export default {
  name: "serach"
};
</script>

<style scoped lang="less">
.search-contain {
  padding: 0 15px;
  display: flex;
  .search {
    width: 305px;
    height: 30px;
    border-radius: 30px;
    background-color: rgba(247, 247, 247, 0.9);
    display: flex;
    align-items: center;
    .left {
      color: #666;
      margin: 0 15px;
    }
  }
  .message {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
