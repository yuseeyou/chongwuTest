<template>
  <div class="new-user-contain">
    <div class="top">
      <a href=""><img src="@/assets/newUser/title.png" alt=""/></a>
      <a href=""><img src="@/assets/newUser/send.png" alt=""/></a>
    </div>
    <div class="goods">
      <div class="left">
        <a href=""><img src="@/assets/newUser/left.gif" alt=""/></a>
      </div>
      <div class="right">
        <a href=""><img src="@/assets/newUser/r1.png" alt=""/></a>
        <a href=""><img src="@/assets/newUser/r2.png" alt=""/></a>
        <a href=""><img src="@/assets/newUser/r3.png" alt=""/></a>
      </div>
    </div>
    <div class="bottom">
      <a href=""><img src="@/assets/newUser/bottom.png" alt=""/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "newUser"
};
</script>

<style scoped lang="less">
.new-user-contain {
  a,
  img {
    display: block;
    width: 100%;
  }
  .goods {
    display: flex;
    .left {
      width: 46.4%;
    }
    .right {
      width: 53.6%;
    }
  }
}
</style>
