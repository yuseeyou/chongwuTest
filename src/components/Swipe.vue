<template>
  <div class="swipe-contain">
    <van-swipe :autoplay="autoplay" @change="change">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    // 轮播图片
    images: {
      type: Array,
      required: true
    },
    // 轮播间隔时长,默认为3s,设置为0为关闭自动轮播
    autoplay: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    change(index) {
      this.$emit("swipeChanged", index);
    }
  }
};
</script>
