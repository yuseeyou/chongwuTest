<template>
  <div :class="{ 'goods-details-contain': true, toggleChecked: toggleFlag }">
    <nav-bar @toggleChecked="toggleChecked">
      <van-tabs v-model="active">
        <van-tab title="商品">
          <swipe :images="images" :autoplay="0" @swipeChanged="swipeChanged" />
          <div class="goods-desc">
            <div class="goods-title">K9 鲔鱼+木天蓼猫饼干零食130g</div>
            <div class="goods-price">
              <span class="new-price">￥159</span>
              <span class="old-price">￥259</span>
              <span class="activity">活动价</span>
            </div>
            <div class="round-number">
              <span class="current-number">{{ swipeCurrentIndex + 1 }}</span
              >/<span class="total-number">{{ images.length }}</span>
            </div>
          </div>
          <div class="sale-info">
            <div class="top">
              <span class="sale-number">销量96</span>
              <span class="love-number">收藏8</span>
              <span class="transport">正品保证</span>
            </div>
            <div class="bottom">
              <p class="left">
                <span class="iconfont">&#xe61b;</span><span>全国包邮</span>
              </p>
              <p class="center">
                <span class="iconfont">&#xe61b;</span><span>7天无理由退货</span>
              </p>
              <p class="right">
                <span class="iconfont">&#xe61b;</span><span>72小时内发货</span>
              </p>
            </div>
          </div>
          <excellent-comment />
          <div class="comment-bottom">
            <div class="comment-btn" @click="lookAllComment">查看全部评价</div>
            <div class="comment-btn details" @click="lookAllDetails">
              查看图文详情
            </div>
          </div>
        </van-tab>
        <van-tab title="详情"> </van-tab>
        <van-tab title="评价"> <all-comment /></van-tab>
      </van-tabs>
    </nav-bar>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon
        icon="star"
        :text="collectionFlag ? '已收藏' : '收藏'"
        :color="collectionFlag ? '#ea5858' : '#969696'"
        @click="toggleCollect"
      />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Swipe from "@/components/Swipe";
import ExcellentComment from "./excellentComment";
import AllComment from "./allComment";

export default {
  name: "index",
  components: {
    Swipe,
    NavBar,
    ExcellentComment,
    AllComment
  },
  data() {
    return {
      active: 0,
      // navBar是否点击了菜单展开按钮
      toggleFlag: false,
      images: [
        "https://img2.epetbar.com/2016-09/23/14/48785b2f980c291f86f78c18601b9f72.jpg?x-oss-process=style/cut&$1=500&$2=500",
        "https://img2.epetbar.com/2016-09/23/14/feea1369893f1b7d1bdf17afe94c65bd.jpg?x-oss-process=style/cut&$1=500&$2=500",
        "https://img2.epetbar.com/2016-09/23/14/0c1dd656c865293848c15c2bccb03a5c.jpg?x-oss-process=style/cut&$1=500&$2=500"
      ],
      // 轮播图当前所处的下标
      swipeCurrentIndex: 0,
      // 收藏标志位
      collectionFlag: false
    };
  },
  methods: {
    // navBar菜单展开切换
    toggleChecked(value) {
      this.toggleFlag = value;
    },
    // 商品轮播图切换时触发
    swipeChanged(index) {
      this.swipeCurrentIndex = index;
    },
    // 收藏切换
    toggleCollect() {
      this.collectionFlag = !this.collectionFlag;
    },
    // 查看全部评价按钮
    lookAllComment() {
      this.active = 2;
    },
    lookAllDetails() {
      this.active = 1;
    }
  }
};
</script>

<style lang="less">
.goods-details-contain {
  .van-tabs {
    position: static;
    .van-tabs__wrap {
      overflow: visible;
      .van-tabs__nav {
        background: none;
        .van-tab {
          .van-tab__text {
            font-size: 18px;
          }
        }
        .van-tabs__line {
          bottom: 10px;
        }
      }
    }
    .van-tabs__content {
      position: absolute;
      left: 0;
      margin-top: 8px;
      padding-top: 0;
      padding-bottom: 60px;
      .van-tab__pane {
        width: 100vw;
      }
    }
  }
  .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after {
    border-width: 0;
  }
  .round-number {
    position: absolute;
    right: 20px;
    top: -65px;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    font-size: 11px;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
  }
  .van-swipe__indicators {
    display: none;
  }
  .goods-desc {
    position: relative;
    padding: 0 20px;
    .goods-title {
      font-weight: bold;
      text-align: left;
    }
    .goods-price {
      display: flex;
      justify-content: flex-start;
      .new-price {
        color: #ea5858;
        font-size: 20px;
      }
      .old-price {
        margin: auto 0;
        font-size: 15px;
        text-decoration: line-through;
        padding-left: 10px;
      }
      .activity {
        height: 20px;
        padding: 0 10px;
        background-color: #ea5858;
        color: #fff;
        border-radius: 20px;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        margin: auto 20px;
      }
    }
  }
  .sale-info {
    padding: 5px 20px;
    .top {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #666666;
    }
    .bottom {
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #666666;
      .iconfont {
        font-size: 15px;
      }
    }
  }
  .van-goods-action {
    box-shadow: 1px 1px 2px 1px #eee;
  }
  .comment-bottom {
    background-color: #ffffff;
    padding: 0 20px;
    .comment-btn {
      border: 1px solid #ff976a;
      color: #ff976a;
      font-size: 16px;
      padding: 6px 0;
      border-radius: 6px;
    }
    .details {
      margin-top: 10px;
    }
  }
}
.toggleChecked {
  .van-tabs {
    .van-tabs__content {
      z-index: -1;
      padding-top: 57px;
      .van-tab__pane {
        border-top: 1px solid #e5e5e5;
      }
    }
  }
  .round-number {
    top: 387px;
  }
}
</style>
