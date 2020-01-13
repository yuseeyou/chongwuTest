<template>
  <div class="cart-contain">
    <nav-bar>购物车</nav-bar>
    <div class="cart-content">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="goods-item">
          <van-checkbox name="a" />
          <van-card
            num="2"
            price="2.00"
            title="商品标题非把开发开放你哈空间分布数据备份和骄傲u看到回复是否把课本上的发给你开发功能丰富的尽快改变环境的发表"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          />
        </div>
        <div class="goods-item">
          <van-checkbox name="b" />
          <van-card
            num="2"
            price="2.00"
            title="商品标题非把开发开放你哈空间分布数据备份和骄傲u看到回复是否把课本上的发给你开发功能丰富的尽快改变环境的发表"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          />
        </div>
      </van-checkbox-group>
    </div>
    <div class="cart-total">
      <van-checkbox v-model="isAllChecked" @click="toggleCheckAll"
        >总额：</van-checkbox
      >
    </div>
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import NavBar from "@/components/navBar";
export default {
  name: "index",
  components: {
    TarBar,
    NavBar
  },
  data() {
    return {
      // 选中元素的数组
      result: [],
      // 是否全选中
      isAllChecked: false
    };
  },
  methods: {
    toggleCheckAll() {
      this.$refs.checkboxGroup.toggleAll(!this.isAllChecked);
    }
  },
  watch: {
    result: function(newValue) {
      this.isAllChecked = newValue.length === 2;
    }
  }
};
</script>

<style lang="less">
.cart-contain {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .nav-top {
    margin-bottom: 10px;
  }
  .cart-content {
    .goods-item {
      background-color: #fff;
      display: flex;
      .van-card {
        background-color: #fff;
        padding-left: 0;
        flex: 7;
        .van-card__header {
          padding-bottom: 10px;
          border-bottom: 1px solid #ebebeb;
        }
      }
      .van-checkbox {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:last-child {
        .van-card__header {
          border: none;
        }
      }
    }
  }
  .cart-total {
    height: 60px;
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
