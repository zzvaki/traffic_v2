<template>
  <mu-container class="detail">
    <!-- 在线预览word文档 -->
    <!-- http://view.officeapps.live.com/op/view.aspx?src=http://www.xdocin.com/demo/demo.docx -->
    <!-- <word-iframe /> -->
    <!-- 其他内容 -->
    <mu-list textline="three-line">
      <mu-card class="instruction">
      <mu-card-title title="3月4号关于工作安排的会议通知：据说标题很长才能吸引注意力" sub-title="发布时间：2019-03-21 15:30"></mu-card-title>
        <mu-card-header title="领导批示：" sub-title="2019年3月20日"></mu-card-header>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          <br>调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          <br>似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          <br>找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <!-- <mu-card-actions>
          <mu-button flat>编辑</mu-button>
          <mu-button flat>保存</mu-button>
        </mu-card-actions>-->
      </mu-card>
      <mu-divider></mu-divider>
      <mu-card class="instruction">
        <mu-card-header title="领导批示：" sub-title="2019年3月20日"></mu-card-header>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          <br>调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          <br>似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          <br>找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <mu-card-actions>
          <mu-button flat color="primary">编辑</mu-button>
          <mu-button flat color="primary">保存</mu-button>
          <mu-button flat color="primary">撤销</mu-button>
        </mu-card-actions>
      </mu-card>
      <mu-divider></mu-divider>
      <mu-list-item button href="upload/demo.docx">
        <mu-list-item-action>
          <!-- <mu-icon value="description"></mu-icon> -->
          <span class="wordIconBox">
            <img class="wordIcon" src="@/assets/images/wv.png">
          </span>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>预览文档</mu-list-item-title>
          <mu-list-item-sub-title>3月4号关于工作安排的会议通知.docx</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="send"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>抄报：</mu-list-item-title>
          <mu-list-item-sub-title>县公路分局总工, 县应急管理局, 县交通运输局, 县市监局稽查大队, 云山经济开发区管理委员会...</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="send"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>抄送：</mu-list-item-title>
          <mu-list-item-sub-title>县公路分局总工, 县应急管理局, 县交通运输局, 县市监局稽查大队, 云山经济开发区管理委员会...</mu-list-item-sub-title>
        </mu-list-item-content>
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
    </mu-list>

    <!-- 签收按钮 -->
    <mu-flex justify-content="center" align-items="center" @click="confirm">
      <mu-button color="primary" class="bottom-btn">签收 / 批示</mu-button>
    </mu-flex>

    <!-- 签收单位对话框 -->
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="primary" :title="receivedAmount">
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat  @click="closeFullscreenDialog">
          关闭
        </mu-button>
      </mu-appbar>
      <received :list="receivedList"/>
    </mu-dialog>
  </mu-container>
</template>

<script>
import Received from "@/views/Notification/Received.vue"

export default {
  name: "NotificationDetail",
  components: {Received},
  data () {
    return {
      openFullscreen: false,
      receivedList:[
        {id:1,name:"县交通运输局",received:false},
        {id:2,name:"县公安交管大队",received:false},
        {id:3,name:"县应急管理局",received:true},
        {id:4,name:"县发改委",received:true},
        {id:5,name:"县公信局",received:true},
        {id:6,name:"县卫计委",received:true},
        {id:7,name:"县司法局",received:true},
      ]
    };
  },
  computed:{
    receivedAmount(){
      return "已签收单位：" + this.receivedList.filter(e=>e.received).length + " / " + this.receivedList.length
    }
  },
  mounted() {
    document.title = "3月4号关于工作安排的会议通知";
  },
  methods: {
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    },
    confirm() {
      this.$confirm("确认签收吗？", "确认").then(res => {
        if (res.result) {
          this.$toast.success({ message: "签收成功！", position: "top" });
        } else {
          this.$toast.info({ message: "取消签收", position: "top" });
        }
      });
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.openFullscreen){
      this.closeFullscreenDialog()
      next(false)
    } else {
      next()
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
.instruction {
  background: none;
  box-shadow: none;
  .mu-card-header {
    padding-bottom: 0;
  }
  // .mu-card-text {
  //   // padding-left: 72px
  // }
  .mu-card-actions {
    // padding-top: 0;
    margin-top: -16px;
  }
}
</style>

<style>
</style>
