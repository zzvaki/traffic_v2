<template>
  <mu-container>
    <mu-form :model="form" class="form whiteBox">
      <mu-select v-model="form.district" label="行政区划" label-float full-width>
        <mu-option
          v-for="district in districts"
          :key="district.id"
          :label="district.name"
          :value="district"
        ></mu-option>
      </mu-select>

      <mu-select v-model="form.roadType" label="行政区划" label-float full-width>
        <mu-option
          v-for="roadType in roadTypes"
          :key="roadType.id"
          :label="roadType.name"
          :value="roadType"
        ></mu-option>
      </mu-select>

      <mu-text-field v-model="form.checker" label="排查人" label-float full-width></mu-text-field>
      <mu-text-field v-model="form.checkerTel" label="排查人联系电话" label-float full-width></mu-text-field>
      <mu-date-input
        type="dateTime"
        v-model="form.date"
        label="排查时间"
        label-float
        full-width
        container="dialog"
        clock-type="24hr"
        view-type="list"
        actions
      ></mu-date-input>

      <!-- <mu-form-item>
        <mu-flex justify-content="between" align-items="center" style="width: 100%;">
          <mu-flex>
            <span class="label">是否隐患</span>
          </mu-flex>
          <mu-flex>
            <mu-radio v-model="form.isDanger" :value="true" label="是"></mu-radio>
            <mu-radio v-model="form.isDanger" :value="false" label="否"></mu-radio>
          </mu-flex>
        </mu-flex>
      </mu-form-item> -->
      <mu-form-item label="是否隐患">
        <mu-radio v-model="form.isDanger" :value="true" label="是"></mu-radio>
        <mu-radio v-model="form.isDanger" :value="false" label="否"></mu-radio>
      </mu-form-item>

      <mu-select v-model="form.roadName" label="道路名称" label-float full-width>
        <mu-option
          v-for="roadName in roadNames"
          :key="roadName.id"
          :label="roadName.name"
          :value="roadName"
          filterable
        ></mu-option>
      </mu-select>

      <mu-text-field v-model="form.dangerRoadName" label="隐患路段" label-float full-width></mu-text-field>

      <!-- <mu-form-item>
        <mu-flex justify-content="between" align-items="center" style="width: 100%;">
          <mu-flex>
            <span class="label">是否通车</span>
          </mu-flex>
          <mu-flex>
            <mu-radio v-model="form.isAllowedPass" :value="true" label="是"></mu-radio>
            <mu-radio v-model="form.isAllowedPass" :value="false" label="否"></mu-radio>
          </mu-flex>
        </mu-flex>
      </mu-form-item> -->
      <mu-form-item label="是否通车">
        <mu-radio v-model="form.isAllowedPass" :value="true" label="是"></mu-radio>
        <mu-radio v-model="form.isAllowedPass" :value="false" label="否"></mu-radio>
      </mu-form-item>

      <mu-select v-model="form.level" label="督办等级" label-float full-width>
        <mu-option
          v-for="level in levels"
          :key="level.id"
          :label="level.name"
          :value="level"
          filterable
        ></mu-option>
      </mu-select>

      <mu-text-field v-model="form.map" label="地图标注" label-float full-width></mu-text-field>
      <mu-text-field v-model="form.number" label="隐患编号" label-float full-width></mu-text-field>
      <mu-text-field
        v-model="form.situation"
        label="隐患现状"
        label-float
        full-width
        multi-line
        :rows="4"
      ></mu-text-field>
      <mu-text-field v-model="form.remark" label="备注信息" label-float full-width multi-line :rows="4"></mu-text-field>

      <!-- 照片附件 多文件 -->
      <mu-form-item prop="files" label="添加附件">
        <input id="uploaderInput" class type="file" accept="image/*" multiple>
      </mu-form-item>
    </mu-form>
    <!-- 提交按钮 -->
    <mu-flex justify-content="center" align-items="center">
      <mu-button color="primary" class="bottom-btn" :to="{ name:'RoadhazardDetail'}">提交检查</mu-button>
    </mu-flex>
  </mu-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        district: "",
        roadType: "",
        date: "",
        checker: "",
        checkerTel: "",
        isDanger: "",
        roadName: "",
        dangerRoadName: "",
        isAllowedPass: "",
        level: "",
        map: "",
        number: "",
        situation: ""
      },
      districts: [
        { id: 1, name: "涂埠镇" },
        { id: 2, name: "九合乡" },
        { id: 3, name: "九合乡" },
        { id: 4, name: "吴城镇" },
        { id: 5, name: "恒丰企业集团" }
      ],
      roadNames: [
        { id: 1, name: "这是一条道路名称" },
        { id: 2, name: "这是一条道路名称" },
        { id: 3, name: "这是一条道路名称" },
        { id: 4, name: "这是一条道路名称" },
        { id: 5, name: "这是一条道路名称" }
      ],
      levels: [
        { id: 1, name: "省督办" },
        { id: 2, name: "区县督办" },
        { id: 3, name: "区县督办" },
        { id: 4, name: "乡镇督办" }
      ]
    };
  },
  computed: {
    roadTypes() {
      let origin =
        "高速、国道、省道、县道、乡道、村道、组道、城市道路、景区道路";
      let arr = [];
      origin.split("、").forEach((e, i) => {
        arr.push({ id: i + 1, name: e });
      });
      return arr;
    },
  }
};
</script>

<style lang="less" scoped>
.form{
  padding: 0 16px;
}
.mu-form-item {
  margin-bottom: 0;
}
</style>
