<template>
  <mu-container>
    <!-- 今日通知 -->
    <notice-today/>

    <mu-form ref="form" :model="form" class="form">
      <mu-select label="主持单位" v-model="form.host" filterable label-float full-width>
        <mu-option v-for="item in hostList" :key="item.id" :label="item.name" :value="item"></mu-option>
      </mu-select>
      <mu-select label="会议类型" v-model="form.type" filterable label-float full-width>
        <mu-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item"></mu-option>
      </mu-select>

      <mu-date-input
        type="dateTime"
        v-model="form.date"
        label="会议时间"
        label-float
        full-width
        container="dialog"
        clock-type="24hr"
        view-type="list"
        actions
      ></mu-date-input>

      <mu-text-field
        v-model="form.yearAndMonth"
        label="所属年月"
        label-float
        full-width
        action-icon="sync"
        :action-click="()=>form.yearAndMonth=defaultMonth()"
      ></mu-text-field>
      <mu-text-field
        v-model="form.title"
        label="会议主题"
        label-float
        full-width
        action-icon="sync"
        :action-click="()=>form.title=defaultTitle()"
      ></mu-text-field>

      <mu-text-field v-model="form.place" label="会议地点" label-float full-width></mu-text-field>
      <mu-text-field v-model="form.mc" label="主持人" label-float full-width></mu-text-field>
      <mu-text-field v-model="form.recorder" label="记录人" label-float full-width></mu-text-field>

      <mu-text-field
        v-model="form.participant"
        label="参会单位"
        label-float
        full-width
        @click="openParticipantDialog"
        readonly
      ></mu-text-field>
      <mu-text-field v-model="form.content" label="会议内容及解决问题" label-float full-width multi-line :rows="4"></mu-text-field>
      <mu-text-field v-model="form.files" label="会议附件" label-float full-width></mu-text-field>
    </mu-form>

      <!-- 发布按钮 -->
      <mu-flex justify-content="center" align-items="center">
        <mu-button color="primary" class="bottom-btn" @click="submit">发布</mu-button>
      </mu-flex>


    <!-- 参会单位 弹出框-->
    <mu-dialog transition="slide-bottom" fullscreen :open.sync="participantDialog">
      <mu-appbar color="primary" title="选择参会单位：">
        <mu-button slot="right" flat @click="closeParticipantDialog">完成</mu-button>
      </mu-appbar>
      <div style="padding: 16px;">
        <mu-list toggle-nested dense>
          <!-- <mu-list-item button nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"> -->
          <mu-list-item
            button
            :ripple="false"
            nested
            v-for="group in departmentList"
            :key="group.id"
            :open="open === group.id"
            @toggle-nested="open = arguments[0] ? group.id : ''"
          >
            <mu-list-item-title>
              <!-- {{ group.name }} -->
              <mu-checkbox
                :label="group.name"
                :input-value="checkAll(group.selected)"
                @click.stop
                @change="handleCheckAll(group)"
                :checked-icon="group.selected.length < group.children.length ? 'indeterminate_check_box' : undefined"
              ></mu-checkbox>
            </mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested" v-for="item in group.children" :key="item.id">
              <!-- <mu-list-item-title>{{ item.name }}</mu-list-item-title>
              <mu-list-item-sub-title>{{ item.position }}</mu-list-item-sub-title>-->
              <mu-checkbox
                :value="item"
                v-model="group.selected"
                :label="item.name + ' ' + item.position"
              ></mu-checkbox>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
    </mu-dialog>
  </mu-container>
</template>

<script>
import NoticeToday from "@/components/NoticeToday.vue";

export default {
  components: { NoticeToday },
  data() {
    return {
      participantDialog: false,
      form: {
        host: "",
        type: "",
        date: "",
        yearAndMonth: "",
        title: "",
        place: "",
        mc: "",
        recorder: "",
        participant: "",
        content: "",
        files: "",
      },
      hostList: [{ id: 1, name: "19个乡镇" }, { id: 2, name: "23个成员单位" }],
      typeList: [
        { id: 1, name: "联席会议" },
        { id: 2, name: "安全例会" },
        { id: 3, name: "督导检查" },
        { id: 4, name: "培训会议" }
      ],
      open: "",
      departmentList: [
        {
          id: 1,
          name: "乡镇一",
          selected: [],
          children: [
            { id: 1, name: "人员A", position: "职位甲" },
            { id: 2, name: "人员B", position: "职位乙" },
            { id: 3, name: "人员C", position: "职位丙" }
          ]
        },
        {
          id: 2,
          name: "乡镇二",
          selected: [],
          children: [
            { id: 4, name: "人员D", position: "职位甲" },
            { id: 5, name: "人员E", position: "试试看职位名称很长是什么样子" },
            { id: 6, name: "人员F", position: "职位丙" }
          ]
        },
        {
          id: 3,
          name: "乡镇三",
          selected: [],
          children: [
            { id: 7, name: "人员G", position: "职位甲" },
            { id: 8, name: "人员H", position: "职位乙" },
            { id: 9, name: "人员I", position: "职位丙" }
          ]
        }
      ]
    };
  },
  computed:{
  },
  methods: {
    // recorders(){
    //   let arr = []
    //   this.departmentList.forEach(e=>{
    //     arr = arr.concat(e.selected)
    //   })
    //   return arr
    // },
    // recorderStr(){
    //   let str = ""
    //   this.recorders.forEach(e=>{
    //     str += e.name + "，"
    //   })
    //   str = str.slice(0, str.length - 1);
    //   return str;
    // },
    submit() {
      // this.$refs.form.validate().then(result => {
      //   console.log("form valid: ", result);
      // });
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
        this.$toast.success({ message: "发布成功！", position: "top" });
        // this.$router.push({name: 'Notification', query: this.$route.query})
        this.$router.back();
      }, 3000);
    },
    checkAll(selected) {
      return selected.length > 0;
    },
    handleCheckAll(list) {
      list.selected.length === list.children.length
        ? (list.selected = [])
        : (list.selected = Array.from(list.children));
    },
    openParticipantDialog() {
      this.participantDialog = true;
    },
    closeParticipantDialog() {
      this.participantDialog = false;

      let str = ""
      this.departmentList.forEach(item=>{
        item.selected.forEach(e=>{
          str += e.name + "，"
        })
      })
      str = str.slice(0, str.length - 1);
      this.form.participant = str
    },
    defaultMonth() {
      if (this.form.date) {
        const str =
          this.form.date.getFullYear() +
          "年" +
          (this.form.date.getMonth() + 1) +
          "月";
        // this.form.yearAndMonth = str
        return str;
      }
    },
    defaultTitle() {
      // const str = this.form.host + "【" + this.defaultMonth()  + "】" + this.type
      const str1 = this.form.host.name || "",
        str2 = this.defaultMonth() ? "【" + this.defaultMonth() + "】" : "",
        str3 = this.form.type.name || "",
        str = str1 + str2 + str3;
      // this.form.title = str
      return str;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.participantDialog) {
      this.closeParticipantDialog();
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
.mu-item__open .toggle-icon {
  transform: rotate(180deg);
}
.toggle-icon {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
