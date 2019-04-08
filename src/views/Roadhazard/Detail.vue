<template>
  <mu-container>
    <div class="whiteBox">
      <mu-stepper :active-step="vactiveStep" orientation="vertical">
        <!-- 第一步 -->
        <mu-step>
          <mu-step-label>
            上报隐患
            <span class="sublabel">2019-03-03 15:20</span>
          </mu-step-label>
          <mu-step-content>
            <mu-list class="info" dense>
              <div v-for="(item,i) in step1" :key="item.label">
                <mu-list-item>
                  <mu-list-item-title>
                    {{ item.label }}
                    <span
                      class="text"
                      v-if="item.label !== '隐患现状' && item.label !== '隐患备注'"
                    >
                      <mu-button
                        small
                        color="primary"
                        v-if="item.label === '地图标注'"
                        style="min-width: 0;"
                        flat
                      >查看</mu-button>
                      {{ item.value || "暂无信息" }}
                    </span>
                  </mu-list-item-title>
                </mu-list-item>
                <span
                  class="multi-text"
                  v-if="item.label === '隐患现状' || item.label === '隐患备注'"
                >{{ item.value || "暂无信息" }}</span>
                <mu-divider v-if="i !== step1.length-1"></mu-divider>
              </div>
            </mu-list>

            <mu-button @click="vhandleNext" color="primary" class="nextBtn">开始会诊</mu-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <!-- 第二步 -->
          <mu-step-label>
            专家会诊
            <span class="sublabel">2019-03-03 15:20</span>
          </mu-step-label>
          <mu-step-content>
            <mu-form :model="step2form" class="form">
              <mu-select v-model="step2form.hazardType" label="隐患道路种类" label-float full-width>
                <mu-option
                  v-for="hazardType in hazardTypes"
                  :key="hazardType.id"
                  :label="hazardType.name"
                  :value="hazardType"
                ></mu-option>
              </mu-select>
              <mu-text-field
                v-model="selectedSpecialist"
                label="会诊专家"
                label-float
                full-width
                readonly
                :rows="step2form.specialistInput.rows"
                multi-line
                @click="openFullscreenDialog"
              ></mu-text-field>
              <mu-text-field
                v-model="step2form.opinion"
                label="治理意见设施"
                label-float
                full-width
                :rows="2"
                multi-line
              ></mu-text-field>

              <mu-flex justify-content="center" class="wordload">
                <mu-flex justify-content="center" fill class="item">
                  <mu-text-field
                    v-model="step2form.shouldInstalled.Meter"
                    label="应安装防护设施/米"
                    label-float
                    full-width
                  ></mu-text-field>
                </mu-flex>
                <mu-flex justify-content="center" fill class="item">
                  <mu-text-field
                    v-model="step2form.shouldInstalled.Piece"
                    label="应安装防护设施/块"
                    label-float
                    full-width
                  ></mu-text-field>
                </mu-flex>
              </mu-flex>

              <mu-text-field
                v-model="step2form.governDepart"
                label="治理责任单位"
                label-float
                full-width
                readonly
              ></mu-text-field>

              <mu-date-input
                v-model="step2form.governLimit"
                label="治理期限"
                label-float
                full-width
                container="dialog"
                actions
              ></mu-date-input>
              <mu-text-field
                v-model="step2form.funds"
                label="计划投入资金"
                label-float
                full-width
                readonly
              ></mu-text-field>
              <mu-text-field
                v-model="step2form.remarks"
                label="会诊备注"
                label-float
                full-width
                readonly
                :rows="4"
                multi-line
              ></mu-text-field>
            </mu-form>

            <mu-button @click="vhandleNext" color="primary" class="nextBtn">开始治理</mu-button>
            <mu-button flat @click="vhandlePrev" class="nextBtn">上一步</mu-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <!-- 第三步 -->
          <mu-step-label>开始治理</mu-step-label>
          <mu-step-content>
            <mu-button @click="vhandleNext" color="primary" class="nextBtn">结束治理</mu-button>
            <mu-button flat @click="vhandlePrev" class="nextBtn">上一步</mu-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <!-- 第四步 -->
          <mu-step-label>结束治理</mu-step-label>
          <mu-step-content>
            <mu-button @click="vhandleNext" color="primary" class="nextBtn">联合验收</mu-button>
            <mu-button flat @click="vhandlePrev" class="nextBtn">上一步</mu-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <!-- 第五步 -->
          <mu-step-label>联合验收</mu-step-label>
          <mu-step-content>

            <mu-form :model="step5form" class="form">
              <mu-text-field
                v-model="step5formRoadAddress"
                label="隐患地点"
                label-float
                full-width
                readonly
              ></mu-text-field>
              <mu-text-field
                v-model="step5form.departs"
                label="整改路段"
                label-float
                full-width
                readonly
              ></mu-text-field>

              <mu-text-field
                action-icon="chevron_right"
                v-model="step5formAcceptor"
                label="验收人"
                label-float
                full-width
                readonly
                @click="openFullscreenDialog"
              ></mu-text-field>
          <mu-list dense class="selectedChechers">
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">廖小军</span>
                <span class="position">县自然资源局副局长</span>
                <span class="confirm" style="color:#8bc34a;">已确认</span>
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">五个字的名</span>
                <span class="position">二大队副大队长</span>
                <span class="confirm" style="color:#8bc34a;">已确认</span>
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">五个字的名</span>
                <span class="position">稽查大队大队长</span>
                <span class="confirm" style="color:#ef6c00;">等待确认</span>
              </mu-list-item-title>
            </mu-list-item>
          </mu-list>

              <mu-text-field
                v-model="step5form.situation"
                label="存在的安全隐患情况"
                label-float
                full-width
                readonly
              ></mu-text-field>
              <mu-text-field
                v-model="step5form.measure"
                label="整改措施"
                label-float
                full-width
                readonly
              ></mu-text-field>


            </mu-form>
            
            <mu-button @click="vhandleNext" color="primary" class="nextBtn">治理完成</mu-button>
            <mu-button @click="alert" color="primary" class="nextBtn" flat>等待确认</mu-button>
            <mu-button flat @click="vhandlePrev" class="nextBtn">上一步</mu-button>
          </mu-step-content>
        </mu-step>

        <mu-step>
          <!-- 第六步 -->
          <mu-step-label>治理完成</mu-step-label>
          <!-- <mu-step-content>
            <mu-button @click="vhandleNext" color="primary" class="nextBtn">治理完成</mu-button>
            <mu-button flat @click="vhandlePrev" class="nextBtn">上一步</mu-button>
          </mu-step-content> -->
        </mu-step>

      </mu-stepper>
      <p v-if="vfinished">
        都完成啦!
        <a href="javascript:;" @click="vreset">点这里</a>可以重置
      </p>
    </div>

    <!-- 选择会诊专家 对话框 -->
    <mu-dialog transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="primary" title="选择会诊专家">
        <mu-button slot="right" flat @click="closeFullscreenDialog">完成</mu-button>
      </mu-appbar>
      <div style="padding: 16px 0;">
        <card-box title="已选人员（3）" dense>
          <mu-list dense class="selectedSpecialists">
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">廖小军</span>
                <span class="position">县自然资源局副局长</span>
                <span class="delete">
                  <mu-icon value="delete" size="18"></mu-icon>
                </span>
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">五个字的名</span>
                <span class="position">测试最长名字测试最长名字</span>
                <span class="delete">
                  <mu-icon value="delete" size="18"></mu-icon>
                </span>
              </mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </card-box>

        <mu-list toggle-nested dense>
          <mu-list-item
            button
            :ripple="false"
            nested
            v-for="depart in departs"
            :key="depart.depardId"
            :open="false"
          >
            <!-- 分组全选框 -->
            <mu-list-item-title>
              <mu-flex>
                <mu-checkbox
                  :label="depart.depardName"
                  :input-value="checkAll(depart.selected)"
                  :checked-icon="depart.selected.length < depart.children.length ? 'indeterminate_check_box' : undefined"
                  @click.stop
                  @change="handleCheckAll(depart)"
                ></mu-checkbox>
              </mu-flex>
            </mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>

            <!-- 复选框 -->
            <mu-list-item
              button
              :ripple="false"
              slot="nested"
              v-for="staff in depart.children"
              :key="staff.id"
            >
              <mu-list-item-title>
                <mu-flex>
                  <mu-checkbox :label="staff.name" :value="staff" v-model="depart.selected"></mu-checkbox>
                </mu-flex>
              </mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
    </mu-dialog>
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
      openFullscreen: false,
      vactiveStep: 0,
      step1: [
        { label: "行政区划", value: "涂埠镇" },
        { label: "道路性质", value: "乡道" },
        { label: "排查人", value: "赵贺" },
        { label: "排查人联系电话", value: "18088707636" },
        { label: "排查时间", value: "2019年3月24日" },
        { label: "是否隐患", value: true },
        { label: "道路名称", value: "学家龙族" },
        { label: "隐患路段", value: "学龙桥路段" },
        { label: "是否通行客车", value: true },
        { label: "督办等级", value: "区县督办" },
        { label: "地图标注", value: "9527,9527" },
        { label: "隐患编号", value: "01234" },
        {
          label: "隐患现状",
          value:
            "限行限载标志缺失限行限载标志缺失限行限载标志缺失限行限载标志缺失限行限载标志缺失"
        },
        { label: "隐患备注", value: "" },
        { label: "隐患照片", value: "" }
      ],
      step2form: {
        hazardType: "",
        specialist: "",
        specialistInput: { rows: 2 },
        opinion: "",
        shouldInstalled: { Meter: "", Piece: "" },
        governDepart: "",
        governLimit: "",
        funds: "",
        remarks: ""
      },
      step5form: {
        hazardType: "",
        departs: "交通局、艾城镇政府",
        situation: "无明显指示标志。来往车辆过多，易发送交通事故，建议整改措施：建议设立十字路口标牌，减速带，警示灯。",
        measure:"增设警示牌",
        files:""
      },
      departs: [
        {
          depardId: 1,
          depardName: "县公安交管大队",
          selected: [],
          children: [
            { id: 101, name: "张三", position: "这里显示职称" },
            { id: 102, name: "李四", position: "来玩的" },
            { id: 103, name: "王五", position: "打酱油的" }
          ]
        },
        {
          depardId: 2,
          depardName: "县交通运输局",
          selected: [],
          children: [
            { id: 104, name: "赵贺", position: "这里显示职称" },
            { id: 105, name: "唐涛", position: "来玩的" },
            { id: 106, name: "张政", position: "打酱油的" }
          ]
        }
      ]
    };
  },
  watch: {
    // checkers() {
    //   let arr = [];
    //   this.departs.forEach(e => {
    //     arr = arr.concat(e.selected);
    //   });
    //   this.form.checkers = arr;
    //   return arr;
    // }
  },
  computed: {
    vfinished() {
      return this.vactiveStep > 4;
    },
    hazardTypes() {
      let origin =
        "安全防护设施缺失、标志标线缺失、标志标线不合理、视距不良、急弯、其它";
      let arr = [];
      origin.split("、").forEach((e, i) => {
        arr.push({ id: i + 1, name: e });
      });
      return arr;
    },
    selectedSpecialist() {
      let string = "";
      let arr = [];
      this.departs.forEach(e => {
        arr = arr.concat(e.selected);
        e.selected.forEach(e => {
          string += e.name + "  " + e.position + "\n";
        });
      });
      // eslint-disable-next-line
      this.step2form.specialistInput.rows = arr.length === 0 ? 2 : arr.length;
      string = string.slice(0, string.length - 1);
      return string;
    },
    step5formRoadAddress(){
        return this.step1[6].value + this.step1[7].value
    },
    step5formAcceptor(){
      return "2/3"
    }
  },
  methods: {
    vhandleNext() {
      this.vactiveStep++;
    },
    vhandlePrev() {
      this.vactiveStep--;
    },
    vreset() {
      this.vactiveStep = 0;
    },
    openFullscreenDialog() {
      this.openFullscreen = true;
    },
    closeFullscreenDialog() {
      this.openFullscreen = false;
    },
    checkAll(selected) {
      return selected.length > 0;
    },
    handleCheckAll(list) {
      list.selected.length === list.children.length
        ? (list.selected = [])
        : (list.selected = Array.from(list.children));
    },
    alert(){
      this.$message.alert('仍有验收人未确认', '提示');
    }
  },
  mounted() {
    // 默认步骤 调试用
    this.vactiveStep = 0;
  }
};
</script>

<style lang="less" scoped>
.sublabel {
  color: #9e9e9e;
  font-weight: normal;
  margin-left: 1rem;
}
.mu-step-content {
  padding-left: 0;
}
.info {
  .mu-item-title {
    color: #757575;
    padding-left: 6px;
    .text {
      float: right;
      color: #000;
    }
  }
  .multi-text {
    display: block;
    // background-color: aqua;
    padding: 0 16px 8px 21px;
  }
}
.nextBtn {
  margin: 8px auto;
  margin-left: 21px;
}
.form {
  // margin-left: 21px;
  padding-left: 21px;
}

// 选择对话框
.selectedSpecialists,
.selectedChechers {
  span {
    display: inline-block;
  }
  .name {
    width: 5rem;
  }
  // .position {
  // }
  .delete,.confirm {
    float: right;
  }
}

.mu-item__open .toggle-icon {
  transform: rotate(180deg);
}
.toggle-icon {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
