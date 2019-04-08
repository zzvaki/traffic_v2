<template>
  <mu-container class="notification">
    <!-- 今日通知 -->
    <notice-today />
    <!-- 列表 -->
    <mu-list textline="two-line" class="list">
      <div v-for="(notice, index) in notices" :key="notice.id">
        <div v-if="!hideHeader(index)">
          <mu-divider v-if="index !== 0"></mu-divider>
          <mu-sub-header>{{ yearMonth(notice) }}</mu-sub-header>
        </div>
        <mu-list-item button :to="noticeType.noticeType == 4? {name: 'NotificationDetailMeeting'} :{name: 'NotificationDetail'}">
          <mu-list-item-content>
            <mu-list-item-title>
              <span >{{ titleLimit(notice.title) }}</span>
            </mu-list-item-title>
            <mu-list-item-sub-title>发布时间：{{ notice.releaseDate }}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-badge circle color="red" class="badge" v-if="notice.isNew"></mu-badge>
              <span v-if="!notice.signed" style="color:#ff5722;" class="title-right">未签收</span> 
              <span v-else class="title-right">已签收</span> 
              <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </div>
    </mu-list>
    <!-- 发布新通知按钮 -->
    <transition name="fade">
      <mu-flex justify-content="center" align-items="center" v-if="!scrollDown">
        <mu-button color="primary" class="bottom-btn-fixed" :to="{name: 'NotificationCreateMeeting'}" v-if="noticeType.noticeType == 4">发布会议</mu-button>
        <mu-button color="primary" class="bottom-btn-fixed" :to="{name: 'NotificationCreate', query: noticeType}" v-else>发布新内容</mu-button>
      </mu-flex>
    </transition>
  </mu-container>
</template>

<script>
import NoticeToday from "@/components/NoticeToday.vue";
import { noticeTypeList } from "@/assets/util.js";

export default {
  name: "Notification",
  components: {NoticeToday},
  data() {
    return {
      scrollDown: false,
      notices: [
        {
          id: 1,
          title: "3月4号关于工作安排的会议通知",
          releaseDate: "2019-03-02",
          signed: true,
          isNew:true
        },
        {
          id: 2,
          title: "3月4号会议",
          releaseDate: "2019-03-02",
          signed: false,
          isNew:true
        },
        {
          id: 3,
          title: "3月2号交通事故紧急通知",
          releaseDate: "2019-02-26",
          signed: false
        },
        {
          id: 4,
          title: "3月1号关于国道联勤联动会议通知3月1号关于国道联勤联动会议通知",
          releaseDate: "2019-02-15",
          signed: true
        },
        {
          id: 5,
          title: "3月4号关于工作安排的会议通知",
          releaseDate: "2019-02-02",
          signed: true
        },
        {
          id: 6,
          title: "3月4号会议",
          releaseDate: "2019-01-12",
          signed: false
        },
        {
          id: 7,
          title: "3月2号交通事故紧急通知",
          releaseDate: "2019-01-11",
          signed: false
        },
        {
          id: 8,
          title: "3月1号关于国道联勤联动会议通知3月1号关于国道联勤联动会议通知",
          releaseDate: "2019-01-10",
          signed: true
        },
        {
          id: 9,
          title: "3月4号关于工作安排的会议通知",
          releaseDate: "2019-01-02",
          signed: true
        },
        {
          id: 10,
          title: "3月4号会议",
          releaseDate: "2018-12-24",
          signed: false
        },
        {
          id: 11,
          title: "3月2号交通事故紧急通知",
          releaseDate: "2018-03-02",
          signed: false
        },
        {
          id: 12,
          title: "3月1号关于国道联勤联动会议通知3月1号关于国道联勤联动会议通知",
          releaseDate: "2018-03-02",
          signed: true
        }
      ]
    };
  },
  computed: {
    scrollY(){
      return window.scrollY
    },
    noticeType(){
      return {noticeType: this.$route.query.noticeType}
    }
  },
  methods: {
    hideHeader(index) {
      return (
        index !== 0 &&
        this.yearMonth(this.notices[index]) ===
          this.yearMonth(this.notices[index - 1])
      );
    },
    yearMonth(e) {
      // return e.releaseDate.slice(0, 7)
      return (
        e.releaseDate.slice(0, 4) +
        "年 " +
        parseInt(e.releaseDate.slice(5, 7)) +
        "月"
      );
    },
    handleScroll() {
      this.scrollDown = window.scrollY >= 1;
    },
    titleLimit(str){
      return str.slice(0,14)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.title = noticeTypeList(this.$route.query.noticeType).noticeTypeName;
  },
  beforeMount(){
  }
};
</script>

<style lang="less" scoped>
.badge{
  // position:absolute;
  // top:8px;
  // left: 8px;
  margin-right: 8px;
}
.list {
  background-color: white;
  border-radius: 2px;
  // margin-bottom: 56px;
}
// .mu-item-title{
//   // white-space: initial;
//   // overflow: initial;
// }

.title-right{
  // float: right;
  margin-right: 0.5rem;
  // z-index: 10;
  // position: relative;
}
.mu-item-action{
  flex-direction:  row;
   align-items:center ;
}

.fade-enter-active, .fade-leave-active {
  transition: .5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
