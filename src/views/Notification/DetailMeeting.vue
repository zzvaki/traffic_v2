<template>
  <mu-container class="detail">
    <!-- 内容 -->
    <mu-card class="content">
      <mu-card-title title="3月4号关于工作安排的会议通知：据说标题很长才能吸引注意力" sub-title="发布时间：2019-03-21 15:30"></mu-card-title>
      <mu-card-text>
        <span class="label">主持单位</span>
        <span class="value">北京第三区交通委北京第三区交通委北京第三区交通委北京第三区交通委北京第三区交通委北京第三区交通委</span>
        <br>
        <span class="label">会议类型</span>
        <span class="value">交通例会</span>
        <br>
        <span class="label">会议时间</span>
        <span class="value">2019年03月21日 15:30</span>
        <br>
        <span class="label">会议地点</span>
        <span class="value">杭州地下城</span>
        <br>
        <span class="label">主持人</span>
        <span class="value">赵贺</span>
        <br>
        <span class="label">记录人</span>
        <span class="value">赵贺</span>
        <br>
        <span class="label">参会人员</span>
        <span class="value">县交通运输局：赵贺，张政；县政府：彭坚；县交通运输局：赵贺，张政；县政府：彭坚；</span>
        <br>
        <br>
        <span class="label">会议内容及解决问题</span>
        <br>
        <span class="mulit">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
      </mu-card-text>
    </mu-card>
    <mu-list textline="three-line">
      <mu-divider></mu-divider>
      <mu-list-item button href="upload/demo.docx">
        <mu-list-item-action>
          <!-- <mu-icon value="description"></mu-icon> -->
          <span class="wordIconBox">
            <img class="wordIcon" src="@/assets/images/wv.png">
          </span>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>查看附件</mu-list-item-title>
          <mu-list-item-sub-title>3月4号关于工作安排的会议通知.docx</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-icon value="chevron_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button @click="openFullscreenDialog">
        <mu-list-item-action>
          <mu-icon value="archive"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{ receivedAmount }}</mu-list-item-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-icon value="more_vert"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <!-- 签收按钮 -->
      <transition name="fade">
        <mu-flex justify-content="center" align-items="center" @click="confirm" v-if="!received">
          <mu-button color="primary" class="bottom-btn">签收 / 批示</mu-button>
        </mu-flex>
      </transition>
    </mu-list>
    <!-- 签收单位对话框 -->
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="primary" :title="receivedAmount">
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat @click="closeFullscreenDialog">关闭</mu-button>
      </mu-appbar>
      <received :list="receivedList"/>
    </mu-dialog>
  </mu-container>
</template>

<script>
import Received from "@/views/Notification/Received.vue";

export default {
  name: "NotificationDetail",
  components: { Received },
  data() {
    return {
      received: false,
      openFullscreen: false,
      receivedList: [
        { id: 1, name: "县交通运输局", received: false },
        { id: 2, name: "县公安交管大队", received: false },
        { id: 3, name: "县应急管理局", received: true },
        { id: 4, name: "县发改委", received: true },
        { id: 5, name: "县公信局", received: true },
        { id: 6, name: "县卫计委", received: true },
        { id: 7, name: "县司法局", received: true }
      ]
    };
  },
  computed: {
    receivedAmount() {
      return (
        "已签收单位：" +
        this.receivedList.filter(e => e.received).length +
        " / " +
        this.receivedList.length
      );
    }
  },
  mounted() {
    document.title = "3月4号关于工作安排的会议通知";
  },
  methods: {
    openFullscreenDialog() {
      this.openFullscreen = true;
    },
    closeFullscreenDialog() {
      this.openFullscreen = false;
    },
    alertMsg() {
      const msg = `这个这啥那个那啥都欧克，这个这啥那个那啥都欧克，这个这啥那个那啥都欧克。`;
      this.$alert(msg, "批示详情");
    },
    confirm() {
      this.$confirm("确认签收吗？", "确认").then(res => {
        if (res.result) {
          this.received = true;
          this.$toast.success({ message: "签收成功！", position: "top" });
        } else {
          this.$toast.info({ message: "取消签收", position: "top" });
        }
      });
    }
  },
    beforeRouteLeave(to, from, next) {
      if (this.openFullscreen) {
        this.closeFullscreenDialog();
        next(false);
      } else {
        next();
      }
    }
};
</script>

<style lang="less" scoped>
.detail {
  background-color: white;
  // padding-bottom: 40px;
}
.wordIconBox {
  display: inline-block;
  width: 33px;
  height: 36px;
  position: relative;
  overflow: hidden;
  outline: none;
  .wordIcon {
    position: absolute;
    margin: 0;
    padding: 0;
    width: auto;
    height: auto;
    top: -34px;
    left: -162px;
    border: none;
  }
}
.content {
  background: none;
  box-shadow: none;
  .mu-card-header {
    padding-bottom: 0;
  }
  .mu-card-text {
    // padding-left: 72px
    font-size: 16px;
    line-height: 2;
    margin-left: 6rem;
    // span{
    //   display: inline-block;
    // }
    .label {
      position: absolute;
      margin-left: -6rem;
      color: rgba(0, 0, 0, 0.54);
      &:after {
        content: "：";
      }
    }
    // .value {
    // }
    .mulit {
      margin-left: -6rem;
      display: block;
      line-height: 1.5;
    }
  }
  .mu-card-actions {
    // padding-top: 0;
    margin-top: -16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // transform: translateY(62px);
  opacity: 0;
}
</style>
