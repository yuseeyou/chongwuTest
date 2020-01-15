<template>
  <div class="all-comment-contain">
    <div class="contain-title">
      <span class="choose">筛选</span>
      <span class="rate">好评率96%</span>
    </div>
    <div class="tags">
      <p
        :class="{ tag: true, 'tag-checked': index === currentTagCheckedIndex }"
        v-for="(item, index) in tags"
        @click="toggleTagIndex(index)"
      >
        {{ item.text + item.num }}
      </p>
    </div>
    <div class="comment-content">
      <div class="comment-item" v-for="item in comments">
        <div class="top">
          <div class="user-info">
            <img
              src="https://img2.epetbar.com/2017-05/24/0/867bf0893107b7554f9a691ff2b6339c.jpg@!50w-c"
              alt=""
            />
            <div class="name-info">
              <p class="user-name">测试用户</p>
              <p class="grade">8级</p>
            </div>
          </div>
          <div class="score"><van-rate v-model="item.score" disabled /></div>
        </div>
        <div class="center">
          <div class="comment-details">给狗子囤点货 一直用这几款产品 很棒</div>
          <div class="comment-pictures">
            <img
              src="https://img2.epetbar.com/2020-01/05/21/ab1c1a6f390e1d080a785280e17755e7.jpg?x-oss-process=style/waterfall&$1=400"
              alt=""
            />
            <img
              src="https://img2.epetbar.com/2020-01/05/21/ab1c1a6f390e1d080a785280e17755e7.jpg?x-oss-process=style/waterfall&$1=400"
              alt=""
            />
          </div>
        </div>
        <div class="bottom">
          <div class="comment-time">2019-10-14 15:46:17</div>
          <div class="love">
            <span class="iconfont">&#xe614;</span>
            <span class="love-number">12</span>
          </div>
        </div>
      </div>
    </div>
    <under-line />
  </div>
</template>

<script>
import UnderLine from "@/components/underLine";
export default {
  name: "allComment",
  components: {
    UnderLine
  },
  data() {
    return {
      tags: [
        { text: "全部", num: 789 },
        { text: "有图", num: 56 },
        { text: "好评", num: 589 },
        { text: "差评", num: 22 }
      ],
      comments: [{ score: 3 }, { score: 4 }, { score: 5 }, { score: 1 }],
      // 当前选中tag的下标
      currentTagCheckedIndex: 0
    };
  },
  methods: {
    // 切换tag改变其下标
    toggleTagIndex(index) {
      this.currentTagCheckedIndex = index;
    }
  }
};
</script>

<style lang="less">
.all-comment-contain {
  .contain-title {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    .choose {
      font-size: 14px;
      color: #333333;
    }
    .rate {
      font-size: 12px;
      color: #ea5858;
    }
  }
  .tags {
    padding-left: 5px;
    display: flex;
    .tag {
      border: 1px solid #e1e1e1;
      border-radius: 15px;
      font-size: 12px;
      text-align: center;
      padding: 1px 8px;
      margin: 0 5px;
    }
    .tag-checked {
      border-color: #00b894;
      color: #00b894;
    }
  }
  .comment-content {
    padding: 10px 20px;
    .comment-item {
      margin: 20px 0;
      box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      padding: 15px;
      .top {
        display: flex;
        justify-content: space-between;
        .user-info {
          display: flex;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .name-info {
            padding-left: 8px;
            font-size: 14px;
            .grade {
              font-size: 12px;
              color: #969696;
            }
          }
        }
        .score {
          .van-rate {
            .van-rate__item {
              .van-icon::before {
                font-size: 15px;
                color: #ffd21e;
              }
            }
          }
        }
      }
      .center {
        .comment-details {
          font-size: 15px;
          text-align: left;
          padding: 12px 0;
        }
        .comment-pictures {
          display: flex;
          justify-content: flex-start;
          img {
            width: 75px;
            border-radius: 5px;
            margin-right: 5px;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        .comment-time {
          font-size: 12px;
          color: #969696;
        }
        .love {
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            font-weight: bold;
            font-size: 20px;
          }
          .love-number {
            align-self: center;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
