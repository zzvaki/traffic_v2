<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <mu-container>
    <!-- 弹框 banners -->

    <!-- 今日通知 -->
    <notice-today/>

    <!-- 通知通报 -->
    <!-- emptyItem 目的让flex元素第二行左对齐 -->
    <card-box title="通知通报">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'Notification', query: {noticeType: 1}}"
          title="警情通报"
          src="./img/home-icon-1-1.png"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'Notification', query: {noticeType: 2}}"
          title="紧急通知"
          src="./img/home-icon-1-2.png"
          isNew
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'Notification', query: {noticeType: 3}}"
          title="文件指示"
          src="./img/home-icon-1-3.png"
          isNew
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'Notification', query: {noticeType: 4}}"
          title="会议通知"
          src="./img/home-icon-1-4.png"
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 重点企业、车、人信息 -->
    <card-box title="重点企业、车、人信息">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'InformationSearch', query: {pageType: 1}}"
          title="重点企业"
          src="./img/home-icon-2-1.png"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'InformationSearch', query: {pageType: 2}}"
          title="重点车辆"
          src="./img/home-icon-2-2.png"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'InformationSearch', query: {pageType: 3}}"
          title="重点驾驶员"
          src="./img/home-icon-2-3.png"
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 基础信息查询 -->
    <!-- <card-box title="基础信息查询">
      <div class="searchBox">
        <mu-form :model="searchForm" class="mu-demo-form">
          <mu-form-item prop="keyworld">
            <mu-text-field
              v-model="searchForm.keyworld"
              prop="keyworld"
              full-width
              placeholder="请输入车牌号、企业名称或驾驶证号进行查询"
            ></mu-text-field>
          </mu-form-item>
          <div class="searchBtn">
            <mu-button color="primary">查询</mu-button>
          </div>
        </mu-form>
      </div>
    </card-box>-->

    <!-- 安全生产检查 -->
    <card-box title="安全生产检查">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'ExaminationCreate', query:{pageType:1}}"
          src="./img/home-icon-3-1.png"
          title="重点企业检查"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'ExaminationCreate', query:{pageType:2}}"
          src="./img/home-icon-3-2.png"
          title="联合检查"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'ExaminationList'}"
          src="./img/home-icon-3-3.png"
          title="工作台账"
          isNew
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 道路交通安全隐患 -->
    <card-box title="道路交通安全隐患">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'RoadhazardCreate'}"
          src="./img/home-icon-4-1.png"
          title="上报隐患"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'RoadhazardHazardList'}"
          src="./img/home-icon-4-2.png"
          title="未处理隐患"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'RoadhazardCheckList'}"
          src="./img/home-icon-4-3.png"
          title="联合验收"
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 交通安全宣传劝导 -->
    <card-box title="交通安全宣传劝导">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'PersuasionAdd1'}"
          src="./img/home-icon-5-1.png"
          title="交通安全宣传"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'PersuasionAdd2'}"
          src="./img/home-icon-5-2.png"
          title="交通安全劝导"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'Persuasion'}"
          src="./img/home-icon-5-3.png"
          title="工作台账"
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 事故倒查 -->
    <card-box title="事故倒查">
      <div class="flex noselect">
        <card-box-link routerLink="/" src="./img/home-icon-6-1.png" title="事故信息录入"></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>

    <!-- 工作统计 -->
    <card-box title="工作统计">
      <div class="flex noselect">
        <card-box-link
          :routerLink="{name: 'Statistics'}"
          src="./img/home-icon-7-1.png"
          title="乡镇两站两员"
        ></card-box-link>
        <card-box-link
          :routerLink="{name: 'Statistics'}"
          src="./img/home-icon-7-2.png"
          title="委员会成员单位"
        ></card-box-link>
        <div class="emptyItem"></div>
      </div>
    </card-box>
  </mu-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CardBox from "@/components/CardBox.vue";
import CardBoxLink from "@/components/CardBoxLink.vue";
import NoticeToday from "@/components/NoticeToday.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
    CardBox,
    CardBoxLink,
    NoticeToday
  },
  data() {
    return {
      searchForm: {
        keyworld: ""
      }
    };
  },
  mounted: function() {
    // console.log(this);
    // document.querySelector("body").style.backgroundColor = '#eee'
  }
};
</script>

<style lang="less" scoped>
.flex {
  margin: 8px 16px;
  // margin-top: 8px;
  // margin-left: 16px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: space-between;
}
// .flex:after {
//   // content: "";
//   // flex: auto;
// }
.emptyItem {
  width: 100px;
  height: 0;
  margin-right: 16px;
  margin-bottom: 8px;
}

// 基础信息查询
.searchBox {
  margin: 16px;
  justify-content: center;
  .mu-form-item {
    margin-right: auto;
    margin-bottom: auto;
  }
  .searchBtn {
    display: flex;
    justify-content: center;
    .mu-button {
      width: 60%;
      margin-bottom: 16px;
      letter-spacing: 0.5rem;
    }
  }
}
</style>
