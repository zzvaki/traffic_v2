<template>
  <mu-container>
    <mu-form :model="form" class="whiteBox">
      <mu-select
        icon="domain"
        label="宣传单位"
        filterable
        v-model="form.department"
        full-width
        label-float
      >
        <mu-option
          v-for="depart in departmentList"
          :key="depart.id"
          :label="depart.name"
          :value="depart"
        ></mu-option>
      </mu-select>
      <mu-date-input
        icon="today"
        v-model="form.date"
        label="宣传日期"
        label-float
        full-width
        container="dialog"
        actions
      ></mu-date-input>
      <mu-date-input
        icon="access_time"
        label="开始时间"
        v-model="form.timeStart"
        type="time"
        label-float
        full-width
        container="dialog"
        view-type="list"
        clock-type="24hr"
        actions
      ></mu-date-input>
      <mu-date-input
        icon="access_time"
        label="结束时间"
        v-model="form.timeEnd"
        type="time"
        label-float
        full-width
        container="dialog"
        view-type="list"
        clock-type="24hr"
        actions
      ></mu-date-input>

      <mu-text-field icon="title" v-model="form.title" label="宣传主题" label-float full-width></mu-text-field>

      <mu-select icon="dehaze" label="宣传类别" filterable v-model="form.type" full-width label-float>
        <mu-option
          v-for="item in typeList"
          :key="item.id"
          :label="item.name"
          :value="item"
        ></mu-option>
      </mu-select>
      <mu-text-field icon="place" v-model="form.location" label="宣传地点" label-float full-width></mu-text-field>
      <mu-text-field icon="text_fields" v-model="form.content" label="宣传内容" multi-line :rows="6" label-float full-width></mu-text-field>
      <mu-text-field icon="people" v-model="form.participant" label="参加人员" multi-line :rows="3" label-float full-width></mu-text-field>
      <mu-text-field icon="text_fields" v-model="form.remark" label="备注信息" multi-line :rows="3" label-float full-width></mu-text-field>
      <!-- 照片附件 多文件 -->
      <mu-form-item icon="attach_file" prop="file" label="添加附件">
        <input id="uploaderInput" class type="file" accept="image/*" multiple>
      </mu-form-item>

      <!-- 提交按钮 -->
      <mu-flex justify-content="center" align-items="center">
        <mu-button color="primary" class="bottom-btn">新增</mu-button>
      </mu-flex>

    </mu-form>
  </mu-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        department: "",
        date: "",
        timeStart: "",
        timeEnd: "",
        title: "",
        type: "",
        location: "",
        content: "",
        participant: "",
        remark: "",
        files: ""
      },
      departmentList: [
        { id: 1, name: "单位一" },
        { id: 2, name: "单位二" },
        { id: 3, name: "单位三" },
        { id: 4, name: "单位四" },
        { id: 5, name: "单位五" }
      ],
      typeList: [
        { id: 1, name: "类别一" },
        { id: 2, name: "类别二" },
        { id: 3, name: "类别三" },
        { id: 4, name: "类别四" },
        { id: 5, name: "类别五" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.whiteBox{
  padding: 0 16px;
}
</style>
