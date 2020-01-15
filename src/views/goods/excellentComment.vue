<template>
  <div class="excellent-comment-contain">
    <div class="comment-top">
      <div class="left">
        <span class="iconfont">&#xe64f;</span>
        <span class="center">精选评价</span>
        <span class="comment-number">(985)</span>
      </div>
      <div class="right">
        <span class="good-comment-rate">好评率96%</span>
      </div>
    </div>
    <div class="comment-content">
      <div class="comment-item" v-for="item in 5">
        <div class="top">
          <div class="user-info">
            <img
              src="https://img1.epetbar.com/2018-04/12/02/baa61671ce5b369312dc2768e2de8bbe.jpg?x-oss-process=style/cut&$1=50&$2=50"
              alt=""
            />
            <div class="user-contain">
              <p class="user-name">测试用户</p>
              <p class="time">2020-1-2</p>
            </div>
          </div>
          <div class="score"><van-rate v-model="rate" disabled /></div>
        </div>
        <div class="bottom">
          故事告诉干部身份发货的司法腐败粉红色的发哈
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "excellentComment",
  data() {
    return {
      rate: 3
    };
  }
};
</script>

<style lang="less">
.excellent-comment-contain {
  padding-top: 10px;
  background-color: #f3f4f5;
  .comment-top {
    padding: 10px 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    .left {
      .iconfont {
        font-size: 14px;
        color: #969696;
      }
      .center {
        font-size: 16px;
        color: #333;
        margin: 0 5px;
      }
      .comment-number {
        font-size: 14px;
        color: #969696;
      }
    }
    .right {
      font-size: 14px;
      color: #969696;
    }
  }
  .comment-content {
    background-color: #fff;
    padding: 0 20px;
    .comment-item {
      padding: 10px 0;
      border-bottom: 1px solid #eeeeee;
      .top {
        display: flex;
        justify-content: space-between;
        .user-info {
          display: flex;
          img {
            width: 42px;
            height: 42px;
            border-radius: 50%;
          }
          .user-name {
            font-size: 14px;
            margin: auto 6px;
          }
          .time {
            font-size: 12px;
            color: #969696;
          }
        }
        .score {
          display: flex;
          align-items: center;
          .van-rate {
            .van-rate__item {
              .van-icon::before {
                font-size: 15px;
                color: #ffd21e;
              }
            }
          }
        }
      }
      .bottom {
        font-size: 15px;
        padding: 10px 0 10px 40px;
        text-align: left;
      }
    }
  }
}
</style>
