<template>
  <div class="menus-contain">
    <ul>
      <li>
        <a href="javascript:;">
          <img src="@/assets/menusImgs/menu1.png" alt="" />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="@/assets/menusImgs/menu2.png" alt="" />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="@/assets/menusImgs/menu3.gif" alt="" />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="@/assets/menusImgs/menu4.png" alt="" />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="@/assets/menusImgs/menu5.png" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "meuns",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.menus-contain {
  position: relative;
  top: -27px;
  ul {
    display: flex;
    li {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
