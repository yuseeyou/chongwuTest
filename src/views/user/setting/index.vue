<template>
  <div class="setting-contain">
    <nav-bar>个人设置</nav-bar>
    <van-cell-group>
      <van-cell title="头像" value="内容" />
      <van-cell title="昵称" value="内容" />
      <van-cell title="性别" value="内容" />
      <van-cell title="生日" value="内容" />
      <van-cell title="首次样宠物" value="内容" />
    </van-cell-group>
    <div class="last">
      <van-cell-group>
        <van-cell title="地址管理" value="内容" />
        <van-cell title="隐私设置" value="内容" />
      </van-cell-group>
    </div>
    <div class="button">
      <van-button type="danger" size="large">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  name: "index",
  components: {
    NavBar
  }
};
</script>

<style lang="less">
.setting-contain {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .last {
    .van-hairline--top-bottom {
      margin-top: 20px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    .van-button--danger {
      width: 90%;
      height: 35px;
      font-size: 13px;
      line-height: 35px;
      border-radius: 30px;
    }
  }
}
</style>
