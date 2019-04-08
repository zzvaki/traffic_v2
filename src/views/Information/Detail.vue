<template>
  <mu-container>
    <!-- 今日通知 -->
    <notice-today />

      <mu-sub-header>
        <h3>基本信息</h3>
      </mu-sub-header>
    <mu-list class="whiteBox">
      <div v-for="(basicInfor, index) in basicInfors" :key="basicInfor.label">
        <mu-list-item :ripple="false">
          <mu-list-item-title>
            {{ basicInfor.label }}
            <span style="float:right;color:#757575;">{{ basicInfor.value }}</span>
          </mu-list-item-title>
        </mu-list-item>
        <mu-divider v-if="index !== basicInfors.length-1"></mu-divider>
      </div>
    </mu-list>

    <mu-sub-header>
      <h3>车辆信息</h3>
    </mu-sub-header>
    <mu-list toggle-nested  class="whiteBox">
      <div v-for="(vehicleInfo,index) in vehicleInfos" :key="vehicleInfo['车牌号']">
        <mu-list-item
          button
          :ripple="false"
          nested
          :open="open === vehicleInfo['车牌号']"
          @toggle-nested="open = arguments[0] ? vehicleInfo['车牌号'] : ''"
        >
          <mu-list-item-action>
            <mu-icon value="directions_car"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{ vehicleInfo["车牌号"] }}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>

          <mu-list-item slot="nested" v-for="(text,key,i) in vehicleInfo" :key="i" class="adDivider">
            <mu-list-item-title>
              {{ key }}
              <mu-tooltip
                :content="text"
                tooltip-class="tooltip"
                placement="bottom-end"
                v-if="!/^\d+$/.test(text[0]) && text.length > 10"
              >
                <span style="float:right;color:#757575;">{{ text.slice(0, 11) + "..." }}</span>
              </mu-tooltip>
              <span style="float:right;color:#757575;" v-else>{{ text }}</span>
            </mu-list-item-title>
          </mu-list-item>
          
        </mu-list-item>
        <mu-divider v-if="index !== vehicleInfos.length-1"></mu-divider>
      </div>
    </mu-list>
  </mu-container>
</template>

<script>
import NoticeToday from "@/components/NoticeToday.vue";

export default {
  components: {NoticeToday},
  data() {
    return {
      open: 0,
      basicInfors: [
        { label: "行政区划", value: "淮安市" },
        { label: "企业类型", value: "学校" },
        { label: "企业名称", value: "永修县小蓓蕾幼儿园" },
        { label: "企业地址", value: "永修县杨新村" },
        { label: "法人代表", value: "赵贺" },
        { label: "法人代表电话", value: "18088707636" },
        { label: "安全责任人", value: "赵贺" },
        { label: "安全责任人电话", value: "18088707636" },
        { label: "监管责任人", value: "赵贺" },
        { label: "监管责任人电话", value: "18088707636" }
      ],
      vehicleInfosList: [
        [
          { label: "车牌号", value: "赣G5E908" },
          { label: "车辆类别", value: "大型货车" },
          { label: "使用性质", value: "货运" },
          { label: "车声颜色", value: "蓝" },
          { label: "车辆所有人", value: "永修县托林旅游汽车服务有限公司" },
          { label: "联系电话", value: "18088707636" },
          { label: "检验有效期止", value: "2019-12-12" },
          { label: "强制有效期止", value: "2019-12-12" },
          { label: "车辆驾驶人", value: "赵贺" },
          { label: "驾驶证号", value: "18088707636" },
          { label: "准驾车型", value: "2019-12-12" },
          { label: "驾驶期限", value: "2019-12-12" }
        ]
      ],
      vehicleInfos: [
        {
          车牌号: "赣G5E908",
          车辆类别: "大型货车",
          使用性质: "货运",
          车声颜色: "蓝",
          车辆所有人: "永修县托林旅游汽车服务有限公司",
          联系电话: "18088707636",
          检验有效期止: "2019-12-30",
          强制有效期止: "2029-12-30",
          车辆驾驶人: "赵贺",
          驾驶人联系电话: "18088707636",
          驾驶证号: "230184559671",
          准驾车型: "180123546854",
          驾驶期限: "2019-12-12"
        },
        {
          车牌号: "赣G5E909",
          车辆类别: "大型货车",
          使用性质: "货运",
          车声颜色: "蓝",
          车辆所有人: "永修县托林旅游汽车服务有限公司",
          联系电话: "18088707636",
          检验有效期止: "2019-12-30",
          强制有效期止: "2029-12-30",
          车辆驾驶人: "赵贺",
          驾驶人联系电话: "18088707636",
          驾驶证号: "230184559671",
          准驾车型: "180123546854",
          驾驶期限: "2019-12-12"
        },
        {
          车牌号: "赣G5E910",
          车辆类别: "大型货车",
          使用性质: "货运",
          车声颜色: "蓝",
          车辆所有人: "永修县托林旅游汽车服务有限公司",
          联系电话: "18088707636",
          检验有效期止: "2019-12-30",
          强制有效期止: "2029-12-30",
          车辆驾驶人: "赵贺",
          驾驶人联系电话: "18088707636",
          驾驶证号: "230184559671",
          准驾车型: "180123546854",
          驾驶期限: "2019-12-12"
        }
      ]
    };
  },
  mounted() {
    this.open = this.vehicleInfos[0]["车牌号"];
  },
  methods: {
  },
  computed: {}
};
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  text-align: center;
}
.mu-item__open .toggle-icon {
  transform: rotate(180deg);
}
.toggle-icon {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.adDivider{
    border-bottom: 1px solid rgba(0,0,0,.12)
}
.adDivider:last-child{
  border:none;
}
</style>

<style lang="less">
.tooltip {
  // margin-right: 16px;
  font-size: 18px;
  white-space: nowrap;
}
</style>

