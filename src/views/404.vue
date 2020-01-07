<template>
    <div class="lose-contain">
        <div class="top">
            <img src="../assets/404.png" alt="">
        </div>
        <div class="bottom">
            <a href="javascript:;" class="left" @click="backToLast">返回上一页</a>
            <a href="/" class="right">返回首页</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "error",
        methods:{
            backToLast(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="less">
    .lose-contain{
        padding-top: 40%;
        .top{
            text-align: center;
        }
        .bottom{
            padding: 20px;
            display: flex;
            justify-content: center;
            a{
                padding: 20px;
                color:#F19E62;
            }
        }
    }
</style>