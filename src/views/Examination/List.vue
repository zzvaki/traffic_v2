<template>
  <div>
    <mu-tabs :value.sync="actived" inverse color="primary" indicator-color="primary" full-width>
      <mu-tab>重点企业检查</mu-tab>
      <mu-tab>联合检查</mu-tab>
    </mu-tabs>
    <div class="content" v-if="actived === 0">
      <div class="item" v-for="item in list1" :key="'a'+item.id">
        <mu-list dense>
          <mu-list-item>
            <mu-list-item-title>
              <span class="label">企业名称</span>
              <span class="text">{{ item.name }}</span>
              <span class="complete">{{ item.complete?"已反馈":"未反馈" }}</span>
            </mu-list-item-title>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item>
            <mu-list-item-title>
              <span class="label">整改意见</span>
            </mu-list-item-title>
          </mu-list-item>
          <span class="opinion">{{ item.opinion }}</span>
          <img src="img/done.png" alt class="completeIcon" v-if="item.complete">
          <mu-divider></mu-divider>
          <mu-list-item>
            <mu-list-item-title>
              <span class="label">检查时间</span>
              <span class="text">{{ item.time }}</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <div class="content" v-if="actived === 1">
      <mu-card v-for="item in list2" :key="'b'+item.id">
        <mu-card-title :title="item.title" :sub-title="item.time"></mu-card-title>
        <!-- <mu-card-media sub-title="幼儿园">
          <img :src="item.img" class="img">
        </mu-card-media> -->
        <mu-card-header :title="'发起人：'+item.organizer.name" :sub-title="item.organizer.position"></mu-card-header>
        <mu-card-header
          :title="'检查人：'+name.name"
          :sub-title="name.position"
          v-for="name in item.checkers"
          :key="name.name"
        ></mu-card-header>
          <img src="img/done.png" alt class="completeIcon" v-if="item.complete">
      </mu-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: 0,
      list1: [
        {
          id: 1,
          name: "三角乡春田花花幼儿园",
          opinion: "这是一段测试长文本的文字，用来撑开可能的大块内容。",
          time: "2019年3月24日 14点19分",
          complete: false
        },
        {
          id: 2,
          name: "三角乡春田花花幼儿园",
          opinion: "这是一段测试长文本的文字，用来撑开可能的大块内容。",
          time: "2019年3月24日 14点19分",
          complete: true
        },
        {
          id: 3,
          name: "三角乡春田花花幼儿园",
          opinion: "这是一段测试长文本的文字，用来撑开可能的大块内容。",
          time: "2019年3月24日 14点19分",
          complete: true
        }
      ],
      list2: [
        {
          id: 1,
          title: "三角乡春田花花幼儿园",
          img: "/upload/nursery-1.jpg",
          organizer: {
            name: "廖晓军",
            position: "县自然资源局副局长"
          },
          checkers: [
            { name: "涂文峰", position: "省高警总队二支队二大队副大队长" },
            { name: "梁文彪", position: "县时间据稽查大队大队长" }
          ],
          time: "2019年3月24日 14点19分",
          complete: false
        },
        {
          id: 2,
          title: "新世纪幼儿园",
          img: "/upload/nursery-2.jpg",
          organizer: {
            name: "廖晓军",
            position: "县自然资源局副局长"
          },
          checkers: [
            { name: "涂文峰", position: "省高警总队二支队二大队副大队长" },
            { name: "梁文彪", position: "县时间据稽查大队大队长" }
          ],
          time: "2019年3月24日 14点19分",
          complete: true
        },
        {
          id: 3,
          title: "白莲幼儿园",
          img: "/upload/nursery-3.jpg",
          organizer: {
            name: "廖晓军",
            position: "县自然资源局副局长"
          },
          checkers: [
            { name: "涂文峰", position: "省高警总队二支队二大队副大队长" },
            { name: "梁文彪", position: "县时间据稽查大队大队长" }
          ],
          time: "2019年3月24日 14点19分",
          complete: true
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.item {
  background-color: white;
  margin: 8px auto;
  span {
    display: inline-block;
  }
  .label {
    width: 5rem;
  }
  .opinion {
    display: block;
    margin: -28px 4rem 8px 6rem;
  }
  .complete {
    float: right;
    color: #616161;
  }
  .completeIcon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: absolute;
    z-index: 100;
    right: 12px;
    bottom: 48px;
  }
}
.mu-card {
  margin: 16px auto;
  width: 100%;
  max-width: 375px;
  .mu-card-header {
    padding: 8px 16px;
  }
  .img{
    height: 175px;
    object-fit: cover;
  }
  .completeIcon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: absolute;
    z-index: 100;
    right: 16px;
    bottom: 16px;
  }
}
</style>
