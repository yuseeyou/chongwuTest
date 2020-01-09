<template>
  <div class="swipe-contain">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <a :href="item.url"><img :src="item.src" alt=""/></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "SwipeLocal",
  props: ["images"]
};
</script>
