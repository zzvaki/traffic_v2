<template>
  <div>
    <mu-tabs :value.sync="actived" inverse color="primary" indicator-color="primary" full-width>
      <mu-tab>我发起的（{{ list1.length }}）</mu-tab>
      <mu-tab>我参与的（{{ list2.length }}）</mu-tab>
    </mu-tabs>
    <div class="content" v-if="actived === 0">
      <mu-container>
        <mu-card v-for="item in list1" :key="item.id" @click="$router.push({ name:'RoadhazardDetail'})">
          <mu-card-title :title="item.name" :sub-title="item.time"></mu-card-title>

          <mu-card-header title="验收人："></mu-card-header>
          <div style="margin-top: -39px;">
            <mu-card-header
              :title="name.name"
              :sub-title="name.position"
              v-for="name in item.checkers"
              :key="name.name"
              class="checker"
            ></mu-card-header>
          </div>
          <mu-card-text></mu-card-text>
        </mu-card>
      </mu-container>
    </div>
    <div class="content" v-if="actived === 1">

      <mu-container>
        <mu-card v-for="item in list2" :key="item.id" @click="$router.push({ name:'RoadhazardDetail'})">
          <mu-card-title :title="item.name" :sub-title="item.time"></mu-card-title>

          <mu-card-header title="验收人："></mu-card-header>
          <div style="margin-top: -39px;">
            <mu-card-header
              :title="name.name"
              :sub-title="name.position"
              v-for="name in item.checkers"
              :key="name.name"
              class="checker"
            ></mu-card-header>
          </div>
          <mu-card-text></mu-card-text>
        </mu-card>
      </mu-container>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: 0,
      list: [
        {
          id: 1,
          name: "永修县105国道K1625+800潭溪凤凰小学路段",
          checkers: [
            { name: "廖晓军", position: "县自然资源局副局长" },
            { name: "涂文峰", position: "二支队二大队副大队长" },
            { name: "梁文彪", position: "稽查大队大队长" }
          ],
          time: "2019年2月15日 15:30",
          createByMe: true,
          involved: true
        },
        {
          id: 2,
          name: "艾城接到-西井村",
          checkers: [
            { name: "廖晓军", position: "县自然资源局副局长" },
            { name: "涂文峰", position: "二支队二大队副大队长" },
            { name: "梁文彪", position: "稽查大队大队长" }
          ],
          time: "2019年2月15日 15:30",
          createByMe: true,
          involved: false
        },
        {
          id: 3,
          name: "夏家组到105国道公路",
          checkers: [
            { name: "廖晓军", position: "县自然资源局副局长" },
            { name: "涂文峰", position: "二支队二大队副大队长" },
            { name: "梁文彪", position: "稽查大队大队长" }
          ],
          time: "2019年2月15日 15:30",
          createByMe: false,
          involved: true
        },
        {
          id: 4,
          name: "102国道中间路段",
          checkers: [
            { name: "廖晓军", position: "县自然资源局副局长" },
            { name: "涂文峰", position: "二支队二大队副大队长" },
            { name: "梁文彪", position: "稽查大队大队长" }
          ],
          time: "2019年2月15日 15:30",
          createByMe: false,
          involved: true
        },
        {
          id: 5,
          name: "测试测试这条应该不会出现",
          checkers: [
            { name: "廖晓军", position: "县自然资源局副局长" },
            { name: "涂文峰", position: "二支队二大队副大队长" },
            { name: "梁文彪", position: "稽查大队大队长" }
          ],
          time: "2019年2月15日 15:30",
          createByMe: false,
          involved: false
        }
      ]
    };
  },
  computed: {
    list1() {
      return this.list.filter(e => e.createByMe);
    },
    list2() {
      return this.list.filter(e => e.involved);
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
  .checker {
    margin-left: 4rem;
  }
  .img {
    height: 175px;
    object-fit: cover;
  }
}
.mu-step-label {
  flex-direction: column;
  height: auto;
  padding: 0;
  width: 100px;
}
</style>
