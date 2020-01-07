<template>
  <div class="swipe-contain">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  props: ["images"]
};
</script>
