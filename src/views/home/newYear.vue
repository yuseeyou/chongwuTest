<template>
  <div class="new-year-contain">
    <div class="top">
      <a href=""><img src="@/assets/newYear/title.png" alt=""/></a>
      <a href=""><img src="@/assets/newYear/activities.png" alt=""/></a>
      <a href=""><img src="@/assets/newYear/goods-title.png" alt=""/></a>
    </div>
    <div class="bottom">
      <div class="first">
        <a href=""><img src="@/assets/newYear/goods1.png" alt=""/></a>
      </div>
      <div class="second">
        <a href=""><img src="@/assets/newYear/goods2.png" alt=""/></a>
        <a href=""><img src="@/assets/newYear/goods3.png" alt=""/></a>
      </div>
      <div class="third">
        <a href=""><img src="@/assets/newYear/goods4.png" alt=""/></a>
        <a href=""><img src="@/assets/newYear/goods5.png" alt=""/></a>
        <a href=""><img src="@/assets/newYear/goods6.png" alt=""/></a>
      </div>
      <div class="end">
        <a href=""><img src="@/assets/newYear/bottom.png" alt=""/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newYear"
};
</script>

<style scoped lang="less">
.new-year-contain {
  margin-top: -27px;
  a,
  img {
    display: block;
  }
  .top {
    img {
      width: 100%;
    }
  }
  .bottom {
    img {
      width: 100%;
    }
    .second,
    .third {
      display: flex;
      a {
        flex: 1;
      }
    }
  }
}
</style>
