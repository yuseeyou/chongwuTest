<template>
  <div class="cart-contain">
    <nav-bar>购物车</nav-bar>
    <div class="cart-content">
      <van-checkbox-group
        v-model="result"
        ref="checkboxGroup"
        checked-color="#41C856"
      >
        <div class="goods-item">
          <van-checkbox name="a" />
          <van-card
            price="2.00"
            title="商品标题非把开发开放你哈空间分布数据备份和骄傲u看到回复是否把课本上的发给你开发功能丰富的尽快改变环境的发表"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="footer">
              <van-stepper v-model="number" min="1" max="100" integer />
            </div>
          </van-card>
        </div>
        <div class="goods-item">
          <van-checkbox name="a" />
          <van-card
            price="2.00"
            title="商品标题非把开发开放你哈空间分布数据备份和骄傲u看到回复是否把课本上的发给你开发功能丰富的尽快改变环境的发表"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="footer">
              <van-stepper v-model="number" min="1" max="100" integer />
            </div>
          </van-card>
        </div>
      </van-checkbox-group>
    </div>
    <div class="cart-total">
      <van-checkbox
        v-model="isAllChecked"
        @click="toggleCheckAll"
        checked-color="#41C856"
        >总额：</van-checkbox
      >
      <span class="total-price">￥0.00</span>
      <div :class="{ 'pay-btn': true, 'btn-checked': result.length !== 0 }">
        <p class="desc">
          去结算<span class="number">({{ result.length }})</span>
        </p>
      </div>
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
      // 选中商品的数组
      result: [],
      // 是否全选中
      isAllChecked: false,
      // 某一个商品的数量
      number: 0
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
        position: relative;
        .van-card__header {
          padding-bottom: 10px;
          border-bottom: 1px solid #ebebeb;
        }
        .van-card__footer {
          position: absolute;
          right: 20px;
          bottom: 20px;
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
    padding-left: 10px;
    .total-price {
      color: #d63031;
      font-weight: bold;
    }
    /*结算按钮的默认样式*/
    .pay-btn {
      position: absolute;
      right: 30px;
      width: 96px;
      height: 35px;
      border-radius: 30px;
      background-color: #bdbdbd;
      text-align: center;
      p {
        line-height: 35px;
        color: #fff;
      }
    }
    /*当选中物品不为空时，结算按钮的样式*/
    .btn-checked {
      background-color: #41c856;
    }
  }
}
</style>
