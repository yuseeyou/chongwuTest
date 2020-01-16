<template>
  <div class="register-contain">
    <div class="back">
      <span @click="toBack"></span>
    </div>
    <p class="title">用户注册</p>
    <div class="input-contain">
      <van-field v-model="tel" type="tel" label="手机号" />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary" @click="verifyTel"
          >发送验证码</van-button
        >
      </van-field>
      <van-field v-model="password1" type="password" label="设置密码" />
      <van-field v-model="password2" type="password" label="确认密码" />
      <div class="login-btn">
        注册
      </div>
      <div class="login-info">
        <div class="user-name-login">
          <a href="javascript:;"></a>
        </div>
        <div class="user-register">
          <a href="/login">返回登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      tel: "",
      sms: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    // 验证手机号码
    verifyTel() {
      const reg = /^[1][3|4|5|6|7|8|9][0-9]{9}$/;
      const flag = reg.test(this.tel);
      if (!flag) {
        this.$toast("请输入合法的手机号码！");
      }
    }
  }
};
</script>

<style lang="less">
.register-contain {
  .back {
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-top: 2px solid #888888;
      border-left: 2px solid #888888;
      transform: rotateZ(-45deg);
      margin: 20px;
    }
  }
  .title {
    padding: 0 30px;
    color: #333333;
    font-size: 20px;
    font-weight: 600;
  }
  .input-contain {
    padding: 20px 10px;
    .van-cell::after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 4.267vw;
      border-bottom: 1px solid #ebedf0;
    }
    .login-btn {
      background-color: #f0f0f0;
      color: #bfbfbf;
      margin: 20px 10px;
      font-size: 16px;
      padding: 10px 0;
      border-radius: 30px;
      text-align: center;
    }
    .login-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
