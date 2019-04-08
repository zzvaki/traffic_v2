<template>
  <div id="example-1">
    <button @click="show = !show">Toggle render</button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>

    <!-- <ul>
      <li v-for="notice in notices" :key="notice.id">
        <transition name="slide-fade">
          <a href="#" v-if="showNoticeId === notice.id">{{ notice.title }}</a>
        </transition>
      </li>
    </ul>-->

    <div class="notice">
      <div v-for="notice in notices" :key="notice.id">
        <transition name="slide-fade">
          <div class="item" v-if="showNoticeId === notice.id">{{ notice.title }}</div>
        </transition>
      </div>
    </div>

    <div class="box">
      <ul class="scroll">
        <transition
          name="scroll"
        >
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
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      scrollWidth: 1000,
      show: true,
      showNoticeId: 1,
      notices: [
        {
          id: 1,
          title: "会议通知1：15：30  大交管APP项目推进会"
        },
        {
          id: 2,
          title: "会议通知2：16：30  APP项目动员会"
        },
        {
          id: 3,
          title: "会议通知3：18：30  大交管APP项目开幕式"
        }
      ]
    };
  },
  mounted() {
    // console.log(this.showNoticeId,this.notices.length)
    setInterval(() => {
      if (this.showNoticeId < this.notices.length) {
        this.showNoticeId++;
      } else {
        this.showNoticeId = 1;
      }
    }, 2000);
  },
  methods: {
    // --------
    // 进入中
    // --------
    /* eslint-disable */

    beforeEnter: function(el) {
      // ...
      console.log("beforeEnter", el);
      // transition: all 0.8s linear;
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      // ...
      console.log("enter", el);
      done();
    },
    afterEnter: function(el) {
      // ...
      console.log("afterEnter", el);
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function(el) {
      // ...
      console.log("beforeLeave", el);
      this.scrollWidth = el.scrollWidth;
      // el.style.transform = "translateX(-" + this.scrollWidth + "px)";
      // console.log(el);
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      console.log(el);
      done();
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      // ...
    }
  }
};
</script>

<style lang="less" scoped>
.notice {
  background-color: aqua;
  position: relative ;
  width: 200px;
  height: 22px;
  white-space: nowrap;
  overflow: hidden;
}
.item {
  position: absolute;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter {
  transform: translateY(1.2rem);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-1.2rem);
  opacity: 0;
}

.box {
  width: 500px;
  height: 22px;
  background-color: greenyellow;
}
.scroll {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  li {
    display: inline-block;
    padding-right: 3rem;
  }
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