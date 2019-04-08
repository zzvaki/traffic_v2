<template>
  <div class="notice">
    <mu-flex justify-content="start">
      <mu-flex justify-content="center">
        <h3>
          今日通知
          <span>|</span> 🔈
        </h3>
      </mu-flex>
      <mu-flex justify-content="start" fill class="scrollBox">
        <!-- <div v-for="notice in notices" :key="notice.id">
          <transition name="slide-fade">
            <a class="item" v-if="showNoticeId === notice.id">{{ notice.title }}</a>
          </transition>
        </div>-->

        <!-- 如果遇到 重叠BUG 尝试 vue-seamless-scroll -->
        <!-- <ul class="scroll">
          <transition name="scroll">
            <div v-if="show" key="1" style="display:inline;position:absolute">
              <li v-for="notice in notices" :key="notice.id">
                <a href="#">{{ notice.title }}</a>
              </li>
            </div>
            <div v-if="!show" key="2" style="display:inline;position:absolute">
              <li v-for="notice in notices" :key="notice.id">
                <a href="#">{{ notice.title }}</a>
              </li>
            </div>
          </transition>
        </ul>-->

        <ul class="scroll">
          <vueSeamless :data="notices" :class-option="optionLeft" class="seamless-warp2">
            <ul class="item">
              <li v-for="notice in notices" :key="notice.id">
                <a href=" ">{{ notice.title }}</a>
              </li>
            </ul>
          </vueSeamless>
        </ul>
      </mu-flex>
    </mu-flex>
  </div>
</template>

<script>
import vueSeamless from "vue-seamless-scroll";

export default {
  name: "NoticeToday",
  components: { vueSeamless },
  data() {
    return {
      show: true,
      showNoticeId: 1,
      notices: [
        {
          id: 1,
          title: "会议通知1：15：30  大交管APP项目推进会"
        },
        {
          id: 2,
          title: "会议通知2：16：30  大交管APP项目动员会大交管APP项目动员会大交管APP项目动员会大交管APP项目动员会"
        },
        {
          id: 3,
          title: "会议通知3：18：30  大交管APP项目开幕式"
        }
      ]
    };
  },
  computed: {
    optionLeft() {
      return {
        limitMoveNum: 2,
        direction: 2
      };
    }
  },
  methods: {
    scroll() {
      setInterval(() => {
        this.show = !this.show;
      }, 22000);
    }
  },
  mounted() {
    // setInterval(() => {
    //   if (this.showNoticeId < this.notices.length) {
    //     this.showNoticeId++;
    //   } else {
    //     this.showNoticeId = 1;
    //   }
    // }, 5000);
    setTimeout(() => {
      this.show = !this.show;
      this.scroll();
    }, 2000);
  }
};
</script>

<style lang="less" scoped>
.seamless-warp2 {
  overflow: hidden;
  height: 25px;
  // width: 380px;
}
.notice {
  background-color: white;
  // margin: 8px -8px;
  // padding: 0 8px;
  margin: 8px auto;
  padding: 0 16px;
  border-radius: 2px;
  h3 {
    // background-color: aquamarine;
    width: 6rem;
    font-size: 16px;
    color: #ff4d4f;
    white-space: nowrap;
    margin: 8px auto;
    span {
      color: #d9d9d9;
    }
  }
  // .scrollBox {
  //   // background-color: aqua;
  //   position: relative;
  //   // width: 200px;
  //   height: 22px;
  //   margin: 10px 16px 0 8px;
  //   white-space: nowrap;
  //   overflow: hidden;
  // }
  // .item {
  //   color: #262626;
  //   position: absolute;
  // }
  .scrollBox {
    height: 22px;
    margin: 10px 16px 0 8px;
    position: relative;
    overflow: hidden;
    .scroll {
      margin: 0;
      padding: 0;
      white-space: nowrap;
      li {
        display: inline-block;
        padding-right: 3rem;
        a {
          color: #212121;
        }
      }
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s ease;
}
.slide-fade-enter {
  transform: translateY(1.2rem);
  // transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-1.2rem);
  // transform: translateX(-100%);
  opacity: 0;
}

.scroll-enter-active {
  transition: all 20s linear;
}
.scroll-leave-active {
  transition: all 20s linear;
}
.scroll-enter {
  transform: translateX(1000px);
}
.scroll-leave-to {
  transform: translateX(-1000px);
}
</style>
