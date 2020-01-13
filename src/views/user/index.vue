<template>
  <div class="user-contain">
    <nav-bar>我的</nav-bar>
    <user-info />
    <menu-item />
    <tar-bar />
  </div>
</template>

<script>
import TarBar from "@/components/TarBar";
import NavBar from "@/components/navBar";
import UserInfo from "./userInfo";
import MenuItem from "./menuItem";
export default {
  name: "index",
  components: {
    TarBar,
    NavBar,
    UserInfo,
    MenuItem
  }
};
</script>

<style scoped lang="less"></style>
