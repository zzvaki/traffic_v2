<template>
  <mu-container>
    <mu-form :model="form" class="whiteBox">
      <mu-flex class="flex-wrapper" justify-content="between" align-items="baseline">
        <mu-date-input
          class="dateInput"
          v-model="dateStart"
          label="开始时间"
          label-float
          container="dialog"
          actions
        ></mu-date-input>
        <span class="zhi">至</span>
        <mu-date-input
          class="dateInput"
          v-model="dateEnd"
          label="结束时间"
          label-float
          container="dialog"
          actions
        ></mu-date-input>
      </mu-flex>

      <mu-button color="primary" full-width>查询</mu-button>
    </mu-form>
    <card-box title="2月工作统计" dense class="card">
      <div class="group" v-for="(item,key,index) in 工作统计" :key="index" :class="{rang1: index == 0,rang2: index == 1,rang3: index == 2}">
        <span class="title">
          <img src="img/rank2.png" alt="" v-if="index === 1">
          <img src="img/rank1.png" alt="" v-if="index === 0">
          <img src="img/rank3.png" alt="" v-if="index === 2">
          <!-- {{ index > 2 ? index + 1 + ". " + key : key }} -->
          {{ key }}
        </span>
        <mu-flex justify-content="between">
          <mu-flex
            class="item"
            justify-content="center"
            align-items="center"
            direction="column"
            v-for="(p,i) in item"
            :key="i"
          >
            <span class="score">{{ p }}</span>
            <span class="text">{{ project[i] }}</span>
          </mu-flex>
        </mu-flex>
      </div>
    </card-box>
  </mu-container>
</template>

<script>
import CardBox from "@/components/CardBox.vue";

export default {
  components: { CardBox },
  data() {
    return {
      form:{},
      dateStart: "",
      dateEnd: "",
      工作统计: {
        图图镇: [12, 3, 9, 6, 10],
        永丰垦殖场: [12, 3, 9, 6, 10],
        艾城镇: [12, 3, 9, 6, 10],
        八角岭垦殖场: [12, 3, 9, 6, 10],
        潭溪镇: [12, 3, 9, 6, 10],
        三溪桥镇: [12, 3, 9, 6, 10],
        柳树湾: [12, 3, 9, 6, 10]
      },
      project: ["组织会议", "安全检查", "上报隐患", "安全劝导", "安全宣传"]
    };
  }
};
</script>

<style lang="less" scoped>
.whiteBox{
  padding: 0 16px 16px;
}
// .dateInput {
//   /* width: 120px; */
// }
.zhi {
  padding: 0 16px;
}
.card {
  margin: 16px -8px;
  .group {
    padding: 8px 16px;
    margin-bottom: 8px;
    background-color: #eceff1;
    color: #607d8b;
    .title {
      color: #212121;
      border-bottom: 1px solid white;
      display: block;
      padding-bottom: 6px;
      img{
        height: 20px;
        width: 15px;
        object-fit: contain;
        margin-right: 6px;
      }
    }
    .item {
      padding: 8px 0;
      .score {
        font-size: 20px;
      }
      .text {
        color: #212121;
      }
    }
    &.rang1{
      background-color: #fce4ec;
      color: #e91e63;
    }
    &.rang2{
    background-color: #e3f2fd;
    color: #2196f3;
    }
    &.rang3{
      background-color: #e8f5e9;
      color: #4caf50;
    }
  }
}
</style>
