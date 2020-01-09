<template>
  <div class="goods-contain">
    <div class="goods-title">
      <p>猜你喜欢</p>
    </div>
    <van-grid :column-num="2" :border="false">
      <van-grid-item>
        <van-image
          src="https://img1.epetbar.com/2016-09/23/14/18681c80864aca43b1aa6389f25b1efc.jpg?x-oss-process=style/fill&$1=200&$2=200"
        />
        <div class="good-title">
          猫粮骄傲发的按时发货都忘记和那覅点击安分守法阿斯蒂芬
        </div>
        <div class="good-bottom">
          <div class="price">$22.5</div>
          <div class="cart">span</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img1.epetbar.com/2018-08/02/15/e53a3f08d381825434957bcc166971a9.jpg?x-oss-process=style/fill&$1=200&$2=200"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img1.epetbar.com/common/upload/commonfile/2019/09/25/140249_382166.jpg?x-oss-process=style/fill&$1=200&$2=200"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img1.epetbar.com/2016-06/17/16/73af48e51f9fc8224871bcbd439861c3.jpg?x-oss-process=style/fill&$1=200&$2=200"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img1.epetbar.com/2018-08/02/15/e53a3f08d381825434957bcc166971a9.jpg?x-oss-process=style/fill&$1=200&$2=200"
        />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less">
.goods-contain {
  .goods-title {
    width: 100%;
    p {
      padding: 20px 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .van-grid {
    padding: 0 5px;
    .van-grid-item {
      padding: 5px;
      .van-grid-item__content {
        border: 1px solid #f1f1f1;
        border-radius: 10px;
        .van-image {
          img {
            width: 140.5px;
            height: 140.5px;
          }
        }
        .good-title {
          width: 100%;
          height: 35px;
          padding: 0 10px;
          font-size: 12px;
          box-sizing: border-box;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: center;
        }
        .good-bottom {
          margin-top: 15px;
          box-sizing: border-box;
          width: 100%;
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          .price {
            color: #ff5757;
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
