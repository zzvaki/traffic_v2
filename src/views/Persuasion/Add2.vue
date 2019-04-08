<template>
  <mu-container>
    <mu-form :model="form" class="whiteBox">
      <mu-select
        icon="domain"
        label="劝导站（点）"
        filterable
        v-model="form.station"
        full-width
        label-float
      >
        <mu-option
          v-for="item in stationList"
          :key="item.id"
          :label="item.name"
          :value="item"
        ></mu-option>
      </mu-select>
      <mu-date-input
        icon="today"
        v-model="form.date"
        label="汇总日期"
        label-float
        full-width
        container="dialog"
        actions
      ></mu-date-input>
      
      <mu-text-field icon="title" v-model="form.titleMonth" label="所属年月" label-float full-width></mu-text-field>
      <mu-text-field icon="title" v-model="form.title" label="汇总主题" label-float full-width></mu-text-field>
      <mu-text-field icon="title" v-model="form.author" label="汇总人" label-float full-width></mu-text-field>
      <mu-text-field icon="title" v-model="form.officer" label="执勤人员" label-float full-width></mu-text-field>

  <mu-flex align-items="start" class="wordload">
    <mu-flex justify-content="center" class="title">
      <span>工作量汇总:</span>
    </mu-flex>
  </mu-flex>

  <mu-flex justify-content="center" class="wordload">
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.看" label="看" label-float full-width></mu-text-field>
    </mu-flex>
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.查" label="查" label-float full-width></mu-text-field>
    </mu-flex>
  </mu-flex>
  <mu-flex justify-content="center" class="wordload">
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.劝" label="劝" label-float full-width></mu-text-field>
    </mu-flex>
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.宣" label="宣" label-float full-width></mu-text-field>
    </mu-flex>
  </mu-flex>
  <mu-flex justify-content="center" class="wordload">
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.纠" label="纠" label-float full-width></mu-text-field>
    </mu-flex>
    <mu-flex justify-content="center" fill  class="item">
      <mu-text-field v-model="form.workload.报" label="报" label-float full-width></mu-text-field>
    </mu-flex>
  </mu-flex>
  <mu-flex justify-content="start" class="wordload">
    <mu-flex justify-content="center" style="width:50%" class="item">
      <mu-text-field v-model="form.workload.封" label="封" label-float ></mu-text-field>
    </mu-flex>
  </mu-flex>

      <mu-text-field icon="text_fields" v-model="form.content" label="执勤内容" multi-line :rows="3" label-float full-width></mu-text-field>
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
        station: "",
        date: "",
        titleMonth: "",
        title: "",
        author: "",
        officer: "",
        workload: {
          看:"",
          查:"",
          劝:"",
          宣:"",
          纠:"",
          报:"",
          封:""
        },
        content: "",
        remark: "",
        files: ""
      },
      stationList: [
        { id: 1, name: "劝导站一" },
        { id: 2, name: "劝导站二" },
        { id: 3, name: "劝导站三" },
        { id: 4, name: "劝导站四" },
        { id: 5, name: "劝导站五" }
      ],
      typeList: [
        { id: 1, name: "类别一" },
        { id: 2, name: "类别二" },
        { id: 3, name: "类别三" },
        { id: 4, name: "类别四" },
        { id: 5, name: "类别五" }
      ]
    };
  },
  mounted(){
    // console.log(this)
  }
};
</script>

<style lang="less" scoped>
.whiteBox{
  padding: 0 16px;
}
.wordload{
  background-color: #e0f2f1;
  .item{
    padding: 0 16px;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    color: #1976d2;
    padding-top: 24px;
    padding-left: 16px;
  }
}
</style>
