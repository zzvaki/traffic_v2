<template>
  <mu-container>
    <mu-alert class="tips" color="info">提示：是由赵贺发起的对三角想春天花花幼儿园的企业检查</mu-alert>
    <card-box title="检查人员（3）" dense style="margin:8px 0;">
      <mu-list dense class="selectedChechers">
        <mu-list-item>
          <mu-list-item-title>
            <span class="name">廖小军</span>
            <span class="position">县自然资源局副局长</span>
            <span class="confirm">未确认</span>
          </mu-list-item-title>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title>
            <span class="name">五个字的名</span>
            <span class="position">测试最长名字测试最长名字</span>
            <span class="confirm">已确认</span>
          </mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </card-box>

    <mu-form :model="form" class="form">
      <mu-form-item
        :prop="'radio'+question.id"
        v-for="question in questions"
        :key="question.id"
        :label="question.text"
      >
        <mu-radio v-model="form['radio'+question.id]" value="1" label="有"></mu-radio>
        <mu-radio v-model="form['radio'+question.id]" value="2" label="无"></mu-radio>
      </mu-form-item>

      <mu-text-field
        v-model="form.content"
        multi-line
        :rows="3"
        label="整改意见"
        label-float
        full-width
      ></mu-text-field>
      <!-- 照片附件 多文件 -->
      <mu-form-item prop="files" label="添加附件">
        <input id="uploaderInput" class type="file" accept="image/*" multiple>
      </mu-form-item>
    </mu-form>
    <!-- 提交按钮 -->
    <mu-flex justify-content="center" align-items="center">
      <mu-button color="primary" class="bottom-btn">提交检查</mu-button>
    </mu-flex>
  </mu-container>
</template>

<script>
import CardBox from "@/components/CardBox.vue";

export default {
  components: {
    CardBox
  },
  data() {
    return {
      form: {
        radio: "",
        content: "",
        files: ""
      },
      questions: [
        {
          id: 1,
          qtype: 1,
          text: "1、使用校车的学校、幼儿园有无与交管部门签订安全管理责任书",
          value: 0
        },
        {
          id: 2,
          qtype: 1,
          text: "2、对租用的车辆有无对方签定安全责任书",
          value: 0
        },
        {
          id: 3,
          qtype: 1,
          text: "3、承接校车业务的公司和车辆有无营运资质（查行驶证）",
          value: 0
        },
        { id: 4, qtype: 1, text: "4、校车有无校车标牌", value: 0 },
        {
          id: 5,
          qtype: 1,
          text: "5、车辆有无坚持“大三小六”常规检查的有效证明",
          value: 0
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.selectedChechers {
  span {
    display: inline-block;
  }
  .name {
    width: 5rem;
  }
  .position {
  }
  .confirm {
    float: right;
    color: #616161;
  }
}
.tips {
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
}
.form {
  background-color: white;
  padding: 16px;
  .question {
    margin-bottom: 8px;
    font-size: 16px;
  }
  .mu-form-item {
    margin-bottom: 8px;
  }
}
</style>
