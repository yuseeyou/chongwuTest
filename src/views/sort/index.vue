<template>
    <div class="sort-contain">
        <div class="sort-nav">
            <span class="title">分类</span>
            <span>O</span>
        </div>
        <van-tree-select
                height="100%"
                :items="items"
                :main-active-index.sync="activeIndex"
        >
            <template slot="content">
                <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg"/>
                <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg"/>
            </template>
        </van-tree-select>
        <tar-bar></tar-bar>
    </div>
</template>

<script>
  import TarBar from "@/components/TarBar";
  import { sortItem } from "@/constants/index";

  export default {
    name: "index",
    components: {
      TarBar
    },
    data() {
      return {
        activeIndex: 0,
        items: sortItem
      };
    }
  };
</script>

<style lang="less">
    .sort-contain {
        height: 100vh;
        padding-bottom: 53px;
        box-sizing: border-box;
        .sort-nav{
            position: relative;
            width: 100%;
            height: 40px;
            border-bottom: 5px solid #f3f4f5;
            display: flex;
            justify-content: center;
            align-items: center;
            span:first-child{
                font-size: 15px;
                color: #333;
            }
            span:last-child{
                position: absolute;
                right: 10px;
            }
        }
        .van-sidebar {
            .van-sidebar-item--select{
                border-color: #00b894;
                color: #00b894;
                &:hover{
                    color: #00b894;
                    border-color:#00b894;
                }
            }
        }
    }
</style>
