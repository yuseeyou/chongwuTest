<template>
  <div class="menus-item-contain">
    <div class="menu-item">
      <div class="item-top">
        <p class="title">我的订单</p>
        <p class="desc">查看订单 ></p>
      </div>
      <div class="item-content">
        <p class="content-desc">
          <span class="iconfont">&#xe505;</span><span>待付款</span>
        </p>
        <p class="content-desc">
          <span class="iconfont">&#xe668;</span><span>待收货</span>
        </p>
        <p class="content-desc">
          <span class="iconfont">&#xe615;</span><span>待评价</span>
        </p>
        <p class="content-desc">
          <span class="iconfont">&#xe5ec;</span><span>售后</span>
        </p>
      </div>
    </div>
    <div class="menu-item">
      <div class="item-top">
        <p class="title">我的钱包</p>
        <p class="desc">查看钱包 ></p>
      </div>
      <div class="item-content">
        <p class="content-desc">
          <span class="colored">1</span><span>优惠卷</span>
        </p>
        <p class="content-desc">
          <span class="colored">1</span><span>e宠币</span>
        </p>
        <p class="content-desc">
          <span class="colored">1</span><span>余额</span>
        </p>
        <p class="content-desc">
          <span class="colored">1</span><span>红包</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem"
};
</script>

<style scoped lang="less">
.menus-item-contain {
  background-color: #fff;
  padding: 30px 10px;
  .menu-item {
    box-shadow: 1px 2px 25px 0 rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 25px;
    .item-top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 15px;
        font-weight: bold;
      }
      .desc {
        font-size: 12px;
        color: #969696;
      }
    }
    .item-content {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .content-desc {
        flex: 1;
        span {
          display: block;
          text-align: center;
          &.iconfont {
            font-size: 22px;
          }
          &.colored {
            font-size: 15px;
            color: #d63031;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
