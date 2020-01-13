<template>
  <div class="user-info-contain">
    <div class="user-top">
      <router-link to="/user/setting">
        <span class="setting iconfont">&#xe651;</span>
      </router-link>
      <span class="message iconfont">&#xe607;</span>
    </div>
    <div class="user-center">
      <div class="left-image">
        <img
          src="https://img2.epetbar.com/dogs/10.jpg?x-oss-process=style/waterfall&$1=100"
          alt=""
        />
      </div>
      <div class="right-details">
        <p class="username">萌宠官员</p>
        <p class="badges">
          <span>v0</span>
          <span>宠值0</span>
        </p>
      </div>
    </div>
    <div class="user-bottom">
      <div class="bottom-content">
        <p class="content-item">抽奖</p>
        <p class="content-item">小游戏</p>
        <p class="content-item">签到</p>
        <p class="content-item">邀请</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  methods: {}
};
</script>

<style scoped lang="less">
.user-info-contain {
  padding: 15px 15px 0 15px;
  background: linear-gradient(90deg, #40ca56 0%, #42cc56 100%);
  .user-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconfont {
      font-size: 22px;
      color: #fff;
    }
  }
  .user-center {
    margin: 30px 0 30px 0;
    display: flex;
    .left-image {
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    .right-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      p {
        padding: 2px 0;
        &.username {
          color: #fff;
          font-size: 16px;
        }
        &.badges {
          span {
            display: inline-block;
            height: 16px;
            text-align: center;
            line-height: 16px;
            padding: 0 10px;
            border-radius: 15px;
            font-size: 12px;
            &:first-child {
              background-color: #ffd693;
              color: #e17055;
              font-style: oblique;
              &:first-letter {
                font-weight: bold;
              }
            }
            &:last-child {
              color: #fff;
              background-color: #e17055;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
  .user-bottom {
    display: flex;
    justify-content: center;
    .bottom-content {
      width: 350px;
      height: 35px;
      background-color: #252525;
      border-radius: 15px 15px 0 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #ffd693;
    }
  }
}
</style>
