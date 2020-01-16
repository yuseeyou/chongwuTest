<template>
  <div class="login-contain">
    <div class="back">
      <span @click="toBack"></span>
    </div>
    <p class="title">短信验证码登录</p>
    <div class="input-contain">
      <van-field v-model="tel" type="tel" label="手机号" />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
          @click="sendCode"
          :disabled="sendCodeFlag"
        >
          <van-count-down
            :time="time"
            format="ss"
            v-if="sendCodeFlag"
            @finish="codeTimeOut"
          />
          <span v-if="!sendCodeFlag">获取验证码</span>
        </van-button>
      </van-field>
      <div class="login-btn">
        登录
      </div>
      <div class="login-info">
        <div class="user-name-login">
          <a href="javascript:;">账号密码登录</a>
        </div>
        <div class="user-register">
          <a href="/register">新用户注册</a>
        </div>
      </div>
    </div>
    <div class="login-desc">
      登录代表你同意<span class="xieyi">《宠物商城用户协议》</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      tel: "",
      sms: "",
      time: 20 * 1000,
      sendCodeFlag: false
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    sendCode() {
      const telFlag = this.verifyTel();
      if (!telFlag) {
        this.$toast("请输入合法的手机号码！");
      } else {
        this.sendCodeFlag = true;
      }
    },
    // 验证手机号码
    verifyTel() {
      const reg = /^[1][3|4|5|6|7|8|9][0-9]{9}$/;
      return reg.test(this.tel);
    },
    // 验证时间到期
    codeTimeOut() {
      this.sendCodeFlag = false;
    }
  }
};
</script>

<style lang="less">
.login-contain {
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
    .van-button--disabled {
      background-color: #969696 !important;
      border: none;
      .van-count-down {
        color: #fff;
      }
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
  .login-desc {
    padding: 10px 20px;
    text-align: center;
    font-size: 12px;
    position: fixed;
    width: 100%;
    bottom: 30px;
    .xieyi {
      color: #ea5858;
    }
  }
}
</style>
