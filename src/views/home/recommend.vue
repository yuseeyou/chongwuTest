<template>
  <div class="recommend-contain">
    <img :src="url" alt="" class="title" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: ["url"],
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.recommend-contain {
  .title {
    width: 100%;
  }
}
</style>
