<template>
  <mu-container>
    <!-- 今日通知 -->
    <notice-today/>

    <mu-form ref="form" :model="form" class="form">
      <!-- 标题 单行 -->
      <mu-text-field v-model="form.title" label="通知标题" :placeholder="defaultTitle" full-width></mu-text-field>

      <!-- 内容 多行 -->
      <mu-form-item prop="content1" :rules="contentRule" label="信息内容">
        <mu-text-field v-model="form.content" multi-line :rows="6" label-float full-width></mu-text-field>
      </mu-form-item>
      <!-- 添加附件 单文件 -->
      <mu-form-item prop="content2" :rules="contentRule" label="添加附件">
        <mu-text-field
          label-float
          full-width
          v-model="form.files"
          @click="handleClick"
          readonly
          :action-icon="form.files?'cancel':''"
          :action-click="()=>form.files=''"
        ></mu-text-field>
      </mu-form-item>
      <input
        id="uploaderInput"
        class
        type="file"
        accept=".doc, .docx, .xlsx, .xls"
        @change="handleFilesInput(arguments[0])"
        style="display:none;"
      >

      <mu-list textline="two-line">
        <!-- 抄报 分组-->
        <mu-list-item
          button
          @click="openCopyReportScrollDialog"
          v-if="this.$route.query.noticeType==2 || this.$route.query.noticeType==3"
        >
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>抄报：</mu-list-item-title>
            <mu-list-item-sub-title>{{ copyReportString }}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-icon value="more_vert"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>

        <!-- 抄送 输入框-->
        <mu-list-item button @click="openCopySentScrollDialog">
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>抄送：</mu-list-item-title>
            <mu-list-item-sub-title>{{ copySentString }}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-icon value="more_vert"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>

        <!-- 签收单位-->
        <!-- <mu-list-item button :to="{name:'NotificationReceived'}">
          <mu-list-item-action>
            <mu-icon value="archive"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>签收单位</mu-list-item-title>
            <mu-list-item-sub-title>10/12</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-icon value="more_vert"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>-->
      </mu-list>

      <!-- 抄报 对话框-->
      <mu-dialog title="选择需要抄报的领导：" width="360" scrollable :open.sync="openCopyReportScroll">
        <mu-list toggle-nested dense>
          <mu-list-item v-for="item in copyReportList" :key="item.id">
            <mu-list-item-title>
              <mu-checkbox :label="item.name" :value="item" v-model="item.selected"></mu-checkbox>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat color="primary" @click="closeCopyReportScrollDialog">确定</mu-button>
      </mu-dialog>

      <!-- 抄送 对话框-->
      <mu-dialog transition="slide-bottom" fullscreen :open.sync="openCopySentScroll">
        <mu-appbar color="primary" title="选择需要抄送的人员">
          <mu-button slot="right" flat @click="closeCopySentScrollDialog">完成</mu-button>
        </mu-appbar>
        <div style="padding: 16px;">
          <mu-select
            label="请选择"
            label-float
            filterable
            multiple
            chips
            v-model="copySentSelected"
            full-width
          >
            <mu-option v-for="item in copySentList" :key="item.id" :label="item.name" :value="item"></mu-option>
          </mu-select>
        </div>
      </mu-dialog>

      <!-- 发布按钮 -->
      <mu-flex justify-content="center" align-items="center">
        <mu-button color="primary" class="bottom-btn" @click="submit">发布</mu-button>
      </mu-flex>
    </mu-form>
  </mu-container>
</template>

<script>
import NoticeToday from "@/components/NoticeToday.vue";
import { noticeTypeList } from "@/assets/util.js";

export default {
  components: { NoticeToday },
  data() {
    return {
      form: {
        title: "",
        content: "",
        files: "",
        errorText: ""
      },
      contentRule: [
        {
          validate: () => !this.form.content || !this.form.files,
          message: "通知内容和附件只能填一个"
        }
      ],
      openCopyReportScroll: false,
      openCopySentScroll: false,
      copyReportList: [
        { id: 1, name: "应炯", selected: false },
        { id: 2, name: "郑绍", selected: false },
        { id: 3, name: "吴华丰", selected: false },
        { id: 4, name: "彭坚", selected: false },
        { id: 5, name: "淦家寨", selected: false }
      ],
      copySentSelected: [],
      copySentList: []
    };
  },
  watch: {},
  computed: {
    defaultTitle() {
      let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        type = noticeTypeList(this.$route.query.noticeType).noticeTypeName;

      return `${year}年${month}月${day}日 ${type}`;
    },
    copyReportString() {
      let string = "";
      this.copyReportList.forEach(e =>
        e.selected ? (string += e.name + "，") : ""
      );
      string = string.slice(0, string.length - 1);
      return string;
    },
    copySentString() {
      let string = "";
      this.copySentSelected.forEach(e => {
        string += e.name + "，";
      });
      string = string.slice(0, string.length - 1);
      return string;
    }
  },
  beforeMount() {
    this.copySentList = this.getCopySentList();
  },
  methods: {
    getCopySentList() {
      const list =
        "市安委会道专委，县委办公室，县政府办公室，县人大办公室，县政协办公室，县委政法委办公室，县纪委办公室，县安委会，23各成员单位，19个乡镇";
      let arr = [];
      list.split("，").forEach((e, i) => {
        arr.push({ id: i + 1, name: e });
      });
      return arr;
    },
    openCopyReportScrollDialog() {
      this.openCopyReportScroll = true;
    },
    closeCopyReportScrollDialog() {
      this.openCopyReportScroll = false;
    },
    openCopySentScrollDialog() {
      this.openCopySentScroll = true;
    },
    closeCopySentScrollDialog() {
      this.openCopySentScroll = false;
    },
    handleClick() {
      document.getElementById("uploaderInput").click();
    },
    //监听文件上传输入框
    handleFilesInput(evt) {
      // console.log(evt.target.files);
      this.form.files = evt.target.files[0].name;
    },
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
        if(result){
          const loading = this.$loading();
          setTimeout(() => {
            loading.close();
            this.$toast.success({ message: "发布成功！", position: "top" });
            // this.$router.push({name: 'Notification', query: this.$route.query})
            this.$router.back();
          }, 3000);
        }
      });
    }
  },
    beforeRouteLeave(to, from, next) {
      if (this.openCopySentScroll) {
        this.closeCopySentScrollDialog();
        next(false);
      } else {
        next();
      }
    }
};
</script>

<style lang="less" scoped>
.form{
  background-color: white;
  border-radius: 2px;
  padding: 0 16px;
}
.mu-expansion-panel__expand {
  // margin: 0;
  // padding-bottom: 16px;
  background-color: #f5f5f5;
}
// .mu-item-title {
//   // overflow: inherit;
// }
.mu-item__open .toggle-icon {
  transform: rotate(180deg);
}
.toggle-icon {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>

<style lang="less">
.mu-expansion-panel__expand .mu-expansion-panel-header {
  // min-height: 48px;
}

.mu-expansion-panel-content {
  // padding: 0 24px 8px 24px;
}
</style>
