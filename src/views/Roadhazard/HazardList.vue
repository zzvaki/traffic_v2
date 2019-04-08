<template>
  <div>
    <mu-tabs :value.sync="actived" inverse color="primary" indicator-color="primary" full-width>
      <mu-tab>处理中（{{ list1.length }}）</mu-tab>
      <mu-tab>已完成（{{ list2.length }}）</mu-tab>
    </mu-tabs>
    <div class="content" v-show="actived == 0">
      <mu-container>
        <mu-card v-for="item in list1" :key="item.id" @click="$router.push({ name:'RoadhazardDetail'})">
          <mu-card-media>
            <img :src="item.img" class="img">
          </mu-card-media>
          <mu-card-title :title="item.name" :sub-title="item.section"></mu-card-title>
          <mu-card-header :title="'当前阶段：第'+ item.step + '步 - ' + roadhazardStep(item.step).name"></mu-card-header>
        </mu-card>
      </mu-container>
    </div>
    <div class="content" v-show="actived == 1">
    <mu-container>
      <mu-card v-for="item in list2" :key="item.id" @click="$router.push({ name:'RoadhazardDetail'})">
        <mu-card-media>
          <img :src="item.img" class="img">
        </mu-card-media>
        <mu-card-title :title="item.name" :sub-title="item.section"></mu-card-title>
        <mu-card-header :title="'当前阶段：第'+ item.step + '步 - ' + roadhazardStep(item.step).name"></mu-card-header>
      </mu-card>
    </mu-container>
    </div>
  </div>
</template>

<script>
import { roadhazardStep } from "@/assets/util.js";

export default {
  data() {
    return {
      actived: 0,
      roadhazardStep,
      list: [
        {
          id: 1,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 1,
          img: "upload/hazard-1.jpg"
        },
        {
          id: 2,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 2,
          img: "upload/hazard-2.jpg"
        },
        {
          id: 3,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 3,
          img: "upload/hazard-3.jpg"
        },
        {
          id: 4,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 4,
          img: "upload/hazard-1.jpg"
        },
        {
          id: 5,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 5,
          img: "upload/hazard-1.jpg"
        },
        {
          id: 6,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 6,
          img: "upload/hazard-1.jpg"
        },
        {
          id: 7,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 6,
          img: "upload/hazard-1.jpg"
        },
        {
          id: 8,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          section: "105国道",
          step: 6,
          img: "upload/hazard-1.jpg"
        }
      ]
    };
  },
  computed: {
    list1() {
      return this.list.filter(e => e.step != 6);
    },
    list2() {
      return this.list.filter(e => e.step == 6);
    }
  }
};
</script>

<style lang="less" scoped>
.mu-card {
  margin: 16px auto;
  width: 100%;
  // max-width: 375px;
  .mu-card-header {
    padding: 8px 16px;
  }
  .img {
    height: 175px;
    object-fit: cover;
  }
}
// .mu-step-label {
//   flex-direction: column;
//   height: auto;
//   padding: 0;
//   width: 100px;
// }
</style>

<style lang="less">
.mu-tabs-inverse{
    background-color: white;
}
</style>
