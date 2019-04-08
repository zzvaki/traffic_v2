<template>
  <mu-container>
    <mu-form ref="form" :model="form" class="whiteBox" style="padding: 16px">
      <mu-form-item label="选择企业" prop="enterprise" :rules="ruleRequired" label-float full-width>
        <mu-select filterable v-model="form.enterprise">
          <mu-option
            v-for="enterprise in enterprises"
            :key="enterprise.id"
            :label="enterprise.name"
            :value="enterprise"
          ></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item
        label="选择检查人"
        prop="checkers"
        :rules="ruleRequired"
        label-float
        full-width
        v-if="$route.query.pageType==2"
      >
        <mu-text-field @click="openFullscreenDialog" 
        v-model="form.checkers" prop="checkers"></mu-text-field>
      </mu-form-item>
    </mu-form>
    <!-- 签收按钮 -->
    <mu-flex justify-content="center" align-items="center">
      <mu-button color="primary" class="bottom-btn-fixed" @click="submit">发起检查</mu-button>
    </mu-flex>

    <!-- 选择检查人 对话框 -->
    <mu-dialog transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="primary" title="选择检查人">
        <mu-button slot="right" flat @click="closeFullscreenDialog">完成</mu-button>
      </mu-appbar>
      <div style="padding: 16px 0;">
        <card-box title="已选人员（3）" dense>
          <mu-list dense class="selectedChechers">
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">廖小军</span>
                <span class="position">县自然资源局副局长</span>
                <span class="delete">
                  <mu-icon value="delete_outline" size="18"></mu-icon>
                </span>
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item>
              <mu-list-item-title>
                <span class="name">五个字的名</span>
                <span class="position">测试最长名字测试最长名字</span>
                <span class="delete">
                  <mu-icon value="delete_outline" size="18"></mu-icon>
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
      //表单验证规则
      ruleRequired: [{ validate: val => !!val, message: "必填项目" }],
      openFullscreen: false,
      form: {
        checkers: "",
        enterprise: ""
      },
      enterprises: [
        { id: 1, name: "江西扶风西海汽车运输有限公司" },
        { id: 2, name: "江西星火金盏实业有限公司" },
        { id: 3, name: "江西千里之旅汽车运输有限公司" },
        { id: 4, name: "测试搜索一" },
        { id: 5, name: "测试搜索二" },
        { id: 6, name: "测试搜索三" },
        { id: 7, name: "测试搜索一A" },
        { id: 8, name: "测试搜索一B" },
        { id: 9, name: "测试搜索一C" },
        { id: 10, name: "测试搜索二A" }
      ],
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
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        // console.log("form valid: ", result);
        if(result){
          this.$router.replace({name: 'ExaminationCreateForm'})
        }
      });
    },
    openFullscreenDialog() {
      this.openFullscreen = true;
    },
    closeFullscreenDialog() {
      this.openFullscreen = false;
      let str = ""
      this.selectedCheckers.forEach(e=>{
        str += e.name + "，";
      })
      this.form.checkers = str.slice(0, str.length - 1)
      this.$refs.form.validate()
    },
    checkAll(selected) {
      return selected.length > 0;
    },
    handleCheckAll(list) {
      list.selected.length === list.children.length
        ? (list.selected = [])
        : (list.selected = Array.from(list.children));
    }
  },
  computed: {
    selectedCheckers() {
      let arr = [];
      this.departs.forEach(e => {
        arr = arr.concat(e.selected)
      });
      return arr
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
// .container{
//   background-color: white;
//   padding-bottom: 8px;
// }
.selectedChechers {
  span {
    display: inline-block;
  }
  .name {
    width: 5rem;
  }
  // .position {
  // }
  .delete {
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
